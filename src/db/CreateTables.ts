import { mydb } from "../config/connectToDB";

// UNIQUE INDEX `discount_UNIQUE` (`discount` ASC) VISIBLE)

export const createTablesInit = () => {
  const sql = `CREATE TABLE IF NOT EXISTS deals_test_db.products (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(2000) NOT NULL,
            description VARCHAR(5000) NOT NULL,
            oldPrice INT ZEROFILL NOT NULL,
            newPrice INT ZEROFILL NOT NULL,
            stock INT ZEROFILL NOT NULL,
            slug VARCHAR(500),
            disPercent FLOAT,
            disPrice FLOAT,
            status VARCHAR(225) NOT NULL,
            shopUrl VARCHAR(500),
            shopName VARCHAR(225),
            categoryId INT NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY(categoryId) REFERENCES deals_test_db.categorys(id)
            );`;
  mydb.query(sql, function (err, result) {
    if (err) throw err;
    console.log("products Table created");
  });

  const categ = `CREATE TABLE IF NOT EXISTS deals_test_db.categorys (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            description VARCHAR(500) NOT NULL,
            status VARCHAR(255) NOT NULL,
            sort INT NOT NULL,
            PRIMARY KEY (id),
            UNIQUE INDEX sort_UNIQUE (sort ASC) VISIBLE
            )`;
  mydb.query(categ, function (err, result) {
    if (err) throw err;
    console.log("categorys Table created");
  });

  const comme = `CREATE TABLE IF NOT EXISTS deals_test_db.comments (
            id INT NOT NULL AUTO_INCREMENT,
            comment VARCHAR(1000) NOT NULL,
            productId INT NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY(productId) REFERENCES products(id)
            );`;
  mydb.query(comme, function (err, result) {
    if (err) throw err;
    console.log("comments Table created");
  });

  const product_lik = `CREATE TABLE IF NOT EXISTS deals_test_db.product_likes (
            id BIGINT NOT NULL,
            likes BOOLEAN NOT NULL,
            productId INT NOT NULL,
            userId INT NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY(productId) REFERENCES products(id),
            FOREIGN KEY(userId) REFERENCES users(id)
            );`;
  mydb.query(product_lik, function (err, result) {
    if (err) throw err;
    console.log("product_likes Table created");
  });

  const comment_lik = `CREATE TABLE IF NOT EXISTS deals_test_db.comment_likes (
                      id BIGINT NOT NULL,
                      productId INT NOT NULL,
                      userId INT NOT NULL,
                      likes BOOLEAN NOT NULL,
                      PRIMARY KEY (id),
                      FOREIGN KEY(productId) REFERENCES products(id),
                      FOREIGN KEY(userId) REFERENCES users(id)
                    );`;
  mydb.query(comment_lik, function (err, result) {
    if (err) throw err;
    console.log("comment_likes Table created");
  });

  const userssss = `CREATE TABLE IF NOT EXISTS deals_test_db.users (
            id INT NOT NULL AUTO_INCREMENT,
            firstName VARCHAR(255),
            middleName VARCHAR(255),
            lastName VARCHAR(255),
            email VARCHAR(255) NOT NULL,
            username VARCHAR(255),
            phone VARCHAR(255),
            password VARCHAR(255),
            userType VARCHAR(255),
            PRIMARY KEY (id),
            UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE
            );`;
  mydb.query(userssss, function (err, result) {
    if (err) throw err;
    console.log("users Table created");
  });
};

// UNIQUE INDEX username_UNIQUE (username ASC) VISIBLE),
// UNIQUE INDEX phone_UNIQUE (phone ASC) VISIBLE),
