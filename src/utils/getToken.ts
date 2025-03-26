export const getToken = (): string => {
  const token = localStorage.getItem("token");
  if (!token || token === "") throw new Error("Please Login to your account to perform this operation");
  return token;
}