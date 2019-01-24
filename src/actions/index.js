import * as sessionActions from "./session";
import { init } from "./common";
import { events } from "../constants";
import * as db from "../db";

const categoryActions = init(db.categories,events.CATEGORIES);
const userActions = init(db.users, events.USERS);
const serviceActions = init(db.services, events.SERVICES);

export {
    categoryActions,
    userActions,
    serviceActions,
    sessionActions,
}