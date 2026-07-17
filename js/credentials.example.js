/**
 * Vorlage für js/credentials.js
 *
 * Diese Datei nach `js/credentials.js` kopieren und die Platzhalter durch die
 * echten Firebase-Werte ersetzen. `js/credentials.js` ist in .gitignore und
 * darf NICHT eingecheckt werden (enthält den API-Key).
 *
 * Die Werte findest du in der Firebase Console:
 * Projekteinstellungen → Allgemein → "Deine Apps" → SDK-Konfiguration.
 */
export class Credentials {
    constructor() {
        /**
         * Firebase Configuration
         */
        this.firebaseApiKey = "YOUR_FIREBASE_API_KEY";
        this.firebaseAuthDomain = "your-project.firebaseapp.com"
        this.firebaseDatabaseURL = "https://your-project-default-rtdb.europe-west1.firebasedatabase.app"
        this.firebaseProjectId = "your-project-id"
        this.firebaseStorageBucket = "your-project.firebasestorage.app"
        this.firebaseMessagingSenderId = "000000000000"
        this.firebaseAppId = "1:000000000000:web:0000000000000000000000"
    }
}
