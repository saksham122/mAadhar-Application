package com.example.backedapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backedapp.bean.Login;
@Repository
public interface LoginRepository extends JpaRepository<Login,String>{

}
