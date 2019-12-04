var tester = require('ts-starter');
var GoTo = tester.GoTo;
var ResizeViewport = tester.ResizeViewport;
var GetPageDimensions = tester.GetPageDimensions;
var GetViewportDimensions = tester.GetViewportDimensions;
var GetElementDimensions = tester.GetElementDimensions;
var GetElementClasses = tester.GetElementClasses;
var GetPageTitle = tester.GetPageTitle;
var GetUrl = tester.GetUrl;
var Equals = tester.Equals;
var GreaterThan = tester.GreaterThan;
var LessThan = tester.LessThan;
var Includes = tester.Includes;

tester.registerActions(GoTo, ResizeViewport, GetPageDimensions, GetViewportDimensions, GetElementDimensions, GetElementClasses, GetPageTitle, GetUrl);
tester.registerAsserts(Equals, GreaterThan, LessThan, Includes);

tester.addTest('simple test', [
    {
        title: 'goes to google.com',
        action: GoTo,
        args: ['http://www.google.com']
    },
    {
        title: 'gets the page url',
        action: GetUrl,
        outs: ['$url']
    },
    {
        title: 'checks the page url',
        assert: Equals,
        args: ['$url', 'https://www.google.com/?gws_rd=ssl']
    },
    {
        title: 'gets google logo dimensions',
        action: GetElementDimensions,
        args: ['hplogo'],
        outs: ['$gWidth', '$gHeight']
    },
    {
        title: 'checks if google logo width is as expected',
        assert: Equals,
        args: ['$gWidth', '272']
    },
    {
        title: 'resizes the page viewport',
        action: ResizeViewport,
        args: [200, 300]
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
    },
    {
        title: 'goes to google.com',
        action: GoTo,
        args: ['http://www.jira.com']
    },
    {
        title: 'gets body element classes',
        action: GetElementClasses,
        args: ['jira'],
        outs: ['$jBodyClasses']
    },
    {
        title: 'checks if jira body element includes specified class',
        assert: Includes,
        args: ['$jBodyClasses', 'software']
    }
]);