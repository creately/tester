# Tester

Runs end to end tests.

## Setting up for local development

### Clone this repository

```shell
git clone git@github.com:creately/tester.git tester
npm install
```

### Set up the package

The package can either be symlinked or installed globally.

- Symlinking the package folder:
```shell
~/projects/tester $ npm link
~/projects/myapp $ npm link ts-starter
```

When installing the package globally, your `$NODE_PATH` environment variable should be set. If it isn't, add the following to `.bashrc` or `.zshrc` :
```
export NODE_PATH=$(npm root --quiet -g)
```

- Installing globally:
```shell
~/projects/tester $ npm run prepare
~/projects/tester $ npm install -g ./
```

### Notes

The package is written in Typescript and needs to be rebuilt after making any changes.