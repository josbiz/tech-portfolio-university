---
title: 'Programación con clases sencillas'
subtitle: 'Diseño de programa con clases sencillas'
keywords: 'programación orientada a objetos, clases, objetos, Java, ejemplo, tareas'
date: '30/09/2022'
---

## Programación con clases sencillas

La programación orientada a objetos (POO) es un paradigma de programación que se basa en el concepto de clases y objetos. Una clase es una estructura que define las propiedades y comportamientos de un objeto, y un objeto es una instancia concreta de esa clase. En Java, uno de los lenguajes de programación más populares, se pueden crear clases sencillas para modelar distintos conceptos.

Para ilustrar este concepto, supongamos que queremos crear un programa sencillo para administrar una lista de tareas. Podemos empezar definiendo una clase llamada `Tarea` que represente una tarea en sí misma. Esta clase podría tener propiedades como el título de la tarea y un indicador de si está completada o no. Aquí está un ejemplo de cómo se podría implementar en Java:

```java
public class Tarea {
    private String titulo;
    private boolean completada;

    public Tarea(String titulo) {
        this.titulo = titulo;
        this.completada = false;
    }

    public String getTitulo() {
        return titulo;
    }

    public boolean estaCompletada() {
        return completada;
    }

    public void marcarComoCompletada() {
        completada = true;
    }
}
```

En este ejemplo, la clase `Tarea` tiene dos propiedades: `titulo`, que es una cadena de texto que representa el título de la tarea, y `completada`, que es un valor booleano que indica si la tarea está completada o no. Además, la clase tiene un constructor que recibe el título de la tarea y establece la propiedad `completada` en `false` por defecto.

La clase también tiene métodos para acceder y modificar las propiedades. Por ejemplo, el método `getTitulo()` devuelve el título de la tarea, el método `estaCompletada()` devuelve un valor booleano que indica si la tarea está completada, y el método `marcarComoCompletada()` cambia el valor de la propiedad `completada` a `true`.

Ahora que hemos definido nuestra clase `Tarea`, podemos crear instancias de esta clase y trabajar con ellas en nuestro programa. Por ejemplo, podemos crear una lista de tareas y añadir tareas a esa lista:

```java
public class ProgramaTareas {
    public static void main(String[] args) {
        Tarea tarea1 = new Tarea("Hacer la compra");
        Tarea tarea2 = new Tarea("Llamar al médico");

        tarea1.marcarComoCompletada();

        System.out.println("Tarea 1: " + tarea1.getTitulo());
        System.out.println("¿Está completada? " + tarea1.estaCompletada());

        System.out.println("Tarea 2: " + tarea2.getTitulo());
        System.out.println("¿Está completada? " + tarea2.estaCompletada());
    }
}
```

En este ejemplo, creamos dos instancias de la clase `Tarea`: `tarea1` con el título "Hacer la compra" y `tarea2` con el título "Llamar al médico". Después, marcamos la tarea1 como completada usando el método `marcarComoCompletada()`. Finalmente, mostramos por consola el título y el estado de cada tarea.

Estos son solo ejemplos sencillos de cómo se pueden utilizar las clases en la programación orientada a objetos con Java. Las clases permiten modelar objetos del mundo real de manera estructurada y modular, lo que facilita el desarrollo de programas más claros y mantenibles.

### Ejemplos

1. Copiar, analizar y ejecutar el ejemplo de conversiones de temperatura

```java
public class MTemperatura {
  public static void main(String[] args) {
    Temperatura t = new Temperatura();
    t.grados = Integer.parseInt(args[0]);
    char opcion = args[1].charAt(0); // c o f segun sean los grados capturados
    if (opcion == 'f') {
      double c = t.aCentigrados();
      System.out.println(t.grados + " F = " + c + " C");
    }
    if (opcion == 'c') {
      double f = t.aFarenheit();
      System.out.println(t.grados + " C = " + f + " F");
    }
  }
}
```

```java
public class Temperatura {
  public int grados;

  public double aCentigrados() {
    // C =5/9 (F-32)
    double c = (double) 5 / 9 * (grados - 32);
    return c;
  }

  public double aFarenheit() {
    // F =9/5 C + 32.
    double f = 9 / 5.0 * grados + 32;
    return f;
  }
}
```

2. Escribir un programa que desglose cierta cantidad de segundos dada por el usuario en su equivalente en días, horas, minutos y segundos.

```java
public class Operations {
    public double secondsToDays(double seconds) {
        return seconds / 86400;
    }
    public double secondsToHours(double seconds) {
        return ( seconds % 86400 ) / 3600;
    }
    public double secondsToMinutes(double seconds) {
        return ( seconds % 3600 ) / 60;
    }
    public double secondsToSeconds(double seconds) {
        return seconds % 60;
    }
}
```

```java
public class Seconds {
    public static void main(String args[]) {
        Operations O = new Operations();
        double seconds = Double.parseDouble(args[0]);

        double days = O.secondsToDays(seconds);
        double hours = O.secondsToHours(seconds);
        double minutes = O.secondsToMinutes(seconds);
        double secs = O.secondsToSeconds(seconds);

        System.out.println("Converting " + seconds + " seconds to days, hours, minutes and seconds");
        System.out.println(days + " days, " + hours + " hours, " + minutes + " minutes, " + secs + " seconds" );
    }
}
```

3. Definir una clase Empleados que represente a los trabajadores de una empresa. La información disponible para cada empleado consiste en el nombre, fecha de ingreso (mes y año), el salario diario. Calcular el salario semanal, prima vacacional y aguinaldo de un trabajador.
   salario semanal= salario diario _ 7 - impuesto.
   impuesto = 12% prima vacacional = vacaciones _ 25%.
   vacaciones = salario diario \* días de vacaciones
   aguinaldo = 15 días de tu salario mensual antes de impuestos

```java
import java.util.Scanner;

public class Employees {
    public static void main(String args[]){
        Calculating C = new Calculating();
        Scanner Input = new Scanner(System.in);

        System.out.print("Enter the name of employee: ");
        String name = Input.nextLine();
        System.out.print("Enter the date of admission [mm/aaaa]: ");
        String dateAdmission = Input.nextLine();
        System.out.print("Enter the dayly salary of employee: $ ");
        float salary = Input.nextFloat();
        System.out.print("Enter the vacations days of employee: ");
        int vacationsDays = Input.nextInt();

        float ws = C.weeklySalary(salary);
        float vb = C.vacationBonus(salary, vacationsDays);
        float b = C.bonus(salary);

        System.out.println("------------------------------------");
        System.out.println("Name: " + name);
        System.out.println("Date of admission: " + dateAdmission);
        System.out.println("The weekly salary is: $ " + ws);
        System.out.println("The vacations bonus is: $ " + vb);
        System.out.println("The money bonus is: $ " + b);
        System.out.println("------------------------------------");

        Input.close();
    }
}
```

```java
public class Calculating {
    public float weeklySalary(float salary){
        float tax = (salary * 7) * 0.12f;
        float ws = (salary * 7) - tax;
        return ws;
    }
    public float vacationBonus(float salary, int vacationsDays){
        float vacations = salary * vacationsDays;
        float vb = vacations * 0.25f;
        return vb;
    }
    public float bonus(float salary){
        float b = salary * 15;
        return b;
    }
}
```

## Conclusiones

En este artículo, hemos explorado el diseño de programas utilizando clases sencillas en el contexto de la programación orientada a objetos con Java. Hemos visto cómo definir una clase con propiedades y métodos, y cómo crear instancias de esa clase para trabajar con objetos en nuestro programa.

El ejemplo de la clase `Tarea` nos ha permitido entender cómo podemos modelar un concepto simple utilizando propiedades y métodos. Hemos creado instancias de la clase `Tarea`, establecido propiedades y llamado a métodos para interactuar con ellas.

También se han proporcionado otros ejemplos, como la conversión de temperaturas y el desglose de segundos en días, horas, minutos y segundos. Estos ejemplos ilustran cómo podemos utilizar clases y métodos para resolver problemas específicos de manera estructurada y modular.

Además, se presentó un ejemplo más complejo con la clase `Empleados`, donde se calculan el salario semanal, la prima vacacional y el aguinaldo de un trabajador. Esto muestra cómo las clases pueden representar entidades más complejas y realizar cálculos basados en propiedades específicas.

En conclusión, el uso de clases sencillas en la programación orientada a objetos nos permite organizar y estructurar nuestro código de manera más clara y mantenible. Las clases nos permiten modelar objetos del mundo real, definir sus propiedades y comportamientos, y trabajar con ellos de manera modular. Esto facilita el desarrollo de programas más robustos y escalables.
