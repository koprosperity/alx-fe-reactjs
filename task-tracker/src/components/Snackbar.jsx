import { useEffect, useState } from 'react';
import useMessageStore from '../store/useMessageStore';

const Snackbar = () => {
  const { message, messageType, clearMessage } = useMessageStore();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => clearMessage(), 3000);
      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  if (!message) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded ${
        messageType === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white`}
    >
      {message}
    </div>
  );
};

export default Snackbar;