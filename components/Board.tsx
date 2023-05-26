"use client";
import React, {useEffect} from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {useBoardStore} from "@/store/BoardStore";

const Board = ({}) => {
  const [board, getBoard] = useBoardStore((state) => [state.board, state.getBoard]);
  useEffect(() => {
    getBoard();
  }, [])

  console.log(board)

  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div>

          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
// by Rokas with ❤️
