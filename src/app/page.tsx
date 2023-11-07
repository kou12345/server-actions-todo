import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-2/3 flex flex-col items-center">
          {/* <GetUser> */}
          <div className="items-start">
            <TodoForm />
            <TodoList />
          </div>
          {/* </GetUser> */}
        </div>
      </div>
    </div>
  );
}
