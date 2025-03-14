const fs = require("fs");
const { request } = require("http");
const path = require("path");
const rootDir = require("../utils/pathUtil");
//fake database
// let homeRegistered = []; when we read and write in your file so to frr is kya kam bkr m space lai rha h

module.exports = class Home {
  constructor(
    houseName,
    houseLocation,
    housePrice,
    houseRating,
    housePhotoUrl,
  ) {
    this.houseName = houseName;
    this.price = housePrice;
    this.location = houseLocation;
    this.rating = houseRating;
    this.PhotoUrl = housePhotoUrl;
  }

  save() {
    Home.fetchAll((homeRegistered) => {
      homeRegistered.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFileSync(
        homeDataPath,
        JSON.stringify(homeRegistered),
        (error) => {
          console.log("file writing concluded", error);
        }
      );
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
