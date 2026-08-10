const express=require('express');
const app=express();
const PORT=5000;
app.get("/", (req, res) => { res.send("Welcome to Student Application"); }); 
 
app.get("/student", (req, res) => { 
    res.send("Student Name: Rahul, Roll No: 101, Department: CSE"); 
}); 

app.get("/courses", (req, res) => { 
     res.send("Courses: JavaScript, Node.js, Database Management"); 
}); 

app.get("/contact", (req, res) => {
    res.send("<h1>Contact: student@example.com<h1>"); 
}); 

app.listen(PORT, () => { 
     console.log(`Student Application running at http://localhost:${PORT}`); 
});