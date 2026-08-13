/* ===================================================================
   BIN XIANG — Datos de carta cuatrilingüe (ES / EN / PT / ZH)
   Generado a partir de la carta PDF real (mayo 2026).
   Para actualizar precios o platos: edita solo este archivo.
   =================================================================== */

const UI = {
  es: { code:"ES", flag:"ES", storyTitle:"23 años de tradición", story:"Desde hace más de dos décadas, la misma familia cocina recetas chinas auténticas en Antonio Varas 67, Providencia. Hoy la segunda generación moderniza el servicio sin tocar la receta.", reset:"← Cambiar idioma", searchPh:"Buscar un plato...", allergyNote:"Precios sujetos a cambio sin previo aviso. Imágenes referenciales.", starLabel:"Especialidad" },
  en: { code:"EN", flag:"EN", storyTitle:"23 years of tradition", story:"For more than two decades, the same family has cooked authentic Chinese recipes at Antonio Varas 67, Providencia. Today the second generation modernizes the service without touching the recipe.", reset:"← Change language", searchPh:"Search a dish...", allergyNote:"Prices subject to change without notice. Photos for reference only.", starLabel:"Chef's pick" },
  pt: { code:"PT", flag:"PT", storyTitle:"23 anos de tradição", story:"Há mais de duas décadas, a mesma família prepara receitas chinesas autênticas na Antonio Varas 67, Providencia. Hoje a segunda geração moderniza o atendimento sem mexer na receita.", reset:"← Mudar idioma", searchPh:"Buscar um prato...", allergyNote:"Preços sujeitos a alteração sem aviso prévio. Imagens meramente ilustrativas.", starLabel:"Especialidade" },
  zh: { code:"中", flag:"中", storyTitle:"23年传承", story:"二十多年来，同一个家庭一直在Providencia的Antonio Varas 67号用心烹制正宗中餐。如今第二代在不改变祖传配方的基础上，让服务更现代化。", reset:"← 切换语言", searchPh:"搜索菜品...", allergyNote:"价格如有变动，恕不另行通知。图片仅供参考。", starLabel:"招牌菜" }
};

// n = name {es,en,pt,zh} | d = description (optional) | p = price | img = photo (optional) | star = destacado | veg = vegetariano
const MENU = [

{ id:"grupos", name:{es:"Menús para Grupos",en:"Group Combos",pt:"Combos para Grupos",zh:"多人套餐"}, items:[
  { p:"$28.000", n:{es:"Combo 2 Personas A",en:"Combo for 2 – A",pt:"Combo para 2 – A",zh:"2人套餐 A"},
    d:{es:"1 Wantán frito, 1 Chapsui de pollo, 1 Carne mongoliana, 2 Arroz chaufán.",en:"1 Fried wonton, 1 Chicken chop suey, 1 Mongolian beef, 2 Fried rice.",pt:"1 Wantan frito, 1 Chapsui de frango, 1 Carne mongoliana, 2 Arroz frito.",zh:"炸云吞1份、鸡肉杂碎1份、蒙古牛肉1份、炒饭2份。"} },
  { p:"$28.000", n:{es:"Combo 2 Personas B",en:"Combo for 2 – B",pt:"Combo para 2 – B",zh:"2人套餐 B"},
    d:{es:"1 Wantán frito, 1 Chapsui de carne, 1 Costillar cantonés, 2 Arroz chaufán.",en:"1 Fried wonton, 1 Beef chop suey, 1 Cantonese ribs, 2 Fried rice.",pt:"1 Wantan frito, 1 Chapsui de carne, 1 Costelinha cantonesa, 2 Arroz frito.",zh:"炸云吞1份、牛肉杂碎1份、广式排骨1份、炒饭2份。"} },
  { p:"$39.500", n:{es:"Combo 3 Personas",en:"Combo for 3",pt:"Combo para 3",zh:"3人套餐"},
    d:{es:"1 Wantán frito, 1 Pollo fuyón, 1 Carne mongoliana, 1 Chapsui de pollo, 3 Arroz chaufán.",en:"1 Fried wonton, 1 Chicken egg foo young, 1 Mongolian beef, 1 Chicken chop suey, 3 Fried rice.",pt:"1 Wantan frito, 1 Omelete de frango, 1 Carne mongoliana, 1 Chapsui de frango, 3 Arroz frito.",zh:"炸云吞1份、鸡肉煎蛋1份、蒙古牛肉1份、鸡肉杂碎1份、炒饭3份。"} },
  { p:"$58.000", n:{es:"Combo 4 Personas",en:"Combo for 4",pt:"Combo para 4",zh:"4人套餐"},
    d:{es:"1 Wantán frito, 1 Arrollado primavera, 1 Carne mongoliana, 1 Pollo chitén, 1 Pollo fuyón, 1 Costillar cantonés, 4 Arroz chaufán.",en:"1 Fried wonton, 1 Spring roll, 1 Mongolian beef, 1 Almond diced chicken, 1 Chicken egg foo young, 1 Cantonese ribs, 4 Fried rice.",pt:"1 Wantan frito, 1 Rolinho primavera, 1 Carne mongoliana, 1 Frango com amêndoas, 1 Omelete de frango, 1 Costelinha cantonesa, 4 Arroz frito.",zh:"炸云吞1份、春卷1份、蒙古牛肉1份、杏仁鸡丁1份、鸡肉煎蛋1份、广式排骨1份、炒饭4份。"} },
  { p:"$69.900", n:{es:"Combo 5 Personas",en:"Combo for 5",pt:"Combo para 5",zh:"5人套餐"},
    d:{es:"1 Wantán frito, 1 Arrollado primavera, 1 Carne mongoliana, 1 Chapsui de pollo, 1 Pollo fuyón, 1 Costillar cantonés, 1 Arrollado de pescado, 5 Arroz chaufán.",en:"1 Fried wonton, 1 Spring roll, 1 Mongolian beef, 1 Chicken chop suey, 1 Chicken egg foo young, 1 Cantonese ribs, 1 Fish roll, 5 Fried rice.",pt:"1 Wantan frito, 1 Rolinho primavera, 1 Carne mongoliana, 1 Chapsui de frango, 1 Omelete de frango, 1 Costelinha cantonesa, 1 Rolinho de peixe, 5 Arroz frito.",zh:"炸云吞1份、春卷1份、蒙古牛肉1份、鸡肉杂碎1份、鸡肉煎蛋1份、广式排骨1份、鱼卷1份、炒饭5份。"} },
  { p:"$89.000", n:{es:"Combo 6 Personas",en:"Combo for 6",pt:"Combo para 6",zh:"6人套餐"},
    d:{es:"2 Wantán frito, 2 Arrollado primavera, 2 Carne mongoliana, 1 Pollo fuyón, 1 Costillar cantonés, 1 Chapsui especial, 1 Chapsui de pollo, 6 Arroz chaufán.",en:"2 Fried wonton, 2 Spring rolls, 2 Mongolian beef, 1 Chicken egg foo young, 1 Cantonese ribs, 1 Special chop suey, 1 Chicken chop suey, 6 Fried rice.",pt:"2 Wantan frito, 2 Rolinhos primavera, 2 Carne mongoliana, 1 Omelete de frango, 1 Costelinha cantonesa, 1 Chapsui especial, 1 Chapsui de frango, 6 Arroz frito.",zh:"炸云吞2份、春卷2份、蒙古牛肉2份、鸡肉煎蛋1份、广式排骨1份、特色杂碎1份、鸡肉杂碎1份、炒饭6份。"} },
  { p:"$105.000", n:{es:"Combo 8 Personas",en:"Combo for 8",pt:"Combo para 8",zh:"8人套餐"},
    d:{es:"2 Wantán frito, 2 Arrollado primavera, 2 Carne mongoliana, 1 Costillar cantonés, 1 Chapsui especial, 1 Arrollado de pescado, 1 Chapsui de pollo, 1 Pollo fuyón, 8 Arroz chaufán.",en:"2 Fried wonton, 2 Spring rolls, 2 Mongolian beef, 1 Cantonese ribs, 1 Special chop suey, 1 Fish roll, 1 Chicken chop suey, 1 Chicken egg foo young, 8 Fried rice.",pt:"2 Wantan frito, 2 Rolinhos primavera, 2 Carne mongoliana, 1 Costelinha cantonesa, 1 Chapsui especial, 1 Rolinho de peixe, 1 Chapsui de frango, 1 Omelete de frango, 8 Arroz frito.",zh:"炸云吞2份、春卷2份、蒙古牛肉2份、广式排骨1份、特色杂碎1份、鱼卷1份、鸡肉杂碎1份、鸡肉煎蛋1份、炒饭8份。"} }
]},

{ id:"colaciones", name:{es:"Colaciones Individuales",en:"Weekday Lunch Specials",pt:"Almoço Executivo",zh:"单人套餐"}, sub:{es:"Lunes a sábado hasta las 19:00 hrs",en:"Mon–Sat until 7:00 pm",pt:"Seg a sáb até as 19h",zh:"周一至周六19:00前供应"}, items:[
  { p:"$8.100", n:{es:"Colación 1",en:"Lunch Special 1",pt:"Almoço 1",zh:"套餐1"},
    d:{es:"Chapsui de ave con arroz chaufán + 4 unid. hoja de wantán + bebida express.",en:"Chicken chop suey with fried rice + 4 fried wonton sheets + soft drink.",pt:"Chapsui de aves com arroz frito + 4 unid. folha de wantan + refrigerante.",zh:"鸡肉杂碎配炒饭 + 云吞皮4片 + 饮料。"} },
  { p:"$9.800", n:{es:"Colación 2",en:"Lunch Special 2",pt:"Almoço 2",zh:"套餐2"},
    d:{es:"Pollo mongoliano, pollo fuyón o diente de dragón con arroz chaufán + 4 wantán o 2 arrollados primavera o 2 arrollado queso + bebida express.",en:"Mongolian chicken, egg foo young or dragon-tooth chicken with fried rice + 4 wontons or 2 spring rolls or 2 cheese rolls + soft drink.",pt:"Frango mongoliano, omelete de frango ou dente de dragão com arroz frito + 4 wantan ou 2 rolinhos primavera ou 2 rolinhos de queijo + refrigerante.",zh:"蒙古鸡、鸡肉煎蛋或龙牙鸡配炒饭 + 云吞4个或春卷2个或芝士卷2个 + 饮料。"} },
  { p:"$10.900", n:{es:"Colación 3",en:"Lunch Special 3",pt:"Almoço 3",zh:"套餐3"},
    d:{es:"Carne mongoliana, costillar cantonés o arrollado de pescado con arroz chaufán + 4 wantán o 2 arrollado primavera o 2 arrollado queso + bebida express.",en:"Mongolian beef, Cantonese ribs or fish roll with fried rice + 4 wontons or 2 spring rolls or 2 cheese rolls + soft drink.",pt:"Carne mongoliana, costelinha cantonesa ou rolinho de peixe com arroz frito + 4 wantan ou 2 rolinhos primavera ou 2 rolinhos de queijo + refrigerante.",zh:"蒙古牛肉、广式排骨或鱼卷配炒饭 + 云吞4个或春卷2个或芝士卷2个 + 饮料。"} }
]},

{ id:"llevar", name:{es:"Colaciones para Llevar",en:"Take-Away Lunch Boxes",pt:"Marmitas para Levar",zh:"外带套餐"}, items:[
  { p:"$6.800", img:"colacion-a", n:{es:"Colación A",en:"Lunch Box A",pt:"Marmita A",zh:"套餐 A"}, d:{es:"Chapsui de pollo o chapsui de verduras con arroz chaufán.",en:"Chicken or vegetable chop suey with fried rice.",pt:"Chapsui de frango ou de legumes com arroz frito.",zh:"鸡肉杂碎或蔬菜杂碎配炒饭。"} },
  { p:"$7.900", img:"colacion-b", n:{es:"Colación B",en:"Lunch Box B",pt:"Marmita B",zh:"套餐 B"}, d:{es:"Diente de dragón con pollo o pollo fuyón con arroz chaufán.",en:"Dragon-tooth chicken or egg foo young with fried rice.",pt:"Dente de dragão com frango ou omelete de frango com arroz frito.",zh:"龙牙鸡或鸡肉煎蛋配炒饭。"} },
  { p:"$8.600", img:"colacion-c", n:{es:"Colación C",en:"Lunch Box C",pt:"Marmita C",zh:"套餐 C"}, d:{es:"Carne mongoliana, arrollado de pescado o costillar cantonés con arroz chaufán o chaumín de pollo.",en:"Mongolian beef, fish roll or Cantonese ribs with fried rice or chicken chow mein.",pt:"Carne mongoliana, rolinho de peixe ou costelinha cantonesa com arroz frito ou chaumin de frango.",zh:"蒙古牛肉、鱼卷或广式排骨配炒饭或鸡肉炒面。"} }
]},

{ id:"vn", name:{es:"Colaciones China Vn",en:"China Vn Lunch Boxes",pt:"Marmitas China Vn",zh:"越式中餐套餐"}, items:[
  { p:"$8.900", img:"colacion1vn", n:{es:"Colación 1 Vn",en:"China Vn 1",pt:"China Vn 1",zh:"越式套餐1"}, d:{es:"Arroz, chopsuey y lumpia.",en:"Rice, chop suey and lumpia (spring roll).",pt:"Arroz, chopsuey e lumpia (rolinho).",zh:"米饭、杂碎、春卷。"} },
  { p:"$9.400", img:"colacion2vn", n:{es:"Colación 2 Vn",en:"China Vn 2",pt:"China Vn 2",zh:"越式套餐2"}, d:{es:"Arroz, pollo agridulce y lumpia.",en:"Rice, sweet & sour chicken and lumpia.",pt:"Arroz, frango agridoce e lumpia.",zh:"米饭、糖醋鸡、春卷。"} },
  { p:"$13.500", img:"colacion3vn", n:{es:"Colación 3 Vn",en:"China Vn 3",pt:"China Vn 3",zh:"越式套餐3"}, d:{es:"Arroz, pollo agridulce, costillita y lumpia.",en:"Rice, sweet & sour chicken, ribs and lumpia.",pt:"Arroz, frango agridoce, costelinha e lumpia.",zh:"米饭、糖醋鸡、排骨、春卷。"} },
  { p:"$7.900", img:"arrozchinovn", n:{es:"Arroz Chino Vn",en:"China Vn Fried Rice",pt:"Arroz China Vn",zh:"越式炒饭"}, d:{es:"Arroz salteado al estilo oriental con pollo, cerdo, jamón, vegetales frescos y huevo, sazonado con salsa de soya.",en:"Oriental-style fried rice with chicken, pork, ham, fresh vegetables and egg, seasoned with soy sauce.",pt:"Arroz frito ao estilo oriental com frango, porco, presunto, legumes frescos e ovo, temperado com molho de soja.",zh:"东方风味炒饭，配鸡肉、猪肉、火腿、新鲜蔬菜和鸡蛋，酱油调味。"} },
  { p:"$9.200", n:{es:"Arroz Chino Vn con Camarón",en:"China Vn Fried Rice with Shrimp",pt:"Arroz China Vn com Camarão",zh:"越式虾仁炒饭"} }
]},

{ id:"peru", name:{es:"Comida Peruana",en:"Peruvian Dishes",pt:"Comida Peruana",zh:"秘鲁菜"}, items:[
  { star:true, p:"$15.400", img:"lomosaltado", n:{es:"Lomo Saltado",en:"Lomo Saltado (Stir-Fried Beef)",pt:"Lomo Saltado",zh:"秘鲁牛肉炒时蔬"}, d:{es:"Clásico peruano de tiras de res salteadas con cebolla, tomate y ají amarillo, flameadas en salsa de soya y vinagre. Se sirve con arroz blanco y papas fritas crocantes.",en:"Peruvian classic of beef strips stir-fried with onion, tomato and yellow chili, flambéed in soy sauce and vinegar. Served with white rice and crispy fries.",pt:"Clássico peruano de tiras de carne salteadas com cebola, tomate e pimenta amarela, flambadas em molho de soja e vinagre. Servido com arroz branco e batatas fritas crocantes.",zh:"秘鲁经典牛肉炒菜：牛肉条与洋葱、番茄、黄辣椒同炒，加入酱油和醋提香，配白米饭和香脆薯条。"} },
  { p:"$12.800", img:"ajidegallina", n:{es:"Ají de Gallina",en:"Ají de Gallina (Creamy Chicken)",pt:"Ají de Gallina",zh:"秘鲁奶油辣鸡"}, d:{es:"Guiso suave y cremoso de pollo deshilachado con ají amarillo, servido con arroz, papa, huevo y aceituna.",en:"Smooth, creamy shredded chicken stew with yellow chili, served with rice, potato, egg and olive.",pt:"Ensopado suave e cremoso de frango desfiado com pimenta amarela, servido com arroz, batata, ovo e azeitona.",zh:"手撕鸡肉配黄辣椒炖煮成浓郁奶油酱，配米饭、土豆、鸡蛋和橄榄。"} },
  { p:"$12.400", img:"rizzoto", n:{es:"Rizzoto de Ají Amarillo",en:"Yellow Chili Risotto",pt:"Risoto de Pimenta Amarela",zh:"黄辣椒烩饭"}, d:{es:"Arroz cremoso al estilo peruano, preparado con ají amarillo, queso fresco y caldo aromático. Puede servirse con pollo o vacuno.",en:"Creamy Peruvian-style rice cooked with yellow chili, fresh cheese and aromatic broth. Available with chicken or beef.",pt:"Arroz cremoso ao estilo peruano, preparado com pimenta amarela, queijo fresco e caldo aromático. Pode ser servido com frango ou carne.",zh:"秘鲁风味奶油烩饭，用黄辣椒、鲜奶酪和香浓高汤烹制，可选配鸡肉或牛肉。"} },
  { p:"$11.200", img:"tallarinsaltado", n:{es:"Tallarín Saltado",en:"Tallarín Saltado (Stir-Fried Noodles)",pt:"Tallarín Saltado",zh:"秘鲁炒面"}, d:{es:"Fideos salteados al wok con trozos de pollo, verduras frescas y un toque de salsa de soya, un clásico de la fusión chino-peruana.",en:"Wok-tossed noodles with chicken pieces, fresh vegetables and a touch of soy sauce — a classic of Chinese-Peruvian fusion.",pt:"Macarrão salteado no wok com pedaços de frango, legumes frescos e um toque de molho de soja, um clássico da fusão chinesa-peruana.",zh:"镬气十足的炒面，配鸡肉块和新鲜蔬菜，加少许酱油，是中秘融合菜的经典。"} }
]},

{ id:"chilenas", name:{es:"Colaciones Chilenas",en:"Chilean Lunch Dishes",pt:"Pratos Chilenos",zh:"智利风味套餐"}, items:[
  { p:"$6.700", img:"polloplancha", n:{es:"Pollo a la Plancha",en:"Grilled Chicken",pt:"Frango Grelhado",zh:"铁板鸡排"}, d:{es:"Acompañado de 2 agregados, puede elegir arroz blanco y/o ensalada. *Sujeto a disponibilidad.",en:"Served with 2 sides, choose white rice and/or salad. *Subject to availability.",pt:"Acompanhado de 2 opções, pode escolher arroz branco e/ou salada. *Sujeito à disponibilidade.",zh:"配2份配菜，可选白米饭和/或沙拉。*视厨房情况供应。"} },
  { p:"$6.700", img:"tortillaverdura", n:{es:"Tortilla de Verdura",en:"Vegetable Omelette",pt:"Omelete de Legumes",zh:"蔬菜煎蛋"}, veg:true, d:{es:"Tortilla de huevo con verduras frescas, servida con dos acompañamientos a elección: arroz blanco y/o ensalada.",en:"Egg omelette with fresh vegetables, served with a choice of two sides: white rice and/or salad.",pt:"Omelete de ovo com legumes frescos, servido com dois acompanhamentos à escolha: arroz branco e/ou salada.",zh:"新鲜蔬菜煎蛋，配两份配菜（白米饭和/或沙拉）。"} },
  { p:"$6.700", img:"polloarverjado", n:{es:"Pollo Arverjado",en:"Chicken & Pea Stew",pt:"Frango com Ervilhas",zh:"豌豆炖鸡"}, d:{es:"Guiso tradicional de pollo con arvejas, papas y zanahorias, servido con dos acompañamientos a elección.",en:"Traditional chicken stew with peas, potatoes and carrots, served with a choice of two sides.",pt:"Ensopado tradicional de frango com ervilhas, batatas e cenouras, servido com dois acompanhamentos à escolha.",zh:"传统豌豆炖鸡，配土豆和胡萝卜，附两份配菜。"} }
]},

{ id:"aperitivos", name:{es:"Aperitivos",en:"Appetizers",pt:"Aperitivos",zh:"开胃菜"}, items:[
  { p:"$2.100", n:{es:"Hojas Camarón (10 unid.)",en:"Shrimp Crackers (10 pcs)",pt:"Chips de Camarão (10 un.)",zh:"虾片（10片）"}, d:{es:"Hojuelas crujientes de diferentes colores con sabor a camarón.",en:"Crispy, colorful shrimp-flavored crackers.",pt:"Chips crocantes e coloridos com sabor a camarão.",zh:"多彩虾味脆片。"} },
  { p:"$3.100", n:{es:"Wantán Frito (10 unid.)",en:"Fried Wontons (10 pcs)",pt:"Wantan Frito (10 un.)",zh:"炸云吞（10个）"}, d:{es:"Masa delgada rellena con pasta de carne.",en:"Thin dough filled with meat paste.",pt:"Massa fina recheada com pasta de carne.",zh:"薄皮包肉馅，酥炸而成。"} },
  { p:"$3.600", n:{es:"Arrollado de Primavera (5 unid.)",en:"Spring Rolls (5 pcs)",pt:"Rolinho Primavera (5 un.)",zh:"春卷（5个）"} },
  { p:"$8.800", n:{es:"Hunan",en:"Hunan Stuffed Chili",pt:"Hunan",zh:"湖南辣椒酿鱼蓉"}, d:{es:"Ají relleno con pasta de pescado frito.",en:"Chili pepper stuffed with fried fish paste.",pt:"Pimenta recheada com pasta de peixe frita.",zh:"辣椒酿入鱼蓉后油炸。"} },
  { p:"$7.800", n:{es:"Camarón Mandarín",en:"Mandarin Shrimp",pt:"Camarão Mandarim",zh:"锦绣虾饺"}, d:{es:"Empanadas rellenas con camarón, queso y cebolla frita.",en:"Fried pastries filled with shrimp, cheese and fried onion.",pt:"Pastéis fritos recheados com camarão, queijo e cebola frita.",zh:"炸馅饼，内含虾仁、芝士和炸洋葱。"} },
  { p:"$3.600", n:{es:"Arrollado Queso",en:"Cheese Roll",pt:"Rolinho de Queijo",zh:"芝士卷"} },
  { p:"$3.800", n:{es:"Arrollado Jamón y Queso (5 unid.)",en:"Ham & Cheese Roll (5 pcs)",pt:"Rolinho de Presunto e Queijo (5 un.)",zh:"火腿芝士卷（5个）"} },
  { p:"$9.900", n:{es:"Siu May (8 unid.)",en:"Siu Mai (8 pcs)",pt:"Siu Mai (8 un.)",zh:"烧卖（8个）"}, d:{es:"Masa envuelta de pollo, camarones y cebollín al vapor con salsa china.",en:"Steamed dumplings of chicken, shrimp and scallion, served with Chinese sauce.",pt:"Massa envolta de frango, camarão e cebolinha no vapor com molho chinês.",zh:"鸡肉虾仁葱花蒸饺，配中式酱汁。"} },
  { p:"$7.500", n:{es:"Jiaozi (8 unid.)",en:"Jiaozi Dumplings (8 pcs)",pt:"Jiaozi (8 un.)",zh:"饺子（8个）"}, d:{es:"Gyosas que puede ser al vapor o fritas.",en:"Dumplings, steamed or pan-fried.",pt:"Guiozas, no vapor ou fritas.",zh:"可选蒸或煎。"} },
  { p:"$3.600", veg:true, n:{es:"Arrollado de Verduras (5 unid.)",en:"Vegetable Roll (5 pcs)",pt:"Rolinho de Legumes (5 un.)",zh:"蔬菜卷（5个）"} },
  { p:"$2.600", veg:true, n:{es:"Hojas de Wantán Frito (10 unid.)",en:"Fried Wonton Sheets (10 pcs)",pt:"Folha de Wantan Frita (10 un.)",zh:"炸云吞皮（10片）"}, d:{es:"Crujientes hojuelas de masa delgada sin carne.",en:"Crispy thin dough sheets, no meat filling.",pt:"Folhas finas e crocantes, sem recheio de carne.",zh:"酥脆薄皮，无肉馅。"} }
]},

{ id:"chapsui", name:{es:"Chapsui",en:"Chop Suey",pt:"Chapsui",zh:"杂碎"}, items:[
  { p:"$11.000", n:{es:"Chapsui Especial",en:"Special Chop Suey",pt:"Chapsui Especial",zh:"特色杂碎"}, d:{es:"Trozos de carnes surtidas salteadas con verduras, algas chinas, champiñones, camarones y decorado con almendras fritas.",en:"Assorted meats stir-fried with vegetables, Chinese seaweed, mushrooms, shrimp, topped with fried almonds.",pt:"Pedaços de carnes variadas salteados com legumes, algas chinesas, cogumelos, camarão e decorado com amêndoas fritas.",zh:"什锦肉片配蔬菜、海藻、蘑菇、虾仁炒制，配炸杏仁。"} },
  { p:"$9.200", n:{es:"Chapsui de Pollo",en:"Chicken Chop Suey",pt:"Chapsui de Frango",zh:"鸡肉杂碎"}, d:{es:"Pollo salteado con verduras y diente de dragón.",en:"Chicken stir-fried with vegetables and dragon-tooth greens.",pt:"Frango salteado com legumes e dente de dragão.",zh:"鸡肉炒时蔬配龙牙菜。"} },
  { p:"$10.200", n:{es:"Chapsui de Carne",en:"Beef Chop Suey",pt:"Chapsui de Carne",zh:"牛肉杂碎"}, d:{es:"Carne salteada con verduras y diente de dragón.",en:"Beef stir-fried with vegetables and dragon-tooth greens.",pt:"Carne salteada com legumes e dente de dragão.",zh:"牛肉炒时蔬配龙牙菜。"} },
  { p:"$9.200", n:{es:"Chapsui de Chancho",en:"Pork Chop Suey",pt:"Chapsui de Porco",zh:"猪肉杂碎"}, d:{es:"Chancho salteado con verduras y diente de dragón.",en:"Pork stir-fried with vegetables and dragon-tooth greens.",pt:"Porco salteado com legumes e dente de dragão.",zh:"猪肉炒时蔬配龙牙菜。"} },
  { p:"$14.500", n:{es:"Chapsui de Camarón",en:"Shrimp Chop Suey",pt:"Chapsui de Camarão",zh:"虾仁杂碎"}, d:{es:"Camarón salteado con verduras y diente de dragón.",en:"Shrimp stir-fried with vegetables and dragon-tooth greens.",pt:"Camarão salteado com legumes e dente de dragão.",zh:"虾仁炒时蔬配龙牙菜。"} },
  { p:"$9.200", veg:true, n:{es:"Chapsui de Verduras",en:"Vegetable Chop Suey",pt:"Chapsui de Legumes",zh:"蔬菜杂碎"}, d:{es:"Selección de verduras frescas salteadas al wok.",en:"Selection of fresh vegetables stir-fried in the wok.",pt:"Seleção de legumes frescos salteados no wok.",zh:"精选新鲜蔬菜镬炒。"} },
  { p:"$9.200", veg:true, n:{es:"Fuyón de Verduras",en:"Vegetable Egg Foo Young",pt:"Omelete de Legumes",zh:"蔬菜煎蛋"}, d:{es:"Tortilla de huevo a base de verduras de la temporada.",en:"Egg omelette made with seasonal vegetables.",pt:"Omelete de ovo à base de legumes da estação.",zh:"时令蔬菜煎蛋。"} }
]},

{ id:"pollo", name:{es:"Pollo",en:"Chicken",pt:"Frango",zh:"鸡肉"}, items:[
  { star:true, p:"$11.990", n:{es:"Pollo Bin Xiang",en:"Pollo Bin Xiang",pt:"Frango Bin Xiang",zh:"滨湘鸡"}, d:{es:"Pollo salteado con algas chinas, champiñones y cebollín.",en:"Chicken stir-fried with Chinese seaweed, mushrooms and scallion.",pt:"Frango salteado com algas chinesas, cogumelos e cebolinha.",zh:"鸡肉配海藻、蘑菇、葱花炒制。"} },
  { p:"$11.900", n:{es:"Pollo con Camarón",en:"Chicken with Shrimp",pt:"Frango com Camarão",zh:"虾仁滑鸡"}, d:{es:"Pollo salteado con camarones y cebollín.",en:"Chicken stir-fried with shrimp and scallion.",pt:"Frango salteado com camarão e cebolinha.",zh:"鸡肉虾仁配葱花炒制。"} },
  { p:"$10.500", n:{es:"Pollo Mongoliano",en:"Mongolian Chicken",pt:"Frango Mongoliano",zh:"蒙古鸡"}, d:{es:"Pollo salteado con cebollín.",en:"Chicken stir-fried with scallion.",pt:"Frango salteado com cebolinha.",zh:"鸡肉配葱花炒制。"} },
  { p:"$10.500", n:{es:"Pollo Tausí",en:"Chicken Tausí (Black Bean)",pt:"Frango Tausí",zh:"豆豉鸡"}, d:{es:"Pollo salteado con tausí (porotos chinos) y cebollín.",en:"Chicken stir-fried with fermented black beans and scallion.",pt:"Frango salteado com tausí (feijão preto chinês) e cebolinha.",zh:"鸡肉配豆豉、葱花炒制。"} },
  { p:"$12.500", n:{es:"Pollo Solo",en:"Chicken Only",pt:"Frango Sozinho",zh:"白灼鸡"} },
  { p:"$11.500", n:{es:"Pollo Champiñón",en:"Chicken with Mushrooms",pt:"Frango com Cogumelos",zh:"蘑菇鸡"}, d:{es:"Pollo salteado con champiñones y cebollín.",en:"Chicken stir-fried with mushrooms and scallion.",pt:"Frango salteado com cogumelos e cebolinha.",zh:"鸡肉配蘑菇、葱花炒制。"} },
  { p:"$11.500", n:{es:"Pollo Chitén",en:"Almond Diced Chicken",pt:"Frango com Amêndoas",zh:"杏仁鸡丁"}, d:{es:"Pollo salteado con cubos de verduras y almendras.",en:"Chicken stir-fried with diced vegetables and almonds.",pt:"Frango salteado com cubos de legumes e amêndoas.",zh:"鸡丁配蔬菜丁、杏仁炒制。"} },
  { p:"$10.500", n:{es:"Pollo Chicharrón",en:"Crispy Fried Chicken",pt:"Frango Crocante",zh:"炸鸡"}, d:{es:"Pollo arrebozado frito.",en:"Battered, deep-fried chicken.",pt:"Frango empanado e frito.",zh:"裹粉炸鸡。"} },
  { p:"$10.500", n:{es:"Pollo Cantonés",en:"Cantonese Chicken",pt:"Frango Cantonês",zh:"广式鸡"}, d:{es:"Pollo arrebozado con piña y tamarindo.",en:"Battered chicken with pineapple and tamarind.",pt:"Frango empanado com abacaxi e tamarindo.",zh:"裹粉鸡配菠萝、罗望子酱。"} },
  { p:"$10.500", n:{es:"Pollo Piña",en:"Pineapple Chicken",pt:"Frango com Abacaxi",zh:"菠萝鸡"}, d:{es:"Pollo cocido con piña y salsa de tamarindo.",en:"Chicken cooked with pineapple and tamarind sauce.",pt:"Frango cozido com abacaxi e molho de tamarindo.",zh:"鸡肉配菠萝、罗望子酱烹制。"} },
  { p:"$10.500", n:{es:"Pollo con Algas Chinas",en:"Chicken with Chinese Seaweed",pt:"Frango com Algas Chinesas",zh:"海藻鸡"}, d:{es:"Pollo salteado con algas chinas y cebollín.",en:"Chicken stir-fried with Chinese seaweed and scallion.",pt:"Frango salteado com algas chinesas e cebolinha.",zh:"鸡肉配海藻、葱花炒制。"} },
  { p:"$10.500", n:{es:"Pollo Fuyón",en:"Chicken Egg Foo Young",pt:"Omelete de Frango",zh:"鸡肉煎蛋"}, d:{es:"Tortilla de pollo con cebollín.",en:"Chicken egg omelette with scallion.",pt:"Omelete de frango com cebolinha.",zh:"鸡肉煎蛋配葱花。"} },
  { p:"$10.500", n:{es:"Pollo Ajo",en:"Garlic Chicken",pt:"Frango com Alho",zh:"蒜香鸡"}, d:{es:"Pollo salteado con ajo y cebollín.",en:"Chicken stir-fried with garlic and scallion.",pt:"Frango salteado com alho e cebolinha.",zh:"鸡肉配蒜、葱花炒制。"} }
]},

{ id:"carne", name:{es:"Carne",en:"Beef",pt:"Carne Bovina",zh:"牛肉"}, items:[
  { star:true, p:"$13.500", n:{es:"Carne Bin Xiang",en:"Beef Bin Xiang",pt:"Carne Bin Xiang",zh:"滨湘牛肉"}, d:{es:"Carne salteada con algas chinas, champiñones y cebollín.",en:"Beef stir-fried with Chinese seaweed, mushrooms and scallion.",pt:"Carne salteada com algas chinesas, cogumelos e cebolinha.",zh:"牛肉配海藻、蘑菇、葱花炒制。"} },
  { p:"$11.200", n:{es:"Carne Mongoliana",en:"Mongolian Beef",pt:"Carne Mongoliana",zh:"蒙古牛肉"}, d:{es:"Carne salteada con cebollín.",en:"Beef stir-fried with scallion.",pt:"Carne salteada com cebolinha.",zh:"牛肉配葱花炒制。"} },
  { star:true, p:"$12.500", n:{es:"Carne Mongoliana Especial",en:"Special Mongolian Beef",pt:"Carne Mongoliana Especial",zh:"特色蒙古牛肉"}, d:{es:"Carne y pollo salteados al wok con cebollín fresco, champiñones y salsa de soya, un clásico lleno de sabor oriental.",en:"Beef and chicken wok-fried with fresh scallion, mushrooms and soy sauce — an oriental classic.",pt:"Carne e frango salteados no wok com cebolinha fresca, cogumelos e molho de soja, um clássico oriental.",zh:"牛肉鸡肉同炒，配新鲜葱花、蘑菇和酱油，东方风味经典之作。"} },
  { p:"$11.500", n:{es:"Carne Champiñón",en:"Beef with Mushrooms",pt:"Carne com Cogumelos",zh:"蘑菇牛肉"}, d:{es:"Carne salteada con champiñones y cebollín.",en:"Beef stir-fried with mushrooms and scallion.",pt:"Carne salteada com cogumelos e cebolinha.",zh:"牛肉配蘑菇、葱花炒制。"} },
  { p:"$11.500", n:{es:"Carne Jengibre",en:"Beef with Ginger",pt:"Carne com Gengibre",zh:"姜炒牛肉"}, d:{es:"Carne salteada con jengibre y cebollín.",en:"Beef stir-fried with ginger and scallion.",pt:"Carne salteada com gengibre e cebolinha.",zh:"牛肉配生姜、葱花炒制。"} },
  { p:"$11.500", n:{es:"Carne Algas Chinas",en:"Beef with Chinese Seaweed",pt:"Carne com Algas Chinesas",zh:"海藻牛肉"}, d:{es:"Carne salteada con algas chinas y cebollín.",en:"Beef stir-fried with Chinese seaweed and scallion.",pt:"Carne salteada com algas chinesas e cebolinha.",zh:"牛肉配海藻、葱花炒制。"} },
  { p:"$11.500", n:{es:"Carne Tausí",en:"Beef Tausí (Black Bean)",pt:"Carne Tausí",zh:"豆豉牛肉"}, d:{es:"Carne salteada con ajo y tausí (porotos chinos).",en:"Beef stir-fried with garlic and fermented black beans.",pt:"Carne salteada com alho e tausí (feijão preto chinês).",zh:"牛肉配蒜、豆豉炒制。"} },
  { p:"$13.500", n:{es:"Carne Sola",en:"Beef Only",pt:"Carne Sozinha",zh:"白灼牛肉"} }
]},

{ id:"chancho", name:{es:"Chancho",en:"Pork",pt:"Porco",zh:"猪肉"}, items:[
  { p:"$11.200", n:{es:"Chancho Bin Xiang",en:"Pork Bin Xiang",pt:"Porco Bin Xiang",zh:"滨湘猪肉"}, d:{es:"Chancho salteado con algas chinas, champiñones y cebollín.",en:"Pork stir-fried with Chinese seaweed, mushrooms and scallion.",pt:"Porco salteado com algas chinesas, cogumelos e cebolinha.",zh:"猪肉配海藻、蘑菇、葱花炒制。"} },
  { star:true, p:"$10.500", n:{es:"Costillar Cantonés",en:"Cantonese Ribs",pt:"Costelinha Cantonesa",zh:"广式排骨"}, d:{es:"Chancho arrebozado frito con salsa de tamarindo y piña.",en:"Battered fried pork with tamarind and pineapple sauce.",pt:"Porco empanado e frito com molho de tamarindo e abacaxi.",zh:"裹粉炸猪肉配罗望子菠萝酱。"} },
  { p:"$14.800", n:{es:"Chancho Chasiu",en:"Char Siu Pork",pt:"Porco Chasiu",zh:"叉烧"}, d:{es:"Chancho asado salteado con cebollín.",en:"Roasted pork stir-fried with scallion.",pt:"Porco assado salteado com cebolinha.",zh:"叉烧配葱花炒制。"} },
  { p:"$10.500", n:{es:"Chancho Mongoliano",en:"Mongolian Pork",pt:"Porco Mongoliano",zh:"蒙古猪肉"}, d:{es:"Chancho salteado con cebollín.",en:"Pork stir-fried with scallion.",pt:"Porco salteado com cebolinha.",zh:"猪肉配葱花炒制。"} },
  { p:"$11.200", n:{es:"Chancho Champiñones",en:"Pork with Mushrooms",pt:"Porco com Cogumelos",zh:"蘑菇猪肉"}, d:{es:"Chancho salteado con champiñones y cebollín.",en:"Pork stir-fried with mushrooms and scallion.",pt:"Porco salteado com cogumelos e cebolinha.",zh:"猪肉配蘑菇、葱花炒制。"} },
  { p:"$10.500", n:{es:"Chancho Algas",en:"Pork with Seaweed",pt:"Porco com Algas",zh:"海藻猪肉"}, d:{es:"Chancho salteado con algas y cebollín.",en:"Pork stir-fried with seaweed and scallion.",pt:"Porco salteado com algas e cebolinha.",zh:"猪肉配海藻、葱花炒制。"} },
  { p:"$10.500", n:{es:"Chancho Jengibre",en:"Pork with Ginger",pt:"Porco com Gengibre",zh:"姜炒猪肉"}, d:{es:"Chancho salteado con jengibre y cebollín.",en:"Pork stir-fried with ginger and scallion.",pt:"Porco salteado com gengibre e cebolinha.",zh:"猪肉配生姜、葱花炒制。"} },
  { p:"$10.500", n:{es:"Chancho Ajo",en:"Garlic Pork",pt:"Porco com Alho",zh:"蒜香猪肉"}, d:{es:"Chancho salteado con ajo y cebollín.",en:"Pork stir-fried with garlic and scallion.",pt:"Porco salteado com alho e cebolinha.",zh:"猪肉配蒜、葱花炒制。"} }
]},

{ id:"mariscos", name:{es:"Mariscos y Pescados",en:"Seafood & Fish",pt:"Frutos do Mar e Peixes",zh:"海鲜和鱼类"}, items:[
  { p:"$10.500", n:{es:"Arrollado de Pescado",en:"Fish Roll",pt:"Rolinho de Peixe",zh:"鱼卷"}, d:{es:"Pasta de pescado envuelto en panqueque de huevo, cocida al vapor, bañada en salsa de soya y cebollín.",en:"Fish paste wrapped in egg crêpe, steamed and topped with soy sauce and scallion.",pt:"Pasta de peixe envolta em panqueca de ovo, cozida no vapor e coberta com molho de soja e cebolinha.",zh:"鱼蓉裹蛋皮蒸制，淋上酱油和葱花。"} },
  { star:true, p:"$14.900", n:{es:"Camarón Bin Xiang",en:"Shrimp Bin Xiang",pt:"Camarão Bin Xiang",zh:"滨湘虾仁"}, d:{es:"Camarones salteados con champiñones, algas chinas y cebollín.",en:"Shrimp stir-fried with mushrooms, Chinese seaweed and scallion.",pt:"Camarões salteados com cogumelos, algas chinesas e cebolinha.",zh:"虾仁配蘑菇、海藻、葱花炒制。"} },
  { p:"$13.500", n:{es:"Camarón Fuyón",en:"Shrimp Egg Foo Young",pt:"Omelete de Camarão",zh:"虾仁煎蛋"}, d:{es:"Tortilla con camarones.",en:"Egg omelette with shrimp.",pt:"Omelete com camarão.",zh:"虾仁煎蛋。"} }
]},

{ id:"arroz", name:{es:"Arroz",en:"Rice",pt:"Arroz",zh:"米饭"}, items:[
  { p:"$3.100", n:{es:"Arroz Chaufán",en:"Fried Rice",pt:"Arroz Frito",zh:"炒饭"}, d:{es:"Arroz salteado con huevo y zanahoria.",en:"Fried rice with egg and carrot.",pt:"Arroz frito com ovo e cenoura.",zh:"炒饭配鸡蛋和胡萝卜。"} },
  { star:true, p:"$8.900", n:{es:"Arroz Chaufán Especial",en:"Special Fried Rice",pt:"Arroz Frito Especial",zh:"特色炒饭"}, d:{es:"Arroz salteado con trozos de huevo, zanahoria, carne, pollo y camarones.",en:"Fried rice with egg, carrot, beef, chicken and shrimp.",pt:"Arroz frito com ovo, cenoura, carne, frango e camarão.",zh:"炒饭配鸡蛋、胡萝卜、牛肉、鸡肉和虾仁。"} },
  { p:"$2.800", veg:true, n:{es:"Arroz Blanco",en:"White Rice",pt:"Arroz Branco",zh:"白米饭"}, d:{es:"Arroz blanco tradicional.",en:"Traditional white rice.",pt:"Arroz branco tradicional.",zh:"传统白米饭。"} }
]},

{ id:"sopa", name:{es:"Sopa",en:"Soup",pt:"Sopa",zh:"汤"}, items:[
  { p:"$6.500", n:{es:"Sopa Wantán",en:"Wonton Soup",pt:"Sopa de Wantan",zh:"云吞汤"}, d:{es:"Caldo de ave con wantán.",en:"Chicken broth with wontons.",pt:"Caldo de ave com wantan.",zh:"鸡汤配云吞。"} },
  { p:"$6.500", n:{es:"Sopa Hanchow",en:"Hanchow Soup",pt:"Sopa Hanchow",zh:"杭州汤"}, d:{es:"Sopa con fideos de arroz (fansi) y huevos.",en:"Soup with rice noodles (fansi) and egg.",pt:"Sopa com macarrão de arroz (fansi) e ovos.",zh:"粉丝汤配鸡蛋。"} },
  { p:"$6.500", n:{es:"Sopa I Fumin",en:"I Fumin Soup",pt:"Sopa I Fumin",zh:"伊府面汤"}, d:{es:"Sopa de fideos con pollo y verduras.",en:"Noodle soup with chicken and vegetables.",pt:"Sopa de macarrão com frango e legumes.",zh:"鸡肉蔬菜面汤。"} },
  { p:"$6.900", n:{es:"Sopa de Marisco",en:"Seafood Soup",pt:"Sopa de Frutos do Mar",zh:"海鲜汤"}, d:{es:"Sopa de mariscos surtidos.",en:"Assorted seafood soup.",pt:"Sopa de frutos do mar variados.",zh:"什锦海鲜汤。"} },
  { p:"$6.500", veg:true, n:{es:"Sopa de Verduras",en:"Vegetable Soup",pt:"Sopa de Legumes",zh:"蔬菜汤"}, d:{es:"Sopa basada en verduras de la temporada.",en:"Soup made with seasonal vegetables.",pt:"Sopa à base de legumes da estação.",zh:"时令蔬菜汤。"} }
]},

{ id:"chaumin", name:{es:"Chaumín",en:"Chow Mein",pt:"Chaumin",zh:"炒面"}, items:[
  { star:true, p:"$11.500", n:{es:"Chaumín Especial",en:"Special Chow Mein",pt:"Chaumin Especial",zh:"特色炒面"}, d:{es:"Tallarines salteados con surtido de carnes, camarones y verduras.",en:"Stir-fried noodles with assorted meats, shrimp and vegetables.",pt:"Macarrão salteado com carnes variadas, camarão e legumes.",zh:"炒面配什锦肉类、虾仁和蔬菜。"} },
  { p:"$9.500", n:{es:"Chaumín de Pollo",en:"Chicken Chow Mein",pt:"Chaumin de Frango",zh:"鸡肉炒面"} },
  { p:"$14.500", n:{es:"Chaumín de Camarón",en:"Shrimp Chow Mein",pt:"Chaumin de Camarão",zh:"虾仁炒面"} },
  { p:"$10.800", n:{es:"Chaumín de Carne",en:"Beef Chow Mein",pt:"Chaumin de Carne",zh:"牛肉炒面"}, d:{es:"Salteado de tallarines, verduras de la temporada y carne.",en:"Stir-fried noodles with seasonal vegetables and beef.",pt:"Macarrão salteado com legumes da estação e carne.",zh:"炒面配时令蔬菜和牛肉。"} },
  { p:"$9.500", veg:true, n:{es:"Chaumín de Verduras",en:"Vegetable Chow Mein",pt:"Chaumin de Legumes",zh:"蔬菜炒面"}, d:{es:"Base de verduras de la temporada.",en:"Made with seasonal vegetables.",pt:"Base de legumes da estação.",zh:"以时令蔬菜为主。"} }
]},

{ id:"tepanxiu", name:{es:"Tepán-Xiu Parrilla China",en:"Tepán-Xiu Chinese Grill",pt:"Tepán-Xiu Grelha Chinesa",zh:"铁板烧"}, items:[
  { star:true, p:"$18.500", n:{es:"Tepán-Xiu China",en:"Tepán-Xiu China",pt:"Tepán-Xiu China",zh:"中式铁板烧"}, d:{es:"Carne, pollo y chancho sobre base de cebollín en plancha caliente.",en:"Beef, chicken and pork on a bed of scallion, served on a hot plate.",pt:"Carne, frango e porco sobre uma base de cebolinha na chapa quente.",zh:"牛肉、鸡肉、猪肉配葱花铁板热盘。"} },
  { p:"$20.500", n:{es:"Tepán-Xiu Especial",en:"Special Tepán-Xiu",pt:"Tepán-Xiu Especial",zh:"特色铁板烧"}, d:{es:"Surtido de carne y marisco con salsa china.",en:"Assorted meat and seafood with Chinese sauce.",pt:"Carne e frutos do mar variados com molho chinês.",zh:"什锦肉类海鲜配中式酱汁。"} },
  { p:"$20.990", n:{es:"Tepán-Xiu de Marisco",en:"Seafood Tepán-Xiu",pt:"Tepán-Xiu de Frutos do Mar",zh:"海鲜铁板烧"}, d:{es:"Camarón, choro, jivia y calamar con cebolla en plancha caliente.",en:"Shrimp, mussels, cuttlefish and squid with onion on a hot plate.",pt:"Camarão, mexilhão, choco e lula com cebola na chapa quente.",zh:"虾仁、青口贝、墨鱼、鱿鱼配洋葱铁板热盘。"} },
  { p:"$15.990", n:{es:"Tepán-Xiu Mongoliano",en:"Mongolian Tepán-Xiu",pt:"Tepán-Xiu Mongoliano",zh:"蒙古铁板烧"}, d:{es:"Trocitos de carne picante.",en:"Diced beef, spicy style.",pt:"Pedacinhos de carne picante.",zh:"香辣牛肉粒。"} },
  { p:"$13.990", n:{es:"Tepán-Xiu Chapsui (Pollo, Carne o Chancho)",en:"Tepán-Xiu Chop Suey (Chicken, Beef or Pork)",pt:"Tepán-Xiu Chapsui (Frango, Carne ou Porco)",zh:"铁板杂碎（鸡肉/牛肉/猪肉）"}, d:{es:"Surtido de carne y verduras con salsa china, base de cebolla.",en:"Assorted meat and vegetables with Chinese sauce, on a bed of onion.",pt:"Carne e legumes variados com molho chinês, base de cebola.",zh:"什锦肉类蔬菜配中式酱汁，洋葱垫底。"} },
  { p:"$14.990", n:{es:"Tepán-Xiu de Pollo Mongoliano",en:"Mongolian Chicken Tepán-Xiu",pt:"Tepán-Xiu de Frango Mongoliano",zh:"蒙古鸡铁板烧"}, d:{es:"Trocitos de pollo con salsa china.",en:"Diced chicken with Chinese sauce.",pt:"Pedacinhos de frango com molho chinês.",zh:"鸡肉粒配中式酱汁。"} }
]},

{ id:"diente", name:{es:"Diente de Dragón",en:"Dragon Tooth",pt:"Dente de Dragão",zh:"龙牙"}, items:[
  { p:"$10.500", n:{es:"Diente de Dragón con Pollo",en:"Dragon Tooth with Chicken",pt:"Dente de Dragão com Frango",zh:"龙牙鸡"} },
  { p:"$11.500", n:{es:"Diente de Dragón con Carne",en:"Dragon Tooth with Beef",pt:"Dente de Dragão com Carne",zh:"龙牙牛肉"} },
  { p:"$10.500", n:{es:"Diente de Dragón con Chancho",en:"Dragon Tooth with Pork",pt:"Dente de Dragão com Porco",zh:"龙牙猪肉"} }
]},

{ id:"agregados", name:{es:"Guarniciones y Agregados",en:"Sides & Extras",pt:"Acompanhamentos e Adicionais",zh:"配菜和附加"}, items:[
  { p:"$4.800", veg:true, n:{es:"Papas Fritas",en:"French Fries",pt:"Batata Frita",zh:"薯条"} },
  { p:"$3.200", veg:true, n:{es:"Ensalada Mixta",en:"Mixed Salad",pt:"Salada Mista",zh:"什锦沙拉"}, d:{es:"Lechuga, zanahoria, tomate y pepino.",en:"Lettuce, carrot, tomato and cucumber.",pt:"Alface, cenoura, tomate e pepino.",zh:"生菜、胡萝卜、番茄和黄瓜。"} },
  { p:"$2.500", n:{es:"Diente de Dragón / Champiñón / Cebollín",en:"Dragon Tooth / Mushroom / Scallion",pt:"Dente de Dragão / Cogumelo / Cebolinha",zh:"龙牙菜/蘑菇/葱花"} },
  { p:"$2.800", n:{es:"Algas Chinas",en:"Chinese Seaweed",pt:"Algas Chinesas",zh:"海藻"} },
  { p:"$300", n:{es:"Salsa de Soya o Tamarindo",en:"Soy or Tamarind Sauce",pt:"Molho de Soja ou Tamarindo",zh:"酱油或罗望子酱"} },
  { p:"$400", n:{es:"Envase Alusa",en:"Take-Away Container",pt:"Embalagem para Viagem",zh:"外带餐盒"} },
  { p:"$150", n:{es:"Fay Chi (Palitos Chinos)",en:"Chopsticks",pt:"Hashi (Palitos Chineses)",zh:"筷子"} },
  { p:"$300", n:{es:"Ají",en:"Chili Sauce",pt:"Pimenta",zh:"辣椒酱"} }
]},

{ id:"menuchino", name:{es:"Menú Chino 中文菜单",en:"Chinese Street Food 中文菜单",pt:"Menu Chinês 中文菜单",zh:"中文菜单"}, items:[
  { star:true, p:"$9.200", img:"crepe", n:{es:"Crepé Bin-Xiang (蔡氏煎饼)",en:"Bin-Xiang Crêpe (蔡氏煎饼)",pt:"Crepe Bin-Xiang (蔡氏煎饼)",zh:"蔡氏煎饼"}, d:{es:"Crepe con huevo y sésamo por fuera, relleno de lechuga, cilantro, cebollín, crujiente masa de wantán, salsa dulce y pollo. 1 unidad.",en:"Egg-and-sesame crêpe filled with lettuce, cilantro, scallion, crispy wonton crisp, sweet sauce and chicken. 1 piece.",pt:"Crepe de ovo e gergelim por fora, recheado com alface, coentro, cebolinha, massa crocante de wantan, molho doce e frango. 1 unidade.",zh:"外皮鸡蛋芝麻煎制，内含生菜、香菜、葱花、脆云吞皮、甜酱和鸡肉。1份。"} },
  { p:"$4.500", img:"mantou", n:{es:"Mantou (炸馒头片)",en:"Mantou (炸馒头片)",pt:"Mantou (炸馒头片)",zh:"炸馒头片"}, d:{es:"Delicioso pan frito y crujiente, acompañado de leche condensada. 6 unidades + 1 salsa.",en:"Crispy fried bread, served with condensed milk. 6 pieces + 1 sauce.",pt:"Delicioso pão frito e crocante, acompanhado de leite condensado. 6 unidades + 1 molho.",zh:"香脆炸馒头片，配炼乳。6片+酱料1份。"} },
  { p:"$4.990", img:"corndog", n:{es:"Corn Dog (炸熱狗一份)",en:"Corn Dog (炸熱狗一份)",pt:"Corn Dog (炸熱狗一份)",zh:"炸热狗一份"}, d:{es:"Porción de 3 vienesas recubiertas con una masa de pan de trigo.",en:"3 hot dogs coated in wheat batter.",pt:"Porção de 3 salsichas envolvidas em massa de pão de trigo.",zh:"3根热狗裹面粉炸制。"} },
  { p:"$9.690", img:"ramen", n:{es:"Ramen (拉面)",en:"Ramen (拉面)",pt:"Ramen (拉面)",zh:"拉面"}, d:{es:"Reconfortante cuenco de fideos de trigo en caldo caliente, elaborado a fuego lento con base de cerdo y vegetales.",en:"Comforting bowl of wheat noodles in hot broth, slow-cooked with pork and vegetables.",pt:"Reconfortante tigela de macarrão de trigo em caldo quente, cozido lentamente com base de porco e legumes.",zh:"暖心热汤面，猪肉蔬菜熬制高汤，慢火细炖。"} },
  { p:"$7.200", img:"jiaozi", n:{es:"Jiaozi (餃子)",en:"Jiaozi (餃子)",pt:"Jiaozi (餃子)",zh:"餃子"}, d:{es:"Empanadillas chinas similares a las gyozas japonesas, rellenas de cerdo o vegetales, cocinadas al vapor. 5 unidades.",en:"Chinese dumplings similar to Japanese gyoza, filled with pork or vegetables, steamed. 5 pieces.",pt:"Pastéis chineses similares aos gyozas japoneses, recheados com porco ou legumes, cozidos no vapor. 5 unidades.",zh:"类似日式饺子，猪肉或蔬菜馅，蒸制而成。5个。"} },
  { p:"$4.200", img:"baozi", n:{es:"Baozi (包子)",en:"Baozi (包子)",pt:"Baozi (包子)",zh:"包子"}, d:{es:"Pancitos chinos cocidos al vapor, suaves y esponjosos, rellenos de cerdo, vegetales o dulces. 2 unidades.",en:"Soft, fluffy steamed Chinese buns filled with pork, vegetables or sweet filling. 2 pieces.",pt:"Pãezinhos chineses cozidos no vapor, macios e fofos, recheados com porco, legumes ou doce. 2 unidades.",zh:"松软蒸包，馅料可选猪肉、蔬菜或甜馅。2个。"} },
  { p:"$2.800", img:"bubbletea", n:{es:"Bubble Milk Tea (珍珠奶茶)",en:"Bubble Milk Tea (珍珠奶茶)",pt:"Bubble Milk Tea (珍珠奶茶)",zh:"珍珠奶茶"}, d:{es:"Té con leche y perlas de tapioca, combina té negro, verde o matcha con leche y un toque de dulzor. 1 unidad.",en:"Milk tea with tapioca pearls — black, green or matcha tea with milk and a touch of sweetness. 1 piece.",pt:"Chá com leite e pérolas de tapioca, combina chá preto, verde ou matcha com leite e um toque de doçura. 1 unidade.",zh:"珍珠奶茶，可选红茶、绿茶或抹茶配牛奶，微甜。1杯。"} }
]},

{ id:"compartir", name:{es:"Para Compartir",en:"To Share",pt:"Para Compartilhar",zh:"分享菜"}, items:[
  { star:true, p:"$14.990", img:"tablajackiechan", n:{es:"Tabla Jackie Chan",en:"Jackie Chan Platter",pt:"Tábua Jackie Chan",zh:"成龙拼盘"}, sub:{es:"2 a 3 personas",en:"For 2–3",pt:"2 a 3 pessoas",zh:"2-3人份"}, d:{es:"Pollo chicharrón, 5 aros de cebolla, 3 rollitos de queso, 4 mini empanadas de camarón mandarín y 250 g de papas fritas. Con salsa picante.",en:"Crispy fried chicken, 5 onion rings, 3 cheese rolls, 4 mini shrimp pastries and 250 g fries. Served with spicy sauce.",pt:"Frango crocante, 5 anéis de cebola, 3 rolinhos de queijo, 4 mini pastéis de camarão e 250 g de batata frita. Com molho picante.",zh:"炸鸡块、洋葱圈5个、芝士卷3个、迷你虾饺4个、薯条250克，配辣酱。"} },
  { p:"$9.990", img:"tablabrocolee", n:{es:"Tabla Broco Lee",en:"Broco Lee Platter",pt:"Tábua Broco Lee",zh:"李小龙西兰花拼盘"}, sub:{es:"2 personas",en:"For 2",pt:"2 pessoas",zh:"2人份"}, veg:true, d:{es:"Brócoli frito (500 g) y 250 g de papas fritas.",en:"Fried broccoli (500 g) and 250 g fries.",pt:"Brócolis frito (500 g) e 250 g de batata frita.",zh:"炸西兰花500克，薯条250克。"} },
  { p:"$9.990", img:"shaolinpapa", n:{es:"Shaolinpapa",en:"Shaolinpapa",pt:"Shaolinpapa",zh:"少林薯"}, sub:{es:"2 personas",en:"For 2",pt:"2 pessoas",zh:"2人份"}, d:{es:"Papas fritas doradas (500 g) con rodajas de salchicha frita, servidas con auténtica salsa huancaína.",en:"Golden fries (500 g) with fried sausage slices, served with authentic huancaína sauce.",pt:"Batata frita dourada (500 g) com rodelas de linguiça frita, servida com autêntico molho huancaína.",zh:"金黄薯条500克配炸香肠片，配秘鲁黄辣椒奶酪酱。"} },
  { p:"$8.500", img:"chorrillana", n:{es:"Chorrillana Individual",en:"Individual Chorrillana",pt:"Chorrillana Individual",zh:"个人份智利薯条肉盘"}, sub:{es:"1 persona",en:"For 1",pt:"1 pessoa",zh:"1人份"}, d:{es:"250 g de papas fritas crocantes y 150 g de carne mongoliana salteada, con cebolla y huevo.",en:"250 g crispy fries and 150 g stir-fried Mongolian beef, with onion and egg.",pt:"250 g de batata frita crocante e 150 g de carne mongoliana salteada, com cebola e ovo.",zh:"香脆薯条250克配蒙古牛肉150克，附洋葱和鸡蛋。"} },
  { p:"$7.590", img:"chorrillanavegetariana", n:{es:"Chorrillana Vegetariana Individual",en:"Individual Vegetarian Chorrillana",pt:"Chorrillana Vegetariana Individual",zh:"素食智利薯条盘（个人份）"}, sub:{es:"1 persona",en:"For 1",pt:"1 pessoa",zh:"1人份"}, veg:true, d:{es:"Papas fritas crocantes con verduras frescas salteadas y huevo vegano. Nutritiva y equilibrada.",en:"Crispy fries with fresh stir-fried vegetables and vegan egg. Nutritious and balanced.",pt:"Batata frita crocante com legumes frescos salteados e ovo vegano. Nutritiva e equilibrada.",zh:"香脆薯条配新鲜炒蔬菜和素食蛋，营养均衡。"} },
  { p:"$14.990", n:{es:"Chorrillana Mongoliana",en:"Mongolian Chorrillana",pt:"Chorrillana Mongoliana",zh:"蒙古智利薯条肉盘"} },
  { p:"$13.990", veg:true, n:{es:"Chorrillana Vegana",en:"Vegan Chorrillana",pt:"Chorrillana Vegana",zh:"素食智利薯条肉盘"} },
  { p:"$9.900", n:{es:"Copa de Oro",en:"Copa de Oro",pt:"Copa de Oro",zh:"金杯"} },
  { p:"$2.800", img:"wanglaoji", n:{es:"Wang Lao Ji (王老吉)",en:"Wang Lao Ji (王老吉)",pt:"Wang Lao Ji (王老吉)",zh:"王老吉"}, d:{es:"Clásico té de hierbas chino, refrescante y equilibrado, con más de 180 años de tradición.",en:"Classic Chinese herbal tea, refreshing and balanced, with over 180 years of tradition.",pt:"Chá de ervas chinês clássico, refrescante e equilibrado, com mais de 180 anos de tradição.",zh:"经典中式凉茶，清爽解腻，传承180余年。"} }
]},

{ id:"bebidas", name:{es:"Bebestibles",en:"Soft Drinks",pt:"Bebidas",zh:"饮品"}, items:[
  { p:"$2.800", n:{es:"Bebida 350 cc",en:"Soft Drink 350 cc",pt:"Refrigerante 350 cc",zh:"汽水350毫升"} },
  { p:"$4.500", n:{es:"Bebida 1500 cc",en:"Soft Drink 1500 cc",pt:"Refrigerante 1500 cc",zh:"汽水1500毫升"} },
  { p:"$3.700", n:{es:"Jugo Natural",en:"Fresh Juice",pt:"Suco Natural",zh:"鲜榨果汁"} },
  { p:"$4.200", n:{es:"Jugo Natural (Mango, Maracuyá, Chirimoya)",en:"Fresh Juice (Mango, Passion Fruit, Cherimoya)",pt:"Suco Natural (Manga, Maracujá, Cherimoia)",zh:"鲜榨果汁（芒果/百香果/番荔枝）"} },
  { p:"$2.700", n:{es:"Mineral Con/Sin Gas",en:"Sparkling/Still Water",pt:"Água com/sem Gás",zh:"矿泉水（含气/无气）"} }
]},

{ id:"cervezas", name:{es:"Cervezas",en:"Beer",pt:"Cervejas",zh:"啤酒"}, items:[
  { p:"$4.290", n:{es:"Cristal 1L",en:"Cristal 1L",pt:"Cristal 1L",zh:"Cristal 1升"} },
  { p:"$4.290", n:{es:"Royal 1L",en:"Royal 1L",pt:"Royal 1L",zh:"Royal 1升"} },
  { p:"$4.290", n:{es:"Heineken 1L",en:"Heineken 1L",pt:"Heineken 1L",zh:"喜力 1升"} },
  { p:"$3.400", n:{es:"Budweiser 330 cc",en:"Budweiser 330 cc",pt:"Budweiser 330 cc",zh:"百威 330毫升"} },
  { p:"$3.400", n:{es:"Royal 330 cc",en:"Royal 330 cc",pt:"Royal 330 cc",zh:"Royal 330毫升"} },
  { p:"$3.400", n:{es:"Austral 330 cc",en:"Austral 330 cc",pt:"Austral 330 cc",zh:"Austral 330毫升"} },
  { p:"$3.400", n:{es:"Heineken 330 cc",en:"Heineken 330 cc",pt:"Heineken 330 cc",zh:"喜力 330毫升"} }
]},

{ id:"cocteles", name:{es:"Coctelería",en:"Cocktails",pt:"Coquetéis",zh:"鸡尾酒"}, sub:{es:"Con patente de alcohol vigente",en:"Served under active liquor license",pt:"Servido com licença de bebidas alcoólicas",zh:"本店持有正规酒牌"}, items:[
  { star:true, p:"$4.500", n:{es:"Aperitivo Oriental",en:"Oriental Aperitif",pt:"Aperitivo Oriental",zh:"东方开胃酒"} },
  { p:"$3.500", n:{es:"Pisco Sour",en:"Pisco Sour",pt:"Pisco Sour",zh:"皮斯科酸酒"} },
  { p:"$6.700", n:{es:"Whisky Sour",en:"Whisky Sour",pt:"Whisky Sour",zh:"威士忌酸酒"} },
  { p:"$3.600", n:{es:"Vaina",en:"Vaina",pt:"Vaina",zh:"Vaina鸡尾酒"} },
  { p:"$4.500", n:{es:"Cuba Libre (Bacardi)",en:"Cuba Libre (Bacardi)",pt:"Cuba Libre (Bacardi)",zh:"自由古巴（百加得）"} },
  { p:"$5.000", n:{es:"Gin con Gin",en:"Gin & Gin",pt:"Gin com Gin",zh:"金酒双份"} },
  { p:"$4.790", n:{es:"Piscola",en:"Piscola",pt:"Piscola",zh:"皮斯科可乐"} },
  { p:"$6.500", n:{es:"Whisky (J. Walker)",en:"Whisky (J. Walker)",pt:"Whisky (J. Walker)",zh:"威士忌（尊尼获加）"} },
  { p:"$5.200", n:{es:"Clavo Oxidado",en:"Rusty Nail",pt:"Prego Enferrujado",zh:"生锈钉子"} },
  { p:"$4.900", n:{es:"Caipiriña",en:"Caipirinha",pt:"Caipirinha",zh:"凯匹林纳"} },
  { p:"$4.500", n:{es:"Mojito",en:"Mojito",pt:"Mojito",zh:"莫吉托"} },
  { p:"$3.990", n:{es:"Amaretto",en:"Amaretto",pt:"Amaretto",zh:"杏仁酒"} },
  { p:"$7.990", n:{es:"Ramazzotti",en:"Ramazzotti",pt:"Ramazzotti",zh:"Ramazzotti"} },
  { p:"$7.990", n:{es:"Aperol",en:"Aperol",pt:"Aperol",zh:"雅普罗"} }
]},

{ id:"vinos", name:{es:"Vinos",en:"Wine",pt:"Vinhos",zh:"葡萄酒"}, items:[
  { p:"$9.900", n:{es:"Pinto Undurraga (700cc)",en:"Pinto Undurraga (700cc)",pt:"Pinto Undurraga (700cc)",zh:"Pinto Undurraga（700毫升）"} },
  { p:"$9.290", n:{es:"Santa Rita 120 (700cc / $3.800 copa)",en:"Santa Rita 120 (700cc / $3,800 glass)",pt:"Santa Rita 120 (700cc / $3.800 taça)",zh:"Santa Rita 120（700毫升/单杯$3.800）"} },
  { p:"$9.290", n:{es:"Santa Carolina (700cc / $3.800 copa)",en:"Santa Carolina (700cc / $3,800 glass)",pt:"Santa Carolina (700cc / $3.800 taça)",zh:"Santa Carolina（700毫升/单杯$3.800）"} },
  { p:"$9.290", n:{es:"Santa Emiliana (700cc / $3.800 copa)",en:"Santa Emiliana (700cc / $3,800 glass)",pt:"Santa Emiliana (700cc / $3.800 taça)",zh:"Santa Emiliana（700毫升/单杯$3.800）"} },
  { p:"$12.990", n:{es:"Macul Don Luis (700cc)",en:"Macul Don Luis (700cc)",pt:"Macul Don Luis (700cc)",zh:"Macul Don Luis（700毫升）"} },
  { p:"$13.490", n:{es:"Casillero del Diablo (700cc)",en:"Casillero del Diablo (700cc)",pt:"Casillero del Diablo (700cc)",zh:"红魔鬼酒窖（700毫升）"} },
  { p:"$9.990", n:{es:"Gran Tarapacá (700cc)",en:"Gran Tarapacá (700cc)",pt:"Gran Tarapacá (700cc)",zh:"Gran Tarapacá（700毫升）"} }
]}

];
