const form = document.getElementById('form')
const input = document.getElementById('form-input')
const chatWindow = document.getElementById('chat-window')

const baseURL = 'http://localhost:3000'

function chatMessage(chat, actor) {
  const chatMessage = document.createElement('div')
  chatMessage.classList.add('chat-message')
  chatMessage.classList.add(actor === 'user' ? 'user-message' : 'ai-message')
  chatMessage.innerHTML = `<p>${actor === 'user' ? chat.value : chat.ai}</p>`
  return chatMessage
}

handleFormSubmit = (e) => {
  e.preventDefault()
  chatWindow.appendChild(chatMessage(input, 'user'))
  getChatMessage()
}

async function getChatMessage() {
  const res = await fetch(`${baseURL}/chats`)
  let data = await res.json()
  const userInput = new RegExp(`${input.value}`, 'i')
  const newData = data.filter((item) => item.user?.match(userInput))
  input.value = ''
  if (!newData.length)
    return chatWindow.appendChild(
      chatMessage({ ai: "I don't seems to know what you're asking" }, 'ai')
    )
  return chatWindow.appendChild(chatMessage(newData[0], 'ai'))
}

form.addEventListener('submit', handleFormSubmit)