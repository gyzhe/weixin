Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/banner2.png',
      '/images/banner3.webp',
      '/images/banner4.jpg',
    ],
    list:[
      {
        url:'../page/pagetable/pagetable',
        pic:'/images/pic1.jpg',
        text:'饭桶张 棉服女短款加厚2017新款冬季宽松百搭紫色棒球棉衣外套潮',
        price:'230',
        num:'34',
      },
      {
        url: '../page/pagetables/pagetables',
        pic: '/images/pic2.jpg',
        text: '纯手工双面羊毛大衣女2017秋冬新款显瘦中长款羊毛呢子外套无羊绒',
        price: '688',
        num: '2',
      },
      {
        url: '../page/pagetableone/pagetableone',
        pic: '/images/pic3.webp',
        text: '欧洲站毛呢外套女中长款2017冬新款欧货格子呢子大衣过年衣服女装',
        price: '288',
        num: '55',
      },
      {
        url: '../page/pagetabletwo/pagetabletwo',
        pic: '/images/pic4.webp',
        text: 'FFAN泛泛 加厚运动裤女加绒长裤宽松阔腿裤',
        price: '168',
        num: '3',
      },
      {
        pic: '/images/pic5.webp',
        text: '相信这款，版型真的超棒！N个小客服自留！复古宽腿 阔腿裤牛仔裤',
        price: '80',
        num: '0',
      },
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
  },

})