const Pool = require("pg").Pool;

const pool = new Pool({

    user: "postgres",
    // user: "oazeez",

    host: "localhost",
    // host: "dpg-co5mbluv3ddc7393dfig-a",

    database: "inventory",
    // database: "inventory_5bns",

    password: "PPU7$$7",
    // password: "YhuC9XoJsZ6eITRoiuhxQZ2yY4PEF450",

    port: 5432,
});

module.exports = pool;