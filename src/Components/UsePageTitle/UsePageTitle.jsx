import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UsePageTitle = (title) => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = title || location.pathname.split('/').pop().replace('-', ' ');
    document.title = `${pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)} - Discount Pro`;
  }, [location, title]);
};

export default UsePageTitle;
