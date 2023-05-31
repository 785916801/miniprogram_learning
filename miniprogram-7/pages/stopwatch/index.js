// index.js
Page({
    data: {
      time: '00:00:00.00',
      buttonText: 'Start',
      timer: null,
      startTime: null,
      elapsedTime: 0, // 新增经过的时间
      lapTimes: []
    },
  
    startStopwatch: function () {
      if (this.data.timer) {
        // Pause stopwatch
        clearInterval(this.data.timer);
        this.setData({ timer: null, buttonText: 'Resume' });
      } else {
        // Start or resume stopwatch
        const currentTime = Date.now();
        const startTime = currentTime - this.data.elapsedTime; // 使用已经经过的时间
        const timer = setInterval(() => {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;
          const time = this.formatTime(elapsedTime);
  
          this.setData({ time, elapsedTime });
        }, 10);
  
        this.setData({ timer, buttonText: 'Pause', startTime });
      }
    },
  
    resetStopwatch: function () {
      clearInterval(this.data.timer);
      this.setData({ time: '00:00:00.00', buttonText: 'Start', timer: null, startTime: null, elapsedTime: 0, lapTimes: [] });
    },
  
    formatTime: function (milliseconds) {
      const hours = Math.floor(milliseconds / (60 * 60 * 1000));
      const mins = Math.floor((milliseconds % (60 * 60 * 1000)) / (60 * 1000));
      const secs = Math.floor((milliseconds % (60 * 1000)) / 1000);
      const millisecs = Math.floor((milliseconds % 1000) / 10);
  
      const formatted = [
        hours.toString().padStart(2, '0'),
        mins.toString().padStart(2, '0'),
        secs.toString().padStart(2, '0'),
        millisecs.toString().padStart(2, '0')
      ];
  
      return formatted.join(':');
    },
  
    recordLap: function () {
      if (this.data.startTime) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - this.data.startTime;
        const lapTime = this.formatTime(elapsedTime);
        const lapTimes = [...this.data.lapTimes, lapTime];
        this.setData({ lapTimes });
      }
    }
  });
  