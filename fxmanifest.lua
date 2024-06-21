fx_version 'cerulean'
game 'gta5'

author 'CC'
description 'CC HUD Script'
version '1.0.1'

shared_scripts {
	'@qb-core/shared/locale.lua',
	'locales/en.lua',
	'locales/*.lua',
	'config.lua',
	'uiconfig.lua'
}

client_script 'client.lua'
server_script 'server.lua'

ui_page 'html/index.html'

files {
	'html/*',
}

lua54 'yes'
use_fxv2_oal 'yes'
