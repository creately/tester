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
        outs: ['$a'] // a page instance
    },
    {
        title: 'resizes the page',
        action: resizeViewport,
        args: ['$a', 200, 300], // a page instance, width, height
        outs: ['$height', '$width']
    },
    {
        title: 'height and width match expected',
        action: isEqual,
        args: ['$height', '$width'], // height, width
        outs: [200, 300] // expected height, width
    }
])