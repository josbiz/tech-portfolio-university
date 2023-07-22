---
title: "Arreglos bidimensionales"
subtitle: "La eficacia de los arreglos bidimensionales en programas estructurados."
keywords: "arreglos bidimensionales, matrices, elementos, manipulación de información, programas estructurados, problemas de repetición"
date: "14/03/2022"
---

## Arreglos bidimensionales en C

Los arreglos bidimensionales, también conocidos como matrices, son una estructura de datos en el lenguaje de programación C que permite almacenar información de manera organizada en filas y columnas. Estas estructuras son fundamentales para manejar conjuntos de datos de manera eficiente y resolver problemas que involucran múltiples elementos del mismo tipo.

## Declaración de arreglos bidimensionales

En C, la declaración de un arreglo bidimensional se realiza especificando el tamaño de las filas y las columnas. Por ejemplo, para declarar una matriz de enteros de tamaño 3x3, se utiliza la siguiente sintaxis:

```c
int matriz[3][3];
```

Esta declaración crea una matriz con 3 filas y 3 columnas, inicializadas con valores por defecto. Cada elemento de la matriz se puede acceder mediante su posición utilizando los índices de fila y columna.

## Inicialización de arreglos bidimensionales

Los arreglos bidimensionales se pueden inicializar al momento de su declaración proporcionando los valores correspondientes. Por ejemplo:

```c
int matriz[2][2] = { {1, 2}, {3, 4} };
```

En este caso, se crea una matriz de 2x2 y se inicializa con los valores indicados. Es importante asegurarse de que la cantidad de elementos proporcionados coincida con el tamaño declarado de la matriz.

## Acceso a elementos de arreglos bidimensionales

Para acceder a un elemento específico de una matriz, se utilizan los índices de fila y columna correspondientes. Por ejemplo:

```c
int elemento = matriz[1][2];
```

En este caso, se accede al elemento en la segunda fila y tercera columna de la matriz. Los índices comienzan desde 0, por lo que el primer elemento se encuentra en la posición [0][0].

## Manipulación de arreglos bidimensionales

Los arreglos bidimensionales permiten realizar diversas operaciones de manipulación de datos. Es posible recorrer la matriz utilizando bucles anidados para acceder y procesar cada elemento de forma sistemática. Esto es especialmente útil al realizar cálculos matemáticos, realizar búsquedas, realizar ordenamientos, entre otros.

Además, es posible realizar operaciones de entrada y salida para leer y escribir los elementos de la matriz desde y hacia el usuario o archivos. Esto permite trabajar con conjuntos de datos más grandes y realizar tareas más complejas.

## Ventajas de los arreglos bidimensionales

El uso de arreglos bidimensionales en C ofrece varias ventajas significativas:

- Permite organizar datos relacionados de forma estructurada en filas y columnas.
- Facilita la manipulación y el procesamiento de grandes conjuntos de datos.
- Proporciona una forma eficiente de acceder a elementos individuales mediante el uso de índices de fila y columna.
- Permite resolver problemas que involucran datos de múltiples dimensiones de manera más intuitiva.

### Ejercicios

Hacer un programa para simular el funcionamiento de una máquina expendedora de golosinas para los siguientes productos con los siguientes precios:

```c
char nombreGolosina [4][4][20] = { 
	{“KitKat”, “Chicles de fresa”, ”Twix”, “Mantecadas Bimbo” }, 
	{“chicles de menta”, “M&M”, “Milky Way”, “Cheetos” }, 
	{“Doritos”, “Pastillas Halls”, “Donitas Bimbo”, “Carlos V”}, 
	{“Tostitos”, “Ruffles”, “Crunch”, “Snickers” } 
};

float precio[4][4] = { 
	{12.50, 3.00, 13.00, 15.50}, 
	{3.50, 20.00, 20.00, 17.50}, 
	{16.50, 8.00, 15.00, 9.50}, 
	{18.00, 19.00, 12.50, 18.00} 
};
```

Se requiere un menú con las siguientes opciones: 
- Pedir golosina: pedirá la posición de la golosina que quiera. Primero renglón y luego columna, por ejemplo 2 0 se refiere a la golosina “Doritos”. Cuando no haya golosina se le indica al usuario con el mensaje “producto agotado”. Cada que se elige una golosina se reduce la cantidad, y se registra como venta. 
- Mostrar golosina: pedirá la posición de la golosina que quiere y se mostrará que golosina es y el precio de ésta. 
- Mostrar golosinas: se mostrarán todas las golosinas disponibles, deberá mostrar el código que debe introducir el usuario, el nombre y el precio.
- Rellenar golosinas: se pedirá la posición de la golosina y la cantidad a rellenar como máximo podrá haber 10 de dicho producto en la máquina. 
- Apagar máquina: sale del programa, y al terminar mostrará la venta total durante la ejecución del programa. 
Notas: 
	- Tendrá una cantidad inicial de 5 productos para cada golosina. -Solo se pide una golosina a la vez. 
	- El usuario siempre trae el monto exacto cuando pide una golosina.

```c
#include <stdio.h>
#include <string.h>

int opc, ren, col, relleno;
float venta = 0.0;
char respuesta;
char nombreGolosina[4][4][20] = {
    {"KitKat", "Chicles de fresa", "Twix", "Mantecadas Bimbo"},
    {"Chicles de menta", "M&M", "Milky Way", "Cheetos"},
    {"Doritos", "Pastillas Halls", "Donitas Bimbo", "Carlos V"},
    {"Tostitos", "Ruffles", "Crunch", "Snickers"}};
float precio[4][4] = {
    {12.50, 3.00, 13.00, 15.50},
    {3.50, 20.00, 20.00, 17.50},
    {16.50, 8.00, 15.00, 9.50},
    {18.00, 19.00, 12.50, 18.00}};
int cantidad[4][4] = {
    {5, 5, 5, 5},
    {5, 5, 5, 5},
    {5, 5, 5, 5},
    {5, 5, 5, 5}};

int main()
{
    system("cls");
    printf("=== MAQUINA EXPENDEDORA ===\n");

    do
    {
        printf("Elija una opcion del menu: \n");
        printf("\t1. Comprar Golosina\n");
        printf("\t2. Mostrar Golosina\n");
        printf("\t3. Mostrar Golosinas Disponibles\n");
        printf("\t4. Rellenar Golosinas en la Maquina\n");
        printf("\t5. Apagar Maquina\n");
        printf("La opcion que elige es: ");
        scanf("%d", &opc);

        switch (opc)
        {
        case 1:
            printf("\nProductos\n\n");
            printf("KitKat [0 0] $12.50\t\tChicles de fresa [0 1] $03.00\tTwix [0 2] $13.00\t\tMantecadas Bimbo [0 3] $15.50\n");
            printf("Chicles de menta [1 0] $03.50\tM&M [1 1] $20.00\t\tMilky Way [1 2] $20.00\t\tCheetos [1 3] $17.50\n");
            printf("Doritos [2 0] $16.50\t\tPastillas Halls [2 1] $08.00\tDonitas Bimbo [2 2] $15.00\tCarlos V [2 3] $09.50\n");
            printf("Tostitos [3 0] $18.00\t\tRuffles [3 1] $19.00\t\tCrunch [3 2] $12.50\t\tSnickers [3 3] $18.00\n\n");
            do
            {
                printf("Introduzca la posicion de la golosina: ");
                scanf("%d %d", &ren, &col);
                if (ren > 3 || col > 3 || ren < 0 || col < 0)
                {
                    printf("Producto inexistente\n");
                }
                else
                {
                    if (cantidad[ren][col] == 0)
                    {
                        printf("Producto agotado\n");
                    }
                    else
                    {
                        cantidad[ren][col] = cantidad[ren][col] - 1;
                        venta = venta + precio[ren][col];
                    }
                    printf("%cDesea comprar otro producto? [s][n]: ", 168);
                    fflush(stdin);
                    scanf("%c", &respuesta);
                }
            } while (respuesta != 'n');
            printf("\n");
            break;
        case 2:
            printf("\nQue golosina quiere visualizar: ");
            scanf("%d %d", &ren, &col);
            if (ren > 3 || col > 3 || ren < 0 || col < 0)
            {
                printf("Producto inexistente\n");
            }
            else
            {
                printf("----------------------------------------\n");
                printf("Golosina: %s\n", nombreGolosina[ren][col]);
                printf("Precio: %.2f\n", precio[ren][col]);
                printf("----------------------------------------\n\n");
            }
            break;
        case 3:
            printf("\n");
            for (ren = 0; ren < 4; ren++)
            {
                for (col = 0; col < 4; col++)
                {
                    if (cantidad[ren][col] > 0)
                    {
                        printf("| %s [%d %d] $%.2f |\n", nombreGolosina[ren][col], ren, col, precio[ren][col]);
                    }
                }
            }
            printf("\n");
            break;
        case 4:
            printf("\n%cQue golosina desea rellenar?: ", 168);
            scanf("%d %d", &ren, &col);
            if (ren > 3 || col > 3 || ren < 0 || col < 0)
            {
                printf("Producto inexistente\n\n");
            }
            else
            {
                printf("Esta es la cantidad de producto: %d\n", cantidad[ren][col]);

                printf("%cCuanto introducira en la maquina?: ", 168);
                fflush(stdin);
                scanf("%d", &relleno);
                if (cantidad[ren][col] + relleno > 10)
                {
                    printf("La cantidad introducida excede la permitida\n");
                }
                else
                {
                    cantidad[ren][col] = cantidad[ren][col] + relleno;
                }
                printf("\n");
            }
            break;
        case 5:
            printf("\n-= La venta total es: $%.2f =-", venta);
            printf("\n-= Apagando la Maquina =-\n");
            break;
        default:
            printf("\nOpcion incorrecta, elija otra\n\n");
            break;
        }

    } while (opc != 5);

    return 0;
}
```

## Conclusiones

En conclusión, los arreglos bidimensionales en C son una herramienta poderosa para manejar y manipular información estructurada en filas y columnas. Su uso adecuado facilita la resolución de problemas complejos y mejora la eficiencia en el desarrollo de programas. Al comprender los conceptos básicos de los arreglos bidimensionales y practicar su manipulación, los programadores pueden aprovechar al máximo esta estructura de datos en el lenguaje C.