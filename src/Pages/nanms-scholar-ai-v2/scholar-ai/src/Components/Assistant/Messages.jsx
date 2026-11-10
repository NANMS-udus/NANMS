import { useEffect } from "react";
import Message from "./Message";
import "./Messages.css";

export default function Messages({ messages, messagesElem, pending = false, onNavigate }) {
  useEffect(() => {
    if (messagesElem?.current) messagesElem.current.scrollTop = messagesElem.current.scrollHeight;
  }, [messages, pending, messagesElem]);

  return (
    <div ref={messagesElem} className="chat-messages" aria-live="polite" aria-relevant="additions">
      <div className="timestamp-separator"><span>Conversation</span></div>
      {messages.map(message => <Message key={message.id} details={message} onNavigate={onNavigate} />)}
      {pending && (
        <div className="msg-row bot" role="status" aria-label="NANMS Scholar AI is typing">
          <div className="msg-avatar">AI</div>
          <div className="msg-content">
            <div className="msg-bubble">Thinking…</div>
          </div>
        </div>
      )}
    </div>
  );
}
