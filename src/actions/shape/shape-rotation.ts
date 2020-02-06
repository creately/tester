import Action from "../../action.i";
import { WebDriver } from "selenium-webdriver";

/* 
 * Rotate the shape
*/
export default class ShapeRotation implements Action {
    async execute(args: any[], context: any): Promise<string[]> {
        var driver: WebDriver = context.driver;

        await driver
            .actions({ bridge: true })
            .pause(4000)
            .move({ x: args[0], y: args[1] })
            .press()
            .move({ x: args[2], y: args[3] })
            .pause(3000)
            .perform();
        return [''];
    }
}