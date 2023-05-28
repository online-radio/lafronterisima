


        function mostrarSaludo(){

          fecha = new Date(); 
          hora = fecha.getHours();

           if(hora >= 0 && hora < 8){
            texto = "Sintonía Musical";
			
          }
          
  
           if(hora >= 8 && hora < 12){
            texto = "Variedad Ilimitada";
			
          }      
          
		   if(hora >= 12 && hora < 18){
            texto = "Tarde alternativa";
			
          }

          if(hora >= 18 && hora < 23){
            texto = "Impacto musical";
			
          }
	
	
          document.getElementById('txtsaludo').innerHTML = texto;

        }