---
title: "Arreglos de estructuras"
subtitle: "Características y uso de las estructuras en el lenguaje C"
keywords: "estructuras, variables, tipos de datos, arreglos, C"
date: "09/05/2022"
---

## Estructuras

Una estructura es una colección de variables las cuales están relacionadas bajo un nombre. Las estructuras son del tipo de datos compuestos que pueden contener variables de tipos diferentes de datos a diferencia de los arreglos que también son del tipo de datos compuestos pero que contienen únicamente elementos de un mismo tipo de dato. La palabra reservada struct es utilizada para definir una estructura.

## Características y uso 

Una estructura en el lenguaje de programación C es una colección de variables relacionadas entre sí bajo un nombre común. A diferencia de los arreglos, que solo pueden contener elementos del mismo tipo de dato, las estructuras son tipos de datos compuestos que pueden almacenar variables de diferentes tipos.

La definición de una estructura se realiza utilizando la palabra reservada `struct`, seguida de un nombre único para la estructura y las variables que la componen. Estas variables, también conocidas como campos o miembros de la estructura, pueden ser de cualquier tipo de dato válido en C, incluyendo enteros, caracteres, flotantes, punteros, entre otros.

La ventaja de utilizar estructuras radica en su capacidad para agrupar variables relacionadas, lo que facilita el manejo y organización de la información. Por ejemplo, si queremos representar información sobre una persona, podríamos definir una estructura llamada `Persona` con campos como nombre, edad, dirección, entre otros.

```c
struct Persona {
    char nombre[50];
    int edad;
    char direccion[100];
};
```

Una vez definida la estructura, podemos crear variables de ese tipo y acceder a sus campos utilizando el operador punto (`.`). Por ejemplo, podríamos declarar una variable de tipo `Persona` llamada `persona1` y asignar valores a sus campos de la siguiente manera:

```c
struct Persona persona1;
strcpy(persona1.nombre, "Juan");
persona1.edad = 25;
strcpy(persona1.direccion, "Calle Principal 123");
```

Para acceder a los campos de la estructura, utilizamos el nombre de la variable seguido del operador punto y el nombre del campo. Por ejemplo, `persona1.nombre` nos daría acceso al campo "nombre" de la estructura `persona1`.

Las estructuras también se pueden utilizar en combinación con arreglos, lo que nos permite crear arreglos de estructuras. Por ejemplo, podríamos definir un arreglo de personas de la siguiente manera:

```c
struct Persona personas[10];
```

Esto nos permitiría almacenar hasta 10 personas en el arreglo `personas`, donde cada elemento del arreglo sería una estructura de tipo `Persona`.

### Ejercicios

Hacer un programa que capture información de un cliente bancario a través de arreglos paralelos, un arreglo será del tipo estructura Cliente y el otro de tipo estructura Tarjeta, la estructura Cliente tendrá los miembros: nombre, domicilio y teléfonos (3 teléfonos, el de casa, trabajo y celular) y la estructura Tarjeta tendrá los miembros: número de tarjeta, tipo de tarjeta (débito o crédito) y fecha de vencimiento (formato mm/aaaa, mes y año). El programa tendrá un menú con las opciones:
1. alta del cliente (datos del cliente y de su tarjeta) 
2. mostrar clientes (mostrar los datos y tarjetas de todos los clientes) 
3. buscar a un cliente (mostrar sus datos y de su tarjeta) 
4. ordenar los registros (por nombre) 
5. borrar un registro (cliente y tarjeta de ese cliente) 
6. salir. 
Se podrán registrar hasta 500 clientes con sus respetivas tarjetas cuidar cuando se haga un alta que no se desborden los arreglos. Cada opción será trabajada a través de una función. 
Crear cada función en un archivo distinto, así como su cabecera y cree un archivo Makefile para compilar.

```c
/* main.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    char Nombre[40];
    char Domicilio[60];
    int TelefonoCasa;
    int TelefonoTrabajo;
    int TelefonoCelular;
} Cliente;

typedef struct
{
    int Numero;
    char Tipo[20];
    int mesVencimiento;
    int anioVencimiento;
} Tarjeta;

void Altas(Cliente C[500], Tarjeta T[500], int *cont);
void Mostrar(Cliente C[500], Tarjeta T[500], int cont);
void Buscar(Cliente C[500], Tarjeta T[500], int cont);
void Ordenar(Cliente C[500], Tarjeta T[500], int cont);
void Borrar(Cliente C[500], Tarjeta T[500], int *cont);
void Imprimir(Cliente, Tarjeta);

int main()
{
    int opc;
    Cliente C[500];
    Tarjeta T[500];
    int cont = 0;

    system("clear");

    do
    {
        printf("MENU DE OPCIONES\n");
        printf("\t[1] Alta del cliente\n");
        printf("\t[2] Mostrar clientes\n");
        printf("\t[3] Busqueda por cliente\n");
        printf("\t[4] Ordenar registros\n");
        printf("\t[5] Borrar registros\n");
        printf("\t[6] Salir\n");
        printf("La opcion es: ");
        scanf("%d", &opc);
        getc(stdin);
        printf("\n");

        switch (opc)
        {
        case 1:
            Altas(C, T, &cont);
            break;
        case 2:
            Mostrar(C, T, cont);
            break;
        case 3:
            Buscar(C, T, cont);
            break;
        case 4:
            Ordenar(C, T, cont);
            break;
        case 5:
            Borrar(C, T, &cont);
            break;
        case 6:
            puts("\nGracias por usar el programa ===>");
            break;
        default:
            puts("\nError, opcion no valida, elija otra...");
            break;
        }
        printf("\n");
    } while (opc != 6);

    return 0;
}
```

```c
/* funciones.h */

#include <stdio.h>
#include <string.h>

typedef struct
{
    char Nombre[40];
    char Domicilio[60];
    int TelefonoCasa;
    int TelefonoTrabajo;
    int TelefonoCelular;
} Cliente;

typedef struct
{
    int Numero;
    char Tipo[20];
    int mesVencimiento;
    int anioVencimiento;
} Tarjeta;

void Altas(Cliente [], Tarjeta [], int *);
void Mostrar(Cliente [], Tarjeta [], int );
void Buscar(Cliente [], Tarjeta T[], int );
void Ordenar(Cliente [], Tarjeta T[], int );
void Borrar(Cliente [], Tarjeta [], int *);
void Imprimir(Cliente, Tarjeta);
```

```makefile
/* Makefile */

all: main

CC = clang
override CFLAGS += -g -Wno-everything -pthread -lm

SRCS = $(shell find . -name '.ccls-cache' -type d -prune -o -type f -name '*.c' -print)
OBJS = $(SRCS:.c=.o)
DEPS = $(SRCS:.c=.d)

%.d: %.c
	@set -e; rm -f $@; \
	$(CC) -MM $(CFLAGS) $< > $@.$$$$; \
	sed 's,\($*\)\.o[ :]*,\1.o $@ : ,g' < $@.$$$$ > $@; \
	rm -f $@.$$$$

include $(DEPS)

main: $(OBJS)
	$(CC) $(CFLAGS) $(OBJS) -o main

clean:
	rm -f $(OBJS) $(DEPS) main
```

```c
/* Altas.c */

#include <ctype.h>
#include <stdio.h>
#include <string.h>

typedef struct {
  char Nombre[40];
  char Domicilio[60];
  int TelefonoCasa;
  int TelefonoTrabajo;
  int TelefonoCelular;
} Cliente;

typedef struct {
  int Numero;
  char Tipo[20];
  int mesVencimiento;
  int anioVencimiento;
} Tarjeta;

void Altas(Cliente C[500], Tarjeta T[500], int *cont) {
  
	int i;

	printf("Introduzca el nombre del cliente: ");
  	gets(C[*cont].Nombre);
  	printf("Introduzca el domicilio del cliente: ");
  	gets(C[*cont].Domicilio);
 	fflush(stdin);
  	printf("Introduzca el telefono de casa del cliente: ");
  	scanf("%d", &C[*cont].TelefonoCasa);
  	printf("Introduzca el telefono del trabajo del cliente: ");
  	scanf("%d", &C[*cont].TelefonoTrabajo);
  	printf("Introduzca el telefono del celular del cliente: ");
  	scanf("%d", &C[*cont].TelefonoCelular);
  	printf("Introduzca el numero de tarjeta: ");
  	scanf("%d", &T[*cont].Numero);
  	getc(stdin);
  	if (*cont != 0) 
  	{
    	for (i = 0; i < *cont; i++) 
		{
      		while (T[*cont].Numero == T[i].Numero) 
	  		{
	        	puts("Opcion no valida...");
	        	printf("Introduzca el numero de tarjeta: ");
	        	scanf("%d", &T[*cont].Numero);
	        	getc(stdin);
      		}
    	}
 	}
  	printf("Introduzca el tipo de tarjeta: ");
  	gets(T[*cont].Tipo);
  	while (strcasecmp(T[*cont].Tipo, "credito") != 0 && strcasecmp(T[*cont].Tipo, "debito") != 0) 
	{
    	puts("Opcion no valida...");
    	printf("Introduzca el tipo de tarjeta: ");
    	gets(T[*cont].Tipo);
  	}
  	printf("Introduzca la fecha de vencimiento de la tarjeta mm/aaaa: ");
  	scanf("%d/%d", &T[*cont].mesVencimiento, &T[*cont].anioVencimiento);
  	(*cont)++;
}
```

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    char Nombre[40];
    char Domicilio[60];
    int TelefonoCasa;
    int TelefonoTrabajo;
    int TelefonoCelular;
} Cliente;

typedef struct
{
    int Numero;
    char Tipo[20];
    int mesVencimiento;
    int anioVencimiento;
} Tarjeta;

void Mostrar(Cliente C[500], Tarjeta T[500], int cont)
{
    int i;

    if (cont == 0)
    {
        puts("\nNo se han ingresado datos");
    }
    else
    {
        for (i = 0; i < cont; i++)
        {
            Imprimir(C[i], T[i]);
        }
    }
}
```

```c
/* Imprimir.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    char Nombre[40];
    char Domicilio[60];
    int TelefonoCasa;
    int TelefonoTrabajo;
    int TelefonoCelular;
} Cliente;

typedef struct
{
    int Numero;
    char Tipo[20];
    int mesVencimiento;
    int anioVencimiento;
} Tarjeta;

void Imprimir(Cliente C, Tarjeta T)
{
    printf("\n==============================================\n");
    printf("Nombre del cliente: %s\n", C.Nombre);
    printf("Domicilio del cliente: %s\n", C.Domicilio);
    printf("Telefono de casa del cliente: %d\n", C.TelefonoCasa);
    printf("Telefono del trabajo del cliente: %d\n", C.TelefonoTrabajo);
    printf("Telefono del celular del cliente: %d\n", C.TelefonoCelular);
    printf("Numero de tarjeta: %d\n", T.Numero);
    printf("Tipo de tarjeta: %s\n", T.Tipo);
    printf("Fecha de vencimiento de la tarjeta: %d/%d\n", T.mesVencimiento, T.anioVencimiento);
    printf("==============================================\n");
}
```


```c
/* Buscar.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    char Nombre[40];
    char Domicilio[60];
    int TelefonoCasa;
    int TelefonoTrabajo;
    int TelefonoCelular;
} Cliente;

typedef struct
{
    int Numero;
    char Tipo[20];
    int mesVencimiento;
    int anioVencimiento;
} Tarjeta;

void Buscar(Cliente C[500], Tarjeta T[500], int cont)
{

    char persona[40];
    int i, POS;

    if (cont == 0)
    {
        puts("\nNo se han ingresado datos");
    }
    else
    {
        printf("Ingrese el nombre del cliente que busca: ");
        gets(persona);
        POS = -1;
        for (i = 0; i < cont; i++)
        {
            if (strcasecmp(persona, C[i].Nombre) == 0)
            {
                POS = i;
                break;
            }
        }
        if (POS == -1)
        {
            puts("No se encontro el cliente");
        }
        else
        {
            Imprimir(C[POS], T[POS]);
        }
    }
}
```

```c
/* Ordenar.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    char Nombre[40];
    char Domicilio[60];
    int TelefonoCasa;
    int TelefonoTrabajo;
    int TelefonoCelular;
} Cliente;

typedef struct
{
    int Numero;
    char Tipo[20];
    int mesVencimiento;
    int anioVencimiento;
} Tarjeta;

void Ordenar(Cliente C[500], Tarjeta T[500], int cont)
{
    int i, j;
    Cliente auxC;
    Tarjeta auxT;

    if (cont == 0)
    {
        puts("\nNo se han ingresado datos");
    }
    else
    {
        for (i = 1; i < cont; i++)
        {
            for (j = 0; j < cont - i; j++)
            {
                if (strcasecmp(C[j].Nombre, C[j + 1].Nombre) > 0)
                {
                    auxC = C[j];
                    C[j] = C[j + 1];
                    C[j + 1] = auxC;

                    auxT = T[j];
                    T[j] = T[j + 1];
                    T[j + 1] = auxT;
                }
            }
        }

        for (i = 0; i < cont; i++)
        {
            Imprimir(C[i], T[i]);
        }
    }
}
```

```c
/* Borrar.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    char Nombre[40];
    char Domicilio[60];
    int TelefonoCasa;
    int TelefonoTrabajo;
    int TelefonoCelular;
} Cliente;

typedef struct
{
    int Numero;
    char Tipo[20];
    int mesVencimiento;
    int anioVencimiento;
} Tarjeta;

void Borrar(Cliente C[500], Tarjeta T[500], int *cont){
    int i, j, POS;
    char persona[40];

    if (*cont == 0)
    {
        puts("\nNo se han ingresado datos");
    }
    else
    {
        printf("Ingrese el nombre del cliente que desea borrar: ");
        gets(persona);
        POS = -1;
        for (i = 0; i < *cont; i++)
        {
            if (strcasecmp(persona, C[i].Nombre) == 0)
            {
                POS = i;
                break;
            }
        }
        if (POS == -1)
        {
            puts("No se encontro el cliente");
        }
        else
        {
            for (j = POS; j < *cont - 1; j++)
            {
                C[j] = C[j + 1];
                T[j] = T[j + 1];
            }
        }
        (*cont)--;
    }

}
```

## Conclusiones

En resumen, las estructuras son una herramienta poderosa en el lenguaje C para organizar y manipular datos relacionados. Su capacidad para contener variables de diferentes tipos y su flexibilidad en la definición y uso las convierte en una estructura fundamental en el desarrollo de programas en C.