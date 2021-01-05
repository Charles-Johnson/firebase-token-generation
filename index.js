const admin = require("firebase-admin");
const rp = require('request-promise');
var serviceAccount = require("./google_service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

admin.auth().createCustomToken("test", {email: "somebody@example.com"}).then(async (customToken) => {
    console.log({customToken})
    const {idToken} = await rp({
        url: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${process.env["WEB_API_KEY"]}`,
        method: 'POST',
        body: {
          token: customToken,
          returnSecureToken: true
        },
        json: true,
      });
    console.log({idToken});
    admin.auth().verifyIdToken(idToken).then(console.log);
})