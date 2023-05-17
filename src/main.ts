import "./utils/readConfig";
import {startKoa} from "./app";
import {initStore} from "./store";

initStore()
  .then(() => startKoa(11452))
  .then(() => {
    console.log('listen at 11452')
  })
