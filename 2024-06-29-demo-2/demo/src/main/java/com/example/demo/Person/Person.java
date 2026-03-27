package com.example.demo.Person;

public class Person {
    private String firstname;
    private String lastname;
    private Integer age;
    public Person(String firstname, String lastname, Integer age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    public Person() {
    }
    public String getFirstname() {
        return firstname;
    }
    public String getLastname() {
        return lastname;
    }
    public Integer getAge() {
        return age;
    }
    @Override
    public String toString() {
        return "Person [firstname=" + firstname + ", lastname=" + lastname + ", age=" + age + "]";
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((firstname == null) ? 0 : firstname.hashCode());
        result = prime * result + ((lastname == null) ? 0 : lastname.hashCode());
        result = prime * result + ((age == null) ? 0 : age.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Person other = (Person) obj;
        if (firstname == null) {
            if (other.firstname != null)
                return false;
        } else if (!firstname.equals(other.firstname))
            return false;
        if (lastname == null) {
            if (other.lastname != null)
                return false;
        } else if (!lastname.equals(other.lastname))
            return false;
        if (age == null) {
            if (other.age != null)
                return false;
        } else if (!age.equals(other.age))
            return false;
        return true;
    }


    
}
