const launches = new Map();
const launch = {
  flightNumber: 100,
  mission: "Kepler Expolaration X",
  rocket: "Gaganyan",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["SpaceX", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);
module.exports = {
        launches
}
