---
title: "Estructuras anidadas"
subtitle: "Uso y beneficios de las estructuras anidadas en C"
keywords: "estructuras anidadas, anidamiento de estructuras, tipos de datos compuestos, lenguaje C"
date: "23/05/2022"
---

## Estructuras anidadas en C

En el lenguaje de programación C, las estructuras anidadas son una característica que nos permite definir estructuras dentro de otras estructuras. Esta técnica de anidamiento de estructuras nos brinda la capacidad de crear tipos de datos compuestos más complejos y organizados.

Al utilizar estructuras anidadas, podemos agrupar y organizar información relacionada en una única entidad. Esto resulta especialmente útil cuando tenemos datos con múltiples niveles de jerarquía o cuando queremos representar relaciones entre diferentes conjuntos de datos.

La definición de una estructura anidada se realiza de manera similar a la definición de una estructura regular, pero con la diferencia de que uno o más campos de la estructura pueden ser estructuras por sí mismas. Veamos un ejemplo:

```c
struct Fecha {
    int dia;
    int mes;
    int anio;
};

struct Persona {
    char nombre[50];
    int edad;
    struct Fecha fechaNacimiento;
};
```

En este ejemplo, hemos definido dos estructuras: `Fecha` y `Persona`. La estructura `Fecha` representa una fecha con campos para el día, mes y año. A su vez, la estructura `Persona` contiene campos para el nombre, edad y una estructura anidada `Fecha` llamada `fechaNacimiento`. De esta forma, podemos representar la información de una persona junto con su fecha de nacimiento.

Una vez definida la estructura anidada, podemos acceder a sus campos utilizando el operador punto (`.`) de forma similar a como lo haríamos con una estructura regular. Por ejemplo, para acceder al campo `dia` de la estructura `fechaNacimiento` en la estructura `Persona`, haríamos lo siguiente:

```c
struct Persona persona1;
persona1.fechaNacimiento.dia = 10;
```

El uso de estructuras anidadas nos permite crear estructuras más complejas y expresivas en nuestros programas. Podemos anidar estructuras en múltiples niveles si es necesario, lo que nos proporciona una gran flexibilidad para modelar datos complejos y relaciones entre ellos.

Además, las estructuras anidadas pueden combinarse con arreglos, punteros y otras características del lenguaje C, lo que nos brinda aún más posibilidades para manejar y manipular datos de manera eficiente.

### Ejercicios

```c
/* main.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    int ID;
    char Nombre[50];
    char ApellidoPaterno[50];
    char ApellidoMaterno[50];
    char Direccion[50];
    int Telefono;
} Comunes;

typedef struct
{
    Comunes ComunesCliente;
    char TipoCliente[20];
    int NumeroVisitas;
} Cliente;

typedef struct
{
    Comunes ComunesProveedor;
    char RFC[20];
    char NombreEmpresa[50];
} Proveedor;

void MenuClientes(void);
void AltasClientes(Cliente C[500], int *posClientes);
void BajasClientes(Cliente C[500], int *posClientes);
void ConsultasClientes(Cliente C[500], int posClientes);
void MostrarClientes(Cliente C[500], int posClientes);

void MenuProveedores(void);
void AltasProveedores(Proveedor P[100], int *posProveedores);
void BajasProveedores(Proveedor P[100], int *posProveedores);
void ConsultasProveedores(Proveedor P[100], int posProveedores);
void MostrarProveedores(Proveedor P[100], int posProveedores);

int main()
{
    system("clear");

    char opc;

    do
    {
        printf("MENU DE OPCIONES\n");
        printf("\t[a] Clientes\n");
        printf("\t[b] Proveedores\n");
        printf("\t[c] Salir\n");
        printf("La opcion es: ");
        scanf("%c", &opc);
        getc(stdin);
        printf("\n");

        switch (tolower(opc))
        {
        case 'a':
            MenuClientes();
            break;
        case 'b':
            MenuProveedores();
            break;
        case 'c':
            puts("\nGracias por usar el programa ===>");
            break;
        default:
            puts("\nError, opcion no valida, elija otra...");
            break;
        }
        printf("\n");
    } while (tolower(opc) != 'c');

    return 0;
}

void MenuClientes()
{

    system("clear");

    char opc;
    Cliente C[500];
    int posCliente = 0;

    do
    {
        printf("MENU DE OPCIONES DE CLIENTES\n");
        printf("\t[A] Alta\n");
        printf("\t[B] Baja por ID\n");
        printf("\t[C] Consulta por apellido paterno\n");
        printf("\t[D] Mostrar datos ordenados por apellido paterno\n");
        printf("\t[E] Salir al menu principal\n");
        printf("La opcion es: ");
        scanf("%c", &opc);
		getc(stdin);

        switch (toupper(opc))
        {
        case 'A':
            AltasClientes(C, &posCliente);
            break;
        case 'B':
            BajasClientes(C, &posCliente);
            break;
        case 'C':
            ConsultasClientes(C, posCliente);
            break;
        case 'D':
			
            MostrarClientes(C, posCliente);
            break;
        case 'E':
            puts("\nRegresando al menu principal <===");
            fflush(stdin);
            break;
        default:
            puts("\nError, opcion no valida, elija otra...");
            break;
        }
        printf("\n");
    } while (toupper(opc) != 'E');
}

void MenuProveedores()
{

    system("clear");

    char opc;
    Proveedor P[100];
    int posProveedor = 0;

    do
    {
        printf("MENU DE OPCIONES DE PROVEEDORES\n");
        printf("\t[A] Alta\n");
        printf("\t[B] Baja por ID\n");
        printf("\t[C] Consulta por nombre de la empresa\n");
        printf("\t[D] Mostrar datos ordenados por nombre de la empresa\n");
        printf("\t[E] Salir al menu principal\n");
        printf("La opcion es: ");
        scanf("%c", &opc);

        switch (toupper(opc))
        {
        case 'A':
            AltasProveedores(P, &posProveedor);
            break;
        case 'B':
            BajasProveedores(P, &posProveedor);
            break;
        case 'C':
            ConsultasProveedores(P, posProveedor);
            break;
        case 'D':
            MostrarProveedores(P, posProveedor);
            break;
        case 'E':
            puts("\nRegresando al menu principal <===");
            break;
        default:
            puts("\nError, opcion no valida, elija otra...");
            break;
        }
        printf("\n");
    } while (toupper(opc) != 'E');
}
```

```c
/* funciones.h */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    int ID;
    char Nombre[50];
    char ApellidoPaterno[50];
    char ApellidoMaterno[50];
    char Direccion[50];
    int Telefono;
} Comunes;

typedef struct
{
    Comunes ComunesCliente;
    char TipoCliente[20];
    int NumeroVisitas;
} Cliente;

typedef struct
{
    Comunes ComunesProveedor;
    char RFC[20];
    char NombreEmpresa[50];
} Proveedor;

void MenuClientes(void);
void AltasClientes(Cliente [], int *);
void BajasClientes(Cliente [], int *);
void ConsultasClientes(Cliente [], int );
void MostrarClientes(Cliente [], int );

void MenuProveedores(void);
void AltasProveedores(Proveedor [], int *);
void BajasProveedores(Proveedor [], int *);
void ConsultasProveedores(Proveedor [], int );
void MostrarProveedores(Proveedor P[], int );
```

```makefile
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
/* AltasClientes.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    int ID;
    char Nombre[50];
    char ApellidoPaterno[50];
    char ApellidoMaterno[50];
    char Direccion[50];
    int Telefono;
} Comunes;

typedef struct
{
    Comunes ComunesCliente;
    char TipoCliente[20];
    int NumeroVisitas;
} Cliente;

void AltasClientes(Cliente C[500], int *posClientes)
{
    int i;

    printf("\nIntroduzca el ID del cliente: ");
    scanf("%d", &C[*posClientes].ComunesCliente.ID);
    for (i = 0; i < *posClientes; i++)
    {
        while (C[*posClientes].ComunesCliente.ID == C[i].ComunesCliente.ID)
        {
            printf("\nEl ID ya existe, introduzca otro: ");
            scanf("%d", &C[*posClientes].ComunesCliente.ID);
        }
    }
	getc(stdin);
    printf("Introduzca el nombre del cliente: ");
    gets(C[*posClientes].ComunesCliente.Nombre);
    printf("Introduzca el apellido paterno del cliente: ");
    gets(C[*posClientes].ComunesCliente.ApellidoPaterno);
    printf("Introduzca el apellido materno del cliente: ");
    gets(C[*posClientes].ComunesCliente.ApellidoMaterno);
    printf("Introduzca la direccion del cliente: ");
    gets(C[*posClientes].ComunesCliente.Direccion);
    printf("Introduzca el telefono del cliente: ");
    scanf("%d", &C[*posClientes].ComunesCliente.Telefono);
    getc(stdin);
    printf("Introduzca el tipo de cliente [Frecuente][Esporadico]: ");
    gets(C[*posClientes].TipoCliente);
    while (strcasecmp(C[*posClientes].TipoCliente, "Frecuente") != 0 && strcasecmp(C[*posClientes].TipoCliente, "Esporadico") != 0)
    {
        printf("Error, introduzca el tipo de cliente [Frecuente][Esporadico]: ");
        gets(C[*posClientes].TipoCliente);
    }
    printf("Introduzca el numero de visitas del cliente: ");
    scanf("%d", &C[*posClientes].NumeroVisitas);
	getc(stdin);
    (*posClientes)++;
}
```

```c
/* AltasProveedores.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    int ID;
    char Nombre[50];
    char ApellidoPaterno[50];
    char ApellidoMaterno[50];
    char Direccion[50];
    int Telefono;
} Comunes;

typedef struct
{
    Comunes ComunesProveedor;
    char RFC[20];
    char NombreEmpresa[50];
} Proveedor;

void AltasProveedores(Proveedor P[100], int *posProveedores)
{
    int i;

    printf("\nIntroduzca el ID del proveedor: ");
    scanf("%d", &P[*posProveedores].ComunesProveedor.ID);
    for (i = 0; i < *posProveedores; i++)
    {
        while (P[*posProveedores].ComunesProveedor.ID == P[i].ComunesProveedor.ID)
        {
            printf("\nEl ID ya existe, introduzca otro: ");
            scanf("%d", &P[*posProveedores].ComunesProveedor.ID);
        }
    }
    getc(stdin);
    printf("Introduzca el nombre del proveedor: ");
    gets(P[*posProveedores].ComunesProveedor.Nombre);
    printf("Introduzca el apellido paterno del proveedor: ");
    gets(P[*posProveedores].ComunesProveedor.ApellidoPaterno);
    printf("Introduzca el apellido materno del proveedor: ");
    gets(P[*posProveedores].ComunesProveedor.ApellidoMaterno);
    printf("Introduzca la direccion del proveedor: ");
    gets(P[*posProveedores].ComunesProveedor.Direccion);
    printf("Introduzca el telefono del proveedor: ");
    scanf("%d", &P[*posProveedores].ComunesProveedor.Telefono);
    getc(stdin);
    printf("Introduzca el RFC de la empresa: ");
    gets(P[*posProveedores].RFC);
    printf("Introduzca el nombre de la empresa: ");
    gets(P[*posProveedores].NombreEmpresa);
    (*posProveedores)++;
}
```

```c
/* BajasClientes.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    int ID;
    char Nombre[50];
    char ApellidoPaterno[50];
    char ApellidoMaterno[50];
    char Direccion[50];
    int Telefono;
} Comunes;

typedef struct
{
    Comunes ComunesCliente;
    char TipoCliente[20];
    int NumeroVisitas;
} Cliente;

void BajasClientes(Cliente C[500], int *posClientes)
{
    int i, j, ID;

    printf("\nIntroduzca el ID del cliente a dar de baja: ");
    scanf("%d", &ID);
    for (i = 0; i < *posClientes; i++)
    {
        if (C[i].ComunesCliente.ID == ID)
        {
            C[j] = C[j + 1];
            (*posClientes)--;
        }
    }
    printf("\nEl cliente con ID %d ha sido dado de baja\n", ID);
}
```

```c
/* BajasProveedores.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    int ID;
    char Nombre[50];
    char ApellidoPaterno[50];
    char ApellidoMaterno[50];
    char Direccion[50];
    int Telefono;
} Comunes;

typedef struct
{
    Comunes ComunesProveedor;
    char RFC[20];
    char NombreEmpresa[50];
} Proveedor;


void BajasProveedores(Proveedor P[100], int *posProveedor)
{
    int i, j, ID;

    printf("Introduzca el ID del proveedor a dar de baja: ");
    scanf("%d", &ID);
    for (i = 0; i < *posProveedor; i++)
    {
        if (P[i].ComunesProveedor.ID == ID)
        {
            P[j] = P[j + 1];
            (*posProveedor)--;
        }
    }
    printf("\nEl proveedor con ID %d ha sido dado de baja\n", ID);
}
```

```c
/* ConsultasClientes.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    int ID;
    char Nombre[50];
    char ApellidoPaterno[50];
    char ApellidoMaterno[50];
    char Direccion[50];
    int Telefono;
} Comunes;

typedef struct
{
    Comunes ComunesCliente;
    char TipoCliente[20];
    int NumeroVisitas;
} Cliente;

void ConsultasClientes(Cliente C[500], int posClientes)
{
    int i;
    char Apellido[50];

    printf("Introduzca el ID del cliente a consultar: ");
    gets(Apellido);
    for (i = 0; i < posClientes; i++)
    {
        if (strcasecmp(C[i].ComunesCliente.ApellidoPaterno, Apellido) == 0)
        {
            printf("\n==============================================\n");
            printf("ID: %d\n", C[i].ComunesCliente.ID);
            printf("Nombres: %s\n", C[i].ComunesCliente.Nombre);
            printf("Apellido Paterno: %s\n", C[i].ComunesCliente.ApellidoPaterno);
            printf("Apellido Materno: %s\n", C[i].ComunesCliente.ApellidoMaterno);
            printf("Direccion: %s\n", C[i].ComunesCliente.Direccion);
            printf("Telefono: %d\n", C[i].ComunesCliente.Telefono);
            printf("Tipo de cliente: %s\n", C[i].TipoCliente);
            printf("Numero de visitas: %d\n", C[i].NumeroVisitas);
            printf("==============================================\n");
        }
    }
}
```

```c
/* ConsultasProveedores.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    int ID;
    char Nombre[50];
    char ApellidoPaterno[50];
    char ApellidoMaterno[50];
    char Direccion[50];
    int Telefono;
} Comunes;

typedef struct
{
    Comunes ComunesProveedor;
    char RFC[20];
    char NombreEmpresa[50];
} Proveedor;

void ConsultasProveedores(Proveedor P[100], int posProveedores)
{
    int i;
    char Empresa[50];	

	getc(stdin);
    printf("\nIntroduzca el nombre de la empresa a consultar: ");
    gets(Empresa);
	
    for (i = 0; i < posProveedores; i++)
    {
        if (strcasecmp(P[i].NombreEmpresa, Empresa) == 0)
        {
            printf("\n==============================================\n");
            printf("ID: %d\n", P[i].ComunesProveedor.ID);
            printf("Nombres: %s\n", P[i].ComunesProveedor.Nombre);
            printf("Apellido Paterno: %s\n", P[i].ComunesProveedor.ApellidoPaterno);
            printf("Apellido Materno: %s\n", P[i].ComunesProveedor.ApellidoMaterno);
            printf("Direccion: %s\n", P[i].ComunesProveedor.Direccion);
            printf("Telefono: %d\n", P[i].ComunesProveedor.Telefono);
            printf("RFC: %s\n", P[i].RFC);
            printf("Nombre de la empresa: %s\n", P[i].NombreEmpresa);
            printf("==============================================\n");
        }
    }
}
```

```c
/* MostrarClientes.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    int ID;
    char Nombre[50];
    char ApellidoPaterno[50];
    char ApellidoMaterno[50];
    char Direccion[50];
    int Telefono;
} Comunes;

typedef struct
{
    Comunes ComunesCliente;
    char TipoCliente[20];
    int NumeroVisitas;
} Cliente;

void MostrarClientes(Cliente C[500], int posClientes)
{
    int x, y;
    Cliente Aux;

    for ( x = 1; x < posClientes; x++)
    {
        for ( y = 0; y < posClientes - x; y++)
        {
            if (strcasecmp(C[y].ComunesCliente.ApellidoPaterno, C[y + 1].ComunesCliente.ApellidoPaterno) > 0)
            {
                Aux = C[y];
                C[y] = C[y + 1];
                C[y + 1] = Aux;
            }
        }
        
    }

    for (x = 0; x < posClientes; x++)
    {
        printf("\n---------------------------------------------------\n");
        printf("ID: %d\n", C[x].ComunesCliente.ID);
        printf("Nombres: %s\n", C[x].ComunesCliente.Nombre);
        printf("Apellido Paterno: %s\n", C[x].ComunesCliente.ApellidoPaterno);
        printf("Apellido Materno: %s\n", C[x].ComunesCliente.ApellidoMaterno);
        printf("Direccion: %s\n", C[x].ComunesCliente.Direccion);
        printf("Telefono: %d\n", C[x].ComunesCliente.Telefono);
        printf("Tipo de cliente: %s\n", C[x].TipoCliente);
        printf("Numero de visitas: %d\n", C[x].NumeroVisitas);
        printf("---------------------------------------------------\n");
    }
}
```

```c
/* MostrarProveedores.c */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct
{
    int ID;
    char Nombre[50];
    char ApellidoPaterno[50];
    char ApellidoMaterno[50];
    char Direccion[50];
    int Telefono;
} Comunes;

typedef struct
{
    Comunes ComunesProveedor;
    char RFC[20];
    char NombreEmpresa[50];
} Proveedor;

void MostrarProveedores(Proveedor P[500], int posProveedores)
{
    int x, y;
    Proveedor Aux;

    for ( x = 1; x < posProveedores; x++)
    {
        for ( y = 0; y < posProveedores - x; y++)
        {
            if (strcasecmp(P[y].ComunesProveedor.ApellidoPaterno, P[y + 1].ComunesProveedor.ApellidoPaterno) > 0)
            {
                Aux = P[y];
                P[y] = P[y + 1];
                P[y + 1] = Aux;
            }
        }
        
    }

    for (x = 0; x < posProveedores; x++)
    {
        printf("\n---------------------------------------------------\n");
        printf("ID: %d\n", P[x].ComunesProveedor.ID);
        printf("Nombres: %s\n", P[x].ComunesProveedor.Nombre);
        printf("Apellido Paterno: %s\n", P[x].ComunesProveedor.ApellidoPaterno);
        printf("Apellido Materno: %s\n", P[x].ComunesProveedor.ApellidoMaterno);
        printf("Direccion: %s\n", P[x].ComunesProveedor.Direccion);
        printf("Telefono: %d\n", P[x].ComunesProveedor.Telefono);
        printf("RFC: %s\n", P[x].RFC);
        printf("Nombre de la empresa: %s\n", P[x].NombreEmpresa);
        printf("---------------------------------------------------\n");
    }
}
```

## Conclusiones

En resumen, el uso de estructuras anidadas en el lenguaje C nos permite organizar y representar datos relacionados en una forma más estructurada y jerárquica. Esto nos ayuda a mejorar la claridad y la legibilidad de nuestro código, así como a facilitar el acceso y manipulación de la información en programas más complejos.