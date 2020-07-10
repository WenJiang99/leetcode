var CQueue = function () {
  this.insertStack = []
  this.deleteStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.insertStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.deleteStack.length === 0) {
    while (this.insertStack.length > 0) {
      this.deleteStack.push(this.insertStack.pop())
    }
  }
  const value = this.deleteStack.pop()
  return value === undefined ? -1 : value;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */