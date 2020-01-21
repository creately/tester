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
        title: 'goes to localhost',
        action: GoTo,
        args: ['http://localhost:4200']
    },
]);