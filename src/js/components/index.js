// this enables to just require anything from components folder
// example: import { TodoList } from "components"
// instead of: import TodoList from "./components/pages/TodoList"
const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/\w*.js$/);

console.log('components: ', req.keys());
req.keys().forEach(key => {
  const componentName = key.replace(/^.+\/([^/]+)\.js/, '$1');
  module.exports[componentName] = req(key).default;
});
