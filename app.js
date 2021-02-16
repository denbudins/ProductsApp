const addButton = document.getElementById("addProduct");
const removeButton = document.getElementById("removeAllProduct");
var products = new Array();

addButton.addEventListener("click", () => {
  const newProduct = document.getElementById("productName");
  const list = document.getElementById("listOfProduct");
  var listOfProduct = "";

  products.push(newProduct.value);
  products.forEach((product) => {
    listOfProduct += `<li>${product}</li>`;
  });
  list.innerHTML = listOfProduct;
  document.getElementById(
    "numberOfProducts"
  ).innerText = `Number of products: ${products.length}`;
  newProduct.value = "";
});

removeButton.addEventListener("click", () => {
  var r = confirm(
    "Are you sure that you want to remove all products from list?"
  );
  const list = document.getElementById("listOfProduct");
  if (r == true) {
    products = [];
    list.innerHTML = "";
    document.getElementById(
      "numberOfProducts"
    ).innerText = `Number of products: ${products.length}`;
  }
});
