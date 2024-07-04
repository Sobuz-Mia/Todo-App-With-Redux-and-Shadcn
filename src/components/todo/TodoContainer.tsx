import { useGetTodosQuery } from "../../redux/api/baseApi";
// import { useAppSelector } from "../../redux/hooks";
import TodoCard from "./TodoCard";
import TodoDropdownMenu from "./TodoDropdownMenu";
import TodoModal from "./TodoModal";
interface Todo {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
}
const TodoContainer = () => {
  //* Local state management
  // const { todos } = useAppSelector((state) => state.todos);
  const { data: todos, isLoading } = useGetTodosQuery(undefined);
  if (isLoading) {
    return <p>Loading...............</p>;
  }
  // this is a container
  return (
    <div>
      <div className="flex justify-between pb-5">
        <TodoModal />
        <TodoDropdownMenu />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        <div className="bg-white rounded-md space-y-3 w-full h-full p-5">
          {todos?.data?.length === 0 ? (
            <div className="bg-white p-5 text-2xl font-semibold rounded-md flex justify-center">
              <p>There is no task pending</p>
            </div>
          ) : (
            todos?.data?.map((todo: Todo) => (
              <TodoCard key={todo.id} {...todo} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
