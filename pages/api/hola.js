// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({ mensaje: `Hola!! este es un mensaje via API con NEXT JS 🐼` })
}