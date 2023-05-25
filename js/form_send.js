const evento = document.getElementById('button')
const enviarFormulario =() => {
        let Sender = document.getElementById('Sender').value;
        let Message = document.getElementById('Message').value;
        let numero= +573155276476;
var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20correo%20es%20${Sender}, Asunto:%20${Message}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)



$(function() {
  $('form').submit(function() {
    var form = $(this);

    $.ajax({
      type: form.attr('method'),
      url: form.attr('action'),
      data: form.serialize()
      
    }).done(function() {
      
        $('form')[0].reset();
               
    })
  });
});