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

const getAllUsers = async (queryParams) => {
  // const query = {};

  if (queryParams?.id) {
    // query.id = queryParams.id;
    const getUsers = users.filter((user) => user.id == queryParams.id);

    if (getUsers.length === 0) {
      throw new CustomError("There is no user present on this id", 404);
    }
    return getUsers;
  }

  if (queryParams?.email) {
    // query.email = queryParams.email;
    const getUsers = users.filter((user) => user.email === queryParams.email);
    if (getUsers.length === 0) {
      throw new CustomError("There is no user present on this email", 404);
    }
    return getUsers;
  }

  if (queryParams?.full_name) {
    // query.full_name = queryParams.full_name;
    const getUsers = users.filter(
      (user) => user.fullName === queryParams.full_name
    );
    if (getUsers.length === 0) {
      throw new CustomError("There is no user present on this full_name", 404);
    }
    return getUsers;
  }

  return users;
};

export default getAllUsers;
