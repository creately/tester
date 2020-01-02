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
var ClickElement = tester.ClickElement;
var EditDocumentTitle = tester.EditDocumentTitle;
var DragAndDrop = tester.DragAndDrop;

tester.registerActions(GoTo, ResizeViewport, GetPageDimensions, GetViewportDimensions, GetElementDimensions, GetElementClasses, GetPageTitle, GetUrl, ClickElement,EditDocumentTitle,DragAndDrop);
tester.registerAsserts(Equals, GreaterThan, LessThan, Includes);

tester.addTest('simple test', [
    {
        title: 'goes to google.com',
        action: GoTo,
        args: ['https://creately.com']
    },
    {
        title: 'resizes the page viewport',
        action: ResizeViewport,
        args: [1056, 768]
    },
    {
        title: 'click "Start Drawing Now" button',
        action: ClickElement,
        args: ['//a[@id="ph-home-btn-hero"]']
    },
    {
        title: 'Enter document title',
        action: EditDocumentTitle,
        args: ['Test']
    }
]);