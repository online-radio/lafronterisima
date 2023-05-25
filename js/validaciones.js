
function sendEmail(){
	Email.send({
	  securetoken: "854fb9ea-4903-4b63-84c4-a45a6e913347",
      Host : "smtp.elasticemail.com",
      Username : "osmellca@gmail",
      Password : "B09CBC285BAEF4741969E721B0F4D99601AF",
      To : 'oscarmel@hotmail.es',
      From : document.ElementById("email").value,
      Subject : "Message Page - La Fronterisima",
      Body : "Nombre: " + document.ElementById("names").value,
	        + "<br>Telefono: " + document.ElementById("phone").value,
			+ "<br>Email: " + document.ElementById("email").value,
		    + "<br>Mensaje: " + document.ElementById("mensaje").value,
     }).then(
     message => alert("Mensaje Enviado")
  );
}



