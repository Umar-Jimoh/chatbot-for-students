const form = document.getElementById('form')
const input = document.getElementById('form-input')
const chatWindow = document.getElementById('chat-window')

const baseURL = 'http://localhost:3000'

function chatMessage(chat, actor) {
  const chatMessage = document.createElement('div')
  chatMessage.classList.add('chat-message')
  if (actor === 'user') chatMessage.classList.add('user-message')
  else chatMessage.classList.add('ai-message')
  chatMessage.innerHTML = `<p>${chat.value}</p>`
  return chatMessage
}

handleFormSubmit = (e) => {
  e.preventDefault()
  chatWindow.appendChild(chatMessage(input, 'user'))
}

form.addEventListener('submit', handleFormSubmit)