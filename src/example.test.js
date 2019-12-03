var tester = require('ts-starter');
var GoTo = tester.GoTo;
var IsEqual = tester.IsEqual;
var ResizeViewport = tester.ResizeViewport;
var GetPageHeight = tester.GetPageHeight;
tester.registerAction(GoTo);
tester.registerAction(IsEqual);
tester.registerAction(ResizeViewport);
tester.registerAction(GetPageHeight);

tester.addTest('simple test', [
    {
        title: 'goes to google.com',
        action: GoTo,
        args: ['http://www.google.com'], // the url to go to
        outs: ['$a'] // the page url that was loaded
    },
    {
        title: 'resizes the page',
        action: ResizeViewport,
        args: [200, 300], // width, height
    },
    {
        title: 'gets the page height',
        action: GetPageHeight,
        outs: ['$height']
    },
    {
        title: 'height matches expected height',
        action: IsEqual,
        args: ['$height', 300], // value reference, expected value
        outs: ['$matches']
    }
])