Page({
  onLoad(options) {
    let _this = this;
    wx.getSystemInfo({
        success:function(res){
            _this.setData({windowHeight:res.windowHeight});
            _this.setData({windowWidth:res.windowWidth});
        }
    })
    },
    data: {
      displayResult: '',
      operation: '',
      operator: ['+', '-', '*', '/', '='],
      lastOperator: ''
    },

    calculate: function (operation) {
      let operands = operation.split(' ');
      let operand1 = parseFloat(operands[0]);
      let operand2 = parseFloat(operands[2]);
      let result = 0;
  
      switch (operands[1]) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
        default:
          break;
      }
  
      return result.toString();
    },
    btnTap: function(e) {
      let value = e.target.dataset.value;
      let operation = this.data.operation;
      let lastOperator = this.data.lastOperator;
      
      if(value === 'AC') {
        this.setData({
          result: '',
          operation: '',
          lastOperator: ''
        });
        return;
      }
    
      if(this.data.operator.includes(value)) {
        if(lastOperator && operation.includes(' ')) {
          let result = this.calculate(operation);
          this.setData({
            result: result,
            operation: result + ' ' + value + ' ',
            lastOperator: value
          });
        } else {
          operation += ' ' + value + ' ';
          lastOperator = value;
          this.setData({
            operation: operation,
            lastOperator: lastOperator
          });
        }
      } else {
        if (lastOperator == '/' && value == '0') {
          this.setData({
            result: 'Error',
            operation: '',
            lastOperator: ''
          });
        } else {
          operation += value;
          this.setData({
            operation: operation,
            lastOperator: lastOperator
          });
        }
      }
    }    
  });

