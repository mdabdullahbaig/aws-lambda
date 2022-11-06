import Joi from "joi";
import { StatusCodes } from "./constants.js";
import CustomError from "./CustomError.js";

const requestValidation = async (queryParams) => {
  const schema = Joi.object({
    id: Joi.number().positive().integer(),
    email: Joi.string().email().lowercase().trim(),
    full_name: Joi.string().min(3).trim(),
  });

  try {
    await schema.validateAsync(queryParams);
  } catch (err) {
    console.log("Async Schema Error", err);
    throw new CustomError(err.message, StatusCodes.BAD_REQUEST);
  }
};

export default requestValidation;
