import { mydb } from "../config/connectToDB";
import { mySqlTables } from "./POST";

export const GETcategorysSorted = (tableName: mySqlTables): Promise<any> => {
  return new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)
    const sql = `SELECT * FROM ${tableName} ORDER BY sort ASC
                  `;
    mydb.query(sql, function (err, result) {
      if (err) myReject(err);
      myResolve(result); // when successful
    });
  });
};
