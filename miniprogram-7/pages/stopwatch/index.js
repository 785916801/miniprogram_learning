// index.js
Page({
    data: {
      time: '00:00.00',
      showStart: true,
      showPause: false,
      showReset: false,
      showSegment: false,
      timer: null,
      startTime: null,
      elapsedTime: 0,
      segmentTimes: [],
      lastSegmentTime: 0
    },
  
    startStopwatch: function () {
      const currentTime = Date.now();
      const startTime = currentTime - this.data.elapsedTime;
      const timer = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const time = this.formatTime(elapsedTime);
  
        this.setData({
          time,
          startTime,
          elapsedTime,
          showStart: false,
          showPause: true,
          showReset: false,
          showSegment: true
        });
      }, 10);
  
      this.setData({ timer });
    },
  
    pauseStopwatch: function () {
      clearInterval(this.data.timer);
      this.setData({
        showStart: true,
        showPause: false,
        showReset: true,
        showSegment: false
      });
    },
  
    resetStopwatch: function () {
      clearInterval(this.data.timer);
      this.setData({
        time: '00:00.00',
        showStart: true,
        showPause: false,
        showReset: false,
        showSegment: false,
        timer: null,
        startTime: null,
        elapsedTime: 0,
        segmentTimes: [],
        lastSegmentTime: 0
      });
    },
  
    formatTime: function (milliseconds) {
        const totalMins = Math.floor(milliseconds / (60 * 1000));
        const secs = Math.floor((milliseconds % (60 * 1000)) / 1000);
        const millisecs = Math.floor((milliseconds % 1000) / 10);
    
        const formatted = [
          totalMins.toString().padStart(2, '0'),
          secs.toString().padStart(2, '0'),
          millisecs.toString().padStart(2, '0')
        ];
    
        return formatted.join(':');
    },
    
  
    recordSegment: function () {
      const currentTime = Date.now();
      const elapsedTime = currentTime - this.data.startTime;
      const segmentTime = elapsedTime - this.data.lastSegmentTime;
      const formattedSegmentTime = this.formatTime(segmentTime);
      const segmentTimes = [formattedSegmentTime, ...this.data.segmentTimes];
      this.setData({ segmentTimes, lastSegmentTime: elapsedTime });
    }
  });
