<?php

    $conexion = new mysqli("localhost", "root", "", "escuela");
    if($conexion){
        echo "la gestion fue exitosa!!";
        header("Location: index.php");
    }else{
        echo "Fallo la gestion";
    }

?>