import connection from "../config/db.js"
function verifyUser (){
    
}

async function userExistsDb(user: String){
    
let result = await (connection.query(`
SELECT * 
FROM fighters
WHERE "username"=$1
`,[user]))

return result.rows
}
async function insertUsersDb(user: String, winner){
    if(winner){ 
        let result = await (connection.query(`
    INSERT INTO 
    fighters (username,wins,losses,draws)
    VALUES ($1,$2,$3,$4)
    `,[user, 1,0,0]))}
    else{
        let result = await (connection.query(`
        INSERT INTO 
        fighters (username,wins,losses,draws)
        VALUES ($1,$2,$3,$4)
        `,[user, 1,0,0]))}
    }

export{verifyUser, userExistsDb,insertUsersDb}