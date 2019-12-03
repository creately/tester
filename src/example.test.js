var tester = require('ts-starter');
var GoTo = tester.GoTo;
var ResizeViewport = tester.ResizeViewport;
var GetPageDimensions = tester.GetPageDimensions;
var GetViewportDimensions = tester.GetViewportDimensions;
var GetPageTitle = tester.GetPageTitle;
var Equals = tester.Equals;
tester.registerAction(GoTo);
tester.registerAction(ResizeViewport);
tester.registerAction(GetPageDimensions);
tester.registerAction(GetViewportDimensions);
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
        title: 'get the page dimensions',
        action: GetPageDimensions,
        outs: ['$width','$height']
    },
    {
        title: 'checks if height is as expected',
        assert: Equals,
        args: ['$height', '300']
    },
    {
        title: 'get the viewport dimensions',
        action: GetViewportDimensions,
        outs: ['$vWidth', '$vHeight']
    },
    {
        title: 'checks if viewport height matches page height',
        assert: Equals,
        args: ['$height', '$vHeight']
    },
    {
        title: 'gets page title',
        action: GetPageTitle,
        outs: ['$title']
    },
    {
        title: 'checks page title is as expected',
        assert: Equals,
        args: ['$title', 'Google']
    }
]);