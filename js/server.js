let link = new URL(window.location)
let serverId = link.searchParams.get("serverId") || 0
let channelId = link.searchParams.get("channelId") || 0

let listaServers = document.getElementById("servers")
listaServers.children[serverId].classList.add("serverActive")

listaServers.children[serverId].scrollIntoView({behavior: "smooth", block: "center"})

let listaChannels = document.getElementById("listaChats")
listaChannels.children[channelId].classList.add("channelActive")

let nomeChat = listaChannels.children[channelId].children[1].innerHTML
document.title = nomeChat

let headerTitle = document.getElementById("headerTitle")
headerTitle.children[1].innerHTML = nomeChat

function toggleMemberList() {
	let memberList = document.getElementById("listaMembros")
	let btnMemberList = document.getElementById("tgMemberList")

	memberList.classList.toggle("displaynone")
	btnMemberList.classList.toggle("iconActive")
}

function changeChannel(id) {
	let link = new URL(window.location)
	console.log(link.search)
	let params = link.searchParams
	params.set("channelId", id)

	console.log(link.search)
	window.location = `http://127.0.0.1:5500/server.html${link.search}`
}
