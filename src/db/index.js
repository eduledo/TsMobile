import { init } from "./crud";

const services = init('services');
const users = init('users');
const categories = init('categories');

export {
    services,
    users,
    categories,
}