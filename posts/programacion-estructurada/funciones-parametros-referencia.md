---
title: "Funciones con parámetros por referencia y arreglos"
subtitle: "Parámetros por referencia en C: Modificación directa de variables en funciones." 
keywords: "funciones, parámetros por referencia, arreglos, lenguaje C"
date: "25/04/2022"
---

En el lenguaje de programación C, las funciones pueden recibir parámetros por valor o por referencia. Cuando se pasan parámetros por referencia, se permite que la función modifique directamente el valor de la variable original que se le pasa como argumento. Esto es especialmente útil cuando se trabaja con arreglos, ya que se puede modificar su contenido de manera eficiente.

## Pasando parámetros por referencia

En C, los parámetros se pasan por referencia utilizando punteros. Un puntero es una variable que almacena la dirección de memoria de otra variable. Al pasar un puntero como argumento a una función, se puede acceder y modificar el valor de la variable original.

Para definir una función con parámetros por referencia, se utiliza el operador `*` para indicar que se trata de un puntero. Por ejemplo:

```c
void incrementar(int *num) {
    (*num)++;
}
```

En este ejemplo, la función `incrementar` recibe un puntero `num` que apunta a un entero. Al utilizar el operador `*` dentro de la función, se accede al valor de la variable original y se le incrementa en 1.

## Trabajando con arreglos

Los arreglos son estructuras de datos fundamentales en C y a menudo se pasan como parámetros a las funciones. Al utilizar punteros, se puede modificar el contenido de un arreglo directamente en una función.

```c
void duplicarElementos(int *arr, int tam) {
    for (int i = 0; i < tam; i++) {
        arr[i] *= 2;
    }
}
```

En este ejemplo, la función `duplicarElementos` recibe un puntero `arr` que apunta al primer elemento de un arreglo de enteros, y el tamaño del arreglo `tam`. Dentro de la función, se itera sobre los elementos del arreglo y se duplica su valor multiplicándolo por 2.

## Ventajas de las funciones con parámetros por referencia y arreglos

El uso de funciones con parámetros por referencia y arreglos en C proporciona varias ventajas:

- Permite modificar directamente los valores de las variables originales, evitando tener que devolver valores mediante el uso de `return`.
- Facilita la manipulación de arreglos y estructuras de datos complejas, ya que se pueden modificar sus elementos eficientemente.
- Permite ahorrar memoria, ya que no es necesario hacer copias de los datos al pasarlos como argumentos.

### Ejercicios

Hacer un programa en el cual se desarrollen las siguientes funciones que reciben parámetros por
valor y parámetros por referencia:
	void capturar(int edades[], char nombres[][30], int \*x);
	 void mostrar(int edades[], char nombres[][30], int x);
	 void ordenar(int edades[], char nombres[][30], int x);
	 void promedio(int edades[], int x, float \*prom);
	 void mayor_y_menor(int edades[], char nombres[][30], int x, char \*mayor, char \*menor);
El programa deberá mostrar un menú con 6 opciones:
	a. Capturar
	b. Mostrar
	c. Ordenar
	d. Promedio
	e. Mayor y menor
	f. Salir

- No se puede seleccionar las opciones b a la e si no se ha capturado datos.
- En la función capturar() se pedirán los datos para una persona, dentro de la función se le preguntará al usuario si desea continuar capturando, como máximo se podrán capturar 50 personas, y el parámetro puntero x devolverá el número de datos capturados en los arreglos.
- Se ordenará por edades.
- El promedio se refiere al promedio de edades de las personas capturadas.
- Para mayor y menor se regresará el nombre de las personas de mayor edad y el de menor edad.

```c
  
#include <stdio.h>
#include <string.h>
#include <ctype.h>

void capturar(int edades[], char nombres[][30], int *x);
void mostrar(int edades[], char nombres[][30], int x);
void ordenar(int edades[], char nombres[][30], int x);
void promedio(int edades[], int x, float *prom);
void mayor_y_menor(int edades[], char nombres[][30], int x, char *mayor, char *menor);

int main(void)
{
    int edades[50], x = 0;
    char nombres[50][30], opc, mayor, menor;
    float prom = 0;

    do
    {
        printf("MENU DE OPCIONES\n");
        printf("\ta) Capturar\n");
        printf("\tb) Mostrar\n");
        printf("\tc) Ordenar\n");
        printf("\td) Promedio\n");
        printf("\te) Mayor y menor\n");
        printf("\tf) Salir\n");
        printf("La opcion es: ");
        fflush(stdin);
        scanf("%c", &opc);

        switch (tolower(opc))
        {
        case 'a':
            capturar(edades, nombres, &x);
            break;
        case 'b':
            mostrar(edades, nombres, x);
            break;
        case 'c':
            ordenar(edades, nombres, x);
            break;
        case 'd':
            promedio(edades, x, &prom);
            break;
        case 'e':
            mayor_y_menor(edades, nombres, x, &mayor, &menor);
            break;
        case 'f':
            puts("\nGracias por usar el programa ===>");
            break;
        default:
            puts("\nError, opcion no valida, elija otra...");
            break;
        }
        printf("\n");
    } while (opc != 'f');

    return 0;
}

void capturar(int edades[], char nombres[][30], int *x)
{
    char confirmacion;
    int bandera, sumaEdades = 0;

    if (*x > 50)
    {
        puts("Los arreglos estan llenos\n");
    }
    else
    {
        do
        {
            printf("\nIngresa tu nombre: ");
            scanf("%s", nombres[*x]);
            printf("Ingresa tu edad: ");
            scanf("%d", &edades[*x]);
            fflush(stdin);
            (*x)++;
            printf("\n%cDesea capturar mas datos? [s][n]: ", 168);
            scanf("%c", &confirmacion);
            if (tolower(confirmacion) != 's' && tolower(confirmacion) != 'n')
            {
                puts("\nOpcion no valida...");
                printf("\n%cDesea capturar mas datos? [s][n]: ", 168);
                scanf("%c", &confirmacion);
            }
            
        } while (tolower(confirmacion) != 'n');
    }
}

void mostrar(int edades[], char nombres[][30], int x){
    int i;
    for (i = 0; i < x; i++)
    {
        printf("\n----------------------------");
        printf("\nNombre: %s", nombres[i]);
        printf("\nEdad: %d", edades[i]);
        printf("\n----------------------------");
    }
    printf("\n");
}
    
void ordenar(int edades[], char nombres[][30], int x){
    int i, e, auxEdad;
    char auxNom[30];

    for (i = 1; i < x; i++)
    {
        for (e = 0; e < x - i; e++)
        {
            if (edades[e] > edades[e + 1])
            {
                auxEdad = edades[e];
                edades[e] = edades[e + 1];
                edades[e + 1] = auxEdad;

                strcpy(auxNom, nombres[e]);
                strcpy(nombres[e], nombres[e + 1]);
                strcpy(nombres[e + 1], auxNom);
            }
        }
    }
    printf("\nDatos ordenados...\n");
}

void promedio(int edades[], int x, float *prom){
    int i;
    *prom = 0;
    for (i = 0; i < x; i++)
    {
        *prom += edades[i];
    }
    *prom /= x;

    printf("\nEl promedio de edades es: %.2f\n", *prom);
}

void mayor_y_menor(int edades[], char nombres[][30], int x, char *mayor, char *menor){
    
    int i, mayorEdad = 0, menorEdad = 0;

    for (i = 0; i < x; i++)
    {
        if (edades[i] > mayorEdad)
        {
            mayorEdad = edades[i];
            strcpy(mayor, nombres[i]);
        }
        if (edades[i] < menorEdad)
        {
            menorEdad = edades[i];
            strcpy(menor, nombres[i]);
        }
    }

    printf("\nEl mayor es: %s con %d a%cos", mayor, mayorEdad, 164);
    printf("\nEl menor es: %s con %d a%cos\n", menor, menorEdad, 164);
}
```

## Conclusiones

En conclusión, las funciones con parámetros por referencia y el manejo de arreglos en C son herramientas poderosas para la programación eficiente. Al utilizar punteros y trabajar directamente con las variables originales, se pueden modificar valores y manipular arreglos de forma más flexible y eficaz. Estas técnicas son fundamentales para el desarrollo de programas más estructurados y funcionales en C.