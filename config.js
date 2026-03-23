const METRO_CONFIG = {
    // ==========================================
    // 1. 中和新蘆線 (Orange Line)
    // ==========================================
    "orange": {
        name: "中和新蘆線",
        color: "#f8b61c",
        directions: [
            { 
                id: "north", 
                label: "往 迴龍 / 蘆洲", 
                sources: {
                    weekday: ["MRT_DATA_HUILONG_WD", "MRT_DATA_LUZHOU_WD"],
                    weekend: ["MRT_DATA_HUILONG_WE", "MRT_DATA_LUZHOU_WE"]
                },
                excludeStations: ["迴龍", "蘆洲"]
            },
            { 
                id: "south", 
                label: "往 南勢角", 
                sources: {
                    weekday: ["MRT_DATA_SOUTH_WD"],
                    weekend: ["MRT_DATA_SOUTH_WE"]
                },
                excludeStations: ["南勢角"]
            }
        ],
        stations: [
            { name: "南勢角", id: "O01", lat: 24.9920, lon: 121.5090, branch: 'common' },
            { name: "景安", id: "O02", lat: 24.9934, lon: 121.5050, branch: 'common' },
            { name: "永安市場", id: "O03", lat: 25.0030, lon: 121.5113, branch: 'common' },
            { name: "頂溪", id: "O04", lat: 25.0138, lon: 121.5153, branch: 'common' },
            { name: "古亭", id: "O05", lat: 25.0263, lon: 121.5229, branch: 'common' },
            { name: "東門", id: "O06", lat: 25.0338, lon: 121.5287, branch: 'common' },
            { name: "忠孝新生", id: "O07", lat: 25.0423, lon: 121.5329, branch: 'common' },
            { name: "松江南京", id: "O08", lat: 25.0518, lon: 121.5334, branch: 'common' },
            { name: "行天宮", id: "O09", lat: 25.0599, lon: 121.5334, branch: 'common' },
            { name: "中山國小", id: "O10", lat: 25.0635, lon: 121.5266, branch: 'common' },
            { name: "民權西路", id: "O11", lat: 25.0620, lon: 121.5193, branch: 'common' },
            { name: "大橋頭", id: "O12", lat: 25.0635, lon: 121.5117, branch: 'common' },
            // 迴龍線
            { name: "台北橋", id: "O13", lat: 25.0634, lon: 121.5034, branch: 'huilong' },
            { name: "菜寮", id: "O14", lat: 25.0606, lon: 121.4927, branch: 'huilong' },
            { name: "三重", id: "O15", lat: 25.0555, lon: 121.4837, branch: 'huilong' },
            { name: "先嗇宮", id: "O16", lat: 25.0456, lon: 121.4722, branch: 'huilong' },
            { name: "頭前庄", id: "O17", lat: 25.0401, lon: 121.4604, branch: 'huilong' },
            { name: "新莊", id: "O18", lat: 25.0362, lon: 121.4524, branch: 'huilong' },
            { name: "輔大", id: "O19", lat: 25.0326, lon: 121.4357, branch: 'huilong' },
            { name: "丹鳳", id: "O20", lat: 25.0287, lon: 121.4223, branch: 'huilong' },
            { name: "迴龍", id: "O21", lat: 25.0219, lon: 121.4111, branch: 'huilong' },
            // 蘆洲線
            { name: "三重國小", id: "O50", lat: 25.0702, lon: 121.4967, branch: 'luzhou' },
            { name: "三和國中", id: "O51", lat: 25.0768, lon: 121.4864, branch: 'luzhou' },
            { name: "徐匯中學", id: "O52", lat: 25.0809, lon: 121.4805, branch: 'luzhou' },
            { name: "三民高中", id: "O53", lat: 25.0853, lon: 121.4724, branch: 'luzhou' },
            { name: "蘆洲", id: "O54", lat: 25.0914, lon: 121.4645, branch: 'luzhou' }
        ]
    },

    // ==========================================
    // 2. 淡水信義線 (Red Line)
    // ==========================================
    "red": {
        name: "淡水信義線",
        color: "#e3002c",
        directions: [
            { 
                id: "north", 
                label: "往 淡水", 
                sources: {
                    weekday: ["MRT_DATA_TAMSUI_WD"],
                    weekend: ["MRT_DATA_TAMSUI_WE"]
                },
                excludeStations: ["淡水"]
            },
            { 
                id: "south", 
                label: "往 象山", 
                sources: {
                    weekday: ["MRT_DATA_XIANGSHAN_WD"],
                    weekend: ["MRT_DATA_XIANGSHAN_WE"]
                },
                excludeStations: ["象山"]
            }
        ],
        stations: [
            { name: "象山", id: "R02", lat: 25.0327, lon: 121.5707, branch: 'common' },
            { name: "台北101/世貿", id: "R03", lat: 25.0328, lon: 121.5638, branch: 'common' },
            { name: "信義安和", id: "R04", lat: 25.0332, lon: 121.5543, branch: 'common' },
            { name: "大安", id: "R05", lat: 25.0329, lon: 121.5435, branch: 'common' },
            { name: "大安森林公園", id: "R06", lat: 25.0333, lon: 121.5349, branch: 'common' },
            { name: "東門", id: "R07", lat: 25.0338, lon: 121.5287, branch: 'common' },
            { name: "中正紀念堂", id: "R08", lat: 25.0352, lon: 121.5183, branch: 'common' },
            { name: "台大醫院", id: "R09", lat: 25.0413, lon: 121.5160, branch: 'common' },
            { name: "台北車站", id: "R10", lat: 25.0463, lon: 121.5175, branch: 'common' },
            { name: "中山", id: "R11", lat: 25.0527, lon: 121.5204, branch: 'common' },
            { name: "雙連", id: "R12", lat: 25.0578, lon: 121.5205, branch: 'common' },
            { name: "民權西路", id: "R13", lat: 25.0620, lon: 121.5193, branch: 'common' },
            { name: "圓山", id: "R14", lat: 25.0716, lon: 121.5201, branch: 'common' },
            { name: "劍潭", id: "R15", lat: 25.0838, lon: 121.5249, branch: 'common' },
            { name: "士林", id: "R16", lat: 25.0933, lon: 121.5262, branch: 'common' },
            { name: "芝山", id: "R17", lat: 25.1026, lon: 121.5226, branch: 'common' },
            { name: "明德", id: "R18", lat: 25.1098, lon: 121.5183, branch: 'common' },
            { name: "石牌", id: "R19", lat: 25.1153, lon: 121.5152, branch: 'common' },
            { name: "唭哩岸", id: "R20", lat: 25.1207, lon: 121.5065, branch: 'common' },
            { name: "奇岩", id: "R21", lat: 25.1254, lon: 121.5011, branch: 'common' },
            { name: "北投", id: "R22", lat: 25.1318, lon: 121.4986, branch: 'common' },
            { name: "復興崗", id: "R23", lat: 25.1375, lon: 121.4855, branch: 'common' },
            { name: "忠義", id: "R24", lat: 25.1309, lon: 121.4727, branch: 'common' },
            { name: "關渡", id: "R25", lat: 25.1256, lon: 121.4671, branch: 'common' },
            { name: "竹圍", id: "R26", lat: 25.1369, lon: 121.4594, branch: 'common' },
            { name: "紅樹林", id: "R27", lat: 25.1540, lon: 121.4589, branch: 'common' },
            { name: "淡水", id: "R28", lat: 25.1678, lon: 121.4456, branch: 'common' }
        ]
    },

    // ==========================================
    // 3. 松山新店線 (Green Line)
    // ==========================================
    "green": {
        name: "松山新店線",
        color: "#008659",
        directions: [
            { 
                id: "north", 
                label: "往 松山", 
                sources: {
                    weekday: ["MRT_DATA_SONGSHAN_WD"],
                    weekend: ["MRT_DATA_SONGSHAN_WE"]
                },
                excludeStations: ["松山"]
            },
            { 
                id: "south", 
                label: "往 新店", 
                sources: {
                    weekday: ["MRT_DATA_XINDIAN_WD"],
                    weekend: ["MRT_DATA_XINDIAN_WE"]
                },
                excludeStations: ["新店"]
            }
        ],
        stations: [
            { name: "新店", id: "G01", lat: 24.9578, lon: 121.5375, branch: 'common' },
            { name: "新店區公所", id: "G02", lat: 24.9673, lon: 121.5414, branch: 'common' },
            { name: "七張", id: "G03", lat: 24.9752, lon: 121.5432, branch: 'common' },
            { name: "大坪林", id: "G04", lat: 24.9829, lon: 121.5413, branch: 'common' },
            { name: "景美", id: "G05", lat: 24.9931, lon: 121.5406, branch: 'common' },
            { name: "萬隆", id: "G06", lat: 25.0016, lon: 121.5393, branch: 'common' },
            { name: "公館", id: "G07", lat: 25.0135, lon: 121.5342, branch: 'common' },
            { name: "台電大樓", id: "G08", lat: 25.0197, lon: 121.5298, branch: 'common' },
            { name: "古亭", id: "G09", lat: 25.0263, lon: 121.5229, branch: 'common' },
            { name: "中正紀念堂", id: "G10", lat: 25.0352, lon: 121.5183, branch: 'common' },
            { name: "小南門", id: "G11", lat: 25.0355, lon: 121.5106, branch: 'common' },
            { name: "西門", id: "G12", lat: 25.0422, lon: 121.5082, branch: 'common' },
            { name: "北門", id: "G13", lat: 25.0494, lon: 121.5113, branch: 'common' },
            { name: "中山", id: "G14", lat: 25.0527, lon: 121.5204, branch: 'common' },
            { name: "松江南京", id: "G15", lat: 25.0518, lon: 121.5334, branch: 'common' },
            { name: "南京復興", id: "G16", lat: 25.0523, lon: 121.5440, branch: 'common' },
            { name: "台北小巨蛋", id: "G17", lat: 25.0518, lon: 121.5517, branch: 'common' },
            { name: "南京三民", id: "G18", lat: 25.0512, lon: 121.5606, branch: 'common' },
            { name: "松山", id: "G19", lat: 25.0501, lon: 121.5777, branch: 'common' }
        ]
    },

    // ==========================================
    // 4. 板南線 (Blue Line)
    // ==========================================
    "blue": {
        name: "板南線",
        color: "#0070bd",
        directions: [
            { 
                id: "east", 
                label: "往 南港展覽館", 
                sources: {
                    weekday: ["MRT_DATA_NANGANG_WD"],
                    weekend: ["MRT_DATA_NANGANG_WE"]
                },
                excludeStations: ["南港展覽館"]
            },
            { 
                id: "west", 
                label: "往 頂埔 / 亞東", 
                sources: {
                    weekday: ["MRT_DATA_DINGPU_WD"],
                    weekend: ["MRT_DATA_DINGPU_WE"]
                },
                excludeStations: ["頂埔"]
            }
        ],
        stations: [
            { name: "頂埔", id: "BL01", lat: 24.9593, lon: 121.4190, branch: 'common' },
            { name: "永寧", id: "BL02", lat: 24.9667, lon: 121.4360, branch: 'common' },
            { name: "土城", id: "BL03", lat: 24.9731, lon: 121.4444, branch: 'common' },
            { name: "海山", id: "BL04", lat: 24.9853, lon: 121.4488, branch: 'common' },
            { name: "亞東醫院", id: "BL05", lat: 24.9984, lon: 121.4525, branch: 'common' },
            { name: "府中", id: "BL06", lat: 25.0086, lon: 121.4594, branch: 'common' },
            { name: "板橋", id: "BL07", lat: 25.0140, lon: 121.4638, branch: 'common' },
            { name: "新埔", id: "BL08", lat: 25.0237, lon: 121.4684, branch: 'common' },
            { name: "江子翠", id: "BL09", lat: 25.0300, lon: 121.4725, branch: 'common' },
            { name: "龍山寺", id: "BL10", lat: 25.0354, lon: 121.4997, branch: 'common' },
            { name: "西門", id: "BL11", lat: 25.0422, lon: 121.5082, branch: 'common' },
            { name: "台北車站", id: "BL12", lat: 25.0463, lon: 121.5175, branch: 'common' },
            { name: "善導寺", id: "BL13", lat: 25.0447, lon: 121.5233, branch: 'common' },
            { name: "忠孝新生", id: "BL14", lat: 25.0423, lon: 121.5329, branch: 'common' },
            { name: "忠孝復興", id: "BL15", lat: 25.0416, lon: 121.5438, branch: 'common' },
            { name: "忠孝敦化", id: "BL16", lat: 25.0415, lon: 121.5505, branch: 'common' },
            { name: "國父紀念館", id: "BL17", lat: 25.0414, lon: 121.5579, branch: 'common' },
            { name: "市政府", id: "BL18", lat: 25.0411, lon: 121.5654, branch: 'common' },
            { name: "永春", id: "BL19", lat: 25.0407, lon: 121.5763, branch: 'common' },
            { name: "後山埤", id: "BL20", lat: 25.0450, lon: 121.5830, branch: 'common' },
            { name: "昆陽", id: "BL21", lat: 25.0507, lon: 121.5932, branch: 'common' },
            { name: "南港", id: "BL22", lat: 25.0521, lon: 121.6068, branch: 'common' },
            { name: "南港展覽館", id: "BL23", lat: 25.0553, lon: 121.6175, branch: 'common' }
        ]
    },

    // ==========================================
    // 5. 文湖線 (Brown Line)
    // ==========================================
    "brown": {
        name: "文湖線",
        color: "#c48c31",
        directions: [
            { 
                id: "south", 
                label: "往 動物園", 
                sources: {
                    weekday: ["MRT_DATA_ZOO_WD"],
                    weekend: ["MRT_DATA_ZOO_WE"]
                },
                excludeStations: ["動物園"]
            },
            { 
                id: "north", 
                label: "往 南港展覽館", 
                sources: {
                    // 注意：這裡有加 BR 以區別板南線
                    weekday: ["MRT_DATA_NANGANG_BR_WD"],
                    weekend: ["MRT_DATA_NANGANG_BR_WE"]
                },
                excludeStations: ["南港展覽館"]
            }
        ],
        stations: [
            { name: "動物園", id: "BR01", lat: 24.9982, lon: 121.5793, branch: 'common' },
            { name: "木柵", id: "BR02", lat: 24.9982, lon: 121.5731, branch: 'common' },
            { name: "萬芳社區", id: "BR03", lat: 24.9986, lon: 121.5681, branch: 'common' },
            { name: "萬芳醫院", id: "BR04", lat: 24.9994, lon: 121.5581, branch: 'common' },
            { name: "辛亥", id: "BR05", lat: 25.0055, lon: 121.5571, branch: 'common' },
            { name: "麟光", id: "BR06", lat: 25.0185, lon: 121.5587, branch: 'common' },
            { name: "六張犁", id: "BR07", lat: 25.0238, lon: 121.5531, branch: 'common' },
            { name: "科技大樓", id: "BR08", lat: 25.0261, lon: 121.5436, branch: 'common' },
            { name: "大安", id: "BR09", lat: 25.0329, lon: 121.5435, branch: 'common' },
            { name: "忠孝復興", id: "BR10", lat: 25.0416, lon: 121.5438, branch: 'common' },
            { name: "南京復興", id: "BR11", lat: 25.0523, lon: 121.5440, branch: 'common' },
            { name: "中山國中", id: "BR12", lat: 25.0608, lon: 121.5442, branch: 'common' },
            { name: "松山機場", id: "BR13", lat: 25.0628, lon: 121.5516, branch: 'common' },
            { name: "大直", id: "BR14", lat: 25.0794, lon: 121.5469, branch: 'common' },
            { name: "劍南路", id: "BR15", lat: 25.0848, lon: 121.5556, branch: 'common' },
            { name: "西湖", id: "BR16", lat: 25.0821, lon: 121.5673, branch: 'common' },
            { name: "港墘", id: "BR17", lat: 25.0800, lon: 121.5752, branch: 'common' },
            { name: "文德", id: "BR18", lat: 25.0785, lon: 121.5848, branch: 'common' },
            { name: "內湖", id: "BR19", lat: 25.0836, lon: 121.5944, branch: 'common' },
            { name: "大湖公園", id: "BR20", lat: 25.0838, lon: 121.6021, branch: 'common' },
            { name: "葫洲", id: "BR21", lat: 25.0728, lon: 121.6071, branch: 'common' },
            { name: "東湖", id: "BR22", lat: 25.0672, lon: 121.6114, branch: 'common' },
            { name: "南港軟體園區", id: "BR23", lat: 25.0599, lon: 121.6159, branch: 'common' },
            { name: "南港展覽館", id: "BR24", lat: 25.0553, lon: 121.6175, branch: 'common' }
        ]
    },

    // ==========================================
    // 6. 環狀線 (Yellow Line / Circular Line)
    // ==========================================
    "yellow": {
        name: "環狀線",
        color: "#e6cc26ff", 
        directions: [
            { 
                id: "east", 
                label: "往 大坪林", 
                sources: {
                    weekday: ["MRT_DATA_DAPINGLIN_WD"],
                    weekend: ["MRT_DATA_DAPINGLIN_WE"]
                },
                excludeStations: ["大坪林"]
            },
            { 
                id: "west", 
                label: "往 新北產業園區", 
                sources: {
                    weekday: ["MRT_DATA_NTP_PARK_WD"],
                    weekend: ["MRT_DATA_NTP_PARK_WE"]
                },
                excludeStations: ["新北產業園區"]
            }
        ],
        stations: [
            { name: "大坪林", id: "Y07", lat: 24.9831, lon: 121.5416, branch: 'common' },
            { name: "十四張", id: "Y08", lat: 24.9765, lon: 121.5273, branch: 'common' },
            { name: "秀朗橋", id: "Y09", lat: 24.9926, lon: 121.5235, branch: 'common' },
            { name: "景平", id: "Y10", lat: 24.9954, lon: 121.5126, branch: 'common' },
            { name: "景安", id: "Y11", lat: 24.9934, lon: 121.5052, branch: 'common' },
            { name: "中和", id: "Y12", lat: 25.0022, lon: 121.4960, branch: 'common' },
            { name: "橋和", id: "Y13", lat: 25.0062, lon: 121.4883, branch: 'common' },
            { name: "中原", id: "Y14", lat: 25.0084, lon: 121.4842, branch: 'common' },
            { name: "板新", id: "Y15", lat: 25.0142, lon: 121.4727, branch: 'common' },
            { name: "板橋", id: "Y16", lat: 25.0152, lon: 121.4647, branch: 'common' },
            { name: "新埔民生", id: "Y17", lat: 25.0261, lon: 121.4663, branch: 'common' },
            { name: "頭前庄", id: "Y18", lat: 25.0397, lon: 121.4608, branch: 'common' },
            { name: "幸福", id: "Y19", lat: 25.0494, lon: 121.4603, branch: 'common' },
            { name: "新北產業園區", id: "Y20", lat: 25.0615, lon: 121.4599, branch: 'common' }
        ]
    },

    // ==========================================
    // 7. 桃園機場捷運 (Purple Line / Airport MRT)
    // ==========================================
    "purple": {
        name: "機場捷運",
        color: "#8246af",
        directions: [
            { 
                // 北上 (往 A1 台北車站)
                // 對應爬蟲變數中的 NORTH
                id: "inbound", 
                label: "往 台北車站", 
                sources: {
                    weekday: [
                        "MRT_TY_WD_NORTH_EXPRESS",          // 直達車
                        "MRT_TY_WD_NORTH_EXPRESS_PLUS",     // 尖峰增停直達車
                        "MRT_TY_WD_NORTH_COMMUTER",         // 普通車
                        "MRT_TY_WD_NORTH_COMMUTER_SKIP",    // 尖峰跳站普通車
                        "MRT_TY_WD_NORTH_AIRPORT_SERVICE",  // 機場加班車
                        "MRT_TY_WD_NORTH_OTHER"             // 其他
                    ],
                    weekend: [
                        "MRT_TY_WE_NORTH_EXPRESS",
                        "MRT_TY_WE_NORTH_EXPRESS_PLUS",
                        "MRT_TY_WE_NORTH_COMMUTER",
                        "MRT_TY_WE_NORTH_COMMUTER_SKIP",
                        "MRT_TY_WE_NORTH_AIRPORT_SERVICE",
                        "MRT_TY_WE_NORTH_OTHER"
                    ]
                },
                excludeStations: ["台北車站"] // 終點站無法搭乘此方向
            },
            { 
                // 南下 (往 A22 老街溪 / 機場)
                // 對應爬蟲變數中的 SOUTH
                id: "outbound", 
                label: "往 機場 / 老街溪", 
                sources: {
                    weekday: [
                        "MRT_TY_WD_SOUTH_EXPRESS",          // 直達車
                        "MRT_TY_WD_SOUTH_EXPRESS_PLUS",     // 尖峰增停直達車
                        "MRT_TY_WD_SOUTH_COMMUTER",         // 普通車
                        "MRT_TY_WD_SOUTH_COMMUTER_SKIP",    // 尖峰跳站普通車
                        "MRT_TY_WD_SOUTH_AIRPORT_SERVICE",  // 機場加班車 (A1->A13)
                        "MRT_TY_WD_SOUTH_OTHER"             // 其他
                    ],
                    weekend: [
                        "MRT_TY_WE_SOUTH_EXPRESS",
                        "MRT_TY_WE_SOUTH_EXPRESS_PLUS",
                        "MRT_TY_WE_SOUTH_COMMUTER",
                        "MRT_TY_WE_SOUTH_COMMUTER_SKIP",
                        "MRT_TY_WE_SOUTH_AIRPORT_SERVICE",
                        "MRT_TY_WE_SOUTH_OTHER"
                    ]
                },
                excludeStations: ["老街溪"] // 終點站無法搭乘此方向
            }
        ],
        stations: [
            { name: "台北車站", id: "A1", lat: 25.0488, lon: 121.5134, branch: 'common' },
            { name: "三重", id: "A2", lat: 25.0558, lon: 121.4847, branch: 'common' },
            { name: "新北產業園區", id: "A3", lat: 25.0615, lon: 121.4599, branch: 'common' },
            { name: "新莊副都心", id: "A4", lat: 25.0594, lon: 121.4468, branch: 'common' },
            { name: "泰山", id: "A5", lat: 25.0535, lon: 121.4395, branch: 'common' },
            { name: "泰山貴和", id: "A6", lat: 25.0427, lon: 121.4285, branch: 'common' },
            { name: "體育大學", id: "A7", lat: 25.0366, lon: 121.3857, branch: 'common' },
            { name: "長庚醫院", id: "A8", lat: 25.0601, lon: 121.3705, branch: 'common' },
            { name: "林口", id: "A9", lat: 25.0664, lon: 121.3619, branch: 'common' },
            { name: "山鼻", id: "A10", lat: 25.0805, lon: 121.2854, branch: 'common' },
            { name: "坑口", id: "A11", lat: 25.0869, lon: 121.2662, branch: 'common' },
            { name: "機場第一航廈", id: "A12", lat: 25.0815, lon: 121.2372, branch: 'common' },
            { name: "機場第二航廈", id: "A13", lat: 25.0772, lon: 121.2323, branch: 'common' },
            { name: "機場旅館", id: "A14a", lat: 25.0718, lon: 121.2355, branch: 'common' },
            { name: "大園", id: "A15", lat: 25.0617, lon: 121.2185, branch: 'common' },
            { name: "橫山", id: "A16", lat: 25.0487, lon: 121.2125, branch: 'common' },
            { name: "領航", id: "A17", lat: 25.0345, lon: 121.2173, branch: 'common' },
            { name: "高鐵桃園站", id: "A18", lat: 25.0125, lon: 121.2152, branch: 'common' },
            { name: "桃園體育園區", id: "A19", lat: 25.0022, lon: 121.2069, branch: 'common' },
            { name: "興南", id: "A20", lat: 24.9818, lon: 121.2195, branch: 'common' },
            { name: "環北", id: "A21", lat: 24.9675, lon: 121.2199, branch: 'common' },
            { name: "老街溪", id: "A22", lat: 24.9602, lon: 121.2179, branch: 'common' }
        ]
    }
};

let appState = {
    lineKey: 'orange', // 預設路線 (可改為 'red', 'green', 'blue')
    station: null,
    dirId: 'north', // 若切換到藍線記得要改為 'east' 或 'west'，或由程式自動判斷
    dayType: 'weekday'
};