import { Common } from './common'
import { Login } from './login'

export default class API {
  public static readonly login: typeof Login = Login
  public static readonly Common: typeof Common = Common
}

window['API'] = API
