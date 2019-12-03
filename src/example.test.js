var tester = require('ts-starter');
var GoTo = tester.GoTo;
var ResizeViewport = tester.ResizeViewport;
var GetPageHeight = tester.GetPageHeight;
var GetPageTitle = tester.GetPageTitle;
var Equals = tester.Equals;
tester.registerAction(GoTo);
tester.registerAction(ResizeViewport);
tester.registerAction(GetPageHeight);
tester.registerAction(GetPageTitle);
tester.registerAssertion(Equals);

tester.addTest('simple test', [
    {
        title: 'goes to google.com',
        action: GoTo,
        args: ['http://www.google.com'], // the url to go to
        outs: ['$a'] // the page url that was loaded
    },
    {
        title: 'resizes the page viewport',
        action: ResizeViewport,
        args: [200, 300], // width, height
    },
    {
        title: 'gets the page height',
        action: GetPageHeight,
        outs: ['$height']
    },
    {
        title: 'checks if height is as expected',
        assert: Equals,
        args: ['$height', '300']
    },
    {
        title: 'gets page title',
        action: GetPageTitle,
        outs: ['$title']
    },
    
])