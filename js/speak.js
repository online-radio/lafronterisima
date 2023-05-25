
      if (annyang) {
        var commands = {
         
          'write email *tag':function(variable){
              let emailadd = document.getElementById("emailadd");
              emailadd.value=variable.split(" ").join("");
            },
        
         'write message *tag':function(variable){
              let mymessage = document.getElementById("mymessage");
              uname.value=variable;
          },
		     
        annyang.addCommands(commands);

        annyang.start();
      }
     }
 