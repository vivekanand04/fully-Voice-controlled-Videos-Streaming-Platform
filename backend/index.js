import dotenv from 'dotenv';
dotenv.config();




dotenv.config({ path: new URL('./.env', import.meta.url).pathname });
import connectDB from "./db/index.js";
import { app } from './app.js';
console.log("MONGODB_URI =", process.env.MONGODB_URI);


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    })
})
.catch(err => console.log(err));