export const required = (value) => (value ? undefined : "该项为必填项");

export const mustBeEmail = (value) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(value)) {
    return "请输入有效的电子邮件地址";
  }
  return undefined;
};

export const maxLength = (lengthNumber) => (value) => {
  if (value && value.length > lengthNumber) {
    return `最多只能输入 ${lengthNumber} 个字符`;
  }
  return undefined;
};

export const minLength = (lengthNumber) => (value) => {
  if (value && value.length < lengthNumber) {
    return `至少需要输入 ${lengthNumber} 个字符`;
  }
  return undefined;
};

export const mustBeRegex = (regex, errorMessage) => (value) => {
  if (value && !regex.test(value)) {
    return errorMessage || "该项的格式不正确";
  }
  return undefined;
};

export const composeValidators =
  (...validators) => undefined
  //(value) =>
    //validators.reduce(
      //(error, validator) => error || validator(value),
      //undefined,
    //);
