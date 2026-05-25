export function logger(req, res, next) {

  const data =
    new Date().toISOString();

  console.log(
    `[${data}] ${req.method} ${req.url}`
  );

  next();
}