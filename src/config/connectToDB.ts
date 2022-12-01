import mysql from "mysql";
import util from "util";

// export const mydb = mysql.createConnection({
//   host: "localhost",
//   user: "admin",
//   password: "#123Admin",
//   database: "deals_test_db",
// });

// export const connectToDB = () => {
//   mydb.connect(function (err) {
//     if (err) throw err;
//     console.log("MySql Connected! ");
//   });
// };

const mydb = mysql.createPool({
  connectionLimit: 10,
  port: 3306,
  host: "150.230.237.97",
  user: "sawmill",
  password: "#1914SawMillion",
  database: "shareapp_test_db",
});

// Ping database to check for common exception errors.
export const connectToDB = () => {
  mydb.getConnection((err, connection) => {
    if (err) {
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        console.error("Database connection was closed.");
      }
      if (err.code === "ER_CON_COUNT_ERROR") {
        console.error("Database has too many connections.");
      }
      if (err.code === "ECONNREFUSED") {
        console.error("Database connection was refused.");
      }
      console.log(err);
    }

    if (connection) {
      console.log("MySql Connected! ");

      connection.release();
    }

    return;
  });
};

// Promisify for Node.js async/await.
// (mydb.query) = util.promisify(mydb.query);

export { mydb };
// Promisify for Node.js async/await.
// pool.query = util.promisify(pool.query)

// module.exports = pool
