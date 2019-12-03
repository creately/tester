var tester = require('ts-starter');
var goTo = tester.GoTo;
var isEqual = tester.IsEqual;
var resizeViewport = tester.ResizeViewport;
tester.registerAction(goTo);
tester.registerAction(isEqual);
tester.registerAction(resizeViewport);

tester.addTest('simple test', [
    {
        title: 'goes to google.com',
        action: goTo,
        args: ['http://www.google.com'], // the url to go to
        outs: ['$a'] // the page url that was loaded
    },
    {
        title: 'resizes the page',
        action: resizeViewport,
        args: [200, 300], // width, height
    },
    {
        title: 'height and width match expected',
        action: isEqual,
        args: ['$height', 300], // value reference, expected value
    }
])