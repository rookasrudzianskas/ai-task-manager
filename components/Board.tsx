"use client";
import React, {useEffect} from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {useBoardStore} from "@/store/BoardStore";

const Board = ({}) => {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
  }, [])

  return (
    <h1>Hello</h1>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => (
    //       <div>
    //
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  );
};

export default Board;
// by Rokas with ❤️
