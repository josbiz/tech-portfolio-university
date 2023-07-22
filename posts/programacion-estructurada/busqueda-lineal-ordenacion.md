---
title: "Búsqueda lineal y ordenación"
subtitle: "Operaciones básicas con arreglos: búsqueda lineal y ordenación de la burbuja."
keywords: "búsqueda lineal, ordenación, arreglos, método de búsqueda lineal, método de ordenación de la burbuja"
date: "07/03/2022"
---

## Búsqueda Lineal

La búsqueda lineal es un método sencillo para buscar un elemento en un arreglo. Consiste en recorrer secuencialmente cada elemento del arreglo hasta encontrar el valor deseado o alcanzar el final del arreglo. En el caso de que el elemento sea encontrado, se devuelve su posición en el arreglo; de lo contrario, se indica que el elemento no se encuentra en el arreglo.

A continuación, se muestra un ejemplo de implementación de la búsqueda lineal en C:

```c
#include <stdio.h>

int busquedaLineal(int arr[], int n, int valor) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == valor) {
            return i; // Se encontró el elemento en la posición i
        }
    }
    return -1; // El elemento no se encontró en el arreglo
}

int main() {
    int arreglo[] = {4, 2, 7, 1, 9, 5};
    int longitud = sizeof(arreglo) / sizeof(arreglo[0]);
    int elemento = 7;

    int posicion = busquedaLineal(arreglo, longitud, elemento);

    if (posicion != -1) {
        printf("El elemento %d se encuentra en la posición %d\n", elemento, posicion);
    } else {
        printf("El elemento %d no se encuentra en el arreglo\n", elemento);
    }

    return 0;
}

```

## Ordenación con el Método de la Burbuja

La ordenación es el proceso de reorganizar los elementos de un arreglo de manera ascendente o descendente. Uno de los algoritmos de ordenación más simples es el método de la burbuja. Este algoritmo compara elementos adyacentes y los intercambia si están en el orden incorrecto. Repite este proceso hasta que todo el arreglo esté ordenado.

A continuación, se presenta un ejemplo de implementación del método de la burbuja en C:

```c
#include <stdio.h>

void ordenacionBurbuja(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar elementos
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arreglo[] = {4, 2, 7, 1, 9, 5};
    int longitud = sizeof(arreglo) / sizeof(arreglo[0]);

    printf("Arreglo antes de la ordenación: ");
    for (int i = 0; i < longitud; i++) {
        printf("%d ", arreglo[i]);
    }

    ordenacionBurbuja(arreglo, longitud);

    printf("\nArreglo después de la ordenación: ");
    for (int i = 0; i < longitud; i++) {
        printf("%d ", arreglo[i]);
    }

    return 0;
}

```

### Ejercicio

Elaborar el siguiente programa: 

1. Se requiere hacer un programa para llevar el registro de los pacientes de una clínica, para cada paciente se requieren los siguientes datos: 
	- ID del paciente 
	- Nombre del paciente 
	- Si tiene o no con seguro de gastos médicos Si cuenta con seguro pedir nombre de la aseguradora. 
	- Año de registro del paciente. 
	El programa deberá contar con las siguientes opciones: 
		a) Altas 
		b) Consultas: 
			1. General, deberá desplegar todos los datos, además indicar cuántos cuentan con un seguro y cuántos no. 
			2. Asegurados de determinada aseguradora. 
			3. Por fecha de registro.
			4. Por numero de paciente
			5. Ordenados por nombre (A - Z)
			6. Ordenados por numero de paciente (del menor al mayor)
			7. Ordenados por fecha de registro (del año mas reciente)
			8. Regreso al menú principal. 
		c) Salir. 
	
	Restricciones: 
	- Utilizar arreglos para guardar hasta 100 pacientes
	- No se deberán repetir el ID del paciente
	- Si se elige una opción no válida del menú se mostrará mensaje de error
	- Para dar de alta utilice un contador para llevar la cuenta de los pacientes dados de alta hasta el momento y cuide no sobrepasar el tamaño de los arreglos. 
	- No se pueden realizar consultas si no se ha registrado información, puede iniciar su programa con 3 o 4 pacientes inicializados en los arreglos y con su contador puesto a 3 o 4 dependiendo de la cantidad).

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char opc, aseguradora[100][50], nombrePaciente[100][30], anio[100][5], genero[100], seguro[100][5];
int edad[100], id[100], contadorSeguro = 0, auxid, buscarid;
int pos = 0, i, POS, s, opcion, x, y;
char aseguradoraA[50], fecha[5], auxnombre[30], auxseguro[5], auxaseguradora[50], auxanio[5];

int main()
{

    system("cls");

    do
    {
        printf("=== Registro de Hospital ===");
        printf("\nLas opciones del menu son: ");
        printf("\n\ta) Altas\n");
        printf("\tb) Consultas\n");
        printf("\tc) Salida\n");
        printf("La opcion que elije es: ");
        scanf("%c", &opc);

        switch (tolower(opc))
        {
            // ALTAS
        case 'a':
            if (pos > 100)

            {
                puts("Los arreglos estan llenos");
            }
            else
            {
                printf("\nID: ");
                scanf("%i", &id[pos]);
                fflush(stdin);
                for (s = pos; s > 0; s--)
                {
                    if (id[pos] == id[pos - s])
                    {
                        printf("Este ID esta ocupado, escriba otro: ");
                        scanf("%i", &id[pos]);
                        fflush(stdin);
                    }
                }
                printf("Nombre: ");
                gets(nombrePaciente[pos]);
                printf("%cTiene seguro? [s][n]: ", 168);
                scanf("%s", seguro[pos]);
                if (strcasecmp(seguro[pos], "s") == 0)
                {
                    printf("%cCual es la aseguradora?: ", 168);
                    scanf("%s", aseguradora[pos]);
                    fflush(stdin);
                    printf("A%co de Registro: ", 164);
                    scanf("%s", anio[pos]);
                    pos++;
                }
                else
                {
                    strcpy(aseguradora[pos], "-");
                    fflush(stdin);
                    printf("A%co de Registro: ", 164);
                    scanf("%s", anio[pos]);
                    pos++;
                }
            }
            break;
            // Consulta general
        case 'b':

            system("cls");

            do
            {
                printf("\nEste es el menu de consultas:\n");
                printf("\t[1] General\n");
                printf("\t[2] Por aseguradora\n");
                printf("\t[3] Por fecha de registro\n");
                printf("\t[4] Por numero de paciente\n");
                printf("\t[5] Ordenados por nombre (A a la Z)\n");
                printf("\t[6] Ordenados por numero de paciente (del menor al mayor)\n");
                printf("\t[7] Ordenados por fecha de registro (del a%co mas reciente)\n", 164);
                printf("\t[8] Regreso al Menu principal\n");
                printf("La opcion es: ");
                scanf("%d", &opcion);

                switch (opcion)
                {
                case 1:
                    printf("\n");
                    if (pos == 0)
                    {
                        puts("\nNo hay datos que mostrar\n");
                    }
                    else
                    {
                        for (i = 0; i < pos; i++)
                        {
                            printf("-------------------------------------------------\n");
                            printf("ID: %i\n", id[i]);
                            printf("Nombre: %s\n", nombrePaciente[i]);
                            printf("%cTiene seguro? [s][n]: %s\n", 168, seguro[i]);
                            printf("Aseguradora: %s\n", aseguradora[i]);
                            printf("A%co de Registro: %s\n", 164, anio[i]);
                            printf("-------------------------------------------------\n");
                            if (strcasecmp(seguro[tolower(i)], "s") == 0)
                            {
                                contadorSeguro++;
                            }
                        }
                        printf("\nEn total hay %d asegurados\n\n", contadorSeguro);
                    }
                    break;
                case 2:

                    POS = -1;
                    printf("\nIntroduzca la aseguradora que busca: ");
                    scanf("%s", aseguradoraA);
                    if (pos == 0)
                    {
                        puts("+ + Necesita ingresar un dato, por favor vaya a Altas + +");
                    }
                    else
                    {
                        for (i = 0; i < pos; i++)
                        {
                            if (strcasecmp(aseguradora[i], aseguradoraA) == 0)
                            {
                                POS = i;
                                printf("-------------------------------------------------\n");
                                printf("Nombre: %s\n", nombrePaciente[i]);
                                printf("-------------------------------------------------\n");
                            }
                            else if (POS == -1)
                            {
                                puts("No se encontro la aseguradora");
                                break;
                            }
                        }
                    }
                    printf("\n");
                    break;
                case 3:
                    POS = -1;
                    printf("\nIntroduzca el a%co de registro que busca: ", 164);
                    scanf("%s", fecha);
                    if (pos == 0)
                    {
                        puts("+ + Necesita ingresar un dato, por favor vaya a Altas + +");
                    }
                    else
                    {
                        for (i = 0; i < pos; i++)
                        {
                            if (strcasecmp(anio[i], fecha) == 0)
                            {
                                POS = i;
                                printf("-------------------------------------------------\n");
                                printf("Nombre: %s\n", nombrePaciente[i]);
                                printf("-------------------------------------------------\n");
                            }
                            else if (POS == -1)
                            {
                                printf("No se encontro el a%co de registro\n", 164);
                                break;
                            }
                        }
                    }
                    break;
                case 4:
                    POS = -1;
                    printf("\nIntroduzca el ID que busca: ");
                    scanf("%d", &buscarid);
                    if (pos == 0)
                    {
                        puts("+ + Necesita ingresar un dato, por favor vaya a Altas + +");
                    }
                    else
                    {
                        for (i = 0; i < pos; i++)
                        {
                            if (buscarid == id[i])
                            {
                                POS = i;
                                printf("-------------------------------------------------\n");
                                printf("ID: %i\n", id[i]);
                                printf("Nombre: %s\n", nombrePaciente[i]);
                                printf("%cTiene seguro? [s][n]: %s\n", 168, seguro[i]);
                                printf("Aseguradora: %s\n", aseguradora[i]);
                                printf("A%co de Registro: %s\n", 164, anio[i]);
                                printf("-------------------------------------------------\n");
                            }
                            else if (POS == -1)
                            {
                                printf("No se encontro el ID\n\n");
                                break;
                            }
                        }
                    }
                    break;
                case 5:
                    // Ordenados por nombre (A a la Z)
                    for (x = 1; x < pos; x++)
                    {
                        for (y = 0; y < pos - x; y++)
                        {
                            if (strcasecmp(nombrePaciente[y], nombrePaciente[y + 1]) > 0)
                            {
                                auxid = id[y];
                                id[y] = id[y + 1];
                                id[y + 1] = auxid;

                                strcpy(auxnombre, nombrePaciente[y]);
                                strcpy(nombrePaciente[y], nombrePaciente[y + 1]);
                                strcpy(nombrePaciente[y + 1], auxnombre);

                                strcpy(auxseguro, seguro[y]);
                                strcpy(seguro[y], seguro[y + 1]);
                                strcpy(seguro[y + 1], auxseguro);

                                strcpy(auxaseguradora, aseguradora[y]);
                                strcpy(aseguradora[y], aseguradora[y + 1]);
                                strcpy(aseguradora[y + 1], auxaseguradora);

                                strcpy(auxanio, anio[y]);
                                strcpy(anio[y], anio[y + 1]);
                                strcpy(anio[y + 1], auxanio);
                            }
                        }
                    }
                    for (i = 0; i < pos; i++)
                    {
                        printf("-------------------------------------------------\n");
                        printf("ID: %i\n", id[i]);
                        printf("Nombre: %s\n", nombrePaciente[i]);
                        printf("%cTiene seguro? [s][n]: %s\n", 168, seguro[i]);
                        printf("Aseguradora: %s\n", aseguradora[i]);
                        printf("A%co de Registro: %s\n", 164, anio[i]);
                        printf("-------------------------------------------------\n");
                    }
                    break;
                case 6:
                    // Ordenar por numero de paciente
                    for (x = 1; x < pos; x++)
                    {
                        for (y = 0; y < pos - x; y++)
                        {
                            if (id[y] > id[y + 1])
                            {
                                auxid = id[y];
                                id[y] = id[y + 1];
                                id[y + 1] = auxid;

                                strcpy(auxnombre, nombrePaciente[y]);
                                strcpy(nombrePaciente[y], nombrePaciente[y + 1]);
                                strcpy(nombrePaciente[y + 1], auxnombre);

                                strcpy(auxseguro, seguro[y]);
                                strcpy(seguro[y], seguro[y + 1]);
                                strcpy(seguro[y + 1], auxseguro);

                                strcpy(auxaseguradora, aseguradora[y]);
                                strcpy(aseguradora[y], aseguradora[y + 1]);
                                strcpy(aseguradora[y + 1], auxaseguradora);

                                strcpy(auxanio, anio[y]);
                                strcpy(anio[y], anio[y + 1]);
                                strcpy(anio[y + 1], auxanio);
                            }
                        }
                    }
                    for (i = 0; i < pos; i++)
                    {
                        printf("-------------------------------------------------\n");
                        printf("ID: %i\n", id[i]);
                        printf("Nombre: %s\n", nombrePaciente[i]);
                        printf("%cTiene seguro? [s][n]: %s\n", 168, seguro[i]);
                        printf("Aseguradora: %s\n", aseguradora[i]);
                        printf("A%co de Registro: %s\n", 164, anio[i]);
                        printf("-------------------------------------------------\n");
                    }

                    break;
                case 7:
                    // Ordenados por fecha de registro (del año más reciente)
                    for (x = 1; x < pos; x++)
                    {
                        for (y = 0; y < pos - x; y++)
                        {
                            if (strcasecmp(anio[y], anio[y + 1]) < 0)
                            {
                                auxid = id[y];
                                id[y] = id[y + 1];
                                id[y + 1] = auxid;

                                strcpy(auxnombre, nombrePaciente[y]);
                                strcpy(nombrePaciente[y], nombrePaciente[y + 1]);
                                strcpy(nombrePaciente[y + 1], auxnombre);

                                strcpy(auxseguro, seguro[y]);
                                strcpy(seguro[y], seguro[y + 1]);
                                strcpy(seguro[y + 1], auxseguro);

                                strcpy(auxaseguradora, aseguradora[y]);
                                strcpy(aseguradora[y], aseguradora[y + 1]);
                                strcpy(aseguradora[y + 1], auxaseguradora);

                                strcpy(auxanio, anio[y]);
                                strcpy(anio[y], anio[y + 1]);
                                strcpy(anio[y + 1], auxanio);
                            }
                        }
                    }
                    for (i = 0; i < pos; i++)
                    {
                        printf("-------------------------------------------------\n");
                        printf("ID: %i\n", id[i]);
                        printf("Nombre: %s\n", nombrePaciente[i]);
                        printf("%cTiene seguro? [s][n]: %s\n", 168, seguro[i]);
                        printf("Aseguradora: %s\n", aseguradora[i]);
                        printf("A%co de Registro: %s\n", 164, anio[i]);
                        printf("-------------------------------------------------\n");
                    }
                    break;
                case 8:
                    puts("\n<=== Salida al Menu ===>");
                    break;
                default:
                    printf("No existe esta opcion, elige otra\n");
                    break;
                }
            } while (opcion != 8);

            break;
            // Consulta por numero de seguro
        case 'c':
            printf("\n<=== Salida Exitosa ===>");
            break;
        default:
            printf("No existe esta opcion, elige otra\n");
            break;
        }
        printf("\n");
        fflush(stdin);
    } while (opc != 'c');

    return 0;
}
```

## Conclusiones

En conclusión, la búsqueda lineal y la ordenación son operaciones fundamentales en el manejo de arreglos. Mediante el uso del lenguaje C, podemos implementar estos métodos de manera efectiva. La búsqueda lineal nos permite encontrar elementos específicos en un arreglo, mientras que el método de la burbuja nos permite ordenar los elementos del arreglo en un orden deseado.

Es importante comprender y practicar estos conceptos para poder utilizarlos en la resolución de problemas y el desarrollo de aplicaciones más complejas. El conocimiento de estas técnicas de búsqueda y ordenación proporciona una base sólida para trabajar con arreglos de manera eficiente y optimizada en el lenguaje C.