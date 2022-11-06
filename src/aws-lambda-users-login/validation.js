import Joi from "joi";
import { StatusCodes } from "./constants.js";
import CustomError from "./CustomError.js";

const requestValidation = async (body) => {
  const schema = Joi.object({
    email: Joi.string().email().lowercase().required().trim(),
    password: Joi.string().min(6).required().trim(),
  });

  try {
    await schema.validateAsync(body);
  } catch (err) {
    console.log("Async Schema Error", err);
    throw new CustomError(err.message, StatusCodes.BAD_REQUEST);
  }
};

export default requestValidation;
