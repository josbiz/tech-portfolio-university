---
title: 'Clases con herencia'
subtitle: 'Aprovecha la potencia de la herencia para mejorar tus clases'
keywords: 'Java, programación, herencia, clases, objetos'
date: '18/11/2022'
---

## Introducción a la Herencia en Clases de Java

La herencia es un concepto fundamental en la programación orientada a objetos (POO) que permite la creación de jerarquías de clases, facilitando la reutilización de código y la organización de las relaciones entre objetos. En el contexto de Java, la herencia juega un papel crucial para desarrollar aplicaciones más eficientes y mantenibles.

## ¿Qué es la Herencia?

La herencia es un mecanismo que permite a una clase adquirir propiedades y comportamientos de otra clase, conocida como la clase padre o superclase. La clase que hereda estas características se conoce como la clase hija o subclase. La herencia se basa en el principio de la "especialización" de objetos, donde una clase más específica extiende el comportamiento de una clase más general.

## Beneficios de Usar Herencia en Java

El uso de herencia en Java tiene numerosos beneficios, entre los cuales se destacan:

1. **Reutilización de Código:** Al heredar de una clase existente, podemos aprovechar su implementación y extenderla según las necesidades específicas de la nueva clase. Esto evita duplicar código y fomenta la organización.

2. **Facilita la Mantenibilidad:** Al crear jerarquías de clases, se pueden realizar cambios en la clase padre que afectarán automáticamente a todas las clases hijas. Esto facilita el mantenimiento del código a lo largo del tiempo.

3. **Abstracción de Conceptos:** La herencia permite modelar conceptos más abstractos y genéricos en clases base, y luego refinar esos conceptos en clases hijas más especializadas.

4. **Polimorfismo:** Gracias a la herencia, podemos utilizar referencias de la clase padre para manipular objetos de las clases hijas. Esto da lugar al polimorfismo, que es un concepto esencial en la POO.

## Sintaxis de Herencia en Java

En Java, la sintaxis para implementar herencia es mediante la palabra clave `extends`. Por ejemplo, para crear una clase hija llamada `ClaseHija` que herede de la clase padre `ClasePadre`, utilizamos la siguiente declaración:

```java
public class ClaseHija extends ClasePadre {
    // Cuerpo de la clase hija
}
```

La clase hija `ClaseHija` adquirirá todos los atributos y métodos no privados de `ClasePadre`, permitiéndonos ampliar o sobrescribir su comportamiento según sea necesario.

### Ejercicios

De acuerdo a los siguientes diagramas realice el código que implemente las clases mostradas y utilice vectores de objetos para manipular los objetos desde la clase principal.
En el diagrama se muestra la clase Cuenta, se utilizará la del paquete practica6 , solo se deberá cambiar el modificador de acceso como lo indica el diagrama (# protegido).
Las dos clases derivadas pertenecerán al paquete practica10, al igual que una clase principal para probar el funcionamiento de las clases.
En la clase principal mostrar el siguiente menú:

1. Cuenta de Ahorros
2. Cuenta de Cheques
3. Salir
   Cada opción mostrara el siguiente submenú:
4. Crear cuenta
5. Deposito (agregar)
6. Retirar
7. Consulta saldo
8. Regresar

| Cuenta                         |
| ------------------------------ |
| # saldo: double                |
| # noCuenta: int                |
| ------------------------------ |
| + Cuenta(s: double)            |
| + agregar(cantidad: double)    |
| + retirar(cantidad: double)    |
| + getSaldo(): double           |

| CuentaAhorros                                       |
| --------------------------------------------------- |
| - tasaInteres : double                              |
| ------------------------------                      |
| + CuentaAhorros(saldo: double, tasaInteres: double) |
| + agregar(cantidad: double)                         |

| CuentaAhorros                                             |
| --------------------------------------------------------- |
| - cantidadSobregiro : double                              |
| ------------------------------                            |
| + CuentaAhorros(saldo: double, cantidadSobregiro: double) |
| + retirar(cantidad: double)                               |

**Una cuenta de ahorros gana intereses.** El banco permite a los clientes guardar su dinero en una cuenta de ahorros y, sobre una tasa de interés mensual, el saldo de la cuenta de ahorros se acumulan más el interés obtenido.
**Una cuenta de cheques le permite al cliente hacer cualquier número de depósitos y retiros.** Para proteger a sus clientes, el banco permite que se defina una cantidad fija de protección contra sobregiros. Esta protección permite al saldo del cliente caer por debajo de cero, pero no por debajo de la cantidad de protecc ión contra sobregiros. La cantidadDeSobregiro es disminuida al utilizarse. Esto significa que si no tiene suficiente saldo podrá tomar de esta cantidadDeSobregiro, mientras tenga suficiente para realizar retiros

```java
import java.util.Scanner;

import src.practica10.*;

public class Banco {
	public static void main(String[] args) {
		Scanner t = new Scanner(System.in);
		CuentaAhorros[] ctaAhorros = new CuentaAhorros[5];
		CuentaDeCheques[] ctaCheques = new CuentaDeCheques[5];

		int opc, x = 0;

		do {
			System.out.print("\033[H\033[2J");
			System.out.flush();
			System.out.println("\n" + "B A N C O" + "\n");
			System.out.println("1. Cuenta de ahorros");
			System.out.println("2. Cuenta de cheques");
			System.out.println("3. Salir");
			System.out.print(">> ");
			opc = t.nextInt();
			t.nextLine();

			switch (opc) {
				case 1:
					System.out.print("\033[H\033[2J");
					System.out.flush();
					menuAhorro(ctaAhorros, t, x);
					break;
				case 2:
					System.out.print("\033[H\033[2J");
					System.out.flush();
					menuCheques(ctaCheques, t, x);
					break;
				case 3:
					System.out.println("Gracias por usar el programa");
					break;
				default:
					System.out.println("Opcion no valida");
					break;
			}
		} while (opc != 3);
		t.close();
	}

	public static void menuAhorro(CuentaAhorros[] ctaAhorros, Scanner t, int x) {
		boolean existe;

		int noCuenta, opc2 = 0;
		double saldo, tasa;

		do {
			System.out.println("\n" + "C U E N T A   D E  A H O R R O S" + "\n");
			System.out.println("1. Crear cuenta");
			System.out.println("2. Depositar");
			System.out.println("3. Retirar");
			System.out.println("4. Consulta saldo");
			System.out.println("5. Salir");
			System.out.print(">> ");
			opc2 = t.nextInt();

			switch (opc2) {
				case 1:
					if (x <= 4) {
						System.out.print("Numero de Cuenta: ");
						noCuenta = t.nextInt();
						System.out.print("Saldo inicial: ");
						saldo = t.nextDouble();
						System.out.print("Tasa de inteseres (en %): ");
						tasa = t.nextDouble();
						tasa = tasa / 100;
						ctaAhorros[x] = new CuentaAhorros(saldo, tasa, noCuenta);
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
						if (noCuenta == ctaAhorros[y].getNoCuenta()) {
							System.out.print("Cantidad a depositar: ");
							saldo = t.nextDouble();
							ctaAhorros[y].agregar(saldo);
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
						if (noCuenta == ctaAhorros[y].getNoCuenta()) {
							System.out.print("Cantidad a retirar: ");
							saldo = t.nextDouble();
							ctaAhorros[y].retirar(saldo);
							existe = true;
						}
					}
					if (!existe)
						System.out.println("\n" + "No se encontro el Numero de Cuenta");
					break;
				case 4:
					for (int y = 0; y < x; y++) {
						int noC = ctaAhorros[y].getNoCuenta();
						double sal = ctaAhorros[y].getSaldo();
						System.out.println("===========================");
						System.out.println("No de Cuenta: " + noC);
						System.out.println("Saldo: " + sal);
						System.out.println("===========================");
					}
					break;
				case 5:
					System.out.println("Regresando al menu principal");
					break;
				default:
					System.out.println("Opcion no valida");
					break;
			}
		} while (opc2 != 5);
	}

	public static void menuCheques(CuentaDeCheques[] ctaCheques, Scanner t, int x) {

		int noCuenta, opc3;
		double saldo, sobregiro;
		boolean existe;
		do {
			System.out.println("\n" + "C U E N T A   D E  C H E Q U E S" + "\n");
			System.out.println("1. Crear cuenta");
			System.out.println("2. Depositar");
			System.out.println("3. Retirar");
			System.out.println("4. Consulta saldo");
			System.out.println("5. Salir");
			System.out.print(">> ");
			opc3 = t.nextInt();

			switch (opc3) {
				case 1:
					if (x <= 4) {
						System.out.print("Numero de Cuenta: ");
						noCuenta = t.nextInt();
						System.out.print("Saldo inicial: ");
						saldo = t.nextDouble();
						System.out.print("Cantidad de sobregiro: ");
						sobregiro = t.nextDouble();
						ctaCheques[x] = new CuentaDeCheques(saldo, sobregiro, noCuenta);
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
						if (noCuenta == ctaCheques[y].getNoCuenta()) {
							System.out.print("Cantidad a depositar: ");
							saldo = t.nextDouble();
							ctaCheques[y].agregar(saldo);
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
						if (noCuenta == ctaCheques[y].getNoCuenta()) {
							System.out.print("Cantidad a retirar: ");
							saldo = t.nextDouble();
							ctaCheques[y].retirar(saldo);
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
						int noC = ctaCheques[y].getNoCuenta();
						double sal = ctaCheques[y].getSaldo();
						System.out.println("===========================");
						System.out.println("No de Cuenta: " + noC);
						System.out.println("Saldo: " + sal);
						System.out.println("===========================");
					}
					break;
				case 5:
					System.out.println("Regresando al menu principal");
					break;
				default:
					System.out.println("Opcion no valida");
					break;
			}
		} while (opc3 != 5);
	}
}
```

```java
package src.practica6;

public class Cuenta{
    protected double saldo;
	protected int noCuenta;

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

```java
package src.practica10;

import src.practica6.*;

public class CuentaAhorros extends Cuenta{
    private double tasaInteres;

    public CuentaAhorros(double saldo, double tasaInteres, int noCuenta){
        super(saldo, noCuenta);
        this.tasaInteres = tasaInteres;
    }

    public void agregar(double cantidad){
        saldo = saldo + cantidad;
        saldo = saldo + (cantidad * tasaInteres);
    }
}
```

```java
package src.practica10;

import src.practica6.*;

public class CuentaDeCheques extends Cuenta{
    private double cantidadSobregiro;

    public CuentaDeCheques(double saldo, double cantidadSobregiro, int noCuenta){
        super(saldo, noCuenta);
        this.cantidadSobregiro = cantidadSobregiro;
    }

    public void retirar(double cantidad){
        if ((saldo - cantidad) < (cantidadSobregiro * -1)){
            System.out.println("No se puede retirar esa cantidad");
        } else {
            System.out.println(">> Retiro realizado <<");
            saldo = saldo - cantidad;
        }
    }
}
```

## Conclusiones

La herencia es una característica poderosa de Java y la programación orientada a objetos en general. Al comprender y aplicar adecuadamente la herencia, puedes construir aplicaciones más estructuradas, fáciles de mantener y con un código más limpio. Además, el uso inteligente de la herencia puede mejorar significativamente la eficiencia y la legibilidad de tu código.

En resumen, al emplear herencia en clases de Java, puedes maximizar la reutilización de código, mejorar la organización de tus proyectos y potenciar la flexibilidad y el polimorfismo en tus aplicaciones.
