import { WebDriver, WebElement, By } from 'selenium-webdriver';
import Action from '../action.i';

/**
 * Drag and drop an element to the specified coordinates.
 */
export default class DragAndDropElement implements Action {

  async execute(args: any[], context: any, ): Promise<string[]> {
    var driver: WebDriver = context.driver;
    const sourceXPath: string = args[0];
    const targetXPath: string = args[1];
    const endX: number = args[2];
    const endY: number = args[3];
    const delay: number = args[4];

    const source: WebElement = await driver.findElement(By.xpath(sourceXPath));

    let target = null;

    if (targetXPath) {
      target = await driver.findElement(By.xpath(targetXPath));
    }

    let script = `
      var args = arguments,
      callback = args[args.length - 1],
      source = args[0],
      target = args[1],
      offsetX = (args.length > 2 && args[2]) || 0,
      offsetY = (args.length > 3 && args[3]) || 0,
      delay = (args.length > 4 && args[4]) || 1;

      if (!source.draggable) throw new Error('Source element is not draggable.');

      var doc = source.ownerDocument,
        win = doc.defaultView,
        sourceRect = source.getBoundingClientRect(),
        targetRect = target ? target.getBoundingClientRect() : sourceRect,
        startX = sourceRect.left + (sourceRect.width >> 1),
        startY = sourceRect.top + (sourceRect.height >> 1),
        endX = targetRect.left + (targetRect.width >> 1) + offsetX,
        endY = targetRect.top + (targetRect.height >> 1) + offsetY,
        dataTransfer = Object.create(Object.prototype, {
          _items: { value: { } },
          effectAllowed: { value: 'all', writable: true },
          dropEffect: { value: 'move', writable: true },
          files: { get: function () { return undefined } },
          types: { get: function () { return Object.keys(this._items) } },
          setData: { value: function (format, data) { this._items[format] = data } },
          getData: { value: function (format) { return this._items[format] } },
          clearData: { value: function (format) { delete this._items[format] } },
          setDragImage: { value: function () { } } 
        });

      target = doc.elementFromPoint(endX, endY);
      if(!target) throw new Error('The target element is not interactable and need to be scrolled into the view.');
      targetRect = target.getBoundingClientRect();

      emit(source, 'dragstart', delay, function () {
        var rect3 = target.getBoundingClientRect();
        startX = rect3.left + endX - targetRect.left;
        startY = rect3.top + endY - targetRect.top;
        emit(target, 'dragenter', 1, function () {
          emit(target, 'dragover', delay, function () {
            target = doc.elementFromPoint(startX, startY);
            emit(target, 'drop', 1, function () {
              emit(source, 'dragend', 1, callback);
            });
          });
        });
      });

      function emit(element, type, delay, callback) {
        var event = doc.createEvent('DragEvent');
        event.initMouseEvent(type, true, true, win, 0, 0, 0, startX, startY, false, false, false, false, 0, null);
        Object.defineProperty(event, 'dataTransfer', { get: function () { return dataTransfer } });
        element.dispatchEvent(event);
        win.setTimeout(callback, delay);
      }
    `;
    driver.executeScript(script, source, target, endX, endY, delay);

    return [''];
  }

}
