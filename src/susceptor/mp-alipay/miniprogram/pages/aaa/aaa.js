Page({
    /**
     * 页面的初始数据
     */
    data: {},
    onLoad() {
        // this.setData({ isDev: __wxConfig.envVersion === 'develop' });
    },
    goplugin(e) {
        my.navigateTo({
            url: `plugin://my-plugin/hello`,
        });
    },
});
