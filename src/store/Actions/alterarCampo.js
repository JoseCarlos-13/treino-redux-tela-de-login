export const changeName = (newValue) => {
  return {
    type: "CHANGE_NAME",
    payload: {
      name: newValue
    }
  };
};

export const changeAge = (newValue) => {
  return {
    type: "CHANGE_AGE",
    payload: {
      age: newValue
    }
  };
};
