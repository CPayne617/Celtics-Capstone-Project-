package com.example.FullStackReact.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "starters")
public class Starters {
	
	@Id
	private int id;
	
	private int jersey;
	private String position;
	private String firstname;
	private String lastname;
	private String name;
    
    public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Starters()
    {
    	
    }
    public Starters(int id, int jersey, String position, String firstname, String lastname, String name) {
		super();
		this.id = id;
		this.jersey = jersey;
		this.position = position;
		this.firstname = firstname;
		this.lastname = lastname;
		this.name = name;
		
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getJersey() {
		return jersey;
	}

	public void setJersey(int jersey) {
		this.jersey = jersey;
	}
	
	public String getPosition() {
		return position;
	}
	
	public void setPosition(String position) {
		this.position = position;
	}
    
	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	
	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

}
