// I don't know Why has been delete, but I will figure out.
import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "são acíma da média" });
}

export default status;
