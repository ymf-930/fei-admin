import FUI, { Utils } from 'fei-ui-design'
import config from '../../../package.json'

export function registerUI(app) {
  app.use(FUI, { disabledDoc: true }) // ,{ disabledDoc: true }
  Utils.log.printVersion(config.name, config.version, `【${config.description}】`)
}
