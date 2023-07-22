---
title: 'Programación orientada a objetos (Básicos)'
subtitle: 'Conceptos y definiciones basicas para aprender POO con Java'
keywords: 'basicos, atributos, metodos, conceptos, java, compilacion, ejecucion, jvm'
date: '19/08/2022'
---

## Programación Orientada a Objetos con Java

La programación orientada a objetos (POO) es un paradigma de programación que se centra en el uso de objetos para representar y manipular datos. Java, un lenguaje de programación popular y versátil, ofrece un sólido soporte para la POO. A continuación, se presentan los conceptos básicos de la programación orientada a objetos utilizando Java.

## Clases y Objetos

En Java, una **clase** es una plantilla o un plano para crear objetos. Define las propiedades y comportamientos que los objetos de esa clase tendrán. Una clase puede contener variables (llamadas campos) y métodos. Los **objetos** son instancias concretas de una clase, creados utilizando la palabra clave `new`.

## Atributos y Métodos

Los atributos de una clase son variables que almacenan datos asociados a los objetos de esa clase. Los métodos, por otro lado, son funciones o procedimientos que definen el comportamiento de los objetos.

Para acceder a los atributos y métodos de un objeto, se utiliza la notación de punto (`.`). Por ejemplo, si tenemos un objeto `miObjeto` de la clase `MiClase`, podemos acceder al atributo `miAtributo` y al método `miMetodo` de la siguiente manera:

```java
miObjeto.miAtributo;      // Acceso al atributo
miObjeto.miMetodo();      // Llamada al método
```

## Encapsulamiento

El encapsulamiento es un concepto clave en la POO que se refiere a la ocultación de los detalles internos de una clase. En Java, se utiliza la visibilidad para controlar el acceso a los atributos y métodos de una clase.

- **public**: Los atributos y métodos públicos son accesibles desde cualquier lugar.
- **private**: Los atributos y métodos privados solo son accesibles dentro de la propia clase.

Para acceder a los atributos privados, se suelen utilizar métodos públicos llamados _getters_ y _setters_.

```java
private int miAtributo;        // Atributo privado

public int getMiAtributo() {   // Getter público
	return miAtributo;
}

public void setMiAtributo(int valor) {   // Setter público
	miAtributo = valor;
}
```

## Herencia

La herencia es un mecanismo que permite crear nuevas clases basadas en clases existentes. La nueva clase (llamada **subclase** o **clase derivada**) hereda los atributos y métodos de la clase existente (llamada **superclase** o **clase base**). La herencia permite la reutilización de código y facilita la organización de las clases en una jerarquía.

En Java, la herencia se logra utilizando la palabra clave `extends`. Por ejemplo:

```java
public class SubClase extends SuperClase {
	// Atributos y métodos adicionales
}
```

## Polimorfismo

El polimorfismo permite que un objeto pueda ser tratado como si fuera de varios tipos diferentes. Esto se logra mediante el uso de herencia y la capacidad de una clase derivada para sobrescribir los métodos heredados de la clase base.

El polimorfismo en Java se puede utilizar a través de la **sobrecarga de métodos** (métodos con el mismo nombre pero diferentes parámetros) y la **sobrescritura de métodos** (redefinición de un método heredado en una clase derivada).

## Compilación y Ejecución de Programas con Java

Java es un lenguaje de programación compilado y orientado a objetos que se ejecuta en una máquina virtual Java (JVM). La compilación y ejecución de programas en Java implica una serie de pasos que permiten convertir el código fuente en un formato ejecutable. A continuación, se describen los pasos principales para compilar y ejecutar programas con Java.

## Compilación

1. **Escribir el código fuente**: En primer lugar, se debe escribir el código fuente en un archivo con extensión `.java`. Este archivo contendrá las clases y métodos que formarán el programa.
2. **Compilar el código fuente**: A continuación, se utiliza el compilador de Java (`javac`) para traducir el código fuente en bytecode, un formato ejecutable para la JVM. Se ejecuta el siguiente comando en la línea de comandos:

   `javac MiPrograma.java

   Esto generará uno o varios archivos `.class` que contienen el bytecode compilado para cada clase en el programa.

## Ejecución

1. **Preparar el entorno**: Antes de ejecutar el programa, es necesario asegurarse de que la JVM esté instalada en el sistema. Si no está instalada, se debe descargar e instalar una versión adecuada de Java.
2. **Ejecutar el programa**: Una vez que se haya generado el bytecode compilado, se puede ejecutar el programa utilizando el comando `java` seguido del nombre de la clase principal (la clase que contiene el método `main`).

   `java MiPrograma`

   La JVM cargará el bytecode y comenzará la ejecución del programa.

## Gestión de Dependencias y Librerías

En muchos casos, los programas de Java hacen uso de bibliotecas externas y dependencias adicionales para extender su funcionalidad. Para utilizar estas bibliotecas, es necesario agregar los archivos JAR (Java ARchive) correspondientes al proyecto y configurar el classpath adecuadamente.

- **Agregar bibliotecas JAR**: Se deben descargar los archivos JAR de las bibliotecas requeridas y colocarlos en un directorio específico en el proyecto.
- **Configurar el classpath**: El classpath es una lista de ubicaciones donde la JVM busca las clases y recursos necesarios para la ejecución del programa. Se puede configurar el classpath al compilar y ejecutar el programa utilizando la opción `-cp` o `-classpath`.
  `javac -cp lib/*.jar MiPrograma.java java -cp lib/*.jar:. MiPrograma`
  En el ejemplo anterior, se agrega el directorio `lib` que contiene los archivos JAR al classpath.

## Conclusiones

La programación orientada a objetos con Java ofrece una estructura organizada y modular para el desarrollo de aplicaciones. Los conceptos básicos, como clases, objetos, atributos, métodos, encapsulamiento, herencia y polimorfismo, proporcionan una base sólida para construir sistemas de software más complejos y mantenibles. La POO permite abstraer y modelar problemas del mundo real, facilitando la resolución de problemas y promoviendo la reutilización de código.

La compilación y ejecución de programas con Java implica escribir el código fuente, compilarlo utilizando el compilador de Java y luego ejecutar el bytecode resultante en la JVM. Es importante asegurarse de que la JVM esté instalada y configurar correctamente el classpath para gestionar dependencias y bibliotecas externas. Estos pasos permiten crear programas Java robustos y ejecutables en diferentes entornos.
