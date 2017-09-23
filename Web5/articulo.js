$(document).ready(() => {
  $.get('articulo.json', function(data) {
    $(".titulo").html(data.titulo);
    $(".main-text").html(data.descripcion);
    $(".subtitulo").html(data.subtitulo);
  });

  $(".btn.btn-primary").on('click', (e) => {
    e.preventDefault();
    var email = $('#emailInput').val();
    if (!email) {
      $('#emailInput').val("Competar e-mail aca");
    } else {
      $.post('articulo.php', {
          "email": email
        },
        function(data) {
          alert("Enviado");
        });
    }

  });
});
