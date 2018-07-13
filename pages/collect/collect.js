// pages/collect/collect.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        img: '/images/pic5.webp',
        name: '相信这款，版型真的超棒！N个小客服自留！复古宽腿 阔腿裤牛仔裤',
        price: 80,
      }
    ] 
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  onShow() {
    var that = this;
    var arr = wx.getStorageSync('page') || [];
    var list = this.data.list;
    list.push({
      img: arr[0].img,
      name: arr[0].name,
      price: arr[0].price
    })
    this.setData({
      list: list
    })
  },
  clear(e) {
    console.log(e);
    var index=e.currentTarget.dataset.index;
    var list = this.data.list;
    list.splice(index, 1);
    // try {
    //   wx.removeStorageSync('page')
    // } catch (e) {
    //   // Do something when catch error
    // }
   
    this.setData({
      list: list
    })
  },

})