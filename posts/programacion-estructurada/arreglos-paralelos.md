---
title: "Arreglos paralelos" 
subtitle: "La eficiencia y estructura de los arreglos paralelos en programación."
keywords: "arreglos paralelos, asociación de datos, estructura de datos, matrices, registros de información, campos de datos" 
date: "28/02/2022"
---

## Arreglos Paralelos en el lenguaje C

Los **arreglos paralelos** en el lenguaje de programación C son una técnica muy útil para manejar conjuntos de datos relacionados de manera eficiente. Esta técnica nos permite asociar múltiples arreglos que contienen información correspondiente entre sí, lo que facilita el procesamiento y la manipulación de datos de manera estructurada.

En C, los arreglos paralelos se implementan utilizando múltiples arreglos que comparten el mismo índice para indicar la relación entre los datos almacenados. Por ejemplo, si tenemos dos arreglos, uno que almacena los nombres de estudiantes y otro que guarda sus calificaciones, el nombre en el índice 0 del primer arreglo se corresponderá con la calificación en el índice 0 del segundo arreglo.

La ventaja de utilizar arreglos paralelos en C es que podemos realizar operaciones simultáneas en los datos relacionados. Por ejemplo, podemos recorrer ambos arreglos en un solo ciclo y realizar operaciones como mostrar el nombre del estudiante junto con su calificación correspondiente. Esto simplifica el código y mejora la legibilidad y mantenibilidad del programa.

Además, los arreglos paralelos en C nos permiten realizar búsquedas y ordenamientos basados en la información relacionada. Por ejemplo, podemos buscar el estudiante con la calificación más alta o realizar un ordenamiento de los nombres de los estudiantes en función de sus calificaciones. Estas operaciones se pueden realizar de manera eficiente, aprovechando la correspondencia entre los datos en los arreglos paralelos.

Es importante tener en cuenta que al utilizar arreglos paralelos, es fundamental mantener la integridad de la información en ambos arreglos. Esto significa que debemos asegurarnos de que los índices en los arreglos correspondan adecuadamente y que los datos estén actualizados y consistentes entre sí. Si se realiza alguna modificación en uno de los arreglos, es necesario asegurarse de reflejar esos cambios en el otro arreglo relacionado.

### Ejercicios

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
			4. Regreso al menú principal. 
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

char opc;
char aseguradora[100][50], nombrePaciente[100][30], anio[100][5], genero[100], seguro[100][5];
int numSeguro, edad[100], id[100], contadorSeguro = 0;
int pos = 0, i, POS, s, opcion;
char aseguradoraA[50], fecha[5];

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
                fflush(stdin);
                printf("%cCual es la aseguradora?: ", 168);
                scanf("%s", aseguradora[pos]);
                fflush(stdin);
                printf("A%co de Registro: ", 164);
                scanf("%s", anio[pos]);
                pos++;
            }
            break;
            // Consulta general
        case 'b':

            system("cls");

            do
            {
                printf("Este es el menu de consultas:\n");
                printf("\t[1] General\n");
                printf("\t[2] Por aseguradora\n");
                printf("\t[3] Por fecha de registro\n");
                printf("\t[4] Regreso al Menu principal\n");
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
                        printf("\nEn total hay %d asegurados\n", contadorSeguro);
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
                    puts("\n<=== Salida al Menu ===>");
                    break;
                default:
                    printf("No existe esta opcion, elige otra\n");
                    break;
                }
            } while (opcion != 4);

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

En resumen, los arreglos paralelos son una técnica poderosa en el lenguaje C para trabajar con conjuntos de datos relacionados. Al asociar múltiples arreglos y aprovechar la correspondencia entre ellos, podemos realizar operaciones eficientes en datos relacionados, como cálculos, búsquedas y ordenamientos. Utilizar arreglos paralelos mejora la organización y la estructura del código, facilitando el manejo de datos complejos en programas escritos en C.
