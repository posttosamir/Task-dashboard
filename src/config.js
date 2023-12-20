import DisplayButton from "./components/Task1/DisplayButton";
import ToDoList from "./components/Task2/ToDoList";
import { ROUTE_CONSTANTS } from "./constants/route_constants";
export const config = [
  {
    id: "1",
    Component: DisplayButton,
    path: ROUTE_CONSTANTS.TASK1,
  },
  {
    id: "2",
    Component: ToDoList,
    path: ROUTE_CONSTANTS.TASK2,
  },
];
