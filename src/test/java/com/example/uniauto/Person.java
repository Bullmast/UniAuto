package com.example.uniauto;

import java.io.Serializable;

public class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    private int age;
    private String name;
    transient int height;

    public void setAge(int age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public int getHeight() {
        return height;
    }
}

