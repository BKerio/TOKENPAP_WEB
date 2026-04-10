import { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Mock searchable content across the site
const searchData = [
  { title: "Home", path: "/", description: "Millenium EA Solutions Main Page", category: "Pages" },
  { title: "About Us", path: "/about", description: "Learn about Millenium Solutions, our history and mission.", category: "Pages" },
  { title: "Our Methodology", path: "/methodology", description: "How we deliver world-class IT solutions.", category: "Company" },
  { title: "Our Team Structure", path: "/teamstructure", description: "Meet the experts behind Millenium Solutions.", category: "Company" },
  
  // Solutions
  { title: "Custom Applications & Databases", path: "/applications", description: "Software development, web apps, and database solutions.", category: "Solutions" },
  { title: "Networking Solutions", path: "/networking", description: "Network infrastructure, routing, and connectivity services.", category: "Solutions" },
  { title: "Cyber Security & DLP", path: "/cybersecurity", description: "Protect your business with our security solutions.", category: "Solutions" },
  { title: "Enterprise Resource Planning", path: "/enterprisesolutions", description: "ERP systems implementation and support.", category: "Solutions" },
  { title: "Hardware & Software Infrastructure", path: "/infrastructure", description: "Complete IT infrastructure setup and maintenance.", category: "Solutions" },
  
  // Case Studies & Projects
  { title: "Featured Projects", path: "/projects", description: "View our portfolio of successful implementations.", category: "Projects" },
  { title: "KPA Case Study", path: "/casestudy1", description: "Kenya Ports Authority implementation details.", category: "Case Studies" },
  { title: "SRC Case Study", path: "/casestudy2", description: "Salaries and Remuneration Commission project.", category: "Case Studies" },
  
  // Ecosystem & Other
  { title: "ISO Certifications", path: "/isoCertification", description: "Our commitment to quality standards.", category: "Company" },
  { title: "Precision Drones", path: "/precision-drones", description: "Advanced drone technology solutions.", category: "Ecosystem" },
  { title: "SignVrse", path: "/signvrse", description: "Digital signing and verification platform.", category: "Ecosystem" },
  { title: "Contact Us", path: "/contact", description: "Get in touch with our team.", category: "Contact" },
];

export const SearchModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchData);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered);
  }, [query]);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  // Group results by category
  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof searchData>);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-24 pb-4 px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-4 border-b border-gray-200 dark:border-gray-800">
            <Search className="h-5 w-5 text-gray-500 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search modern solutions, pages, or case studies..."
              className="flex-1 bg-transparent border-none outline-none px-4 text-base text-gray-900 dark:text-gray-100 placeholder-gray-500"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            <button 
              onClick={onClose}
              className="ml-2 text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
            >
              ESC
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
            {query.trim() === '' ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <Search className="h-8 w-8 mx-auto mb-3 opacity-20" />
                <p className="text-sm">Start typing to search across the site...</p>
                
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {['Cyber Security', 'ERP', 'Networking', 'Drones'].map(term => (
                    <button 
                      key={term}
                      onClick={() => setQuery(term)}
                      className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-4 p-2">
                {Object.entries(groupedResults).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {items.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => handleSelect(item.path)}
                          className="w-full text-left flex items-start px-3 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 group transition-colors"
                        >
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg group-hover:bg-red-100 dark:group-hover:bg-red-900/40 transition-colors mr-3 mt-0.5">
                            <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                {item.title}
                              </h4>
                              <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-red-600" />
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <p className="text-sm">No results found for "{query}"</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SearchModal;
