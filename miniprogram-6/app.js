// app.js
App({
    onLaunch(){
        let _this = this
        wx.getSystemInfo({
            success:function(res){
                    _this.globalData.windowHeight=res.windowHeight
                }
            })
    },
    globalData: {
        shoppingData: [{
            shoppingInfo: {
                "image_url": "../../images/001.png",
                "rating": 4.2,
                "is_featured": 0,
                "virtual_food_id": 1241768867,
                "cold_box": null,
                "restaurant_id": 640443,
                "display_times": [{
                    "begin": 1506096000,
                    "end": 1506182100
                }],
                "attrs": [{
                        "values": [
                            "常规糖",
                            "无糖",
                            "微糖",
                            "多糖",
                            "半糖"
                        ],
                        "name": "糖度"
                    },
                    {
                        "values": [
                            "常规冰",
                            "多冰",
                            "少冰",
                            "去冰",
                            "温",
                            "热"
                        ],
                        "name": "温度"
                    }
                ],
                "description": "选用法国进口爱乐薇淡奶油制成绵密乳霜，醇厚奶香伴随微咸芝士风味；覆上淡雅的乌龙青茶，香浓绵滑多层次的口感，融合在味蕾中的幸福感受！",
                "month_sales": 15,
                "rating_count": 5,
                "tips": "5评价 月售15份",
                "image_path": "../../images/001.png",
                "specifications": [{
                    "values": [
                        "常规",
                        "珍珠"
                    ],
                    "name": "规格"
                }],
                "server_utc": 1506170074,
                "is_essential": false,
                "attributes": [],
                "item_id": "200000042771320641",
                "min_purchase": 1,
                "name": "奶香糯玉米松饼",
                "satisfy_count": 5,
                "activity": null,
                "satisfy_rate": 100,
                "specfoods": [{
                        "original_price": null,
                        "sku_id": "200000045263931201",
                        "name": "奶香糯玉米松饼",
                        "weight": 0,
                        "virtual_food_id": 1241768867,
                        "restaurant_id": 640443,
                        "food_id": 1244203057,
                        "packing_fee": 0,
                        "recent_rating": 4.2,
                        "promotion_stock": -1,
                        "price": 14,
                        "sold_out": false,
                        "recent_popularity": 14,
                        "is_essential": false,
                        "item_id": "200000042771320641",
                        "checkout_mode": 1,
                        "specs": [{
                            "name": "规格",
                            "value": "常规"
                        }],
                        "partial_reduce_activity_id": null,
                        "stock": 9964
                    },
                    {
                        "original_price": null,
                        "sku_id": "200000045263932225",
                        "name": "奶香糯玉米松饼",
                        "weight": 0,
                        "virtual_food_id": 1241768867,
                        "restaurant_id": 640443,
                        "food_id": 1244203058,
                        "packing_fee": 0,
                        "recent_rating": 0,
                        "promotion_stock": -1,
                        "price": 15,
                        "sold_out": false,
                        "recent_popularity": 1,
                        "is_essential": false,
                        "item_id": "200000042771320641",
                        "checkout_mode": 1,
                        "specs": [{
                            "name": "规格",
                            "value": "珍珠"
                        }],
                        "partial_reduce_activity_id": null,
                        "stock": 9994
                    }
                ],
                "category_id": 1228440146
            },
            count: 2
        },
        {
            shoppingInfo: {
                "image_url": "../../images/039.png",
                "rating": 4,
                "is_featured": 0,
                "virtual_food_id": 616166398,
                "cold_box": null,
                "restaurant_id": 640443,
                "display_times": [{
                    "begin": 1506096000,
                    "end": 1506182100
                }],
                "attrs": [{
                        "values": [
                            "常规糖",
                            "无糖",
                            "微糖",
                            "多糖",
                            "半糖"
                        ],
                        "name": "糖度"
                    },
                    {
                        "values": [
                            "常规冰",
                            "多冰",
                            "少冰",
                            "去冰",
                            "温",
                            "热"
                        ],
                        "name": "温度"
                    }
                ],
                "description": "选用法国进口爱乐薇淡奶油制成绵密乳霜，醇厚奶香伴随微咸芝士风味；覆上淡雅的乌龙青茶，香浓绵滑多层次的口感，融合在味蕾中的幸福感受！",
                "month_sales": 11,
                "rating_count": 6,
                "tips": "6评价 月售11份",
                "image_path": "../../images/001.png",
                "specifications": [{
                    "values": [
                        "常规",
                        "珍珠"
                    ],
                    "name": "规格"
                }],
                "server_utc": 1506170074,
                "is_essential": false,
                "attributes": [],
                "item_id": "217732055873",
                "min_purchase": 1,
                "name": "枸杞酒酿玉米羹",
                "satisfy_count": 6,
                "activity": null,
                "satisfy_rate": 100,
                "specfoods": [{
                        "original_price": null,
                        "sku_id": "251224003393",
                        "name": "枸杞酒酿玉米羹",
                        "weight": 0,
                        "virtual_food_id": 616166398,
                        "restaurant_id": 640443,
                        "food_id": 635609378,
                        "packing_fee": 0,
                        "recent_rating": 4,
                        "promotion_stock": -1,
                        "price": 14,
                        "sold_out": false,
                        "recent_popularity": 9,
                        "is_essential": false,
                        "item_id": "217732055873",
                        "checkout_mode": 1,
                        "specs": [{
                            "name": "规格",
                            "value": "常规"
                        }],
                        "partial_reduce_activity_id": null,
                        "stock": 9978
                    },
                    {
                        "original_price": null,
                        "sku_id": "251224004417",
                        "name": "枸杞酒酿玉米羹",
                        "weight": 0,
                        "virtual_food_id": 616166398,
                        "restaurant_id": 640443,
                        "food_id": 635609379,
                        "packing_fee": 0,
                        "recent_rating": 4,
                        "promotion_stock": -1,
                        "price": 15,
                        "sold_out": false,
                        "recent_popularity": 2,
                        "is_essential": false,
                        "item_id": "217732055873",
                        "checkout_mode": 1,
                        "specs": [{
                            "name": "规格",
                            "value": "珍珠"
                        }],
                        "partial_reduce_activity_id": null,
                        "stock": 9994
                    }
                ],
                "category_id": 1228444983
            },
            count: 6
        },
        {
            shoppingInfo: {
                "image_url": "../../images/001.png",
                "rating": 4.33,
                "is_featured": 0,
                "virtual_food_id": 1241776837,
                "cold_box": null,
                "restaurant_id": 640443,
                "display_times": [{
                    "begin": 1506096000,
                    "end": 1506182100
                }],
                "attrs": [{
                        "values": [
                            "常规糖",
                            "无糖",
                            "微糖",
                            "多糖",
                            "半糖"
                        ],
                        "name": "糖度"
                    },
                    {
                        "values": [
                            "常规冰",
                            "多冰",
                            "少冰",
                            "去冰",
                            "温",
                            "热"
                        ],
                        "name": "温度"
                    }
                ],
                "description": "严选优质鲜芋，熬煮成绵甜香糯的芋泥块，与浓郁奶茶完美融合，入口芋香四溢，丰富浓郁的口感触动着味蕾。",
                "month_sales": 34,
                "rating_count": 9,
                "tips": "9评价 月售34份",
                "image_path": "../../images/001.png",
                "specifications": [{
                    "values": [
                        "鲜芋奶茶/中杯",
                        "默认"
                    ],
                    "name": "规格"
                }],
                "server_utc": 1506170074,
                "is_essential": false,
                "attributes": [],
                "item_id": "200000042779481921",
                "min_purchase": 1,
                "name": "鲜芋奶茶/中杯",
                "satisfy_count": 9,
                "activity": null,
                "satisfy_rate": 100,
                "specfoods": [{
                        "original_price": null,
                        "sku_id": "200000045266673473",
                        "name": "鲜芋奶茶/中杯",
                        "weight": 0,
                        "virtual_food_id": 1241776837,
                        "restaurant_id": 640443,
                        "food_id": 1244205735,
                        "packing_fee": 0,
                        "recent_rating": 4.33,
                        "promotion_stock": -1,
                        "price": 11,
                        "sold_out": false,
                        "recent_popularity": 34,
                        "is_essential": false,
                        "item_id": "200000042779481921",
                        "checkout_mode": 1,
                        "specs": [{
                            "name": "规格",
                            "value": "鲜芋奶茶/中杯"
                        }],
                        "partial_reduce_activity_id": null,
                        "stock": 9939
                    },
                    {
                        "original_price": null,
                        "sku_id": "-10000",
                        "name": "鲜芋奶茶/中杯",
                        "weight": 0,
                        "virtual_food_id": 1241776837,
                        "restaurant_id": 640443,
                        "food_id": -10000,
                        "packing_fee": 0,
                        "recent_rating": 4.33,
                        "promotion_stock": -1,
                        "price": 11,
                        "sold_out": false,
                        "recent_popularity": 0,
                        "is_essential": false,
                        "item_id": "200000042779481921",
                        "checkout_mode": 1,
                        "specs": [{
                            "name": "规格",
                            "value": "默认"
                        }],
                        "partial_reduce_activity_id": null,
                        "stock": 0
                    }
                ],
                "category_id": 515951206
            },
            count: 5
        },
        {
            shoppingInfo: {
                "image_url": "../../images/001.png",
                "rating": 4.5,
                "is_featured": 0,
                "virtual_food_id": 1263621805,
                "cold_box": null,
                "restaurant_id": 640443,
                "display_times": [{
                    "begin": 1506096000,
                    "end": 1506182340
                }],
                "attrs": [{
                        "values": [
                            "常规糖",
                            "多糖",
                            "半糖",
                            "微糖",
                            "无糖"
                        ],
                        "name": "糖度"
                    },
                    {
                        "values": [
                            "常规冰",
                            "多冰",
                            "少冰",
                            "去冰"
                        ],
                        "name": "温度"
                    }
                ],
                "description": "鲜美红嫩的草莓，具有浓郁的果香，与鲜醇牛奶调制融合，带来清新丝滑般的舌尖享受！",
                "month_sales": 9,
                "rating_count": 2,
                "tips": "2评价 月售9份",
                "image_path": "../../images/001.png",
                "specifications": [{
                    "values": [
                        "鲜醇草莓欧蕾/中杯",
                        "默认"
                    ],
                    "name": "规格"
                }],
                "server_utc": 1506170074,
                "is_essential": false,
                "attributes": [],
                "item_id": "200000065148729153",
                "min_purchase": 1,
                "name": "鲜醇草莓欧蕾/中杯",
                "satisfy_count": 2,
                "activity": null,
                "satisfy_rate": 100,
                "specfoods": [{
                        "original_price": null,
                        "sku_id": "200000069759113025",
                        "name": "鲜醇草莓欧蕾/中杯",
                        "weight": 1,
                        "virtual_food_id": 1263621805,
                        "restaurant_id": 640443,
                        "food_id": 1268124133,
                        "packing_fee": 0,
                        "recent_rating": 4.5,
                        "promotion_stock": -1,
                        "price": 14,
                        "sold_out": false,
                        "recent_popularity": 9,
                        "is_essential": false,
                        "item_id": "200000065148729153",
                        "checkout_mode": 1,
                        "specs": [{
                            "name": "规格",
                            "value": "鲜醇草莓欧蕾/中杯"
                        }],
                        "partial_reduce_activity_id": null,
                        "stock": 9989
                    },
                    {
                        "original_price": null,
                        "sku_id": "-10000",
                        "name": "鲜醇草莓欧蕾/中杯",
                        "weight": 1,
                        "virtual_food_id": 1263621805,
                        "restaurant_id": 640443,
                        "food_id": -10000,
                        "packing_fee": 0,
                        "recent_rating": 4.5,
                        "promotion_stock": -1,
                        "price": 14,
                        "sold_out": false,
                        "recent_popularity": 0,
                        "is_essential": false,
                        "item_id": "200000065148729153",
                        "checkout_mode": 1,
                        "specs": [{
                            "name": "规格",
                            "value": "默认"
                        }],
                        "partial_reduce_activity_id": null,
                        "stock": 0
                    }
                ],
                "category_id": 1228440146
            },
            count: 2
        }
    ],
    windowHeight:0
      }
})
