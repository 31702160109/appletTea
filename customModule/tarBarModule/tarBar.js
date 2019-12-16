// customModule/TarBarModule/tarBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 页面跳转
         */
        gotoPage: function (event) {
            const discern = event.target.id;
            const url = "/pages/" + discern + "/" + discern;
            // console.log(url);
            wx.reLaunch({
                url: url,
            })
        },
        //转发
        // onShareAppMessage: function () {
        //     let users = wx.getStorageSync('user');
        //     if (res.from === 'button') { }
        //     return {
        //         title: '转发',
        //         path: '../../pages/index/index',
        //         success: function (res) { 

        //         }
        //     }
        // },
    }
})
