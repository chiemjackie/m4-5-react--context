import { useState, useEffect } from "react";

function usePersistedState(initialValue, key) {
  const [storedValue, setStoredValue] = useState(() => {
    return window.localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key))
      : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setStoredValue];
}

export default usePersistedState;
