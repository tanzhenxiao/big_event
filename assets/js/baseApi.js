$.ajaxPrefilter(function(ops){
    ops.url = 'http://api-breakingnews-web.itheima.net'+ops.url;

    if(ops.url.indexOf('/my') !== -1){
        ops.headers = {
            Authorization: localStorage.getItem('token') || ''
          }
    }
   ops.complete = function(res) {
        if(res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败！" ){
            localStorage.removeItem('token')
            location.href = '/login.html'
        }
      }
})