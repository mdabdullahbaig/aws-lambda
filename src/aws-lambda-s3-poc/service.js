import fileUpload from "./fileUpload.js";

export const createUserProfile = async (body) => {
  if (body?.base64_profile_image) {
    const fileUploadResponse = await fileUpload(body.base64_profile_image);
    console.log("S3 File Upload Response", fileUploadResponse);
  }

  return {
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    mobileNumber: body?.mobile_number,
    base64ProfileImage: body?.base64_profile_image,
    profileImageUrl:
      "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",
  };
};
