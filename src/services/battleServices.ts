import { userExistsDb, insertUsersDb } from "../repositories/battleRepository.js"

async function saveResult (winner, loser , draw:Boolean){
if(draw){
    let user1 = userExistsDb(winner)
    let user2 = userExistsDb(winner)
    console.log(user1);
    console.log(user2);
}else{
    console.log("entrou");
    
    let user1 = await userExistsDb(winner)
    let user2 = await userExistsDb(loser)
    if(user1.length>0){
        
        
    }else{
        insertUsersDb(winner, true)
    }
    if(user2.length){

    }else{

    }
}







}
export{saveResult}