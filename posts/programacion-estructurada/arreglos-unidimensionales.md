---
title: "Manejo de cadenas de carateres"
subtitle: "Estructuras estáticas: Arreglos unidimensionales y su utilidad en el almacenamiento temporal de datos."
keywords: "Manejo de cadenas de caracteres, arreglos unidimensionales, vectores, programación en C"
date: "21/02/2022"
---

## Manejo de cadenas de caracteres en C

En el lenguaje de programación C, las cadenas de caracteres son un tipo de dato compuesto utilizado para almacenar secuencias de caracteres, como palabras o frases. Un arreglo de caracteres se utiliza para representar una cadena en C. El manejo adecuado de las cadenas de caracteres es esencial en la programación, ya que nos permite realizar diversas operaciones y manipulaciones de texto de manera eficiente.

### Declaración de cadenas de caracteres

Para declarar una cadena de caracteres en C, se utiliza la sintaxis de un arreglo de caracteres. Por ejemplo:

```c
char mensaje[50];
```

En este caso, se declara un arreglo llamado `mensaje` que puede almacenar hasta 50 caracteres. Es importante tener en cuenta que se debe reservar un espacio adicional para el caracter nulo (`'\0'`), que indica el final de la cadena.

### Inicialización de cadenas de caracteres

Una cadena de caracteres puede inicializarse al momento de su declaración. Por ejemplo:

```c
char saludo[] = "Hola, mundo!";
```

En este caso, se declara e inicializa la cadena `saludo` con el texto "Hola, mundo!". El compilador automáticamente asignará el tamaño necesario para almacenar la cadena, incluyendo el caracter nulo.

### Ejercicios

Elaborar los siguientes programas: 

1. Hacer un programa que lea un arreglo de enteros de 10 números, todos los números deberán ser primos, de no ser primo no se guardara en el arreglo, al terminar su llenado obtener lo siguiente: 
	a. Sumatoria de todos los números leídos 
	b. Mostrar los números leídos en el rango de 31 a 101 
	c. Mostrar los números que se guardaron en las posiciones impares del arreglo

```c
#include <stdio.h>
#include <stdlib.h>

int e;
int numeroprimo[10] = {0};
int numero;
int suma = 0;
int primo;
int divisores;
int contador = 0;

int main()
{

    system("cls");
    printf("-- Numeros Primos --\n\n");

    do
    {
        printf("Introduzca un numero: ");
        scanf("%d", &numero);

        if (numero != -1 && numero > 0)
        {
            primo = 0;
            divisores = 2;

            while (divisores < numero && primo != 1)
            {
                if (numero % divisores == 0)
                {
                    primo = 1;
                }
                divisores++;
            }
            if (primo == 0)
            {
                numeroprimo[contador] = numero;
                contador = contador + 1;
                suma = suma + numero;
            }
        }
    } while (contador != 10);

    printf("\nLa suma de todos los numeros primos que ingreso es: %d", suma);
    printf("\n\nEstos son los numeros entre el rango 31-101: \n");

    for (e = 0; e < 10; e++)
    {
        if (numeroprimo[e] >= 31 && numeroprimo[e] <= 101)
        {
            printf("%d ", numeroprimo[e]);
        }
    }
    printf("\n\n");
    for (e = 0; e < 10; e++)
    {
        if (e % 2 != 0)
        {
            printf("El numero %d lo guardaste en la posicion %d\n", numeroprimo[e], e + 1);
        }
    }

    return 0;
}
```

2. Hacer un programa para guardar 10 frases en un arreglo de cadenas de caracteres, las frases no deberán de ser mayor a 30 caracteres, al finalizar el llenado del arreglo deberá mostrar: 
	a. La frase más larga y en qué posición del arreglo se encuentra 
	b. Las frases en mayúsculas que se encuentran en las posiciones pares 
	c. Mostrar las frases en orden inverso al de su ingreso

```c
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

char frase[10][30];
int i;
int pos = 0;
int longfrase = 0;
char fraseLarga[30];
char fraseMayus[30];

int main()
{

    system("cls");

    for (i = 0; i < 10; i++)
    {
        printf("Escribe la frase ha ingresar (no mas de 30 caracteres): ");
        gets(frase[i]);

        if (strlen(frase[i]) > longfrase)
        {
            strcpy(fraseLarga, frase[i]);
            longfrase = strlen(frase[i]);
            pos = pos + 1;
        }
    }
    printf("\nLa frase mas larga es: '%s' y se encuentra en la posicion %d\n\n", fraseLarga, pos);

    printf("\nFrases en lugares pares en MAYUSCULAS: \n\n");
    for (i = 0; i < 10; i++)
    {
        if (i % 2 == 1)
        {
            strcpy(fraseMayus, frase[i]);
            strupr(fraseMayus);
            printf("%s\n", fraseMayus);
        }
    }

    printf("\n\nImprimiendo las frases en orden inverso: \n\n");
    for (i = 9; i >= 0; i--)
    {
        printf("%s\n", frase[i]);
    }

    return 0;
}
```

## Conclusiones

En conclusión, el manejo de cadenas de caracteres en el lenguaje C es esencial para trabajar con texto de manera eficiente en programas. A través de la declaración y la inicialización de cadenas, podemos almacenar y manipular secuencias de caracteres. Las funciones como `strlen()`, `strcpy()`, y `strcat()` nos permiten realizar operaciones básicas como obtener la longitud de una cadena, copiar cadenas y concatenar cadenas.

Además, hemos presentado dos ejercicios prácticos que involucran el manejo de cadenas y arreglos en C. En el primer programa, se solicita al usuario ingresar números primos en un arreglo, realizando diversas operaciones como la suma de los números primos ingresados y la muestra de los números en un rango específico, así como los números guardados en las posiciones impares del arreglo.

En el segundo programa, se pide al usuario ingresar 10 frases en un arreglo de cadenas de caracteres, realizando acciones como identificar la frase más larga y su posición en el arreglo, mostrar las frases en mayúsculas en las posiciones pares y mostrar las frases en orden inverso al de su ingreso.

El manejo adecuado de las cadenas de caracteres en C nos permite desarrollar programas más robustos y funcionales al poder manipular y operar con texto de manera eficiente. Es importante comprender y practicar estas técnicas para aprovechar al máximo el potencial del lenguaje C en el ámbito de la programación.