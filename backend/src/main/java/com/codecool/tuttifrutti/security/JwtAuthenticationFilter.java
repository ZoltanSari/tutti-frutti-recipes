package com.codecool.tuttifrutti.security;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.stream.Collectors;

import static com.codecool.tuttifrutti.security.SecurityConstants.*;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;

    private JwtAuthenticationSuccessHandler successHandler;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager,
                                   JwtAuthenticationSuccessHandler successHandler) {
        this.authenticationManager = authenticationManager;
        this.successHandler = successHandler;
        this.setFilterProcessesUrl("/users/login");
    }


    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) throws AuthenticationException {
        try {
            JsonObject jsonObject = (JsonObject) new JsonParser().parse(
                    request.getReader()
                            .lines()
                            .collect(Collectors.joining(System.lineSeparator())));

            String username = jsonObject.get("username").getAsString();
            String password = jsonObject.get("password").getAsString();

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password, new ArrayList<>())
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {
        logger.info(authResult);
        Claims claims = Jwts.claims()
                .setSubject(((User) authResult.getPrincipal()).getUsername());

        String token = Jwts.builder()
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
        response.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
        response.addHeader("Access-Control-Expose-Headers", HEADER_STRING);

        this.successHandler.onAuthenticationSuccess(request, response, authResult);
    }

}
