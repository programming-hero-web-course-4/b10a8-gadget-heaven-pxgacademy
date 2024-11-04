export default loadData = () => {
  fetch("./products.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};


