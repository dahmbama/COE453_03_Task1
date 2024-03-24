const functions = require('@google-cloud/functions-framework');

functions.http('add', (req, res) => {
  const x = Number(req.query.X)
  const y = Number(req.query.Y)
  const result = x + y
  res.send(JSON.stringify({
    "X": x,
    "Y": y,
    "Result": result
  }));
});