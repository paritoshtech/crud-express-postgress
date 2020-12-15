const pool = require("./db");

class User {
  // constructor(name, email, phone) {
  //   this.name = name;
  //   this.phone = phone;
  //   this.email = email;
  // }
  constructor(us) {
    this.name = us.name;
    this.phone = us.phone;
    this.email = us.email;
  }

  async getAllUsers() {
    // console.log("Get from DB");
    await pool.connect();

    let resp = await pool.query(`SELECT * FROM USERS`);
    return resp.rows;
  }

  async save() {
    // console.log("insert  into DB");
    let resp = await pool.query(
      `INSERT INTO public.users(
      email_id, name, phone)
     VALUES ( $1, $2, $3) returning *`,
      [this.email, this.name, this.phone]
    );
    // console.log("resp");
    return resp.rows;
  }
}

module.exports = User;
