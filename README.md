# Quasar App (quasar-project)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### How to build .apk file and subscribe it

See [Publishing to Store](https://quasar.dev/quasar-cli-vite/developing-capacitor-apps/publishing-to-store).

```bash
npx quasar build -m capacitor -T android

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore.old app-release-unsigned.apk alias_name

zipalign -v 4 app-release-unsigned.apk quasar.apk
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
