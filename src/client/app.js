// import $ from "jquery"
import "./styles/scss/main.scss"
import {} from "../../node_modules/material-design-lite/material.min"
import {store} from "./boot/Store"
// import CreateChallengeController from "./ui-component/challenge/controller/CreateChallengeController"
import {createHeader} from "./ui-component/header/header.controller"
import {createMenu} from "./ui-component/menu/menu.controller"
import {createMainContainer} from "./ui-component/main/main.controlller"
import {createPopularTopicSection, createFavoriteTopicSection, createChallengesSection, createMyChallengesSection} from "./ui-component/dashboard/dashboard.controller"
import {createTopicmodal} from "./ui-component/topic-modal/topic-modal.controller"
import CreatePlayChallengeController from "./ui-component/challenge/play-challenge/controller/playChallenge.controller"
import {createNextQuestion, createChallenge, saveChallengeDetails, createChallengeSideBar} from "./ui-component/challenge/CreateChallenge/controller/CreateChallengeController"
import {createShareChallengesSection, ShareChallengesWithSelectedFriendsSection} from "./ui-component/challenge/ShareChallenges/shareChallenges.controller"

// import {topicCltrl} from "./ui-component/topics/topic-controller"
// import {createUserLogin} from "./ui-component/login-page/login.controller"
// import {GoogleLogin} from "./ui-component/login-page/login.controller"
// GoogleLogin()
console.log(store)
createHeader()
createMenu()
createMainContainer()
createPopularTopicSection()
createFavoriteTopicSection()
createChallengesSection()
createMyChallengesSection()
createTopicmodal()
// topicCltrl()
// createTopicmodal()
$("body").on("click", "#create", createNextQuestion)
$("body").on("click", "#nextQuestion", createNextQuestion)
$("body").on("click", "#save", saveChallengeDetails)
$("body").on("click", "#createChallenge", createChallenge)
$("body").on("click", "#playChallenge", CreatePlayChallengeController.displayPlaySideBar)

// $("#challengeSection").on("click", "#create", CreateChallengeController.saveChallengeDetails)
// CreateChallengeController.displaySideBar()

// export const updateViewState = (viewName) => {
//   switch (viewName) {
//   case "Login":
//     //createUserLogin()
//     break
//   case "Dashboard":
//     createHeader()
//     createMenu()
//     createMainContainer()
//     createPopularTopicSection()
//     break
//   default:
//     break
//   }
// }


createChallengeSideBar()
// // init
// updateViewState("Dashboard")

// share Challenges section
createShareChallengesSection()
ShareChallengesWithSelectedFriendsSection()