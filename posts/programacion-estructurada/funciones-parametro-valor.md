---
title: "Funciones con parámetros y que retornan valor"
subtitle: "Utilización de funciones predefinidas y definición de funciones de usuario."
keywords: "funciones con parámetros, funciones que retornan valor, funciones de usuario, programación en C"
date: "04/04/2022"
---

## Funciones

Una función en el lenguaje C es un fragmento de código que realiza una tarea específica. Además de las funciones predefinidas como `printf`, los programadores pueden definir sus propias funciones para adaptarse a sus necesidades. En este caso, nos centraremos en las funciones que reciben parámetros y devuelven un valor.

## Definición de funciones con parámetros

Una función con parámetros es aquella que recibe uno o más valores, conocidos como argumentos, para llevar a cabo su tarea. Estos argumentos se especifican en la declaración y definición de la función, y permiten que la función interactúe con los datos proporcionados por el programa.

La sintaxis básica para definir una función con parámetros en C es la siguiente:

```c
tipo_de_retorno nombre_de_la_funcion(tipo_parametro1 nombre_parametro1, tipo_parametro2 nombre_parametro2, ...)
{
    // Cuerpo de la función
    // Realizar operaciones con los parámetros
    // Devolver un valor si es necesario
}
```

Los parámetros se declaran especificando su tipo y nombre. Dentro del cuerpo de la función, se pueden utilizar los parámetros como variables normales para realizar operaciones y cálculos.

## Uso de funciones que retornan valor

Además de recibir parámetros, algunas funciones en C también devuelven un valor al finalizar su ejecución. Esto permite que la función calcule un resultado y lo entregue al programa principal. Para especificar el tipo de dato que la función devuelve, se utiliza el tipo de retorno en la definición de la función.

La sintaxis básica para definir una función que retorna un valor en C es la siguiente:

```c
tipo_de_retorno nombre_de_la_funcion(tipo_parametro1 nombre_parametro1, tipo_parametro2 nombre_parametro2, ...)
{
    // Cuerpo de la función
    // Realizar operaciones con los parámetros
    // Devolver un valor con la sentencia "return"
	return [valor];
}
```

Dentro del cuerpo de la función, se utiliza la sentencia `return` seguida del valor que se desea devolver. Este valor debe ser del mismo tipo que se especificó en la declaración de la función.

## Beneficios de las funciones con parámetros y que retornan valor

Las funciones con parámetros y que retornan valor ofrecen varios beneficios en la programación en C. Al permitir la modularización del código, facilitan la estructuración y organización del programa, dividiéndolo en tareas más pequeñas y manejables.

Estas funciones también promueven la reutilización de código, ya que se pueden invocar varias veces en diferentes partes del programa, evitando así la duplicación de código y mejorando la eficiencia y mantenibilidad del programa.

Además, las funciones con parámetros y que retornan valor ofrecen flexibilidad al permitir al programador adaptarlas a sus necesidades específicas, ya sea utilizando los parámetros para interactuar con los datos del programa o devolviendo un resultado que puede ser utilizado en otras partes del código.

### Ejercicios

Hacer un programa en el cual se desarrollen las siguientes funciones, funciones que retornan valor, que reciben parámetros o que retornan y reciben parámetros: 
	int menu(); 
	void losEstados(char capital[]); 
	float promedio(int numeros[], int inicio, int fin); 
	int convierte(int bit5, int bit4, int bit3, int bit2, int bit1); 
	- La función menu() se encarga de mostrar el menú de opciones, solicitar la opción al usuario y regresar al main() el valor de la selección.
	- La función losEstados() recibe como argumento la capital de uno de los estados de México y muestra el nombre del estado al que corresponde así como su población. 
	- La función promedio() recibe como argumentos un arreglo de 20 elementos, y dos números indicando de que posición a que posición deberá hacerse el promedio, solo se puede enviar como inicio y fin números entre el 0 y 19, sin importar que inicio sea más pequeño o más grande que fin. La función regresa el resultado de la operación. 
	- La función convierte() recibe como argumentos los 5 bits del número binario y convierte la cifra binaria a decimal para retornarla. Ejemplo si le envía 1,0,0,1,1 regresará 19. 
El programa deberá mostrar un menú con 4 opciones: 
	a) Mostrando los estados 
	b) Promediando números 
	c) Convirtiendo números binarios 
	d) Salir

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int menu();
void losEstados(char capital[]);
float promedio(int numeros[], int inicio, int fin);
int convierte(int bit5, int bit4, int bit3, int bit2, int bit1);

int main()
{
    char capital[50];
    int numeros[21] = {0}, bandera;
    int opc, x, inicio, fin;
    int bit5, bit4, bit3, bit2, bit1;

    system("clear");

    do
    {

        // menu();
        opc = menu();
        switch (opc)
        {
        case 1:
            printf("\n-- Los Estados --");
            printf("\n\nIntroduzca la capital de un estado: ");
            scanf("%s", capital);
            losEstados(capital);
            break;
        case 2:
            printf("\n-- Promedio --\n\n");
            for (x = 0; x < 20; x++)
            {
                printf("Introduce el numero [%d]: ", x + 1);
                scanf("%d", &numeros[x]);
            }
            do
            {
                bandera = -1;
                printf("De que posicion a que posicion quieres saber su promedio [x][y]: ");
                scanf("%d %d", &inicio, &fin);
                if (inicio < 0 || fin > 19)
                {
                    printf("Esa posicion no es valida. ingrese otra\n");
                    bandera = 0;
                }
                else
                {
                    bandera = 1;
                }
            } while (bandera != 1);
            promedio(numeros, inicio, fin);
            break;
        case 3:
            printf("\n-- Conversion Binario a Decimal --\n\n");
            printf("Introduce el numero binario: ");
            scanf("%d %d %d %d %d", &bit5, &bit4, &bit3, &bit2, &bit1);
            printf("El numero decimal es: %d\n", convierte(bit5, bit4, bit3, bit2, bit1));
            break;
        case 4:
            puts("\nGracias por usar el programa, Hasta Luego....");
            break;
        default:
            puts("\nOpcion no valida\n");
            break;
        }

    } while (opc != 4);

    return 0;
}

int menu()
{
    int opc;
    printf("\nMenu de opciones");
    printf("\n\t1. Mostrar estados");
    printf("\n\t2. Promedio de numeros");
    printf("\n\t3. Conversion");
    printf("\n\t4. Salir");
    printf("\nLa opcion es: ");
    scanf("%d", &opc);
    return opc;
}

void losEstados(char capital[])
{
    char estados[][100] = {"Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de Mexico", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Estado de México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"};

    char capitales[][100] = {"Aguascalientes", "Mexicali", "La Paz", "Campeche", "Tuxtla Gutierrez", "Chihuahua", "CDMX", "Saltillo", "Colima", "Durango", "Guanajuato", "Chilpancingo", "Pachuca", "Guadalajara", "Toluca", "Morelia", "Cuernavaca", "Tepic", "Mmonterrey", "Oaxaca", "Puebla", "Querétaro", "Chetumal", "San Luis Potosí", "Cualiacan", "Hermosillo", "Villahermosa", "Ciudad Victoria", "Tlaxcala", "Xalapa", "Merida", "Zacatecas"};

    char poblacion[][100] = {"1,425,607", "3,769,020", "798,447", "928,363", "5,543,828", "3,741,869", "9,209,944", "3,146,771", "731,391", "1,832,650", "6,166,934", "3,540,685", "3,082841", "8,348,151", "16,992,418", "4,748,846", "1,971,520", "1,235,456", "5,784,442", "4,132,148", "6,583,278", "2,368,467", "1,857,985", "2,822,255", "3,026,943", "2,944,840", "2,402598", "3,527,735", "1,342,977", "8,062,579", "2,320,898", "1,622,138"};

    int i;

    for (i = 0; i < 32; i++)
    {
        if (strcasecmp(capital, capitales[i]) == 0)
        {
            printf("\n==========================================================\n");
            printf("Estado: %s\n", estados[i]);
            printf("Capital: %s\n", capitales[i]);
            printf("Poblacion: %s habitantes\n", poblacion[i]);
            printf("==========================================================\n\n");
        }
    }
}

float promedio(int numeros[], int inicio, int fin)
{
    int i, suma = 0;
    float promedio;
    promedio = 0;
    for (i = inicio; i <= fin; i++)
    {
        suma += numeros[i];
    }
    promedio = (suma * 1.0) / (fin - inicio + 1);
    printf("El promedio es: %.2f\n", promedio);
}

int convierte(int bit5, int bit4, int bit3, int bit2, int bit1)
{
    int numero = 0;

    numero += bit5 * 16;
    numero += bit4 * 8;
    numero += bit3 * 4;
    numero += bit2 * 2;
    numero += bit1 * 1;

    return numero;
}
```

## Conclusiones

En resumen, las funciones con parámetros y que retornan valor son una parte fundamental de la programación en C. Permiten modularizar el código, facilitar la reutilización de código y mejorar la estructura y mantenibilidad del programa. Al dominar el uso de estas funciones, los programadores pueden crear programas más eficientes y legibles.