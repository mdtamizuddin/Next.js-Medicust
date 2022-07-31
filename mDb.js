import mongoose from "mongoose";


function connect() {
    if (mongoose.connections[0].readyState) {
        console.log("DataBase Connected")
    } else {
        mongoose.connect('mongodb+srv://mdtomizuddin:MIvZ4YPio8vJk0gU@cluster0.vnzso.mongodb.net/test' , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        })
        .then(() => console.log('Database Is Connected'))
        .catch((err)=> console.log(err))
    }
}

export default connect