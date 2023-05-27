"use client";
import React, {useEffect, useState} from 'react';
import {DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps} from "react-beautiful-dnd";
import {XCircleIcon} from "@heroicons/react/24/outline";
import {useBoardStore} from "@/store/BoardStore";
import getUrl from "@/lib/getUrl";

type Props = {
  todo: Todo
  index: number
  id: TypedColumn
  innerRef: (element?: HTMLElement | null | undefined) => void
  draggableProps: DraggableProvidedDraggableProps
  dragHandleProps: DraggableProvidedDragHandleProps | undefined | null
}

const TodoCard = ({todo, index, id, innerRef, draggableProps, dragHandleProps }: Props) => {
  const deleteTask = useBoardStore((state) => state.deleteTask);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if(todo.image) {
      const fetchImage = async () => {
        const url = await getUrl(todo.image!);
        if(url) {
          setImageUrl(url.toString());
        }
      }
      fetchImage();
    }
  }, [todo])

  return (
    <div
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
      className="bg-white rounded-md space-y-2 drop-dhadow-md"
    >
      <div className="flex justify-between items-center p-5">
        <p>{todo.title}</p>
        <button onClick={() => deleteTask(index, todo, id)} className="text-red-500 hover:text-red-600">
          <XCircleIcon className="ml-5 h-8 w-8" />
        </button>
      </div>

      {/*{imageUrl && (*/}
      {/*  */}
      {/*)}*/}
    </div>
  );
};

export default TodoCard;
// by Rokas with ❤️
