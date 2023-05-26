"use client";
import React from 'react';
import {DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps} from "react-beautiful-dnd";

type Props = {
  todo: Todo
  index: number
  id: TypedColumn
  innerRef: (element?: HTMLElement | null | undefined) => void
  draggableProps: DraggableProvidedDraggableProps
  dragHandleProps: DraggableProvidedDragHandleProps | undefined | null
}

const TodoCard = ({todo, index, id, innerRef, draggableProps, dragHandleProps }: Props) => {
  return (
    <div
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
      className="bg-white rounded-md space-y-2 drop-dhadow-md"
    >
      <h1>Hello</h1>
    </div>
  );
};

export default TodoCard;
// by Rokas with ❤️
