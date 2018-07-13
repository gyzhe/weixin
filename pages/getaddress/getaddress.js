// pages/getaddress/getaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '汕头市', '潮阳区']
  
  },
  //提交表单
  formSumbit(e){
    var warn='';
    var that=this;
    var flag=false;
    if(e.detail.value.getname==''){
      warn="请输入姓名";
    }else if(e.detail.value.gettel==''){
      warn='请输入手机号';
    } else if(e.detail.value.getadd==''){
      warn='请输入详细地址';
    }else{
      flag=true;
      //console.log('form发生了submit事件，携带数据为：', e.detail.value);
     wx.redirectTo({
       url: '../address/address?name=' + e.detail.value.getname + "&add=" + e.detail.value.getadds + e.detail.value.getadd+"&phone="+e.detail.value.gettel+"&flag="+flag,
       
      });
    }
    if(flag==false){
      //显示模态弹窗
      wx.showModal({
        title: '提示',
        content: warn,
      })
    }
  },
  bindPickerCity: function (e) {
    console.log("选择的城市:", e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

})