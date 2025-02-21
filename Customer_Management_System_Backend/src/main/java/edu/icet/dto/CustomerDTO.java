package edu.icet.dto;

import lombok.*;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class CustomerDTO {
    private Integer id;
    private String name;
    private String address;
    private String salary;
}
