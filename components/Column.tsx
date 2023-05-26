// @ts-nocheck
import React from 'react';
import {Draggable, Droppable} from "react-beautiful-dnd";
import {PlusCircleIcon} from "@heroicons/react/24/outline";
import TodoCard from "@/components/TodoCard";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
}

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  "todo": "To Do",
  "inprogress": "In Progress",
  "done": "Done"
}

const Column = ({id, todos, index}: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${snapshot.isDraggingOver ? 'bg-green-200' : "bg-white/50"}`}
              >
                <h2 className="flex items-center justify-between font-bold text-xl">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-2 font-normal text-sm">{todos.length}</span>
                </h2>
                <div className="space-y-2">
                  {todos.map((todo, index) => (
                    <Draggable key={todo.$id} draggableId={todo.$id} index={index}>
                      {(provided) => (
                        <TodoCard
                          todo={todo}
                          index={index}
                          id={id}
                          innerRef={provided.innerRef}
                          draggableProps={provided.draggableProps}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                  <div className="flex items-end justify-end p-2">
                    <button className="text-green-500 hover:text-green-600"><PlusCircleIcon className="h-10 w-10" /></button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
// by Rokas with ❤️
