<?php

    include("abr.php");
    

   
    $email = $_POST['email'];


    $Fecha= date("Y-m-d H:i:s");
    
    if (isset($_POST['email'])){
        if (strlen($_POST['email']) >= 1) {
            $email = trim($_POST['email']);
            $consulta = "INSERT INTO Proyecto(Correo, Fecha) VALUES ('$email', '$Fecha'";
    
            $resultado = mysqli_query($conexion, $consulta);
    
            if($resultado){
                ?< 
                    <h3>Te Has inscrito correctamente</h3>
                <?php
            }  else{
                ?< 
                    <h3>Ha ocurrido un error</h3>
                <?php

            }
            else{
                ?< 
                <h3>Por favor complete los cambiso</h3>
            <?php
            }
    
        }
    }
   
   
?>