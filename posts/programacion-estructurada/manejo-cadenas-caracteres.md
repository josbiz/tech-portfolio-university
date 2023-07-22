---
title: "Manejo de cadenas de carateres"
subtitle: "Manipulación esencial de cadenas de caracteres como arreglos en programación."
keywords: "cadenas de caracteres, manipulación, funciones, lenguaje C, longitud, copiar, concatenar, programación"
date: "14/02/2022"
---
## Cadenas de caracteres

En el lenguaje C, las cadenas de caracteres se representan como arreglos de caracteres. Cada caracter de la cadena se almacena en una posición del arreglo, y la cadena termina con el caracter especial '\0', que indica el final de la cadena. A continuación, se presentan algunas funciones esenciales para la manipulación de cadenas de caracteres:

- `strlen()`: Esta función se utiliza para obtener la longitud de una cadena. Recibe como argumento la cadena y devuelve un valor entero que representa la cantidad de caracteres en la cadena, excluyendo el caracter nulo de terminación.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char mensaje[] = "Hola, mundo!";
    int longitud = strlen(mensaje);
    printf("La longitud de la cadena es: %d\n", longitud);

    return 0;
}
```

- `strcpy()`: Esta función se utiliza para copiar una cadena en otra. Recibe como argumento la cadena de destino y la cadena de origen, y devuelve la cadena de destino modificada.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char origen[] = "Hola";
    char destino[10];
    strcpy(destino, origen);
    printf("La cadena de destino es: %s\n", destino);

    return 0;
}

```

- `strcat()`: Esta función se utiliza para concatenar dos cadenas. Recibe como argumento la cadena de destino y la cadena a concatenar, y devuelve la cadena de destino modificada.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char cadena1[] = "Hola";
    char cadena2[] = ", mundo!";
    strcat(cadena1, cadena2);
    printf("La cadena concatenada es: %s\n", cadena1);

    return 0;
}
```

Estas son solo algunas de las funciones básicas para la manipulación de cadenas de caracteres en el lenguaje C. El manejo adecuado de las cadenas es fundamental en la programación, ya que nos permite realizar diversas operaciones y manipulaciones de texto de manera eficiente.

### Ejercicios

Elaborar los siguientes programas: 

1. Elaborar un programa que solicite los siguientes datos: nombre, apellido paterno, apellido materno y fecha de nacimiento en formato DD/MM/AAAA, género y estado de nacimiento y con estos datos generar el RFC de la persona de la siguiente forma: 
	1. Primeras 2 letras del apellido paterno. 
	2. Primera letra del apellido materno 
	3. Primera letra consonante del nombre 
	4. Últimos 2 números del año de nacimiento 
	5. Los dos números del mes 
	6. Los dos números del día 
	7. Si es hombre la letra H y F si es mujer 
	8. Y las primeras 2 letras del nombre del estado.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char nombre[20];
char apellidopat[20];
char apellidomat[15];
char fecha[15];
char genero[5];
char estado[30];
char rfc[100];
int i;
char numerosfecha[5];
int contarvocales;
char vocales[] = "aeiou";
int j;

int main(){

    system("cls");
    printf("Ingrese su nombre/primer nombre: ");
    gets(nombre);
    printf("Ingrese su apellido paterno: ");
    gets(apellidopat);
    printf("Ingrese su apellido materno: ");
    gets(apellidomat);
    printf("Ingrese la fecha de nacimiento DD/MM/AAAA: ");
    gets(fecha);
    printf("Ingrese su genero [H/F]: ");
    gets(genero);
    printf("Ingrese su estado de nacimiento: ");
    gets(estado);

    rfc[0] = toupper(apellidopat[0]);
    rfc[1] = toupper(apellidopat[1]);
    rfc[2] = toupper(apellidomat[0]);
    strncat(rfc, toupper(apellidomat), 1);

    for (i = 0; nombre[i]; i++) 
    {
        contarvocales = 0;
        for (j = 0; vocales[j]; j++) 
        {
            if (tolower(nombre[i]) == vocales[j]) 
            {
                contarvocales++;
                break;
            }
        }
        if (contarvocales == 0) 
        {
            rfc[3] = toupper(nombre[i]);
            break;
        }
    }

    rfc[4] = fecha[8];
    rfc[5] = fecha[9];
    rfc[6] = fecha[3];
    rfc[7] = fecha[4];
    strncat(rfc, fecha, 2);
    rfc[10] = toupper(genero[0]);
    rfc[11] = toupper(estado[0]);
    rfc[12] = toupper(estado[1]);
    
    printf("\nSu RFC es el siguiente: %s\n", rfc);

    return 0;
}
```

2. Elaborar un programa que lea un texto de máximo 100 caracteres y que al finalizar cambie las mayúsculas a minúsculas y viceversa, a los dígitos del texto les sume 1, de tal manera que el 0 cambie a 1, el 1 a 2, el 2 a 3, etc, pero el 9 pasara a 0 y cambiar todas las vocales por un símbolo ampersand &.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int main(){

    char texto[101];
    int i;

    system("cls");
    printf("Ingrese un texto de maximo 100 caracteres: \n");
    gets(texto);
    printf("\nEste es el texto modificado: \n");
    for ( i = 0; i < strlen(texto); i++)
    {   
        if (texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u' )
        {
            printf("%c", '&');
        } else if (texto[i] == 'A' || texto[i] == 'E' || texto[i] == 'I' || texto[i] == 'O' || texto[i] == 'U' )
        {
            printf("%c", '&');
        } else if (isupper(texto[i]))
        {
            printf("%c", tolower(texto[i]));
        } else {
           printf("%c", toupper(texto[i])); 
        }

        if (isdigit(texto[i]))
        {
            printf("\b%c", (texto[i] + 1));
            if (texto[i] == 57){
                printf("\b%c", 48);
            }
        }
    }

    return 0;
}
```


## Conclusiones

En conclusión, las cadenas de caracteres son un tipo de dato fundamental en cualquier lenguaje de programación, incluyendo el lenguaje C. En C, las cadenas se representan como arreglos de caracteres, donde cada caracter se almacena en una posición del arreglo. La manipulación de cadenas de caracteres se realiza utilizando una serie de funciones esenciales.

Algunas de estas funciones básicas para la manipulación de cadenas incluyen `strlen()`, que se utiliza para obtener la longitud de una cadena; `strcpy()`, que permite copiar una cadena en otra; y `strcat()`, que se emplea para concatenar dos cadenas. Estas funciones son de gran utilidad para realizar diversas operaciones y manipulaciones de texto de manera eficiente.

En este documento se presentaron ejemplos de programas en lenguaje C que utilizan estas funciones para ilustrar su uso. El primer programa muestra cómo generar el RFC de una persona a partir de datos como el nombre, apellidos, fecha de nacimiento, género y estado de nacimiento. El segundo programa realiza modificaciones en un texto ingresado, cambiando las mayúsculas a minúsculas, viceversa, sumando 1 a los dígitos y reemplazando las vocales por el símbolo '&'.

Dominar el manejo de cadenas de caracteres en el lenguaje C es fundamental para desarrollar aplicaciones que requieren el procesamiento de texto. Estas habilidades son ampliamente aplicables en diferentes áreas de la programación y son la base para la construcción de programas más complejos y funcionales.