package com.sanskriti_bharat.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "heritage")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Heritage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String heritageType;

    private String location;

    @Column(columnDefinition = "LONGTEXT")
    private String description;

    @Column(columnDefinition = "LONGTEXT")
    private String history;

    @Column(columnDefinition = "TEXT")
    private String significance;

    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;
}