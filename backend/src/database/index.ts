import pgp from "pg-promise";
import { join } from "node:path";

export const db = pgp()("postgres://postgres:admin@localhost:5432/webfood");

const filePath = join(__dirname, "create-user-table.sql");
const query = new pgp.QueryFile(filePath);
db.query(query);
