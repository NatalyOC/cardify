# Cardify


Cardify es un Plugin de Jquery liviano que te permite implementar un efecto hover a tus imágenes con estilo. Es fácil de usar con un diseño sencillo y se ajustará a tus necesidades, esto lo pueden usar desarrolladores y diseñadores.

## Integrantes

* Nataly Otero Celis.
*  Jessica Meza

## Herramientas

* Jquery.
* Bootstrap 4.0
* HTML5.
* CSS3.


## Instalación
1. Cargue la última biblioteca de jQuery (se recomienda una versión delgada) y el plugins jquery.cardify.js con su respectivo archivo css en el documento html.
2. Simplemente llame a la función principal del plugins en el elemento de destino y listo.

### Global (navegador)

```html
<link rel="stylesheet" href="css/jquery.cardify.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/jquery.cardify.js"></script>
```

## Uso

```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
    $('#container').cardify();
```
## Ejemplo

+ html
```html
 <div class="container-img">
    <img src="" alt="" class="">
    <img src="" alt="" class="">
 </div>
```

+ js
```js
$(document).ready(function() {
  $('#btn-plugins').on('click',function() {
    $('container-img').cardify();
  });  
});
```
***
***

### Planificacion

Semana 1 - Semana 3
24 Enero
- Formación de Equipo.
- Investigación sobre los casos para la elección del Reto.

26 Enero
- Hacer fork de reto propuesto, el reto elegido fue el 2 <Cardify>.
- Se coordino realizar versión para plugins.

28 Enero
- Creación de issues.
- Inicializando proyecto e implementando requisitos.
- Creación de versiones del plugins.

29 Enero
- Se subió a la rama master la implementación del Reto.

*** 
## Demo

#### A) Se visualiza las imágenes sin título.

![imagen1](public/assets/docs/sinPlugin.png)

#### B) Por medio del botón activamos el plugin, de la cual se visualiza cada imagen con su respectivo título al pasar el mouse por la imagen.

![imagen2](public/assets/docs/conPlugin.png)
