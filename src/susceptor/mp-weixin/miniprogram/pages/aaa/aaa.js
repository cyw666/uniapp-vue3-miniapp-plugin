Page({
    /**
     * 页面的初始数据
     */
    data: {},
    onLoad() {},
    goplugin() {
        wx.navigateTo({
            url: `plugin://my-plugin/hello`,
        });
    },
});
