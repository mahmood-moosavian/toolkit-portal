import axios from "axios";

class Products {
  constructor() {}

  async get() {
    try {
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(({ data }) => data.splice(0, 30));
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

const ProductsSingleton = (function () {
  let instance = null;
  function createInstance() {
    let products = new Products();
    return products;
  }

  return {
    getInstance: function () {
      if (instance === null) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export { ProductsSingleton };
