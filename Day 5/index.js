import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app =express();
const port = 3000;

app.get("/",(req,res)=>{
    const filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(filename);
    const resName = path.join(dir,"exit.html");
    res.sendFile(resName);
})
app.get("/home",(req,res)=>{
    const filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(filename);
    const resName = path.join(dir,"home.html");
    res.sendFile(resName);
})
app.get("/profile",(req,res)=>{
    const filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(filename);
    const resName = path.join(dir,"profile.html");
    res.sendFile(resName);
})
app.get("/service",(req,res)=>{
    const filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(filename);
    const resName = path.join(dir,"service.html");
    res.sendFile(resName);
})
app.get("/contact",(req,res)=>{
    const filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(filename);
    const resName = path.join(dir,"contact.html");
    res.sendFile(resName);
})
app.listen(port,()=>{
    console.log("Running in port");
})