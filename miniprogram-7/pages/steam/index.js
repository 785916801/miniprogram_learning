Page({
    data: {
      items: [],
      showPopup: false,
      sortOptions: [
        { value: 'buy', text: '最优求购' },
        { value: 'safe_buy', text: '稳定求购' },
        { value: 'sell', text: '最优寄售' },
      ],
      sortIndex: 0,
      min_volume: 5,
      min_price: 1,
      max_price: 5000,
      windowWidth: 0,
      windowHeight: 0,
    },

    onLoad: function () {
      this.fetchData();
      wx.getSystemInfo({
        success: res => {
          this.setData({
            windowWidth: res.windowWidth,
            windowHeight: res.windowHeight
          });
          this.setFilterButtonWidth();
        }
      });
    },
    setFilterButtonWidth: function () {
        const screenWidth = this.data.windowWidth;
        const buttonWidth = screenWidth - 40; // 假设左右各留出 20px 的边距
        this.setData({
          filterButtonWidth: buttonWidth
        });
      },
    onFilterButtonClick: function() {
        this.setData({ showPopup: true });
    },
    onFilterClose: function(){
        this.setData({ showPopup: false });
    },
    onFilterApply: function() {
      this.setData({ showPopup: false });
      this.fetchData();
    },

    onSortChange: function(e) {
      this.setData({ sortIndex: e.detail.value });
    },

    onMinVolumeInput: function(e) {
      this.setData({ min_volume: e.detail.value });
    },

    onMinPriceInput: function(e) {
      this.setData({ min_price: e.detail.value });
    },

    onMaxPriceInput: function(e) {
      this.setData({ max_price: e.detail.value });
    },

    fetchData: function () {
      wx.request({
        url: 'https://www.yuyouwen.top/api/steam?',
        data:{
            sort_by: this.data.sortOptions[this.data.sortIndex].value,
            platforms: "buff-igxe-uuyp-c5",
            min_volume: this.data.min_volume,
            min_price: this.data.min_price,
            max_price: this.data.max_price,
            page_size: 50,
        },
        success: res => {
          if (res.data.success) {
            this.setData({ items: res.data.data });
          }
        },
        fail: err => {
          console.error(err);
        }
      });
    }
});
