// Función para validar el formulario antes de enviarlo
function validateForm() {
    // Obtener los valores de los campos del formulario
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    
    // Expresión regular para validar el formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expresión regular para validar el formato del número de teléfono (10 dígitos)
    var phoneRegex = /^\d{10}$/;
    
   // Verificar si algún campo está vacío, el formato de email es inválido, el número de teléfono es inválido o no se ha seleccionado el tipo de entrada
   if (fullname === '' || email === '' || phone === '' || ticket === 'Seleccionar') {
    // Mostrar un mensaje de alerta si algún campo está vacío o no válido
    alert('Por favor, complete todos los campos correctamente.');
    return false; // Evitar el envío del formulario
  } else if (!emailRegex.test(email)) {
    // Mostrar un mensaje de alerta si el formato de email es inválido
    alert('Por favor, ingrese un correo electrónico válido.');
    return false; // Evitar el envío del formulario
  } else if (!phoneRegex.test(phone)) {
    // Mostrar un mensaje de alerta si el formato del número de teléfono es inválido
    alert('Por favor, ingrese un número de teléfono válido (10 dígitos).');
    return false; // Evitar el envío del formulario
  } else {
    // Mostrar los detalles de la compra si los datos del formulario son válidos
    showPurchaseDetails();
    return false; // Evitar el envío del formulario real
  }
}
  
  // Función para mostrar los detalles de la compra
  function showPurchaseDetails() {
    // Obtener los valores de los campos del formulario
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var ticket = document.getElementById('ticket').value;
    
    // Obtener el elemento donde se mostrarán los detalles de la compra
    var purchaseDetails = document.getElementById('purchaseDetails');
    
    // Mostrar los detalles de la compra en el elemento correspondiente
    purchaseDetails.innerHTML = `
      <h2>Detalles de la Compra</h2>
      <p>Nombre: ${fullname}</p>
      <p>Correo Electrónico: ${email}</p>
      <p>Teléfono: ${phone}</p>
      <p>Tipo de Entrada: ${ticket}</p>
    `;
    
    // Reiniciar el formulario después de mostrar los detalles de la compra
    document.getElementById('registrationForm').reset();
    
    // Limpiar los detalles de la compra después de 30 segundos
    setTimeout(function() {
      purchaseDetails.innerHTML = ''; // Limpiar los detalles después de 30 segundos
    }, 30000);
  }
