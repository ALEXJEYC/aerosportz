
      // Variables globales
      var cart = [];
      var cartTotal = 0;
  
      // Función para abrir el modal del carrito
      function openCartModal() {
        // Actualizar los elementos del carrito en el modal
        updateCartModal();
        
        // Mostrar el modal
        var modal = document.getElementById("cartModal");
        modal.style.display = "block";
      }
  
      // Función para cerrar el modal del carrito
      function closeCartModal() {
        var modal = document.getElementById("cartModal");
        modal.style.display = "none";
      }
  
      // Función para agregar un producto al carrito
      function addToCart(itemName, itemPrice) {
        cart.push({ name: itemName, price: itemPrice });
        cartTotal += itemPrice;
        updateCartModal();
      }
  
      // Función para vaciar el carrito
      function clearCart() {
        cart = [];
        cartTotal = 0;
        updateCartModal();
      }
  
      // Función para comprar los productos del carrito
      function buyProducts() {
        // Aquí puedes agregar la lógica para procesar la compra de los productos del carrito
        // Por ejemplo, puedes enviar los datos del carrito al servidor o mostrar un mensaje de confirmación
        
        // Después de la compra, vaciar el carrito
        clearCart();
      }
  
      // Función para actualizar los elementos del carrito en el modal
      function updateCartModal() {
        var cartItemsElement = document.getElementById("cartItems");
        var cartTotalElement = document.getElementById("cartTotal");
        
        // Limpiar los elementos del carrito existentes
        cartItemsElement.innerHTML = "";
        
        // Agregar los nuevos elementos del carrito
        for (var i = 0; i < cart.length; i++) {
          var cartItem = cart[i];
          var li = document.createElement("li");
          li.textContent = cartItem.name + " - $" + cartItem.price.toFixed(3);
          cartItemsElement.appendChild(li);
        }
        
        // Actualizar el total del carrito
        cartTotalElement.textContent = "$" + cartTotal.toFixed(3);
      }