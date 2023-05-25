<?php
require_once 'encuesta.php';
$pollObject = new Poll();
?>

<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>Género músical de tú agrado</title>

<link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>

  
<!-- Begin page content -->

  <div class="caja_encuesta">
    <div class="contenido_cajax"> 
      
      <h3>Seleccione su género músical favorito</h3>
      
      <div class="poll-container">
      
       <div "button-active"><a class="caja-link" href="votacion.php">Regresar</a> </div>
   
   
        <?php
            if (empty($_POST["submit"])) {
                $result = $pollObject->getCource();
                ?>
        <form method="POST" action="">
          <?php
                foreach ($result as $k => $v) {
                    ?>
          <div class='option-caja'>
            <input class='radio-input' type='radio' name='vote'
                    value='<?php echo $result[$k]["id"]; ?>' required />
            <?php echo $result[$k]["name"]; ?> </div>
          <?php }?>
          <input id="btnSubmit" type="submit" name="submit"
                value="Enviar" />
                
        </form>
        
       
        <?php
            } else {
				$subjectId=$_POST["vote"];
                $pollObject->addVote($subjectId);
                $result = $pollObject->getCourcewithVote();
                foreach ($result as $k => $v) {
                ?>
        <div class='poll'><?php echo $result[$k]["name"]; ?> <b><?php echo $result[$k]["vote_count"]; ?></b> votos </div>
        <?php }
            } ?>
      </div>
      
     
    </div>
  </div>
  

</body>
</html>