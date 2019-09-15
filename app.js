App({
//生命周期函数
//小程序初始化完成时执行
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log('小程序初始化完成了'),
    //wx.request(}
    //})
    // 获取用户信息函数
    // wx.getUserInfo({
      // success: function(res){
        // console.log(res)
      // }
    // })
    //注释掉下行代码时，需要删除onlaunch后面括号里面的options
    console.log(options)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  //小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    // console.log("界面显示出来：onShow")
    //1、判断进入小程序的场景
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }

    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面被隐藏时会执行")
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序中发生一些错误时才执行")
    
  },
  globalData:{
    name:"saowen",
    age:21
  }
})
