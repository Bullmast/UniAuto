package com.example.uniauto;

import java.io.Serializable;

public class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    private int age;
    private String name;
    transient int height;
    int[] list;

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

    public void setList(int[] list) {
        this.list = list;
    }

    public int[] getList() {
        return list;
    }
}

