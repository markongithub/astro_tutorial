import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {

  console.log("This time I ran the Greeting function.")
  const randomMessage = () => {
    console.log("This time I ran randomMessage.");
    return messages[(Math.floor(Math.random() * messages.length))];
  }

  const [greeting, setGreeting] = useState(messages[0]);
  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => {
        setGreeting(randomMessage());
      }}>
        New Greeting
      </button>
    </div>
  );
}
