import React from 'react';
import {Draggable} from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
}

const Column = ({id, todos, index}: Props) => {
  return (
    <Draggable>
      {(provided) => (
        <div>

        </div>
      )}
    </Draggable>
  );
};

export default Column;
// by Rokas with ❤️
