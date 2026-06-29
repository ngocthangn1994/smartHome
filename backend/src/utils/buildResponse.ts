const buildResponse = <T>(success: boolean, message: string, data?: T) => {
  return {
    success,
    message,
    data,
  };
};

export default buildResponse;
