---
title: 'Excepciones para el manejo de errores'
subtitle: 'Como solucionar errores en la programación y manejo de excepciones en Java'
keywords: 'Java, excepciones, manejo de errores, try-catch, POO'
date: '04/11/2022'
---

## Excepciones en Java: Un enfoque orientado a objetos para el manejo de errores

En el mundo del desarrollo de software, los errores son inevitables. Sin embargo, una buena práctica de programación consiste en manejar adecuadamente estas situaciones excepcionales para garantizar la estabilidad y robustez de nuestras aplicaciones. En Java, una de las herramientas más poderosas para gestionar errores son las excepciones.

### ¿Qué son las excepciones en Java?

En Java, una excepción es un objeto que representa un evento inesperado o no deseado que ocurre durante la ejecución de un programa. Estas situaciones excepcionales pueden ser errores de programación, condiciones imprevistas en el entorno de ejecución o problemas con fuentes externas, como archivos o conexiones de red. Cuando se produce una excepción, el flujo normal del programa se interrumpe, y Java busca un "manejador de excepciones" que pueda lidiar con el problema.

### El enfoque orientado a objetos en el manejo de excepciones

Java, como lenguaje de programación orientado a objetos, ofrece un mecanismo eficiente y estructurado para manejar excepciones. La Programación Orientada a Objetos (POO) nos permite encapsular la lógica del manejo de errores en clases especiales llamadas "excepciones". Estas clases representan diferentes tipos de errores que pueden ocurrir en el programa y se organizan en una jerarquía de clases, lo que facilita su gestión y tratamiento.

Cuando se produce una excepción, Java busca un bloque de código llamado "try-catch" para manejarla. El bloque "try" contiene el código propenso a generar una excepción, mientras que el bloque "catch" contiene el código para manejar la excepción si ocurre. Si se encuentra un "catch" compatible con el tipo de excepción, se ejecuta el código correspondiente, evitando que el programa termine abruptamente.

### Beneficios del manejo de excepciones en POO

El manejo de excepciones en un entorno orientado a objetos tiene varios beneficios significativos:

1. **Mantenibilidad y claridad del código:** El uso de excepciones permite separar la lógica principal del programa de la gestión de errores, lo que mejora la legibilidad y mantenibilidad del código.

2. **Flujo de control estructurado:** El mecanismo de "try-catch" proporciona un flujo de control más estructurado en situaciones excepcionales, lo que facilita el manejo adecuado de errores.

3. **Centralización del manejo de errores:** Al utilizar jerarquías de clases de excepciones, es posible centralizar el manejo de errores específicos en puntos clave del programa, mejorando la coherencia y reutilización del código de manejo de excepciones.

4. **Mejora de la robustez:** Al manejar adecuadamente las excepciones, se evita que el programa se bloquee o colapse por completo en caso de errores, lo que resulta en aplicaciones más robustas y confiables.

### Ejercicios

1. Copiar el programa de la sección anexos de la practica 7, en la clase MtdsArticulos modificar el metodo mostrar(), para que además del noControl muestre el nombre, en la clase MArticulos agregar un menú con opciones para ejecutar las opciones y agregar el manejo de las excepciones que correspondan para un correcto funcionamiento en el programa.
2. Crea una excepción para el manejo de error cuando una cadena tenga longitud mayor a 30 caracteres y otra para cuando contenga números. Desarrollar una aplicación para mostrar el funcionamiento de las excepciones creadas.

```java
public class Articulos {
    private int noControl;
    private String nombre;

    public Articulos(int noControl, String nombre) {
        this.noControl = noControl;
        this.nombre = nombre;
    }

    public int getNoControl() {
        return noControl;
    }

    public String getNombre() {
        return nombre;
    }
}
```

```java
import java.util.Scanner;

public class MArticulos {
    public static void main(String[] args) {
        MtdsArticulos obj = new MtdsArticulos(4);
        ErrorCadena cadL = new ErrorCadena();
        Scanner leer = new Scanner(System.in);
        int opc = 0;

        do {
            System.out.println("M E N U  D E  O P C I O N E S");
            System.out.println("1. Altas");
            System.out.println("2. Consulta");
            System.out.println("3. Busqueda de registro");
            System.out.println("4. Salir");
            System.out.print(">> ");
            opc = leer.nextInt();
            System.out.print("\n");
            switch (opc) {
                case 1:
                    String resp;
                    do {
                        System.out.print("No. Control: ");
                        int no = leer.nextInt();
                        try {
                            System.out.print("Nombre: ");
                            String name = leer.nextLine();
                            name = leer.nextLine();
                            cadL.LongString(name);
                            cadL.NumberOnString(name);
                            String ok = obj.insertar(no, name);
                            System.out.println("\n" + ok + "\n");
                        } catch (ExepLongString e) {
                            System.out.println("Error: " + e);
                        } catch (ExepNumberOnString e) {
                            System.out.println("Error: " + e);
                        }
                        System.out.print("Continuar? [si][no]: ");
                        resp = leer.nextLine();
                        System.out.print("\n");
                    } while (resp.equalsIgnoreCase("si"));
                    System.out.print("\n");
                    break;
                case 2:
                    System.out.println(obj.mostrar());
                    break;
                case 3:
                    System.out.print("No. Control a buscar: ");
                    int noB = leer.nextInt();
                    int pos = obj.buscar(noB);
                    if (pos > -1) {
                        System.out.println("Se encontro en la posicion: " + pos + "\n");
                    } else {
                        System.out.println("No se encontro" + "\n");
                    }
                    break;
                case 4:
                    System.out.println("\n" + "Gracias por usar el programa" + "\n");
                    break;
                default:
                    System.out.println("\n" + "Opcion no valida" + "\n");
                    break;
            }
        } while (opc != 4);

        leer.close();
    }

}
```

```java
public class MtdsArticulos {
    Articulos[] arts;
    int x;
    int N;

    public MtdsArticulos(int N) {
        this.N = N;
        arts = new Articulos[N];
    }

    public String insertar(int noControl, String nombre) {
        String r = "Agregado exitosamente";
        if (x < N) {
            arts[x] = new Articulos(noControl, nombre);
            x++;
        } else {
            r = "No hay espacio para mas registros";
        }
        return r;
    }

    public int buscar(int noBuscar) {
        int pos = -1;
        try {
            for (int y = 0; y < x; y++) {
                if (arts[y].getNoControl() == noBuscar) {
                    pos = y;
                    break;
                }
            }
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Ha ocurrido un error, intentelo de nuevo");
        }
        return pos;
    }

    public String mostrar() {
        String datos = "";
        String separador = "=======================";
        try {
            for (int y = 0; y < x; y++) {
                datos = datos + separador + "\n" + arts[y].getNoControl() + "\n" + arts[y].getNombre() + "\n"
                        + separador + "\n";
            }
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Ha ocurrido un error, intentelo de nuevo");
        }
        return datos;
    }
}
```

```java
public class ExepNumberOnString extends Exception {
    private String nombre;

    public ExepNumberOnString(String name){
        this.nombre = name;
    }
    public String toString(){
        return "Numeros en una cadena: " + nombre;
    }
}
```

```java
class ExepLongString extends Exception{
    private String nombre;

    public ExepLongString(String name){
        this.nombre = name;
    }
    public String toString(){
        return "Nombre demasiado largo: " + nombre;
    }
}
```

```java
public class ErrorCadena {
    public void LongString(String name) throws ExepLongString{
        if (name.length() > 30) {
            throw new ExepLongString(name);
        }
    }
    public void NumberOnString(String name) throws ExepNumberOnString{
        if (name.matches(".*[0-9].*")) {
            throw new ExepNumberOnString(name);
        }
    }
}
```

### Conclusiones

El manejo de excepciones en Java es una práctica esencial para garantizar la estabilidad y robustez de nuestras aplicaciones. Las excepciones son objetos que representan situaciones excepcionales o errores que pueden ocurrir durante la ejecución de un programa. Gracias al enfoque orientado a objetos, podemos encapsular la lógica del manejo de errores en clases especiales, lo que mejora la claridad y mantenibilidad del código.

Uno de los mayores beneficios del manejo de excepciones en POO es la centralización del manejo de errores. Al organizar las excepciones en una jerarquía de clases, podemos manejar diferentes tipos de errores de manera coherente y reutilizar el código de manejo de excepciones en puntos clave del programa.

Además, el uso de bloques "try-catch" proporciona un flujo de control estructurado en situaciones excepcionales, evitando que el programa se bloquee o colapse por completo cuando ocurren errores. Esto conduce a la creación de aplicaciones más robustas y confiables.

En el ejemplo proporcionado, se muestra cómo implementar el manejo de excepciones en un programa que maneja una lista de artículos. El código utiliza clases personalizadas para excepciones, lo que permite detectar cadenas demasiado largas o que contienen números y manejarlas adecuadamente en el programa.

En resumen, el manejo de excepciones en Java es una herramienta poderosa para gestionar errores y mejorar la calidad de nuestras aplicaciones. Mediante la adecuada utilización de excepciones y el enfoque orientado a objetos, podemos crear programas más estables, mantenibles y confiables, brindando una mejor experiencia tanto a los usuarios como a los desarrolladores.
