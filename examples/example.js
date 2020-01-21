var tester = require('ts-starter');
var GoTo = tester.GoTo;
var ResizeViewport = tester.ResizeViewport;
var GetPageDimensions = tester.GetPageDimensions;
var GetViewportDimensions = tester.GetViewportDimensions;
var GetElementDimensions = tester.GetElementDimensions;
var GetElementClasses = tester.GetElementClasses;
var GetPageTitle = tester.GetPageTitle;
var GetUrl = tester.GetUrl;
var WaitForElementLocated = tester.WaitForElementLocated;
var WaitForElementNotVisible = tester.WaitForElementNotVisible;
var ClickElement = tester.ClickElement;
var WaitTime = tester.WaitTime;
var DragAndDropCoordinates = tester.DragAndDropCoordinates;
var DragAndDropElement = tester.DragAndDropElement;
var SendTextToElement = tester.SendTextToElement;

var Equals = tester.Equals;
var GreaterThan = tester.GreaterThan;
var LessThan = tester.LessThan;
var Includes = tester.Includes;

tester.registerActions(GoTo, ResizeViewport, GetPageDimensions, GetViewportDimensions, GetElementDimensions, GetElementClasses, GetPageTitle, GetUrl, WaitForElementLocated, WaitForElementNotVisible, ClickElement, WaitTime, DragAndDropCoordinates, DragAndDropElement, SendTextToElement);
tester.registerAsserts(Equals, GreaterThan, LessThan, Includes);

tester.addTest('simple test', [
    // {
    //     title: 'goes to creately demo start page',
    //     action: GoTo,
    //     args: ['https://creately.com/demo-start']
    // },
    {
        title: 'goes to localhost',
        action: GoTo,
        args: ['http://localhost:4200']
    },
    {
        title: 'waits for email input',
        action: WaitForElementLocated,
        args: ['//*[@id="gravity-signin-widget"]/form/div/div[1]/input']
    },
    {
        title: 'enters email',
        action: SendTextToElement,
        args: ['//*[@id="gravity-signin-widget"]/form/div/div[1]/input', 'samal@cinergix.com']
    },
    {
        title: 'enters password',
        action: SendTextToElement,
        args: ['//*[@id="gravity-signin-widget"]/form/div/div[2]/input', '1qaz2wsx@Q']
    },
    {
        title: 'clicks sign in button',
        action: ClickElement,
        args: ['//*[@id="gravity-signin-widget"]/form/div/div[4]/div/button']
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
        title: 'goes to local document',
        action: GoTo,
        args: ['http://localhost:4200/diagram/bhAUDXisaA7/edit']
    },
    // {
    //     title: 'click blank document button',
    //     action: ClickElement,
    //     args: ['/html/body/app-root/ng-component/div/div/div[2]/perfect-scrollbar/div/div[1]/div[1]/div/div[1]/creator-thumbnail/div/div[1]']
    // },
    // {
    //     title: 'waits for maybe later button',
    //     action: WaitForElementLocated,
    //     args: ['//button[contains(text(),"Maybe Later")]']
    // },
    // {
    //     title: 'clicks maybe later button',
    //     action: ClickElement,
    //     args: ['//button[contains(text(),"Maybe Later")]']
    // },
    {
        title: 'waits for first shape in library',
        action: WaitForElementLocated,
        args: ['/html/body/app-root/ng-component/div/div/div[2]/left-sidebar/div/div[2]/left-bar/div/div/library-container/div/div[3]/perfect-scrollbar/div/div[1]/collapsible-menu/div/collapsible-menu-item[1]/div/div[2]/ng-component/library-tile[1]/div']
    },
    {
        title: 'move shape in center of canvas',
        action: DragAndDropCoordinates,
        args: [null, 820, 370, 300, 300, 3000]
    },
    // {
    //     title: 'drag and drop first shape in library to the canvas',
    //     action: DragAndDropElement,
    //     args: ['/html/body/app-root/ng-component/div/div/div[2]/left-sidebar/div/div[2]/left-bar/div/div/library-container/div/div[3]/perfect-scrollbar/div/div[1]/collapsible-menu/div/collapsible-menu-item[1]/div/div[2]/ng-component/library-tile[1]/div', null, 300, 100, null]
    // },
]);