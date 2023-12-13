function updateClocks() {
  var newYork = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  var london = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
  });
  var tokyo = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
  var sydney = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
  });

  document.getElementById("NewYork").innerHTML = "New York: " + newYork;
  document.getElementById("London").innerHTML = "London: " + london;
  document.getElementById("Tokyo").innerHTML = "Tokyo: " + tokyo;
  document.getElementById("Sydney").innerHTML = "Sydney: " + sydney;
}

setInterval(updateClocks, 1000);
updateClocks();
