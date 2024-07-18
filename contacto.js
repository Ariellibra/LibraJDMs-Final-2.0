function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() == '' || email.trim() == '' || mensaje.trim() == '') {
      alert('Por favor, complete todos los campos.');
      return false;
    }

    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, introduzca una dirección de correo electrónico válida.');
      return false;
    }

    // Si todo está bien, se puede enviar el formulario
    alert('¡Formulario enviado con éxito!');
    return true;
  }