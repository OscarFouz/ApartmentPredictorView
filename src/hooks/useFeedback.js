import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

export function useFeedback() {
  return useContext(FeedbackContext);
}
