# elementTracker #
----------
Este plugin detecta cuando un elemento entra y sale de vista en un contenedor(viewport) determinado y permite ejecutar una funcion personalizada segun sea el caso.

## Parametros ##
- ***wrapper** (String) :* Contenedor de los elementos a trackear - [Default: window]
- ***currentClass** (String) :* Este parametro define el nombre de la clase que sera añadida al elemento actual en el viewport - [Default: active]  
- ***enter** (Function) :* Funcion que se ejecutara una vez el elemento este dentro del viewport. 
- ***leave** (Function) :* Funcion que se ejecutara cuando el elemento actual este fuera del viewport.  
- ***in** (Function) :* Funcion que se ejecutara cada vez que se haga scroll y el elemento este dentro del viewport.  

## Modo de uso ##
- Importar el plugin despues de importar la libreria jQuery.
```html
<script src="js/elementracker.min.js"></script>
```
- Seleccionar los elementos a seguir con jquery y llamar a la funcion elementracker.
```javascript
$('.items').elementracker(atributos);
```




