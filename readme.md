# Tester

Runs end to end tests.

## Setting up for local development

### Clone this repository

```shell
git clone git@github.com:creately/tester.git tester
cd tester
npm install
```

### Set up the package

The package can be installed globally.

When installing the package globally, your `$NODE_PATH` environment variable should be set. If it isn't, add the following to `.bashrc` or `.zshrc` :
```
export NODE_PATH=$(npm root --quiet -g)
```

- Installing globally:
```shell
~/projects/tester $ npm run build
~/projects/tester $ npm install -g
```

To check whether packeage is installed globally:
```shell
~/projects/tester $ npm ls -g --depth=0
```

- Set up Chrome and Firefox webdrivers

Webdrivers should be downloaded and installed for the browser versions available in the environment. Webdrivers and installation instructions can be found here: https://selenium.dev/documentation/en/webdriver/driver_requirements/
