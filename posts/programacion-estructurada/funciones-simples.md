---
title: "Funciones simples"
subtitle: "Modularización con funciones en C: Bloques de código para tareas específicas."
keywords: "funciones simples, lenguaje C, bloques, subrutinas, modularización, programación"
date: "21/03/2022"
---

## Funciones simples en el lenguaje C

Las funciones en C desempeñan un papel fundamental, ya que permiten al programador modularizar su código y dividirlo en partes más pequeñas y manejables. Esta modularización es clave para escribir programas más estructurados y fáciles de entender, mantener y depurar.

## Declaración y definición de funciones

En C, una función se compone de una declaración y una definición. La declaración de una función se realiza mediante la especificación del tipo de retorno de la función, su nombre y los parámetros que recibe (si los tiene). Por ejemplo:

```c
int sumar(int a, int b); // Declaración de la función sumar
```

La definición de una función se realiza mediante la implementación de su cuerpo, que contiene las sentencias que se ejecutarán cuando la función sea llamada. Por ejemplo:

```c
int sumar(int a, int b) { // Definición de la función sumar
    int resultado = a + b;
    return resultado;
}
```

## Llamada a funciones

Para utilizar una función en C, es necesario realizar una llamada a la función desde el código principal. Esto se hace mediante el nombre de la función seguido de paréntesis y los argumentos (valores) que se le pasan a la función (si es que recibe parámetros). Por ejemplo:

```c
int resultado = sumar(5, 3); // Llamada a la función sumar
```

La llamada a una función puede utilizarse como cualquier otra expresión dentro del código, es decir, puede asignarse a una variable, utilizarse como argumento en otra función, etc.

## Ventajas de las funciones

Las funciones en el lenguaje C ofrecen varias ventajas:

- **Reutilización de código:** Al dividir el programa en funciones más pequeñas, es posible reutilizarlas en diferentes partes del programa, lo que evita la duplicación de código y mejora la eficiencia y mantenibilidad del programa.
- **Modularización:** Las funciones permiten dividir el programa en módulos más manejables y comprensibles, lo que facilita el desarrollo, mantenimiento y depuración del código.
- **Abstracción:** Las funciones ayudan a ocultar la complejidad interna de una operación y proporcionan una interfaz clara y concisa para interactuar con ella.
- **Organización y legibilidad:** Al utilizar funciones con nombres descriptivos, el código se vuelve más legible y comprensible, ya que las funciones actúan como bloques lógicos independientes.

### Ejercicios

Elaborar el siguiente programa:
1. La escuela “Sabiduría”, requiere de un programa que le permita llevar el control de sus alumnos y calificaciones, el programa deberá mostrar las siguientes opciones: 
	1) Registrar Alumnos (Deberá capturar los siguientes datos: Número de matrícula (no se pueden repetir), nombre y calificaciones para 3 exámenes parciales) 
	2) Consulta General (Deberá mostrar los datos de los alumnos registrados ordenados por número de matrícula) 
	3) Promedios (Mostrar el número de matrícula y nombre de los alumnos, así como el promedio de cada uno y al finalizar mostrar el promedio general) 
	4) Salir

```c
#include <stdio.h>
#include <string.h>

int i, opc, matricula[100] = {0}, pos = 0, x, y, auxM;
char nombre[100][50], confirmacion, auxN[50];
float calf1[100] = {0}, calf2[100] = {0}, calf3[100] = {0}, auxC1, auxC2, auxC3;
float sumaC[100] = {0}, promedioC[100], sumaP = 0.0, promedioP;

void registro(void);
void consulta(void);
void promedios(void);

void registro(void)
{
  printf("\nIngrese el numero de matricula: ");
  scanf("%d", &matricula[pos]);
  for (i = pos; i > -1; i--)
  {
    if (matricula[pos] == matricula[pos - 1])
    {
      printf("\nYa existe esa matricula, ingrese otra: ");
      scanf("%d", &matricula[pos]);
      fflush(stdin);
    }
  }
  fflush(stdin);
  printf("Ingrese el nombre del alumno: ");
  fgets(nombre[pos], 50, stdin);
  printf("Ingrese la calificacion [1]: ");
  scanf("%f", &calf1[pos]);
  printf("Ingrese la calificacion [2]: ");
  scanf("%f", &calf2[pos]);
  printf("Ingrese la calificacion [3]: ");
  scanf("%f", &calf3[pos]);
  pos++;
}

void consulta(void)
{
  printf("\n");
  for (x = 1; x < pos; x++)
  {
    for (y = 0; y < pos - x; y++)
    {
      if (matricula[y] > matricula[y + 1])
      {
        auxM = matricula[y];
        matricula[y] = matricula[y + 1];
        matricula[y + 1] = auxM;

        strcpy(auxN, nombre[y]);
        strcpy(nombre[y], nombre[y + 1]);
        strcpy(nombre[y + 1], auxN);

        auxC1 = calf1[y];
        calf1[y] = calf1[y + 1];
        calf1[y + 1] = auxC1;

        auxC2 = calf2[y];
        calf2[y] = calf2[y + 1];
        calf2[y + 1] = auxC2;

        auxC3 = calf3[y];
        calf3[y] = calf3[y + 1];
        calf3[y + 1] = auxC3;
      }
    }
  }

  for (i = 0; i < pos; i++)
  {
    printf("\n==================================================");
    printf("\nNumero de matricula: %d", matricula[i]);
    printf("\nNombre: %s", nombre[i]);
    printf("Calificacion 1: %.2f", calf1[i]);
    printf("\nCalificacion 2: %.2f", calf2[i]);
    printf("\nCalificacion 3: %.2f", calf3[i]);
    printf("\n==================================================");
  }
  printf("\n");
}

void promedios(void)
{
  for (i = 0; i < pos; i++)
  {
    sumaC[i] = calf1[i] + calf2[i] + calf3[i];
    promedioC[i] += sumaC[i] / 3;
    printf("\n--------------------------------------------------");
    printf("\nNumero de matricula: %d", matricula[i]);
    printf("\nNombre: %s", nombre[i]);
    printf("Promedio: %.2f", promedioC[i]);
    printf("\n--------------------------------------------------");
    sumaP += promedioC[i];
  }
  promedioP = sumaP / pos;
  printf("\n\n### El promedio general es %.2f ###\n", promedioP);
}

int main()
{
  system("cls");
  printf("=-= Escuela SABIDURIA =-=\n");
  do
  {

    printf("\nMenu de opciones");
    printf("\n\t[1] Registrar alumnos");
    printf("\n\t[2] Consulta general ordenada");
    printf("\n\t[3] Promedios");
    printf("\n\t[4] Salir\n");
    printf("La opcion que elije es: ");
    scanf("%d", &opc);

    switch (opc)
    {
    case 1:
      registro();
      break;
    case 2:
      consulta();
      break;
    case 3:
      promedios();
      break;
    case 4:
      printf("\n===> Gracias por usar el programa\nSaliendo...");
      break;
    default:
      printf("\n=- Opcion invalida, escoja otra -=\n\n");
      break;
    }
  } while (opc != 4);

  return 0;
}
```


## Conclusiones

En conclusión, las funciones simples son una parte fundamental en el lenguaje C, ya que permiten modularizar el código, reutilizarlo y mejorar su mantenibilidad. A través de la declaración, definición y llamada a funciones, es posible crear programas más estructurados y comprensibles. La adecuada utilización de funciones ayuda a dividir el problema en partes más pequeñas y abordables, lo que facilita el desarrollo de software eficiente y escalable.