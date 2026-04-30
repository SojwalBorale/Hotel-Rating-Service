package com.lcwd.user.service.exceptions;

public class ResourceNotFoundException extends RuntimeException{

    // extra properties you can put that you want to manage

    public ResourceNotFoundException(){
        super("Resource not found on Server !!");
    }

    public ResourceNotFoundException(String message){
        super(message);
    }
}
