const path = require('path');
const fs = require('fs');
const os = require('os');
const rimraf = require('rimraf');

const platform = os.platform();
switch (platform) {
  case 'win32': {
    ['macos', 'linux', 'android', 'ios'].forEach(p => {
      rimraf(path.join(__dirname, 'lib', p), err => {
        if (err) {
          throw err;
        }
      });
    });
    break;
  }
  case 'darwin': {
    ['win', 'linux', 'android', 'ios'].forEach(p => {
      rimraf(path.join(__dirname, 'lib', p), err => {
        if (err) {
          throw err;
        }
      });
    });
    break;
  }
  case 'linux': {
    ['win', 'macos', 'android', 'ios'].forEach(p => {
      rimraf(path.join(__dirname, 'lib', p), err => {
        if (err) {
          throw err;
        }
      });
    });
    break;
  }
  default: throw new Error('unknown platform: ' + platform);
}

process.on('uncaughtException', err => {
  console.warn(err.stack);
});
