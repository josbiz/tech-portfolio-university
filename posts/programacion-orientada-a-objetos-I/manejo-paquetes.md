---
title: 'Manejo de paquetes'
subtitle: 'Organización y estructura de clases en paquetes'
keywords: 'Java, paquetes, organización, clases, importación, Programación Orientada a Objetos, POO'
date: '28/10/2022'
---

## Manejo de paquetes con Java

La tecnología de lenguaje de programación Java proporciona la declaración del paquete como una forma de agrupar clases relacionadas. La declaración del paquete es de la siguiente forma:

```java
package nombrePaquete;
```

### ¿Qué es un paquete en Java?

Un paquete en Java es una manera de organizar y estructurar las clases que componen una aplicación. Los paquetes ayudan a evitar conflictos de nombres y facilitan la reutilización del código. Cada paquete tiene un nombre único, y las clases contenidas en un paquete pueden accederse desde otros paquetes si se declaran como públicas.

### Creación de paquetes

Para crear un paquete en Java, simplemente debemos incluir la declaración de paquete al principio del archivo que contiene las clases relacionadas. Por ejemplo, si queremos crear un paquete llamado "com.example.miproyecto", el archivo debe comenzar con:

```java
package com.example.miproyecto;
```

Es importante asegurarse de que la estructura de directorios coincida con la estructura del paquete. En el caso anterior, el archivo debe estar ubicado en una carpeta llamada "miproyecto", que a su vez esté dentro de una carpeta "example", que finalmente esté dentro de otra carpeta "com".

### Importación de paquetes

Para utilizar clases de otros paquetes en nuestro código, necesitamos importar esas clases. Esto se hace mediante la declaración "import". Por ejemplo, si queremos usar una clase llamada "MiClase" que está dentro del paquete "com.example.otroproyecto", debemos agregar la siguiente línea al principio de nuestro archivo:

```java
import com.example.otroproyecto.MiClase;
```

Después de importar la clase, podemos utilizarla en nuestro código sin necesidad de escribir el nombre completo del paquete cada vez que la llamamos.

### Paquetes estándar de Java

Java también proporciona paquetes estándar que contienen clases y utilidades comunes que podemos utilizar en nuestras aplicaciones sin necesidad de importarlos explícitamente. Algunos de los paquetes estándar más utilizados son "java.lang", que contiene clases fundamentales como "String" y "Object", y "java.util", que proporciona utilidades para listas, mapas, fechas, entre otros.

### Ejercicios

1. Crear un programa principal con un menú donde el usuario pueda elegir dibujar un triángulo, rectángulo o pentágono.
   1.1. Esta clase debe pertenecer a un paquete llamado practica9
   1.2. Modifica las clases Triángulos, Rectángulos, y Pentágono desarrolladas en la práctica 3 y 5 para que pertenezcan al paquete correspondiente.
   1.3. Realiza los cambios necesarios para que los programas principales de la práctica 3 y 5 continúen funcionando correctamente.

```java
import mainPack.practica8.*;
import java.util.Scanner;

public class Figuras {
	public static void main(String args[]) {
		Rectangulos r = new Rectangulos();
		Pentagonos p = new Pentagonos();
		Triangulos t = new Triangulos();
		Scanner Sc = new Scanner(System.in);
		int opcion = 0;

		do {
			System.out.println("\033[H\033[2J");
			System.out.println("D I B U J A N D O   F I G U R A S" + "\n");
			System.out.println("1. Rectangulo");
			System.out.println("2. Pentagono");
			System.out.println("3. Triangulos");
			System.out.println("4. Salir");
			System.out.print("Opcion: ");
			opcion = Sc.nextInt();
			Sc.nextLine();
			switch (opcion) {
				case 1:
					System.out.println("\n" + "Dibujando un rectangulo");
					r.Dibujar();
					System.out.print("\n" + "Presione enter para continuar...");
					Sc.nextLine();
					break;
				case 2:
					System.out.println("\n" + "Dibujando un pentagono");
					p.Dibujar();
					System.out.print("\n" + "Presione enter para continuar...");
					Sc.nextLine();
					break;
				case 3:
					System.out.println("\n" + "Dibujando un triangulo");
					t.Dibujar();
					System.out.print("\n" + "Presione enter para continuar...");
					Sc.nextLine();
					break;
				case 4:
					System.out.println("\n" + "Gracias por usar el programa" + "\n");
					System.out.print("\n" + "Presione enter para continuar...");
					Sc.nextLine();
					break;
				default:
					System.out.println("\n" + "Opcion no valida..." + "\n");
					System.out.print("\n" + "Presione enter para continuar...");
					Sc.nextLine();
					break;
			}
		} while (opcion != 4);
		Sc.close();
	}
}
```

```java
package mainPack.practica8;

public class Pentagonos {
	public void Dibujar() {
		System.out.println("    /\\");
		System.out.println("  /    \\");
		System.out.println("/        \\");
		System.out.println("\\        /");
		System.out.println(" \\      /");
		System.out.println("  ------");
	}
}
```

```java
package mainPack.practica8;

public class Rectangulos {
	public void Dibujar() {
		System.out.println("_______________");
		System.out.println("|             |");
		System.out.println("|             |");
		System.out.println("|             |");
		System.out.println("---------------");
	}
}
```

```java
package mainPack.practica8;

public class Triangulos {
    public void Dibujar() {
        System.out.println("    /\\ ");
        System.out.println("   /  \\ ");
        System.out.println("  /    \\ ");
        System.out.println(" /      \\ ");
        System.out.println("/________\\");
    }
}
```

2. Crear un programa principal llamado Banco en el paquete practica9 donde el usuario puede registrar hasta 5 cuentas diferentes.
   2.1. Realiza los siguientes actividades en la clase Cuenta de la practica6:
   2.1.1. Agrega en un atributo de tipo entero llamado noCuenta,
   2.1.2. El método constructor inicializa los dos atributos de la clase.
   2.1.3. Crea el método getNoCuenta();
   2.1.4. Esta clase debe pertenecer al paquete practica6
   2.2.Completa la clase Banco que se muestra a continuación para que el usuario pueda realizar las diferentes opciones que muestra el menú.

```java
package mainPack.practica8;

import java.util.Scanner;
import mainPack.practica6.*;

public class Banco {
	public static void main(String[] args) {
		Scanner t = new Scanner(System.in);
		Cuenta[] cta = new Cuenta[5];
		boolean existe;

		int x = 0;
		int noCuenta, opc;
		double saldo;

		do {
			System.out.println("\n" + "M E N U  D E  O P C I O N E S");
			System.out.println("1. Crear cuenta");
			System.out.println("2. Depositar");
			System.out.println("3. Retirar");
			System.out.println("4. Consulta");
			System.out.println("5. Salir");
			System.out.print(">> ");
			opc = t.nextInt();
			t.nextLine();

			switch (opc) {
				case 1:
					if (x <= 4) {
						System.out.print("Numero de Cuenta: ");
						noCuenta = t.nextInt();
						System.out.print("Saldo inicial: ");
						saldo = t.nextDouble();
						cta[x] = new Cuenta(saldo, noCuenta);
						x++;
					} else {
						System.out.println("\n" + "No se pueden crear mas cuentas");
					}
					break;
				case 2:
					existe = false;
					System.out.print("Numero de Cuenta: ");
					noCuenta = t.nextInt();
					for (int y = 0; y < x; y++) {
						if (noCuenta == cta[y].getNoCuenta()) {
							System.out.print("Cantidad a depositar: ");
							saldo = t.nextDouble();
							cta[y].agregar(saldo);
							existe = true;
						}
					}
					if (existe)
						System.out.println("\n" + ">> Deposito realizado <<");
					else
						System.out.println("\n" + "No se encontro el Numero de Cuenta");
					break;
				case 3:
					existe = false;
					System.out.print("Numero de Cuenta: ");
					noCuenta = t.nextInt();
					for (int y = 0; y < x; y++) {
						if (noCuenta == cta[y].getNoCuenta()) {
							System.out.print("Cantidad a retirar: ");
							saldo = t.nextDouble();
							cta[y].retirar(saldo);
							existe = true;
						}
					}
					if (existe)
						System.out.println("\n" + ">> Retiro realizado <<");
					else
						System.out.println("\n" + "No se encontro el Numero de Cuenta");
					break;
				case 4:
					for (int y = 0; y < x; y++) {
						int noC = cta[y].getNoCuenta();
						double sal = cta[y].getSaldo();
						System.out.println("===========================");
						System.out.println("No de Cuenta: " + noC);
						System.out.println("Saldo: " + sal);
						System.out.println("===========================");
					}
					break;
				case 5:
					System.out.println("Gracias por usar el programa");
					break;
				default:
					System.out.println("Opcion no valida");
					break;
			}
		} while (opc != 5);
		t.close();
	}
}
```

```java
package mainPack.practica6;

public class Cuenta{
    private double saldo;
	private int noCuenta;

    public Cuenta(double s, int noC){
        this.saldo = s;
		this.noCuenta = noC;
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
    public int getNoCuenta(){
        return this.noCuenta;
    }
}
```

### Conclusiones

El manejo de paquetes en Java es una técnica fundamental para organizar y estructurar proyectos de programación. Al agrupar clases relacionadas en paquetes, podemos evitar conflictos de nombres y facilitar la reutilización del código en diferentes partes de la aplicación.

Una de las ventajas más significativas del uso de paquetes es que nos permite crear una jerarquía de organización en nuestros proyectos. Al seguir una estructura de directorios correspondiente a la estructura de paquetes, podemos mantener una organización clara y coherente en el código fuente.

Además, el uso de importaciones nos permite acceder a clases de otros paquetes de manera sencilla, lo que mejora la legibilidad y mantenibilidad del código. Con solo una línea de importación, podemos utilizar todas las funcionalidades de una clase de otro paquete sin tener que escribir el nombre completo cada vez.

En el contexto de la Programación Orientada a Objetos (POO) con Java, el manejo de paquetes se vuelve aún más relevante, ya que en proyectos POO es común tener una gran cantidad de clases que interactúan entre sí. Mediante la declaración de paquetes y la distribución lógica de clases en ellos, podemos mejorar la comprensión del flujo del programa y mantener un código modular y escalable.

En resumen, el manejo de paquetes en Java es una práctica esencial para desarrollar proyectos bien estructurados y mantenibles. Al organizar nuestras clases en paquetes adecuados y utilizar importaciones apropiadas, podemos escribir código limpio y eficiente, lo que resulta en aplicaciones más robustas y fáciles de mantener a lo largo del tiempo.
