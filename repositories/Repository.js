import TodoRepository from '~/repositories/TodoRepository'

export default ($axios) => ({
    todo: TodoRepository($axios),
})