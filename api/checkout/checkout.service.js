const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into checkout(name, email,address, purchase) 
                  values(?,?,?,?)`,
      [data.name, data.email, data.address, data.purchase],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};