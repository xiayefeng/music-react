import {observable, computed, action, autorun, when} from 'mobx'
import {getUserDetail} from '../api/user'
import {setCountry} from '../i18n'
class User{
  @observable isLogin = false

  @action.bound
  async fetch () {
    let {
      data, status
    } = await getUserDetail()
    this.data = data
    setCountry(data.data.country)
    return data
  }
}

const user = new User()

export default user