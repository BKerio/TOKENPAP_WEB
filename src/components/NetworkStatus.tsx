import { useEffect } from 'react';
import { toast } from 'sonner';
import { Wifi, WifiOff } from 'lucide-react';

export const NetworkStatus = () => {
  useEffect(() => {
    const handleOnline = () => {
      toast.dismiss('offline-toast');
      toast.success('You are back online!', {
        id: 'online-toast',
        icon: <Wifi className="h-4 w-4 text-green-500" />,
        style: {
          border: '1px solid #22c55e',
          background: 'rgba(34, 197, 94, 0.1)',
          color: '#22c55e',
        },
      });
    };

    const handleOffline = () => {
      toast.dismiss('online-toast');
      toast.error('You are currently offline. Check your internet connection.', {
        id: 'offline-toast',
        icon: <WifiOff className="h-4 w-4 text-red-500" />,
        duration: Infinity, // Keep it visible until they are back online
        style: {
          border: '1px solid #ef4444',
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#ef4444',
        },
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial status on mount
    if (typeof window !== 'undefined' && !window.navigator.onLine) {
      handleOffline();
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return null;
};

export default NetworkStatus;
