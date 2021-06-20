require('dotenv').config()
import { startServer } from './app';
import { connect } from './config/database';

const PORT = process.env.PORT || 3000

async function main() {
  await connect()
  const app = await startServer();
  app.listen(PORT);
  console.log(`Server on port ${PORT}`);
}

main();
