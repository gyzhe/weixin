var app=getApp();

Page({
  data: {
     haslist:true,
     delbtnWidth: 200,//删除按钮宽度
     allprice:0, //总价
     selectAllStatus: true,    // 全选状态
     list: [
       {
         img: '/images/pic5.webp',
         name: '牛仔裤',
         price: 80,
         num: 1,
         selected: true,
       }
     ] 
  },
  // 跳到首页
  toindex() {
    wx.switchTab({
      url: '../index/index',
    });
  },
  //点击按钮删除
  delbtn(e) {
    console.log(e);
    //获取列表中要删除项的下标
    var index = e.target.dataset.index;
    var list = this.data.list;
    var haslist = this.data.haslist;
    //移除列表中下标为index的项
    list.splice(index, 1);
    if(list.length==0){
      haslist=!haslist;
    }
    //更新列表的状态
    this.setData({
      haslist:haslist,
      list: list
    });
    this.getallprice();
  },
  //计算总价
  getallprice(){
    //获取购物车列表
    var lists=this.data.list;
    var all=0;
    for(var i=0;i<lists.length;i++){
      if (lists[i].selected==false){
        all += lists[i].num * lists[i].price;
        }    
    }
    this.setData({
      list: lists,
      allprice:all
    })
  },
  //改变商品列表icon的状态
  changeicon(e){
    let selectAllStatus = this.data.selectAllStatus;
     var index = e.currentTarget.dataset.index;
     var lists = this.data.list;
     lists[index].selected = !lists[index].selected;
      for(var i=0;i<lists.length;i++){
       if(lists[i].selected){
         selectAllStatus = lists[i].selected;
       }
    }
     this.setData({
       selectAllStatus: selectAllStatus,
       list: lists
     });
     this.getallprice();
  },
  //改变商品总价icon状态
  changAllicon(e){
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    var lists = this.data.list;
    for(var i=0;i<lists.length;i++){
      lists[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus:selectAllStatus,
      list: lists
    });
    this.getallprice();
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
    this.getallprice();
  },
  //数量减少
  delcount(e) {
    var index = e.currentTarget.dataset.index;
    var lists = this.data.list;
    var num = lists[index].num;
    if (num <= 1) {
      return false;
    }
    num -= 1;
    lists[index].num = num;
    this.setData({
      list: lists
    });
    this.getallprice();
  },
  onShow(){
     var that=this;
     var arr = wx.getStorageSync('mydata') || [];
     var list=this.data.list;
     list.push({
       img:arr[0].img,
       num:arr[0].num,
       price:arr[0].price,
       name: arr[0].name,
       selected: true
     })
     this.setData({
       list:list
     })
  },
touchS(e) {
    if(e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX
      });
    }
  },
touchM(e) {
    var that = this
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = that.data.startX - moveX;
      //delbtnWidth按钮宽度
      var delbtnWidth = this.data.delbtnWidth;
      //移动距离
      var txtStyle = '';
      if (disX == 0 || disX < 0) {
        txtStyle = "left:0rpx";
      } else if (disX > 0) {
        txtStyle = "left:-" + disX + "rpx";
        if (disX >= delbtnWidth) {
          txtStyle = "left:-" + delbtnWidth + "rpx";
        }
      }
      //获取手指触发的是哪一个item
      var index = e.currentTarget.dataset.index;
      var list = that.data.list;
      //将拼接好的样式设置到当前item中
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      this.setData({
        list: list
      })
    }
  },
 touchE(e) {
    var that = this
    if (e.changedTouches.length == 1) {
      //手指移动结束后触摸位置的X坐标
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = that.data.startX - endX;
      var delbtnWidth = this.data.delbtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delbtnWidth / 2 ? "left:-" + delbtnWidth + "rpx" : "left:0rpx";
      //获取手指触发的是哪一个item
      var index = e.currentTarget.dataset.index;
      var list = that.data.list;
      //将拼接好的样式设置到当前item中
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      this.setData({
        list: list
      })
    }
  }
})