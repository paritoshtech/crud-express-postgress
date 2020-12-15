const pool = require("./db");

const User = {
  // constructor(name, age, email) {
  //   this.name = name;
  //   this.age = age;
  //   this.email = email;
  // }

  async getAllUsers() {
    console.log("Get from DB");
    await pool.connect();

    resp = await pool.query("SELECT * FROM USERS");
    return resp.rows;
  },
};

module.exports = User;
