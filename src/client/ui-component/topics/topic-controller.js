import {topicView} from "./topic.view"
import {Store} from "../../boot/Store"
import {topicModalInitializeShow, createTopicmodal} from "../topic-modal/topic-modal.controller"
import $ from "jquery"
import {getTopicsFromFireBase, addtopics} from "./topics.service"

const topicCltrl = () => {
  getTopicsFromFireBase()
    .then(
      result => {
        // Store.dispatch({"type": "ADD_TOPIC", "payload": result})
        addtopics(result).then(
          res => {
            console.log("res", res)
          },
          err => {
            console.log(err)
          })
        createTopic(result)
      },
      error => {
        console.log(error)
        const obj = Store.getState().topicReducer.topics
        createTopic(obj)
      })
}

const createTopic = (state) => {
  let topics = ""
  for (const newTopic in state) {
    topics += topicView(state[newTopic], newTopic)
  }
  render(topics)
  addEvents()
  createTopicmodal()
}

const render = (topics) => {
  const html = `
  <div>
    <input type="text" id="myInput" placeholder="Search for topics.." title="Type in a topic">
  </div>
  <div class="mdc-grid-list">
                <ul class="mdc-grid-list__tiles">
                    ${topics}
                </ul>
            </div>`
  const container = document.querySelector("main")
  container.innerHTML = html
}

const addEvents = () => {
  const pTopicitems = document.querySelectorAll(".mdc-grid-tile")
  pTopicitems.forEach((item) => {
    item.addEventListener("click", (event) => {
      topicModalInitializeShow(event)
    })
  })

  document.querySelector("#myInput").addEventListener("keyup", (event) => {
    const txt = document.querySelector("#myInput").value
    $(".mdc-grid-tile").hide()
    $(".mdc-grid-tile").each(function() {
      if ($(this).text().toUpperCase().indexOf(txt.toUpperCase()) !== -1) {
        $(this).show()
      }
    })
  })
}

export {
  topicCltrl,
}
