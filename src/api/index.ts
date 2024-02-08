import { Login } from './login'

export default class API {
  public static readonly login: typeof Login = Login
}

window['API'] = API
