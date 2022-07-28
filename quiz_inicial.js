//1️⃣ Responde las siguientes preguntas en la sección de comentarios:
    //¿Qué es una variable y para qué sirve?
        //Una variable es un espacio de menoria donde se pueden almacenar datos que luego nos servirán interactuar con ellos.
    //¿Cuál es la diferencia entre declarar e inicializar una variable?
        //Declarar es la acción de crearla sin asignar datos. 
        //Inicializar es asignarle un valor de cualquiera de los tipos permitidos por JS.
    //¿Cuál es la diferencia entre sumar números y concatenar strings?
        //Sumar números es una operación aritmética, es decir, obtenemos un nuevo valor luego de la suma. Concatenar texto, se realiza con el operador suma, pero obtenemos los valores iniciales en un mismo string.
    //¿Cuál operador me permite sumar o concatenar?
        //El operador +
//2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
    //Nombre - String
    //Apellido - String
    //Nombre de usuario en Platzi - String
    //Edad - Number
    //Correo electrónico - String
    //Mayor de edad - Boolean
    //Dinero ahorrado - Number
    //Deudas - Number
//3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
    // let nombre = 'Gustavo'
    // let apellido = 'Gimenez'
    // let platziUsername = 'ggvstavo'
    // let edad = 35
    // let email = 'gustavofgimenez@gmail.com'
    // let mayorDeEdad = true;
    // let dineroAhorrado = 432
    // let deudas = 234
//4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
    // let nombreCompleto = `${nombre} ${apellido}`
    // let dineroReal = dineroAhorrado - deudas


//Funciones
//1️⃣ Responde las siguientes preguntas en la sección de comentarios:
    //¿Qué es una función?
        //Es una porción de código que sirve para resolver un problema o necesidad. Puede o no recibir parámetros y devolver un valor.
    //¿Cuándo me sirve usar una función en mi código?
        //Son muy utilizadas, siempre que deseo darle utilidad a las variables previamente detalladas seguramente deba utilizar una función, ya que le dan lógica al código.
    //¿Cuál es la diferencia entre parámetros y argumentos de una función?
        //Cuando se llama a una funcion, se incluye una lista de argumentos entre paréntesis inmediatamente después del nombre de la función. Cada argumento corresponde al parámetro en la misma posición de la lista. A diferencia de la definición de parámetros, los argumentos no tienen nombres. Cada argumento es una expresión, que puede contener cero o más variables, constantes y literales.

//2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
    //const nombre = "Juan David";
    //const lastname = "Castro Gallego";
    //const completeName = `${nombre} ${lastname}`;
    //const nickname = "juandc";

    //const frase = () => {
    //    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`)
    //}


//Condicionales
//1️⃣ Responde las siguientes preguntas en la sección de comentarios:
        //¿Qué es un condicional?
        //Es una estructura de lógica que se utiliza en programación para optar entre varias opciones.
        //¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
        //IF ELSE la más utilizada, si algo ocurre se ejecuta, sino devuelve el ELSE. se  puede anidar.
        //SWITCH cuando existen varias opciones a elegir, evalúa cada case, sino encuentra algún true, va a default y devuelve ese contenido.
        //¿Puedo combinar funciones y condicionales?
//2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

    /**    
    const tipoDeSuscripcion = "Basic";

    switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
    }

    if (tipoDeSuscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
    } else if (tipoDeSuscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } else if (tipoDeSuscripcion == "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
    */

//3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

    /**

    //💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

    const tipoDeSuscripcion = "Basic";
    const suscripciones = [{
            tipoDeSuscripcion: 'Free',
            mensaje: "Solo puedes tomar los cursos gratis"
        },{ 
            tipoDeSuscripcion: 'Basic',
            mensaje: "Puedes tomar casi todos los cursos de Platzi durante un mes"
        },{ 
            tipoDeSuscripcion: 'Expert',
            mensaje: "Puedes tomar casi todos los cursos de Platzi durante un año"
        },{ 
            tipoDeSuscripcion: 'ExpertPlus',
            mensaje: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    }]

    const resultado1 = suscripciones.find(suscripcion => suscripcion.tipoDeSuscripcion == tipoDeSuscripcion)
    const resultado2 = resultado1.tipoDeSuscripcion
    const mensajeAMostrar = resultado1.mensaje

    if(tipoDeSuscripcion == resultado2) {
        console.log(mensajeAMostrar);
    }
    //Para acceder a los valores, tenemos los siguientes métodos
    suscripciones.find(suscripcion => suscripcion.tipoDeSuscripcion == 'Basic')

    const resultado = suscripciones.find(suscrip => suscrip === tipoDeSuscripcion)
    while (tipoDeSuscripcion === resultado) {
        
    }
    console.log(resultado)
    */


//Ciclos
//1️⃣ Responde las siguientes preguntas en la sección de comentarios:
    //¿Qué es un ciclo?
        //Es una estructura lógica que recibe de parámetros: inicialización de una variable, parámetros para que se cumpla una condición, incremental. Mientras esa condición sea true, se ejecuta el contenido del ciclo.
    //¿Qué tipos de ciclos existen en JavaScript?
        //FOR
        //FOREACH
        //FOR IN
        //WHILE
        //DO WHILE
    //¿Qué es un ciclo infinito y por qué es un problema?
        //Se tilda el navegador porque no deja de iterar el bucle.
    //¿Puedo mezclar ciclos y condicionales?
        //Si, se pueden mezlcar.
//2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
    /** 
    for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    }

    let i = 0;
    while (i < 5) {
        console.log("El valor de i es: " + i);
        i++
    }

    for (let i = 10; i >= 2; i--) {
        console.log("El valor de i es: " + i);
    }

    let j = 10;
    while(j > 1) {
        console.log(`El valor de j es: ${j}`);
        j--;
    }
    */

//3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

    /** 
    const resultado = 4;
    while(true) {
    let userInput = prompt('¿Cuánto es 2 + 2?');
    if(userInput == resultado) {
        alert('Respuesta correcta');
        break;
    }
    if(userInput === null) {
        alert('Se presionó CANCEL');
        break;
    }
    }
    💡 Pista: puedes usar la función prompt de JavaScript.
    */

//Listas
//1️⃣ Responde las siguientes preguntas en la sección de comentarios:
    //¿Qué es un array?
        //Una colección de datos (strings, numbers, boolean, undefined)
    //¿Qué es un objeto?
        // Un objeto es una colleción de variables y funciones agrupadas de manera estructural.
        //Las Variables definidas, se las llaman Propiedades y a las Funciones, se las llaman Métodos.
    //¿Cuándo es mejor usar objetos o arrays?
    //¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
        //Si, es posible
//2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
    /**
    const firstItem = (unArray) => {
        console.log(unArray[0]);
    }
    */
//3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

    // const printingArray = function(unArray) {
    //     for (let index = 0; index < unArray.length; index++) {
    //         console.log(unArray[index]);
    //     }
    // }

//4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

    // const unArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const printingArray = unArray.forEach(function(elemento) {
    //     console.log(`Valor ${elemento}.`);
    // })