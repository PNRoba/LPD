
var chart_bestScoreProblemStatisticChart1_d0bbb = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_d0bbb'), {
    type: 'line',
    data: {
        labels: [
            1009, 1024, 1025, 1028, 1048, 1051, 1059, 1068, 1076, 1079, 1082, 1091, 1106, 1112, 1122, 1135, 1180, 1352, 1374, 1394, 1486, 1552, 1567, 1576, 1596, 1627, 1637, 1638, 1646, 1661, 1665, 1691, 1692, 1693, 1726, 1730, 1745, 1752, 1772, 1777, 1804, 1812, 1818, 1846, 1867, 1892, 1893, 1899, 1900, 1956, 1957, 1982, 1984, 1986, 2009, 2024, 2025, 2026, 2042, 2043, 2059, 2065, 2073, 2074, 2075, 2101, 2119, 2191, 2206, 2220, 2224, 2225, 2226, 2247, 2258, 2271, 2277, 2279, 2320, 2354, 2401, 2407, 2416, 2479, 2480, 2508, 2516, 2524, 2547, 2562, 2611, 2628, 2629, 2648, 2649, 2662, 2691, 2700, 2721, 2723, 2730, 2755, 2806, 2808, 2833, 2834, 2844, 2850, 2854, 2931, 3007, 3014, 3051, 3081, 3083, 3128, 3139, 3141, 3146, 3159, 3180, 3222, 3231, 3234, 3238, 3261, 3274, 3310, 3311, 3312, 3314, 3327, 3356, 3357, 3381, 3387, 3388, 3418, 3436, 3471, 3473, 3540, 3543, 3558, 3571, 3576, 3590, 3619, 3620, 3634, 3671, 3714, 3720, 3764, 3771, 3797, 3844, 3845, 3884, 3888, 3897, 3946, 3970, 3983, 3986, 4064, 4079, 4101, 4104, 4134, 4144, 4211, 4216, 4227, 4232, 4233, 4273, 4277, 4279, 4285, 4289, 4314, 4351, 4360, 4392, 4397, 4399, 4419, 4459, 4460, 4486, 4493, 4517, 4518, 4523, 4567, 4586, 4644, 4675, 4711, 4714, 4720, 4726, 4733, 4734, 4764, 4765, 4766, 4774, 4793, 4795, 4864, 4887, 4921, 4922, 4936, 4976, 4977, 4980, 4993, 4998, 4999, 5009, 5077, 5094, 5148, 5165, 5166, 5192, 5203, 5209, 5218, 5246, 5291, 5309, 5365, 5383, 5416, 5439, 5489, 5513, 5586, 5622, 5653, 5659, 5696, 5735, 5741, 5755, 5765, 5766, 5785, 5791, 5813, 5886, 5891, 5929, 5968, 5978, 5986, 5987, 6048, 6126, 6192, 6209, 6255, 6283, 6292, 6305, 6312, 6353, 6363, 6372, 6379, 6411, 6432, 6436, 6439, 6440, 6449, 6522, 6524, 6586, 6598, 6639, 6647, 6648, 6654, 6675, 6700, 6727, 6730, 6733, 6749, 6817, 6850, 6856, 6857, 6890, 6891, 6893, 6896, 6897, 6911, 6927, 6931, 6964, 7036, 7056, 7081, 7117, 7193, 7210, 7212, 7275, 7279, 7288, 7301, 7326, 7356, 7358, 7363, 7380, 7398, 7435, 7436, 7474, 7476, 7534, 7545, 7583, 7660, 7692, 7798, 7847, 7879, 7907, 7916, 7985, 7986, 8028, 8035, 8036, 8109, 8164, 8263, 8300, 8350, 8410, 8420, 8439, 8494, 8521, 8577, 8606, 8622, 8651, 8687, 8689, 8764, 8813, 8843, 8845, 8853, 8855, 8856, 8857, 8872, 8876, 8877, 8925, 8926, 8945, 9007, 9008, 9082, 9084, 9085, 9088, 9120, 9130, 9153, 9166, 9203, 9243, 9296, 9316, 9317, 9318, 9319, 9321, 9346, 9347, 9393, 9440, 9468, 9537, 9538, 9551, 9570, 9579, 9610, 9667, 9692, 9719, 9757, 9758, 9759, 9776, 9853, 9856, 9924, 9963, 9965, 10001, 10004, 10009, 10044, 10077, 10123, 10150, 10154, 10156, 10232, 10264, 10266, 10303, 10307, 10350, 10361, 10383, 10461, 10465, 10495, 10533, 10607, 10626, 10683, 10759, 10761, 10780, 10835, 10846, 10847, 10852, 10907, 10943, 10976, 11052, 11108, 11132, 11194, 11211, 11272, 11293, 11382, 11420, 11451, 11454, 11533, 11609, 11627, 11629, 11688, 11769, 11808, 11833, 11841, 11842, 11852, 11887, 11889, 11930, 11981, 11988, 12006, 12101, 12121, 12160, 12175, 12256, 12294, 12297, 12298, 12325, 12332, 12410, 12443, 12449, 12466, 12469, 12490, 12513, 12516, 12539, 12557, 12630, 12648, 12695, 12696, 12702, 12747, 12768, 12778, 12806, 12859, 12868, 12870, 12937, 12939, 12941, 12944, 12947, 12949, 12951, 12952, 12953, 12974, 12992, 12999, 13017, 13050, 13051, 13084, 13095, 13134, 13174, 13250, 13301, 13362, 13373, 13399, 13408, 13409, 13411, 13468, 13488, 13550, 13568, 13620, 13647, 13685, 13725, 13753, 13758, 13759, 13772, 13775, 13799, 13872, 13929, 13933, 13950, 13951, 13959, 13960, 13974, 13975, 13980, 13982, 14028, 14100, 14153, 14158, 14162, 14168, 14169, 14186, 14204, 14207, 14259, 14261, 14290, 14342, 14367, 14374, 14411, 14421, 14431, 14515, 14527, 14530, 14534, 14583, 14599, 14622, 14641, 14682, 14686, 14704, 14737, 14762, 14769, 14779, 14810, 14812, 14829, 14862, 14900, 14917, 15001, 15009, 15071, 15077, 15122, 15123, 15130, 15132, 15133, 15157, 15191, 15239, 15250, 15263, 15268, 15269, 15294, 15376, 15400, 15404, 15405, 15425, 15426, 15434, 15439, 15444, 15547, 15576, 15616, 15639, 15708, 15722, 15749, 15793, 15812, 15838, 15843, 15897, 15924, 15944, 15960, 15972, 16004, 16012, 16016, 16020, 16022, 16071, 16082, 16086, 16116, 16154, 16157, 16166, 16173, 16257, 16275, 16287, 16288, 16325, 16395, 16432, 16482, 16538, 16564, 16589, 16600, 16602, 16619, 16645, 16654, 16662, 16687, 16725, 16759, 16789, 16799, 16804, 16809, 16847, 16924, 16933, 16989, 17047, 17094, 17147, 17150, 17151, 17153, 17173, 17205, 17224, 17274, 17314, 17359, 17368, 17449, 17485, 17494, 17497, 17501, 17504, 17528, 17536, 17548, 17568, 17582, 17583, 17618, 17622, 17630, 17634, 17639, 17704, 17738, 17748, 17785, 17789, 17791, 17876, 17880, 17886, 17927, 17932, 17957, 17958, 18040, 18061, 18120, 18140, 18149, 18199, 18217, 18218, 18219, 18279, 18329, 18332, 18347, 18348, 18349, 18512, 18528, 18532, 18553, 18569, 18573, 18615, 18698, 18701, 18722, 18730, 18788, 18867, 18884, 18908, 18927, 18949, 19034, 19060, 19110, 19120, 19122, 19144, 19170, 19237, 19307, 19360, 19376, 19421, 19460, 19470, 19475, 19482, 19493, 19544, 19557, 19570, 19605, 19629, 19692, 19695, 19796, 19828, 19907, 19963, 19985, 19991, 20040, 20041, 20045, 20119, 20143, 20168, 20169, 20195, 20201, 20288, 20337, 20389, 20393, 20400, 20456, 20488, 20490, 20491, 20492, 20507, 20538, 20599, 20648, 20711, 20745, 20796, 20805, 20888, 20906, 20950, 20958, 20989, 20990, 21013, 21085, 21130, 21182, 21212, 21236, 21295, 21300, 21373, 21393, 21424, 21425, 21575, 21623, 21624, 21633, 21680, 21746, 21752, 21775, 21812, 21835, 21843, 21859, 21930, 21990, 22073, 22074, 22079, 22082, 22085, 22091, 22121, 22164, 22191, 22226, 22306, 22310, 22344, 22350, 22382, 22405, 22429, 22483, 22496, 22508, 22527, 22541, 22590, 22677, 22706, 22754, 22766, 22767, 22776, 22858, 22881, 22900, 22936, 22946, 22996, 23036, 23059, 23076, 23090, 23130, 23135, 23227, 23239, 23283, 23284, 23328, 23396, 23408, 23418, 23450, 23601, 23612, 23681, 23761, 23806, 23836, 23861, 23862, 23864, 23865, 23926, 23989, 23997, 24036, 24129, 24172, 24182, 24186, 24199, 24231, 24324, 24363, 24429, 24556, 24683, 24761, 24773, 24774, 24783, 24784, 24869, 24917, 24980, 25059, 25155, 25157, 25201, 25204, 25208, 25390, 25391, 25396, 25418, 25529, 25629, 25725, 25827, 25834, 25879, 25901, 25920, 26012, 26058, 26120, 26203, 26227, 26246, 26250, 26283, 26298, 26373, 26401, 26496, 26595, 26624, 26689, 26717, 26780, 26890, 26912, 26967, 27101, 27157, 27163, 27230, 27355, 27356, 27390, 27485, 27499, 27591, 27620, 27664, 27850, 27855, 27942, 27970, 28045, 28076, 28120, 28228, 28295, 28300, 28413, 28527, 28593, 28777, 28779, 28907, 28934, 28965, 29022, 29034, 29156, 29202, 29278, 29368, 29386, 29402, 29481, 29544, 29558, 29566, 29749, 29758, 29783, 29828, 29835, 29952, 30020, 30100, 30140, 30185, 30332, 30367, 30522, 30634, 30712, 30905, 30921, 31167, 31181, 31388, 31476, 31618, 31755, 31822, 31844, 32024, 32081, 32304, 32323, 32490, 32589, 32772, 32859, 32990, 32992, 32998, 33004, 33157, 33221, 33421, 33437, 33627, 33719, 33843, 33860, 33952, 33984, 34056, 34146, 34147, 34152, 34228, 34266, 34270, 34291, 34484, 34485, 34488, 34555, 34690, 34788, 34804, 34987, 35063, 35320, 35377, 35436, 35578, 35664, 35666, 35668, 35674, 35799, 35800, 35833, 35834, 35846, 35878, 36028, 36108, 36111, 36326, 36350, 36555, 36569, 36610, 36750, 36781, 36857, 37016, 37114, 37168, 37245, 37335, 37362, 37464, 37536, 37544, 37617, 37683, 37871, 37898, 37948, 38086, 38117, 38122, 38123, 38125, 38203, 38234, 38355, 38368, 38443, 38572, 38580, 38613, 38796, 38875, 39085, 39129, 39152, 39203, 39382, 39420, 39616, 39627, 39633, 39733, 39841, 39846, 39991, 40000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -14445, , , , , , , , , , , , , , , , -18376, -18510, , , , -22515, , , , , , , , , , , , , , , , , -26870, , , , , , , , , , , , , , , , -27515, , , , , , , , , , , , , , , , , , , , , , -31854, , , , , -31755, , , , , , , -31867, , , , , , , -32265, , , , , , -32304, , , , , , -32210, , -32244, -32187, , , -32183, , , , , , -32182, , , , , -32152, , , , , -32112, , , , , , , -32113, , , -32104, , , , -31906, , , , , , -35930, , -36004, , , , -36127, , , -36083, , , , -36098, , , -35747, , , , , -35195, , -35154, , , , , , , -34815, , , -34615, , , , , -34368, , , , -34231, , , , -34222, , -34086, , , , -33990, , , , , , , , , -33915, -33896, , , , -33884, , , , , , , -33759, -33740, , -33736, , , , , , -33624, , -33477, , -33383, , , -33244, , -33235, -33224, , , -33194, , -33137, , , , , , , -33128, -33119, , , -33072, , , , -33042, -33022, , -33015, , , -32724, , , , , -32661, , , , , , , -32523, , -32300, , -32249, , , , , -32235, , , , , -32202, -32175, , , , , -32007, , , , , , , -31987, -31968, , , -31954, -31448, , , -31432, , , , , -31408, , , , , -31372, , , , , , -31329, , -31320, -31314, , , -31297, , , , -31264, , , , -31252, -31215, , -31170, , , -31117, , -30941, , -30713, , , -30691, , -30556, , -30515, , , , , , , , , , -30495, , -30461, , , , , -30458, , , , -30433, , -30423, , , , , , -30383, , , -30378, , -30366, -30364, , , , , -30328, , -30326, , , , , -30322, -30309, , -30258, , , -30235, , , , -30221, , , , -30188, -30167, , , , -30160, , , -30152, -30142, , , -30129, -30105, , -30086, , -30080, , -30065, , , , -30062, , -30051, -30045, , -30038, , -30033, , -30022, , , , -30007, -30002, -29998, , , -29977, -29944, , , , , -29940, , , -29937, , , -29931, , , , -29923, -29914, , , , , -29902, -29890, , , , , , , , , -29884, -29879, , , , -29876, , , -29872, , -29866, , , -29865, , , , , , , , , , , , -29860, , , , -29857, , -29849, -29845, , , , , , , -29835, , -29834, , -29831, , -29814, , -29777, , , , , , -29769, -29765, , , -29762, , , , , , , , -29761, , , , , , , , , , , -29755, , -29752, , , , , -29744, -29734, , , , , -29731, , , -29728, , , , , , , , , , , , -29723, -29722, , , -29716, , , , , , -29715, , -29710, , , , , , , , , , , , , , , , -29707, , , , , -29703, , , -29700, , , -29697, , , , -29692, , , , , , , -29689, , , , -29679, , , , , , , , , -29673, , -29670, , , , , -29668, , , , -29664, , , , , -29663, , , , , -29659, , , , , , , -29650, , , , , -29649, -29639, , , , , , , -29638, , , , , -29637, , , , , -29634, , , , , -29630, -29629, , , , , , -29621, -29617, , -29613, , , -29611, , , , -29610, , , , , , , , -29607, , , , -29605, , -29602, , , -29599, -29587, , , , -29584, -29583, , , , -29575, , , , , , -29569, , , , , , , -29566, , , , -29562, , , , , , -29561, , , -29552, , , -29551, , , , , -29550, -29549, , , , , -29497, , , , , , -29496, , , -29492, , -29490, , , , , -29475, , , , , , , , , , -29473, , -29472, , , -29471, , , , , -26182, , , , -26173, , , -26170, , , , , , , , -26168, , , , -26167, , , , , -26166, , , -26165, , , , , -26161, , , , -26153, , -26151, , , , -26149, , -26146, , , , -26145, , , , , , , , -26144, , , , , , , , , , , , , , , , -26136, -26135, , , , , -26134, -26131, , , , , , , -26130, , , -26128, , , -26127, , -26124, , , , , , , , -26118, , -26112, -26106, , , , -26104, -26103, , , -26092, , , , , -26087, , -26078, -26075, -26074, , -26066, , -26064, , , -26052, , , , -26034, , , , , -26023, -26022, , , , , -26015, , , , -26014, , , -26013, , , , , , , , , -26007, , , -26005, , , -26004, , -26001, , , , , , , , -26000, , , , , -25999, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -25998, -25995, , , , , , -25990, , , , , , , , -25989, -25988, , -25979, , , -25975, , , , , , -25974, , , , , , -25973, , , , , , , -25972, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -25972
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -14445, , , , , , , , , , , , , , , -19075, , , , , , , , , , , , , , , , , , -19214, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23218, , , , , , , , , , , , , , , , , , , , , -27634, , , , , , , , , , , , , , , , , , , , , , , , , -27623, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -31695, , , , , , , , , , , , , , , , , , , , -31437, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -31622, , , , , , , , , , , , , , , , , , , , , , , , , , , -31583, , , , , , , , , , , , , , , , , , -35307, , , , , , , , , , , , , , , , , , , -35342, , , , , , , , , , , , , , , , , , , , , , , -38765, , , , , , , , , , , , , , , , , , , -38475, , , , , , , , , , , , , , , -38434, , , , , , , , -38391, , , , , , -38121, , , , , , -37679, , , -37546, , , , , -37088, , , , , , , -36997, , , , , -36669, , , , , , , , , , , -36627, , , , , , , -36413, , , , -36365, , , , , , , , , -36208, , , , , , -36124, , , , -36063, , , , , , -35726, , , , , -35711, , , , , -35696, , , , , , -35575, , , , , , -35542, , , , -35503, , , , -35412, , , , , , -35384, , , -35235, , , , -35194, , , , -34920, , , , -34863, , , , -34796, , , , , , , , -34761, , , , , -34615, , , , , , -34536, , , , , , , -34517, , , , , , -34478, , , , , , , -34445, , , , , , , , , , , , , -34225, , , , , , , , -34157, , , -34135, , , , , , , -34111, , , , -34097, , , , , , , -34072, , , , , -34034, , , , , , , , , , -34012, , , , , , , , , -33980, , , , , , , -33957, , , , , , -33940, , , , , , , -33917, , , , , , , , -33878, , , , -33865, , , , , , , , , , -30731, , , , , , , , , , , , -30703, , , , , -30696, , , , , , , -30672, , , , , , , , , , , , -30647, , , , , , , , , , , -30623, , , , , , -30597, , , , , , , , , , , , , , -30587, , , , , -30562, , , , , , , , , -30542, , , , , , , , , -30516, , , , , , , , , , , , , -30501, , , , , , , , , -30486, , , , , , -30464, , , , , , , -30447, , , , -30417, , , , , , , -30405, , , , , , -30399, , , , , -30393, , , , , , -30387, , , , -30382, , , , , , , , , -30368, , , , -30352, , , , -30318, , , , , , , , , -30310, , , , , -30294, , , , , , , , , -30290, , , , , -30281, , , , , , , -30273, , , , -30268, , , , , , , -30255, , -30250, , , , , , , -30242, , , , , -30237, , , , , , , , -30233, , , , , , -30221, , , , , , , -30208, , , , -30206, , , , , , -30196, , , , , , -30192, , , , , , -30189, , , , , , -30180, , , -30170, , , -30165, , , , , , , , -30143, , , , -30134, , , , , -30122, , -30120, , -30114, , , , , , , -30107, , , , -30100, , , , , , -30088, , -30069, , , -30066, , , , , -30063, , , , , , -30062, , , , , , , , -30053, , , -30045, , -30030, , , , , , , -30024, , , , -30019, , -30011, , , -30009, , , -30006, , , -30002, , -29993, , -29983, , , -29980, , , -29971, , , -29968, , , , , , -29953, , -29947, , , , -29924, , , -29918, , -29910, , -29906, , -29891, , -29859, -29854, , -29846, , -29838, , , -26763, , -26756, , -26736, , , -26735, , , , , -26732, , -26728, -26708, , -26706, , -26705, , , , -26701, , , , , -26698, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -26685, , -26683, , , , -26681, , -26680, , , -26676, , , -26673, , , , -26670, , -26664, , , , , , -26661, , , -26659, , , , -26657, , -26655, , , , , -26654, , -26653, , , -26649, , -26642, , , -26642
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -14445, , , , , , , , , , , , , , , , , -19075, , , , , , , , , , , , , , , , , -19214, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23218, , , , , , , , , , , , , , , , , , , , , , , , -27634, , , , , , , , , , , , , , , , , , , , , , , , , -27623, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -31695, , , , , , , , , , , , , , , , , , , , -31437, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -31622, , , , , , , , , , , , , , , , , , , , , , , , , , -31583, , , , , , , , , , , , , , , , , , , , , , -35307, , , , , , , , , , , , , , , , , -35342, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -38765, , , , , , , , , , , , , , , , , , , , , , , , -38570, , , , , , , , , , , , , -38359, , , , , , , , , , , , , -38200, , , , , , , , , , , , , , , , , , , , , , , , -37743, , , , , , , , , , , , , , , , , , , , , , , , , -37394, , , , , , , , , , , , , , , , , , , , , , , , -37021, , , , , , , , , , , , , , , , , -36304, , , , , , , , , , , , , , , , , -36030, , , , , , , , , , , , , , , , , , , -35818, , , , , , , , , , , , , , , , , , , -35605, , , , , , , , , , , , , , , , , , , , , , , , , , -35401, , , , , , , , , , , , -35223, , , , , , , , , , -35157, , , , , , , , , , , , , , , , -34980, , , , , , , , , , -34881, , , , , , , , , -34829, , , , , , , , , -34761, , , , , , , , , , , -34715, , , , , -34679, , , , , , , , , -34618, , , , , , , -34585, , , , , , , , , -34541, , , , , -34495, , , , , , -34372, , , , , , , , , , -34331, , , , , , , , -34282, , , , , , -34227, , , , , , , -34201, , , , , , , , , -34185, , , , , -34177, , , , , , , -34154, , , , , -34144, , , , , , , , , , -34122, , , , , , , , , , -34089, , , , , , , , -34056, , , , , , , -33945, , , , , , , -33903, , , , , , -33880, , , , , , , , , -33871, , , , , -33855, , , , , -33821, , , , , -33792, , , , , , , , -33781, , , , , , -33754, , , , -33727, , , , , , , , -33708, , , , , , , , , -33687, , , , , , , , , -33667, , , , , -33653, , , , , , , , -33638, , , , , , -33606, , , , , , -33591, , , , , , , , , -33566, , , , , , , , -33553, , , , , , -33537, , , , , , , , , , -33524, , , , , -33501, , , , , , , , -33483, , , , , , , -33450, , , , , , , , -33432, , , -33421, , , , , , , , -33406, , , , , -30221, , , , , , , -30209, , -30199, , , , , , , -30188, , , -30182, , , , , , , -30174, , , -30161, , , , -30146, , , , , -30137, , , , , , , -30128, , , , -30101, , , , -30096, , , , , -30087, , , , -30074, , , , -30063, , -30058, , , , , -30053, , , -30031, , , -30025, , -30020, , , , , , -30015, , , -29948, , , , , -26901, , , , , , -26896, , , , -26884, , , , -26878, , -26873, , -26864, , , -26863, , -26857, , -26856, , , -26855, , -26854, , , -26849, , -26845, , , , , -26839, , , -26837, , -26831, , , , -26830, , , , , , , , -26828, , , , -26820, , , -26818, , -26815, -26814, , , -26811, , , , , , , , , -26808, , , -26807, , , -26797, , , -26794, , , -26792, , -26783, , , , -26782, , , , -26780, , -26778, , , , -26772, , , , , , , -26771, , , , -26764, , -26754, , -26746, , , -26738, , , -26732, , , , , , -26732
                  ]
                }, 
{
                  label: 'LAHC 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -14445, -14680, , , , , -19491, -20266, -24343, , , , , , , , -49920, , , , -47732, -48805, , , , , -47664, -47944, -47915, -47894, -48390, , , , , , -52360, , -52288, -51967, -51328, , , -51514, -51459, -51184, -51183, , -51798, -51906, , , , , , , , -51765, , , , -51228, , -50570, , , -51311, -51220, -51164, , -51609, , , , -51685, -51616, , , -51926, -53194, -53139, -53500, -54376, -53265, , -53583, -52125, , , -51777, -51747, , -50782, , , -51692, , , -50668, -50671, , , , , -49983, , , -49950, -49719, , , -52034, -51681, , , , -51085, -52104, , , , , -51463, -50116, -50053, , , , -51361, -51293, , , , -50709, , , -50810, -49764, -49196, , , -50314, -50056, -50276, -50266, , -50096, , , , , , -49982, -49942, , -49895, , -50903, , , , , , -49208, -49233, , , , , , , -49190, -50687, -50629, -50807, , -50812, , , -49723, -50354, -50280, -50278, , -51143, -51104, , , -50895, -50833, -50927, , , , , -49707, -49604, , , , , , -49784, -49811, , , , , , -50227, -50222, , , , , -50159, -50052, -50031, , , , , -49750, -49746, , , , , -49262, , -50160, , , , , -49889, , , , , , , , , -49787, , , -49386, -48922, , , , -48656, , , -48467, -48581, , , -48978, , -48700, , , , , , , , -48064, , -47268, , , , , , , , , , -48304, -48000, -47927, , , -46894, , , , , , , , , , , , , -49308, -49245, , , , , -47479, , , , , , , -46862, -46988, , , -47529, , , , , , -46780, -46777, , , , , , , , , , , -47123, -47084, , , , , , , , , , , , , , -46348, , , , , , , , , , , -47620, -47621, -47615, , , , , , , , , , , , , -47897, , , , , , , , , , , , , , , , , , , , , , , -46955, , , , , , , , , , , , , , , , , -45894, , , , , -47071, , , , -47001, -46974, , , , , , , , , , , , , -45987, -45955, -45899, , , , , , , , , , , , , , , , , , , , , , , , , , -45794, -45476, , , , , , , , , , -45448, -45418, -45414, , , , -45412, -45290, -45270, -45130, , , , , , , , -45129, -45075, , , , , , , -45074, -45060, , -45035, -45005, -44976, -44973, -44954, -44941, -44908, -44724, , -44682, , , , , -44564, , , , , , , -44522, , -44518, -44468, -44399, , , -44381, , , , , , -44342, -44250, -44125, , -44101, , , -44082, , , -44072, -44067, -44001, -43982, , -43941, -43911, , , -43900, -43888, -43886, -43875, -43871, , -43808, -43790, , , -43779, , -43773, -43715, , , , , -43694, -43565, -43518, , , , -43505, , -43461, -43355, , , , , -43323, -43318, , , , , , , , , , , -43311, -43290, -43287, , , , , -43259, -43229, -43228, -43191, , -43183, -43174, -43155, , , -43086, , , , , -42991, , -42990, , , -42959, , , , , , -42949, -42930, , , -42896, , -42895, -42884, , , , -42883, -42870, -42863, , , , -42843, -42841, -42833, , -42778, , , -42768, , , , , , , -42753, -42719, , , -42703, -42699, -42684, , , , -42666, -42598, , , , -42594, -42542, -42530, -42478, , , , -42447, , , , , -42439, -42418, -42395, -42379, -42375, , , , , , , , -42335, -42324, , , , , , -42318, -42311, , , , , , , , , , -42257, , , , , -42243, , , , , , -42216, -42187, -42180, , , , , -42111, , , , , -42086, , , , , , , , , , -42051, , , , -42014, , , , , , -42011, -42007, -41998, -41958, , , , , , , , , , , , , , , , -41955, -41934, , , -41911, -41907, , , , -41878, , , , , -41845, -41836, , , -41829, , , , , , , , , , -41808, , -41782, -41770, , -41752, , , , , , , , , -41683, , , , , , , , , -41675, , , -41620, , , , , , , , , , , , -41606, -41600, , , -41597, , , , , , , , , , , , , -41585, , , -41557, , , -41555, -41539, , , , , -41532, -41528, , -41509, , , -41495, -41492, , , , , , -41466, , , -41413, , , , , , , , , , , , , , , -38445, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -38444, , , , , , , , , , , , -38380, , , , , , , , -38342, , , , , -38339, , -38318, , , -38258, -38225, , , , , , -38188, , , , , , -38136, , , , , , , , , , , -38134, , , , -38131, , , -38115, , -38106, , -38106
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , -14445, -14680, , , , -19491, -20266, -24343, , , , , , , -49693, , , , , , , -48129, , , , , , , -52518, , , -51195, , -51328, , , , , , , , , , , , , , -51893, -51886, -51846, -51744, -51776, , , , , , , -50205, , , -51507, , , , , , -50303, , , , , , , , , , , , , , , , , , , , , , , , , -47892, , , , -51150, -51088, -51075, , , , , , , , -51750, , , , , , , , , , , -51248, , , , , , , , , , -53374, -52987, , , , , , , , , , , , , , , , , , , , , -53842, , , , , , -52326, -51878, , , , , -51683, , -51377, , , , , , , , , , -50798, , , , , , , , , , , , , , , -47936, , , , , , , -47717, , , , , , , , , -49983, , , , , , -50576, , , , , , -50285, , , , , , , , , , , , , , , , , , -50642, , , , , , , -50501, -50386, , , , , -52136, , , , , , , , , , , , , -51586, , , , , , , , -51365, -51321, -51305, , , , -50874, , -51493, , , , , , , , -51483, , , , , , , , -52223, -51883, -51668, , , , , , , , , , -51219, -51745, , , , , , , , -50931, , , , , , , -50861, -50131, , , , , , , , , , , , , , , , , , , , -49485, , , , , , -51303, , , , , -50878, , -51331, , , , , , , , -49338, , , , , , , , , , -49024, , , -47757, , , , , , , , -49518, -49394, , , , , , -48647, , , , , , , -47847, -47775, -47728, , , , , -50159, -50028, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -49187, , , , , -48724, , , , , , -49042, , , , , -50790, -50788, , , , , , , , -50441, , , , , , , , , , , , , , , , -49799, , -50241, , , , , , , , -49205, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -50482, , , , , , , , , , , , , , , , , , , , , , , , , , , , -49687, , , , , , , , , -49036, , , , , , , -47911, , , -47465, , , , , , , , , , -48804, , , , , , , , , , , , -48636, -48614, , , , , -48199, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -49091, , , , , , , , , , , , , , , -49087, -48922, , , , , , , , , , , -49079, -48975, -48972, , , , , , , , , , -47667, , -47626, , , , , , , , , -48552, , , , , , , , , , , , -47893, , , , , , , , , -46809, , , , , -47173, , -47973, , , , , , , , , , , , , , , , , , , , , , -47894, -47849, , , , , , , , , , , , , , , , , , , , -47724, , , , , , , , , , , -46634, , , , , , , , , , -46213, -46181, -46168, -46063, -46036, , , , , , , , , , -47021, , -47781, -47102, , , , , -47980, , , , , , , , , , , , , , , , , , , , , , , -45742, , , , , , , , , , , , , , , , , , , , , , -47614, , , , , , , , , , , , , , , , , , , , , -46609, , , , , , , , , , , -46603, , , , , , -47177, -47138, -47738, , , , , , , , , , , -46637, , , , -47793, , , , , , , , , , , , , , -46826, , , , , , , , , , , , , , , , , , , , , , -46060, , , -46021, , -46744, , -48549, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -46895, -46873, -46489, , , , , , , , , , , , , , , , , , , , -45636, -45630, -45473, , , , , , , , , , , -45201, -45200, -45193, , , , -44842, -44831, , , , , -44197, , , , , , , , , , , , , , , , , , , , , , , , , -43853, -43818, , , , , , , , , , , , -43637, , , , , , , , , , , , , -43637
                  ]
                }, 
{
                  label: 'LAHC 600',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -14445, -14680, , , -19491, -20266, , , -24343, , , , , , , , , , , , , -53347, , , -52719, -52600, -51716, , , , , , , , , , , , , , , , , -52514, -52710, , , , , -52586, , , , , , , , , -53299, , -51174, -51132, -51021, , , , -51758, , , , , , , , , , , , -49430, , , , , , , , , , , -47787, -47631, , , , , , , , , , , , , , , , , , , , , , , , , -50406, -52179, , , , , , , , , , , , -46784, -47105, , , -48227, , , , -47567, , , , , , -47519, , , , , , , , -47749, , , , , , , , -52206, , , , , , -50269, , , , , , , , , , , , , , , , , , , , , , , , -52487, , , , , , , , -51380, , , , , , , -50690, , , -50511, -51373, , , , , , , -52466, -52319, , , , , , , , , , , -51747, , , , , , , , -51649, -51068, , , , , , -47061, , -51309, , , , , , , , , , , , , -46000, , , , , , , , , , , , -51754, -51345, , , -51355, , , , , , -50161, , , , , , , , , , , -52604, , , , -49977, -50226, -50222, , , , , , , , -52471, , , , , , , , -50240, , -50847, , , -50811, , , , , , -51264, -51250, , , , , , , , , -49096, , , , , , , -51143, -51097, , , , , , , , , , , , , , -50966, , , , , , , , , , , -50556, -50504, -50531, , , , , , -50223, -49557, -49495, , , , , , , , , -49422, -49393, -49414, -49395, , , , , , , -50057, , , -49278, , , , , , , , , , , , , , , , , -49192, -49470, , , , , , , , -50158, , , , , , , , -50353, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -50734, , , , , , , , , , , -50526, , , , , , , , , , , , , , , , , , , , , , , , -48010, , , , , , , , , , , , , , , , , , , , -48359, -48145, , , , , , , -48375, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -47841, -47564, -47326, , , -48728, , , , , , , , -48006, -48029, , , , , , , , , , , , , , , , -47434, -47749, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -49587, , , , , , , , , , , , , , , -49531, -49481, , , , -49179, -49114, , , , , , , , , , , -48988, , , , , , , , , , , , , -49033, , , , , , , , , , , , , , , , , , , , , , , , , , , -48827, , , , , , , , , , , , , , -47743, , , , , , , , , , -47477, , , , , , , , , , , , -47360, , , , , , , , , , , , , -46739, , , , -48665, , , , , , , , -47011, , , -48459, , , , , , , , , -48262, , , -47909, , , , , , , , , , -47887, , , , , , , , , , , , , , , , , -47695, , , , , , , , , , , , , , , , , , , , , , , , , , , -49373, , , , , , , , , -50456, -50432, -50427, -50424, -50406, , -48931, , , , , , , , , , , , , , , -47300, , -47258, -47256, , , , , , , , -47350, , -47576, -47556, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -47593, -47573, , , , , , , , , , , , , , , , , , , , , , -49704, -49252, , , , , , , , , , , , , , , , , , , , -48222, , , , , , , , , , , , , , , , , -47024, , , , , , -48114, , , , , , , , , , , , , , , , , , , -47174, -47159, -46996, , , -48544, , , , , , , , , , , , , , , , , , , -48742, -48583, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -48232, , , , , , -47916, , , , -47821, -46482, , , , , , , , , , , , , , , , , -46563, -46563
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'test150 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 1000
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 40000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 1000
                        
                },
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/webjars/timefold/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScoreProblemStatisticChart1_d0bbb.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_d0bbb.resize();
});