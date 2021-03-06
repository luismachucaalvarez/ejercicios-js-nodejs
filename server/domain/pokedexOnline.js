"use strict"
// pokedex de consulta online
// findIdByName(name)
// getPokemonByName(name)

var Pokedex = require("./pokedex");
var rp = require('request-promise');

var promiseResolveAsync = require("../domain/promiseResolveAsync");
var Pokemon = require('../domain/pokemon');

var PokedexOnline = function() {
  this.apiUrl = "http://pokeapi.co";
  this.pokemons = [
  {
      "hex": "001",
      "dec": "001",
      "name": "Bulbasaur"},
  {
      "hex": "002",
      "dec": "002",
      "name": "Ivysaur"},
  {
      "hex": "003",
      "dec": "003",
      "name": "Venusaur"},
  {
      "hex": "004",
      "dec": "004",
      "name": "Charmander"},
  {
      "hex": "005",
      "dec": "005",
      "name": "Charmeleon"},
  {
      "hex": "006",
      "dec": "006",
      "name": "Charizard"},
  {
      "hex": "007",
      "dec": "007",
      "name": "Squirtle"},
  {
      "hex": "008",
      "dec": "008",
      "name": "Wartortle"},
  {
      "hex": "009",
      "dec": "009",
      "name": "Blastoise"},
  {
      "hex": "00A",
      "dec": "010",
      "name": "Caterpie"},
  {
      "hex": "00B",
      "dec": "011",
      "name": "Metapod"},
  {
      "hex": "00C",
      "dec": "012",
      "name": "Butterfree"},
  {
      "hex": "00D",
      "dec": "013",
      "name": "Weedle"},
  {
      "hex": "00E",
      "dec": "014",
      "name": "Kakuna"},
  {
      "hex": "00F",
      "dec": "015",
      "name": "Beedrill"},
  {
      "hex": "010",
      "dec": "016",
      "name": "Pidgey"},
  {
      "hex": "011",
      "dec": "017",
      "name": "Pidgeotto"},
  {
      "hex": "012",
      "dec": "018",
      "name": "Pidgeot"},
  {
      "hex": "013",
      "dec": "019",
      "name": "Rattata"},
  {
      "hex": "014",
      "dec": "020",
      "name": "Raticate"},
  {
      "hex": "015",
      "dec": "021",
      "name": "Spearow"},
  {
      "hex": "016",
      "dec": "022",
      "name": "Fearow"},
  {
      "hex": "017",
      "dec": "023",
      "name": "Ekans"},
  {
      "hex": "018",
      "dec": "024",
      "name": "Arbok"},
  {
      "hex": "019",
      "dec": "025",
      "name": "Pikachu"},
  {
      "hex": "01A",
      "dec": "026",
      "name": "Raichu"},
  {
      "hex": "01B",
      "dec": "027",
      "name": "Sandshrew"},
  {
      "hex": "01C",
      "dec": "028",
      "name": "Sandslash"},
  {
      "hex": "01D",
      "dec": "029",
      "name": "Nidoran♀"},
  {
      "hex": "01E",
      "dec": "030",
      "name": "Nidorina"},
  {
      "hex": "01F",
      "dec": "031",
      "name": "Nidoqueen"},
  {
      "hex": "020",
      "dec": "032",
      "name": "Nidoran♂"},
  {
      "hex": "021",
      "dec": "033",
      "name": "Nidorino"},
  {
      "hex": "022",
      "dec": "034",
      "name": "Nidoking"},
  {
      "hex": "023",
      "dec": "035",
      "name": "Clefairy"},
  {
      "hex": "024",
      "dec": "036",
      "name": "Clefable"},
  {
      "hex": "025",
      "dec": "037",
      "name": "Vulpix"},
  {
      "hex": "026",
      "dec": "038",
      "name": "Ninetales"},
  {
      "hex": "027",
      "dec": "039",
      "name": "Jigglypuff"},
  {
      "hex": "028",
      "dec": "040",
      "name": "Wigglytuff"},
  {
      "hex": "029",
      "dec": "041",
      "name": "Zubat"},
  {
      "hex": "02A",
      "dec": "042",
      "name": "Golbat"},
  {
      "hex": "02B",
      "dec": "043",
      "name": "Oddish"},
  {
      "hex": "02C",
      "dec": "044",
      "name": "Gloom"},
  {
      "hex": "02D",
      "dec": "045",
      "name": "Vileplume"},
  {
      "hex": "02E",
      "dec": "046",
      "name": "Paras"},
  {
      "hex": "02F",
      "dec": "047",
      "name": "Parasect"},
  {
      "hex": "030",
      "dec": "048",
      "name": "Venonat"},
  {
      "hex": "031",
      "dec": "049",
      "name": "Venomoth"},
  {
      "hex": "032",
      "dec": "050",
      "name": "Diglett"},
  {
      "hex": "033",
      "dec": "051",
      "name": "Dugtrio"},
  {
      "hex": "034",
      "dec": "052",
      "name": "Meowth"},
  {
      "hex": "035",
      "dec": "053",
      "name": "Persian"},
  {
      "hex": "036",
      "dec": "054",
      "name": "Psyduck"},
  {
      "hex": "037",
      "dec": "055",
      "name": "Golduck"},
  {
      "hex": "038",
      "dec": "056",
      "name": "Mankey"},
  {
      "hex": "039",
      "dec": "057",
      "name": "Primeape"},
  {
      "hex": "03A",
      "dec": "058",
      "name": "Growlithe"},
  {
      "hex": "03B",
      "dec": "059",
      "name": "Arcanine"},
  {
      "hex": "03C",
      "dec": "060",
      "name": "Poliwag"},
  {
      "hex": "03D",
      "dec": "061",
      "name": "Poliwhirl"},
  {
      "hex": "03E",
      "dec": "062",
      "name": "Poliwrath"},
  {
      "hex": "03F",
      "dec": "063",
      "name": "Abra"},
  {
      "hex": "040",
      "dec": "064",
      "name": "Kadabra"},
  {
      "hex": "041",
      "dec": "065",
      "name": "Alakazam"},
  {
      "hex": "042",
      "dec": "066",
      "name": "Machop"},
  {
      "hex": "043",
      "dec": "067",
      "name": "Machoke"},
  {
      "hex": "044",
      "dec": "068",
      "name": "Machamp"},
  {
      "hex": "045",
      "dec": "069",
      "name": "Bellsprout"},
  {
      "hex": "046",
      "dec": "070",
      "name": "Weepinbell"},
  {
      "hex": "047",
      "dec": "071",
      "name": "Victreebel"},
  {
      "hex": "048",
      "dec": "072",
      "name": "Tentacool"},
  {
      "hex": "049",
      "dec": "073",
      "name": "Tentacruel"},
  {
      "hex": "04A",
      "dec": "074",
      "name": "Geodude"},
  {
      "hex": "04B",
      "dec": "075",
      "name": "Graveler"},
  {
      "hex": "04C",
      "dec": "076",
      "name": "Golem"},
  {
      "hex": "04D",
      "dec": "077",
      "name": "Ponyta"},
  {
      "hex": "04E",
      "dec": "078",
      "name": "Rapidash"},
  {
      "hex": "04F",
      "dec": "079",
      "name": "Slowpoke"},
  {
      "hex": "050",
      "dec": "080",
      "name": "Slowbro"},
  {
      "hex": "051",
      "dec": "081",
      "name": "Magnemite"},
  {
      "hex": "052",
      "dec": "082",
      "name": "Magneton"},
  {
      "hex": "053",
      "dec": "083",
      "name": "Farfetch'd"},
  {
      "hex": "054",
      "dec": "084",
      "name": "Doduo"},
  {
      "hex": "055",
      "dec": "085",
      "name": "Dodrio"},
  {
      "hex": "056",
      "dec": "086",
      "name": "Seel"},
  {
      "hex": "057",
      "dec": "087",
      "name": "Dewgong"},
  {
      "hex": "058",
      "dec": "088",
      "name": "Grimer"},
  {
      "hex": "059",
      "dec": "089",
      "name": "Muk"},
  {
      "hex": "05A",
      "dec": "090",
      "name": "Shellder"},
  {
      "hex": "05B",
      "dec": "091",
      "name": "Cloyster"},
  {
      "hex": "05C",
      "dec": "092",
      "name": "Gastly"},
  {
      "hex": "05D",
      "dec": "093",
      "name": "Haunter"},
  {
      "hex": "05E",
      "dec": "094",
      "name": "Gengar"},
  {
      "hex": "05F",
      "dec": "095",
      "name": "Onix"},
  {
      "hex": "060",
      "dec": "096",
      "name": "Drowzee"},
  {
      "hex": "061",
      "dec": "097",
      "name": "Hypno"},
  {
      "hex": "062",
      "dec": "098",
      "name": "Krabby"},
  {
      "hex": "063",
      "dec": "099",
      "name": "Kingler"},
  {
      "hex": "064",
      "dec": "100",
      "name": "Voltorb"},
  {
      "hex": "065",
      "dec": "101",
      "name": "Electrode"},
  {
      "hex": "066",
      "dec": "102",
      "name": "Exeggcute"},
  {
      "hex": "067",
      "dec": "103",
      "name": "Exeggutor"},
  {
      "hex": "068",
      "dec": "104",
      "name": "Cubone"},
  {
      "hex": "069",
      "dec": "105",
      "name": "Marowak"},
  {
      "hex": "06A",
      "dec": "106",
      "name": "Hitmonlee"},
  {
      "hex": "06B",
      "dec": "107",
      "name": "Hitmonchan"},
  {
      "hex": "06C",
      "dec": "108",
      "name": "Lickitung"},
  {
      "hex": "06D",
      "dec": "109",
      "name": "Koffing"},
  {
      "hex": "06E",
      "dec": "110",
      "name": "Weezing"},
  {
      "hex": "06F",
      "dec": "111",
      "name": "Rhyhorn"},
  {
      "hex": "070",
      "dec": "112",
      "name": "Rhydon"},
  {
      "hex": "071",
      "dec": "113",
      "name": "Chansey"},
  {
      "hex": "072",
      "dec": "114",
      "name": "Tangela"},
  {
      "hex": "073",
      "dec": "115",
      "name": "Kangaskhan"},
  {
      "hex": "074",
      "dec": "116",
      "name": "Horsea"},
  {
      "hex": "075",
      "dec": "117",
      "name": "Seadra"},
  {
      "hex": "076",
      "dec": "118",
      "name": "Goldeen"},
  {
      "hex": "077",
      "dec": "119",
      "name": "Seaking"},
  {
      "hex": "078",
      "dec": "120",
      "name": "Staryu"},
  {
      "hex": "079",
      "dec": "121",
      "name": "Starmie"},
  {
      "hex": "07A",
      "dec": "122",
      "name": "Mr. Mime"},
  {
      "hex": "07B",
      "dec": "123",
      "name": "Scyther"},
  {
      "hex": "07C",
      "dec": "124",
      "name": "Jynx"},
  {
      "hex": "07D",
      "dec": "125",
      "name": "Electabuzz"},
  {
      "hex": "07E",
      "dec": "126",
      "name": "Magmar"},
  {
      "hex": "07F",
      "dec": "127",
      "name": "Pinsir"},
  {
      "hex": "080",
      "dec": "128",
      "name": "Tauros"},
  {
      "hex": "081",
      "dec": "129",
      "name": "Magikarp"},
  {
      "hex": "082",
      "dec": "130",
      "name": "Gyarados"},
  {
      "hex": "083",
      "dec": "131",
      "name": "Lapras"},
  {
      "hex": "084",
      "dec": "132",
      "name": "Ditto"},
  {
      "hex": "085",
      "dec": "133",
      "name": "Eevee"},
  {
      "hex": "086",
      "dec": "134",
      "name": "Vaporeon"},
  {
      "hex": "087",
      "dec": "135",
      "name": "Jolteon"},
  {
      "hex": "088",
      "dec": "136",
      "name": "Flareon"},
  {
      "hex": "089",
      "dec": "137",
      "name": "Porygon"},
  {
      "hex": "08A",
      "dec": "138",
      "name": "Omanyte"},
  {
      "hex": "08B",
      "dec": "139",
      "name": "Omastar"},
  {
      "hex": "08C",
      "dec": "140",
      "name": "Kabuto"},
  {
      "hex": "08D",
      "dec": "141",
      "name": "Kabutops"},
  {
      "hex": "08E",
      "dec": "142",
      "name": "Aerodactyl"},
  {
      "hex": "08F",
      "dec": "143",
      "name": "Snorlax"},
  {
      "hex": "090",
      "dec": "144",
      "name": "Articuno"},
  {
      "hex": "091",
      "dec": "145",
      "name": "Zapdos"},
  {
      "hex": "092",
      "dec": "146",
      "name": "Moltres"},
  {
      "hex": "093",
      "dec": "147",
      "name": "Dratini"},
  {
      "hex": "094",
      "dec": "148",
      "name": "Dragonair"},
  {
      "hex": "095",
      "dec": "149",
      "name": "Dragonite"},
  {
      "hex": "096",
      "dec": "150",
      "name": "Mewtwo"},
  {
      "hex": "097",
      "dec": "151",
      "name": "Mew"},
  {
      "hex": "098",
      "dec": "152",
      "name": "Chikorita"},
  {
      "hex": "099",
      "dec": "153",
      "name": "Bayleef"},
  {
      "hex": "09A",
      "dec": "154",
      "name": "Meganium"},
  {
      "hex": "09B",
      "dec": "155",
      "name": "Cyndaquil"},
  {
      "hex": "09C",
      "dec": "156",
      "name": "Quilava"},
  {
      "hex": "09D",
      "dec": "157",
      "name": "Typhlosion"},
  {
      "hex": "09E",
      "dec": "158",
      "name": "Totodile"},
  {
      "hex": "09F",
      "dec": "159",
      "name": "Croconaw"},
  {
      "hex": "0A0",
      "dec": "160",
      "name": "Feraligatr"},
  {
      "hex": "0A1",
      "dec": "161",
      "name": "Sentret"},
  {
      "hex": "0A2",
      "dec": "162",
      "name": "Furret"},
  {
      "hex": "0A3",
      "dec": "163",
      "name": "Hoothoot"},
  {
      "hex": "0A4",
      "dec": "164",
      "name": "Noctowl"},
  {
      "hex": "0A5",
      "dec": "165",
      "name": "Ledyba"},
  {
      "hex": "0A6",
      "dec": "166",
      "name": "Ledian"},
  {
      "hex": "0A7",
      "dec": "167",
      "name": "Spinarak"},
  {
      "hex": "0A8",
      "dec": "168",
      "name": "Ariados"},
  {
      "hex": "0A9",
      "dec": "169",
      "name": "Crobat"},
  {
      "hex": "0AA",
      "dec": "170",
      "name": "Chinchou"},
  {
      "hex": "0AB",
      "dec": "171",
      "name": "Lanturn"},
  {
      "hex": "0AC",
      "dec": "172",
      "name": "Pichu"},
  {
      "hex": "0AD",
      "dec": "173",
      "name": "Cleffa"},
  {
      "hex": "0AE",
      "dec": "174",
      "name": "Igglybuff"},
  {
      "hex": "0AF",
      "dec": "175",
      "name": "Togepi"},
  {
      "hex": "0B0",
      "dec": "176",
      "name": "Togetic"},
  {
      "hex": "0B1",
      "dec": "177",
      "name": "Natu"},
  {
      "hex": "0B2",
      "dec": "178",
      "name": "Xatu"},
  {
      "hex": "0B3",
      "dec": "179",
      "name": "Mareep"},
  {
      "hex": "0B4",
      "dec": "180",
      "name": "Flaaffy"},
  {
      "hex": "0B5",
      "dec": "181",
      "name": "Ampharos"},
  {
      "hex": "0B6",
      "dec": "182",
      "name": "Bellossom"},
  {
      "hex": "0B7",
      "dec": "183",
      "name": "Marill"},
  {
      "hex": "0B8",
      "dec": "184",
      "name": "Azumarill"},
  {
      "hex": "0B9",
      "dec": "185",
      "name": "Sudowoodo"},
  {
      "hex": "0BA",
      "dec": "186",
      "name": "Politoed"},
  {
      "hex": "0BB",
      "dec": "187",
      "name": "Hoppip"},
  {
      "hex": "0BC",
      "dec": "188",
      "name": "Skiploom"},
  {
      "hex": "0BD",
      "dec": "189",
      "name": "Jumpluff"},
  {
      "hex": "0BE",
      "dec": "190",
      "name": "Aipom"},
  {
      "hex": "0BF",
      "dec": "191",
      "name": "Sunkern"},
  {
      "hex": "0C0",
      "dec": "192",
      "name": "Sunflora"},
  {
      "hex": "0C1",
      "dec": "193",
      "name": "Yanma"},
  {
      "hex": "0C2",
      "dec": "194",
      "name": "Wooper"},
  {
      "hex": "0C3",
      "dec": "195",
      "name": "Quagsire"},
  {
      "hex": "0C4",
      "dec": "196",
      "name": "Espeon"},
  {
      "hex": "0C5",
      "dec": "197",
      "name": "Umbreon"},
  {
      "hex": "0C6",
      "dec": "198",
      "name": "Murkrow"},
  {
      "hex": "0C7",
      "dec": "199",
      "name": "Slowking"},
  {
      "hex": "0C8",
      "dec": "200",
      "name": "Misdreavus"},
  {
      "hex": "0C9",
      "dec": "201",
      "name": "Unown"},
  {
      "hex": "0CA",
      "dec": "202",
      "name": "Wobbuffet"},
  {
      "hex": "0CB",
      "dec": "203",
      "name": "Girafarig"},
  {
      "hex": "0CC",
      "dec": "204",
      "name": "Pineco"},
  {
      "hex": "0CD",
      "dec": "205",
      "name": "Forretress"},
  {
      "hex": "0CE",
      "dec": "206",
      "name": "Dunsparce"},
  {
      "hex": "0CF",
      "dec": "207",
      "name": "Gligar"},
  {
      "hex": "0D0",
      "dec": "208",
      "name": "Steelix"},
  {
      "hex": "0D1",
      "dec": "209",
      "name": "Snubbull"},
  {
      "hex": "0D2",
      "dec": "210",
      "name": "Granbull"},
  {
      "hex": "0D3",
      "dec": "211",
      "name": "Qwilfish"},
  {
      "hex": "0D4",
      "dec": "212",
      "name": "Scizor"},
  {
      "hex": "0D5",
      "dec": "213",
      "name": "Shuckle"},
  {
      "hex": "0D6",
      "dec": "214",
      "name": "Heracross"},
  {
      "hex": "0D7",
      "dec": "215",
      "name": "Sneasel"},
  {
      "hex": "0D8",
      "dec": "216",
      "name": "Teddiursa"},
  {
      "hex": "0D9",
      "dec": "217",
      "name": "Ursaring"},
  {
      "hex": "0DA",
      "dec": "218",
      "name": "Slugma"},
  {
      "hex": "0DB",
      "dec": "219",
      "name": "Magcargo"},
  {
      "hex": "0DC",
      "dec": "220",
      "name": "Swinub"},
  {
      "hex": "0DD",
      "dec": "221",
      "name": "Piloswine"},
  {
      "hex": "0DE",
      "dec": "222",
      "name": "Corsola"},
  {
      "hex": "0DF",
      "dec": "223",
      "name": "Remoraid"},
  {
      "hex": "0E0",
      "dec": "224",
      "name": "Octillery"},
  {
      "hex": "0E1",
      "dec": "225",
      "name": "Delibird"},
  {
      "hex": "0E2",
      "dec": "226",
      "name": "Mantine"},
  {
      "hex": "0E3",
      "dec": "227",
      "name": "Skarmory"},
  {
      "hex": "0E4",
      "dec": "228",
      "name": "Houndour"},
  {
      "hex": "0E5",
      "dec": "229",
      "name": "Houndoom"},
  {
      "hex": "0E6",
      "dec": "230",
      "name": "Kingdra"},
  {
      "hex": "0E7",
      "dec": "231",
      "name": "Phanpy"},
  {
      "hex": "0E8",
      "dec": "232",
      "name": "Donphan"},
  {
      "hex": "0E9",
      "dec": "233",
      "name": "Porygon2"},
  {
      "hex": "0EA",
      "dec": "234",
      "name": "Stantler"},
  {
      "hex": "0EB",
      "dec": "235",
      "name": "Smeargle"},
  {
      "hex": "0EC",
      "dec": "236",
      "name": "Tyrogue"},
  {
      "hex": "0ED",
      "dec": "237",
      "name": "Hitmontop"},
  {
      "hex": "0EE",
      "dec": "238",
      "name": "Smoochum"},
  {
      "hex": "0EF",
      "dec": "239",
      "name": "Elekid"},
  {
      "hex": "0F0",
      "dec": "240",
      "name": "Magby"},
  {
      "hex": "0F1",
      "dec": "241",
      "name": "Miltank"},
  {
      "hex": "0F2",
      "dec": "242",
      "name": "Blissey"},
  {
      "hex": "0F3",
      "dec": "243",
      "name": "Raikou"},
  {
      "hex": "0F4",
      "dec": "244",
      "name": "Entei"},
  {
      "hex": "0F5",
      "dec": "245",
      "name": "Suicune"},
  {
      "hex": "0F6",
      "dec": "246",
      "name": "Larvitar"},
  {
      "hex": "0F7",
      "dec": "247",
      "name": "Pupitar"},
  {
      "hex": "0F8",
      "dec": "248",
      "name": "Tyranitar"},
  {
      "hex": "0F9",
      "dec": "249",
      "name": "Lugia"},
  {
      "hex": "0FA",
      "dec": "250",
      "name": "Ho-Oh"},
  {
      "hex": "0FB",
      "dec": "251",
      "name": "Celebi"},
  {
      "hex": "0FC",
      "dec": "252",
      "name": "Treecko"},
  {
      "hex": "0FD",
      "dec": "253",
      "name": "Grovyle"},
  {
      "hex": "0FE",
      "dec": "254",
      "name": "Sceptile"},
  {
      "hex": "0FF",
      "dec": "255",
      "name": "Torchic"},
  {
      "hex": "100",
      "dec": "256",
      "name": "Combusken"},
  {
      "hex": "101",
      "dec": "257",
      "name": "Blaziken"},
  {
      "hex": "102",
      "dec": "258",
      "name": "Mudkip"},
  {
      "hex": "103",
      "dec": "259",
      "name": "Marshtomp"},
  {
      "hex": "104",
      "dec": "260",
      "name": "Swampert"},
  {
      "hex": "105",
      "dec": "261",
      "name": "Poochyena"},
  {
      "hex": "106",
      "dec": "262",
      "name": "Mightyena"},
  {
      "hex": "107",
      "dec": "263",
      "name": "Zigzagoon"},
  {
      "hex": "108",
      "dec": "264",
      "name": "Linoone"},
  {
      "hex": "109",
      "dec": "265",
      "name": "Wurmple"},
  {
      "hex": "10A",
      "dec": "266",
      "name": "Silcoon"},
  {
      "hex": "10B",
      "dec": "267",
      "name": "Beautifly"},
  {
      "hex": "10C",
      "dec": "268",
      "name": "Cascoon"},
  {
      "hex": "10D",
      "dec": "269",
      "name": "Dustox"},
  {
      "hex": "10E",
      "dec": "270",
      "name": "Lotad"},
  {
      "hex": "10F",
      "dec": "271",
      "name": "Lombre"},
  {
      "hex": "110",
      "dec": "272",
      "name": "Ludicolo"},
  {
      "hex": "111",
      "dec": "273",
      "name": "Seedot"},
  {
      "hex": "112",
      "dec": "274",
      "name": "Nuzleaf"},
  {
      "hex": "113",
      "dec": "275",
      "name": "Shiftry"},
  {
      "hex": "114",
      "dec": "276",
      "name": "Taillow"},
  {
      "hex": "115",
      "dec": "277",
      "name": "Swellow"},
  {
      "hex": "116",
      "dec": "278",
      "name": "Wingull"},
  {
      "hex": "117",
      "dec": "279",
      "name": "Pelipper"},
  {
      "hex": "118",
      "dec": "280",
      "name": "Ralts"},
  {
      "hex": "119",
      "dec": "281",
      "name": "Kirlia"},
  {
      "hex": "11A",
      "dec": "282",
      "name": "Gardevoir"},
  {
      "hex": "11B",
      "dec": "283",
      "name": "Surskit"},
  {
      "hex": "11C",
      "dec": "284",
      "name": "Masquerain"},
  {
      "hex": "11D",
      "dec": "285",
      "name": "Shroomish"},
  {
      "hex": "11E",
      "dec": "286",
      "name": "Breloom"},
  {
      "hex": "11F",
      "dec": "287",
      "name": "Slakoth"},
  {
      "hex": "120",
      "dec": "288",
      "name": "Vigoroth"},
  {
      "hex": "121",
      "dec": "289",
      "name": "Slaking"},
  {
      "hex": "122",
      "dec": "290",
      "name": "Nincada"},
  {
      "hex": "123",
      "dec": "291",
      "name": "Ninjask"},
  {
      "hex": "124",
      "dec": "292",
      "name": "Shedinja"},
  {
      "hex": "125",
      "dec": "293",
      "name": "Whismur"},
  {
      "hex": "126",
      "dec": "294",
      "name": "Loudred"},
  {
      "hex": "127",
      "dec": "295",
      "name": "Exploud"},
  {
      "hex": "128",
      "dec": "296",
      "name": "Makuhita"},
  {
      "hex": "129",
      "dec": "297",
      "name": "Hariyama"},
  {
      "hex": "12A",
      "dec": "298",
      "name": "Azurill"},
  {
      "hex": "12B",
      "dec": "299",
      "name": "Nosepass"},
  {
      "hex": "12C",
      "dec": "300",
      "name": "Skitty"},
  {
      "hex": "12D",
      "dec": "301",
      "name": "Delcatty"},
  {
      "hex": "12E",
      "dec": "302",
      "name": "Sableye"},
  {
      "hex": "12F",
      "dec": "303",
      "name": "Mawile"},
  {
      "hex": "130",
      "dec": "304",
      "name": "Aron"},
  {
      "hex": "131",
      "dec": "305",
      "name": "Lairon"},
  {
      "hex": "132",
      "dec": "306",
      "name": "Aggron"},
  {
      "hex": "133",
      "dec": "307",
      "name": "Meditite"},
  {
      "hex": "134",
      "dec": "308",
      "name": "Medicham"},
  {
      "hex": "135",
      "dec": "309",
      "name": "Electrike"},
  {
      "hex": "136",
      "dec": "310",
      "name": "Manectric"},
  {
      "hex": "137",
      "dec": "311",
      "name": "Plusle"},
  {
      "hex": "138",
      "dec": "312",
      "name": "Minun"},
  {
      "hex": "139",
      "dec": "313",
      "name": "Volbeat"},
  {
      "hex": "13A",
      "dec": "314",
      "name": "Illumise"},
  {
      "hex": "13B",
      "dec": "315",
      "name": "Roselia"},
  {
      "hex": "13C",
      "dec": "316",
      "name": "Gulpin"},
  {
      "hex": "13D",
      "dec": "317",
      "name": "Swalot"},
  {
      "hex": "13E",
      "dec": "318",
      "name": "Carvanha"},
  {
      "hex": "13F",
      "dec": "319",
      "name": "Sharpedo"},
  {
      "hex": "140",
      "dec": "320",
      "name": "Wailmer"},
  {
      "hex": "141",
      "dec": "321",
      "name": "Wailord"},
  {
      "hex": "142",
      "dec": "322",
      "name": "Numel"},
  {
      "hex": "143",
      "dec": "323",
      "name": "Camerupt"},
  {
      "hex": "144",
      "dec": "324",
      "name": "Torkoal"},
  {
      "hex": "145",
      "dec": "325",
      "name": "Spoink"},
  {
      "hex": "146",
      "dec": "326",
      "name": "Grumpig"},
  {
      "hex": "147",
      "dec": "327",
      "name": "Spinda"},
  {
      "hex": "148",
      "dec": "328",
      "name": "Trapinch"},
  {
      "hex": "149",
      "dec": "329",
      "name": "Vibrava"},
  {
      "hex": "14A",
      "dec": "330",
      "name": "Flygon"},
  {
      "hex": "14B",
      "dec": "331",
      "name": "Cacnea"},
  {
      "hex": "14C",
      "dec": "332",
      "name": "Cacturne"},
  {
      "hex": "14D",
      "dec": "333",
      "name": "Swablu"},
  {
      "hex": "14E",
      "dec": "334",
      "name": "Altaria"},
  {
      "hex": "14F",
      "dec": "335",
      "name": "Zangoose"},
  {
      "hex": "150",
      "dec": "336",
      "name": "Seviper"},
  {
      "hex": "151",
      "dec": "337",
      "name": "Lunatone"},
  {
      "hex": "152",
      "dec": "338",
      "name": "Solrock"},
  {
      "hex": "153",
      "dec": "339",
      "name": "Barboach"},
  {
      "hex": "154",
      "dec": "340",
      "name": "Whiscash"},
  {
      "hex": "155",
      "dec": "341",
      "name": "Corphish"},
  {
      "hex": "156",
      "dec": "342",
      "name": "Crawdaunt"},
  {
      "hex": "157",
      "dec": "343",
      "name": "Baltoy"},
  {
      "hex": "158",
      "dec": "344",
      "name": "Claydol"},
  {
      "hex": "159",
      "dec": "345",
      "name": "Lileep"},
  {
      "hex": "15A",
      "dec": "346",
      "name": "Cradily"},
  {
      "hex": "15B",
      "dec": "347",
      "name": "Anorith"},
  {
      "hex": "15C",
      "dec": "348",
      "name": "Armaldo"},
  {
      "hex": "15D",
      "dec": "349",
      "name": "Feebas"},
  {
      "hex": "15E",
      "dec": "350",
      "name": "Milotic"},
  {
      "hex": "15F",
      "dec": "351",
      "name": "Castform"},
  {
      "hex": "160",
      "dec": "352",
      "name": "Kecleon"},
  {
      "hex": "161",
      "dec": "353",
      "name": "Shuppet"},
  {
      "hex": "162",
      "dec": "354",
      "name": "Banette"},
  {
      "hex": "163",
      "dec": "355",
      "name": "Duskull"},
  {
      "hex": "164",
      "dec": "356",
      "name": "Dusclops"},
  {
      "hex": "165",
      "dec": "357",
      "name": "Tropius"},
  {
      "hex": "166",
      "dec": "358",
      "name": "Chimecho"},
  {
      "hex": "167",
      "dec": "359",
      "name": "Absol"},
  {
      "hex": "168",
      "dec": "360",
      "name": "Wynaut"},
  {
      "hex": "169",
      "dec": "361",
      "name": "Snorunt"},
  {
      "hex": "16A",
      "dec": "362",
      "name": "Glalie"},
  {
      "hex": "16B",
      "dec": "363",
      "name": "Spheal"},
  {
      "hex": "16C",
      "dec": "364",
      "name": "Sealeo"},
  {
      "hex": "16D",
      "dec": "365",
      "name": "Walrein"},
  {
      "hex": "16E",
      "dec": "366",
      "name": "Clamperl"},
  {
      "hex": "16F",
      "dec": "367",
      "name": "Huntail"},
  {
      "hex": "170",
      "dec": "368",
      "name": "Gorebyss"},
  {
      "hex": "171",
      "dec": "369",
      "name": "Relicanth"},
  {
      "hex": "172",
      "dec": "370",
      "name": "Luvdisc"},
  {
      "hex": "173",
      "dec": "371",
      "name": "Bagon"},
  {
      "hex": "174",
      "dec": "372",
      "name": "Shelgon"},
  {
      "hex": "175",
      "dec": "373",
      "name": "Salamence"},
  {
      "hex": "176",
      "dec": "374",
      "name": "Beldum"},
  {
      "hex": "177",
      "dec": "375",
      "name": "Metang"},
  {
      "hex": "178",
      "dec": "376",
      "name": "Metagross"},
  {
      "hex": "179",
      "dec": "377",
      "name": "Regirock"},
  {
      "hex": "17A",
      "dec": "378",
      "name": "Regice"},
  {
      "hex": "17B",
      "dec": "379",
      "name": "Registeel"},
  {
      "hex": "17C",
      "dec": "380",
      "name": "Latias"},
  {
      "hex": "17D",
      "dec": "381",
      "name": "Latios"},
  {
      "hex": "17E",
      "dec": "382",
      "name": "Kyogre"},
  {
      "hex": "17F",
      "dec": "383",
      "name": "Groudon"},
  {
      "hex": "180",
      "dec": "384",
      "name": "Rayquaza"},
  {
      "hex": "181",
      "dec": "385",
      "name": "Jirachi"},
  {
      "hex": "182",
      "dec": "386",
      "name": "Deoxys"},
  {
      "hex": "183",
      "dec": "387",
      "name": "Turtwig"},
  {
      "hex": "184",
      "dec": "388",
      "name": "Grotle"},
  {
      "hex": "185",
      "dec": "389",
      "name": "Torterra"},
  {
      "hex": "186",
      "dec": "390",
      "name": "Chimchar"},
  {
      "hex": "187",
      "dec": "391",
      "name": "Monferno"},
  {
      "hex": "188",
      "dec": "392",
      "name": "Infernape"},
  {
      "hex": "189",
      "dec": "393",
      "name": "Piplup"},
  {
      "hex": "18A",
      "dec": "394",
      "name": "Prinplup"},
  {
      "hex": "18B",
      "dec": "395",
      "name": "Empoleon"},
  {
      "hex": "18C",
      "dec": "396",
      "name": "Starly"},
  {
      "hex": "18D",
      "dec": "397",
      "name": "Staravia"},
  {
      "hex": "18E",
      "dec": "398",
      "name": "Staraptor"},
  {
      "hex": "18F",
      "dec": "399",
      "name": "Bidoof"},
  {
      "hex": "190",
      "dec": "400",
      "name": "Bibarel"},
  {
      "hex": "191",
      "dec": "401",
      "name": "Kricketot"},
  {
      "hex": "192",
      "dec": "402",
      "name": "Kricketune"},
  {
      "hex": "193",
      "dec": "403",
      "name": "Shinx"},
  {
      "hex": "194",
      "dec": "404",
      "name": "Luxio"},
  {
      "hex": "195",
      "dec": "405",
      "name": "Luxray"},
  {
      "hex": "196",
      "dec": "406",
      "name": "Budew"},
  {
      "hex": "197",
      "dec": "407",
      "name": "Roserade"},
  {
      "hex": "198",
      "dec": "408",
      "name": "Cranidos"},
  {
      "hex": "199",
      "dec": "409",
      "name": "Rampardos"},
  {
      "hex": "19A",
      "dec": "410",
      "name": "Shieldon"},
  {
      "hex": "19B",
      "dec": "411",
      "name": "Bastiodon"},
  {
      "hex": "19C",
      "dec": "412",
      "name": "Burmy"},
  {
      "hex": "19D",
      "dec": "413",
      "name": "Wormadam"},
  {
      "hex": "19E",
      "dec": "414",
      "name": "Mothim"},
  {
      "hex": "19F",
      "dec": "415",
      "name": "Combee"},
  {
      "hex": "1A0",
      "dec": "416",
      "name": "Vespiquen"},
  {
      "hex": "1A1",
      "dec": "417",
      "name": "Pachirisu"},
  {
      "hex": "1A2",
      "dec": "418",
      "name": "Buizel"},
  {
      "hex": "1A3",
      "dec": "419",
      "name": "Floatzel"},
  {
      "hex": "1A4",
      "dec": "420",
      "name": "Cherubi"},
  {
      "hex": "1A5",
      "dec": "421",
      "name": "Cherrim"},
  {
      "hex": "1A6",
      "dec": "422",
      "name": "Shellos"},
  {
      "hex": "1A7",
      "dec": "423",
      "name": "Gastrodon"},
  {
      "hex": "1A8",
      "dec": "424",
      "name": "Ambipom"},
  {
      "hex": "1A9",
      "dec": "425",
      "name": "Drifloon"},
  {
      "hex": "1AA",
      "dec": "426",
      "name": "Drifblim"},
  {
      "hex": "1AB",
      "dec": "427",
      "name": "Buneary"},
  {
      "hex": "1AC",
      "dec": "428",
      "name": "Lopunny"},
  {
      "hex": "1AD",
      "dec": "429",
      "name": "Mismagius"},
  {
      "hex": "1AE",
      "dec": "430",
      "name": "Honchkrow"},
  {
      "hex": "1AF",
      "dec": "431",
      "name": "Glameow"},
  {
      "hex": "1B0",
      "dec": "432",
      "name": "Purugly"},
  {
      "hex": "1B1",
      "dec": "433",
      "name": "Chingling"},
  {
      "hex": "1B2",
      "dec": "434",
      "name": "Stunky"},
  {
      "hex": "1B3",
      "dec": "435",
      "name": "Skuntank"},
  {
      "hex": "1B4",
      "dec": "436",
      "name": "Bronzor"},
  {
      "hex": "1B5",
      "dec": "437",
      "name": "Bronzong"},
  {
      "hex": "1B6",
      "dec": "438",
      "name": "Bonsly"},
  {
      "hex": "1B7",
      "dec": "439",
      "name": "Mime Jr."},
  {
      "hex": "1B8",
      "dec": "440",
      "name": "Happiny"},
  {
      "hex": "1B9",
      "dec": "441",
      "name": "Chatot"},
  {
      "hex": "1BA",
      "dec": "442",
      "name": "Spiritomb"},
  {
      "hex": "1BB",
      "dec": "443",
      "name": "Gible"},
  {
      "hex": "1BC",
      "dec": "444",
      "name": "Gabite"},
  {
      "hex": "1BD",
      "dec": "445",
      "name": "Garchomp"},
  {
      "hex": "1BE",
      "dec": "446",
      "name": "Munchlax"},
  {
      "hex": "1BF",
      "dec": "447",
      "name": "Riolu"},
  {
      "hex": "1C0",
      "dec": "448",
      "name": "Lucario"},
  {
      "hex": "1C1",
      "dec": "449",
      "name": "Hippopotas"},
  {
      "hex": "1C2",
      "dec": "450",
      "name": "Hippowdon"},
  {
      "hex": "1C3",
      "dec": "451",
      "name": "Skorupi"},
  {
      "hex": "1C4",
      "dec": "452",
      "name": "Drapion"},
  {
      "hex": "1C5",
      "dec": "453",
      "name": "Croagunk"},
  {
      "hex": "1C6",
      "dec": "454",
      "name": "Toxicroak"},
  {
      "hex": "1C7",
      "dec": "455",
      "name": "Carnivine"},
  {
      "hex": "1C8",
      "dec": "456",
      "name": "Finneon"},
  {
      "hex": "1C9",
      "dec": "457",
      "name": "Lumineon"},
  {
      "hex": "1CA",
      "dec": "458",
      "name": "Mantyke"},
  {
      "hex": "1CB",
      "dec": "459",
      "name": "Snover"},
  {
      "hex": "1CC",
      "dec": "460",
      "name": "Abomasnow"},
  {
      "hex": "1CD",
      "dec": "461",
      "name": "Weavile"},
  {
      "hex": "1CE",
      "dec": "462",
      "name": "Magnezone"},
  {
      "hex": "1CF",
      "dec": "463",
      "name": "Lickilicky"},
  {
      "hex": "1D0",
      "dec": "464",
      "name": "Rhyperior"},
  {
      "hex": "1D1",
      "dec": "465",
      "name": "Tangrowth"},
  {
      "hex": "1D2",
      "dec": "466",
      "name": "Electivire"},
  {
      "hex": "1D3",
      "dec": "467",
      "name": "Magmortar"},
  {
      "hex": "1D4",
      "dec": "468",
      "name": "Togekiss"},
  {
      "hex": "1D5",
      "dec": "469",
      "name": "Yanmega"},
  {
      "hex": "1D6",
      "dec": "470",
      "name": "Leafeon"},
  {
      "hex": "1D7",
      "dec": "471",
      "name": "Glaceon"},
  {
      "hex": "1D8",
      "dec": "472",
      "name": "Gliscor"},
  {
      "hex": "1D9",
      "dec": "473",
      "name": "Mamoswine"},
  {
      "hex": "1DA",
      "dec": "474",
      "name": "Porygon-Z"},
  {
      "hex": "1DB",
      "dec": "475",
      "name": "Gallade"},
  {
      "hex": "1DC",
      "dec": "476",
      "name": "Probopass"},
  {
      "hex": "1DD",
      "dec": "477",
      "name": "Dusknoir"},
  {
      "hex": "1DE",
      "dec": "478",
      "name": "Froslass"},
  {
      "hex": "1DF",
      "dec": "479",
      "name": "Rotom"},
  {
      "hex": "1E0",
      "dec": "480",
      "name": "Uxie"},
  {
      "hex": "1E1",
      "dec": "481",
      "name": "Mesprit"},
  {
      "hex": "1E2",
      "dec": "482",
      "name": "Azelf"},
  {
      "hex": "1E3",
      "dec": "483",
      "name": "Dialga"},
  {
      "hex": "1E4",
      "dec": "484",
      "name": "Palkia"},
  {
      "hex": "1E5",
      "dec": "485",
      "name": "Heatran"},
  {
      "hex": "1E6",
      "dec": "486",
      "name": "Regigigas"},
  {
      "hex": "1E7",
      "dec": "487",
      "name": "Giratina"},
  {
      "hex": "1E8",
      "dec": "488",
      "name": "Cresselia"},
  {
      "hex": "1E9",
      "dec": "489",
      "name": "Phione"},
  {
      "hex": "1EA",
      "dec": "490",
      "name": "Manaphy"},
  {
      "hex": "1EB",
      "dec": "491",
      "name": "Darkrai"},
  {
      "hex": "1EC",
      "dec": "492",
      "name": "Shaymin"},
  {
      "hex": "1ED",
      "dec": "493",
      "name": "Arceus"},
  {
      "hex": "1EE",
      "dec": "494",
      "name": "Victini"},
  {
      "hex": "1EF",
      "dec": "495",
      "name": "Snivy"},
  {
      "hex": "1F0",
      "dec": "496",
      "name": "Servine"},
  {
      "hex": "1F1",
      "dec": "497",
      "name": "Serperior"},
  {
      "hex": "1F2",
      "dec": "498",
      "name": "Tepig"},
  {
      "hex": "1F3",
      "dec": "499",
      "name": "Pignite"},
  {
      "hex": "1F4",
      "dec": "500",
      "name": "Emboar"},
  {
      "hex": "1F5",
      "dec": "501",
      "name": "Oshawott"},
  {
      "hex": "1F6",
      "dec": "502",
      "name": "Dewott"},
  {
      "hex": "1F7",
      "dec": "503",
      "name": "Samurott"},
  {
      "hex": "1F8",
      "dec": "504",
      "name": "Patrat"},
  {
      "hex": "1F9",
      "dec": "505",
      "name": "Watchog"},
  {
      "hex": "1FA",
      "dec": "506",
      "name": "Lillipup"},
  {
      "hex": "1FB",
      "dec": "507",
      "name": "Herdier"},
  {
      "hex": "1FC",
      "dec": "508",
      "name": "Stoutland"},
  {
      "hex": "1FD",
      "dec": "509",
      "name": "Purrloin"},
  {
      "hex": "1FE",
      "dec": "510",
      "name": "Liepard"},
  {
      "hex": "1FF",
      "dec": "511",
      "name": "Pansage"},
  {
      "hex": "200",
      "dec": "512",
      "name": "Simisage"},
  {
      "hex": "201",
      "dec": "513",
      "name": "Pansear"},
  {
      "hex": "202",
      "dec": "514",
      "name": "Simisear"},
  {
      "hex": "203",
      "dec": "515",
      "name": "Panpour"},
  {
      "hex": "204",
      "dec": "516",
      "name": "Simipour"},
  {
      "hex": "205",
      "dec": "517",
      "name": "Munna"},
  {
      "hex": "206",
      "dec": "518",
      "name": "Musharna"},
  {
      "hex": "207",
      "dec": "519",
      "name": "Pidove"},
  {
      "hex": "208",
      "dec": "520",
      "name": "Tranquill"},
  {
      "hex": "209",
      "dec": "521",
      "name": "Unfezant"},
  {
      "hex": "20A",
      "dec": "522",
      "name": "Blitzle"},
  {
      "hex": "20B",
      "dec": "523",
      "name": "Zebstrika"},
  {
      "hex": "20C",
      "dec": "524",
      "name": "Roggenrola"},
  {
      "hex": "20D",
      "dec": "525",
      "name": "Boldore"},
  {
      "hex": "20E",
      "dec": "526",
      "name": "Gigalith"},
  {
      "hex": "20F",
      "dec": "527",
      "name": "Woobat"},
  {
      "hex": "210",
      "dec": "528",
      "name": "Swoobat"},
  {
      "hex": "211",
      "dec": "529",
      "name": "Drilbur"},
  {
      "hex": "212",
      "dec": "530",
      "name": "Excadrill"},
  {
      "hex": "213",
      "dec": "531",
      "name": "Audino"},
  {
      "hex": "214",
      "dec": "532",
      "name": "Timburr"},
  {
      "hex": "215",
      "dec": "533",
      "name": "Gurdurr"},
  {
      "hex": "216",
      "dec": "534",
      "name": "Conkeldurr"},
  {
      "hex": "217",
      "dec": "535",
      "name": "Tympole"},
  {
      "hex": "218",
      "dec": "536",
      "name": "Palpitoad"},
  {
      "hex": "219",
      "dec": "537",
      "name": "Seismitoad"},
  {
      "hex": "21A",
      "dec": "538",
      "name": "Throh"},
  {
      "hex": "21B",
      "dec": "539",
      "name": "Sawk"},
  {
      "hex": "21C",
      "dec": "540",
      "name": "Sewaddle"},
  {
      "hex": "21D",
      "dec": "541",
      "name": "Swadloon"},
  {
      "hex": "21E",
      "dec": "542",
      "name": "Leavanny"},
  {
      "hex": "21F",
      "dec": "543",
      "name": "Venipede"},
  {
      "hex": "220",
      "dec": "544",
      "name": "Whirlipede"},
  {
      "hex": "221",
      "dec": "545",
      "name": "Scolipede"},
  {
      "hex": "222",
      "dec": "546",
      "name": "Cottonee"},
  {
      "hex": "223",
      "dec": "547",
      "name": "Whimsicott"},
  {
      "hex": "224",
      "dec": "548",
      "name": "Petilil"},
  {
      "hex": "225",
      "dec": "549",
      "name": "Lilligant"},
  {
      "hex": "226",
      "dec": "550",
      "name": "Basculin"},
  {
      "hex": "227",
      "dec": "551",
      "name": "Sandile"},
  {
      "hex": "228",
      "dec": "552",
      "name": "Krokorok"},
  {
      "hex": "229",
      "dec": "553",
      "name": "Krookodile"},
  {
      "hex": "22A",
      "dec": "554",
      "name": "Darumaka"},
  {
      "hex": "22B",
      "dec": "555",
      "name": "Darmanitan"},
  {
      "hex": "22C",
      "dec": "556",
      "name": "Maractus"},
  {
      "hex": "22D",
      "dec": "557",
      "name": "Dwebble"},
  {
      "hex": "22E",
      "dec": "558",
      "name": "Crustle"},
  {
      "hex": "22F",
      "dec": "559",
      "name": "Scraggy"},
  {
      "hex": "230",
      "dec": "560",
      "name": "Scrafty"},
  {
      "hex": "231",
      "dec": "561",
      "name": "Sigilyph"},
  {
      "hex": "232",
      "dec": "562",
      "name": "Yamask"},
  {
      "hex": "233",
      "dec": "563",
      "name": "Cofagrigus"},
  {
      "hex": "234",
      "dec": "564",
      "name": "Tirtouga"},
  {
      "hex": "235",
      "dec": "565",
      "name": "Carracosta"},
  {
      "hex": "236",
      "dec": "566",
      "name": "Archen"},
  {
      "hex": "237",
      "dec": "567",
      "name": "Archeops"},
  {
      "hex": "238",
      "dec": "568",
      "name": "Trubbish"},
  {
      "hex": "239",
      "dec": "569",
      "name": "Garbodor"},
  {
      "hex": "23A",
      "dec": "570",
      "name": "Zorua"},
  {
      "hex": "23B",
      "dec": "571",
      "name": "Zoroark"},
  {
      "hex": "23C",
      "dec": "572",
      "name": "Minccino"},
  {
      "hex": "23D",
      "dec": "573",
      "name": "Cinccino"},
  {
      "hex": "23E",
      "dec": "574",
      "name": "Gothita"},
  {
      "hex": "23F",
      "dec": "575",
      "name": "Gothorita"},
  {
      "hex": "240",
      "dec": "576",
      "name": "Gothitelle"},
  {
      "hex": "241",
      "dec": "577",
      "name": "Solosis"},
  {
      "hex": "242",
      "dec": "578",
      "name": "Duosion"},
  {
      "hex": "243",
      "dec": "579",
      "name": "Reuniclus"},
  {
      "hex": "244",
      "dec": "580",
      "name": "Ducklett"},
  {
      "hex": "245",
      "dec": "581",
      "name": "Swanna"},
  {
      "hex": "246",
      "dec": "582",
      "name": "Vanillite"},
  {
      "hex": "247",
      "dec": "583",
      "name": "Vanillish"},
  {
      "hex": "248",
      "dec": "584",
      "name": "Vanilluxe"},
  {
      "hex": "249",
      "dec": "585",
      "name": "Deerling"},
  {
      "hex": "24A",
      "dec": "586",
      "name": "Sawsbuck"},
  {
      "hex": "24B",
      "dec": "587",
      "name": "Emolga"},
  {
      "hex": "24C",
      "dec": "588",
      "name": "Karrablast"},
  {
      "hex": "24D",
      "dec": "589",
      "name": "Escavalier"},
  {
      "hex": "24E",
      "dec": "590",
      "name": "Foongus"},
  {
      "hex": "24F",
      "dec": "591",
      "name": "Amoonguss"},
  {
      "hex": "250",
      "dec": "592",
      "name": "Frillish"},
  {
      "hex": "251",
      "dec": "593",
      "name": "Jellicent"},
  {
      "hex": "252",
      "dec": "594",
      "name": "Alomomola"},
  {
      "hex": "253",
      "dec": "595",
      "name": "Joltik"},
  {
      "hex": "254",
      "dec": "596",
      "name": "Galvantula"},
  {
      "hex": "255",
      "dec": "597",
      "name": "Ferroseed"},
  {
      "hex": "256",
      "dec": "598",
      "name": "Ferrothorn"},
  {
      "hex": "257",
      "dec": "599",
      "name": "Klink"},
  {
      "hex": "258",
      "dec": "600",
      "name": "Klang"},
  {
      "hex": "259",
      "dec": "601",
      "name": "Klinklang"},
  {
      "hex": "25A",
      "dec": "602",
      "name": "Tynamo"},
  {
      "hex": "25B",
      "dec": "603",
      "name": "Eelektrik"},
  {
      "hex": "25C",
      "dec": "604",
      "name": "Eelektross"},
  {
      "hex": "25D",
      "dec": "605",
      "name": "Elgyem"},
  {
      "hex": "25E",
      "dec": "606",
      "name": "Beheeyem"},
  {
      "hex": "25F",
      "dec": "607",
      "name": "Litwick"},
  {
      "hex": "260",
      "dec": "608",
      "name": "Lampent"},
  {
      "hex": "261",
      "dec": "609",
      "name": "Chandelure"},
  {
      "hex": "262",
      "dec": "610",
      "name": "Axew"},
  {
      "hex": "263",
      "dec": "611",
      "name": "Fraxure"},
  {
      "hex": "264",
      "dec": "612",
      "name": "Haxorus"},
  {
      "hex": "265",
      "dec": "613",
      "name": "Cubchoo"},
  {
      "hex": "266",
      "dec": "614",
      "name": "Beartic"},
  {
      "hex": "267",
      "dec": "615",
      "name": "Cryogonal"},
  {
      "hex": "268",
      "dec": "616",
      "name": "Shelmet"},
  {
      "hex": "269",
      "dec": "617",
      "name": "Accelgor"},
  {
      "hex": "26A",
      "dec": "618",
      "name": "Stunfisk"},
  {
      "hex": "26B",
      "dec": "619",
      "name": "Mienfoo"},
  {
      "hex": "26C",
      "dec": "620",
      "name": "Mienshao"},
  {
      "hex": "26D",
      "dec": "621",
      "name": "Druddigon"},
  {
      "hex": "26E",
      "dec": "622",
      "name": "Golett"},
  {
      "hex": "26F",
      "dec": "623",
      "name": "Golurk"},
  {
      "hex": "270",
      "dec": "624",
      "name": "Pawniard"},
  {
      "hex": "271",
      "dec": "625",
      "name": "Bisharp"},
  {
      "hex": "272",
      "dec": "626",
      "name": "Bouffalant"},
  {
      "hex": "273",
      "dec": "627",
      "name": "Rufflet"},
  {
      "hex": "274",
      "dec": "628",
      "name": "Braviary"},
  {
      "hex": "275",
      "dec": "629",
      "name": "Vullaby"},
  {
      "hex": "276",
      "dec": "630",
      "name": "Mandibuzz"},
  {
      "hex": "277",
      "dec": "631",
      "name": "Heatmor"},
  {
      "hex": "278",
      "dec": "632",
      "name": "Durant"},
  {
      "hex": "279",
      "dec": "633",
      "name": "Deino"},
  {
      "hex": "27A",
      "dec": "634",
      "name": "Zweilous"},
  {
      "hex": "27B",
      "dec": "635",
      "name": "Hydreigon"},
  {
      "hex": "27C",
      "dec": "636",
      "name": "Larvesta"},
  {
      "hex": "27D",
      "dec": "637",
      "name": "Volcarona"},
  {
      "hex": "27E",
      "dec": "638",
      "name": "Cobalion"},
  {
      "hex": "27F",
      "dec": "639",
      "name": "Terrakion"},
  {
      "hex": "280",
      "dec": "640",
      "name": "Virizion"},
  {
      "hex": "281",
      "dec": "641",
      "name": "Tornadus"},
  {
      "hex": "282",
      "dec": "642",
      "name": "Thundurus"},
  {
      "hex": "283",
      "dec": "643",
      "name": "Reshiram"},
  {
      "hex": "284",
      "dec": "644",
      "name": "Zekrom"},
  {
      "hex": "285",
      "dec": "645",
      "name": "Landorus"},
  {
      "hex": "286",
      "dec": "646",
      "name": "Kyurem"},
  {
      "hex": "287",
      "dec": "647",
      "name": "Keldeo"},
  {
      "hex": "288",
      "dec": "648",
      "name": "Meloetta"},
  {
      "hex": "289",
      "dec": "649",
      "name": "Genesect"},
  {
      "hex": "28A",
      "dec": "650",
      "name": "Egg"},
  {
      "hex": "28B",
      "dec": "651",
      "name": "Manaphy Egg"
  }];
};

//Para heredar el prototipo de la clase abstracta Pokedex
PokedexOnline.prototype = Object.create(Pokedex.prototype);

//Busca el Id del pokemon dentro del array de la clase
PokedexOnline.prototype.findIdByName = function(name) {
  if (name === null) return null;
  var pokemon = this.pokemons.filter(function(pokemon) {
    return pokemon.name.toUpperCase() === name.toUpperCase();
  })[0];

  return (pokemon != null)
  ? parseInt(pokemon.dec)
  : null;
};

// Función que permite buscar por el ID del pokemon, los datos en la api
PokedexOnline.prototype.getPokemonByName = function (pokemonName) {
  var pokemonId = this.findIdByName(pokemonName);
  var pokemonPromise = rp.get(this.apiUrl + "/api/v2/pokemon/" + pokemonId)
  .then(function(poke) {
    var poke = new Pokemon(JSON.parse(poke));
    return poke;
  })
  .catch(function(error) { //recibe el error del rp, en este caso no lo usamos
    throw new Error("No se puede encontrar el pokemon " + pokemonName);
  });

  return pokemonPromise;
};

module.exports = PokedexOnline;
