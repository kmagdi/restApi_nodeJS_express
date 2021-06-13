const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '',
     database:'diafilm',
     connectionLimit: 5
});
async function getKiado() {
  let conn;
  try {
	conn = await pool.getConnection();
	//const rows = await conn.query("SELECT 1 as val");
	//console.log(rows); //[ {val: 1}, meta: ... ]
	//const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
    const res=await conn.query('select * from kiado limit 5');
	console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

module.exports={
    getKiado:getKiado
}