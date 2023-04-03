import { Monster } from '../interface';


export interface monsterType {
  [key: number]: Monster
}
const monster1: monsterType = {
  1: {
    hp: '55',
    img: 'm001.png',
    boss: false,
    name: '史莱姆',
    money: 100,
  },
  2: {
    hp: '125',
    img: 'm002.png',
    boss: false,
    name: '小猪',
    money: 110,
  },
  3: {
    hp: '235',
    img: 'm003.png',
    boss: false,
    name: '恶灵',
    money: 120,
  },
  4: {
    hp: '345',
    img: 'm004.png',
    boss: false,
    name: '树妖',
    money: 140,
  },
  5: {
    hp: '455',
    img: 'm005.png',
    boss: false,
    name: '黑衣人',
    money: 150,
  },
  6: {
    hp: '565',
    img: 'm006.png',
    boss: false,
    name: '忍者',
    money: 160,
  },
  "7": {
    "hp": "677",
    "img": "m007.png",
    "boss": false,
    "name": "奈亚拉托提普",
    "money": 170
  },
  "8": {
    "hp": "888",
    "img": "m008.png",
    "boss": false,
    "name": "阿撒托斯",
    "money": 200
  },
  "9": {
    "hp": "1299",
    "img": "m009.png",
    "boss": false,
    "name": "克苏鲁",
    "money": 300
  },
  "10": {
    "hp": "1511",
    "img": "m010.png",
    "boss": false,
    "name": "犹格·索托斯",
    "money": 400
  },
  "11": {
    "hp": "2123",
    "img": "m011.png",
    "boss": false,
    "name": "莎布·尼古拉丝",
    "money": 500
  },
  "12": {
    "hp": "3145",
    "img": "m012.png",
    "boss": false,
    "name": "撒托古亚",
    "money": 600
  },
  "13": {
    "hp": "4167",
    "img": "m013.png",
    "boss": false,
    "name": "伊塔库亚",
    "money": 700
  },
  "14": {
    "hp": "5189",
    "img": "m014.png",
    "boss": false,
    "name": "加塔诺托亚",
    "money": 800
  },
  "15": {
    "hp": "12221",
    "img": "m015.png",
    "boss": false,
    "name": "大衮",
    "money": 1100
  },
  "16": {
    "hp": "22245",
    "img": "m016.png",
    "boss": false,
    "name": "星之精",
    "money": 1500
  },
  "17": {
    "hp": "32278",
    "img": "m017.png",
    "boss": false,
    "name": "纳格",
    "money": 2100
  },
  "18": {
    "hp": "44311",
    "img": "m018.png",
    "boss": false,
    "name": "耶布",
    "money": 3100
  },
  "19": {
    "hp": "66334",
    "img": "m019.png",
    "boss": false,
    "name": "亚弗姆·扎",
    "money": 4100
  },
  "20": {
    "hp": "88390",
    "img": "m020.png",
    "boss": false,
    "name": "昌格纳·方庚",
    "money": 5100
  },
  "21": {
    "hp": "12434",
    "img": "m021.png",
    "boss": false,
    "name": "莎布·尼古拉丝",
    "money": 5600
  },
  "22": {
    "hp": "14490",
    "img": "m022.png",
    "boss": false,
    "name": "犹格·索托斯",
    "money": 6100
  },
  "23": {
    "hp": "16555",
    "img": "m023.png",
    "boss": false,
    "name": "奈亚拉托提普",
    "money": 7100
  },
  "24": {
    "hp": "22666",
    "img": "m024.png",
    "boss": false,
    "name": "克苏鲁",
    "money": 8100
  },
  "25": {
    "hp": "28777",
    "img": "m025.png",
    "boss": false,
    "name": "哈斯塔",
    "money": 9100
  },
  "26": {
    "hp": "36888",
    "img": "m026.png",
    "boss": false,
    "name": "诺登斯",
    "money": 11100
  },
  "27": {
    "hp": "42999",
    "img": "m027.png",
    "boss": false,
    "name": "阿撒托斯",
    "money": 12100
  },
  "28": {
    "hp": "69999",
    "img": "m028.png",
    "boss": false,
    "name": "狐鬼",
    "money": 12100
  },
  "29": {
    "hp": "99999",
    "img": "m029.png",
    "boss": false,
    "name": "厉鬼",
    "money": 12100
  },
  "30": {
    "hp": "149999",
    "img": "m030.png",
    "boss": false,
    "name": "画皮鬼",
    "money": 12100
  },
  "31": {
    "hp": "249999",
    "img": "m031.png",
    "boss": false,
    "name": "水鬼",
    "money": 12100
  },
  "32": {
    "hp": "349999",
    "img": "m032.png",
    "boss": false,
    "name": "伥鬼",
    "money": 12100
  },
  "33": {
    "hp": "449999",
    "img": "m033.png",
    "boss": false,
    "name": "产鬼",
    "money": 12100
  },
  "34": {
    "hp": "549999",
    "img": "m034.png",
    "boss": false,
    "name": "缢鬼",
    "money": 12100
  },
  "35": {
    "hp": "649999",
    "img": "m035.png",
    "boss": false,
    "name": "猫鬼",
    "money": 12100
  },
  "36": {
    "hp": "749999",
    "img": "m036.png",
    "boss": false,
    "name": "疫鬼",
    "money": 12100
  },
  "37": {
    "hp": "849999",
    "img": "m037.png",
    "boss": false,
    "name": "魍魉",
    "money": 12100
  },
  "38": {
    "hp": "949999",
    "img": "m038.png",
    "boss": false,
    "name": "敫桂英",
    "money": 12100
  },
  "39": {
    "hp": "1149999",
    "img": "m039.png",
    "boss": false,
    "name": "山魈",
    "money": 12100
  },
  "40": {
    "hp": "1349999",
    "img": "m040.png",
    "boss": false,
    "name": "判官",
    "money": 12100
  },
  "41": {
    "hp": "1649999",
    "img": "m041.png",
    "boss": false,
    "name": "牛头马面",
    "money": 12100
  },
  "42": {
    "hp": "1849999",
    "img": "m042.png",
    "boss": false,
    "name": "黑白无常",
    "money": 12100
  },
  "43": {
    "hp": "1949999",
    "img": "m043.png",
    "boss": false,
    "name": "孟婆",
    "money": 12100
  },
  "44": {
    "hp": "2249999",
    "img": "m044.png",
    "boss": false,
    "name": "刀劳鬼",
    "money": 12100
  },
  "45": {
    "hp": "2649999",
    "img": "m045.png",
    "boss": false,
    "name": "拘魂鬼",
    "money": 12100
  },
  "46": {
    "hp": "2949999",
    "img": "m046.png",
    "boss": false,
    "name": "蓬头鬼",
    "money": 12100
  },
  "47": {
    "hp": "3449999",
    "img": "m047.png",
    "boss": false,
    "name": "腹鬼",
    "money": 12100
  },
  "48": {
    "hp": "5549999",
    "img": "m048.png",
    "boss": false,
    "name": "狰狞鬼",
    "money": 12100
  },
  "49": {
    "hp": "8849999",
    "img": "m049.png",
    "boss": false,
    "name": "冤鬼",
    "money": 12100
  },
  "50": {
    "hp": "12349999",
    "img": "m050.png",
    "boss": false,
    "name": "黄父鬼",
    "money": 12100
  },
  "51": {
    "hp": "14749999",
    "img": "m051.png",
    "boss": false,
    "name": "野鬼",
    "money": 12100
  },
  "52": {
    "hp": "18849999",
    "img": "m052.png",
    "boss": false,
    "name": "厕鬼",
    "money": 12100
  },
  "53": {
    "hp": "23249999",
    "img": "m053.png",
    "boss": false,
    "name": "吊靴鬼",
    "money": 12100
  },
  "54": {
    "hp": "29949999",
    "img": "m054.png",
    "boss": false,
    "name": "无头鬼",
    "money": 12100
  },
  "55": {
    "hp": "38849999",
    "img": "m055.png",
    "boss": false,
    "name": "膏肓鬼",
    "money": 12100
  },
  "56": {
    "hp": "48849999",
    "img": "m056.png",
    "boss": false,
    "name": "毛鬼",
    "money": 12100
  },
  "57": {
    "hp": "59949999",
    "img": "m057.png",
    "boss": false,
    "name": "臭口鬼",
    "money": 12100
  },
  "58": {
    "hp": "74449999",
    "img": "m058.png",
    "boss": false,
    "name": "鬼母",
    "money": 12100
  },
  "59": {
    "hp": "88849999",
    "img": "m059.png",
    "boss": false,
    "name": "煞鬼",
    "money": 12100
  },
  "60": {
    "hp": "111149999",
    "img": "m060.png",
    "boss": false,
    "name": "蛇鬼",
    "money": 12100
  },
  "61": {
    "hp": "122249999",
    "img": "m061.png",
    "boss": false,
    "name": "夜叉",
    "money": 12100
  },
  "62": {
    "hp": "1157749999",
    "img": "m062.png",
    "boss": false,
    "name": "杨延嗣",
    "money": 12100
  },
  "63": {
    "hp": "194449999",
    "img": "m063.png",
    "boss": false,
    "name": "欲色鬼",
    "money": 12100
  },
  "64": {
    "hp": "244449999",
    "img": "m064.png",
    "boss": false,
    "name": "穷鬼",
    "money": 12100
  },
  "65": {
    "hp": "299949999",
    "img": "m065.png",
    "boss": false,
    "name": "僵尸",
    "money": 12100
  },
  "66": {
    "hp": "377749999",
    "img": "m066.png",
    "boss": false,
    "name": "九头鸟",
    "money": 12100
  },
  "67": {
    "hp": "488849999",
    "img": "m067.png",
    "boss": false,
    "name": "饿鬼",
    "money": 12100
  },
  "68": {
    "hp": "666649999",
    "img": "m068.png",
    "boss": false,
    "name": "炽燃鬼",
    "money": 12100
  },
  "69": {
    "hp": "888849999",
    "img": "m069.png",
    "boss": false,
    "name": "虚耗",
    "money": 12100
  },
  "70": {
    "hp": "999949999",
    "img": "m070.png",
    "boss": false,
    "name": "使执杖鬼",
    "money": 12100
  },
  "71": {
    "hp": "999999999",
    "img": "m071.png",
    "boss": false,
    "name": "鳖幽灵",
    "money": 12100
  },
  // 此处
  "72": {
    "hp": "999999999",
    "img": "m072.png",
    "boss": false,
    "name": "旱魃",
    "money": 12100
  },
  "73": {
    "hp": "999999999",
    "img": "m073.png",
    "boss": false,
    "name": "傒囊",
    "money": 12100
  },
  "74": {
    "hp": "999999999",
    "img": "m074.png",
    "boss": false,
    "name": "食鞋鬼",
    "money": 12100
  },
  "75": {
    "hp": "999999999",
    "img": "m075.png",
    "boss": false,
    "name": "刑天",
    "money": 12100
  },
  "76": {
    "hp": "999999999",
    "img": "m076.png",
    "boss": false,
    "name": "夜叉鬼",
    "money": 12100
  },
  "77": {
    "hp": "999999999",
    "img": "m077.png",
    "boss": false,
    "name": "大力鬼王",
    "money": 12100
  },
  "78": {
    "hp": "999999999",
    "img": "m078.png",
    "boss": false,
    "name": "笑蓬莱",
    "money": 12100
  },
  "79": {
    "hp": "999999999",
    "img": "m079.png",
    "boss": false,
    "name": "五色妖姬",
    "money": 12100
  },
  "80": {
    "hp": "999999999",
    "img": "m080.png",
    "boss": false,
    "name": "镜中花",
    "money": 12100
  },
  "81": {
    "hp": "999999999",
    "img": "m081.png",
    "boss": false,
    "name": "戏奴",
    "money": 12100
  },
  "82": {
    "hp": "999999999",
    "img": "m082.png",
    "boss": false,
    "name": "问琵琶",
    "money": 12100
  },
  "83": {
    "hp": "999999999",
    "img": "m083.png",
    "boss": false,
    "name": "靛雷龙残",
    "money": 12100
  },
  "84": {
    "hp": "999999999",
    "img": "m084.png",
    "boss": false,
    "name": "刀诛",
    "money": 12100
  },
  "85": {
    "hp": "999999999",
    "img": "m085.png",
    "boss": false,
    "name": "剑杀",
    "money": 12100
  },
  "86": {
    "hp": "999999999",
    "img": "m086.png",
    "boss": false,
    "name": "殁惑之眼",
    "money": 12100
  },
  "87": {
    "hp": "999999999",
    "img": "m087.png",
    "boss": false,
    "name": "邪魅之眼",
    "money": 12100
  },
  "88": {
    "hp": "999999999",
    "img": "m088.png",
    "boss": false,
    "name": "任沉浮",
    "money": 12100
  },
  "89": {
    "hp": "999999999",
    "img": "m089.png",
    "boss": false,
    "name": "继断离",
    "money": 12100
  },
  "90": {
    "hp": "999999999",
    "img": "m090.png",
    "boss": false,
    "name": "争不僧",
    "money": 12100
  },
  "91": {
    "hp": "999999999",
    "img": "m091.png",
    "boss": false,
    "name": "画魂",
    "money": 12100
  },
  "92": {
    "hp": "999999999",
    "img": "m092.png",
    "boss": false,
    "name": "守路者",
    "money": 12100
  },
  "93": {
    "hp": "999999999",
    "img": "m093.png",
    "boss": false,
    "name": "先知鬼座",
    "money": 12100
  },
  "94": {
    "hp": "999999999",
    "img": "m094.png",
    "boss": false,
    "name": "异度魔君",
    "money": 12100
  },
  "95": {
    "hp": "999999999",
    "img": "m095.png",
    "boss": false,
    "name": "神无道",
    "money": 12100
  },
  "96": {
    "hp": "999999999",
    "img": "m096.png",
    "boss": false,
    "name": "天荒道",
    "money": 12100
  },
  "97": {
    "hp": "999999999",
    "img": "m097.png",
    "boss": false,
    "name": "赦生道",
    "money": 12100
  },
  "98": {
    "hp": "999999999",
    "img": "m098.png",
    "boss": false,
    "name": "螣邪郎",
    "money": 12100
  },
  "99": {
    "hp": "999999999",
    "img": "m099.png",
    "boss": false,
    "name": "魔刺儿",
    "money": 12100
  },
  "100": {
    "hp": "999999999",
    "img": "m100.png",
    "boss": false,
    "name": "蟠凶",
    "money": 12100
  },
  "101": {
    "hp": "999999999",
    "img": "m101.png",
    "boss": false,
    "name": "阎屍缸",
    "money": 12100
  },
  "102": {
    "hp": "999999999",
    "img": "m102.png",
    "boss": false,
    "name": "闇薄之刃",
    "money": 12100
  },
  "103": {
    "hp": "999999999",
    "img": "m103.png",
    "boss": false,
    "name": "别见狂华",
    "money": 12100
  },
  "104": {
    "hp": "999999999",
    "img": "m104.png",
    "boss": false,
    "name": "元祸天荒",
    "money": 12100
  },
  "105": {
    "hp": "999999999",
    "img": "m105.png",
    "boss": false,
    "name": "赦生童子",
    "money": 12100
  },
  "106": {
    "hp": "999999999",
    "img": "m106.png",
    "boss": false,
    "name": "冥见",
    "money": 12100
  },
  "107": {
    "hp": "999999999",
    "img": "m107.png",
    "boss": false,
    "name": "妖闻",
    "money": 12100
  },
  "108": {
    "hp": "999999999",
    "img": "m108.png",
    "boss": false,
    "name": "邪慧",
    "money": 12100
  },
  "109": {
    "hp": "999999999",
    "img": "m109.png",
    "boss": false,
    "name": "魔识",
    "money": 12100
  },
  "110": {
    "hp": "999999999",
    "img": "m110.png",
    "boss": false,
    "name": "灵观",
    "money": 12100
  },
  "111": {
    "hp": "999999999",
    "img": "m111.png",
    "boss": false,
    "name": "鬼知",
    "money": 12100
  },
  "112": {
    "hp": "999999999",
    "img": "m112.png",
    "boss": false,
    "name": "阎魔旱魃",
    "money": 12100
  },
  "113": {
    "hp": "999999999",
    "img": "m113.png",
    "boss": false,
    "name": "补剑缺",
    "money": 12100
  },
  "114": {
    "hp": "999999999",
    "img": "m114.png",
    "boss": false,
    "name": "戒神老者",
    "money": 12100
  },
  "115": {
    "hp": "999999999",
    "img": "m115.png",
    "boss": false,
    "name": "冷醉",
    "money": 12100
  },
  "116": {
    "hp": "999999999",
    "img": "m116.png",
    "boss": false,
    "name": "玉蝉宫",
    "money": 12100
  },
  "117": {
    "hp": "999999999",
    "img": "m117.png",
    "boss": false,
    "name": "平江逸",
    "money": 12100
  },
  "118": {
    "hp": "999999999",
    "img": "m118.png",
    "boss": false,
    "name": "鬼仆",
    "money": 12100
  },
  "119": {
    "hp": "999999999",
    "img": "m119.png",
    "boss": false,
    "name": "浑屍",
    "money": 12100
  },
  "120": {
    "hp": "999999999",
    "img": "m120.png",
    "boss": false,
    "name": "地罗",
    "money": 12100
  },
  "121": {
    "hp": "999999999",
    "img": "m121.png",
    "boss": false,
    "name": "金色妖邪",
    "money": 12100
  },
  "122": {
    "hp": "999999999",
    "img": "m122.png",
    "boss": false,
    "name": "文中子",
    "money": 12100
  },
  "123": {
    "hp": "999999999",
    "img": "m123.png",
    "boss": false,
    "name": "风满袖",
    "money": 12100
  },
  "124": {
    "hp": "999999999",
    "img": "m124.png",
    "boss": false,
    "name": "西城风流子",
    "money": 12100
  },
  "125": {
    "hp": "999999999",
    "img": "m125.png",
    "boss": false,
    "name": "笑风尘",
    "money": 12100
  },
  "126": {
    "hp": "999999999",
    "img": "m126.png",
    "boss": false,
    "name": "玉世香",
    "money": 12100
  },
  "127": {
    "hp": "999999999",
    "img": "m127.png",
    "boss": false,
    "name": "伏婴师",
    "money": 12100
  },
  "128": {
    "hp": "999999999",
    "img": "m128.png",
    "boss": false,
    "name": "虎奔风",
    "money": 12100
  },
  "129": {
    "hp": "999999999",
    "img": "m129.png",
    "boss": false,
    "name": "狼狩野",
    "money": 12100
  },
  "130": {
    "hp": "999999999",
    "img": "m130.png",
    "boss": false,
    "name": "蓝暹",
    "money": 12100
  },
  "131": {
    "hp": "999999999",
    "img": "m131.png",
    "boss": false,
    "name": "青逻",
    "money": 12100
  },
  "132": {
    "hp": "999999999",
    "img": "m132.png",
    "boss": false,
    "name": "九祸",
    "money": 12100
  },
  "133": {
    "hp": "999999999",
    "img": "m133.png",
    "boss": false,
    "name": "袭灭天来",
    "money": 12100
  },
  "134": {
    "hp": "999999999",
    "img": "m134.png",
    "boss": false,
    "name": "吞佛童子",
    "money": 12100
  },
  "135": {
    "hp": "999999999",
    "img": "m135.png",
    "boss": false,
    "name": "黄泉吊命",
    "money": 12100
  },
  "136": {
    "hp": "999999999",
    "img": "m136.png",
    "boss": false,
    "name": "银鍠黥武",
    "money": 12100
  },
  "137": {
    "hp": "999999999",
    "img": "m137.png",
    "boss": false,
    "name": "月漩涡",
    "money": 12100
  },
  "138": {
    "hp": "999999999",
    "img": "m138.png",
    "boss": false,
    "name": "玉蟾宫",
    "money": 12100
  },
  "139": {
    "hp": "999999999",
    "img": "m139.png",
    "boss": false,
    "name": "朱厌剑灵",
    "money": 12100
  },
  "140": {
    "hp": "999999999",
    "img": "m140.png",
    "boss": false,
    "name": "修罗邪子",
    "money": 12100
  },
  "141": {
    "hp": "999999999",
    "img": "m141.png",
    "boss": false,
    "name": "斩颅夜叉",
    "money": 12100
  },
  "142": {
    "hp": "999999999",
    "img": "m142.png",
    "boss": false,
    "name": "摄元鬼童",
    "money": 12100
  },
  "143": {
    "hp": "999999999",
    "img": "m143.png",
    "boss": false,
    "name": "大力丸",
    "money": 12100
  },
  "144": {
    "hp": "999999999",
    "img": "m144.png",
    "boss": false,
    "name": "死海冰魔",
    "money": 12100
  },
  "145": {
    "hp": "999999999",
    "img": "m145.png",
    "boss": false,
    "name": "叶小钗",
    "money": 12100
  },
  "146": {
    "hp": "999999999",
    "img": "m146.png",
    "boss": false,
    "name": "慧八手",
    "money": 12100
  },
  "147": {
    "hp": "999999999",
    "img": "m147.png",
    "boss": false,
    "name": "鬼魅之眼",
    "money": 12100
  },
  "148": {
    "hp": "999999999",
    "img": "m148.png",
    "boss": false,
    "name": "一翦梅",
    "money": 12100
  },
  "149": {
    "hp": "999999999",
    "img": "m149.png",
    "boss": false,
    "name": "嗜生伽罗",
    "money": 12100
  },
  "150": {
    "hp": "999999999",
    "img": "m150.png",
    "boss": false,
    "name": "拜江山",
    "money": 12100
  },
  "151": {
    "hp": "999999999",
    "img": "m151.png",
    "boss": false,
    "name": "月螳勾",
    "money": 12100
  },
  "152": {
    "hp": "999999999",
    "img": "m152.png",
    "boss": false,
    "name": "残凶",
    "money": 12100
  },
  "153": {
    "hp": "999999999",
    "img": "m153.png",
    "boss": false,
    "name": "魔剑人",
    "money": 12100
  },
  "154": {
    "hp": "999999999",
    "img": "m154.png",
    "boss": false,
    "name": "金风刀魔",
    "money": 12100
  },
  "155": {
    "hp": "999999999",
    "img": "m155.png",
    "boss": false,
    "name": "夜魅摄魂香",
    "money": 12100
  },
  "156": {
    "hp": "999999999",
    "img": "m156.png",
    "boss": false,
    "name": "虫魔",
    "money": 12100
  },
  "157": {
    "hp": "999999999",
    "img": "m157.png",
    "boss": false,
    "name": "落雁孤行",
    "money": 12100
  },
  "158": {
    "hp": "999999999",
    "img": "m158.png",
    "boss": false,
    "name": "夜鴞无影",
    "money": 12100
  },
  "159": {
    "hp": "999999999",
    "img": "m159.png",
    "boss": false,
    "name": "若魑离",
    "money": 12100
  },
  "160": {
    "hp": "999999999",
    "img": "m160.png",
    "boss": false,
    "name": "落冥孤犬",
    "money": 12100
  },
  "161": {
    "hp": "999999999",
    "img": "m161.png",
    "boss": false,
    "name": "血雨落潮",
    "money": 12100
  },
  "162": {
    "hp": "999999999",
    "img": "m162.png",
    "boss": false,
    "name": "拓落孤影",
    "money": 12100
  },
  "163": {
    "hp": "999999999",
    "img": "m163.png",
    "boss": false,
    "name": "香馡蝮离",
    "money": 12100
  },
  "164": {
    "hp": "999999999",
    "img": "m164.png",
    "boss": false,
    "name": "蚨蚕子",
    "money": 12100
  },
  "165": {
    "hp": "999999999",
    "img": "m165.png",
    "boss": false,
    "name": "左门佑军",
    "money": 12100
  },
  "166": {
    "hp": "999999999",
    "img": "m166.png",
    "boss": false,
    "name": "滴血飞烟",
    "money": 12100
  },
  "167": {
    "hp": "999999999",
    "img": "m167.png",
    "boss": false,
    "name": "落日飘迹",
    "money": 12100
  },
  "168": {
    "hp": "999999999",
    "img": "m168.png",
    "boss": false,
    "name": "算天河",
    "money": 12100
  },
  "169": {
    "hp": "999999999",
    "img": "m169.png",
    "boss": false,
    "name": "断风尘",
    "money": 12100
  },
  "170": {
    "hp": "999999999",
    "img": "m170.png",
    "boss": false,
    "name": "暴风残道",
    "money": 12100
  },
  "171": {
    "hp": "999999999",
    "img": "m171.png",
    "boss": false,
    "name": "华颜无道",
    "money": 12100
  },
  "172": {
    "hp": "999999999",
    "img": "m172.png",
    "boss": false,
    "name": "晦王",
    "money": 12100
  },
  "173": {
    "hp": "999999999",
    "img": "m173.png",
    "boss": false,
    "name": "杀身老",
    "money": 12100
  },
  "174": {
    "hp": "999999999",
    "img": "m174.png",
    "boss": false,
    "name": "封骨衣",
    "money": 12100
  },
  "175": {
    "hp": "999999999",
    "img": "m175.png",
    "boss": false,
    "name": "朱闻挽月",
    "money": 12100
  },
  "176": {
    "hp": "999999999",
    "img": "m176.png",
    "boss": false,
    "name": "朱闻苍日",
    "money": 12100
  },
  "177": {
    "hp": "999999999",
    "img": "m177.png",
    "boss": false,
    "name": "银鍠朱武",
    "money": 12100
  },
  "178": {
    "hp": "999999999",
    "img": "m178.png",
    "boss": false,
    "name": "爱染嫇娘",
    "money": 12100
  },
  "179": {
    "hp": "999999999",
    "img": "m179.png",
    "boss": false,
    "name": "穷途千岁",
    "money": 12100
  },
  "180": {
    "hp": "999999999",
    "img": "m180.png",
    "boss": false,
    "name": "夜路痴鬼",
    "money": 12100
  },
  "181": {
    "hp": "999999999",
    "img": "m181.png",
    "boss": false,
    "name": "蚀魔",
    "money": 12100
  },
  "182": {
    "hp": "999999999",
    "img": "m182.png",
    "boss": false,
    "name": "赤原刀霸",
    "money": 12100
  },
  "183": {
    "hp": "999999999",
    "img": "m183.png",
    "boss": false,
    "name": "八荒神野",
    "money": 12100
  },
  "184": {
    "hp": "999999999",
    "img": "m184.png",
    "boss": false,
    "name": "烈风扬",
    "money": 12100
  },
  "185": {
    "hp": "999999999",
    "img": "m185.png",
    "boss": false,
    "name": "冰绝燎原",
    "money": 12100
  },
  "186": {
    "hp": "999999999",
    "img": "m186.png",
    "boss": false,
    "name": "焚午狂生",
    "money": 12100
  },
  "187": {
    "hp": "999999999",
    "img": "m187.png",
    "boss": false,
    "name": "葬送千秋",
    "money": 12100
  },
  "188": {
    "hp": "999999999",
    "img": "m188.png",
    "boss": false,
    "name": "挟魂刀",
    "money": 12100
  },
  "189": {
    "hp": "999999999",
    "img": "m189.png",
    "boss": false,
    "name": "默狩",
    "money": 12100
  },
  "190": {
    "hp": "999999999",
    "img": "m190.png",
    "boss": false,
    "name": "雪蛾天骄",
    "money": 12100
  },
  "191": {
    "hp": "999999999",
    "img": "m191.png",
    "boss": false,
    "name": "渡天童",
    "money": 12100
  },
  "192": {
    "hp": "999999999",
    "img": "m192.png",
    "boss": false,
    "name": "战兽天戮",
    "money": 12100
  },
  "193": {
    "hp": "999999999",
    "img": "m193.png",
    "boss": false,
    "name": "弃天帝",
    "money": 12100
  }
};

export default class monster {
  index: number; // 怪兽下标
  hp: string; // hp
  name: string; // 名字
  money: number; // 当前怪兽金币
  img: string; // 图片

  constructor(index: number) {
    this.index = index;
    this.hp = monster1[index].hp;
    this.name = monster1[index].name;
    this.money = monster1[index].money;
    this.img = monster1[index].img;
  }
  // 上一个怪物
  lastMoster() {
    if (this.index > 1) this.index = this.index - 1;
    this.setMonster()
  }
  // 下一个怪物
  nextMoster() {
    this.index = this.index + 1;
    this.setMonster()
  }
  // 设置怪物属性
  setMonster() {
    this.hp = monster1[this.index]?.hp;
    this.name = monster1[this.index]?.name;
    this.money = monster1[this.index]?.money;
    this.img = monster1[this.index]?.img;
  }
  // 减少怪兽生命
  delHp(injury: number) {
    let nHp = parseInt(this.hp) - injury;
    if (nHp < 0) nHp = 0;
    this.hp = nHp.toString();
  }
  // 满血复活
  resetHp() {
    this.hp = monster1[this.index]?.hp;
  }
  // 输出金币
  downMoney() {
    return this.money;
  }
}
