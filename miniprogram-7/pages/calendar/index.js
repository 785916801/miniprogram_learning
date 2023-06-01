Page({
    data: {
      year: new Date().getFullYear(),  // 当前年份
      month: new Date().getMonth() + 1,  // 当前月份
      weekdays: ['日', '一', '二', '三', '四', '五', '六'],  // 星期标题
      weeks: []  // 月份中的周
    },
  
    onLoad: function(options) {
      this.calculateDays();
    },
  
    bindDateChange: function(e) {
      const date = new Date(e.detail.value);
      this.setData({
        year: date.getFullYear(),
        month: date.getMonth() + 1
      });
      this.calculateDays();
    },
  
    prevMonth: function() {
      let {year, month} = this.data;
      if (month === 1) {
        month = 12;
        year--;
      } else {
        month--;
      }
      this.setData({year, month});
      this.calculateDays();
    },
  
    nextMonth: function() {
      let {year, month} = this.data;
      if (month === 12) {
        month = 1;
        year++;
      } else {
        month++;
      }
      this.setData({year, month});
      this.calculateDays();
    },
  
    // 计算每月的天数
    calculateDays: function() {
      const year = this.data.year;
      const month = this.data.month;
      const days = this.getDaysInMonth(year, month);
      const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
  
      let weeks = [];
      let week = [];
      let dayIndex = 1;
  
      // Add leading blank days
      for (let i = 0; i < firstDayOfWeek; i++) {
        week.push('');
      }
  
      // Add days of the month
      while(dayIndex <= days) {
        if (week.length === 7) {
          weeks.push(week);
          week = [];
        }
        week.push(dayIndex++);
      }
  
      // Add trailing blank days
      while(week.length < 7) {
        week.push('');
      }
      weeks.push(week);
  
      this.setData({
        weeks: weeks
      });
    },
  
    getFirstDayOfWeek: function(year, month) {
      const date = new Date(year, month - 1, 1); // months are zero-indexed
      return (date.getDay() + 6) % 7; // Convert Sunday from 0 to 7
    },
  
    getDaysInMonth: function(year, month) {
      return new Date(year, month, 0).getDate();
    }
  });
  