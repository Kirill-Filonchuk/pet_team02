export const useStorage = key => {
  const getFromStorage = () => {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : false;
    // return false;
  };

  const updateStorage = value => {
    localStorage.setItem(key, JSON.stringify(value));
    // console.log('update storage -> value', value);
  };

  const clearStorage = () => {
    localStorage.removeItem(key);
    // console.log('clear storage ');
    // console.log('values after clear', localStorage.getItem(key));
  };

  return { getFromStorage, updateStorage, clearStorage };
};
