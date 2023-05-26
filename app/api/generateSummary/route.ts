import {Request} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import openai from "@/openai";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);

  // Connect with openai

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, welcome user always as Mr. Rokas and say welcome to the byRookas App! Limit the response to 200 characters.`
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`,
      },
    ]
  })

  const { data } = response;

  console.log("DATA IS: ", data);
  console.log("DATA IS: ", data.choices[0].message);

  return NextResponse.json(data.choices[0].message);
}
