const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
  res.render("addHome");
};

exports.postAddHome = (req, res, next) => {
  const { houseName, houseLocation, housePrice, houseRating, housePhotoUrl } =
    req.body;
  const home = new Home(
    houseName,
    houseLocation,
    housePrice,
    houseRating,
    housePhotoUrl
  );
  console.log(housePhotoUrl);
  home.save();

  // res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
  res.render("homeAdded");
};

exports.getHome = (req, res, next) => {
  const homeRegistered = Home.fetchAll((homeRegistered) => {
    res.render("home", { homeRegistered: homeRegistered });
  });
};
