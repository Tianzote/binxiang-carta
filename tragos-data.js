/* =========================================================
   BIN XIANG — CARTA DE TRAGOS & PICOTEO NOCTURNO
   Para cambiar precios: edita solo los valores entre comillas
   p:"$X.XXX" (copa/unidad)  h:"$X.XXX" (happy 2x)  j1:"$X.XXX" (jarra 1L)  j:"$X.XXX" (jarra 1,5L)  b:"$X.XXX" (botella de vino)
   Si un campo no aplica, déjalo vacío: ""
   Fotos: foto:"archivo.jpg" (miniatura) y foto2:"archivo.jpg" (segunda foto al tocarla, ej. la jarra).
   Los .jpg van en la misma carpeta que tragos.html.
   Los cambios se ven en GitHub Pages en 1–2 minutos.
   ========================================================= */

window.TRAGOS = {
  horaDorada: {
    es: "Hora Dorada · Lun a Jue 17:00–21:00 · 2x en piscola y sangría",
    en: "Golden Hour · Mon–Thu 5–9 PM · 2-for price on piscola & sangria",
    pt: "Hora Dourada · Seg a Qui 17h–21h · 2x em piscola e sangria",
    zh: "黄金时段 · 周一至周四 17:00–21:00 · 皮斯科可乐、桑格利亚两杯优惠价"
  },

  categorias: [
    {
      id: "clasicos",
      nombre: { es: "Clásicos", en: "Classics", pt: "Clássicos", zh: "经典鸡尾酒" },
      items: [
        { img:{t:"high",c:"#d9f2c4",g:"mint"}, foto:"mojito-clasico.jpg", foto2:"jarra-mojito.jpg", n:{es:"Mojito clásico",en:"Classic Mojito",pt:"Mojito clássico",zh:"经典莫吉托"},
          d:{es:"Ron, menta, limón, almíbar y soda",en:"Rum, mint, lime, syrup and soda",pt:"Rum, hortelã, limão, xarope e soda",zh:"朗姆酒、薄荷、青柠、糖浆、苏打水"},
          p:"$4.500", h:"", j1:"$11.900", j:"$15.900" },
        { img:{t:"high",c:"#f7a35c",g:"mint"}, foto:"mojito-mango.jpg", n:{es:"Mojito de fruta",en:"Fruit Mojito",pt:"Mojito de fruta",zh:"水果莫吉托"},
          d:{es:"Maracuyá, frutilla o mango",en:"Passion fruit, strawberry or mango",pt:"Maracujá, morango ou manga",zh:"百香果、草莓或芒果口味"},
          p:"$5.500", h:"", j:"$16.900" },
        { img:{t:"coupe",c:"#f3efc7",g:"foam"}, foto:"pisco-sour.jpg", n:{es:"Pisco Sour",en:"Pisco Sour",pt:"Pisco Sour",zh:"皮斯科酸酒"},
          d:{es:"Pisco, limón y jarabe de goma",en:"Pisco, lemon and sugar syrup",pt:"Pisco, limão e xarope",zh:"皮斯科酒、柠檬、糖浆"},
          p:"$3.500", h:"", j:"" },
        { img:{t:"high",c:"#5a2a14",g:"lime"}, foto:"piscola.jpg", n:{es:"Piscola",en:"Piscola",pt:"Piscola",zh:"皮斯科可乐"},
          d:{es:"Alto del Carmen o Mistral 35° con bebida",en:"Chilean pisco 35° with cola",pt:"Pisco chileno 35° com refrigerante",zh:"智利皮斯科酒35°配可乐"},
          p:"$5.000", h:"$8.900", j:"" },
        { img:{t:"wine",c:"#e9f6f2",g:"lime"}, n:{es:"Gin Tonic",en:"Gin & Tonic",pt:"Gin Tônica",zh:"金汤力"},
          d:{es:"Gin, tónica y limón",en:"Gin, tonic and lime",pt:"Gin, tônica e limão",zh:"金酒、汤力水、青柠"},
          p:"$5.900", h:"", j:"" },
        { img:{t:"wine",c:"#ff7a1a",g:"orange"}, foto:"aperol-spritz.jpg", n:{es:"Aperol Spritz",en:"Aperol Spritz",pt:"Aperol Spritz",zh:"阿佩罗气泡酒"},
          d:{es:"Aperol, espumante, soda y naranja",en:"Aperol, sparkling wine, soda and orange",pt:"Aperol, espumante, soda e laranja",zh:"阿佩罗、起泡酒、苏打水、橙片"},
          p:"$7.990", h:"", j:"" },
        { img:{t:"wine",c:"#8e1630",g:"orange"}, foto:"sangria.jpg", foto2:"jarra-sangria.jpg", n:{es:"Sangría",en:"Sangria",pt:"Sangria",zh:"桑格利亚水果酒"},
          d:{es:"Vino tinto, fruta fresca y naranja",en:"Red wine, fresh fruit and orange",pt:"Vinho tinto, frutas e laranja",zh:"红葡萄酒、新鲜水果、橙子"},
          p:"$5.990", h:"$9.900", j1:"$10.900", j:"$16.000" }
      ]
    },
    {
      id: "casa",
      nombre: { es: "De la casa", en: "House Specials", pt: "Da casa", zh: "招牌特调" },
      items: [
        { badge:"🐉", img:{t:"high",c:"#f2a51a",g:"lime"}, n:{es:"Tropical Dragón",en:"Tropical Dragon",pt:"Dragão Tropical",zh:"热带飞龙"},
          d:{es:"Gin, Red Bull y pulpa de maracuyá",en:"Gin, Red Bull and passion fruit",pt:"Gin, Red Bull e maracujá",zh:"金酒、红牛、百香果果泥"},
          p:"$6.500", h:"", j:"" },
        { img:{t:"high",c:"#ffb84d",g:"lime"}, foto:"pisco-bull.jpg", n:{es:"Pisco Bull",en:"Pisco Bull",pt:"Pisco Bull",zh:"皮斯科红牛"},
          d:{es:"Pisco, Red Bull y pulpa de mango",en:"Pisco, Red Bull and mango",pt:"Pisco, Red Bull e manga",zh:"皮斯科酒、红牛、芒果果泥"},
          p:"$6.500", h:"", j:"" }
      ]
    },
    {
      id: "cocteles",
      nombre: { es: "Más cócteles y destilados", en: "More Cocktails & Spirits", pt: "Mais coquetéis e destilados", zh: "更多鸡尾酒与烈酒" },
      items: [
        { img:{t:"high",c:"#5a2a14",g:"lime"}, n:{es:"Ron Cola",en:"Rum & Cola",pt:"Rum com Cola",zh:"朗姆可乐"}, d:{es:"Ron con bebida cola",en:"Rum with cola",pt:"Rum com refrigerante de cola",zh:"朗姆酒配可乐"},
          p:"$4.790", h:"", j:"" },
        { img:{t:"high",c:"#e6f2c8",g:"lime"}, n:{es:"Caipiriña",en:"Caipirinha",pt:"Caipirinha",zh:"凯匹林纳"}, d:{es:"Cachaça, limón y azúcar",en:"Cachaça, lime and sugar",pt:"Cachaça, limão e açúcar",zh:"卡莎萨、青柠、糖"},
          p:"$4.900", h:"", j:"" },
        { img:{t:"high",c:"#eef6f2",g:"lime"}, foto:"gin-con-gin.jpg", n:{es:"Gin con Gin",en:"Gin & Gin",pt:"Gin com Gin",zh:"金酒双份"},
          p:"$5.000", h:"", j:"" },
        { img:{t:"coupe",c:"#e8b04a",g:"foam"}, n:{es:"Whisky Sour",en:"Whisky Sour",pt:"Whisky Sour",zh:"威士忌酸酒"}, d:{es:"Whisky, limón, goma y clara",en:"Whisky, lemon, syrup and egg white",pt:"Whisky, limão, xarope e clara",zh:"威士忌、柠檬、糖浆、蛋清"},
          p:"$6.700", h:"", j:"" },
        { img:{t:"coupe",c:"#8a4a2a",g:"foam"}, n:{es:"Vaina",en:"Vaina",pt:"Vaina",zh:"Vaina鸡尾酒"},
          p:"$3.600", h:"", j:"" },
        { img:{t:"coupe",c:"#b8732a",g:"none"}, n:{es:"Clavo Oxidado",en:"Rusty Nail",pt:"Prego Enferrujado",zh:"生锈钉子"},
          p:"$5.200", h:"", j:"" },
        { img:{t:"coupe",c:"#c47a2c",g:"none"}, n:{es:"Amaretto",en:"Amaretto",pt:"Amaretto",zh:"杏仁酒"},
          p:"$3.990", h:"", j:"" },
        { img:{t:"coupe",c:"#c9852f",g:"none"}, n:{es:"Whisky (J. Walker)",en:"Whisky (J. Walker)",pt:"Whisky (J. Walker)",zh:"威士忌（尊尼获加）"},
          p:"$6.500", h:"", j:"" },
        { img:{t:"wine",c:"#f08a7a",g:"orange"}, n:{es:"Ramazzotti",en:"Ramazzotti",pt:"Ramazzotti",zh:"Ramazzotti"},
          p:"$7.990", h:"", j:"" }
      ]
    },
    {
      id: "cervezas",
      nombre: { es: "Cervezas", en: "Beers", pt: "Cervejas", zh: "啤酒" },
      items: [
        { img:{t:"bottle",c:"#f2d06b",g:"none"}, foto:"corona.jpg", n:{es:"Corona / Heineken 330 cc",en:"Corona / Heineken 330 ml",pt:"Corona / Heineken 330 ml",zh:"科罗娜 / 喜力 330毫升"},
          d:{es:"330 ml",en:"330 ml",pt:"330 ml",zh:"330毫升"}, p:"$3.400", h:"", j:"" },
        { img:{t:"bottle",c:"#8a5a1c",g:"none"}, foto:"royal.jpg", n:{es:"Royal 330 cc",en:"Royal 330 ml",pt:"Royal 330 ml",zh:"Royal 330毫升"},
          d:{es:"Cerveza nacional",en:"Chilean beer",pt:"Cerveja chilena",zh:"智利啤酒"}, p:"$3.400", h:"", j:"" },
        { img:{t:"bottle",c:"#8a5a1c",g:"none"}, foto:"budweiser.jpg", n:{es:"Budweiser / Austral 330 cc",en:"Budweiser / Austral 330 ml",pt:"Budweiser / Austral 330 ml",zh:"百威 / Austral 330毫升"},
          p:"$3.400", h:"", j:"" },
        { img:{t:"bottle",c:"#2e7d32",g:"none"}, n:{es:"Cristal, Royal o Heineken 1 L",en:"Cristal, Royal or Heineken 1 L",pt:"Cristal, Royal ou Heineken 1 L",zh:"Cristal、Royal 或喜力 1升"}, d:{es:"Para compartir",en:"To share",pt:"Para compartilhar",zh:"适合分享"},
          p:"$4.290", h:"", j:"" },
        { img:{t:"beer",c:"#c8551b",g:"lime"}, foto:"michelada.jpg", n:{es:"Michelada (agregado)",en:"Michelada (add-on)",pt:"Michelada (adicional)",zh:"米切拉达（加料）"},
          d:{es:"Limón, sal, merkén y salsa inglesa",en:"Lime, salt, merkén and Worcestershire",pt:"Limão, sal, merkén e molho inglês",zh:"青柠、盐、智利烟熏辣椒、伍斯特酱"}, p:"$1.500", h:"", j:"" }
      ]
    },
    {
      id: "vinos",
      nombre: { es: "Vinos", en: "Wine", pt: "Vinhos", zh: "葡萄酒" },
      items: [
        { img:{t:"wine",c:"#7d1128",g:"none"}, n:{es:"Pinto Undurraga",en:"Pinto Undurraga",pt:"Pinto Undurraga",zh:"Pinto Undurraga"}, d:{es:"Botella 700 cc",en:"700 ml bottle",pt:"Garrafa 700 ml",zh:"700毫升整瓶"},
          p:"", b:"$9.900", h:"", j:"" },
        { img:{t:"wine",c:"#7d1128",g:"none"}, n:{es:"Santa Rita 120",en:"Santa Rita 120",pt:"Santa Rita 120",zh:"Santa Rita 120"}, d:{es:"Botella 700 cc",en:"700 ml bottle",pt:"Garrafa 700 ml",zh:"700毫升整瓶"},
          p:"$3.800", b:"$9.290", h:"", j:"" },
        { img:{t:"wine",c:"#7d1128",g:"none"}, n:{es:"Santa Carolina",en:"Santa Carolina",pt:"Santa Carolina",zh:"Santa Carolina"}, d:{es:"Botella 700 cc",en:"700 ml bottle",pt:"Garrafa 700 ml",zh:"700毫升整瓶"},
          p:"$3.800", b:"$9.290", h:"", j:"" },
        { img:{t:"wine",c:"#7d1128",g:"none"}, n:{es:"Santa Emiliana",en:"Santa Emiliana",pt:"Santa Emiliana",zh:"Santa Emiliana"}, d:{es:"Botella 700 cc",en:"700 ml bottle",pt:"Garrafa 700 ml",zh:"700毫升整瓶"},
          p:"$3.800", b:"$9.290", h:"", j:"" },
        { img:{t:"wine",c:"#7d1128",g:"none"}, n:{es:"Gran Tarapacá",en:"Gran Tarapacá",pt:"Gran Tarapacá",zh:"Gran Tarapacá"}, d:{es:"Botella 700 cc",en:"700 ml bottle",pt:"Garrafa 700 ml",zh:"700毫升整瓶"},
          p:"", b:"$9.990", h:"", j:"" },
        { img:{t:"wine",c:"#7d1128",g:"none"}, n:{es:"Macul Don Luis",en:"Macul Don Luis",pt:"Macul Don Luis",zh:"Macul Don Luis"}, d:{es:"Botella 700 cc",en:"700 ml bottle",pt:"Garrafa 700 ml",zh:"700毫升整瓶"},
          p:"", b:"$12.990", h:"", j:"" },
        { img:{t:"wine",c:"#7d1128",g:"none"}, n:{es:"Casillero del Diablo",en:"Casillero del Diablo",pt:"Casillero del Diablo",zh:"红魔鬼酒窖"}, d:{es:"Botella 700 cc",en:"700 ml bottle",pt:"Garrafa 700 ml",zh:"700毫升整瓶"},
          p:"", b:"$13.490", h:"", j:"" }
      ]
    },
    {
      id: "sinalcohol",
      nombre: { es: "Sin alcohol", en: "Alcohol-free", pt: "Sem álcool", zh: "无酒精饮品" },
      items: [
        { foto:"jugo-frutilla.jpg", img:{t:"high",c:"#e8435a",g:"none"}, n:{es:"Jugo natural",en:"Fresh juice",pt:"Suco natural",zh:"鲜榨果汁"},
          d:{es:"Frutilla u otros sabores del día",en:"Strawberry or other flavors of the day",pt:"Morango ou outros sabores do dia",zh:"草莓或当日其他口味"}, p:"$3.900", h:"", j:"" },
        { foto:"jugo-mango.jpg", img:{t:"high",c:"#f6b21b",g:"none"}, n:{es:"Jugo natural (mango, maracuyá o chirimoya)",en:"Fresh juice (mango, passion fruit or cherimoya)",pt:"Suco natural (manga, maracujá ou cherimoia)",zh:"鲜榨果汁（芒果/百香果/番荔枝）"},
          p:"$4.500", h:"", j:"" },
        { foto:"wanglaoji.png", img:{t:"can",c:"#c8102e",g:"none"}, n:{es:"Wang Lao Ji",en:"Wang Lao Ji",pt:"Wang Lao Ji",zh:"王老吉"},
          d:{es:"Té de hierbas chino en lata",en:"Chinese herbal tea, canned",pt:"Chá de ervas chinês em lata",zh:"中式凉茶罐装"}, p:"$2.800", h:"", j:"" },
        { img:{t:"can",c:"#1e4fa3",g:"none"}, foto:"redbull.jpg", n:{es:"Red Bull",en:"Red Bull",pt:"Red Bull",zh:"红牛"},
          d:{es:"Clásico · 250 ml",en:"Original · 250 ml",pt:"Clássico · 250 ml",zh:"经典原味 · 250毫升"}, p:"$3.500", h:"", j:"" }
      ]
    },
    {
      id: "combos",
      nombre: { es: "Combos", en: "Combos", pt: "Combos", zh: "超值套餐" },
      items: [
        { badge:"⭐", img:{t:"pitcher",c:"#f7a35c",g:"wonton"}, foto:"jarra-sangria.jpg", n:{es:"Jarra + Wantanes",en:"Pitcher + Wontons",pt:"Jarra + Wontons",zh:"一壶酒 + 炸馄饨"},
          d:{es:"Jarra de sangría 1,5L + 10 wantanes fritos",en:"1.5L sangria pitcher + 10 fried wontons",pt:"Jarra de sangria 1,5L + 10 wontons fritos",zh:"1.5升桑格利亚一壶 + 10个炸馄饨"}, p:"$18.900", h:"", j:"" },
        { img:{t:"coupe",c:"#f3efc7",g:"foam"}, n:{es:"Dúo Sour",en:"Sour Duo",pt:"Duo Sour",zh:"双人酸酒套餐"},
          d:{es:"2 pisco sour + 5 arrollados primavera",en:"2 pisco sours + 5 spring rolls",pt:"2 pisco sours + 5 rolinhos primavera",zh:"2杯皮斯科酸酒 + 5个春卷"}, p:"$9.900", h:"", j:"" },
        { img:{t:"bucket",c:"#f2d06b",g:"none"}, foto:"corona.jpg", n:{es:"Balde Corona (6)",en:"Corona Bucket (6)",pt:"Balde Corona (6)",zh:"科罗娜啤酒桶（6瓶）"},
          d:{es:"6 Coronas bien heladas",en:"6 ice-cold Coronas",pt:"6 Coronas bem geladas",zh:"6瓶冰镇科罗娜"}, p:"$17.900", h:"", j:"" }
      ]
    }
  ]
};
