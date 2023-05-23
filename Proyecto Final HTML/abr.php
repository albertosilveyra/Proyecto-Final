<?php

    $conexion = new mysqli("localhost", "id19935081_alberto", "JtuwqjzkmAQJzE5R", "id19935081_escuela");
    if($conexion){
        echo "la gestion fue exitosa!!";
        header("Location: index.php");
    }else{
        echo "Fallo la gestion";
    }

?>