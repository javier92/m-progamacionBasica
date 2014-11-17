#Curso de progamación Basica - Mejorandola
![Logo-mejorandola](https://static.mejorando.la/static/images/platzi-assets/mejorandola.4989d32d633d.jpg)
![mejorandola](http://static.mejorando.la/media/courses/basica.jpg)


###Tareas

* Piedra, Papel, Tijeras
    * Lagarto y Spock
    * Interfas Grafica
* Busca Mina
* Datos Pokemón
* Canvas
    * Dibujar lineas de canvas en diagonal
    * Rellenar el cirulo de canvas


>Es una buena practica para asegurarnos de qe no estamos matando a nadie</br> 
_--- Jonh Freddy Vega_



1. ciclos 

### Ciclos

son usados para ejecutar un bloque de codigo repetidas veces

**while**
``` javascript
    while(condicion){
        //haz algo
    }
```

el ciclo while se ejecuta un codigo mientras la condicióon que se le da sea verdadera, si no se modifica la condicion mediante un elemento interador u otro modod se crea un ciclo infinito que peta el navegador

**Ciclo for**

``` javascript
    for(i==0; i<10; i++){
        //haz algo
    }
```

ejecuta un codigo mientras la condicon sea verdadera
se compone de tres elementos

* Variable de inicialización, 
* Condicion,
* Elemento iterador

### Dibujar con Canvas

canvas usa un sistema e cordenaa x,
se dibuja en el contexto

**.getContext("2d");**
``` javascript
.getContext("2d");
```
_por ahora soloexiste el contexto 2d(x, y)_

**moveTo(x,y);+**
``` javascript
.moveTo(x,y);
```
mueve el "lapiz" al punto donde se empieza a dibujar

**lineTo**
``` javascript
.lineTo(x,y);
```
dibuja una linea de x hacia y

**.strokeStyle**
``` javascript
.strokeStyle = color en hexadecimal;
```
define el estilo del trazo

**.stroke();**
``` javascript
.stroke();
```
genera el trazo

**.beginPath**
``` javascript
beginPath();
```
te permite creanr un nuevo trazo

**.closePath**
``` javascript
.closePath
```
cierra el trazo 


**.arc**
``` javascript
.arc(center x, center y, radio,radianes)
```
dibuja un arco necesita 5 argumentos

1. centro del circulo x,
2. centro del circulo y,
3. el radio del circulo,
4. os radianes

pi seria la mitad de un circulo, pi*2 seria el circulo completo

Dibuja un arco 

### Document

**.getelementById()**

``` javascript
    document.getelementById();
```
función del objeto ducumento que permite capturar un elemento del dom por su id


**.innerText()**
``` javascript
    .innerText();
```

Permite insertar texto entro e un elemento del dom

**.addEventListener()**
``` javascript
    .addEventListener("evento",funcion);
```

añade a un lemento un evento que dispara una funcion, lleva dos parametros primero un evento valido de javascript( click, ) y segundo la funcion a ejecutar