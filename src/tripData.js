// 云南25天自驾游数据
// 2家庭 / 4大2小 / 带狗 / 飞机+租车自驾

const KUNMING_COORD = { lat: 25.0389, lng: 102.7183 }
const DALI_COORD = { lat: 25.6069, lng: 100.2679 }
const LIJIANG_COORD = { lat: 26.8721, lng: 100.2297 }
const SHANGRI_LA_COORD = { lat: 27.8256, lng: 99.7064 }
const XISHUANG_BANNA_COORD = { lat: 21.9981, lng: 100.7973 }

const PUBLIC_BASECAMP_LOCATION = '昆明长水国际机场，云南省昆明市'
const PUBLIC_BASECAMP_COORDINATES = KUNMING_COORD

export const TRIP_META = {
  title: '云南25天自驾亲子游',
  subtitle: 'Day 1 - Day 25',
  commandName: '云南自驾游指挥中心',
  airbnb: {
    name: '昆明长水机场取车',
    url: null,
    manualUrl: null,
    location: PUBLIC_BASECAMP_LOCATION,
    checkIn: '取车后出发',
    checkOut: '还车后返程',
    gateNote: 'Day1 昆明长水机场抵达，办理租车',
    parkingNote: '全程自驾，异地还车',
    directionsNote: '昆明→大理（3.5h）→丽江（2h）→香格里拉（3.5h）→西双版纳',
    lockNote: null,
    wifiNetwork: null,
    wifiPassword: null,
    hostName: null,
    coHostName: null,
    guestSummary: null,
    confirmationCode: null,
    vehicleFee: null,
  },
}

export const MAP_POINTS = [
  {
    id: 'kunming',
    label: '昆明',
    caption: '出发地 / 取车',
    familyId: 'all',
    focusDay: 'all',
    tone: 'success',
    position: KUNMING_COORD,
  },
  {
    id: 'beijing',
    label: '老张家',
    caption: '北京出发',
    familyId: 'zhang-family',
    focusDay: 'day1',
    tone: 'critical',
    position: { lat: 39.9042, lng: 116.4074 },
  },
  {
    id: 'shanghai',
    label: '老李家',
    caption: '上海出发',
    familyId: 'li-family',
    focusDay: 'day1',
    tone: 'warning',
    position: { lat: 31.2304, lng: 121.4737 },
  },
  {
    id: 'dali',
    label: '大理',
    caption: 'Day 3-7',
    familyId: 'all',
    focusDay: 'all',
    tone: 'info',
    position: DALI_COORD,
  },
  {
    id: 'lijiang',
    label: '丽江',
    caption: 'Day 8-14',
    familyId: 'all',
    focusDay: 'all',
    tone: 'info',
    position: LIJIANG_COORD,
  },
  {
    id: 'shangri-la',
    label: '香格里拉',
    caption: 'Day 15-18',
    familyId: 'all',
    focusDay: 'all',
    tone: 'violet',
    position: SHANGRI_LA_COORD,
  },
  {
    id: 'xishuangbanna',
    label: '西双版纳',
    caption: 'Day 19-24',
    familyId: 'all',
    focusDay: 'all',
    tone: 'success',
    position: XISHUANG_BANNA_COORD,
  },
]

export const MAP_ROUTES = [
  {
    id: 'route-kunming-dali',
    familyId: 'all',
    focusDay: 'day3',
    tone: 'success',
    path: [KUNMING_COORD, { lat: 25.32, lng: 101.49 }, DALI_COORD],
  },
  {
    id: 'route-dali-lijiang',
    familyId: 'all',
    focusDay: 'day8',
    tone: 'info',
    path: [DALI_COORD, { lat: 26.35, lng: 100.15 }, LIJIANG_COORD],
  },
  {
    id: 'route-lijiang-shangrila',
    familyId: 'all',
    focusDay: 'day15',
    tone: 'violet',
    path: [LIJIANG_COORD, { lat: 27.35, lng: 99.97 }, SHANGRI_LA_COORD],
  },
  {
    id: 'route-shangrila-xishuangbanna',
    familyId: 'all',
    focusDay: 'day19',
    tone: 'success',
    path: [SHANGRI_LA_COORD, XISHUANG_BANNA_COORD],
  },
]

export const MAP_FACILITIES = [
  {
    id: 'shilin',
    label: '石林景区',
    caption: 'Day 1 游览',
    category: 'activity',
    position: { lat: 24.8281, lng: 103.3194 },
  },
  {
    id: 'dianchi',
    label: '滇池',
    caption: 'Day 2 游览',
    category: 'activity',
    position: { lat: 24.8607, lng: 102.8334 },
  },
  {
    id: 'erhai',
    label: '洱海',
    caption: '环湖自驾',
    category: 'activity',
    position: { lat: 25.6158, lng: 100.4145 },
  },
  {
    id: 'yulong-snow',
    label: '玉龙雪山',
    caption: 'Day 9-10',
    category: 'activity',
    position: { lat: 27.0889, lng: 100.1755 },
  },
  {
    id: 'lugu-lake',
    label: '泸沽湖',
    caption: 'Day 11-12',
    category: 'activity',
    position: { lat: 27.6909, lng: 100.7943 },
  },
  {
    id: 'tiger-leaping-gorge',
    label: '虎跳峡',
    caption: 'Day 13-14',
    category: 'activity',
    position: { lat: 27.2267, lng: 100.0611 },
  },
  {
    id: 'pudacuo',
    label: '普达措国家公园',
    caption: 'Day 16',
    category: 'activity',
    position: { lat: 27.7454, lng: 99.9825 },
  },
  {
    id: 'songzalin',
    label: '松赞林寺',
    caption: 'Day 17-18',
    category: 'activity',
    position: { lat: 27.8117, lng: 99.7089 },
  },
  {
    id: 'wild-elephant-valley',
    label: '野象谷',
    caption: 'Day 22',
    category: 'activity',
    position: { lat: 21.9226, lng: 100.8611 },
  },
  {
    id: 'dai-garden',
    label: '傣族园',
    caption: 'Day 23-24',
    category: 'activity',
    position: { lat: 21.9089, lng: 100.7933 },
  },
]

export const NAV_ITEMS = [
  { id: 'itinerary', label: '行程' },
  { id: 'stay', label: '住宿' },
  { id: 'meals', label: '餐饮' },
  { id: 'activities', label: '活动' },
  { id: 'expenses', label: '费用' },
  { id: 'families', label: '家庭' },
]

export const DAYS = [
  { id: 'day1', shortLabel: 'Day 1', title: '昆明抵达', weather: '晴', temperature: '26°C', caution: '低' },
  { id: 'day2', shortLabel: 'Day 2', title: '石林 · 滇池', weather: '晴', temperature: '28°C', caution: '低' },
  { id: 'day3', shortLabel: 'Day 3', title: '昆明→大理', weather: '多云', temperature: '24°C', caution: '中' },
  { id: 'day4', shortLabel: 'Day 4', title: '大理·洱海', weather: '晴', temperature: '25°C', caution: '低' },
  { id: 'day5', shortLabel: 'Day 5', title: '大理古城', weather: '晴', temperature: '26°C', caution: '低' },
  { id: 'day6', shortLabel: 'Day 6', title: '双廊·喜洲', weather: '多云', temperature: '24°C', caution: '低' },
  { id: 'day7', shortLabel: 'Day 7', title: '苍山游览', weather: '阴', temperature: '22°C', caution: '低' },
  { id: 'day8', shortLabel: 'Day 8', title: '大理→丽江', weather: '晴', temperature: '25°C', caution: '低' },
  { id: 'day9', shortLabel: 'Day 9', title: '玉龙雪山', weather: '晴', temperature: '18°C', caution: '中' },
  { id: 'day10', shortLabel: 'Day 10', title: '蓝月谷·冰川公园', weather: '晴', temperature: '16°C', caution: '中' },
  { id: 'day11', shortLabel: 'Day 11', title: '丽江→泸沽湖', weather: '多云', temperature: '20°C', caution: '中' },
  { id: 'day12', shortLabel: 'Day 12', title: '泸沽湖环湖', weather: '晴', temperature: '22°C', caution: '低' },
  { id: 'day13', shortLabel: 'Day 13', title: '泸沽湖→虎跳峡', weather: '晴', temperature: '24°C', caution: '中' },
  { id: 'day14', shortLabel: 'Day 14', title: '虎跳峡→丽江', weather: '晴', temperature: '26°C', caution: '低' },
  { id: 'day15', shortLabel: 'Day 15', title: '丽江→香格里拉', weather: '多云', temperature: '20°C', caution: '中' },
  { id: 'day16', shortLabel: 'Day 16', title: '普达措国家公园', weather: '阴', temperature: '15°C', caution: '中' },
  { id: 'day17', shortLabel: 'Day 17', title: '松赞林寺', weather: '晴', temperature: '18°C', caution: '低' },
  { id: 'day18', shortLabel: 'Day 18', title: '香格里拉休整', weather: '晴', temperature: '20°C', caution: '低' },
  { id: 'day19', shortLabel: 'Day 19', title: '香格里拉→西双版纳', weather: '晴', temperature: '30°C', caution: '低' },
  { id: 'day20', shortLabel: 'Day 20', title: '西双版纳热带雨林', weather: '阵雨', temperature: '28°C', caution: '低' },
  { id: 'day21', shortLabel: 'Day 21', title: '中科院热带植物园', weather: '晴', temperature: '30°C', caution: '低' },
  { id: 'day22', shortLabel: 'Day 22', title: '野象谷', weather: '阴', temperature: '28°C', caution: '中' },
  { id: 'day23', shortLabel: 'Day 23', title: '傣族园', weather: '晴', temperature: '32°C', caution: '低' },
  { id: 'day24', shortLabel: 'Day 24', title: '告庄·星光夜市', weather: '晴', temperature: '30°C', caution: '低' },
  { id: 'day25', shortLabel: 'Day 25', title: '返程', weather: '晴', temperature: '28°C', caution: '低' },
]

export const TIME_SLOTS = ['00', '06', '12', '18']

export const INITIAL_FAMILIES = [
  {
    id: 'zhang-family',
    name: '老张家',
    origin: '北京',
    shortOrigin: '北京',
    status: 'Transit',
    eta: 'Day 1 14:00',
    driveTime: '飞行3h + 取车',
    headcount: '2成人 + 1小孩 + 1狗',
    vehicle: 'SUV（租）',
    responsibility: '行程总负责 + 摄影',
    readiness: 90,
    routeSummary: '北京飞昆明，落地后与老李家汇合',
    checklist: [
      { id: 'zhang-flight', label: '机票已订（国航 CA1234）', done: true },
      { id: 'zhang-car', label: '租车订单确认', done: true },
      { id: 'zhang-hotel', label: '全程酒店预订', done: true },
      { id: 'zhang-dog', label: '宠物免疫证明 + 航空箱', done: true },
      { id: 'zhang-bag', label: '小孩行李打包', done: false },
    ],
  },
  {
    id: 'li-family',
    name: '老李家',
    origin: '上海',
    shortOrigin: '上海',
    status: 'Transit',
    eta: 'Day 1 15:30',
    driveTime: '飞行2.5h + 取车',
    headcount: '2成人 + 1小孩 + 1狗',
    vehicle: 'SUV（租）',
    responsibility: '财务总管 + 餐饮安排',
    readiness: 85,
    routeSummary: '上海飞昆明，比老张家晚到1.5小时',
    checklist: [
      { id: 'li-flight', label: '机票已订（东航 MU5678）', done: true },
      { id: 'li-car', label: 'SUV加装儿童座椅', done: true },
      { id: 'li-food', label: '零食 + 车载冰箱准备', done: true },
      { id: 'li-dog', label: '宠物用品包', done: true },
      { id: 'li-medicine', label: '常备药品包', done: false },
    ],
  },
]

export const ITINERARY_ROWS = [
  {
    id: 'travel',
    label: '赶路',
    segments: [
      { id: 'kunming-dali', familyId: 'all', start: 0, span: 2, color: 'success', label: '昆明→大理' },
      { id: 'dali-lijiang', familyId: 'all', start: 3, span: 2, color: 'info', label: '大理→丽江' },
      { id: 'lijiang-shangrila', familyId: 'all', start: 7, span: 2, color: 'violet', label: '丽江→香格里拉' },
      { id: 'shangrila-xishuang', familyId: 'all', start: 12, span: 2, color: 'success', label: '香格里拉→版纳' },
    ],
  },
  {
    id: 'activities',
    label: '活动',
    segments: [
      { id: 'kunming-attractions', start: 0.5, span: 2, color: 'info', label: '昆明游览' },
      { id: 'dali-attractions', start: 2.5, span: 4, color: 'info', label: '大理环洱海' },
      { id: 'lijiang-attractions', start: 5.5, span: 5, color: 'info', label: '丽江深度游' },
      { id: 'shangrila-attractions', start: 9.5, span: 4, color: 'violet', label: '香格里拉秘境' },
      { id: 'xishuang-attractions', start: 14.5, span: 5, color: 'success', label: '西双版纳热带' },
    ],
  },
  {
    id: 'support',
    label: '后勤',
    segments: [
      { id: 'checkin-kunming', start: 0, span: 0.5, color: 'muted', label: '昆明取车' },
      { id: 'hotel-dali', start: 3, span: 0.5, color: 'muted', label: '大理入住' },
      { id: 'hotel-lijiang', start: 5, span: 0.5, color: 'muted', label: '丽江入住' },
      { id: 'hotel-shangrila', start: 9, span: 0.5, color: 'muted', label: '香格里拉入住' },
      { id: 'hotel-xishuang', start: 14, span: 0.5, color: 'muted', label: '版纳入住' },
    ],
  },
]

export const INITIAL_MEALS = [
  { id: 'meal-kunming-1', day: 'Day 1', meal: '昆明机场简餐', owner: '各自', status: 'Transit', note: '落地后简单补给，不耽误行程' },
  { id: 'meal-kunming-2', day: 'Day 2', meal: '昆明·福照楼（过桥米线）', owner: '老李家', status: 'Assigned', note: '正宗云南米线，地道本地菜' },
  { id: 'meal-dali-1', day: 'Day 3', meal: '大理·段氏私房菜', owner: '老张家', status: 'Assigned', note: '白族特色菜，古城附近' },
  { id: 'meal-dali-2', day: 'Day 4', meal: '双廊·洱海鱼庄', owner: '共享', status: 'Assigned', note: '环湖途中小憩，品尝洱海鱼' },
  { id: 'meal-dali-3', day: 'Day 5', meal: '大理古城·乳扇店', owner: 'Walk-in', status: 'Assigned', note: '古城漫游，随性觅食' },
  { id: 'meal-lijiang-1', day: 'Day 8', meal: '丽江·腊排骨火锅', owner: '老李家', status: 'Assigned', note: '纳西族特色，实惠美味' },
  { id: 'meal-lijiang-2', day: 'Day 9', meal: '玉龙雪山脚下简餐', owner: '共享', status: 'Assigned', note: '自带干粮，节省时间' },
  { id: 'meal-lijiang-3', day: 'Day 11', meal: '泸沽湖·摩梭家常菜', owner: 'Walk-in', status: 'Assigned', note: '湖边村落，品尝当地风味' },
  { id: 'meal-shangrila-1', day: 'Day 15', meal: '香格里拉·藏式火锅', owner: '老张家', status: 'Assigned', note: '高海拔进补，暖身首选' },
  { id: 'meal-shangrila-2', day: 'Day 17', meal: '松赞林寺附近素斋', owner: 'Walk-in', status: 'Assigned', note: '寺院周边素食，清淡养胃' },
  { id: 'meal-xishuang-1', day: 'Day 20', meal: '版纳·傣族烧烤', owner: '共享', status: 'Assigned', note: '热带夜晚，傣味烧烤' },
  { id: 'meal-xishuang-2', day: 'Day 24', meal: '告庄·星光夜市', owner: 'Walk-in', status: 'Assigned', note: '最后一天，逛夜市尝美食' },
]

export const INITIAL_EXPENSES = [
  { id: 'flights', label: '往返机票（4大2小）', payer: '老张家', amount: 24000, split: '均摊', settled: false },
  { id: 'cars', label: '租车费用（25天 SUV）', payer: '老李家', amount: 12500, split: '均摊', settled: false },
  { id: 'hotels', label: '住宿费用（全程民宿+酒店）', payer: '老李家', amount: 18000, split: '均摊', settled: false },
  { id: 'tickets', label: '门票（石林/玉龙雪山/普达措等）', payer: '老张家', amount: 6000, split: '均摊', settled: false },
  { id: 'food', label: '餐饮预算', payer: '轮流', amount: 8000, split: '均摊', settled: false },
  { id: 'gas', label: '油费 + 高速费', payer: '老张家', amount: 3500, split: '均摊', settled: false },
  { id: 'dogs', label: '宠物相关（航空箱 + 宠物酒店）', payer: '老李家', amount: 1200, split: '均摊', settled: false },
]

export const ACTIVITIES = [
  {
    id: 'kunming-city',
    title: '昆明游览',
    status: 'Go',
    window: 'Day 1-2',
    description: '石林（世界自然遗产）、滇池（红嘴鸥）、昆明老街',
    backup: '如石林人太多，改为云南民族村',
  },
  {
    id: 'dali-erhai',
    title: '大理·环洱海',
    status: 'Go',
    window: 'Day 3-7',
    description: '洱海自驾、双廊古镇、喜洲古镇、苍山索道、三塔寺',
    backup: '苍山如天气不佳改为古城深度游',
  },
  {
    id: 'lijiang-old-town',
    title: '丽江深度游',
    status: 'Go',
    window: 'Day 8-14',
    description: '丽江古城、束河古镇、玉龙雪山、蓝月谷、冰川公园、泸沽湖环湖、虎跳峡徒步',
    backup: '玉龙雪山大索道停运则改游云杉坪',
  },
  {
    id: 'shangri-la',
    title: '香格里拉',
    status: 'Watch',
    window: 'Day 15-18',
    description: '普达措国家公园、松赞林寺、独克宗古城、纳帕海',
    backup: '高海拔地区注意保暖，如有高原反应缩短行程',
  },
  {
    id: 'xishuangbanna',
    title: '西双版纳热带之旅',
    status: 'Go',
    window: 'Day 19-24',
    description: '热带雨林、中科院植物园、野象谷、傣族园、告庄夜市',
    backup: '野象谷如无野象改去基诺山寨',
  },
]

export const STAY_DETAILS = {
  commandSummary: '全程分段住宿，提前1天确认入住',
  houseOps: [
    '每站到达当天18:00前确认次日住宿',
    '宠物需提前告知民宿，部分不接受宠物',
    '高原地区（香格里拉）注意保暖，备好抗高原反应药品',
    '版纳潮湿炎热，做好防蚊虫措施',
  ],
  rooms: [
    { label: 'Day 1-2 昆明', assignment: '老张家+老李家（两室民宿）' },
    { label: 'Day 3-7 大理', assignment: '老张家+老李家（洱海海景民宿）' },
    { label: 'Day 8-14 丽江', assignment: '老张家+老李家（丽江古城客栈）' },
    { label: 'Day 15-18 香格里拉', assignment: '老张家+老李家（藏式酒店）' },
    { label: 'Day 19-24 西双版纳', assignment: '老张家+老李家（告庄民宿）' },
  ],
}

export const INITIAL_NOTES = {
  itinerary: '主线：昆明→大理（3.5h）→丽江（2h）→香格里拉（3.5h）→西双版纳。全程约25天，每天行驶不超过4小时。',
  stay: '宠物友好民宿提前沟通，古城周边停车不便选择含停车位的住宿。',
  meals: '两家人轮流做东，每天预算控制在300-500元。版纳夜市敞开吃！',
  activities: '玉龙雪山大索道需提前3天预约；泸沽湖适合带孩子慢玩2天；虎跳峡注意安全。',
  expenses: '总预算约8-10万，人均2-2.5万。费用AA，每5天结算一次。',
  families: '老张家负责行程导航，老李家负责财务和餐饮。两娃轮流坐副驾后排，狗固定在后尾箱。',
}
