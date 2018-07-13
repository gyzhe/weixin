var app = getApp()
Page({
  data:{
    userInfo: {},//用户信息对象，不包含 openid 等敏感信息
    carList:[
      {
        icon: '/images/iconfont-dingdan.png',
        text: '我的收藏',
        url: '../collect/collect'
      }, {
        icon: '/images/iconfont-card.png',
        text: '我的代金券',
      }, {
        icon: '/images/iconfont-icontuan.png',
        text: '我的拼团',
      }, {
        icon: '/images/iconfont-shouhuodizhi.png',
        text: '收货地址管理',
        url:'../address/address'
      }, {
        icon: '/images/iconfont-kefu.png',
        text: '联系客服'
      }, {
        icon: '/images/iconfont-help.png',
        text: '常见问题'
      }
    ],
    item: {
      signinHidden: false,
      userlocal: {
        nickName: '',  //用户昵称
        nickPwd: ''
      }
    }
  },
    onLoad: function (options) {
      // 页面初始化 options为页面跳转所带来的参数

    },
    modalconfirm: function () {
      //将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口
      wx.setStorageSync('username', this.data.item.userlocal.nickName);
      wx.setStorageSync('password', this.data.item.userlocal.nickPwd);
      this.setData({
        'item.signinHidden': true
      })
    },
    modalcancel: function () {
      var that = this;
      wx.login({ //调用接口获取登录凭证（code）进而换取用户登录态信息
        success: function () {
          wx.getUserInfo({ //获取用户信息
            success: function (res) {

              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      })


      this.onShow();
      this.setData({
        'item.signinHidden': true
      })
    },
    quit: function () {
      this.setData({
        userInfo: '',
        'item.signinHidden': false
      })
    },
    saveusername: function (event) {
      this.setData({
        'item.userlocal.nickName': event.detail.value
      });
    },
    saveuserpwd: function (event) {
      this.setData({
        'item.userlocal.nickPwd': event.detail.value
      });
    },
    onReady: function () {

      // 页面渲染完成
    },
    onShow: function () {
      if (this.data.userInfo == '') {
        this.setData({
          'item.signinHidden': false
        })
      }

    },
    onHide: function () {
      // 页面隐藏
    },
    onUnload: function () {
      // 页面关闭
    }
})