const { WAConnection, MessageType } = require('@adiwajshing/baileys')

const main = async () => {
	const conn = new WAConnection()

	// Have trying matching version as in Official Whatsapp Web
	// conn.version = [2, 2126, 14]

	conn.loadAuthInfo ('./auth.json') // will load JSON credentials from file
	
	await conn.connect()

	await conn.sendMessage('1234@s.whatsapp.net', 'Hello', MessageType.text)
}

main()
