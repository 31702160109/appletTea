// pages/myOrder/myOrder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        status: '1',
        orderText: '待付款',
        displayNone: 'display: none',
        displayBlock: 'display: block',
        shopList:[
            {
                orderNumber: 12654456569642,
                shopTitle: "【中草药配方：金花茶、普华影、淡竹叶、荷叶、鱼腥草、桃仁】",
                shopSize: 10,
                shopNumber: 30000,
                shopMoney: 81288
            },
            {
                orderNumber: 12654456569642,
                shopTitle: "【壮瑶茗茶】蒲公英金花茶",
                shopSize: 10,
                shopNumber: 30,
                shopMoney: 888
            },
            {
                orderNumber: 893224456569642,
                shopTitle: "【壮瑶茗茶】蒲公英金花茶蒲公英金花茶蒲公英金花茶蒲公英金花茶",
                shopSize: 10,
                shopNumber: 630,
                shopMoney: 6288
            },
            {
                orderNumber: 39789645464356,
                shopTitle: '金花茶',
                shopSize: 140,
                shopNumber: 10,
                shopMoney: 762
            },
            {
                orderNumber: 393235235611256,
                shopTitle: '功夫茶金花茶金花茶金花茶',
                shopSize: 40,
                shopNumber: 7310,
                shopMoney: 70762
            },
        ]
    },

    detailsBtn:function(event){
        wx.navigateTo({
            url: '../details/details',
        })
    },

    orderStatus: function(e){
        var statusText = e.target.dataset.text;
        var statusId = this.data.status;
        this.setData({
            status: statusId
        });
        if(statusText === '待付款'){
            this.setData({
                status: 1,
                orderText: statusText
            });
        }
        if (statusText === '待发货') {
            this.setData({
                status: 2,
                orderText: statusText
            });
        }
        if (statusText === '待收货') {
            this.setData({
                status: 3,
                orderText: statusText
            });
        }
        if (statusText === '退款/售后') {
            this.setData({
                status: 4,
                orderText: statusText,
            });
        }
    },

  /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {
        var orderId = options.id;
        var orderText = options.orderText;
        this.setData({
            status: orderId,
            orderText: orderText
        });
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})