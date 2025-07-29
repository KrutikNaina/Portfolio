// src/utils/useAnalytics.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-Y9YXFD1TLZ", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default useAnalytics;
