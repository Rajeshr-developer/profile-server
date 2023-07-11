import express from "express";
import student from "./models/student.js";
import User from "./models/user.js";
import cors from "cors";
import bodyParser from "body-parser";
import { Op } from "sequelize";
import bcrypt from "bcrypt";

var app = express();

const PORT = 3001;

app.use(cors());

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("success");
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { name: req.body.username } });
  if (user) {
    const password_valid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (password_valid) {
      res.send({ status: true });
      return;
    } else {
      res.status(404).json({ error: "user does not exist" });
      return;
    }
  } else {
    res.status(404).json({ error: "user does not exist" });
    return;
  }
});

app.get("/search", function (req, res) {
  console.log(req.query.searchString.length);
  if (req.query.searchString.length < 1) {
    res.status(200).send([]);
  }
  student
    .findAll({
      where: {
        [Op.or]: {
          name: { [Op.iLike]: req.query.searchString + "%" },
        },
      },
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {});
});

app.post("/uploadcsv", function (req, res) {
  console.log(req.body[0]?.department);
  student
    .destroy({
      where: {
        department: req.body[0]?.department,
      },
    })
    .then(() => {
      student.bulkCreate([...req.body], { returning: true }).then(() => {
        res.sendStatus(200);
      });
    });
});

app.get("/login", function (req, res) {
  res.send("login");
});

app.get("/getDepartmentData", function (req, res) {
  console.log("..req = ", req.query);
  student
    .findAll({
      where: {
        department: { [Op.eq]: req.query.name },
      },
      attributes: {
        exclude: ["department"],
      },
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {});
});

app.listen(PORT, () => {
  console.info("Listening on Port : ", PORT);
});
