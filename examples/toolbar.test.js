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
var ClickColourButtonToolbar  = tester.ClickColourButtonToolbar ;
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

var Equals = tester.Equals;
var GreaterThan = tester.GreaterThan;
var LessThan = tester.LessThan;
var Includes = tester.Includes;

tester.registerActions(GoTo, GetElementDimensions, GetElementClasses, GetPageTitle, GetUrl, WaitForElementLocated, WaitForElementNotVisible, ClickElementByXpath, WaitTime, ShapeMoveOnCanvas, DragAndDropShape, GetContextualToolbar,
    AddTextToolbar, AddLineToolbar, ClickColourButtonToolbar , ColourForShapeToolbar, ColouredLineForShapeToolbar, ColourDashedLineForShapeToolbar, ClickElementByCoordinates, ColourDashedLineToolbar, ColouredLineToolbar,
    AddLeftArrow, AddRightArrow, AddLineType,ChangeArrowPosition);
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
/*      {
        title: 'get contextual toolbar',
        action: GetContextualToolbar,
        args: [700, 280],
        outs: ['$isDisplayed']
    },
     {
        title: 'checks whether contextual toolbar is displayed',
        assert: Equals,
        args: ['$isDisplayed', 'true']
    },  */
    {
        title: 'add text for shape',
        action: AddTextToolbar,
        args: ['Shpae 1']
    },
    {
        title: 'get contextual toolbar',
        action: GetContextualToolbar,
        args: [700,280],
        outs: ['$isDisplayed']
    },
    {
        title: 'add colour for shape',
        action: ClickColourButtonToolbar ,
        args: [],
        outs: ['$isDisplayed']
    },
    {
        title: 'add colour for shape',
        action: ColourForShapeToolbar,
        args: [19]
    },
     {
        title: 'add colour for shape',
        action: ClickColourButtonToolbar ,
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
        action: ColouredLineForShapeToolbar,
        args: [25]
    },
    {
        title: 'add colour for shape',
        action:ClickColourButtonToolbar  ,
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
        action: ColourDashedLineForShapeToolbar,
        args: [3]
    },
    {
        title: 'get contextual toolbar',
        action: GetContextualToolbar,
        args: [700, 270],
        outs: ['$isDisplayed']
    },
    {
        title: 'checks whether contextual toolbar is displayed',
        assert: Equals,
        args: ['$isDisplayed', 'true']
    },
    {
        title: 'add line for shape',
        action: AddLineToolbar,
        args: [900, 300]
    },
  {
        title: 'mouse move on the line',
        action: ClickElementByCoordinates,
        args: [900, 300]
    },
    {
        title: 'add text for shape',
        action: AddTextToolbar,
        args: ['Line 1']
    },
    {
        title: 'get contextual toolbar',
        action: GetContextualToolbar,
        args: [900, 300],
        outs: ['$isDisplayed']
    },
    {
        title: 'click colour button',
        action: ClickColourButtonToolbar ,
        args: [],
        outs: ['$isDisplayed']
    },
    {
        title: 'checks whether all the colour codes are displayed',
        assert: Equals,
        args: ['$isDisplayed', 'true']
    },
    {
        title: 'add colour for line',
        action: ColourDashedLineToolbar,
        args: [9]
    }, 
      {
        title: 'click colour button',
        action: ClickColourButtonToolbar ,
        args: [],
        outs: ['$isDisplayed']
    },
    {
        title: 'checks whether all the colour codes are displayed',
        assert: Equals,
        args: ['$isDisplayed', 'true']
    },
    {
        title: 'add colour for line',
        action: ColouredLineToolbar,
        args: [16]
    },
    {
        title: 'get contextual toolbar',
        action: GetContextualToolbar,
        args: [900, 300],
        outs: ['$isDisplayed']
    },
    {
        title: 'add left arrow',
        action: AddLeftArrow,
        args: [3]
    },
    {
        title: 'mouse move on the line',
        action: ClickElementByCoordinates,
        args: [700, 300]
    },
    {
        title: 'add line for shape',
        action: AddLineToolbar,
        args: [500, 300]
    },
    {
        title: 'mouse move on the line',
        action: ClickElementByCoordinates,
        args: [700, 300]
    },
    {
        title: 'add line for shape',
        action: AddLineToolbar,
        args: [700, 200]
    },
    {
        title: 'mouse move on the line',
        action: ClickElementByCoordinates,
        args: [500, 300]
    },
    {
        title: 'add text for shape',
        action: AddTextToolbar,
        args: ['Line 2']
    },
    {
        title: 'mouse move on the line',
        action: ClickElementByCoordinates,
        args: [700, 200]
    },
    {
        title: 'add text for shape',
        action: AddTextToolbar,
        args: ['Line 3']
    },
    {
        title: 'mouse move on the line',
        action: ClickElementByCoordinates,
        args: [500, 300]
    },
    {
        title: 'click colour button',
        action:ClickColourButtonToolbar ,
        args: [],
        outs: ['$isDisplayed']
    },
    {
        title: 'add colour for line',
        action: ColouredLineToolbar,
        args: [7]
    },
    {
        title: 'mouse move on the line',
        action: ClickElementByCoordinates,
        args: [700, 300]
    },
    {
        title: 'add line for shape',
        action: AddLineToolbar,
        args: [750, 500]
    },
    {
        title: 'mouse move on the line',
        action: ClickElementByCoordinates,
        args: [750, 500]
    },
    {
        title: 'add text for shape',
        action: AddTextToolbar,
        args: ['Line 4']
    },
    {
        title: 'mouse move on the line',
        action: ClickElementByCoordinates,
        args: [750, 500]
    },
    {
        title: 'add curved shape for line 4',
        action: AddLineType,
        args: [2]
    },
    {
        title: 'drag and drop first shape in library to the canvas',
        action: DragAndDropShape,
        args: ['/html/body/app-root/ng-component/div/div/div[2]/left-sidebar/div/div[2]/left-bar/div/div/library-container/div/div[3]/perfect-scrollbar/div/div[1]/collapsible-menu/div/collapsible-menu-item[1]/div/div[2]/ng-component/library-tile[1]/div', null, 700, 500, null]
    } 
]);