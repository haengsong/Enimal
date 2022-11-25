package com.enimal.backend.repository;

import com.enimal.backend.entity.Badge;
import com.enimal.backend.entity.Puzzle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PuzzleRepository extends JpaRepository<Puzzle,Integer> {
    List<Puzzle> findByUserIdOrderByAnimal(String userId);

    List<Puzzle> findByUserIdAndAnimal(String userId, String drawEnimal);

    Optional<Puzzle> findByUserIdAndAnimalAndPiece(String userId, String drawEnimal, int drawPuzzle);

    List<Puzzle> findByUserId(String userId);
}
