const fs = require("fs/promises");
const path = require("path");

const pathToFile = path.join(process.cwd(), 'dataBases', '../dataBases/cars.json');

module.exports = {
    writer: async (cars) => {
        await fs.writeFile(pathToFile, JSON.stringify(cars));
    },
    reader: async () => {
        const buffer = await fs.readFile(pathToFile);
        return JSON.parse(buffer.toString());
    }
}