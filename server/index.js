const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
require("dotenv").config();
const dbConnect = require("./db/connectDB");
const addNewTeacter = require("./models/teacherModel");
const addNewClass = require("./models/classModel");
const adminRegister = require("./models/adminRegisterModel");
const addNewSemSec = require("./models/semesterSectionModel");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3030;
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: "https://frontendprac-kappa.vercel.app", // Frontend origin
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  allowedHeaders: "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
};

app.use(cors(corsOptions));


// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

// auth
app.post("/register", (request, response) => {
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      const adminReg = new adminRegister({
        firstName: request.body.firstName,
        email: request.body.email,
        password: hashedPassword,
      });

      adminReg
        .save()
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});
app.post("/login", (request, response) => {
  adminRegister
    .findOne({ email: request.body.email })

    .then((user) => {
      bcrypt
        .compare(request.body.password, user.password)

        .then((passwordCheck) => {
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

// teacher
app.post("/addNewTeacher", (req, res) => {
  const addTeacher = new addNewTeacter({
    firstname: req.body.firstname,
    // lastname: req.body.lastname,
    email: req.body.email,
    degree: req.body.degree,
    subjects: req.body.subjects,
  });
  console.log("🚀 ~ file: server.js:22 ~ app.post ~ addTeacher:", addTeacher);

  addTeacher
    .save()
    .then((result) => {
      res.status(201).send({
        message: "User Created Successfully",
        result,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error creating user",
        error,
      });
    });
});
//localhost:3030/deleteTeacher/640598870a0ffb416f952f39
app.delete("/deleteTeacher", function (req, res) {
  const id = req.body._id;

  addNewTeacter.deleteOne({ _id: id }, function (err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      console.log("Error Dleted Teacher");
    } else {
      res.sendStatus(204);
      console.log("Dleted Successfully");
    }
  });
});
app.put("/updateTeacher/:id", function (req, res) {
  const id = req.params.id;
  const updatedTeacher = req.body;

  addNewTeacter.findOneAndUpdate(
    { _id: id },
    updatedTeacher,
    { new: true },
    function (err, updatedDocument) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        console.log("Error updating class");
      } else {
        res.status(200).send(updatedDocument);
        console.log("Teacher updated successfully");
      }
    }
  );
});
app.get("/getTeacher", async (req, res) => {
  try {
    const teachers = await addNewTeacter.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).send({
      message: "Error fetching teachers",
      error: err,
    });
  }
});

//class
app.post("/addData", (req, res) => {
  const addClass = new addNewClass({
    room: req.body.room,
    teacher: req.body.teacher,
    class: req.body.class,
    subject: req.body.subject,
    day: req.body.day,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
  });

  addClass
    .save()
    .then((result) => {
      res.status(201).send({
        message: "Class Created Successfully",
        result,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error creating class",
        error,
      });
    });
});

// http://localhost:3030/deleteClass/67939c777dd0266c505ac710
app.delete("/deleteClass/:id",  (req, res) => {
  const id = req.params.id;

  addNewClass.deleteOne({ _id: id }, function (err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      console.log("Error Dleted Class");
    } else {
      res.sendStatus(204);
      console.log("Dleted Successfully");
    }
  });
});

// http://localhost:3030/updateClass/67939c777dd0266c505ac710
app.put("/updateClass/:id", function (req, res) {
  const id = req.params.id;
  const updatedClass = req.body;

  addNewClass.findOneAndUpdate(
    { _id: id },
    updatedClass,
    { new: true },
    function (err, updatedDocument) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        console.log("Error updating class");
      } else {
        res.status(200).send(updatedDocument);
        console.log("Class updated successfully");
      }
    }
  );
});
app.get("/getClasses", async (req, res) => {
  try {
    const clases = await addNewClass.find();
    res.json(clases);
  } catch (err) {
    res.status(500).send({
      message: "Error fetching clases",
      error: err,
    });
  }
});

// semester & section
app.post("/addSemSub", (req, res) => {
  const addSemSec = new addNewSemSec({
    semester: req.body.semester,
    section: req.body.section,
  });

  addSemSec
    .save()
    .then((result) => {
      res.status(201).send({
        message: "Semester & Section Created Successfully",
        result,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error creating Semester & Subject",
        error,
      });
    });
});

//localhost:3030/deleteSemSec?id=64515d087887eed47a41ae40
app.delete("/deleteSemSec", (req, res)=> {
  const id = req.query.id;
  console.log("🚀 ~ file: index.js:281 ~ id:", id);

  addNewSemSec.findOneAndDelete({ _id: id }, function (err, deletedSemSec) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      console.log("Error Deleting Semester & Subject");
    } else if (!deletedSemSec) {
      res.sendStatus(404);
      console.log("Semester & Subject not found");
    } else {
      res.send(deletedSemSec);
      console.log("Deleted Successfully Semester & Subject:", deletedSemSec);
    }
  });
});

//localhost:3030/updateSemSec?id=64515d9c8f3684b21997b9a9
app.put("/updateSemSec", function (req, res) {
  const id = req.query.id;
  const updateSemSec = req.body;

  addNewSemSec.findOneAndUpdate(
    { _id: id },
    updateSemSec,
    { new: true },
    function (err, updatedDocument) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        console.log("Error updating Semester & Subject");
      } else {
        res.status(200).send(updatedDocument);
        console.log("Semester & Subject updated successfully");
      }
    }
  );
});

app.get("/getSemSec", async (req, res) => {
  try {
    const getSemSec = await addNewSemSec.find();
    res.json(getSemSec);
  } catch (err) {
    res.status(500).send({
      message: "Error fetching Semester & Subject",
      error: err,
    });
  }
});

// routes
app.get("/", (req, res) => {
  res.send("hello this is server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
