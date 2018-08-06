import {getUserTemplate, renderViewToContainer} from "./login.view"
import {goToSignin, goToSignup} from "./login.service"
import {Store} from "../../boot/Store"

export const createUserLogin = () => {
  const userContent = getUserTemplate()
  const signInBtn = userContent.querySelector("#signin")
  const signUpBtn = userContent.querySelector("#signup")
  signInBtn.addEventListener("click", (event) => {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    goToSignin(username.value, password.value)
  })
  signUpBtn.addEventListener("click", (event) => {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    goToSignup(username.value, password.value)
  })
  renderViewToContainer(userContent, "#quiz-maincontent")
}

Store.subscribe(() => {
  const currentState = Store.getState()
  if(currentState.menuReducer.currentView === 'login'){
    document.querySelector("#quiz-header").innerHTML = ""
    document.querySelector("#quiz-maincontent").innerHTML = ""
    document.querySelector("#quiz-footer").innerHTML = ""
    createUserLogin()
  }
})
