export const validInput = () => {
  return {
    queryStringParameters: {
      fullName: "Rahul Kumar",
      age: 26,
    },
  };
};

export const validOutput = () => {
  return {
    body: {
      data: {
        full_name: "Rahul Kumar",
        age: 26,
      },
      message: "success",
    },
  };
};
