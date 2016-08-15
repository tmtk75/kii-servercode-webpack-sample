/*
 * Index file to expose functions can be invoked.
 */
import * as main from "./main.js"
import {page_size} from "./sub.js"

global.sayHello  = main.hello_world;
global.login     = main.login;
global.page_size = page_size;
