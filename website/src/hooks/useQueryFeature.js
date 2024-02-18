import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useQueryFeature(featureName) {
  const location = useLocation();
  const parsed = useMemo(() => {
    return queryString.parse(location.search) || {};
  }, [location.search]);

  return !!parsed[featureName];
}
