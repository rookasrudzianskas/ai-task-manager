import React from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

const Board = ({}) => {
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
