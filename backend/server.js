require("dotenv").config();
const app = require("./src/app")
const connectDb = require("./src/config/db/db")


// =========================
// Data base connecting
// =======================
connectDb();

// ======================
// server 
// ======================
app.listen(3000, ()=>{
    console.log("server is runing port 3000");
})
