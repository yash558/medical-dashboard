const getErrorStatement = (error) => {
  return error?.response?.data?.message
    ? error?.response?.data?.message
    : "Some server error occured, please try again later!";
};

export default getErrorStatement;
