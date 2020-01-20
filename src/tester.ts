#!/usr/bin/env node

import 'colors';
import * as yargs from 'yargs';
import { findFiles } from './main';
import * as webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox';

let path: string = process.cwd();

const argv = yargs
  .command('path', 'The path to look for test files in', {
    path: {
      description: 'the path to test files',
      alias: 'p',
      type: 'string',
    },
  })
  .option('keep-open', {
    alias: 'o',
    type: 'boolean',
    description: 'Keep browser open after tests are complete',
  })
  .option('show', {
    alias: 's',
    type: 'boolean',
    description: 'Show browser instead of running in headless mode',
  })
  .help()
  .alias('help', 'h').argv;

if (argv.path) {
  path = String(argv.path);
}

if (!path.endsWith('/')) {
  path += '/';
}

(async () => {
  console.log('Searching for files in: '.yellow + path);
  const files: string[] = await findFiles(path);

  if (!files || files.length == 0) {
    console.warn('No files found'.yellow);
  }

  console.log('Found files: '.green + files);

  files.forEach((file: string) => {
    console.log('Loading file: '.green + file);
    require(path + file);
  });

  // let config = {};

<<<<<<< Updated upstream
  if (argv.show) {
    config = {
      headless: false,
    };
  }
  const browser = await getBrowser(config);
  const page = await browser.newPage();
=======
  // if (argv.show) {
  //   config = {
  //     headless: false,
  //     args: ['--start-maximized'],
  //   };
  // }
>>>>>>> Stashed changes

  // let chromeOptions = new chrome.Options().addArguments('--no-sandbox', '--disable-extensions', '--allow-insecure-localhost', '--whitelisted-ips');
  let chromeOptions = new chrome.Options().addArguments('--auto-open-devtools-for-tabs');
  chromeOptions = chromeOptions;

  let firefoxOptions = new firefox.Options().addArguments('--auto-open-devtools-for-tabs');
  firefoxOptions = firefoxOptions;
  let driver = await new webdriver.Builder()
    // .withCapabilities(webdriver.Capabilities.firefox())
    .withCapabilities(webdriver.Capabilities.chrome())
    // .setChromeOptions(chromeOptions)
    // .setFirefoxOptions(firefoxOptions)
    .build();

  await driver.manage().window().maximize();

  console.log('getting url');
  // await driver.get('https://creately.com/demo-start');
  await driver.get('http://localhost:4200');


  const BLANK_DOCUMENT_BUTTON_XPATH = '/html/body/app-root/ng-component/div/div/div[2]/perfect-scrollbar/div/div[1]/div[1]/div/div[1]/creator-thumbnail/div/div[1]';
  const LOADER_OVERLAY_XPATH = '/html/body/app-root/main-loader';
  // const MAYBE_LATER_BUTTON_XPATH = '//button[contains(text(),"Maybe Later")]';
  const CIRCLE_THUMB_XPATH = '/html/body/app-root/ng-component/div/div/div[2]/left-sidebar/div/div[2]/left-bar/div/div/library-container/div/div[3]/perfect-scrollbar/div/div[1]/collapsible-menu/div/collapsible-menu-item[1]/div/div[2]/ng-component/library-tile[1]/div';
  // const CANVAS_XPATH = '//*[@id="interaction-area-canvas"]';
  const EMAIL_INPUT_XPATH = '//*[@id="gravity-signin-widget"]/form/div/div[1]/input';
  const PASSWORD_INPUT_XPATH = '//*[@id="gravity-signin-widget"]/form/div/div[2]/input';
  const SIGN_IN_BUTTON_XPATH = '//*[@id="gravity-signin-widget"]/form/div/div[4]/div/button';

  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath(EMAIL_INPUT_XPATH)));
  const emailInput = await driver.findElement(webdriver.By.xpath(EMAIL_INPUT_XPATH));
  emailInput.sendKeys('samal@cinergix.com');

  const passwordInput = await driver.findElement(webdriver.By.xpath(PASSWORD_INPUT_XPATH));
  passwordInput.sendKeys('1qaz2wsx@Q');

  const signInButton = await driver.findElement(webdriver.By.xpath(SIGN_IN_BUTTON_XPATH));
  await signInButton.click();
  
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath(LOADER_OVERLAY_XPATH)));
  const loaderOverlay = await driver.findElement(webdriver.By.xpath(LOADER_OVERLAY_XPATH));
  await driver.wait(webdriver.until.elementIsNotVisible(loaderOverlay));

  console.log('waiting for blank document button');
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath(BLANK_DOCUMENT_BUTTON_XPATH)));

  // console.log('getting blank document button');
  // const blankDocumentButton = await driver.findElement(webdriver.By.xpath(BLANK_DOCUMENT_BUTTON_XPATH));
  
  // console.log('clicking button');
  // await blankDocumentButton.click();

  // console.log('waiting for maybe later button');
  // await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath(MAYBE_LATER_BUTTON_XPATH)));

  // console.log('getting maybe later button');
  // const maybeLaterButton = await driver.findElement(webdriver.By.xpath(MAYBE_LATER_BUTTON_XPATH));
  
  // console.log('clicking button');
  // await maybeLaterButton.click();

  await driver.get('http://localhost:4200/diagram/bhAUDXisaA7/edit');

  console.log('waiting for shape')
  await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath(CIRCLE_THUMB_XPATH)));

  console.log('getting shape')
  let shape = await driver.findElement(webdriver.By.xpath(CIRCLE_THUMB_XPATH));
  shape = shape;
  console.log('getting canvas');
  // const canvas = await driver.findElement(webdriver.By.xpath(CANVAS_XPATH));

  // const shapeRect = await shape.getRect();

  // const shapeCenterX = shapeRect.x + ( shapeRect.width / 2 );
  // const shapeCenterY = shapeRect.x + ( shapeRect.width / 2 );

  // await driver.actions().dragAndDrop(shape, { x: 400, y: 50 }).perform();
  // await driver.actions().dragAndDrop(shape, canvas).perform();

  console.log('dragging and dropping shape');

  // await driver.manage().setTimeouts( { implicit: 5000 } );

  await driver.executeScript("document.getElementById('interaction-area-canvas').focus()");

  // await driver.actions({ bridge: true })
  //   .move( { origin: webdriver.Origin.VIEWPORT, x: 820, y: 350 })
  //   .press()
  //   .perform();

  // await driver.manage().setTimeouts( { implicit: 4000 } );
  
  // await driver.actions({ bridge: true })
  //   .move( { origin: webdriver.Origin.VIEWPORT, x: 320, y: 350, duration: 5000 })
  //   .release()
  //   .perform();

  await driver.actions()
    .move( { origin: webdriver.Origin.VIEWPORT, x: 820, y: 370 })
    .pause()
    .press()
    .pause()
    .move( { origin: webdriver.Origin.VIEWPORT, x: 320, y: 350 })
    .pause()
    .release()
    .pause()
    .contextClick()
    .perform();

  // await driver.executeScript("document.getElementById('interaction-area-canvas').click()");


  // // THIS WORKS ON FIREFOX
  // await driver.actions({ bridge: true })
  //   .move( { origin: shape, x: 730, y: 330 })
  //   .press()
  //   .move( { origin: webdriver.Origin.VIEWPORT, x: 950, y: 380, duration: 3000 })
  //   .release()
  //   .perform();

  // driver.executeScript("document.getElementById('interaction-area-canvas').click()");
  let script = `
    var args = arguments,
    callback = args[args.length - 1],
    source = args[0],
    target = args[1],
    offsetX = (args.length > 2 && args[2]) || 0,
    offsetY = (args.length > 3 && args[3]) || 0,
    delay = (args.length > 4 && args[4]) || 1;

    if (!source.draggable) throw new Error('Source element is not draggable.');

    var doc = source.ownerDocument,
      win = doc.defaultView,
      rect1 = source.getBoundingClientRect(),
      rect2 = target ? target.getBoundingClientRect() : rect1,
      x = rect1.left + (rect1.width >> 1),
      y = rect1.top + (rect1.height >> 1),
      x2 = rect2.left + (rect2.width >> 1) + offsetX,
      y2 = rect2.top + (rect2.height >> 1) + offsetY,
      dataTransfer = Object.create(Object.prototype, {
        _items: { value: { } },
        effectAllowed: { value: 'all', writable: true },
        dropEffect: { value: 'move', writable: true },
        files: { get: function () { return undefined } },
        types: { get: function () { return Object.keys(this._items) } },
        setData: { value: function (format, data) { this._items[format] = data } },
        getData: { value: function (format) { return this._items[format] } },
        clearData: { value: function (format) { delete this._items[format] } },
        setDragImage: { value: function () { } } 
      });

    target = doc.elementFromPoint(x2, y2);
    if(!target) throw new Error('The target element is not interactable and need to be scrolled into the view.');
    rect2 = target.getBoundingClientRect();

    emit(source, 'dragstart', delay, function () {
      var rect3 = target.getBoundingClientRect();
      x = rect3.left + x2 - rect2.left;
      y = rect3.top + y2 - rect2.top;
      emit(target, 'dragenter', 1, function () {
        emit(target, 'dragover', delay, function () {
          target = doc.elementFromPoint(x, y);
          emit(target, 'drop', 1, function () {
            emit(source, 'dragend', 1, callback);
    });});});});

    function emit(element, type, delay, callback) {
      var event = doc.createEvent('DragEvent');
      event.initMouseEvent(type, true, true, win, 0, 0, 0, x, y, false, false, false, false, 0, null);
      Object.defineProperty(event, 'dataTransfer', { get: function () { return dataTransfer } });
      element.dispatchEvent(event);
      win.setTimeout(callback, delay);
    }
  `;
  script = script;
  // driver.executeScript(script, shape, null, 300, 0);
  
  
  // await driver.actions().mouse()

  // const mouse = driver.actions().mouse();

  // await driver.actions().pause(mouse).move({origin: shape}).press().release();

  // driver.quit();

  // const browser = await getBrowser(config);
  // const page = await browser.newPage();

  // console.log('Loading browser into context'.yellow);
  // load('context', () => {
  //   return { page: page };
  // });

  // console.log('Executing test cases'.yellow);
  // await runTests();

  // if (!argv['keep-open']) {
  //   await browser.close();
  //   process.exit();
  // }

  console.log('\nCompleted');
})().catch(err => console.error('Error: '.red, err));
