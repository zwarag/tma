let tg = window.Telegram.WebApp;

// Initialize the app
tg.ready();

// Get user data if available
const user = tg.initDataUnsafe.user;
console.log("User:", user);

// Show main button
tg.MainButton.setText("SEND MESSAGE");
tg.MainButton.show();

// Handle main button click
tg.MainButton.onClick(() => {
  tg.sendData("User clicked main button");
});
