import { mydb } from "../config/connectToDB";

interface productBody {
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  stock: number;
  slug: string;
  disPercent: number;
  disPrice: number;
  status: string;
  categoryId: number;
}

export const PostProduct = (tableName: string, body: productBody) => {
  const sql = `INSERT INTO ${tableName} 
        (name, description, oldPrice, newPrice, stock, slug, disPercent, disPrice, status, categoryId) 
        VALUES
        (${body.name}, ${body.description}, ${body.oldPrice}, ${body.newPrice}, ${body.stock}, ${body.slug}, ${body.disPercent}, ${body.disPrice}, ${body.status}, ${body.categoryId} )
        `;
  mydb.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
};

interface categoryBody {
  name: string;
  description: string;
  status: string;
  sort: number;
}

export const PostCategory = (tableName: string, body: categoryBody) => {
  const sql = `INSERT INTO ${tableName} 
        (name, description, status, sort ) 
        VALUES (${body.name}, ${body.description}, ${body.status}, 
        ${body.sort})`;
  mydb.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
};

interface commentBody {
  name: string;
  description: string;
  status: string;
  sort: number;
}

export const PostComment = (tableName: string, body: commentBody) => {
  const sql = `INSERT INTO comments
        (comment, productId) 
        VALUES (${body.name}, ${body.description}, ${body.status}, 
        ${body.sort})`;
  mydb.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
};

export const PostUser = (tableName: string, body: commentBody) => {
  const sql = `INSERT INTO comments
        (comment, productId) 
        VALUES (${body.name}, ${body.description}, ${body.status}, 
        ${body.sort})`;
  mydb.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
};

export type mySqlTables =
  | "users"
  | "products"
  | "categorys"
  | "comments"
  | "product_likes"
  | "comment_likes";

export const POSTany = (tableName: mySqlTables, body: Object): Promise<any> => {
  return new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)
    const sql = `INSERT INTO ${tableName} ${mapString(body)} 
                  `;

    mydb.query(sql, function (err, result) {
      if (err) myReject(err);

      myResolve(result); // when successful
    });
  });
};

export const mapString = (body: any): string => {
  const mykeys = Object.keys(body)
    .map((key) => key)
    .join(",");

  const values = Object.keys(body)
    .map((key) => `'${body[key]}'`)
    .join(",");

  return `(${mykeys}) VALUES (${values})`;
};
