// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCjhrWlh0tfZO3dHKgWHIOeQIxo-Rc1Nto",
    authDomain: "desktop-pdf-uploader.firebaseapp.com",
    databaseURL: "https://desktop-pdf-uploader.firebaseio.com",
    projectId: "desktop-pdf-uploader",
    storageBucket: "",
    messagingSenderId: "233784398673"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
