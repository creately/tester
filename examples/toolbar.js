var tester = require('ts-starter');
var GoTo = tester.GoTo;
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
var AddText_Toolbar = tester.AddText_Toolbar;
var AddLine_Toolbar = tester.AddLine_Toolbar;
var ClickColourButton_Toolbar  = tester.ClickColourButton_Toolbar ;
var ColourDashedLineForShape_Toolbar = tester.ColourDashedLineForShape_Toolbar;
var ColourForShape_Toolbar = tester.ColourForShape_Toolbar;
var ColouredLineForShape_Toolbar = tester.ColouredLineForShape_Toolbar;
var MouseMove = tester.MouseMove;
var ColourDashedLine_Toolbar = tester.ColourDashedLine_Toolbar;
var ColouredLine_Toolbar = tester.ColouredLine_Toolbar;
var AddLeftArrow = tester.AddLeftArrow;
var AddRightArrow = tester.AddRightArrow;
var AddLineType = tester.AddLineType;
var ChangeArrowPosition = tester.ChangeArrowPosition;

var Equals = tester.Equals;
var GreaterThan = tester.GreaterThan;
var LessThan = tester.LessThan;
var Includes = tester.Includes;

tester.registerActions(GoTo, GetElementDimensions, GetElementClasses, GetPageTitle, GetUrl, WaitForElementLocated, WaitForElementNotVisible, ClickElement, WaitTime, ShapeMoveOnCanvas, DragAndDropShape, GetContextualToolbar,
    AddText_Toolbar, AddLine_Toolbar, ClickColourButton_Toolbar , ColourForShape_Toolbar, ColouredLineForShape_Toolbar, ColourDashedLineForShape_Toolbar, MouseMove, ColourDashedLine_Toolbar, ColouredLine_Toolbar,
    AddLeftArrow, AddRightArrow, AddLineType);
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
        action: AddText_Toolbar,
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
        action: ClickColourButton_Toolbar ,
        args: [],
        outs: ['$isDisplayed']
    },
    {
        title: 'add colour for shape',
        action: ColourForShape_Toolbar,
        args: [19]
    },
    {
        title: 'add colour for shape',
        action: ClickColourButton_Toolbar ,
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
        action: ColouredLineForShape_Toolbar,
        args: [25]
    },
    {
        title: 'add colour for shape',
        action:ClickColourButton_Toolbar  ,
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
        action: ColourDashedLineForShape_Toolbar,
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
        action: AddLine_Toolbar,
        args: [900, 300]
    },
    {
        title: 'mouse move on the line',
        action: MouseMove,
        args: [900, 300]
    },
    {
        title: 'add text for shape',
        action: AddText_Toolbar,
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
        action: ClickColourButton_Toolbar ,
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
        action: ColourDashedLine_Toolbar,
        args: [9]
    }, {
        title: 'click colour button',
        action: ClickColourButton_Toolbar ,
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
        action: ColouredLine_Toolbar,
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
        action: MouseMove,
        args: [700, 300]
    },
    {
        title: 'add line for shape',
        action: AddLine_Toolbar,
        args: [500, 300]
    },
    {
        title: 'mouse move on the line',
        action: MouseMove,
        args: [700, 300]
    },
    {
        title: 'add line for shape',
        action: AddLine_Toolbar,
        args: [700, 200]
    },
    {
        title: 'mouse move on the line',
        action: MouseMove,
        args: [500, 300]
    },
    {
        title: 'add text for shape',
        action: AddText_Toolbar,
        args: ['Line 2']
    },
    {
        title: 'mouse move on the line',
        action: MouseMove,
        args: [700, 200]
    },
    {
        title: 'add text for shape',
        action: AddText_Toolbar,
        args: ['Line 3']
    },
    {
        title: 'mouse move on the line',
        action: MouseMove,
        args: [500, 300]
    },
    {
        title: 'click colour button',
        action:ClickColourButton_Toolbar ,
        args: [],
        outs: ['$isDisplayed']
    },
    {
        title: 'add colour for line',
        action: ColouredLine_Toolbar,
        args: [7]
    },
    {
        title: 'mouse move on the line',
        action: MouseMove,
        args: [700, 300]
    },
    {
        title: 'add line for shape',
        action: AddLine_Toolbar,
        args: [750, 500]
    },
    {
        title: 'mouse move on the line',
        action: MouseMove,
        args: [750, 500]
    },
    {
        title: 'add text for shape',
        action: AddText_Toolbar,
        args: ['Line 4']
    },
    {
        title: 'mouse move on the line',
        action: MouseMove,
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