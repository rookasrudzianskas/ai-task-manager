import { create } from 'zustand'

interface BoardState {
  board: Board;
  getBoard: () => void;
}

const useBoardStore = create((set) => ({
  board: null,
  getBoard: () => {

  }
}))
