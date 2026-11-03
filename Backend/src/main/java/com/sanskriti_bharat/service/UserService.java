package com.sanskriti_bharat.service;

import com.sanskriti_bharat.dto.AuthResponse;
import com.sanskriti_bharat.dto.LoginRequest;
import com.sanskriti_bharat.dto.RegisterRequest;
import com.sanskriti_bharat.dto.UserDTO;

import java.util.List;

public interface UserService {

    AuthResponse registerUser(RegisterRequest request);

    AuthResponse loginUser(LoginRequest request);

    List<UserDTO> getAllUsers();

    UserDTO getUserById(Long id);

    UserDTO updateUser(Long id, RegisterRequest request);

    void deleteUser(Long id);
}