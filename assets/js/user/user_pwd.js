$(function () {
    var form = layui.form;
    form.verify({
        pwd: [/^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'],
        newPwd: function (value) {
            if (value === $('[name = oldPwd]').val()) {
                return '与旧密码相同！'
            }
        },
        rePwd: function (value) {
            if (value !== $('[name = newPwd]').val()) {
                return "两次密码不一样"
            }
        }
    })


    


})
$('.btn_xgmm').on('click',function(e){
        e.preventDefault()
    $.ajax({
        method :'post',
        url: '/my/updatepwd',
        data: $('.layui-form').serialize(),
        success:function(res){
            if(res.status !== 0){
                return layer.msg('修改失败'+res.message)
            }
            layer.msg('修改成功')
            $('.layui-form')[0].reset()
        }
    })
    })