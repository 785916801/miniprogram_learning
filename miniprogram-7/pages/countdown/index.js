function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if necessary
    const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if necessary
    return `${year}-${month}-${day}`;
  }
  
  Page({
    data: {
      targetDate: '', // 用户输入的目标日期
      calcDate: null,
    },
  
    onLoad: function (options) {
      this.countdown();
    },
  
    // 获取用户输入的目标日期
    bindDateChange: function (e) {
      const targetDate = e.detail.value;
      this.setData({
        targetDate: formatDate(new Date(targetDate)),
      }, () => {
        // 在 setData 完成后调用 countdown
        this.countdown();
      });
    },
  
    countdown: function () {
      if (!this.data.targetDate) {
        return;
      }
  
      const now = new Date();
      if (isNaN(now.getTime())) {
        console.log("Invalid current date");
        return;
      }
  
      const targetDate = new Date(this.data.targetDate);
      if (isNaN(targetDate.getTime())) {
        console.log("Invalid target date:", this.data.targetDate);
        return;
      }
  
      const timeDiff = targetDate - now;
      if (isNaN(timeDiff)) {
        console.log("Invalid time difference");
        return;
      }
  
      let calcDate;
      if (timeDiff <= 0) {
        const daysPassed = Math.ceil(Math.abs(timeDiff) / (1000 * 60 * 60 * 24));
        calcDate = -daysPassed; // 将值设为负数表示过去的天数
      } else {
        calcDate = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      }
  
      this.setData({
        calcDate,
      });
    },
  });
  