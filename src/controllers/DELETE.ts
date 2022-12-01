import { mydb } from "../config/connectToDB";
import { mySqlTables } from "./POST";
// DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

export const DELETEbyId = (tableName: mySqlTables, id: string) => {
  return new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    const sql = `DELETE FROM ${tableName} where id=${id}`;

    mydb.query(sql, function (err, result) {
      if (err) myReject(err);

      myResolve(result); // when successful
    });
  });
};
