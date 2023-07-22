---
title: 'Programacion con múltiples clases optimizando el codigo'
subtitle: 'Trabajando con arreglos de objetos y manipulando cadenas de texto en Java'
keywords: 'Java, arreglos de objetos, programación, optimización de código, clase String, manipulación de cadenas de texto'
date: '21/10/2022'
---

En el desarrollo de aplicaciones en Java, es común encontrarnos con situaciones en las que necesitamos utilizar arreglos de objetos en lugar de arreglos de tipos primitivos (int, char, float, etc.). Utilizar arreglos de objetos puede optimizar nuestro código y proporcionar una mayor flexibilidad en el manejo de datos. Afortunadamente, en Java, podemos declarar y trabajar con arreglos de clases de manera similar a los arreglos de tipos primitivos.

## Arreglos de Objetos en Java

Los arreglos de objetos en Java nos permiten almacenar múltiples instancias de una clase en una estructura de datos unificada. En lugar de trabajar con varios atributos separados, podemos agrupar objetos relacionados en un solo arreglo. Esto facilita la manipulación y el procesamiento de datos en bloques, lo que puede mejorar el rendimiento y la eficiencia de nuestro código.

Para declarar un arreglo de objetos en Java, seguimos una sintaxis similar a la de los arreglos de tipos primitivos, pero en lugar de especificar el tipo de datos primitivo, utilizamos el nombre de la clase que queremos almacenar en el arreglo. Por ejemplo, si tenemos una clase `Persona`, podemos declarar un arreglo de objetos de esta clase de la siguiente manera:

```java
Persona[] arregloPersonas = new Persona[5];
```

En este ejemplo, hemos declarado un arreglo llamado `arregloPersonas` que puede almacenar hasta 5 objetos de tipo `Persona`. Sin embargo, en este punto, el arreglo solo ha sido inicializado y contiene referencias nulas. Debemos crear instancias individuales de `Persona` y asignarlas al arreglo para que sea utilizable.

## Manipulación de Cadenas de Texto con la Clase String

Además de trabajar con arreglos de objetos, otro aspecto importante de la programación en Java es la manipulación de cadenas de texto. Java proporciona la clase `String`, que ofrece una variedad de métodos para trabajar con cadenas.

Algunos ejemplos de los métodos útiles de la clase `String` son:

- `length()`: Devuelve la longitud de la cadena.
- `charAt(int index)`: Devuelve el carácter en la posición especificada por el índice.
- `substring(int beginIndex, int endIndex)`: Devuelve una subcadena desde el índice `beginIndex` hasta el índice `endIndex-1`.
- `indexOf(String str)`: Devuelve la posición de la primera aparición de la subcadena `str`.
- `toUpperCase()` y `toLowerCase()`: Convierten la cadena a mayúsculas o minúsculas, respectivamente.

Estos métodos permiten manipular y extraer información de las cadenas de texto de manera sencilla, lo que facilita tareas como la validación, el formateo y la búsqueda de patrones.

### Ejercicios

1. Se requiere un programa para registrar y consultar los datos de un directorio telefónico.

```java
public class Directorio{
    private String nombre;
    private String direccion;
    private String telefono;
    private String correoElectronico;

    public Directorio(String name, String direction, String phone, String email){
        this.nombre = name;
        this.direccion = direction;
        this.telefono = phone;
        this.correoElectronico = email;
    }

    public String getNombre(){
        return this.nombre;
    }
    public String getDireccion(){
        return this.direccion;
    }
    public String getTelefono(){
        return this.telefono;
    }
    public String getCorreo(){
        return this.correoElectronico;
    }
}
```

```java
import java.util.Scanner;

public class Acciones {
    Directorio D[];
    int x;
    int numero;

    public Acciones(Scanner Sc) {
        System.out.print("Defina la cantidad de registros que desea: ");
        this.numero = Sc.nextInt();
        D = new Directorio[numero];
        this.x = 0;
    }

    public String altas(String name, String direction, String phone, String email) {
        String response = "Agregado exitosamente";
        if (x < numero) {
            D[x] = new Directorio(name, direction, phone, email);
            this.x++;
        } else {
            response = "No puede agregar otro registro";
        }
        return response;
    }

    public void busqueda(String name) {
        int y, cont = 0;
        name = name.toUpperCase();
        for (y = 0; y < x; y++) {
            if ((D[y].getNombre()).contains(name)) {
                imprimir(D[y]);
                cont++;
                break;
            }
        }
        if (cont == 0) {
            System.out.println("No se encontro el registro");
        }
    }

    public void ConsultaGeneral() {
        int i, y;
        Directorio aux;
        for (i = 0; i < x; i++) {
            for (y = 0; y < x - 1; y++) {
                if (D[y].getNombre().compareTo(D[y + 1].getNombre()) > 0) {
                    aux = D[y];
                    D[y] = D[y + 1];
                    D[y + 1] = aux;
                }
            }
        }
        for (y = 0; y < x; y++) {
            imprimir(D[y]);
        }
    }

    public void ConsultaApellido(String lastName) {

        lastName = lastName.toUpperCase();
        int y, cont=0;
        for (y = 0; y < x; y++) {
            if ((D[y].getNombre().contains(lastName)) == true) {
                String[] num = D[y].getTelefono().split("");
                int l = num.length;
                System.out.println("\n" + "===========================");
                System.out.println("Nombre: " + D[y].getNombre());
                System.out.println("3 ultimos digitos del telefono: " + num[l - 3] + num[l - 2] + num[l - 1]);
                System.out.println("===========================" + "\n");
                cont++;
            }
            if (cont == 0) {
                System.out.println("No se encontro el registro");
            }
        }
    }

    public void ConsultaCorreo(String domine) {
        int y, cont = 0;
        for (y = 0; y < x; y++) {
            String correo = D[y].getCorreo();
            String[] cad = correo.split("@");

            if ((D[y].getCorreo()).contains(domine) == true) {
                System.out.println("\n" + "===========================");
                System.out.println("Nombre: " + D[y].getNombre());
                System.out.println("Cuenta de correo: " + cad[0]);
                System.out.println("===========================" + "\n");
                cont++;
            }
            if (cont == 0) {
                System.out.println("No se encontro lo que buscaba");
            }

        }
    }

    public void imprimir(Directorio Dir) {
        System.out.println("\n" + "===========================");
        System.out.println("Nombre: " + Dir.getNombre());
        System.out.println("Direccion: " + Dir.getDireccion());
        System.out.println("Telefono: " + Dir.getTelefono());
        System.out.println("Correo electronico: " + Dir.getCorreo());
        System.out.println("===========================" + "\n");
    }
}
```

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int opc = 0;
        Scanner Sc = new Scanner(System.in);
        System.out.print("\033[H\033[2J");
        Acciones A = new Acciones(Sc);
        do {
            System.out.print("\033[H\033[2J");
            System.out.println("M E N U  D E  O P C I O N E S" + "\n");
            System.out.println("1. Altas");
            System.out.println("2. Busqueda por nombre");
            System.out.println("3. Consulta general");
            System.out.println("4. Consulta por apellido paterno");
            System.out.println("5. Consulta correo");
            System.out.println("6. Salir");
            System.out.print(">> ");
            opc = Sc.nextInt();
            Sc.nextLine();
            switch (opc) {
                case 1:
                    System.out.print("Ingrese el su primer nombre y apellido paterno: ");
                    String name = Sc.nextLine();
                    name = name.toUpperCase();
                    System.out.print("Ingrese el direccion: ");
                    String direction = Sc.nextLine();
                    System.out.print("Ingrese el telefono: ");
                    String phone = Sc.nextLine();
                    System.out.print("Ingrese el correo electronico: ");
                    String email = Sc.nextLine();
                    String mensaje = A.altas(name, direction, phone, email);
                    System.out.println("\n" + ">> " + mensaje + " <<" + "\n");
                    System.out.print("\n" + "Presione enter para continuar...");
                    Sc.nextLine();
                    break;
                case 2:
                    System.out.print("Ingrese el nombre a buscar: ");
                    String nameS = Sc.nextLine();
                    A.busqueda(nameS);
                    System.out.print("\n" + "Presione enter para continuar...");
                    Sc.nextLine();
                    break;
                case 3:
                    A.ConsultaGeneral();
                    System.out.print("\n" + "Presione enter para continuar...");
                    Sc.nextLine();
                    break;
                case 4:
                    System.out.print("Ingrese el apellido a buscar: ");
                    String lastName = Sc.nextLine();
                    Sc.nextLine();
                    A.ConsultaApellido(lastName);
                    System.out.print("\n" + "Presione enter para continuar...");
                    Sc.nextLine();
                    break;
                case 5:
                    System.out.print("Ingrese el dominio de correo a buscar: ");
                    String dominio = Sc.nextLine();
                    A.ConsultaCorreo(dominio);
                    System.out.print("\n" + "Presione enter para continuar...");
                    Sc.nextLine();
                    break;
                case 6:
                    System.out.println("\n" + "GRACIAS POR USAR EL PROGRAMA");
                    System.out.print("\n" + "Presione enter para continuar...");
                    Sc.nextLine();
                    break;
                default:
                    System.out.println("Opcion no valida");
                    break;
            }
        } while (opc != 6);
        Sc.close();
    }
}
```

## Conclusiones

En este texto, hemos explorado la optimización del código en Java mediante el uso de arreglos de objetos y la manipulación de cadenas de texto con la clase `String`.

La utilización de arreglos de objetos en Java nos brinda una forma más eficiente de manejar y organizar datos relacionados. En lugar de trabajar con múltiples atributos separados, podemos agrupar objetos similares en un solo arreglo, lo que facilita el procesamiento y la manipulación de datos de manera más efectiva. Además, esta técnica nos permite optimizar el rendimiento de nuestras aplicaciones, ya que podemos operar con bloques de datos en lugar de elementos individuales.

Por otro lado, la manipulación de cadenas de texto con la clase `String` es esencial para tareas relacionadas con el manejo de texto en Java. Los diversos métodos disponibles en esta clase, como `length()`, `charAt()`, `substring()`, `indexOf()`, `toUpperCase()` y `toLowerCase()`, nos permiten realizar operaciones avanzadas con cadenas, como búsqueda, extracción y formato, de manera más sencilla y eficiente.

Además de la teoría, el texto nos proporciona un ejemplo práctico sobre cómo implementar un programa para registrar y consultar datos en un directorio telefónico. Utilizando una clase `Directorio` y una clase `Acciones` para realizar diferentes operaciones, podemos ver cómo aplicar arreglos de objetos y la manipulación de cadenas de texto en una situación real.

En conclusión, el conocimiento y la aplicación de arreglos de objetos y la clase `String` en Java nos permiten mejorar la eficiencia y la organización de nuestros programas, lo que nos lleva a crear aplicaciones más robustas y versátiles que satisfacen las necesidades de nuestros usuarios de manera más efectiva. Estas técnicas son herramientas fundamentales para cualquier programador Java y nos ayudan a crear soluciones más potentes y de mayor calidad.
