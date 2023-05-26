import {Request} from "next/dist/compiled/@edge-runtime/primitives/fetch";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);

  // Connect with openai
}
