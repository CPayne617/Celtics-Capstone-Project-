package com.example.FullStackReact.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FullStackReact.Model.Starters;


@Repository
public interface StartersRepository  extends JpaRepository<Starters, Integer>{
	
	List<Starters> findByName(String lastname);

}
