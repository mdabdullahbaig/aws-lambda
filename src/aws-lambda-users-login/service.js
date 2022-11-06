import jwt from "jsonwebtoken";
import CustomError from "./CustomError.js";

const users = [
  {
    id: 1,
    firstName: "Md Abdullah",
    lastName: "Baig",
    fullName: "Md Abdullah Baig",
    email: "abdullah@gmail.com",
    password: "Abdul@123",
  },
  {
    id: 2,
    firstName: "Rahul",
    lastName: "Kumar",
    fullName: "Rahul Kumar",
    email: "rahul@gmail.com",
    password: "Rahul@123",
  },
  {
    id: 3,
    firstName: "Monal",
    lastName: "Kumar",
    fullName: "Monal Kumar",
    email: "monal@gmail.com",
    password: "Monal@123",
  },
  {
    id: 4,
    firstName: "Saurav",
    lastName: "Kumar",
    fullName: "Saurav Kumar",
    email: "saurav@gmail.com",
    password: "Saurav@123",
  },
];
const generateJwtToken = (id, email) => {
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const login = async (email, password) => {
  let existedUser = null;

  try {
    existedUser = users.find((user) => user.email === email);
  } catch (error) {
    console.log(err);
    throw new CustomError("Login is failed, please try again later.", 500);
  }

  if (!existedUser) {
    throw new CustomError("Invalid creadentials, could not log you in.", 401);
  }

  const isValidPassword = existedUser.password === password ? true : false;

  if (!isValidPassword) {
    throw new CustomError("Invalid creadentials, could not log you in.", 401);
  }

  const token = generateJwtToken(existedUser.id, existedUser.email);
  return token;
};

export default login;
