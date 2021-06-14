let link = new URL(window.location)
let userId = link.searchParams.get("userId")

let listaConversas = document.getElementById("listaConversas")

if(userId){
    listaConversas.children[userId].classList.add("sectionActive")
    listaConversas.children[userId].scrollIntoView()
    
	let listaChannels = document.getElementById("listaConversas")
	
	let nomeChat = listaChannels.children[userId].children[1].children[0].innerText
	document.title = nomeChat

	let headerTitle = document.getElementById("headerTitle")
	headerTitle.children[1].innerHTML = nomeChat
}
