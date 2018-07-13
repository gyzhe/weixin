// pages/pagetable/pagetable.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData: "",
    showmodelstaute:false,
    isLike:true,
    num:10,
    imgUrls:[
      '/images/pic1.jpg',
      '/images/pictu1.webp',
      '/images/pictu2.webp'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    list:[
      {
        img:'/images/pictu2.webp',
        price:230,
        num:1,
        name:"饭桶张 棉服女短款加厚2017新款冬季宽松百搭紫色棒球棉衣外套潮"
      }
    ]
  },
  // 跳到首页
  toindex(){
    wx.switchTab({
      url:'../index/index',
    });
  },
  // 加入购物车
  imbuy(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    });
  },
  // 收藏
  addLike() {
    var list = this.data.list;
    try {
      wx.setStorageSync('page', list)
    } catch (e) {
      console.log(e)
    }
    this.setData({
      isLike: !this.data.isLike,
    });
  },
  //显示弹框
 showmodel(){
   var animation = wx.createAnimation({ 
     duration: 600,
     timingFunction: "linear",
     delay: 0,
   });
   this.animation = animation;
   animation.height(0).step();
   this.setData({
     showmodelstaute: true,
     animationData: animation.export(),   
   })
   setTimeout(function () {
     animation.height('500rpx').step()
     this.setData({
       animationData: animation.export()
     })
   }.bind(this), 600)  
 },
 //隐藏弹框
 hiddenmodel(){
   //用来创建动画实例
   var animation=wx.createAnimation({ 
      duration:600,
      timingFunction:"linear",
      delay:0,
   });
   //这个动画实例赋值给当前的动画实例
   this.animation = animation;
   //调用动画操作方法后要调用 step() 来表示一组动画完成
   animation.height('500rpx').step();
   this.setData({
     //输出动画 
     animationData: animation.export(),
     showmodelstaute: false
   })   
 },
 //数量增加
 addcount(e) {
   var index = e.currentTarget.dataset.index;
   var lists = this.data.list;
   var num = lists[index].num;
   num = num + 1;
   lists[index].num = num;
   this.setData({
     list: lists
   });
 },
 //数量减少
 delcount(e) {
   var index = e.currentTarget.dataset.index;
   var lists = this.data.list;
   var num = lists[index].num;
   if (num <= 1) {
     return false;
   }
   num -=1;
   lists[index].num = num;
   this.setData({
     list: lists
   });
 },
//提交数据到购物车中
 postcar(e) {
   var that = this;
   var list = this.data.list;
   try {
     wx.setStorageSync('mydata', list)
   } catch (e) {
     console.log(e)
   }
 },
})