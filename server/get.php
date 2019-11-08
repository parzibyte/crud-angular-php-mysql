<?php
/*

    Programado por Luis Cabrera Benito 
  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
    
    Blog:       https://parzibyte.me/blog
    Ayuda:      https://parzibyte.me/blog/contrataciones-ayuda/
    Contacto:   https://parzibyte.me/blog/contacto/
*/ ?>
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idMascota"])) {
    exit("No hay id de mascota");
}
$idMascota = $_GET["idMascota"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select id, nombre, raza, edad from mascotas where id = ?");
$sentencia->execute([$idMascota]);
$mascota = $sentencia->fetchObject();
echo json_encode($mascota);
