export const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);
export const isPasswordValid = (password: string) => password.length >= 6;
