---
title: 'Programación con una clase en editor de texto'
subtitle: 'Estructura de una clase y ejemplos'
keywords: 'Programación con una clase, Java, Atributos, Métodos, Constructor, Ejemplos, Modularidad'
date: '09/09/2022'
---

## Estructura de una Clase en Java

Antes de profundizar en la programación con una sola clase, es importante comprender la estructura básica de una clase en Java. Una clase consta de tres elementos principales:

1. **Atributos**: Los atributos son variables que almacenan datos asociados a la clase. Pueden ser de diferentes tipos de datos, como enteros, cadenas de texto, booleanos, entre otros.
2. **Métodos**: Los métodos son funciones que definen el comportamiento de la clase. Pueden realizar operaciones, acceder y modificar los atributos y retornar valores.
3. **Constructor**: El constructor es un método especial que se ejecuta al crear un objeto de la clase. Se utiliza para inicializar los atributos u otros procesos necesarios al crear una instancia de la clase.

## Programación con una sola Clase

La programación con una sola clase en Java implica la implementación de toda la lógica y funcionalidad en una única clase. Esto significa que todos los atributos, métodos y el constructor se definen dentro de esa clase.

Aunque puede haber situaciones simples en las que utilizar una sola clase sea suficiente, generalmente es recomendable utilizar múltiples clases para lograr una mejor estructura y modularidad del código. Las clases adicionales permiten organizar y encapsular la funcionalidad relacionada en unidades separadas, lo que facilita la comprensión y el mantenimiento del código a medida que el programa crece en tamaño y complejidad.

## Ejemplo de Programación con una sola Clase

A continuación, se presenta un ejemplo básico de programación con una sola clase en Java. Supongamos que deseamos crear un programa que calcule el área de un círculo.

```java
public class CalculadoraDeArea {
	private double radio;
	public CalculadoraDeArea(double radio) {
		this.radio = radio;
	}

	public double calcularArea() {
		return Math.PI * radio * radio;
	}

	public static void main(String[] args) {
		double radio = 5.0;
		CalculadoraDeArea calculadora = new CalculadoraDeArea(radio);
		double area = calculadora.calcularArea();
		System.out.println("El área del círculo es: " + area);
	}
}
```

En este ejemplo, la clase `CalculadoraDeArea` tiene un atributo `radio`, un constructor para inicializar el radio, un método `calcularArea()` para realizar el cálculo y el método `main()` para ejecutar el programa. Todo el código se encuentra dentro de esta única clase.

### Ejercicios

1. Copiar, analizar y ejecutar el siguiente ejemplo.

````java
public class Plumones {

	private String color;
	private String marca;
	public String tipo;

	public void escribir(String msg) {
		System.out.println(msg + " usando el plumon " + marca);
	}

	public void pintar() {
		System.out.println("pintando de color " + color + " sobre " + tipo);

	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public static void main(String[] args) {
		Plumones plumon = new Plumones();
		plumon.setMarca(args[1]);
		plumon.setColor(args[0]);
		plumon.tipo = "pizarron";
		plumon.pintar();
		plumon.escribir("Hola mundo");
	}
}
	```

2. Elabora un programa que muestre la tabla de multiplicar del 7, la salida debe ser:
	7 * 1 = 7
	7 * 2 = 14
	…
	7 * 12 = 84

```java
public class Multiplicar {
    public static void main(String[] args) {
        int number = Integer.parseInt(args[0]);

        for (int i = 1; i <= 12; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }
}
````

3. Copia, compila, corrige y ejecuta el siguiente programa. Para poder compilar y ejecutar este programa, es necesario colocar las dobles comillas en la palabra toyota, colocar los paréntesis en la función Carro(), colocar (float) para asignar un valor flotante y además poner corchetes en la función principal, específicamente en la palabra String

```java
public class Carros {
    private String marca;
    private float capacidadTanque;

    public void llenarTanque(float capacidadTanque) {
        System.out.println("se cargaron " + capacidadTanque + " litros de gasolina");

    }

    public void avanzar(String marca) {
        System.out.println("paseando en el carro " + marca);

    }

    public static void main(String[] args) {
        Carros carro = new Carros();
        carro.capacidadTanque = (float) 60.5;
        carro.marca = "toyota";
        carro.llenarTanque(carro.capacidadTanque);
        carro.avanzar(carro.marca);
    }
}
```

4. Elabora un clase llamada Triángulos, con el método dibujar, donde se mostrará la figura en pantalla, crea la clase llamada Figuras, donde invoques el método anteriormente creado.

```java
public class Triangulos {

    public static void main(String[] args) {
        Triangulos shape = new Triangulos();
        shape.Draw();
    }

    public void Draw() {
        System.out.println("    /\\ ");
        System.out.println("   /  \\ ");
        System.out.println("  /    \\ ");
        System.out.println(" /      \\ ");
        System.out.println("/________\\");
    }
}
```

## Conclusiones

La programación con una sola clase en Java puede ser adecuada para situaciones simples y programas pequeños. Sin embargo, a medida que el programa crece en tamaño y complejidad, es recomendable utilizar múltiples clases para lograr una mejor estructura y modularidad del código. Las clases adicionales permiten organizar la funcionalidad relacionada de manera más eficiente, facilitando la comprensión y el mantenimiento del programa a largo plazo.
