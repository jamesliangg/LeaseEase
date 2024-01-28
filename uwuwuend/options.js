// // options.js
// // Get the form elements
// const darkMode = document.getElementById("dark-mode");
// const notifications = document.getElementById("notifications");
// const saveButton = document.getElementById("save-button");
//
// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//   let url = tabs[0].url; // use `url` here inside the callback because it's asynchronous!
//   console.log(url);
// });
//
//
// // Load the saved options
// chrome.storage.sync.get(["darkMode", "notifications"], function (options) {
//   // Set the checkbox values
//   darkMode.checked = options.darkMode || false;
//   notifications.checked = options.notifications || false;
// });
//
// // Save the options when the button is clicked
// saveButton.addEventListener("click", function () {
//   // Get the checkbox values
//   const darkModeValue = darkMode.checked;
//   const notificationsValue = notifications.checked;
//
//   // Save the options in chrome storage
//   chrome.storage.sync.set(
//     {
//       darkMode: darkModeValue,
//       notifications: notificationsValue,
//     },
//     function () {
//       // Show a confirmation message
//       alert("Options saved!");
//     }
//   );
// });
