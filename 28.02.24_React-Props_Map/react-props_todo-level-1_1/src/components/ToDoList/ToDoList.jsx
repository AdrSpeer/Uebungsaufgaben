import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

const ToDoList = () => {
  const data = [
    {
      toDo: "Buy Grocerys",
    },
    {
      toDo: "Send Email",
    },
    {
      toDo: "Finish Assignment",
    },
    {
      toDo: "Write Blog",
    },
    {
      toDo: "Bake Cake",
    },
  ];
  return (
    <section>
      {data.map((item, index) => (
        <ul key={index}>
          <ToDoItem toDo={item.toDo} />
        </ul>
      ))}
    </section>
  );
};

export default ToDoList;
