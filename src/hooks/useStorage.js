export const useStorage = (key) => {
  const getFromStorage = () => {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : false;
  };

  const updateStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { getFromStorage, updateStorage };
};
