import { action, configure, observable } from "mobx"

type AuthUser = {
  name: string
}
type AppModel = {
  user: AuthUser
}

configure({ enforceActions: "always" })

export default class AppState {
  @observable
  appState: AppModel = {
    user: { name: "" }
  }

  @action.bound
  setUser(user: AuthUser): void {
    this.appState.user = user
  }

  @action.bound
  getUser(): AuthUser {
    return this.appState.user
  }
}
