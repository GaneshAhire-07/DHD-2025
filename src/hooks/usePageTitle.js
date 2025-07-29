// src/hooks/usePageTitle.js
import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `DHD Group - ${title}`; // Prefix with "DHD Group - "

    return () => {
      document.title = prevTitle; // Revert to previous title on unmount (optional, but good practice)
    };
  }, [title]); // Rerun effect when the title changes
};

export default usePageTitle;