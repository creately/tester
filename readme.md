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

### Running package

The package is written in Typescript and needs to be rebuilt after making any changes.

Run `tester` in the folder containing `*.test.js` files.

Commands:
-  `--path` - The path to look for test files in

Arguments:
- `--help, -h` - Show help 
- `--show, -s` - Show browser instead of running in headless mode
- `--keep-open, -o` - Keep browser open after tests are complete