function getCurrentDateTime(){return new Date}function getStartDate(){return new Date("2023-09-19T18:04:05")}function calculateRuntime(){var t=getStartDate();var e=getCurrentDateTime();var a=e.getTime()-t.getTime();var r=Math.floor(a/1e3);var n=Math.floor(r/(24*3600));r%=24*3600;var i=Math.floor(r/3600);r%=3600;var o=Math.floor(r/60);var u=r%60;i=i<10?"0"+i:i;o=o<10?"0"+o:o;u=u<10?"0"+u:u;var l=`🚀本站已夹缝生存 ${n} 天 ${i} 小时 ${o} 分 ${u} 秒`;var v=document.getElementById("website_runtime");if(v){v.textContent=l}}window.addEventListener("load",function(){calculateRuntime();setInterval(calculateRuntime,1e3)});