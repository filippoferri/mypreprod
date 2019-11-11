module.exports = `<!DOCTYPE html>

<html>
  <head>   
  <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
 <script>
 'use strict';

// !function () {
//   console.log('%cBenvenuto in WAVECODE - Stiamo assumendo, consulta la pagina Carriere dal menu', 'background:#000;color:white;padding:0.5em 1em;line-height:2');
// }();

// getCaptcha();

var URIs = {
  'contactus': '/api/web-messages',
  'candidacy': '/api/candidacies'
};

$(document).ready(function () {

  getCaptcha();

  $('form').submit(function(event) {
    event.preventDefault();

    var form = event.originalEvent.srcElement;
    $('form#' + form.id + ' .error').remove();

    switch(form.id) {
      case 'candidacy':
        var fd = new FormData();
        fd.append('file', $('input#curriculum')[0].files[0]);
        $.ajax('/api/curricula', {
          data: fd,
          type: 'POST',
          contentType: false,
          processData: false,
          error: function() {
            window.location.replace('/error.html');
          },
          success: function(response) {
            submitForm(form, {
              curriculum: response['@id']
            });
          }
        });
        break;

      default:
        submitForm(form);
        break;
    }
  });

});

function submitForm(form, extraData) {
  extraData = extraData || {};
  var payload = $(form).serializeArray().reduce(function (acc, item) {
    switch (item.name) {
      case 'privacy':
        acc[item.name] = item.value === '1';
        break;
      case 'personalData':
        acc[item.name] = item.value === '1';
        break;
      default:
        acc[item.name] = item.value;
        break;
    }
    return acc;
  }, {});
  Object.assign(payload, extraData);

  var url = URIs[form.id];
  $.ajax(url, {
    contentType: 'application/json',
    data: JSON.stringify(payload),
    dataType: 'json',
    processData: false,
    method: 'POST',
    error: function(response) {
      var violations = response.responseJSON.violations;
      $(violations).each((idx, error) => {
        $('form#' + form.id + ' [name="' + error.propertyPath + '"]').before($('<div class="error"></div>').text(error.message));
      });
      $('#captcha').click();
    },
    success: function(response) {
      window.location.replace('/success.html');
    }
  });
}

function getCaptcha() {
  var img = document.getElementById('captcha');

  if (img) {
    img.src = '/api/captcha?' + new Date().getTime();
    if (img.onclick == null) {
      img.onclick = function () {
        getCaptcha();
      }
    }
  }
}
 
</script> 

  </head>

  <body></body>
</html>`
