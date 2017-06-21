i18next.init({
  lng: 'es',
  debug: true,
  resources: traducciones
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
  traducir(textos);
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});

var cambiarIdioma = function (e) {
  var idioma = e.target.id;
  i18next.changeLanguage(idioma);
}

var botonIdioma = document.querySelectorAll('.boton-idioma');
botonIdioma.forEach(function (boton) {
  boton.addEventListener('click', cambiarIdioma);
});

function traducir(textos) {
  textos.forEach(function (texto) {
    document.getElementById(texto.id).innerHTML = i18next.t(texto.key);
  })
}