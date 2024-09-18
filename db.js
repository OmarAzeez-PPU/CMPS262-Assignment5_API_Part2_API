const Pool = require("pg").Pool;

const pool = new Pool({

    user: "postgres",
    // user: "oazeez",

    host: "localhost",
    // host: "dpg-crangalds78s73d73a40-a",

    database: "inventory",
    // database: "inventory_lais",

    password: "PPU7$$7",
    // password: "v23InVINwOiyV5kFvpZ8kMxXynFbZAGE",

    port: 5432,
});

module.exports = pool;