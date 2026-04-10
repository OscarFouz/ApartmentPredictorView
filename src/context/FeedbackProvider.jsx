import { useCallback, useMemo, useState } from "react";
import { FeedbackContext } from "./FeedbackContext";

let nextToastId = 0;
const DEFAULT_TIMEOUT = 4500;

export function FeedbackProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const hideMessage = useCallback((id) => {
    setMessages((current) => current.filter((message) => message.id !== id));
  }, []);

  const showMessage = useCallback((type, text, timeout = DEFAULT_TIMEOUT) => {
    const id = ++nextToastId;
    setMessages((current) => [...current, { id, type, text }]);

    if (timeout !== 0) {
      window.setTimeout(() => hideMessage(id), timeout);
    }
  }, [hideMessage]);

  const showError = useCallback(
    (text, timeout) => showMessage("error", text || "Ocurrió un error inesperado", timeout),
    [showMessage]
  );

  const showSuccess = useCallback(
    (text, timeout) => showMessage("success", text, timeout),
    [showMessage]
  );

  const showInfo = useCallback(
    (text, timeout) => showMessage("info", text, timeout),
    [showMessage]
  );

  const value = useMemo(
    () => ({ messages, showError, showSuccess, showInfo, hideMessage }),
    [messages, showError, showSuccess, showInfo, hideMessage]
  );

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
}
