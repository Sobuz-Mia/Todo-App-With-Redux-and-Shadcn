import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo } from "../../redux/features/todoSlice";

const TodoModal = () => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const handleTask = (e: FormEvent) => {
    e.preventDefault();
    const TodoDetails = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      description,
    };
    dispatch(addTodo(TodoDetails));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl">Add task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleTask}>
          <DialogHeader>
            <DialogTitle>Add task</DialogTitle>
            <DialogDescription>
              Write task title and description that you want to finish
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="desc" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="desc"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="submit">Add task</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TodoModal;
