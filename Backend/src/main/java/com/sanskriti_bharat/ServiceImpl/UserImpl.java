package com.sanskriti_bharat.ServiceImpl;

import com.sanskriti_bharat.dto.AuthResponse;
import com.sanskriti_bharat.dto.LoginRequest;
import com.sanskriti_bharat.dto.RegisterRequest;
import com.sanskriti_bharat.dto.UserDTO;
import com.sanskriti_bharat.entity.User;
import com.sanskriti_bharat.Repository.UserRepository;
import com.sanskriti_bharat.service.UserService;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserImpl implements UserService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder();

    public UserImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // =========================
    // REGISTER USER
    // =========================

    @Override
    public AuthResponse registerUser(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {

            throw new RuntimeException(
                    "Email already registered"
            );
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        // Encrypt password
        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()
                )
        );

        user.setPhone(request.getPhone());
        user.setCity(request.getCity());
        user.setState(request.getState());

        // Default values
        user.setRole("USER");
        user.setActive(true);

        User savedUser = userRepository.save(user);

        UserDTO userDTO = convertToDTO(savedUser);

        return new AuthResponse(
                "Registration successful",
                userDTO
        );
    }


    // =========================
    // LOGIN USER
    // =========================

    @Override
    public AuthResponse loginUser(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Invalid email or password"
                        )
                );

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )) {

            throw new RuntimeException(
                    "Invalid email or password"
            );
        }

        if (!user.getActive()) {

            throw new RuntimeException(
                    "User account is inactive"
            );
        }

        UserDTO userDTO = convertToDTO(user);

        return new AuthResponse(
                "Login successful",
                userDTO
        );
    }


    // =========================
    // GET ALL USERS
    // =========================

    @Override
    public List<UserDTO> getAllUsers() {

        return userRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }


    // =========================
    // GET USER BY ID
    // =========================

    @Override
    public UserDTO getUserById(Long id) {

        User user = userRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "User not found with ID: " + id
                        )
                );

        return convertToDTO(user);
    }


    // =========================
    // UPDATE USER
    // =========================

    @Override
    public UserDTO updateUser(
            Long id,
            RegisterRequest request) {

        User existingUser = userRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "User not found with ID: " + id
                        )
                );

        existingUser.setName(request.getName());
        existingUser.setPhone(request.getPhone());
        existingUser.setCity(request.getCity());
        existingUser.setState(request.getState());

        // Change password only if provided
        if (request.getPassword() != null &&
                !request.getPassword().isBlank()) {

            existingUser.setPassword(
                    passwordEncoder.encode(
                            request.getPassword()
                    )
            );
        }

        User updatedUser =
                userRepository.save(existingUser);

        return convertToDTO(updatedUser);
    }


    // =========================
    // DELETE USER
    // =========================

    @Override
    public void deleteUser(Long id) {

        if (!userRepository.existsById(id)) {

            throw new RuntimeException(
                    "User not found with ID: " + id
            );
        }

        userRepository.deleteById(id);
    }


    // =========================
    // ENTITY → DTO
    // =========================

    private UserDTO convertToDTO(User user) {

        return new UserDTO(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPhone(),
                user.getCity(),
                user.getState(),
                user.getRole(),
                user.getActive()
        );
    }
}