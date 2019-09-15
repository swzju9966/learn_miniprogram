// pages/home/home.js
//getApp(0)获取App（）产生的示例对象
const app = getApp()
console.log(app.globalData.name)
//注册一个页面
Page({
  //初始化一些数据
  data:{
    name:"Hu Shaowen",
    age:21,
    students:[
      {id:1,name:"hu",age:18},
      {id:2,name:"sun",age:18},
      {id:3,name:"li",age:19}
    ],
    // 变量不可以0开头
    counter:0,
  },
  handleBtnClick(){
    // 1.错误做法
    // console.log("按钮发生了点击")
    // this.data.counter += 1
    // console.log(this.data.counter)
    // this.setData
    this.setData({
      counter:this.data.counter += 1
    })
     },
  handleSubtraction(){
    // console.log("点击了减号")
    this.setData({
      counter:this.data.counter -= 1
    })
  },
  //监听页面生命周期
  //页面被加载时
  onLoad(){
    console.log("onLoad")
    //网络请求
    // wx.request({
      //
      // url: 'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
      // success: (res) => {
        // console.log(res)
      // }
    // })

  },
  //页面显示出来时
  onShow(){
    console.log("onShow")

  },
  //页面 初次 渲染完成时
  onReady(){
    console.log("onReady")

  },
  //当页面隐藏时
  onHide(){
    console.log("onHide")

  },
  //
  onUnload(){
    console.log("onUnload")

  },
  //监听wxml中相关的事件
  handleGetUserInfo(event) {
    console.log(event)
  },
  //监听其他事件监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log("页面滚动到底部")
  },
  //监听下拉事件
  onPullDownRefresh(){
    console.log("下拉刷新")
  }


})
