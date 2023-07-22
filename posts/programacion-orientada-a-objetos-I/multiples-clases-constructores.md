---
title: 'Programación con múltiples clases y constructores'
subtitle: 'Estructurando programas en Java con clases y utilizando constructores'
keywords: 'Java, programación, clases, constructores, estructura de programas'
date: '14/10/2022'
---

# Constructores en Java

Un constructor es un conjunto de instrucciones diseñadas para inicializar una instancia de una clase en Java.

Cada clase en Java tiene al menos un constructor asociado. Si no se escribe explícitamente un constructor, el lenguaje de programación Java proporciona automáticamente un constructor por defecto. Este constructor por defecto no tiene argumentos y tiene un cuerpo vacío.

El constructor por defecto permite crear instancias de objetos utilizando la sintaxis `new Clase();`. Es útil cuando no se requiere realizar ninguna operación especial durante la inicialización del objeto.

Sin embargo, en muchos casos, necesitamos configurar ciertos atributos o realizar acciones específicas al crear una instancia. Para ello, debemos definir nuestros propios constructores personalizados.

Un constructor personalizado es una forma de especificar cómo se debe inicializar una instancia de la clase. Puede recibir uno o más argumentos, los cuales se utilizan para proporcionar valores iniciales a los atributos del objeto. Dentro del cuerpo del constructor, podemos realizar diversas acciones, como asignar valores a los atributos, invocar métodos u otras tareas necesarias para la inicialización adecuada del objeto.

La definición de constructores personalizados nos brinda flexibilidad y nos permite adaptar la creación de objetos según nuestras necesidades específicas. Podemos tener múltiples constructores en una clase, siempre y cuando tengan diferentes listas de argumentos, lo que se conoce como sobrecarga de constructores.

### Ejercicios

1. Crear la clase Cliente, debe satisfacer el siguiente diagrama UML

|            Clase            |
| :-------------------------: |
|           Cuenta            |
|        ------------         |
|       - saldo: double       |
|        ------------         |
|     + Cuenta(s: double)     |
| + agregar(cantidad: double) |
| + retirar(cantidad: double) |
|    + getSaldo(): double     |

El saldo de la cuenta bancaria no debe ir por debajo de cero. Cree el archivo TestCuenta, esta clase actúa como un programa para crear un objeto cuenta con un saldo inicial dado por el usuario. El programa tendrá un menú para realizar las distintas operaciones.

```java
import java.util.Scanner;

public class Cuenta{
    private double saldo;
    Scanner Sc = new Scanner(System.in);

    public Cuenta(double s){
        this.saldo = s;
    }
    public void agregar(double cantidad){
        saldo = saldo + cantidad;
    }
    public void retirar(double cantidad){
        saldo = saldo - cantidad;
    }
    public double getSaldo(){
        return this.saldo;
    }
}
```

```java
import java.util.Scanner;

public class TestCuenta {

    public static void main(String[] args) {
        Scanner Sc = new Scanner(System.in);
        int opc = 0;
        int bandera = 0;
        int bandera2 = 0;

        System.out.print("Introduzca su saldo inicial: ");
        double cosa = Sc.nextDouble();
        Cuenta c = new Cuenta(cosa);
        do {
            System.out.println("\n" + "M E N U  D E  O P C I O N E S");
            System.out.println("1) Depositar");
            System.out.println("2) Retirar");
            System.out.println("3) Ver saldo");
            System.out.println("4) Salir");
            System.out.print(">> ");
            opc = Sc.nextInt();
            switch (opc) {
                case 1:
                    while (bandera != 1) {
                        System.out.print("\n" + "Introduzca la cantidad a depositar: ");
                        double deposito = Sc.nextDouble();
                        if (deposito > 0) {
                            c.agregar(deposito);
                            bandera = 1;
                        } else {
                            System.out.println("La cantidad a depositar debe ser mayor que 0");
                            bandera = 0;
                        }
                    }
                    break;
                case 2:
                    while (bandera2 != 1) {
                        System.out.print("\n" + "Introduzca la cantidad a retirar: ");
                        double retiro = Sc.nextDouble();
                        if (retiro > 0 && retiro <= c.getSaldo()) {
                            c.retirar(retiro);
                            bandera2 = 1;
                        } else {
                            System.out.println("La cantidad a retirar debe ser mayor que 0 y menor que el saldo");
                            bandera2 = 0;
                        }
                    }
                    break;
                case 3:
                    System.out.println("\n" + "El saldo de su cuenta es: $" + c.getSaldo());
                    break;
                case 4:
                    System.out.println("\n" + "Gracias por usar el programa");
                    break;
                default:
                    break;
            }
        } while (opc != 4);

        Sc.close();
    }
}
```

2. Crear la clase Vectores que contenga métodos para realizar la suma, resta, y multiplicación de dos vectores. Deberá utilizar una clase Principal que contenga un menú de opciones dentro del main que permita seleccionar una operación a realizar con los vectores. Utilizar un constructor para definir el tamaño de los vectores.

```java
import java.util.Scanner;

public class Principal{
    public static void main(String[] args) {
        Scanner Sc = new Scanner(System.in);
        int opcion;
        Vectores vector = new Vectores();
        System.out.print("Ingrese el tamaño de los vectores: ");
        int tamano = Sc.nextInt();
        int[] vector1 = new int[tamano];
        int[] vector2 = new int[tamano];
        int[] vector3 = new int[tamano];
        vector.llenar(vector1, vector2);
        do {
            System.out.println("\n" + "M E N U  D E  O P C I O N E S");
            System.out.println("1. Suma");
            System.out.println("2. Resta");
            System.out.println("3. Multiplicacion");
            System.out.println("4. Division");
            System.out.println("5. Salir");
            System.out.print(">> ");
            opcion = Sc.nextInt();
            switch (opcion) {
                case 1:
                    System.out.println("\n" + "Suma");
                    vector.suma(vector1, vector2, vector3);
                    break;
                case 2:
                    System.out.println("\n" + "Resta");
                    vector.resta(vector1, vector2, vector3);
                    break;
                case 3:
                    System.out.println("\n" + "Multiplicacion");
                    vector.multiplicacion(vector1, vector2, vector3);
                    break;
                case 4:
                    System.out.println("\n" + "Division");
                    vector.division(vector1, vector2, vector3);
                    break;
                case 5:
                    System.out.println("\n" + "Gracias por usar el programa");
                    break;
                default:
                    System.out.println("\n" + "Opcion no valida");
                    break;
            }
        } while (opcion != 5);
        Sc.close();
    }
}
```

```java
import java.util.Scanner;

public class Vectores {
    Scanner Sc = new Scanner(System.in);

    public void llenar(int[] vector1, int[] vector2) {
        System.out.println(" ");
        for (int i = 0; i < vector1.length; i++) {
            System.out.print("Ingrese el valor del vector 1 en la posicion " + i + ": ");
            vector1[i] = Sc.nextInt();
        }
        System.out.println(" ");
        for (int i = 0; i < vector2.length; i++) {
            System.out.print("Ingrese el valor del vector 2 en la posicion " + i + ": ");
            vector2[i] = Sc.nextInt();
        }
    }

    public void suma(int[] vector1, int[] vector2, int[] vector3) {
        for (int i = 0; i < vector1.length; i++) {
            vector3[i] = vector1[i] + vector2[i];
            if (i == 0) {
                System.out.print("[");
            }
            System.out.print(vector3[i] + " ");
            if (i == vector1.length - 1) {
                System.out.print("]" + "\n");
            }
        }
    }

    public void resta(int[] vector1, int[] vector2, int[] vector3) {
        for (int i = 0; i < vector1.length; i++) {
            vector3[i] = vector1[i] - vector2[i];
            if (i == 0) {
                System.out.print("[");
            }
            System.out.print(vector3[i] + " ");
            if (i == vector1.length - 1) {
                System.out.print("]" + "\n");
            }
        }
    }

    public void multiplicacion(int[] vector1, int[] vector2, int[] vector3) {
        for (int i = 0; i < vector1.length; i++) {
            vector3[i] = vector1[i] * vector2[i];
            if (i == 0) {
                System.out.print("[");
            }
            System.out.print(vector3[i] + " ");
            if (i == vector1.length - 1) {
                System.out.print("]" + "\n");
            }
        }
    }

    public void division(int[] vector1, int[] vector2, int[] vector3) {
        for (int i = 0; i < vector1.length; i++) {
            vector3[i] = vector1[i] / vector2[i];
            if (i == 0) {
                System.out.print("[");
            }
            System.out.print(vector3[i] + " ");
            if (i == vector1.length - 1) {
                System.out.print("]" + "\n");
            }
        }

    }
}
```

## Conclusiones

En conclusión, el texto aborda dos aspectos fundamentales de la programación en Java: el uso de constructores y la estructuración de programas mediante clases. Los constructores son métodos especiales que permiten inicializar objetos de una clase y pueden ser personalizados para adaptarse a diferentes situaciones. Esto nos proporciona mayor control y flexibilidad en la creación de objetos.

Por otro lado, la estructuración de programas mediante clases es un pilar central de la programación orientada a objetos. Las clases nos permiten encapsular datos y comportamientos relacionados, lo que mejora la organización y legibilidad del código, y facilita el mantenimiento y escalabilidad del programa.

El primer ejemplo, la clase `Cuenta`, muestra cómo crear una clase con un constructor personalizado y métodos para realizar operaciones de depósito y retiro en una cuenta bancaria. Esto demuestra cómo utilizar constructores para configurar atributos y cómo modularizar el código en clases que representen entidades específicas.

El segundo ejemplo, la clase `Vectores`, ilustra cómo trabajar con un constructor para definir el tamaño de vectores y cómo implementar diferentes operaciones matemáticas entre ellos. Esta muestra cómo organizar el programa en clases para agrupar funcionalidades relacionadas y mejorar la claridad y mantenibilidad del código.

En general, el uso adecuado de constructores y clases en Java contribuye a un diseño más estructurado y eficiente de programas, fomentando buenas prácticas de programación y facilitando la creación de sistemas robustos y flexibles. Al dominar estos conceptos, los programadores pueden desarrollar aplicaciones más sólidas y adaptables que satisfagan las necesidades específicas de sus proyectos.
