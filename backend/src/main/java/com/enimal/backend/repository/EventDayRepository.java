package com.enimal.backend.repository;

import com.enimal.backend.entity.EventDay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EventDayRepository extends JpaRepository<EventDay,Integer> {
    Optional<EventDay> findByEventDate(String date);
}
