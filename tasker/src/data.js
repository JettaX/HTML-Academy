import {getRandomArbitrary} from "./utilits/random.js";

const description = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];

let now = new Date;
let getDate = [(new Date(now.getFullYear(), now.getMonth(), now.getDate() + getRandomArbitrary(1, 7))),
  (new Date(now.getFullYear(), now.getMonth(), now.getDate() - getRandomArbitrary(1, 7)))];
let tagsList = [`homework`, `theory`, `practice`, `intensive`, `keks`];
let colorList = [`black`, `yellow`, `blue`, `green`, `pink`];

let data = {
  desc: description[getRandomArbitrary(0, description.length)],
  dueDate: getDate[getRandomArbitrary(0, getDate.length)],
  repeatingDays: {
    mo: false,
    tu: false,
    we: false,
    th: false,
    fr: false,
    sa: false,
    su: false,
  },
  tags: tagsList[getRandomArbitrary(0, tagsList.length)],
  color: colorList[getRandomArbitrary(0, colorList.length)],
  isFavorite: false,
  isArchive: false,
};
