var tester = require('ts-starter');
var GoTo = tester.GoTo;
var GetElementDimensions = tester.GetElementDimensions;
var GetElementClasses = tester.GetElementClasses;
var GetPageTitle = tester.GetPageTitle;
var GetUrl = tester.GetUrl;
var WaitForElementLocated = tester.WaitForElementLocated;
var WaitForElementNotVisible = tester.WaitForElementNotVisible;
var ClickElementByXpath = tester.ClickElementByXpath;
var WaitTime = tester.WaitTime;
var ShapeMoveOnCanvas = tester.ShapeMoveOnCanvas;
var DragAndDropShape = tester.DragAndDropShape;
var GetContextualToolbar = tester.GetContextualToolbar;
var AddTextToolbar = tester.AddTextToolbar;
var AddLineToolbar = tester.AddLineToolbar;
var ClickColourButtonToolbar = tester.ClickColourButtonToolbar;
var ColourDashedLineForShapeToolbar = tester.ColourDashedLineForShapeToolbar;
var ColourForShapeToolbar = tester.ColourForShapeToolbar;
var ColouredLineForShapeToolbar = tester.ColouredLineForShapeToolbar;
var ClickElementByCoordinates = tester.ClickElementByCoordinates;
var ColourDashedLineToolbar = tester.ColourDashedLineToolbar;
var ColouredLineToolbar = tester.ColouredLineToolbar;
var AddLeftArrow = tester.AddLeftArrow;
var AddRightArrow = tester.AddRightArrow;
var AddLineType = tester.AddLineType;
var ChangeArrowPosition = tester.ChangeArrowPosition;
var ScaleShape = tester.ScaleShape;
var ShapeRotation = tester.ShapeRotation;

var Equals = tester.Equals;
var GreaterThan = tester.GreaterThan;
var LessThan = tester.LessThan;
var Includes = tester.Includes;

tester.registerActions(GoTo, GetElementDimensions, GetElementClasses, GetPageTitle, GetUrl, WaitForElementLocated, WaitForElementNotVisible, ClickElementByXpath, WaitTime, ShapeMoveOnCanvas, DragAndDropShape, GetContextualToolbar,
    AddTextToolbar, AddLineToolbar, ClickColourButtonToolbar, ColourForShapeToolbar, ColouredLineForShapeToolbar, ColourDashedLineForShapeToolbar, ClickElementByCoordinates, ColourDashedLineToolbar, ColouredLineToolbar,
    AddLeftArrow, AddRightArrow, AddLineType, ChangeArrowPosition, ScaleShape, ShapeRotation);
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
        action: ClickElementByXpath,
        args: ['/html/body/app-root/ng-component/div/div/div[2]/perfect-scrollbar/div/div[1]/div[1]/div/div[1]/creator-thumbnail/div/div[1]']
    },
    {
        title: 'waits for maybe later button',
        action: WaitForElementLocated,
        args: ['//button[contains(text(),"Maybe Later")]']
    },
    {
        title: 'clicks maybe later button',
        action: ClickElementByXpath,
        args: ['//button[contains(text(),"Maybe Later")]']
    },
    {
        title: 'waits for first shape in library',
        action: WaitForElementLocated,
        args: ['/html/body/app-root/ng-component/div/div/div[2]/left-sidebar/div/div[2]/left-bar/div/div/library-container/div/div[3]/perfect-scrollbar/div/div[1]/collapsible-menu/div/collapsible-menu-item[1]/div/div[2]/ng-component/library-tile[1]/div']
    },
    {
        title: 'drag and drop first shape in library to the canvas',
        action: DragAndDropShape,
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
        title: 'Shape Rotation',
        action: ShapeRotation,
        args: [633, 366, 794, 260]
    },
    {
        title: 'click inside the shape',
        action: ClickElementByCoordinates,
        args: [700, 300]
    },
    {
        title: 'Maximize the shape',
        action: ScaleShape,
        args: [714, 360, 850, 450]
    },
    {
        title: 'Maximize the shape',
        action: ScaleShape,
        args: [800, 220, 900, 150]
    },
    {
        title: 'Minimize the shape',
        action: ScaleShape,
        args: [900, 150, 800, 250]
    }
]);