# Example of how to create custom firebase ID tokens

## Setup

- Make sure you have node v10.23.0 installed

```
$ npm install
```

- Create a firebase project by visiting console.firebase.google.com
- Create a Firebase Admin SDK service account for the firebase project
- Download the service account as a JSON file and save as `google_service_account.json` in this repo's root directory
- Copy the Web API Key from the firebase console in the project's Settings > General

## Create a token

- The following will create a token for a user with UID, `test`, and email, `somebody@example.com`.

```bash
$ WEB_API_KEY=<secret> node index.js
```

- Modify the arguments of the `createCustomToken` method call in `index.js` to mimic different users with different properties