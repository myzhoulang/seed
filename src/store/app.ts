import { action, configure, observable } from "mobx"

type ICurrentUser = {
  name: string
}

configure({ enforceActions: "always" })

class AccountStore {
  @observable
  currentUser: ICurrentUser = { name: "" }

  @observable
  isAuthenticated = true
  // isAuthenticated = false

  @action.bound
  changeAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated
  }

  @action.bound
  setUser(user: ICurrentUser): void {
    this.currentUser = user
  }

  @action.bound
  getUser(): ICurrentUser {
    return this.currentUser
  }
}
export default new AccountStore()
