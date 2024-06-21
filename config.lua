-- CC SCRIPTS / HUD

Config = {}

Config.OpenMenu = 'I' -- Keybind used to open the HUD menu https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/
Config.StressChance = 0.05 -- Chance of stress levels increasing while shooting (Default: 5%)
Config.UseMPH = true -- TRUE to use MPH / FALSE to use KMH (Changes need to be made to styles.css to display properly)
Config.MinimumStress = 60 -- Minimum stress level at which the screen will start shaking
Config.MinimumSpeedUnbuckled = 60 -- Speed at which players will get stressed while unbuckled
Config.MinimumSpeed = 110 -- Speed at which players will get stressed while buckled
Config.DisablePoliceStress = false -- If false, any player with the police job will not get stressed
Config.FuelScript = 'LegacyFuel' -- Change to your fuel script (LegacyFuel, ps-fuel, cdn-fuel etc.)
Config.Image = 'https://r2.fivemanage.com/6u8qsuOiaFXnjrqPOtI5D/HyWyIy7.png' -- Set your server logo displayed in the HUD menu here

Config.AdminOnly = false -- TRUE to only allow admins to change icons/shapes / FALSE for everyone

-- Stress
Config.WhitelistedWeaponArmed = { -- Weapons that should not show "ARMED" mode
    
    -- MISC
    `weapon_petrolcan`,
    `weapon_hazardcan`,
    `weapon_fireextinguisher`,

    -- MELEE
    `weapon_dagger`,
    `weapon_bat`,
    `weapon_bottle`,
    `weapon_crowbar`,
    `weapon_flashlight`,
    `weapon_golfclub`,
    `weapon_hammer`,
    `weapon_hatchet`,
    `weapon_knuckle`,
    `weapon_knife`,
    `weapon_machete`,
    `weapon_switchblade`,
    `weapon_nightstick`,
    `weapon_wrench`,
    `weapon_battleaxe`,
    `weapon_poolcue`,
    `weapon_briefcase`,
    `weapon_briefcase_02`,
    `weapon_garbagebag`,
    `weapon_handcuffs`,
    `weapon_bread`,
    `weapon_stone_hatchet`,
    
    -- THROWABLES
    `weapon_grenade`,
    `weapon_bzgas`,
    `weapon_molotov`,
    `weapon_stickybomb`,
    `weapon_proxmine`,
    `weapon_snowball`,
    `weapon_pipebomb`,
    `weapon_ball`,
    `weapon_smokegrenade`,
    `weapon_flare`
}

Config.WhitelistedWeaponStress = {
    `weapon_petrolcan`,
    `weapon_hazardcan`,
    `weapon_fireextinguisher`
}

Config.Intensity = {
    ["blur"] = {
        [1] = {
            min = 50,
            max = 60,
            intensity = 1500,
        },
        [2] = {
            min = 60,
            max = 70,
            intensity = 2000,
        },
        [3] = {
            min = 70,
            max = 80,
            intensity = 2500,
        },
        [4] = {
            min = 80,
            max = 90,
            intensity = 2700,
        },
        [5] = {
            min = 90,
            max = 100,
            intensity = 3000,
        },
    }
}

Config.EffectInterval = {
    [1] = {
        min = 50,
        max = 60,
        timeout = math.random(50000, 60000)
    },
    [2] = {
        min = 60,
        max = 70,
        timeout = math.random(40000, 50000)
    },
    [3] = {
        min = 70,
        max = 80,
        timeout = math.random(30000, 40000)
    },
    [4] = {
        min = 80,
        max = 90,
        timeout = math.random(20000, 30000)
    },
    [5] = {
        min = 90,
        max = 100,
        timeout = math.random(15000, 20000)
    }
}

Config.FuelBlacklist = {
	"surge",
	"iwagen",
	"voltic",
	"voltic2",
	"raiden",
	"cyclone",
	"tezeract",
	"neon",
	"omnisegt",
	"iwagen",
	"caddy",
	"caddy2",
	"caddy3",
	"airtug",
	"rcbandito",
	"imorgon",
	"dilettante",
	"khamelion",
	"wheelchair",
}
