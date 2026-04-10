// src/lib/openai.ts
import OpenAI from 'openai';

// Access the environment variable exposed by Vite
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Add a check in case the key is not set
if (!OPENAI_API_KEY) {
  throw new Error(
    'OpenAI API key is not configured. Please set VITE_OPENAI_API_KEY in your .env file.'
  );
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // Use the key from the environment variable
  dangerouslyAllowBrowser: true,
});

// Define a custom type excluding function messages
type NonFunctionChatMessage = Extract<
  OpenAI.Chat.Completions.ChatCompletionMessageParam,
  { role: 'system' | 'user' | 'assistant' }
>;

interface ChatResponse {
  answer: string;
  suggestions: string[];
}


export const generateResponse = async (
  messages: { role: 'user' | 'assistant' | 'system'; content: string }[],
  pdfContent: string
): Promise<ChatResponse> => {
  try {
    const systemMessage: NonFunctionChatMessage = {
      role: 'system',
      content: `You are a helpful AI assistant with access to information about Millenium Solution.
Use this reference document to answer questions: ${pdfContent}

Guidelines:
1. For questions about Millenium Solutions, reference the document accurately
2. Keep responses concise and professional
3. Don't answer any question beside Millenium Solutions
4. Use markdown for formatting when helpful
5. If information isn't in the document, say so and provide general guidance or you can search the web
6. Focus on being helpful and accurate
7. After each response, suggest 3 relevant follow-up questions based on the context
8. Format your response as follows:
   - First, provide your answer
   - Then, add --- on a new line
   - Finally, list 3 suggested follow-up questions, one per line, starting with "•"`
    };

    const formattedMessages: NonFunctionChatMessage[] = [
      systemMessage,
      ...messages.map((msg) => ({
        role: msg.role as 'system' | 'user' | 'assistant',
        content: msg.content,
      })),
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: formattedMessages,
      temperature: 0.9,
      max_tokens: 1000,
    });

    const response = completion.choices[0].message.content || '';
    const [answer, suggestionsPart] = response.split('---').map((part) => part.trim());
    const suggestions = suggestionsPart
      ? suggestionsPart
          .split('\n')
          .map((line) => line.replace('•', '').trim())
          .filter(Boolean)
      : [];

    return {
      answer,
      suggestions: suggestions.length ? suggestions : generateDefaultSuggestions(),
    };
  } catch (error) {
    console.error('Error generating response:', error);
    // Re-throw or handle the error as appropriate
    throw error;
  }
};

function generateDefaultSuggestions(): string[] {
  return [
    "Tell Me More about Millenium Solution?",
    "Tell me about Hardware And Software infrastructure?",
    "Are there any other services about Millenium Solutions?",
    "What are the main services offered by Millenium Solutions?",
    "Where are they located and How can I contact them directly?"
  ];
}