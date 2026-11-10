/*
 * Jal Santulan: Google settings for the patient app and the doctor's dashboard.
 * Edit the four values between the quotes, then save (on github.com: the pencil icon, then "Commit changes").
 * None of these is a secret: they identify the app to Google and only work on https://drnvskrishnareddy.github.io.
 */
window.JAL_CONFIG = {
  // Google Cloud > Google Auth Platform > Clients > "Jal Santulan web" > Client ID (ends in .apps.googleusercontent.com)
  clientId: '',
  // Google Cloud > APIs & Services > Credentials > the API key restricted to the Google Picker API
  apiKey: '',
  // Google Cloud > the project's Dashboard / Settings > Project number (digits only)
  projectNumber: '',
  // The unit's Google account that patients share their records with, e.g. endocrine.unit@gmail.com
  unitEmail: '',
  // Shown in the patient app until the dashboard's "Unit details" are saved
  unitName: 'Endocrine team',
};
