const express =require('express');
const user=require('../Model/UserSchema');
const { create } = require('../Model/FileSchema');

exports.register= async (req,res)=>{
    const {username,Password}=req.body;
    try {
        if(!username){
            return res.status(400).json({error:"username is required"})
        }
        const newuser=new user({
            username,Password
        })
        return res.status(201).json(newuser)
        
    } catch (error) {
        console.error("error while registering user:",error);
        return res.status(500).json({error:"error while creating the user"})
        
    }
}


exports.login=async (req,res)=>{
    const {username,password}=req.body;
    try {
        if(!username || !password){
            return res.status(400).json({error:"username and password are required"});
        }
    } catch (error) {
        console.error("we face some errerur when we made the login :",error);

    }
}