import TemplateGenerator from "../../common/TemplateGenerator"
import {Store} from '../../../../boot/Store';
import {getTopics} from '../service/CreateChallengeService'
var Material = require('exports-loader?componentHandler&MaterialRipple!material-design-lite/material.js');

function createChallengeSideBarView() {
  const challenegSideBarTemp = `<div class="mdl-layout__drawer" id="sidebar">
    Challenge
    <nav class="mdl-navigation">
      <button class="mdl-navigation__link" id="createChallenge">Create Challenge</button>
      <button class="mdl-navigation__link" id="playChallenge">Play Challenges</button>
      <button class="mdl-navigation__link" id="shareChallenge">Share Challenge</button>
    </nav>
  </div>`

  const challengeSideBarTemplate = TemplateGenerator.createAllChildHTMLElement(challenegSideBarTemp)
  const container = document.querySelector("#quiz-maincontent")
  container.appendChild(challengeSideBarTemplate);
  componentHandler.upgradeAllRegistered()
  document.getElementsByTagName('body')[0].className = ""
}

function callCreateChallenge(){
  debugger;
  Store.dispatch({type:"currentchallengeview",dataItem:"createChallenge"});
}
function callPlayChallenge(){
  debugger;
  Store.dispatch({type:"currentchallengeview",dataItem:"playChallenge"});
}
function callShareChallenge(){
  debugger;
  Store.dispatch({type:"currentchallengeview",dataItem:"shareChallenge"});
}


function createChallengeContainer() {
  const challengeContainer = `<section class="mdl-grid" id="challengeSection">

    </section>`
  const challengeContainerTemp = TemplateGenerator.createAllChildHTMLElement(challengeContainer)

  const container = document.querySelector("#quiz-maincontent")

  container.appendChild(challengeContainerTemp)
  componentHandler.upgradeAllRegistered()
  document.getElementsByTagName('body')[0].className = ""
}
function createChallengeHeader() {
  getTopics();
  //createChallengeHeaderTemplate()
}

function createChallengeHeaderTemplate(topicsArray) {

  // Store.subscribe(()=>{
  //   let state = Store.getState();
  //   if(state.challengeReducer.currentView ==="createChallenge"){
     let topics = ``
  //   let topicsArray = Object.values(state.challengeReducer.topics);
    for(let index =0;index<topicsArray.length;index+=1){
      
      topics =topics.concat(` <option value="${topicsArray[index].topicText}">
                 ${topicsArray[index].topicText}
                </option>`);
    }

     const challengeTemplate = `<div class="mdl-color--grey-100" id="firstPage">
     <main class="mdl-layout__content mdl-cell mdl-cell--12-col">
       <div class="mdl-card mdl-shadow--6dp mdl-cell mdl-cell--12-col">
         <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
           <h2 class="mdl-card__title-text"> Create Challenge</h2>
         </div>
         <div class="mdl-card__supporting-text">
           <form action="#" id="form">
           <div class="mdc-select mdl-cell mdl-cell--12-col">
             <select class="mdc-select__native-control" id="topic">
               <option value="" disabled selected>Select your Topic</option>
                 ${topics}
             </select>
             <!--<label class="mdc-floating-label">Select your Topic</label>-->
             <div class="mdc-line-ripple"></div>
           </div>
             <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
               <input class="mdl-textfield__input" type="text" id="challengeName" />
               <label class="mdl-textfield__label" for="challengeName">Challenge Name</label>
             </div>
             <div class="mdl-card__actions mdl-card--border">
                   <button type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id="create">Create Challenge</button>
               </div>
               </form>
               </div>
               </div>
               </main>
             </div>`
const challengeTemplt = TemplateGenerator.createAllChildHTMLElement(challengeTemplate)
const challengeSection = document.getElementById("challengeSection")
challengeSection.appendChild(challengeTemplt);
componentHandler.upgradeAllRegistered()
document.getElementsByTagName('body')[0].className = ""
  //}
  //})
  
  
 
}
function createQuestion(challengeJsonObj, count) {
  let questionTemplate = ` 
    <div class="mdl-color--grey-100">
        <main class="mdl-layout__content mdl-cell mdl-cell--12-col">
          <div class="mdl-card mdl-shadow--6dp mdl-cell mdl-cell--12-col">
            <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
            <span id="challengelabel">${challengeJsonObj.challengeName} </span><span>${count} out of 7</span>
            </div>
            <div class="mdl-card__supporting-text">
              <form action="#" id="form">
              <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--12-col">
                <input class="mdl-textfield__input" type="text" id="ques${count}" />
                <label class="mdl-textfield__label" for="ques${count}">Question ${count}</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
                <input class="mdl-textfield__input" type="text" id="ques${count}opt1" />
                <label class="mdl-textfield__label" for="ques${count}opt1">Option 1</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
                <input class="mdl-textfield__input" type="text" id="ques${count}opt2" />
                <label class="mdl-textfield__label" for="ques${count}opt2">Option 2</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
                <input class="mdl-textfield__input" type="text" id="ques${count}opt3" />
                <label class="mdl-textfield__label" for="ques${count}opt3">Option 3</label>
              </div>
            <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
              <input class="mdl-textfield__input" type="text" id="ques${count}opt4" />
              <label class="mdl-textfield__label" for="ques${count}opt4">Option 4</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
              <input class="mdl-textfield__input" type="text" id="ques${count}ans" />
              <label class="mdl-textfield__label" for="ques${count}ans">Answer</label>
            </div>`
  if (count < 7) {
    questionTemplate = questionTemplate.concat(` <div class="mdl-card__actions mdl-card--border">
                     <button type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id="nextQuestion">Next</button>
                     </div>
                     </form>
                     </div>
                     </div>
                     </main>
                     </div>`)
  }
  if (count === 7) {
    questionTemplate = questionTemplate.concat(` 
              <div class="mdl-card__actions mdl-card--border">
                  <button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id="save">Submit</button>
              </div>
          </form>
          </div>
          </div>
          </main>
          </div>`)
  }
  const challengeTemplt = TemplateGenerator.createAllChildHTMLElement(questionTemplate)
  const formSection = document.getElementById("challengeSection")
  formSection.innerHTML = ""
  formSection.appendChild(challengeTemplt)
  componentHandler.upgradeAllRegistered()
  document.getElementsByTagName('body')[0].className = ""
}

export {createChallengeContainer, createChallengeHeader, createQuestion, createChallengeSideBarView,createChallengeHeaderTemplate,callCreateChallenge,callPlayChallenge,callShareChallenge}
