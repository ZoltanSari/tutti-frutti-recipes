package com.codecool.tuttifrutti.security;

public class SecurityConstants {

    public static final String SECRET = "tarhaltmegoldas";
    public static final long EXPIRATION_TIME = 600_000; // 600 seconds
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String[] JOIN_URLS = {"/users/registration", "/users/login"};
    public static final String PUBLIC_URLS = "/recipes/**";

}
