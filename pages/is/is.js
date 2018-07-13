var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["综合", "销量", "猜你喜欢"],
    list: [
      {
        pic: '/images/pic1.jpg',
        text: '饭桶张 棉服女短款加厚2017新款冬季宽松百搭紫色棒球棉衣外套潮',
        price: '230',
        num: '34',
        url:"../page/pagetable/pagetable"
      },
      {
        pic: '/images/pic2.jpg',
        text: '纯手工双面羊毛大衣女2017秋冬新款显瘦中长款羊毛呢子外套无羊绒',
        price: '688',
        num: '9',
        url: "../page/pagetables/pagetables"
      },
      {
        pic: '/images/pic3.webp',
        text: '欧洲站毛呢外套女中长款2017冬新款欧货格子呢子大衣过年衣服女装',
        price: '288',
        num: '4',
        url: "../page/pagetableone/pagetableone"
      },
      {
        pic: '/images/pic4.webp',
        text: 'FFAN泛泛 加厚运动裤女加绒长裤宽松阔腿裤',
        price: '168',
        num: '3',
        url: '../page/pagetabletwo/pagetabletwo',
      },
      {
        pic: '/images/pic5.webp',
        text: '相信这款，版型真的超棒！N个小客服自留！复古宽腿 阔腿裤牛仔裤',
        price: '80',
        num: '0',
      },
      {
        pic: '/images/pic6.webp',
        text: '2018春装新款中长款宽松毛衣外套女开衫过膝韩版麻花针织衫加厚bf',
        price: '99',
        num: '1217',
        url: '../page/pagetablethree/pagetablethree',
      },
      {
        pic: '/images/pic7.webp',
        text: '2018春装新款潮女装长款毛衣连衣裙过膝秋冬裙子早春复古港味长裙',
        price: '179',
        num: '205',
        url: '../page/pagetablefo/pagetablefo',
      },
    ],
    listthree:[
      {
        pic: '/images/pic7.webp',
        text: '2018春装新款潮女装长款毛衣连衣裙过膝秋冬裙子早春复古港味长裙',
        price: '179',
        num: '205',
        url: '../page/pagetablefo/pagetablefo',
      },
      {
        pic: '/images/pic4.webp',
        text: 'FFAN泛泛 加厚运动裤女加绒长裤宽松阔腿裤',
        price: '168',
        num: '3',
        url: '../page/pagetabletwo/pagetabletwo',
      },
      {
        pic: '/images/pic2.jpg',
        text: '纯手工双面羊毛大衣女2017秋冬新款显瘦中长款羊毛呢子外套无羊绒',
        price: '688',
        num: '9',
        url: '../page/pagetables/pagetables',
      },
      {
        pic: '/images/pic8.jpg',
        text: '裤子女学生宽松韩版ulzzang 百搭拉夏贝尔7m春装装新款开叉阔腿裤',
        price: '145',
        num: '27',
      },
    ],
    listtwo: [
      {
        pic: '/images/photo1.jpg',
        text: 'VEGA C/2018春季新品 欧美小众设计 灰色宽松中长款双排扣风衣女',
        price: '325',
        num: '100',
        url: '../page/pagetablefive/pagetablefive',
      },
      {
        pic: '/images/photo2.webp',
        text: '林小宅12点向日宅物刺绣兔子毛衣180126',
        price: '688',
        num: '80',
      },
      {
        pic: '/images/photo3.jpg',
        text: '大喜自制 2017春季新品 喇叭袖中长款复古樱花印花连衣裙',
        price: '139',
        num: '55',
      },
      {
        pic: '/images/photo4.jpg',
        text: '针创社 掌柜自留原创复古盘扣圆领薄款棉麻碎花短袖T恤女中国风',
        price: '69.9',
        num: '3',
      },
      {
        pic: '/images/pic4.webp',
        text: 'FFAN泛泛 加厚运动裤女加绒长裤宽松阔腿裤',
        price: '168',
        num: '3',
        url: '../page/pagetabletwo/pagetabletwo',
      },
      {
        pic: '/images/pic5.webp',
        text: '相信这款，版型真的超棒！N个小客服自留！复古宽腿 阔腿裤牛仔裤',
        price: '80',
        num: '0',
      },
    ],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    inputShowed: false,
    inputVal: "",
  },
  // navbar
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  // navbar
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});