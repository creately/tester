var tester = require('ts-starter');
var GoTo = tester.GoTo;
var GetPageDimensions = tester.GetPageDimensions;
var GetElementDimensions = tester.GetElementDimensions;
var GetElementClasses = tester.GetElementClasses;
var GetPageTitle = tester.GetPageTitle;
var GetUrl = tester.GetUrl;
var WaitForElementLocated = tester.WaitForElementLocated;
var WaitForElementNotVisible = tester.WaitForElementNotVisible;
var ClickElement = tester.ClickElement;
var WaitTime = tester.WaitTime;
var ShapeMoveOnCanvas = tester.ShapeMoveOnCanvas;
var DragAndDropShape = tester.DragAndDropShape;
var GetContextualToolbar = tester.GetContextualToolbar;
var AddText_ContextualToolbar = tester.AddText_ContextualToolbar;
var AddTLine_ContextualToolbar = tester.AddTLine_ContextualToolbar;
var ClickColourButton_ContextualToolbar = tester.ClickColourButton_ContextualToolbar;
var AddColourDashedLine_ContextualToolbar = tester.AddColourDashedLine_ContextualToolbar;
var AddShapeColour_ContextualToolbar = tester.AddShapeColour_ContextualToolbar;
var AddColouredLine_ContextualToolbar = tester.AddColouredLine_ContextualToolbar;

var Equals = tester.Equals;
var GreaterThan = tester.GreaterThan;
var LessThan = tester.LessThan;
var Includes = tester.Includes;

tester.registerActions(GoTo, GetPageDimensions, GetElementDimensions, GetElementClasses, GetPageTitle, GetUrl, WaitForElementLocated, WaitForElementNotVisible, ClickElement, WaitTime, ShapeMoveOnCanvas, DragAndDropShape, GetContextualToolbar,
    AddText_ContextualToolbar, AddTLine_ContextualToolbar, ClickColourButton_ContextualToolbar, AddShapeColour_ContextualToolbar, AddColouredLine_ContextualToolbar, AddColourDashedLine_ContextualToolbar);
tester.registerAsserts(Equals, GreaterThan, LessThan, Includes);

tester.addTest('simple test', [
    {
        title: 'goes to creately demo start page',
        action: GoTo,
        args: ['https://creately.com/demo-start']
    },
    {
        title: 'get the current URL ',
        action: GetUrl,
        outs: ['$url']
    },
    {
        title: 'checks whether current URL is changed',
        assert: Equals,
        args: ['$url', 'https://app.creately.com/diagram/create']
    },
    {
        title: 'waits for loader overlay',
        action: WaitForElementLocated,
        args: ['/html/body/app-root/main-loader']
    },
    {
        title: 'waits for loader overlay to dissappear',
        action: WaitForElementNotVisible,
        args: ['/html/body/app-root/main-loader']
    },
    {
        title: 'click blank document button',
        action: ClickElement,
        args: ['/html/body/app-root/ng-component/div/div/div[2]/perfect-scrollbar/div/div[1]/div[1]/div/div[1]/creator-thumbnail/div/div[1]']
    },
    {
        title: 'waits for maybe later button',
        action: WaitForElementLocated,
        args: ['//button[contains(text(),"Maybe Later")]']
    },
    {
        title: 'clicks maybe later button',
        action: ClickElement,
        args: ['//button[contains(text(),"Maybe Later")]']
    },
    {
        title: 'waits for first shape in library',
        action: WaitForElementLocated,
        args: ['/html/body/app-root/ng-component/div/div/div[2]/left-sidebar/div/div[2]/left-bar/div/div/library-container/div/div[3]/perfect-scrollbar/div/div[1]/collapsible-menu/div/collapsible-menu-item[1]/div/div[2]/ng-component/library-tile[1]/div']
    },
    {
        title: 'drag and drop first shape in library to the canvas',
        action :DragAndDropShape,
        args: ['/html/body/app-root/ng-component/div/div/div[2]/left-sidebar/div/div[2]/left-bar/div/div/library-container/div/div[3]/perfect-scrollbar/div/div[1]/collapsible-menu/div/collapsible-menu-item[1]/div/div[2]/ng-component/library-tile[1]/div', null, 300, 100, null]
    },
    {
        title: 'wait 1 sec',
        action: WaitTime,
        args: [4000]
    },
    {
        title: 'move a shape on canvas',
        action: ShapeMoveOnCanvas,
        args: [null, 350, 150, 700, 300, 3000]
    },
    {
        title: 'get contextual toolbar',
        action: GetContextualToolbar,
        args: [750, 350],
        outs: ['$isDisplayed']
    },
    {
        title: 'checks whether contextual toolbar is displayed',
        assert: Equals,
        args: ['$isDisplayed', 'true']
    },
    {
        title: 'add text for shape',
        action: AddText_ContextualToolbar,
        args: ['Shpae 1']
    },
    {
        title: 'get contextual toolbar',
        action: GetContextualToolbar,
        args: [750, 350],
        outs: ['$isDisplayed']
    },
    {
        title: 'add colour for shape',
        action: ClickColourButton_ContextualToolbar,
        args: [],
        outs: ['$isDisplayed']
    },
    {
        title: 'checks whether all the colour codes are displayed',
        assert: Equals,
        args: ['$isDisplayed', 'true']
    },
    {
        title: 'add colour for shape',
        action: AddShapeColour_ContextualToolbar,
        args: [19]
    },
    {
        title: 'add colour for shape',
        action: ClickColourButton_ContextualToolbar,
        args: [],
        outs: ['$isDisplayed']
    },
    {
        title: 'checks whether all the colour codes are displayed',
        assert: Equals,
        args: ['$isDisplayed', 'true']
    },
    {
        title: 'add colour for shape',
        action: AddColouredLine_ContextualToolbar,
        args: [25]
    },
    {
        title: 'add colour for shape',
        action: ClickColourButton_ContextualToolbar,
        args: [],
        outs: ['$isDisplayed']
    },
    {
        title: 'checks whether all the colour codes are displayed',
        assert: Equals,
        args: ['$isDisplayed', 'true']
    },
    {
        title: 'add colour for shape',
        action: AddColourDashedLine_ContextualToolbar,
        args: [3]
    },
    {
        title: 'get contextual toolbar',
        action: GetContextualToolbar,
        args: [750, 350],
        outs: ['$isDisplayed']
    },
    {
        title: 'checks whether contextual toolbar is displayed',
        assert: Equals,
        args: ['$isDisplayed', 'true']
    },
    {
        title: 'add line for shape',
        action: AddTLine_ContextualToolbar,
        args: [500, 250]
    },
    {
        title: 'get contextual toolbar',
        action: GetContextualToolbar,
        args: [725, 325],
        outs: ['$isDisplayed']
    },
    {
        title: 'checks whether contextual toolbar is displayed',
        assert: Equals,
        args: ['$isDisplayed', 'true']
    },
    {
        title: 'add line for shape',
        action: AddTLine_ContextualToolbar,
        args: [980, 500]
    }
]);