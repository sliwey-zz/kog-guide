const itemList = [
  {
    "item_id": 1111,
    "item_name": "铁剑",
    "item_type": 1,
    "price": 150,
    "total_price": 250,
    "des1": "<p>+20物理攻击</p>"
  },
  {
    "item_id": 1112,
    "item_name": "匕首",
    "item_type": 1,
    "price": 174,
    "total_price": 290,
    "des1": "<p>+10%攻击速度 </p>"
  },
  {
    "item_id": 1113,
    "item_name": "搏击拳套",
    "item_type": 1,
    "price": 192,
    "total_price": 320,
    "des1": "<p>+8%暴击率 </p>"
  },
  {
    "item_id": 1114,
    "item_name": "吸血之镰",
    "item_type": 1,
    "price": 246,
    "total_price": 410,
    "des1": "<p>+10物理攻击<br>+8%物理吸血</p>"
  },
  {
    "item_id": 1116,
    "item_name": "雷鸣刃",
    "item_type": 1,
    "price": 270,
    "total_price": 450,
    "des1": "<p>+40物理攻击</p>"
  },
  {
    "item_id": 1117,
    "item_name": "冲能拳套",
    "item_type": 1,
    "price": 330,
    "total_price": 550,
    "des1": "<p>+15%暴击率</p> "
  },
  {
    "item_id": 1121,
    "item_name": "风暴巨剑",
    "item_type": 1,
    "price": 546,
    "total_price": 910,
    "des1": "<p>+80物理攻击</p> "
  },
  {
    "item_id": 1122,
    "item_name": "日冕",
    "item_type": 1,
    "price": 474,
    "total_price": 790,
    "des1": "<p>+40物理攻击<br>+300最大生命</p> ",
    "des2": "<p>唯一被动-残废：普通攻击有30%几率降低敌人20%移动速度，持续2秒</p>"
  },
  {
    "item_id": 1123,
    "item_name": "狂暴双刃",
    "item_type": 1,
    "price": 534,
    "total_price": 890,
    "des1": "<p>+15%攻击速度<br>+10%暴击率<br>+5%移速</p>"
  },
  {
    "item_id": 1124,
    "item_name": "凶残之力",
    "item_type": 1,
    "price": 250,
    "total_price": 1080,
    "des1": "<p>+45物理攻击<br>+10%冷却缩减</p>",
    "des2": "<p>唯一被动:+60护甲穿透</p>"
  },
  {
    "item_id": 1131,
    "item_name": "破甲弓",
    "item_type": 1,
    "price": 1260,
    "total_price": 2100,
    "des1": "<p>+80物理攻击<br>+10%冷却缩减</p>",
    "des2": "<p>唯一被动:+45%物理护甲穿透</p>"
  },
  {
    "item_id": 1126,
    "item_name": "末世",
    "item_type": 1,
    "price": 1296,
    "total_price": 2160,
    "des1": "<p>+60物理攻击<br>+30%攻击速度 +10%物理吸血</p>",
    "des2": "<p>唯一被动-破败：普通攻击附带敌人当前生命值8%的物理伤害（对野怪最多：80）</p>"
  },
  {
    "item_id": 1127,
    "item_name": "名刀·司命",
    "item_type": 1,
    "price": 1056,
    "total_price": 1760,
    "des1": "<p>+60物理攻击 +5%冷却缩减</p>",
    "des2": "<p>唯一被动-暗幕：免疫致命伤并免疫伤害、增加20%移动速度持续1秒进战/0.5秒远程，90秒冷却。</p>"
  },
  {
    "item_id": 1128,
    "item_name": "冰霜长矛",
    "item_type": 1,
    "price": 1182,
    "total_price": 1970,
    "des1": "<p>+80物理攻击<br>+600最大生命 </p>",
    "des2": "<p>唯一被动-碎冰：普通攻击会减少目标30%移动速度</p>"
  },
  {
    "item_id": 1129,
    "item_name": "速击之枪",
    "item_type": 1,
    "price": 534,
    "total_price": 890,
    "des1": "<p>+25%攻击速度</p>",
    "des2": "<p>唯一被动-精准：普通攻击附带20~34点物理伤害（随等级提升）</p>"
  },
  {
    "item_id": 11210,
    "item_name": "制裁之刃",
    "item_type": 1,
    "price": 960,
    "total_price": 1800,
    "des1": "<p>+100物理攻击<br>+10%物理吸血</p> \n",
    "des2": "<p>唯一被动-重伤：造成伤害使得目标的生命恢复效果减少50%，持续1.5秒（如果该伤害由普攻触发，则持续时间延长至3秒）</p>"
  },
  {
    "item_id": 1132,
    "item_name": "泣血之刃",
    "item_type": 1,
    "price": 1044,
    "total_price": 1740,
    "des1": "<p>+100物理攻击<br>+25%物理吸血 </p>"
  },
  {
    "item_id": 1133,
    "item_name": "无尽战刃",
    "item_type": 1,
    "price": 1284,
    "total_price": 2140,
    "des1": "<p>+100物理攻击<br>+20%暴击率</p>",
    "des2": "<p>唯一被动:+50%暴击效果</p>"
  },
  {
    "item_id": 1134,
    "item_name": "宗师之力",
    "item_type": 1,
    "price": 1506,
    "total_price": 2100,
    "des1": "<p>+60物理攻击<br>+20%暴击率<br>+400 最大法力<br>+400最大生命</p>",
    "des2": "<p>唯一被动-狂暴：普通攻击增加自身10%移动速度，持续2秒<br>唯一被动-强击：下次攻击造成额外100%物理加成的伤害<br>唯一被动-残废：普通攻击有30%几率降低敌人20%移动速度，持续2秒</p>"
  },
  {
    "item_id": 1135,
    "item_name": "闪电匕首",
    "item_type": 1,
    "price": 1104,
    "total_price": 1840,
    "des1": "<p>+30%攻击速度<br>+20%暴击率<br>+8%移速</p>",
    "des2": "<p>唯一被动-电弧：普通攻击有20%几率释放连锁闪电，对目标造成100法术伤害（该效果有0.5秒CD）</p>"
  },
  {
    "item_id": 1136,
    "item_name": "影刃",
    "item_type": 1,
    "price": 1242,
    "total_price": 2070,
    "des1": "<p>+40%攻击速度<br>+20%暴击率<br>+5%移速</p>",
    "des2": "<p>唯一被动-暴风：暴击后提升自身50%攻击速度，持续2秒</p>"
  },
  {
    "item_id": 1137,
    "item_name": "暗影战斧",
    "item_type": 1,
    "price": 1254,
    "total_price": 2090,
    "des1": "<p>+85物理攻击<br>+15%冷却缩减<br>+400最大生命</p>",
    "des2": "<p>唯一被动-残废：普通攻击有30%几率降低敌人20%移动速度，持续2秒<br>唯一被动-切割：增加(50+英雄等级*10)点护甲穿透</p>"
  },
  {
    "item_id": 1138,
    "item_name": "破军",
    "item_type": 1,
    "price": 1770,
    "total_price": 2950,
    "des1": "<p>+200物理攻击 </p>",
    "des2": "<p>唯一被动-破军：目标生命低于50%时伤害提高30%</p>"
  },
  {
    "item_id": 11311,
    "item_name": "纯净苍穹",
    "item_type": 1,
    "price": 1338,
    "total_price": 2230,
    "des1": "<p>+40%攻击速度<br>+20%暴击率</p>",
    "des2": "<p>唯一被动-精准：普通攻击附带60点物理伤害<br>\n唯一主动-驱散：90秒CD，受到的所有伤害降低50%，持续1.5秒，可以在被控制时使用。</p>"
  },
  {
    "item_id": 91040,
    "item_name": "逐日之弓",
    "item_type": 1,
    "price": 890,
    "total_price": 2100,
    "des1": "<p>物理攻击+40\n<br>攻击速度+20%\n<br>暴击+15%\n<br>移动速度+5%</p>",
    "des2": "<p>唯一主动-逐日：暂时提升自己150射程和30%移动速度，持续5秒，CD60秒（仅对远程英雄生效）</p>"
  },
  {
    "item_id": 1125,
    "item_name": "破魔刀",
    "item_type": 1,
    "price": 910,
    "total_price": 2000,
    "des1": "<p>物理攻击+100</p>",
    "des2": "<p>唯一被动-破魔：增加等同于自身物理攻击40%的法术防御，最多增加300点</p>"
  },
  {
    "item_id": 1211,
    "item_name": "咒术典籍",
    "item_type": 2,
    "price": 180,
    "total_price": 300,
    "des1": "<p>+40法术攻击</p> "
  },
  {
    "item_id": 1212,
    "item_name": "蓝宝石",
    "item_type": 2,
    "price": 132,
    "total_price": 220,
    "des1": "<p>+300最大法力</p>"
  },
  {
    "item_id": 1213,
    "item_name": "炼金护符",
    "item_type": 2,
    "price": 72,
    "total_price": 120,
    "des1": "<p>+10 每5秒回蓝</p> "
  },
  {
    "item_id": 1214,
    "item_name": "圣者法典",
    "item_type": 2,
    "price": 300,
    "total_price": 500,
    "des1": "<p>+20法术攻击<br>+8%冷却缩减</p> "
  },
  {
    "item_id": 1216,
    "item_name": "元素杖",
    "item_type": 2,
    "price": 324,
    "total_price": 540,
    "des1": "<p>+80法术攻击</p> "
  },
  {
    "item_id": 1221,
    "item_name": "大棒",
    "item_type": 2,
    "price": 492,
    "total_price": 820,
    "des1": "<p>+120法术攻击</p>"
  },
  {
    "item_id": 1229,
    "item_name": "破碎圣杯",
    "item_type": 2,
    "price": 540,
    "total_price": 900,
    "des1": "<p>+40法术攻击<br>+5%冷却缩减<br>+20 每5秒回蓝<br>+100法术防御</p>"
  },
  {
    "item_id": 1223,
    "item_name": "光辉之剑",
    "item_type": 2,
    "price": 468,
    "total_price": 730,
    "des1": "<p>+400最大生命<br>+400最大法力</p> ",
    "des2": "<p>唯一被动-咒刃：使用技能后，下一次普通攻击附加法术伤害，这个效果有2秒的冷却时间</p>"
  },
  {
    "item_id": 1224,
    "item_name": "魅影面罩",
    "item_type": 2,
    "price": 612,
    "total_price": 1020,
    "des1": "<p>+70法术攻击<br>+300最大生命</p>",
    "des2": "<p>唯一被动:+75法术穿透</p>"
  },
  {
    "item_id": 1225,
    "item_name": "进化水晶",
    "item_type": 2,
    "price": 432,
    "total_price": 720,
    "des1": "<p>+400最大法力<br>+400最大生命</p>",
    "des2": "<p>唯一被动-英勇奖赏：升级后在3秒内回复20%生命与法力值</p>"
  },
  {
    "item_id": 1222,
    "item_name": "血族之书",
    "item_type": 2,
    "price": 744,
    "total_price": 1240,
    "des1": "<p>+75法术攻击<br>+10%冷却缩减</p>",
    "des2": "<p>唯一被动:+20%法术吸血</p>"
  },
  {
    "item_id": 1227,
    "item_name": "炽热支配者",
    "item_type": 2,
    "price": 1170,
    "total_price": 1950,
    "des1": "<p>+160法术攻击<br>+600最大法力<br>+15 每5秒回蓝</p>",
    "des2": "<p>唯一被动-最大法力护盾：生命值低于30%时，获得一个护盾，吸收伤害受等级成长及法术加成</p>"
  },
  {
    "item_id": 12211,
    "item_name": "梦魇之牙",
    "item_type": 2,
    "price": 1056,
    "total_price": 2050,
    "des1": "<p>+240法术攻击<br>+5%移速</p>",
    "des2": "<p>唯一被动-重伤：造成伤害使得目标的生命恢复效果减少50%，持续1.5秒（如果该伤害由普攻触发，则持续时间延长至3秒）</p>"
  },
  {
    "item_id": 1231,
    "item_name": "虚无法杖",
    "item_type": 2,
    "price": 1266,
    "total_price": 2110,
    "des1": "<p>+180法术攻击<br>+最大生命值</p>",
    "des2": "<p>唯一被动：+45%法术穿透</p>"
  },
  {
    "item_id": 1232,
    "item_name": "博学者之怒",
    "item_type": 2,
    "price": 1380,
    "total_price": 2300,
    "des1": "<p>+240法术攻击</p>",
    "des2": "<p>唯一主动毁灭：法术强度提升35%</p>"
  },
  {
    "item_id": 1239,
    "item_name": "辉月",
    "item_type": 2,
    "price": 1194,
    "total_price": 1990,
    "des1": "<p>+160法术攻击<br>+10%冷却缩减</p>",
    "des2": "<p>唯一主动-月之守护：90秒CD，免疫所有效果，不能移动、攻击和使用技能，持续1.5秒</p>"
  },
  {
    "item_id": 1233,
    "item_name": "回响之杖",
    "item_type": 2,
    "price": 1260,
    "total_price": 2100,
    "des1": "<p>+240法术攻击 <br>+7%移速 </p>",
    "des2": "<p>唯一被动-回响：技能命中会触发小范围爆炸造成法术伤害，这个效果有5秒CD</p>"
  },
  {
    "item_id": 1234,
    "item_name": "冰霜法杖",
    "item_type": 2,
    "price": 1260,
    "total_price": 2100,
    "des1": "<p>+150法术攻击 <br>+1050最大生命</p>",
    "des2": "<p>唯一被动-结霜：英雄技能造成伤害会附带20%的减速效果，持续2秒</p>"
  },
  {
    "item_id": 1235,
    "item_name": "痛苦面具",
    "item_type": 2,
    "price": 1224,
    "total_price": 2040,
    "des1": "<p>+140法术攻击<br>+5冷却缩减<br>+500最大生命</p>",
    "des2": "<p>唯一被动-折磨：技能伤害会造成相当于目标当前生命值8%的法术伤害，这个效果有3秒CD（对野怪伤害上限：200）<br>唯一被动：+75法术穿透</p>"
  },
  {
    "item_id": 1236,
    "item_name": "巫术法杖",
    "item_type": 2,
    "price": 1272,
    "total_price": 2120,
    "des1": "<p>+120法术攻击<br>+400最大生命\n<br>+400最大法力<br>+8%移速</p>",
    "des2": "<p>唯一被动-强击：使用技能后，下一次普通攻击附加高额法术伤害，这个效果有2秒冷却时间</p>"
  },
  {
    "item_id": 1226,
    "item_name": "圣杯",
    "item_type": 2,
    "price": 1218,
    "total_price": 2030,
    "des1": "<p>+140法术攻击<br>+20%冷却缩减<br>+25回蓝<br>+140法术防御</p>",
    "des2": "<p>唯一被动-最大法力源泉：击杀助攻后回复20%法力值</p>"
  },
  {
    "item_id": 1237,
    "item_name": "时之预言",
    "item_type": 2,
    "price": 1254,
    "total_price": 2090,
    "des1": "<p>+160法术攻击<br>+600最大法力<br>+800最大生命</p>",
    "des2": "<p>唯一被动-守护：每5点法强提升1点物理和法术防御，最多提升200点。<br>唯一被动：升级后再3秒内回复20%生命值与法力值</p>"
  },
  {
    "item_id": 1238,
    "item_name": "贤者之书",
    "item_type": 2,
    "price": 1794,
    "total_price": 2990,
    "des1": "<p>+400法术攻击</p>",
    "des2": "<p>唯一被动-刻印：增加1400生命</p>"
  },
  {
    "item_id": 1240,
    "item_name": "噬神之书",
    "item_type": 2,
    "price": 1254,
    "total_price": 2090,
    "des1": "<p>+180法术攻击<br>+10%冷却缩减<br>+800最大生命</p>",
    "des2": "<p>唯一被动-刻印：增加25%法术吸血</p>"
  },
  {
    "item_id": 1311,
    "item_name": "红玛瑙",
    "item_type": 3,
    "price": 180,
    "total_price": 300,
    "des1": "<p>+300最大生命</p>"
  },
  {
    "item_id": 1312,
    "item_name": "布甲",
    "item_type": 3,
    "price": 132,
    "total_price": 220,
    "des1": "<p>+90物理防御</p>"
  },
  {
    "item_id": 1313,
    "item_name": "抗魔披风",
    "item_type": 3,
    "price": 132,
    "total_price": 220,
    "des1": "<p>+90法术防御</p>"
  },
  {
    "item_id": 1314,
    "item_name": "提神水晶",
    "item_type": 3,
    "price": 84,
    "total_price": 140,
    "des1": "<p>+30 每5秒回复</p>"
  },
  {
    "item_id": 1321,
    "item_name": "力量腰带",
    "item_type": 3,
    "price": 540,
    "total_price": 900,
    "des1": "<p>+1000最大生命</p>"
  },
  {
    "item_id": 1322,
    "item_name": "熔炼之心",
    "item_type": 3,
    "price": 540,
    "total_price": 900,
    "des1": "<p>+700最大生命</p>",
    "des2": "<p>唯一被动-献祭：每秒对身边的敌军造成60点法术伤害，每升1级增加2点伤害</p>"
  },
  {
    "item_id": 1323,
    "item_name": "神隐斗篷",
    "item_type": 3,
    "price": 612,
    "total_price": 1020,
    "des1": "<p>+120法术防御<br>+700最大生命<br>每5秒生命恢复+50</p>"
  },
  {
    "item_id": 1324,
    "item_name": "雪山圆盾",
    "item_type": 3,
    "price": 540,
    "total_price": 900,
    "des1": "<p>+10%减CD<br>+400最大法力<br>+110物理防御</p>"
  },
  {
    "item_id": 1325,
    "item_name": "守护者之铠",
    "item_type": 3,
    "price": 438,
    "total_price": 730,
    "des1": "<p>+210物理防御</p>",
    "des2": "<p>唯一被动-寒铁：受到攻击会减少攻击者30%攻击速度</p>"
  },
  {
    "item_id": 1326,
    "item_name": "近卫荣耀",
    "item_type": 3,
    "price": 1182,
    "total_price": 1510,
    "des1": "<p>+500最大生命<br>+5%移速 </p>",
    "des2": "<p>周围友军增加(30+英雄等级*2)点物理攻击和(60+英雄等级*4)点法术攻击</p>"
  },
  {
    "item_id": 1329,
    "item_name": "奔狼纹章",
    "item_type": 3,
    "price": 918,
    "total_price": 1530,
    "des1": "<p>+400最大法力<br>+100物理防御+400最大生命<br></p>",
    "des2": "<p>唯一主动-奔腾号令：60秒CD，增加周围所有友方英雄10%伤害输出和30%的移动速度，持续2秒</p>"
  },
  {
    "item_id": 1327,
    "item_name": "反伤刺甲",
    "item_type": 3,
    "price": 882,
    "total_price": 1840,
    "des1": "<p>+40物理攻击<br>+420物理防御</p>",
    "des2": "<p>唯一被动-荆棘：受到物理伤害时，会将伤害量的15%以法术伤害的形式回敬给对方（按照计算伤害减免之前的初始伤害值计算）</p>"
  },
  {
    "item_id": 1328,
    "item_name": "血魔之怒",
    "item_type": 3,
    "price": 1272,
    "total_price": 2120,
    "des1": "<p>+20物理攻击<br>+1000最大生命</p>",
    "des2": "<p>唯一被动-血怒：生命值低于30%时获得血怒，增加40点攻击与强大护盾持续8秒，效果有90秒CD</p>"
  },
  {
    "item_id": 1331,
    "item_name": "红莲斗篷",
    "item_type": 3,
    "price": 1098,
    "total_price": 1830,
    "des1": "<p>+240物理防御<br>+1200最大生命</p>",
    "des2": "<p>唯一被动-献祭：每秒对身边的敌军造成100点法术伤害，每升1级增加4点伤害</p>"
  },
  {
    "item_id": 1332,
    "item_name": "霸者重装",
    "item_type": 3,
    "price": 1422,
    "total_price": 2370,
    "des1": "<p>+2000最大生命<br>+100 每5秒回血 </p>",
    "des2": "<p>唯一被动-复苏：脱离战斗后每秒恢复2%最大生命值</p>"
  },
  {
    "item_id": 1333,
    "item_name": "不祥征兆",
    "item_type": 3,
    "price": 1308,
    "total_price": 2180,
    "des1": "<p>+270物理防御<br>+1200最大生命</p>",
    "des2": "<p>唯一被动-寒铁：受到攻击会减少攻击者30%攻击速度与15%移动速度</p>"
  },
  {
    "item_id": 1334,
    "item_name": "不死鸟之眼",
    "item_type": 3,
    "price": 1260,
    "total_price": 2100,
    "des1": "<p>每5秒生命恢复+100<br>+240法术防御<br>1200最大生命</p>",
    "des2": "<p>唯一被动-血统：受到的治疗效果提升10%，血量低于50%时，治疗效果加成会增加到30%</p>"
  },
  {
    "item_id": 1335,
    "item_name": "魔女斗篷",
    "item_type": 3,
    "price": 1272,
    "total_price": 2120,
    "des1": "<p>+360法术防御<br>+1000最大生命</p>",
    "des2": "<p>唯一被动-迷雾：获得一个吸收320-2000法术伤害的护盾（护盾效果随英雄等级成长，脱离战斗3秒后刷新）</p>"
  },
  {
    "item_id": 1336,
    "item_name": "极寒风暴",
    "item_type": 3,
    "price": 1260,
    "total_price": 2100,
    "des1": "<p>+20%减CD<br>+500最大法力<br>+360物理防御</p>",
    "des2": "<p>唯一被动-寒冰冲击：受到单次伤害超过当前生命值10%时触发寒冰冲击，对周围敌人造成伤害并降低其30%攻击和移动速度，持续2秒，这个效果有2秒内置CD</p>"
  },
  {
    "item_id": 13310,
    "item_name": "冰痕之握",
    "item_type": 3,
    "price": 1242,
    "total_price": 2020,
    "des1": "<p>+800最大生命<br>500最大法力<br>10%冷却缩减<br>200物理防御</p>",
    "des2": "<p>唯一被动-咒刃：使用技能后，下次普攻造成范围减速与物理伤害，这个效果有3秒的冷却时间</p>"
  },
  {
    "item_id": 1337,
    "item_name": "贤者的庇护",
    "item_type": 3,
    "price": 1248,
    "total_price": 2080,
    "des1": "<p>+140物理防御<br>+140法术防御</p>",
    "des2": "<p>唯一被动-复生：复活时拥有2000+英雄等级*100点生命值，这个效果有3分钟CD</p>"
  },
  {
    "item_id": 1338,
    "item_name": "暴烈之甲",
    "item_type": 3,
    "price": 1092,
    "total_price": 1820,
    "des1": "<p>+60物理攻击<br>+1000最大生命</p>",
    "des2": "<p>唯一被动-无畏：受到伤害获得1层增益，每层提供2%移动和2%伤害输出率，最高5层</p>"
  },
  {
    "item_id": 1411,
    "item_name": "神速之靴",
    "item_type": 4,
    "price": 150,
    "total_price": 250,
    "des1": "<p>唯一被动:+30移动速度</p>"
  },
  {
    "item_id": 1421,
    "item_name": "影忍之足",
    "item_type": 4,
    "price": 414,
    "total_price": 690,
    "des1": "<p>+110物理防御</p>",
    "des2": "<p>唯一被动:+60移动速度<br>唯一被动：减少15%受到普通攻击的伤害</p>"
  },
  {
    "item_id": 1422,
    "item_name": "抵抗之靴",
    "item_type": 4,
    "price": 414,
    "total_price": 690,
    "des1": "<p>+110法术防御</p>",
    "des2": "<p>唯一被动:+60移动速度<br>唯一被动：+35%韧性</p>"
  },
  {
    "item_id": 1423,
    "item_name": "冷静之靴",
    "item_type": 4,
    "price": 426,
    "total_price": 710,
    "des1": "<p>+10%减CD</p>",
    "des2": "<p>唯一被动:+60移动速度</p>"
  },
  {
    "item_id": 1424,
    "item_name": "秘法之靴",
    "item_type": 4,
    "price": 474,
    "total_price": 790,
    "des1": "<p>唯一被动:+60移动速度<br>唯一被动：+75法术穿透</p>"
  },
  {
    "item_id": 1425,
    "item_name": "急速战靴",
    "item_type": 4,
    "price": 426,
    "total_price": 710,
    "des1": "<p>+15%攻速</p>",
    "des2": "<p>唯一被动:+60移动速度</p>"
  },
  {
    "item_id": 1426,
    "item_name": "疾步之靴",
    "item_type": 4,
    "price": 378,
    "total_price": 630,
    "des1": "<p>唯一被动-神行：脱离战斗后增加60移动速度<br>唯一被动：+60移动速度</p>"
  },
  {
    "item_id": 1511,
    "item_name": "狩猎宽刃",
    "item_type": 5,
    "price": 150,
    "total_price": 250,
    "des1": "（打野刀升级后将惩戒技能替换为寒冰惩戒：寒冰惩戒可对英雄使用，造成伤害和减速效果）",
    "des2": "<p>唯一被动-打野：增加20%对野怪的伤害，击杀野怪获得经验提升20%</p>"
  },
  {
    "item_id": 1521,
    "item_name": "游击弯刀",
    "item_type": 5,
    "price": 450,
    "total_price": 750,
    "des1": "（获得寒冰惩戒效果）",
    "des2": "<p>唯一被动-打野：增加30%对野怪的伤害，击杀野怪获得经验提升30%<br>唯一被动-磨砺：击杀野怪增加自身8点法术强度，最多叠加15层</p>"
  },
  {
    "item_id": 1522,
    "item_name": "巡守利斧",
    "item_type": 5,
    "price": 450,
    "total_price": 750,
    "des1": "（获得寒冰惩戒效果）",
    "des2": "<p>唯一被动-打野：增加30%对野怪的伤害，击杀野怪获得经验提升30%<br>唯一被动-磨砺：击杀野怪增加自身70点最大生命，最多叠加15层</p>"
  },
  {
    "item_id": 1523,
    "item_name": "追击刀锋",
    "item_type": 5,
    "price": 450,
    "total_price": 750,
    "des1": "（获得寒冰惩戒效果）",
    "des2": "<p>唯一被动-打野：增加30%对野怪的伤害，击杀野怪获得经验提升30%<br>唯一被动-磨砺：击杀野怪增加自身2%攻击速度，最多叠加15层</p>"
  },
  {
    "item_id": 1531,
    "item_name": "符文大剑",
    "item_type": 5,
    "price": 894,
    "total_price": 1490,
    "des1": "<p>+100法术攻击<br>+400最大法力<br>（获得寒冰惩戒效果）</p>",
    "des2": "<p>唯一被动-咒刃：使用技能强化下一次普工<br>唯一被动-打野：增加30%对野怪的伤害，击杀野怪获得经验提升30%<br>唯一被动-磨砺：击杀野怪增加自身8点法术强度，最多叠加15层</p>"
  },
  {
    "item_id": 1532,
    "item_name": "巨人之握",
    "item_type": 5,
    "price": 900,
    "total_price": 1500,
    "des1": "<p>+800最大生命<br>（获得寒冰惩戒效果）</p>",
    "des2": "<p>唯一被动-献祭：每秒对附近敌人造成60点法术伤害<br>唯一被动-打野：增加30%对野怪的伤害，击杀野怪获得经验提升30%<br>唯一被动-磨砺：击杀野怪增加自身70点最大生命，最多叠加15层</p>"
  },
  {
    "item_id": 1533,
    "item_name": "贪婪之噬",
    "item_type": 5,
    "price": 876,
    "total_price": 1460,
    "des1": "<p>+45物理攻击<br>+12%攻速<br>（获得寒冰惩戒效果）</p>",
    "des2": "<p>唯一被动-献祭：唯一被动-打野：增加30%对野怪的伤害，击杀野怪获得经验提升30%<br>唯一被动-磨砺：击杀野怪增加自身2%攻击速度，最多叠加15层</p>"
  }
];

export default itemList;