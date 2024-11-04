const getFromLS = (keyName) => {
  const data = localStorage.getItem(keyName);
  if (data) return JSON.parse(data);
  return [];
};

const saveToLocalStorage = (items, keyName) => {
  const data = JSON.stringify(items);
  localStorage.setItem(keyName, data);
};

const setToLS = (items, keyName) => {
  const data = getFromLS(keyName);
  data.push(items);

  saveToLocalStorage(data, keyName);
};

//
//
const clearLS = (keyName) => localStorage.clear(keyName);

//
//

const clearFromLS = (item, keyName) => {
  const data = getFromLS(keyName);
  const newData = data.filter((id) => id != item);

  saveToLocalStorage(newData, keyName);
};

export { setToLS, getFromLS, clearLS, clearFromLS };
