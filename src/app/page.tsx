import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col items-center">
        {/* <GetUser> */}
        <TodoForm />
        <TodoList />
        {/* </GetUser> */}
      </div>
    </div>
  );
}
