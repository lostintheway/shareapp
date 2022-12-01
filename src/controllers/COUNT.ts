// SELECT COUNT(column_name) FROM table_name WHERE condition;

import { mydb } from "../config/connectToDB";
import { mySqlTables } from "./POST";

export const COUNT = (
  tableName: mySqlTables,
  countParam: string,
  id: string
) => {
  return new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    const sql = `SELECT COUNT (${countParam}) FROM ${tableName}
                        where id=${id}`;

    mydb.query(sql, function (err, result) {
      if (err) myReject(err);

      myResolve(result); // when successful
    });
  });
};
