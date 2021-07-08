importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js"
);
var firebaseConfig = {
  apiKey: "AIzaSyB9zCj1wkyM3FV8pFMPWd3NVJgXcPByi_E",
  authDomain: "kazoop-fe368.firebaseapp.com",
  projectId: "kazoop-fe368",
  storageBucket: "kazoop-fe368.appspot.com",
  messagingSenderId: "408294311628",
  appId: "1:408294311628:web:62c9feab3241c50e0b6469",
  measurementId: "G-0V4N3B6749",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
console.log("firebase messaging setup complete");

// messaging.setBackgroundMessageHandler(function (payload) {
//   const promiseChain = clients
//     .matchAll({
//       type: "window",
//       includeUncontrolled: true,
//     })
//     .then((windowClients) => {
//       for (let i = 0; i < windowClients.length; i++) {
//         const windowClient = windowClients[i];
//         windowClient.postMessage(payload);
//       }
//     })
//     .then(() => {
//       const title = payload.notification.title;
//       const options = {
//         body: payload.notification.score,
//       };
//       return registration.showNotification(title, options);
//     });
//   return promiseChain;
// });
// self.addEventListener("notificationclick", function (event) {
//   console.log("notification received: ", event);
// });
