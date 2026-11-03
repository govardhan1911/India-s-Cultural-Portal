package com.sanskriti_bharat.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {

    private String message;

    private UserDTO user;
}