---
title: 'Manejo de archivos'
subtitle: 'Aprende a trabajar con archivos en Java y POO'
keywords: 'Java, programación, archivos, manejo de archivos, POO'
date: '22/11/2022'
---

## Introducción al Manejo de Archivos en Java

El manejo de archivos es una tarea fundamental en el desarrollo de aplicaciones, especialmente en el contexto de la Programación Orientada a Objetos (POO), donde la persistencia de datos es esencial. En Java, el manejo de archivos permite leer y escribir información en almacenamiento externo, como disco duro o memoria USB, lo que proporciona una forma eficiente de guardar datos de manera permanente o temporal.

## Flujo de Datos: Lectura y Escritura en Java

En Java, el manejo de archivos se basa en la utilización de flujos de datos. Un flujo es una secuencia de datos que se mueve desde una fuente (lectura) o hacia un destino (escritura). Para leer o escribir en un archivo, necesitamos trabajar con dos tipos de flujos:

1. **Flujo de Entrada (Input Stream):** Este tipo de flujo se utiliza para leer datos desde un archivo hacia la memoria de la aplicación. Permite acceder a los datos almacenados en el archivo y procesarlos dentro del programa.

2. **Flujo de Salida (Output Stream):** En cambio, este tipo de flujo se emplea para escribir datos desde la memoria de la aplicación hacia un archivo. De esta manera, podemos guardar información generada por el programa en un archivo para su uso futuro o persistencia.

## Pasos para el Manejo de Archivos en Java

El manejo de archivos en Java para POO implica seguir una serie de pasos para leer o escribir datos:

### 1. Abrir el Archivo

Para iniciar el proceso, debemos abrir el archivo en el modo apropiado según nuestras necesidades: lectura, escritura o ambos. Java proporciona clases como `FileInputStream` para lectura y `FileOutputStream` para escritura.

### 2. Leer o Escribir Datos

Una vez abierto el archivo, utilizamos los flujos de entrada y salida para leer o escribir datos en él. Para lectura, podemos usar clases como `BufferedReader`, y para escritura, clases como `BufferedWriter`. Es importante manejar adecuadamente las excepciones y cerrar los flujos después de su uso.

### 3. Cerrar el Archivo

Una vez que hemos terminado de leer o escribir en el archivo, es crucial cerrarlo correctamente para liberar los recursos del sistema. Java provee métodos como `close()` para cerrar los flujos y el archivo.

## Ejemplo de Lectura y Escritura de Archivos en Java

```java
import java.io.*;

public class ManejoArchivos {
    public static void main(String[] args) {
        try {
            // Abriendo el archivo para escritura
            FileOutputStream fileOutputStream = new FileOutputStream("archivo.txt");
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(fileOutputStream));

            // Escribiendo datos en el archivo
            bufferedWriter.write("¡Hola, esto es un ejemplo de escritura en archivo desde Java!");
            bufferedWriter.newLine(); // Añadir una nueva línea
            bufferedWriter.write("Agregando más contenido al archivo.");

            // Cerrando el flujo y archivo
            bufferedWriter.close();

            // Abriendo el archivo para lectura
            FileInputStream fileInputStream = new FileInputStream("archivo.txt");
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(fileInputStream));

            // Leyendo datos del archivo y mostrándolos en la consola
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }

            // Cerrando el flujo y archivo nuevamente
            bufferedReader.close();
        } catch (IOException e) {
            System.out.println("Error al manejar el archivo: " + e.getMessage());
        }
    }
}
```

### Ejercicios

Elaborar una aplicación formada por tres clases, Principal, AccesoArchivo (es la que contendrá los métodos para acceder y guardar la información en los archivos), y la clase Alumnos.

La clase prin cipal debe mostrar el siguiente menú: a. Crear nuevo archivo b. Abrir archivo c. Agregar registros d. Modificar registro e. Eliminar registro f. Visualizar registros Los datos a guardar son: matricula, nombre, calificacion1, calificacion2, promedio (se deb e calcular), en modificaciones solo se pueden cambiar las calificaciones. Utilizar el tipo de archivo que especifique el maestro (texto, binarios u objetos). Deberá aplicar las excepciones que correspondan.

```java
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Scanner Sc = new Scanner(System.in);
        AccesoArchivo Aa = new AccesoArchivo();
        Alumnos Al;

        char opc = ' ';
        String nombreArchivo = "";
        do {
            System.out.print("\033[H\033[2J");
            System.out.flush();

            System.out.println("M E N U  D E  O P C I O N E S");
            System.out.println("a) Crear nuevo archivo");
            System.out.println("b) Abrir archivo");
            System.out.println("c) Agregar registros");
            System.out.println("d) Modificar registros");
            System.out.println("e) Eliminar registros");
            System.out.println("f) Visualizar registros");
            System.out.println("g) Salir");
            System.out.print(">> ");
            opc = Sc.nextLine().charAt(0);
            opc = Character.toLowerCase(opc);

            switch (opc) {
                case 'a':
                    System.out.print("\n" + "Ingese el nombre del archivo: ");
                    nombreArchivo = Sc.nextLine();
                    Aa.crearArchivo(nombreArchivo);
                    System.out.print("\n" + "Presione ENTER para continuar...");
                    Sc.nextLine();
                    break;
                case 'b':
                    System.out.print("\n" + "Ingese el nombre del archivo que desea abrir: ");
                    nombreArchivo = Sc.nextLine();
                    Aa.abrirArchivo(nombreArchivo);
                    System.out.print("\n" + "Presione ENTER para continuar...");
                    Sc.nextLine();
                    break;
                case 'c':
                    boolean flag;
                    String matricula;
                    do {
                        System.out.print("Ingese la matricula del alumno: ");
                        matricula = Sc.nextLine();
                        flag = Aa.validarMatricula(matricula);
                    } while (flag != false);
                    System.out.print("Ingese el nombre del alumno: ");
                    String nombreA = Sc.nextLine();
                    System.out.print("Ingese la calificacion 1 del alumno: ");
                    Double calf1 = Sc.nextDouble();
                    while (calf1 > 100 || calf1 < 0) {
                        System.out.print("Ingese la calificacion 1 del alumno: ");
                        calf1 = Sc.nextDouble();
                    }
                    System.out.print("Ingese la calificacion 2 del alumno: ");
                    Double calf2 = Sc.nextDouble();
                    while (calf2 > 100 || calf2 < 0) {
                        System.out.print("Ingese la calificacion 2 del alumno: ");
                        calf2 = Sc.nextDouble();
                    }
                    Sc.nextLine();
                    Al = new Alumnos(matricula, nombreA, calf1, calf2);
                    Aa.agregarRegistros(Al);
                    System.out.print("\n" + "Presione ENTER para continuar...");
                    Sc.nextLine();
                    break;
                case 'd':
                    System.out.print("\n" + "Ingrese la matricula del registro que desea cambiar: ");
                    String modificar = Sc.nextLine();
                    Aa.modificarRegistros(modificar, Sc);
                    System.out.print("\n" + "Presione ENTER para continuar...");
                    Sc.nextLine();
                    break;
                case 'e':
                    System.out.print("Ingrese la matricula del registro que desea eliminar: ");
                    String borrar = Sc.nextLine();
                    Aa.eliminarRegistros(borrar);
                    System.out.print("\n" + "Presione ENTER para continuar...");
                    Sc.nextLine();
                    break;
                case 'f':
                    Aa.visualizarRegistros();
                    System.out.print("\n" + "Presione ENTER para continuar...");
                    Sc.nextLine();
                    break;
                case 'g':
                    System.out.println("\n" + "GRACIAS POR UTILIZAR EL PROGRAMA");
                    System.out.print("\n" + "Presione ENTER para continuar...");
                    Sc.nextLine();
                    break;
                default:
                    System.out.println("Opción no válida");
                    System.out.print("\n" + "Presione ENTER para continuar...");
                    Sc.nextLine();
                    break;
            }
        } while (opc != 'g');
        Sc.close();
    }

}
```

```java
public class Alumnos {
    String matricula;
    String nombre;
    double calificacion1;
    double calificacion2;
    double promedio;

    public Alumnos(String matricula, String nombre, double calificacion1, double calificacion2) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.calificacion1 = calificacion1;
        this.calificacion2 = calificacion2;
        this.promedio = (calificacion1 + calificacion2) / 2;
    }

}
```

```java
import java.io.*;
import java.util.Scanner;

public class AccesoArchivo {

    String archivo;

    public void crearArchivo(String nombreArchivo) {
        nombreArchivo = "./data/" + nombreArchivo + ".txt";
        File archivoNuevo = new File(nombreArchivo);
        try {
            if (!archivoNuevo.exists()) {
                PrintWriter pw = new PrintWriter(archivoNuevo);
                pw.close();
                System.out.println("Se ha creado el archivo exitosamente");
            } else {
                System.out.println("Este archivo ya existe");
            }
        } catch (FileNotFoundException ex) {
            System.out.println("Error al crear el archivo");
        }
    }

    public void abrirArchivo(String nombreArchivo) {
        this.archivo = nombreArchivo;
    }

    public void agregarRegistros(Alumnos Al) {
        try {
            if (!this.archivo.equals(null)) {
                String info = "";
                String nombreArchivo = "./data/" + this.archivo + ".txt";
                PrintWriter pw = new PrintWriter(new FileWriter(nombreArchivo, true));
                info = Al.matricula + ":" + Al.nombre + ":" + Al.calificacion1 + ":" + Al.calificacion2;
                pw.println(info);
                pw.close();
                System.out.println("Se ha agregado el registro exitosamente");
            }
        } catch (FileNotFoundException ex) {
            System.out.println("Primero necesita abrir un archivo");
        } catch (IOException ex) {
            System.out.println("Error al escribir en el archivo");
        } catch (NullPointerException ex) {
            System.out.println("Primero necesita abrir un archivo");
        }
    }

    public void modificarRegistros(String matricula, Scanner Sc) {
        try {
            File file = new File("./data/" + this.archivo + ".txt");
            File filebackup = new File("./data/" + this.archivo + "-backup" + ".txt");
            BufferedReader br = new BufferedReader(new FileReader(file));
            PrintWriter pw = new PrintWriter(new FileWriter(filebackup, false));

            String line = "", calificacion = "";

            System.out.print("\n" + "Ingrese la calificacion del registro que desea cambiar [1][2]: ");
            int calf = Sc.nextInt();
            Sc.nextLine();

            switch (calf) {
                case 1:

                    System.out.print("\n" + "Ingrese la nueva calificacion del registro: ");
                    calificacion = Sc.nextLine();
                    calificacion = calificacion + ".0";

                    while ((line = br.readLine()) != null) {
                        String[] separado = line.split(":");
                        String mat = separado[0];

                        if (mat.equals(matricula)) {
                            separado[2] = calificacion;
                            String junto = separado[0] + ":" + separado[1] + ":" + separado[2] + ":" + separado[3];
                            pw.println(junto);
                        } else {
                            pw.println(line);
                        }
                    }
                    break;
                case 2:
                    System.out.print("\n" + "Ingrese la nueva calificacion del registro: ");
                    calificacion = Sc.nextLine();
                    calificacion = calificacion + ".0";

                    while ((line = br.readLine()) != null) {
                        String[] separado = line.split(":");
                        String mat = separado[0];

                        if (mat.equals(matricula)) {
                            separado[3] = calificacion;
                            String junto = separado[0] + ":" + separado[1] + ":" + separado[2] + ":" + separado[3];
                            pw.println(junto);
                        } else {
                            pw.println(line);
                        }
                    }
                    break;
                default:
                    System.out.println("Opción no válida, intentelo de nuevo");
                    break;
            }

            System.out.println("El registro ha sido modificado exitosamente");
            pw.close();
            br.close();
            file.delete();
            filebackup.renameTo(file);
        } catch (FileNotFoundException ex) {
            System.out.println("Primero necesita abrir un archivo");
        } catch (IOException ex) {
            System.out.println("Error al escribir en el archivo");
        } catch (NullPointerException ex) {
            System.out.println("Error el apuntador se encuentra nulo");
        }
    }

    public void eliminarRegistros(String matriculaB) {
        try {
            File file = new File("./data/" + this.archivo + ".txt");
            File filebackup = new File("./data/" + this.archivo + "-backup" + ".txt");

            BufferedReader br = new BufferedReader(new FileReader(file));
            PrintWriter pw = new PrintWriter(new FileWriter(filebackup, false));
            String line;

            while ((line = br.readLine()) != null) {
                String[] separado = line.split(":");
                String mat = separado[0];

                if (!mat.equals(matriculaB)) {
                    pw.println(line);
                }
            }

            System.out.println("El registro ha sido borrado exitosamente");

            pw.close();
            br.close();
            file.delete();
            filebackup.renameTo(file);
        } catch (FileNotFoundException ex) {
            System.out.println("Primero necesita abrir un archivo");
        } catch (IOException ex) {
            System.out.println("Error al escribir en el archivo");
        } catch (NullPointerException ex) {
            System.out.println("Error el apuntador se encuentra nulo");
        }
    }

    public void visualizarRegistros() {
        String nombreArchivo = "./data/" + this.archivo + ".txt";
        try {
            BufferedReader br = new BufferedReader(new FileReader(nombreArchivo));
            String line;
            System.out.println(" ");
            while ((line = br.readLine()) != null) {
                String[] separado = line.split(":");
                System.out.println("=============================");
                System.out.println("Matricula: " + separado[0]);
                System.out.println("Nombre: " + separado[1]);
                System.out.println("Calificacion 1: " + separado[2]);
                System.out.println("Calificacion 2: " + separado[3]);
                double calf1 = Double.parseDouble(separado[2]);
                double calf2 = Double.parseDouble(separado[3]);
                double calfFinal = (calf1 + calf2) / 2;
                System.out.println("Promedio: " + calfFinal);
                System.out.println("=============================");
            }
            br.close();

        } catch (FileNotFoundException ex) {
            System.out.println("Primero necesita abrir un archivo");
        } catch (IOException ex) {
            System.out.println("Error al escribir en el archivo");
        } catch (NullPointerException ex) {
            System.out.println("Error el apuntador se encuentra nulo");
        }
    }

    public boolean validarMatricula(String matricula) {
        boolean flag = false;
        try {
            String nombreArchivo = "./data/" + this.archivo + ".txt";
            BufferedReader br = new BufferedReader(new FileReader(nombreArchivo));
            String line;

            while ((line = br.readLine()) != null) {
                String[] separado = line.split(":");
                String mat = separado[0];

                if (mat.equals(matricula)) {
                    flag = true;
                }
            }

            br.close();
            return flag;
        } catch (FileNotFoundException ex) {
            System.out.println("Primero necesita abrir un archivo");
        } catch (IOException ex) {
            System.out.println("Error al escribir en el archivo");
        } catch (NullPointerException ex) {
            System.out.println("Error el apuntador se encuentra nulo");
        }
        return flag;
    }
}
```

## Conclusiones

El manejo de archivos en Java es una habilidad crucial para cualquier programador, especialmente al trabajar con aplicaciones basadas en POO. A través de flujos de datos, podemos leer y escribir información en archivos, lo que proporciona una forma efectiva de persistencia de datos o intercambio de información con el exterior. Es importante recordar siempre cerrar correctamente los flujos y archivos para evitar problemas de recursos y mantener la integridad de nuestros datos.

Si dominas el manejo de archivos en Java, estarás preparado para desarrollar aplicaciones más robustas y versátiles, capaces de gestionar datos de manera eficiente y segura. ¡Practica y experimenta con el manejo de archivos para mejorar tus habilidades como programador en Java!
