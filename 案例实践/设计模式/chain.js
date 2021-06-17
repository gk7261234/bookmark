// 责任链模式

const Chain = function(fn) {
  this.fn = fn;
  
  this.setNext = function() {}

  this.run = function() {}
}

const applyDevice = function() {
  console.log("apply device")
}
const chainApplyDevice = new Chain(applyDevice);

const selectAddress = function() {
  console.log("address")
}
const chainSelectAddress = new Chain(selectAddress);

const selectChecker = function() {
  console.log("checker")
}
const chainSelectChecker = new Chain(selectChecker);

chainApplyDevice.setNext(chainSelectAddress).setNext(chainSelectChecker);
chainApplyDevice.run();
