import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {

  const randomNumber = (Math.floor(Math.random() * messages.length))
  // console.log("The random number was " + randomNumber);
  const randomMessage = () => messages[randomNumber];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}
