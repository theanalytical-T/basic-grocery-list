const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const productInput = this.elements.product;
    const qtyInput = this.elements.qty;

    addGrocery(productInput.value, qtyInput.value);
    productInput.value = '';
    qtyInput.value = '';
});

const addGrocery = (productInput, qtyInput) => {
    const newGrocery = document.createElement('li');
    newGrocery.innerText = `${qtyInput} ${productInput}`;
    list.appendChild(newGrocery);
};

// const form = document.querySelector('form');
// const productContainer = document.querySelector('#list');

// form.addEventListener('submit', function (e) {
//     e.preventDefault(); // prevent form from submitting to the /nowhere page
//     const products = this.elements.product; //this refers to form
//     const quantity = this.elements.qty; // this refers to productContainer
//     addProduct(products.value, quantity.value); // want the addProduct to take the values
//     products.value = ''; //value defaults set to empty string
//     quantity.value = '';
// });
// // addProduct function will take product and quantity values
// const addProduct = (products, quantity) => {
//     // create li for product/qty
//     const newProduct = document.createElement('li'); //create a new li element
//     newProduct.innerText = `${quantity} ${products}`; //inner text of li will take values of function arguements
//     productContainer.appendChild(newProduct); // add the newProduct into the productContainer
// };