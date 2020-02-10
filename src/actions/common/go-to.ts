import { WebDriver, until, By } from "selenium-webdriver";
import Action from '../../action.i';
import axios from "axios";
import * as md5 from "md5";
import * as sha256 from "sha256";
import { mouseCoordinates } from '../../mouseCoordinate-helper'

/**
 * Only args[0] is present navigates to a specified url. 
 * If args[1] and args[2] also present with args[0] navigate to 
 * the specifies url and set the auth cookie.
 * 
 */
export default class GoTo implements Action {
  async execute(args: string[], context: any): Promise<string[]> {
    var driver: WebDriver = context.driver;
    
    await driver.get(args[0]);

    if (args[1] && args[2]) {
      const user = {
        email: args[1],
        password: sha256(md5(args[2])),
        token: ""
      };
      const body = {
        email: user.email,
        password: user.password
      };
      const gravityRes = await axios.post(`https://auth-stage.creately.com/v1/basic/authenticate`, body);
      user.token = gravityRes.data.token;
      await driver.manage().addCookie({ name: `gravity_token`, value: `${user.token}` });
      await driver.navigate().refresh();
    }

    if(await driver.wait(until.elementLocated(By.xpath('//*[@id="interaction-area-canvas"]')))){
      driver.executeAsyncScript(mouseCoordinates()).catch(() => {});
    }
    
    return [''];
  }
}
