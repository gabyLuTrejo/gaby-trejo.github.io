i18next.init({
  lng: 'es',
  debug: true,
  resources: translations
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
  translate(texts);
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});

var lngChange = function (e) {
  var language = e.target.id;
  i18next.changeLanguage(language);
}

var selectLng = document.querySelectorAll('.changing-language');
selectLng.forEach(function (button) {
  button.addEventListener('click', lngChange);
});

function translate(texts) {
  texts.forEach(function (text) {
    document.getElementById(text.id).innerHTML = i18next.t(text.key);
  })
}