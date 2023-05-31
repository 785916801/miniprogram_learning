function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() 返回的月份是从 0 开始的
    const day = date.getDate();
  
    return `${year}-${month}-${day}`;
  }  

Page({
    data: {
      targetDate: '', // 用户输入的目标日期
      calcDate: 0,
    },
  
    onLoad: function (options) {
      this.countdown();
    },
  
    // 获取用户输入的目标日期
    bindDateChange: function (e) {
        const targetDate = e.detail.value;
        this.setData({
          targetDate: formatDate(new Date(targetDate)),
          calcDate: 0, // 添加此行代码以重置 calcDate 的值
        });
        this.countdown();
      },
      
  
      countdown: function () {
        const now = new Date();
        const targetDate = new Date(this.data.targetDate);
        const timeDiff = targetDate - now;
      
        if (timeDiff <= 0) {
          const daysPassed = Math.ceil(Math.abs(timeDiff) / (1000 * 60 * 60 * 24));
          this.setData({
            calcDate: -daysPassed, // 将值设为负数表示过去的天数
          });
        } else {
          const calcDate = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
          this.setData({
            calcDate,
          });
        }
      },
      
      
  });
  