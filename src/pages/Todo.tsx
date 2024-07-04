import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center my-10 text-2xl font-semibold">
        Simple Todo App With Redux & Shadcn
      </h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
