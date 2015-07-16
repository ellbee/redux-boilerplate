export default function loggerMiddleware() {
  return next => action => {
    console.log(action);
    return next(action);
  };
}
