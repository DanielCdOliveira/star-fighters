import { Request, Response } from "express";
import axios from "axios"
import dotenv from "dotenv"
import { saveResult } from "../services/battleServices.js";
dotenv.config();


export default async function battle(req :Request, res : Response){
const {firstUser,secondUser} =  req.body
const config = {
    headers: {
      Authorization: `token ${process.env.TOKEN}`,
    },
  };
// usuarios existem
try {
    const result1 =  await axios.get(`https://api.github.com/users/${firstUser}/repos`,config ) 
    const result2 = await axios.get(`https://api.github.com/users/${secondUser}/repos`,config ) 
    console.log(result1.data[0].stargazers_count);
    
    let soma1 :Number= 0
    let soma2 :Number= 0
    await result1.data.forEach((item :any)=>{
        soma1 += item.stargazers_count 
    })
    await result2.data.forEach((item :any)=>{
        soma2 += item.stargazers_count 
    })
    console.log(soma1);
    
    let finalResult = {winner:"", loser:"", draw:false}
    if(soma1 > soma2){     
        console.log(finalResult);
        finalResult.winner = firstUser  
        finalResult.loser = secondUser  
        finalResult.draw = false  
        console.log(finalResult);
        saveResult(firstUser, secondUser, false)
    }else if(soma1 < soma2){
        finalResult.winner = secondUser  
        finalResult.loser = firstUser  
        finalResult.draw = false 
        saveResult(secondUser, firstUser, false)
    }else{
        finalResult.winner = null  
        finalResult.loser = null  
        finalResult.draw = true 
        saveResult(firstUser, secondUser,true)
    }

        

    
    
    
res.sendStatus(200)






} catch (error) {
    res.status(404).send(error)
}
}