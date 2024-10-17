import mongoose from "mongoose"

export const connection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "PMS"
    }).then(()=>{
        console.log("Connected To Database");
    }).catch(err => {
        console.log(`Some error occoured while connecting to database ${err}`);
        
    })
}