$(function(){
    var form = layui.form;
    var layer = layui.layer;
    form.verify({
        nickname: function(value){
            if(value.length>6){
                return '>6'
            }
        }
    })

})
initUserInfo()
function initUserInfo(){
    var form = layui.form;
    $.ajax({
        method: 'get',
        url:'/my/userinfo',
        success:function(res){
            if(res.status !==0 ){
                return layer.msg('获取信息失败')
            }
            console.log(res);
            form.val('form_val',res.data)
        }
    })
}

$('.btn_reset').on('click',function(e){
    e.preventDefault()
    initUserInfo()
})
$('.btn_xg').on('click',function(e){
    e.preventDefault()
    $.ajax({
    method: 'post',
    url:'/my/userinfo',
    data:$('.layui-form').serialize(),
    success:function(res){
        if(res.status !== 0){
            return layer.msg('修改失败')
        }
        layer.msg('修改成功')
        console.log(res.data);
        window.parent.getUserInfo()
    }
    })
})
