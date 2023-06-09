const addProduct = () => {
    const productField = document.getElementById('input-product');
    const quantityField = document.getElementById('input-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    if( !product || !quantity ){
        addProduct();
    }
    displayProduct(product, quantity);
    saveProductToLocalStorage(product,quantity);

    // console.log(productField.value);
}
const displayProduct = (product,quantity) => {
    const ul = document.getElementById('product-list');
    const li = document.createElement('li');
    li.classList.add('fw-medium','p-2','fs-3','p-1');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);

}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringyfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringyfied);
    console.log(cartStringyfied);
}

const displayCartFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart) {
        const quantity = savedCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}

displayCartFromLocalStorage();

// utilities
//sakib
