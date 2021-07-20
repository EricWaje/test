const btn = document.getElementById('submit');
const nombre = document.querySelector('.nombreCompleto');
const email = document.querySelector('.email');
const comentarios = document.querySelector('.textArea');

(function () {
  emailjs.init('user_hCqWm2f1dBjU8MxczFLo6');
})();

const sendEmail = (e) => {
  e.preventDefault();
  validarCampos();
};

const enviarForm = (nombre, comentarios) => {
  emailjs.send('service_h04lqaq', 'template_lftvgwp', {
    from_name: nombre,
    comentarios: comentarios,
  });
};

const validarCampos = () => {
  if (nombre.value === '' || email.value === '' || comentarios.value === '') {
    completarCampos();
  } else {
    enviarForm(nombre.value, comentarios.value);
    exito();
  }
};

const completarCampos = () => {
  swal({
    text: 'Todos los campos son requeridos',
    icon: 'warning',
    button: 'Cerrar',
  });
};

const exito = () => {
  swal({
    text: 'Formulario enviado con éxito!',
    icon: 'success',
    button: 'Cerrar',
  });
};

const error = () => {
  swal({
    text: 'El formulario no se pudo enviar',
    icon: 'error',
    button: 'Cerrar',
  });
};

const start = () => {
  btn.addEventListener('click', sendEmail);
};

window.onload = start;
