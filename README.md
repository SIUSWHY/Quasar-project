# About "Hermes"

This project is my final qualification work.

I will be glad if you watch the [DEMO](https://hermes-server.online/) and write about the bugs you find.

## Install the dependencies

```bash
npm ci
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run serve
#or
npm run dev:pwa
```

### How to build .apk file and subscribe it

```bash
npx quasar build -m capacitor -T android

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore.old app-release-unsigned.apk alias_name

zipalign -v 4 app-release-unsigned.apk quasar.apk
```

### Build the app for production

```bash
npm run build:apk
#or
npm run build:pwa
```
