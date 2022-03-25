package com.example.uniauto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import java.io.*;
import java.util.Arrays;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class UniAutoApplicationTests {

    @Test
    public void whenCustomSerializingAndDeserializing_ThenObjectIsTheSame()
            throws IOException, ClassNotFoundException {
        int N = 3;
        int[] ids = new int[N];
        ids[0]=5;ids[1]=10;ids[2]=15;
        Person p = new Person();
        p.setAge(20);
        p.setName("Joe");
        p.setList(ids);



        FileOutputStream fileOutputStream
                = new FileOutputStream("yourfile2.txt");
        ObjectOutputStream objectOutputStream
                = new ObjectOutputStream(fileOutputStream);
        objectOutputStream.writeObject(p);
        objectOutputStream.flush();
        objectOutputStream.close();

        FileInputStream fileInputStream
                = new FileInputStream("yourfile2.txt");
        ObjectInputStream objectInputStream
                = new ObjectInputStream(fileInputStream);
        Person p2 = (Person) objectInputStream.readObject();
        objectInputStream.close();

/*
        System.out.println("p nome: "+p.getName());
        System.out.println("p idade: "+p.getAge());
        System.out.println("p2 nome: "+p2.getName());
        System.out.println("p2 idade: "+p2.getAge());
*/
        System.out.println("p lista: "+ Arrays.toString(p.getList()));
        System.out.println("p2 lista: "+Arrays.toString(p2.getList()));

        assertTrue(
                p2.getName().equals( p.getName()));
        assertTrue(
                Objects.equals(p2.getAge(), p.getAge()));
        assertTrue(
                Objects.equals(Arrays.toString(p2.getList()), Arrays.toString(p.getList())));
    }

    @Test
    void contextLoads() {
    }

}
