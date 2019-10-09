import {observable, computed, action, autorun, when} from 'mobx'
import {getUserDetail} from '../api/user'
class User{
  @observable isLogin = false

  @action.bound
  async fetch () {
    let {
      data, status
    } = await getUserDetail()
    this.data = data
    return data
  }
}

const user = new User()

export default user