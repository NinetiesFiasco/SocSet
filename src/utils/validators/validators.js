export const requiredField = value => {

  return value && value.length>0
    ? undefined
    : "Field is required";
}

export let maxLengthCreator = (maxLength) => (value) => {
  return value && value.length > maxLength
    ?`Max length is ${maxLength} symbols`
    :undefined;
}

export const maxLength30 = value => {
  return value.length>30
    ?"Max length 30 symbols"
    :undefined;
}