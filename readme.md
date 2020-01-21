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

- Set up Chrome and Firefox webdrivers

Webdrivers should be downloaded and installed for the browser versions available in the environment. Drivers can be downloaded from here: https://selenium.dev/documentation/en/webdriver/driver_requirements/


### Running package

The package is written in Typescript and needs to be rebuilt after making any changes using `npm run build`.

Test specs should be contained in `*.test.js` files. An example test is included in the `examples` directory on the repo.

Run `tester` in the folder containing `*.test.js` files or pass the path with the `--path` argument.

| Argument             | Description                                            |
| ---------------------|:-------------------------------------------------------| 
| `--path=\Users\...`  | The path to look for test files in                     |
| `--help, -h`         | Show help                                              | 
| `--show, -s`         | Show browser instead of running in headless mode       | 
| `--keep-open, -o`    | Keep browser open after tests are complete             | 
| `--devtools, -d`     | Show devtools                                          | 
| `--firefox, -f`      | Use Mozilla Firefox instead of Chrome                  | 
| `--maximise, -m`     | Maximise browser window on open                        | 