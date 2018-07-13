// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     delbtnWidth:200,//删除按钮宽度
     list:[
       {
         txtStyle:'',
         name:'张三',
         add:'深圳市南山区科技园南区',
         phone:18834562345
       },
       {
         txtStyle: '',
         name: '李四',
         add: '深圳南山区科技园汇景豪苑海欣阁',
         phone:13589084890
       },
     ]
  },
  //手指刚放到屏幕触发
  touchS(e){
   // console.log("touchS"+e);
    //判断是否只有一个接触点
    if(e.touches.length==1){
      this.setData({
        //记录触摸起始位置的x坐标
        startX:e.touches[0].clientX
      });
    }
  },
 //触摸时，起作用，手指在屏幕上每移动一次，触发一次
 touchM(e){
   //console.log(e);
   var that=this
   if(e.touches.length==1){
     //记录触摸点位置的X坐标
     var moveX=e.touches[0].clientX;
     //计算手指起始点的X坐标与当前触摸点的X坐标的差值
     var disX=that.data.startX-moveX;
     //delbtnWidth按钮宽度
     var delbtnWidth = this.data.delbtnWidth;
     //移动距离
     var txtStyle='';
     if(disX==0||disX<0){
       txtStyle="left:0rpx";
     }else if(disX>0){
       txtStyle="left:-"+disX+"rpx";
       if (disX >= delbtnWidth){
         txtStyle = "left:-" + delbtnWidth+"rpx";
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
 touchE(e){
   var that=this
   if(e.changedTouches.length==1){
     //手指移动结束后触摸位置的X坐标
     var endX=e.changedTouches[0].clientX;
     //触摸开始与结束，手指移动的距离
     var disX=that.data.startX-endX;
     var delbtnWidth = this.data.delbtnWidth;
     console.log(delbtnWidth);
     //如果距离小于删除按钮的1/2，不显示删除按钮
     var txtStyle = disX > delbtnWidth / 2 ? "left:-" + delbtnWidth+"rpx":"left:0rpx";
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
 //点击按钮删除
 delbtn(e){
   console.log(e);
   //获取列表中要删除项的下标
   var index=e.target.dataset.index;
   var list =this.data.list;
   //移除列表中下标为index的项
   list.splice(index,1);
   //更新列表的状态
   this.setData({
     list:list
   })
 },
 //跳到添加地址页面
 toaddress(){
   wx.redirectTo({
     url: '../getaddress/getaddress',
   });
 },
 /**
   * 生命周期函数--监听页面加载  追加新建地址
   */
 onLoad: function (options) {
   console.log(options);
   var list=this.data.list;
   var flag = false;//判断是从哪个页面跳转过来  
   flag = options.flag;  
   if (flag) {
     list.push({
        name:options.name,
        add: options.add,
        phone:options.phone
     })
     this.setData({
       list: list
     })
   };
 }  
})