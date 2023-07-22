---
title: "Tópicos básicos del lenguaje  C"
subtitle: "Introducción al lenguaje C y estructura básica de un programa"
keywords: "lenguaje C, programación, estructura de programa, variables, declaraciones, funciones, instrucciones, printf, scanf"
date: "10/02/2022"
---

## Introducción al lenguaje C

El lenguaje C es un lenguaje de programación de propósito general que fue desarrollado por Dennis Ritchie en los años 70. Es un lenguaje ampliamente utilizado en el ámbito de la programación debido a su eficiencia, flexibilidad y capacidad para acceder directamente a las funcionalidades del sistema operativo. En este texto, exploraremos los conceptos básicos del lenguaje C.

### Estructura básica de un programa en C

Un programa en C consta de varias partes principales, incluyendo las bibliotecas, las declaraciones de variables, las funciones y las instrucciones. Aquí está una estructura básica de un programa en C:

```C
#include <stdio.h> 

int main() { 
	// Declaraciones de variables 
	// Instrucciones return 0;
}
```

- `#include <stdio.h>`: Esta línea incluye la biblioteca `stdio.h`, que contiene las funciones estándar de entrada y salida. Es necesario incluir esta biblioteca para utilizar la función `printf()` para imprimir mensajes en la pantalla.
- `int main() { ... }`: Esta es la función principal del programa. Todos los programas en C deben tener una función `main()`. El tipo de dato `int` indica que la función `main()` devuelve un entero. Las llaves `{ }` delimitan el bloque de código que forma parte de la función `main()`.
- `// Declaraciones de variables`: Aquí se pueden declarar variables que se utilizarán en el programa. Las variables son espacios en memoria reservados para almacenar valores.
- `// Instrucciones`: En esta sección se escriben las instrucciones que se ejecutarán en el programa. Las instrucciones son comandos que indican al programa qué hacer.
- `return 0;`: Esta instrucción indica que el programa ha finalizado correctamente. El valor `0` es devuelto al sistema operativo.

### Declaración de variables

En C, las variables deben ser declaradas antes de ser utilizadas. Una declaración de variable especifica su tipo y su nombre. Aquí hay algunos ejemplos de declaraciones de variables en C:

```c
int edad; 
float salario; 
char inicial;
```

En el ejemplo anterior, se declaran tres variables: `edad` de tipo entero, `salario` de tipo flotante y `inicial` de tipo carácter.

### Instrucciones básicas

Cuenta con una amplia variedad de instrucciones que se utilizan para realizar diferentes tareas. Algunas instrucciones básicas en C incluyen:

- `printf()`: Esta función se utiliza para imprimir mensajes en la pantalla. Aquí hay un ejemplo:

```c
printf("¡Hola, mundo!\n");
```

Este código imprimirá el mensaje "¡Hola, mundo!" en la pantalla.

- `scanf()`: Esta función se utiliza para leer la entrada del usuario desde el teclado. Aquí hay un ejemplo:

```c
int numero; 
printf("Ingrese un número: "); 
scanf("%d", &numero);
```

Este código solicitará al usuario que ingrese un número y lo almacenará en la variable `numero`.

Estos son solo algunos conceptos básicos del lenguaje C. El lenguaje ofrece muchas más características y funcionalidades, incluyendo estructuras de control, arreglos, punteros y más. Con un estudio más profundo, podrás aprovechar al máximo el poder y la flexibilidad del lenguaje C.