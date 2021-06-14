let ids = 1

let userInput = document.getElementById("formUserInput")

userInput.focus()

userInput.addEventListener("keydown", enviaMensagem)

function enviaMensagem(ev) {
	if (ev.key == "Enter") {
		let listaMensagens = document.getElementById("mensagens")

		let user = document.querySelector("#profileName h4").innerHTML
		let mensagem = userInput.value

		let ultimaMensagem =
			listaMensagens.children[listaMensagens.children.length - 1]
		let ultimoUser =
			ultimaMensagem.children[1].children[0].children[0].innerHTML

		if (user == ultimoUser) {
			let p = document.createElement("p")
			p.innerText = mensagem

			ultimaMensagem.children[1].children[1].appendChild(p)
		} else {
			let novaMensagem = document.createElement("div")
			novaMensagem.classList.add("mensagem")
			let senderPic = document.createElement("div")
			senderPic.classList.add("senderPic")
			let img = document.createElement("img")
			img.src =
				"https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/408410/2e94146ee2c43e28ef642ea309f6eef9e939a8fd.gif"
			let content = document.createElement("div")
			content.classList.add("content")
			let senderInfo = document.createElement("div")
			senderInfo.classList.add("senderInfo")
			let h5 = document.createElement("h5")
			h5.innerText = user
			let timestamp = document.createElement("span")
			timestamp.classList.add("timestamp")
			timestamp.innerText = `Hoje às ${new Date().getHours()}:${new Date().getMinutes()}`
			let textos = document.createElement("div")
			textos.classList.add("textos")
			let p = document.createElement("p")
			p.innerText = mensagem

			senderPic.appendChild(img)

			senderInfo.appendChild(h5)
			senderInfo.appendChild(timestamp)

			textos.appendChild(p)

			content.appendChild(senderInfo)
			content.appendChild(textos)

			novaMensagem.appendChild(senderPic)
			novaMensagem.appendChild(content)

			novaMensagem.setAttribute("msgID", ids++)

			listaMensagens.appendChild(novaMensagem)
		}

		let msgEnviada = listaMensagens.lastChild
		listaMensagens.scrollTop = msgEnviada.offsetTop

		userInput.value = ""

		let chats = document.getElementById("listaConversas")
		for (const chat of chats.children) {
			if(chat.classList.contains("sectionActive")){
				chat.setAttribute("style", "order: -1;")
				chat.scrollIntoView({behavior: "smooth", block: "center"})
			}
		}
	}
}
