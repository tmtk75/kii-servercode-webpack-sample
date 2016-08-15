import {summary} from "./summary.js"

const ensureUser = (uname, passwd) =>
  KiiUser.authenticate(uname, passwd)
         .catch(err => KiiUser.userWithUsername(uname, passwd).register())

export function login(params, ctx, done) {
  ensureUser(params.username, params.password)
    .then((user) => done({ID: user.getUUID()}))
    .catch((err) => done({error: err.message}));
}

export function hello_world(params, ctx) {
  console.log("Hello, world!", params);
  return `Hello, ${JSON.stringify(params)}, ${summary(params.message)}`;
}

