package com.sanskriti_bharat.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tourism")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Tourism {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String category;

    private String location;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String bestTimeToVisit;

    private String entryFee;

    @Column(columnDefinition = "TEXT")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;
}