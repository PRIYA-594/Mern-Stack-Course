import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userAuth = false;

app.use(express.urlencoded({ extended: true }));

function pwdCh(req, res, next) {
    const user = req.body["name"];
    const pss = req.body["pwd"];
    if (user === "Priya" && pss === "Siet@1234" && f==0) {
        userAuth = true;
    }
    next(); 
}

app.use(pwdCh);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/authentication", (req, res) => {
    if (userAuth) {
        console.log("SUCCESS");
        res.sendFile(__dirname + "/authen.html");
    } else {
        console.log("ENTER CORRECT USERNAME AND PASSWORD");
        res.sendFile(__dirname + "/index.html");
    }
});
app.post('/logout',(req,res)=>{
    res.redirect("/login");
    console.log("LOGOUT SUCCESSFULLY....");
})
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
