import { h } from 'preact';
import { useState } from 'preact/hooks';

const Greeting = ({ messages }) => {
  const [message, setMessage] = useState(messages[0]);
  
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  return (
    <>
      <p>{message}</p>
      <button onClick={() => setMessage(randomMessage())}>Show other greeting</button> 
    </>
  );
}

export default Greeting;