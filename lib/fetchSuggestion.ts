import {formatTodosForAI} from "@/lib/formatTodosForAI"

export const fetchSuggestion = async (board: Board) => {
  const todos = formatTodosForAI(board);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ todos })
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
}

