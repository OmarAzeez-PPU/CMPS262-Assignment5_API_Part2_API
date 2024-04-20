const getInventory = "SELECT * FROM cars";
const getInventoryById = "SELECT * FROM cars WHERE id =$1";
const addNewCar = "INSERT INTO cars (id, carbrandmodel, year) VALUES($1, $2, $3)";
updateCarYear = "UPDATE cars set year = $1 where id = $2";

module.exports = {
    getInventory,
    getInventoryById,
    addNewCar,
    updateCarYear,
};