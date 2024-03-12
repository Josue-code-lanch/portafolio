document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');

    let cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const itemName = button.getAttribute('data-name');
        const itemPrice = parseFloat(button.getAttribute('data-price'));

        // Agrega el producto al carrito
        cartItems.push({ name: itemName, price: itemPrice });

        // Actualiza la lista del carrito
        updateCart();

        // Actualiza el total del carrito
        updateTotal();
    }

    function updateCart() {
        // Limpia la lista del carrito
        cartList.innerHTML = '';

        // Agrega cada elemento al carrito
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

            // Añade un botón "Eliminar" y un manejador de eventos al elemento de la lista
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => removeFromCart(index));

            listItem.appendChild(deleteButton);
            cartList.appendChild(listItem);
        });
    }

    function removeFromCart(index) {
        // Elimina el elemento del carrito según el índice
        cartItems.splice(index, 1);

        // Actualiza la lista del carrito y el total
        updateCart();
        updateTotal();
    }
    
    function updateTotal() {
        // Calcula el total del carrito
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);

        // Actualiza el elemento del total en el HTML
        cartTotal.textContent = total.toFixed(2);
    }
});