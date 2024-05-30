import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

import microfrontendLayout from "./microfrontend-layout.html";
import "./styles.css"

import {publishlib, subscribelib } from "@todo/utils"

const UtilsFunctions = {
  publishlib, 
  subscribelib
}

const data = {
  props: {
    UtilsFunctions
  }
}

const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
