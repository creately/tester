import Action from '../../action.i';
import { WebDriver } from 'selenium-webdriver';

export default class SelectText implements Action {
    async execute(args: any[], context: any): Promise<string[]> {
        var driver: WebDriver = context.driver;
        await driver
            .actions({ bridge: true })
            .pause(5000)
            .move({ x: args[0], y: args[1] })
            .pause(1000)
            .press()
            .release()
            .pause(1000)
            .press()
            .release()
            .pause(1000)
            .press()
            .pause(1000)
            .move({ x: args[2], y: args[3] })
            .pause(1000)
            .release()
            .perform()
        return [''];
    }
}
