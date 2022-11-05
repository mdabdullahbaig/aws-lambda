export const createUserProfile = async (body) => {
  return {
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    mobileNumber: body?.mobile_number || "",
    profileImage: body?.profile_image || "",
    profileImageUrl:
      "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",
  };
};
