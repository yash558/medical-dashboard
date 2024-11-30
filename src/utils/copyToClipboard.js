import { notify } from "./notify"
const copyToClipboard = async (text, onSuccess) => {
  if (!navigator?.clipboard) {
    notify("Clipboard not supported", "error")
  } else if (!text) {
    notify("text not provided", "error")
  }

  try {
    await navigator.clipboard.writeText(text)
    onSuccess()
  } catch (error) {
    notify(`Failed copying the text ${text}`, "error")
  }
}

export default copyToClipboard
