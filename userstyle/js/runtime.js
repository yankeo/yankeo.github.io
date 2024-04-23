// 获取当前日期时间
function getCurrentDateTime() {
    return new Date();
}

// 获取网站开始运行的日期时间
function getStartDate() {
    // 这里可以替换为网站开始运行的确切日期和时间
    return new Date("2023-04-19T18:04:05");
}

// 计算网站运行时间并显示在页面上
function calculateRuntime() {
    var startDate = getStartDate();
    var currentDate = getCurrentDateTime();
    
    // 计算两个日期之间的毫秒数差值
    var uptime = currentDate.getTime() - startDate.getTime();
    // 将毫秒数转换为天、小时、分钟和秒数
    var totalSeconds = Math.floor(uptime / 1000);
    var days = Math.floor(totalSeconds / (24 * 3600));
    totalSeconds %= 24 * 3600;
    var hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    // 构建显示运行时间的字符串
    var runtimeString = `🚀本站已夹缝生存 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
    
    // 更新网页中显示运行时间的标签内容
    var runtimeElement = document.getElementById("website_runtime");
    if (runtimeElement) {
        runtimeElement.textContent = runtimeString;
    }
}

// 在页面加载完毕后计算并显示运行时间
window.addEventListener("load", function() {
    calculateRuntime();
    // 设置定时器每秒更新一次运行时间
    setInterval(calculateRuntime, 1000);
});
