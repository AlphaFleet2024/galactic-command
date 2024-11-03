import React, { useEffect, useState } from 'react';

const Game = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5000');

        ws.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data]);
        };

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = () => {
        const ws = new WebSocket('ws://localhost:5000');
        ws.onopen = () => {
            ws.send(input);
            setInput('');
        };
    };

    return (
        <div>
            <h1>Game Room</h1>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Game;
