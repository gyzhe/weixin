Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {
        id:1,
        name:'女装',
        ishavechild:true,
        children:[
          {
            child_id:1,
            pic: '/images/pic1.jpg',
            text:'饭桶张 棉服女短款加厚2017新款冬季宽松百搭紫色棒球棉衣外套潮', 
            url:'../page/pagetable/pagetable' 
          },
          {
            child_id:2,
            pic: '/images/pic2.jpg',
            text: '纯手工双面羊毛大衣女2017秋冬新款显瘦中长款羊毛呢子外套无羊绒',
            url: '../page/pagetables/pagetables' 
          },
          {
            child_id:3,
            pic: '/images/pic6.webp',
            text: '2018春装新款中长款宽松毛衣外套女开衫过膝韩版麻花针织衫加厚bf',
            url: '../page/pagetablethree/pagetablethree',
          },
          {
            child_id:4,
            pic: '/images/pic7.webp',
            text: '2018春装新款潮女装长款毛衣连衣裙过膝秋冬裙子早春复古港味长裙',
            url: '../page/pagetablefo/pagetablefo',
          }
        ]
      },
      {
        id: 2,
        name: '男装',
        ishavechild: false,
        children: []
      },
      {
        id: 3,
        name: '裤子',
        ishavechild: true,
        children: [
          {
            child_id:1,
            pic: '/images/pic4.webp',
            text: 'FFAN泛泛 加厚运动裤女加绒长裤宽松阔腿裤',
            url: '../page/pagetabletwo/pagetabletwo',
          },
          {
            child_id:2,
            pic: '/images/pic5.webp',
            text: '相信这款，版型真的超棒！N个小客服自留！复古宽腿 阔腿裤牛仔裤',
          }
        ]
      }
    ],
  },
  //事件处理函数  
  switch: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})