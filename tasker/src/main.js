import {createSiteMenuTemplate} from "./components/menu.js";
import {createTaskEditorTemplate} from "./components/task-editor.js";
import {createTaskTemplate} from "./components/task.js";
import {createLoadMoreTemplate} from "./components/load-more.js";
import {createBoardTemplate} from "./components/board.js";
import {createFilterTemplate} from "./components/filter.js";
import {data} from "./data";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditorTemplate());

new Array(TASK_COUNT).fill(``).forEach(() => render(taskListElement, createTaskTemplate()));

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreTemplate());
