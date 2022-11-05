import Joi from "joi";
import { StatusCodes } from "./constants.js";
import CustomError from "./CustomError.js";

const requestValidation = async (body) => {
  const schema = Joi.object({
    first_name: Joi.string().min(3).required().trim(),
    last_name: Joi.string().min(3).required().trim(),
    email: Joi.string().email().lowercase().required().trim(),
    mobile_number: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/),
    profile_image: Joi.string().base64(),
  });

  //   body.profile_image = body.profile_image

  try {
    await schema.validateAsync(body);
  } catch (err) {
    console.log("Async Schema Error", err);
    throw new CustomError(err.message, StatusCodes.BAD_REQUEST);
  }
};

export default requestValidation;
