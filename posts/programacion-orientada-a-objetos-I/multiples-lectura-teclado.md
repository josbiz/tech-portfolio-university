---
title: 'Múltiples clases y lectura desde el teclado'
subtitle: 'Explorando la estructura de programas en Java y la interacción con el usuario'
keywords: 'Java, clases, variables, métodos, objetos, interacción, lectura desde el teclado'
date: '07/10/2022'
---

# Múltiples clases y lectura desde el teclado

En Java, los programas completos generalmente consisten en varias clases de Java almacenadas en diferentes archivos fuente. Estas clases son componentes fundamentales en la estructura de un programa, ya que contienen variables de diversos tipos para almacenar datos y métodos que implementan código capaz de manipular esas variables y crear objetos o instancias de clase.

La utilización de múltiples clases permite organizar el código de manera modular y facilita su mantenimiento y reutilización. Cada clase puede tener su propia funcionalidad específica, lo que ayuda a mantener un código limpio y estructurado.

En el contexto de la interacción con el usuario, una tarea común es la lectura de datos proporcionados desde el teclado. Java proporciona diferentes mecanismos para lograr esto, pero uno de los más utilizados es el uso de la clase `Scanner`.

La clase `Scanner` permite leer diferentes tipos de datos desde el teclado, como enteros, flotantes, cadenas, etc. Para utilizarla, primero debemos importarla en nuestro programa. A continuación, podemos crear una instancia de la clase `Scanner` y utilizar sus métodos para leer los datos ingresados por el usuario.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese su nombre: ");
        String nombre = scanner.nextLine();

        System.out.print("Ingrese su edad: ");
        int edad = scanner.nextInt();

        System.out.println("¡Hola, " + nombre + "! Tienes " + edad + " años.");
    }
}
```

En el ejemplo anterior, se crea una instancia de `Scanner` llamada `scanner` que utiliza el flujo de entrada estándar (`System.in`) para leer los datos del teclado. A través de los métodos `nextLine()` y `nextInt()`, se lee una cadena correspondiente al nombre y un entero correspondiente a la edad, respectivamente. Estos valores se utilizan posteriormente para mostrar un mensaje de saludo personalizado.

### Ejemplos

1. Elabora una clase llamada Rectángulos, y otra llamada Pentágono, cada una con el método dibujar, donde se mostrará la figura correspondiente en pantalla. Crea una clase llamada Dibujos y en el main muestra un menú para que el usuario elija cual figura quiere ver.

```java
import java.util.Scanner;

public class Dibujos {
    public static class Rectangulos {
        public void Dibujar() {
            System.out.println("_______________");
            System.out.println("|             |");
            System.out.println("|             |");
            System.out.println("|             |");
            System.out.println("---------------");
        }
    }

    public static class Pentagono {
        public void Dibujar() {
            // Printing a pentagon
            System.out.println("    /\\");
            System.out.println("  /    \\");
            System.out.println("/        \\");
            System.out.println("\\        /");
            System.out.println(" \\      /");
            System.out.println("  ------");
        }
    }

    public static void main(String args[]) {
        Rectangulos r = new Rectangulos();
        Pentagono p = new Pentagono();
        Scanner Sc = new Scanner(System.in);
        int opcion = 0;

        System.out.println("D I B U J A N D O   F I G U R A S" + "\n");
        do {
            System.out.println("1. Rectangulo");
            System.out.println("2. Pentagono");
            System.out.println("3. Salir");
            System.out.print("Opcion: ");
            opcion = Sc.nextInt();
            switch (opcion) {
                case 1:
                    System.out.println("\n" + "Dibujando un rectangulo");
                    r.Dibujar();
                    System.out.println("");
                    break;
                case 2:
                    System.out.println("\n" + "Dibujando un pentagono");
                    p.Dibujar();
                    System.out.println("");
                    break;
                case 3:
                    System.out.println("\n" + "Gracias por usar el programa" + "\n");
                    break;
                default:
                    System.out.println("\n" + "Opcion no valida" + "\n");
                    break;
            }
        } while (opcion != 3);
    }
}
```

2. Defina la clase Ecuaciones donde se obtenga la raíz cuadrada de un número, el usuario puede ingresar 'n' valores de entrada para obtener su raíz cuadrada; utilizar argumentos variables. Definir la clase Principal que reciba los argumentos desde línea de comandos.

```java
import java.util.Scanner;
import java.lang.Math;

public class Principal {

	public static class Ecuaciones{
		public void Calculo(double numero){
			double raiz = Math.sqrt(numero);
			System.out.print("La raiz del numero es: " + raiz + "\n");
		}
	}


	public static void main(String args[]) {
		Scanner Sc = new Scanner(System.in);
		Ecuaciones ec = new Ecuaciones();
		int x;

		System.out.print("\033[H\033[2J");
    	System.out.flush();
		System.out.println("");
    	System.out.print("Escriba el numero de veces que quiere probar: ");
		int intentos = Sc.nextInt();

		for (x = 0; x < intentos; x++) {
			System.out.print("\n" + "Escribe el numero para obtener raiz: ");
			double numero = Sc.nextDouble();
			ec.Calculo(numero);
		}

		Sc.close();
	}
}
```

3. Crear una aplicación utilizando la siguiente clase, el método validar, verifica si la fecha dada por el usuario es correcta y se almacena en el atributo fecha, de lo contrario avisar al usuario el error y asignar la fecha actual(obtener del sistema); el método mostrar, indica el evento y la fecha registrado. Pedir datos desde el teclado.

```java
import java.util.Scanner;
import java.time.*;

public class Agendas {

    public static void validar(LocalDate date) {

        LocalDate hoy = LocalDate.now();
        int comparar = hoy.compareTo(date);

        if (comparar > 0) {
            System.out.println("La fecha es anterior a la actual");
        } else if (comparar < 0) {
            System.out.println("La fecha es posterior a la actual");
        } else {
            System.out.println("La fecha es correcta");
        }
    }

    public static void mostrar() {
        LocalDate hoy = LocalDate.now();
        System.out.print("\n" + "La fecha actual es: " + hoy + "\n");
    }

    public static void main(String[] args) {
        int opc;
        String fecha;
        Scanner sc = new Scanner(System.in);

        // Clear console
        System.out.print("\033[H\033[2J");
        System.out.flush();

        do {

            System.out.println("Menu de Fechas\n");
            System.out.println("[1] Validar" + "\n" + "[2] Mostrar" + "\n" + "[3] Salir");
            System.out.print(">> ");
            opc = sc.nextInt();
            sc.nextLine();

            switch (opc) {
                case 1:
                    System.out.print("\n" + "Introduzca la fecha de hoy para compararla [yyyy-mm-dd]: ");
                    fecha = sc.nextLine();
                    // Manejando exception
                    try {
                        LocalDate fobj = LocalDate.parse(fecha);
                        validar(fobj);
                    } catch (Exception e) {
                        System.out.print("Introduzca la fecha con formato [yyyy-mm-dd]");
                    }
                    break;
                case 2:
                    mostrar();
                    break;
                case 3:
                    System.out.println("\n" + "Gracias por usar el programa" + "\n");
                    break;
                default:
                    System.out.println("\n" + "Opcion no valida");
                    break;
            }
            System.out.println("\n");
        } while (opc != 3);
        sc.close();
    }
}
```

## Conclusiones

En este artículo, hemos explorado el tema de las múltiples clases y la lectura desde el teclado en Java. Hemos aprendido que los programas completos en Java suelen estar compuestos por varias clases, las cuales contienen variables y métodos que manipulan dichas variables.

La utilización de múltiples clases en Java proporciona una forma organizada y modular de estructurar nuestros programas. Esto nos permite dividir el código en componentes más pequeños y específicos, lo cual facilita su mantenimiento y reutilización. Cada clase puede tener su propia funcionalidad y trabajar en conjunto con otras clases para lograr los objetivos del programa.

Además, hemos visto cómo interactuar con el usuario a través de la lectura de datos desde el teclado. El uso de la clase `Scanner` nos permite leer diferentes tipos de datos, como enteros, flotantes y cadenas, proporcionados por el usuario. Esto nos brinda la posibilidad de crear programas interactivos y dinámicos, donde los datos ingresados por el usuario pueden influir en la ejecución del programa.

En conclusión, el conocimiento sobre cómo trabajar con múltiples clases y cómo leer datos desde el teclado en Java es fundamental para desarrollar programas más complejos y flexibles. Estas habilidades nos permiten escribir código más estructurado, modular y orientado al usuario, lo cual mejora la calidad y la experiencia de uso de nuestras aplicaciones.
