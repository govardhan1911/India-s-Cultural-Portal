package com.sanskriti_bharat.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Long id;

    private String name;

    private String email;

    private String phone;

    private String city;

    private String state;

    private String role;

    private Boolean active;
}