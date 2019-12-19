// pages/my/my.js
import * as echarts from '../../ec-canvas/echarts';
var Chart = null;
const app = getApp();

Page({

    data: {
        username: '',
        ec: {
            onInit: function (canvas, width, height) {
                chart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(chart);
                return chart;
            },
            lazyLoad: true // 延迟加载
        },
    },

    myOrder: function(event){
        var orderId = event.currentTarget.id;
        var orderText = event.currentTarget.dataset.text;
        wx.navigateTo({
            url: '../myOrder/myOrder?id=' + orderId + '&orderText=' + orderText,
        })
    },
    commissionPage: function(event){
        wx.navigateTo({
            url: '../commission/commission',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.echartsComponnet = this.selectComponent('#mychart');
        //如果是第一次绘制
        if (!Chart) {
            this.init_echarts(); //初始化图表
        } else {
            this.setOption(Chart); //更新数据
        }

        var _this = this;
        wx.request({
            url: 'http://www.hminxin.cn:8000/computer/api/controller_b/login.php',
            method: 'post',
            data: {
                username: 'admin',
                password: 'admin'
            },
            header: { "Content-Type": "application/x-www-form-urlencoded" },
            success(res) {
                console.log(res.data.data.name);
                _this.setData({
                    username: res.data.data.name
                })
            },
            fail: function (res) {
                console.log(res.data);
            }
        });
    },

    //初始化图表
    init_echarts: function () {
        this.echartsComponnet.init((canvas, width, height) => {
            // 初始化图表
            const Chart = echarts.init(canvas, null, {
                width: width,
                height: height
            });
            this.setOption(Chart)
            // 注意这里一定要返回 chart 实例，否则会影响事件处理等
            return Chart;
        });
    },

    setOption: function (Chart) {
        Chart.clear();  // 清除
        Chart.setOption(this.getOption());  //获取新数据
    },

    // 图表配置项
    getOption() {
        var self = this;
        var option = {
            renderAsImage: true, //支持渲染为图片模式
            legend: {
                show: true,
                itemGap: 20,//每个图例间的间隔
                top: 20,
                right: 30,
                z: 100,
                selectedMode: 'single', //使用单选
                data: [//图例具体内容
                    { name: '周' }, //图例名字
                    { name: '月' },
                    { name: '年' }
                ]
            },
            grid: {//网格
                show: true,
                left: 20,
                top: 70,
                width: '85%', 
                height: '58%',
                containLabel: true, //grid 区域是否包含坐标轴的刻度标签
                borderWidth: 0,
            },
            xAxis: {//横坐标
                type: 'category',
                splitNumber: 7,//坐标轴的分割段数
                splitLine: {//坐标轴在 grid 区域中的分隔线。
                    show: false,
                },
                data: ['1', '2', '3', '4', '5', '6', '7'],
                axisLabel: {
                    show:true
                },
                axisTick: {
                    show: false//不显示坐标轴刻度线
                },
                axisLine: {
                    show: false,//不显示坐标轴线
                },
            },
            yAxis: {//纵坐标
                type: 'value',
                position: 'left',
                splitNumber: 6,//坐标轴的分割段数
                splitLine: {//坐标轴在 grid 区域中的分隔线。
                    show: true,
                    lineStyle: {
                        type: 'solid',
                        color: '#AAA'
                    }
                },
                axisTick: {
                    show: false//不显示坐标轴刻度线
                },
                axisLine: {
                    show: false,//不显示坐标轴线
                },
                axisLabel: {//坐标轴刻度标签
                    formatter: function (value) {
                        var xLable = [];
                        if (value == 0) {
                            xLable.push('10000');
                        }
                        if (value == 20) {
                            xLable.push('12000');
                        }
                        if (value == 40) {
                            xLable.push('14000');
                        }
                        if (value == 60) {
                            xLable.push('16000');
                        }
                        if (value == 80) {
                            xLable.push('18000');
                        }
                        if (value == 100) {
                            xLable.push('20000');
                        }
                        return xLable
                    },
                    textStyle: {
                        fontSize: 13,
                        color: '#5D5D5D',
                    }
                },
                min: 0,
                max: 100,
            },
            series: [
                {
                    name: '周',
                    type: 'line',
                    data: [0, 24, 36, 52, 69, 87, 100],
                    symbol: 'circle',
                }, 
                {
                    name: '月',
                    type: 'line',
                    data: [40, 34, 76, 12, 100, 87, 50],
                    symbol: 'circle',
                }, 
                {
                    name: '年',
                    type: 'line',
                    data: [80, 14, 66, 59, 29, 67, 0],
                    symbol: 'circle',
                }, 
            ],
        }
        return option;
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