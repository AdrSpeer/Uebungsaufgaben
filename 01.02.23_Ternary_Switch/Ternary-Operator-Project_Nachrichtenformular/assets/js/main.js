function lastMessage() {
  let inputMessage = document.querySelector("#message").value;
  const feedback = document.querySelector("#check");
  const NoFeedback = document.querySelector("#short");
  const checkMessage =
    inputMessage.length >= 1
      ? (feedback.innerHTML = inputMessage)
      : (NoFeedback.innerHTML = "Gib bitte eine Nachricht ein");
}
