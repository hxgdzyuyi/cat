import useLocalStorage from "./useLocalStorage";
import isUndefined from "lodash/isUndefined";

function loadStoredValue(storedScope, key, initialValue) {
  const item = storedScope[key];

  return !isUndefined(item) ? item : initialValue;
}

export default (scope, key, initialValue) => {
  const [storedScope, setStoredScope] = useLocalStorage(scope, {});

  const value = loadStoredValue(storedScope, key, initialValue);
  const setValue = value => {
    let currentItem = window.localStorage.getItem(scope);
    currentItem = currentItem ? JSON.parse(currentItem) : storedScope;

    setStoredScope({
      ...currentItem,
      [key]: value
    });
  };
  return [value, setValue];
};
