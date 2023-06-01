// pages/weather/weather.js
Page({
    data: {
      longitude: '', // 经度
      latitude: '',  // 纬度
      weatherData: {}, // 天气数据
    },
    onLoad: function (options) {
      this.getGeoLocation();
    },
    getGeoLocation: function () {
      const that = this;
      wx.authorize({
        scope: 'scope.userLocation',
        success() {
          wx.getLocation({
            type: 'wgs84',
            success(res) {
              const latitude = res.latitude.toFixed(2); // 截取纬度小数点后两位
              const longitude = res.longitude.toFixed(2); // 截取经度小数点后两位
              that.setData({
                latitude: latitude,
                longitude: longitude
              });
              that.getWeatherData(latitude, longitude);
            },
            fail(err) {
              // 处理错误
              console.log(err);
            }
          })
        },
        fail() {
          // 处理错误
        }
      });
    },
    getWeatherData: function (latitude, longitude) {
      const that = this;
      wx.request({
          url: 'https://devapi.qweather.com/v7/weather/7d?',
          data: {
            location: longitude + "," + latitude,
            key: 'f924bd0c1fd3445aa1dbeeb6afe78639'
          },
        success(res) {
          that.setData({
            weatherData: res.data,
            daily: res.data.daily,
            low: res.data.daily[0].tempMin,
            high: res.data.daily[0].tempMax,
          })
        },
        fail(err) {
          // 处理错误
          console.log(err);
        }
      }),
      wx.request({
        url: 'https://devapi.qweather.com/v7/weather/now?',
        data: {
          location: longitude + "," + latitude,
          key:'f924bd0c1fd3445aa1dbeeb6afe78639'
        },
        success: function(res) {
          that.setData({
            temp: res.data.now.temp,
            type: res.data.now.text,
            windDir: res.data.now.windDir,
            windScale: res.data.now.windScale
          })
        }
      }),
      wx.request({
        url: 'https://geoapi.qweather.com/v2/city/lookup?',
        data: {
          location: longitude + "," + latitude,
          key:'f924bd0c1fd3445aa1dbeeb6afe78639'
        },
        success: function(res) {
          console.log(res)
          that.setData({
            province:res.data.location[0].adm1,
            city:res.data.location[0].adm2,
            district:res.data.location[0].name
          })
        }
      });
    }
  });
  