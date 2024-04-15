function status(request, response) {
  response.status(200).json({ chave: "somos acima da média" });
}
export default status;
