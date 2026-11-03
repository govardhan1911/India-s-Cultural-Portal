package com.sanskriti_bharat.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table (name = "states")
@Getter
@Setter

public class State {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String slug;

    private String type;

    private String capital;

    private String officialLanguage;

    private Long population;

    private Double areaSqKm;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "LONGTEXT")
    private String history;

    @Column(columnDefinition = "LONGTEXT")
    private String culture;

    private String imageUrl;
}
