import { mydb } from "../config/connectToDB";
import { mySqlTables } from "./POST";

// UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// WHERE CustomerID = 1;

export const PUTbyId = (tableName: mySqlTables, body: any, id: string) => {
  return new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)
    const sql = `UPDATE ${tableName} SET ${mapUpdateStr(body)} 
                    where id=${id}`;

    mydb.query(sql, function (err, result) {
      if (err) myReject(err);

      myResolve(result); // when successful
    });
  });
};

export const mapUpdateStr = (body: any): string => {
  const mykeys = Object.keys(body)
    .map((key) => key + `='${body[key]}'`)
    .join(",");

  return mykeys;
};
