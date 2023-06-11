// 1. del
import { events } from "./data.js";

//1.2 start op
window.addEventListener("load", initApp);

//1.3 slut på start op
function initApp() {
  console.log(events);
  showEvents(events);
}
//2. opgave 2
function showEvents(listOfEvents) {
  listOfEvents.sort(compareDates);

  for (const event of listOfEvents) {
    console.log(event);
    let eventHTML = /*html*/ `
  <li> ${event.title} ${event.description} ${event.date} <li/>
  `;
    document.querySelector("#students-list").insertAdjacentHTML("beforeend", eventHTML);
  }
}

//3. soter datoer
function compareDates(event1, event2) {
  const date1 = new Date(event1.date);
  const date2 = new Date(event2.date);
  console.log(date1.getTime());
  console.log(date2.getTime());
  return date1.getTime() - date2.getTime();
}
