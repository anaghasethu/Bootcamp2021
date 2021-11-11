const pool = require('../connection');


const addDetails= (req, res) => {
    const {name,email,phone} = req.query;
    pool.query(`insert into details(name,email,phone) 
            values ($1, $2, $3)`, [name,email,phone], (error, results) => {
        if(error) throw error;
        res.status(200).send("Added successfully");
        console.log("Added");
    })
}



module.exports={
    addDetails
}

