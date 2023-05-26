<?php
// Reemplaza la dirección de correo electrónico con la que deseas recibir los mensajes del formulario.
$to = "fersoria02@gmail.com";
$subject = "Mensaje del formulario de contacto";

// Obtén los datos del formulario.
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// Construye el mensaje.
$body = "Nombre: $name\n\nEmail: $email\n\nMensaje:\n$message";

// Envía el mensaje.
mail($to, $subject, $body);

// Redirecciona al usuario a una página de confirmación.
header("Location: https://ejemplo.com/confirmacion.html");
?>
