import { getDataForm, showData } from "./controller-v1.js";

let createFood = () => {
  let data = getDataForm();
  showData(data);
};

window.themMon = createFood;
