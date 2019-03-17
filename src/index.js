import _ from 'lodash';
import greedyChange from "./greedy_change";
import { makeBubbles } from './bubble';

function component() {
  let element = document.createElement('div');

  // element.innerHTML = makeBubbles();

  return element;
}

document.body.appendChild(component());