# egg-passport-line

line passport plugin for egg

## Install

```bash
$ npm i egg-passport-line --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.passportLine = {
  enable: true,
  package: 'egg-passport-line',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.passportLine = {
  key: 'LINE_CHANNEL_ID',
  secret: 'LINE_SECRET_ID',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
