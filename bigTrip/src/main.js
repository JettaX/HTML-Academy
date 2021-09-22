import {createBoardTemplate} from "./componets/board";
import {createCardTemplate} from "./componets/cards";
import {createFilterTemplate} from "./componets/filter";
import {createInfoTemplate} from "./componets/info";
import {createMenuTemplate} from "./componets/menu";
import {createSortTemplate} from "./componets/sort";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.trip-main`);
render(siteMainElement, createInfoTemplate());

const siteControlsElement = siteMainElement.querySelector(`.trip-controls`);
render(siteControlsElement, createMenuTemplate());
render(siteControlsElement, createFilterTemplate());

const siteEventsElement = document.querySelector(`.trip-events`);

render(siteEventsElement, createSortTemplate());
render(siteEventsElement, createBoardTemplate());

const siteBoardElement = siteEventsElement.querySelector(`.trip-days`);

new Array(TASK_COUNT).fill(``).forEach(() => render(siteBoardElement, createCardTemplate()));
