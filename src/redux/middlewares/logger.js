export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("[LOG]: " + action.type + " " + new Date().toTimeString());
  next(action);
};
