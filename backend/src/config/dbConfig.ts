import mongoose from "mongoose";
const connectDb =async () => {
    try{
        const conn = await mongoose.connect(`${process.env.CONNECTION_STRING}`)
        console.log(conn.connection.host)

    }catch(error){

        console.log(error)
        process.exit(1)
    }
}
export default connectDb;