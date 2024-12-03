export const validatePassword = (password) => {
  if (password?.length < 8 || password?.length > 25) {
    return false;
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!()+=_-])[a-zA-Z0-9@#$%^&*!()+=_-]{8,25}$/;
  return passwordRegex.test(password);
};

export const validateEmail = (email) => {
  let mail = email?.trim().toLowerCase();
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(mail);
};

export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
    return false;
  }
  return true
}