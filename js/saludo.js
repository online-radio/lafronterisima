
       function saludo(){
   
          fecha = new Date(); 
          hora = fecha.getHours();

           if(hora >= 0 && hora < 8){
            pSaludo.textContent = "Amanecer recargado";
			img.src="imagenes/dia.png";
          }
          
  
           if(hora >= 8 && hora < 12){
            pSaludo.textContent = "Mega populares";
			img.src="imagenes/microfono.png";
          }      
            
		   if(hora >= 12 && hora < 18){
            pSaludo.textContent = "La Revancha";
		    img.src="imagenes/tarde.png";
          }
		  
          if(hora >= 18 && hora < 24){
             pSaludo.textContent = "Anochecer musical";
		     img.src="imagenes/noche.png"; 
          }	  
       }

   var img = document.getElementById("tiempo");
   var pSaludo = document.getElementById("txtsaludo");
   setInterval(saludo,1000);

