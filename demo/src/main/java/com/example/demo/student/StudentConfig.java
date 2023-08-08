package com.example.demo.student;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {
    
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
				Student erica = new Student("Erica",
							"erica.xg@hotmail.com",
							LocalDate.of(1995,Month.OCTOBER, 29)
							);
                Student kevin = new Student("Kevin",
							"kchu@hotmail.com",
							LocalDate.of(1996,Month.OCTOBER, 29)
							);

                repository.saveAll(List.of(erica, kevin));
        };
    }
}
