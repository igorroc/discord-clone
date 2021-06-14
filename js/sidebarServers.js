fetch("../database.json")
	.then((Response) => Response.json)
	.then(async (data) => {
        await console.log(data)
    })
