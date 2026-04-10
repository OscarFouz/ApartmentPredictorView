import { useMemo } from "react";
import { useFeedback } from "../hooks/useFeedback";

const labelByType = {
  error: "Error",
  success: "Éxito",
  info: "Info",
};

export default function FeedbackToast() {
  const { messages, hideMessage } = useFeedback();

  const items = useMemo(
    () => messages.map((message) => (
      <div key={message.id} className={`toast toast-${message.type}`}>
        <div className="toast-text">
          <strong>{labelByType[message.type] || "Mensaje"}</strong>
          <span>{message.text}</span>
        </div>
        <button className="toast-close" onClick={() => hideMessage(message.id)}>
          ×
        </button>
      </div>
    )),
    [messages, hideMessage]
  );

  return <div className="feedback-toast-container">{items}</div>;
}
