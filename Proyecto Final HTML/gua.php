<?php

    include("abr.php");
    

   
    $Email = $_POST['Correo'];


    $Fecha= date("Y-m-d H:i:s");
    
   
    $consulta = "INSERT INTO Proyecto(Correo, Fecha) VALUES ('$Email', '$Fecha')";

    if ($conexion->query($consulta) === TRUE){
        header("Location: index.html");
    } else{
        echo "Error: " . $consulta . "<br>". $conexion->error;
    }

    $conexion->close();

            
   
   
?>