import FUI, { Utils } from 'f-ui-one'
import config from '../../../package.json'

export function registerUI(app) {
  app.use(FUI, { disabledDoc: true }) // ,{ disabledDoc: true }
  Utils.log.printVersion(config.name, config.version, `【${config.description}】`)
}
