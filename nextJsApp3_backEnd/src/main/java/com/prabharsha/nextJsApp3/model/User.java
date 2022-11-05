package com.prabharsha.nextJsApp3.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

public class User {

    private String userNIC;
    private String userName;
    private int contactNo;
}
