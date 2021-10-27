package com.example.FullStackReact.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FullStackReact.Exception.StartersNotFoundException;
import com.example.FullStackReact.Model.Starters;
import com.example.FullStackReact.Repository.StartersRepository;






@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class StartersController {
	
	@Autowired
	private StartersRepository startersRepo;
	
	
//	get all starters URL: "/api/allstarters"
	
	@GetMapping("/allstarters")
	public List <Starters> getAllStarters()
	{
		
		return startersRepo.findAll();
		
	}
	
	@PostMapping("/addstarters")
    public Starters updateStarters(@RequestBody Starters s)
    {
		
		return startersRepo.save(s);
    }
	
	
	@GetMapping("/starters/{id}")
	public ResponseEntity <Starters> getStartersById(@PathVariable int id)
	{
		Starters s = startersRepo.findById(id).orElseThrow(()-> new StartersNotFoundException("Player not found"));
		
		return ResponseEntity.ok(s);
	}

//	@GetMapping("/starters/{lastname}")
//	public List<Starters> getStartersByName(@PathVariable String lastname)
//	{
//		//return startersRepo.findByName(name);
//		
//		List <Starters> starters=startersRepo.findByName(lastname);
//		if(starters.isEmpty())
//		{
//			System.out.println(new StartersNotFoundException("Starter(s) with the name "+ lastname +" not found"));
//		}
//		
//		return startersRepo.findByName(lastname);
//	}
	
	
	
	@PutMapping("/starters/{id}")
	public ResponseEntity<Starters> updateStarters(@PathVariable int id, @RequestBody Starters starters)
	{
		Starters s= startersRepo.findById(id).orElseThrow(() ->  new StartersNotFoundException("Starter not found"));
	    s.setLastname(starters.getLastname());
	    s.setPosition(starters.getPosition());
	    s.setFirstname(starters.getFirstname());
	    Starters updatedStarters=startersRepo.save(s);
	    return ResponseEntity.ok(updatedStarters);
	}
	

	
	@DeleteMapping("/starters/{id}")
	public String deleteStarters(@PathVariable int id)
	{
		startersRepo.findById(id).orElseThrow(() ->  new StartersNotFoundException("Starter not found"));
	    startersRepo.deleteById(id);
	    return "The starters with id: "+ id +" is removed from the database.";
	}
	

//	 create starters rest api
//	@PostMapping("/starters")
//	public Starters createStarters(@RequestBody Starters starters) {
//		return startersRepo.save(starters);
//	}
	
 
}
