import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const messages = useQuery(api.messages.list) || [];
  const send = useMutation(api.messages.send);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg._id}>{msg.text}</li>
        ))}
      </ul>
      <button onClick={() => send({ text: "Hello from Convex!" })}>
        Send Message
      </button>
    </div>
  );
}
