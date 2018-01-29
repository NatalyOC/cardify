# Plugin Cardify

## ¿De qué trata?

Es un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

***

## Flujo de trabajo

### 

## Instalación

### Global (navegador)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/jquery.cardify.js"></script>
```

## Uso

```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
$(document).ready(function() {
  $('#addPlugin').one('click', function() {
    $('#container').cardify();
  });
});
```

## Ejemplo del plugin

#### A) Se visualiza las imagenes sin titulo 

![imagen1](assets/docs/sinPlugin.png)

#### B) Por medio del botón activamos el plugin, de la cual se visualiza cada imagen con su respectivo título.

![imagen2](assets/docs/conPlugin.png)
