package com.example.uniauto.Exceptions;

public class VechicleCapacityExceededException extends Exception{
    public VechicleCapacityExceededException(String errorMessage) {
        super(errorMessage);
    }
}
