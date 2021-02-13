const addButton = document.getElementById("addProduct");
const removeButton = document.getElementById("removeAllProduct");
var products = new Array();

addButton.addEventListener("click", () => {
  const newProduct = document.getElementById("productName").value;
  const list = document.getElementById("listOfProduct");
  var listOfProduct = "";

  products.push(newProduct);
  products.forEach((product) => {
    listOfProduct += `<li>${product}</li>`;
  });
  list.innerHTML = listOfProduct;
  document.getElementById(
    "numberOfProducts"
  ).innerText = `Number of products: ${products.length}`;
});

removeButton.addEventListener("click", () => {
  const list = document.getElementById("listOfProduct");
  products = [];
  list.innerHTML = "";
  document.getElementById(
    "numberOfProducts"
  ).innerText = `Number of products: ${products.length}`;
});
