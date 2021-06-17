// 发布订阅者模式
const EventEmit = function() {
  this.events = {};
  this.on = function(name, cb) {
    if (this.events[name]) {
      this.events[name].push(cb);
    } else {
      this.events[name] = [cb];
    }
  };
  this.trigger = function(name, ...arg) {
    if (this.events[name]) {
      this.events[name].forEach(eventListener => {
        eventListener(...arg);
      });
    }
  };
};

function sss(){
  let event = new EventEmit();
  event.on('success', (info) => {
    console.log('更新消息中心', info);
  });
  event.trigger('success', "name");
}

sss();
