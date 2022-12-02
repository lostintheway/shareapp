import { mydb } from "../config/connectToDB";

// UNIQUE INDEX `discount_UNIQUE` (`discount` ASC) VISIBLE)

export const myDBname = "shareapp_test_db";

export const createTablesInit = () => {
  const sql = `CREATE TABLE IF NOT EXISTS ${myDBname}.investments (
            id INT NOT NULL AUTO_INCREMENT,
            name NVARCHAR() NOT NULL,
            relation NVARCHAR() NOT NULL,
            date DATETIME() NOT NULL,
            amount INT ZEROFILL NOT NULL,
            paymentMethod NVARCHAR(),
            details NVARCHAR(),           
            userId INT NOT NULL,
            portfolioId INT NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY(portfolioId) REFERENCES portfolios(id)
            );`;
  mydb.query(sql, function (err, result) {
    if (err) throw err;
    console.log("investments Table created");
  });

  const categ = `CREATE TABLE IF NOT EXISTS ${myDBname}.transactions (
            id INT NOT NULL AUTO_INCREMENT,
            shareName NVARCHAR() NOT NULL,
            shareType NVARCHAR() NOT NULL,
            date DATETIME() NOT NULL,
            quantity INT NOT NULL,
            price INT NOT NULL,
            transType INT NOT NULL,
            portfolioId INT NOT NULL,
            userId INT NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY(portfolioId) REFERENCES ${myDBname}.portfolios(id)
            )`;
  mydb.query(categ, function (err, result) {
    if (err) throw err;
    console.log("transactions Table created");
  });

  const comme = `CREATE TABLE IF NOT EXISTS ${myDBname}.portfolios (
            id INT NOT NULL AUTO_INCREMENT,
            name NVARCHAR() NOT NULL,
            adminName NVARCHAR(),
            date NVARCHAR() NOT NULL,
            userId INT NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY(userId) REFERENCES users(id)
            );`;
  mydb.query(comme, function (err, result) {
    if (err) throw err;
    console.log("comments portfolios created");
  });

  const product_lik = `CREATE TABLE IF NOT EXISTS ${myDBname}.users (
            id INT NOT NULL AUTO_INCREMENT,
            firstName VARCHAR(),
            middleName VARCHAR(),
            lastName VARCHAR(),
            email VARCHAR() NOT NULL,
            username VARCHAR(),
            phone VARCHAR(),
            password VARCHAR(),
            userType VARCHAR(),
            status VARCHAR(),
            PRIMARY KEY (id),
            UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE
            );`;
  mydb.query(product_lik, function (err, result) {
    if (err) throw err;
    console.log("product_likes Table created");
  });
};

// UNIQUE INDEX username_UNIQUE (username ASC) VISIBLE),
// UNIQUE INDEX phone_UNIQUE (phone ASC) VISIBLE),
