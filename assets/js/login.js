$(function(){
    $('#go_login').on('click',function(){
        $('#login_box').show();
        $('#reg_box').hide();
    })
    $('#go_reg').on('click',function(){
        $('#login_box').hide();
        $('#reg_box').show();
    })
    var form = layui.form
    form.verify({
        psd: [/^[\S]{6,16}$/,'密码必须6到16位，且不能出现空格'
          ],
        repsd: function(value){
            var val = $('#login_box [name=password]').val()
            if(val !== value){
                return '两次密码不一致'
            }
        }
    });
    $('#btn_zc').on('click',function(e){
        e.preventDefault()
        var data = {
        username: $('#form_reg [name = username]').val(),
        password: $('#form_reg [name = password]').val()}
        $.post('http://api-breakingnews-web.itheima.net/api/reguser',data ,function(res){
            if(res.status !== 0){
                return layer.msg(res.message);
            }
            layer.msg('注册成功');
            $('#go_reg').click();  
        })
    })
    $('#btn_dl').on('click',function(e){
        e.preventDefault()
        var data = {
            username: $('#ipt_yh').val(),
            password: $('#ipt_mm').val()}
        $.post('http://api-breakingnews-web.itheima.net/api/login',data,function(res){
            if(res.status !== 0){
               return console.log(res.message);
            }
            layer.msg('登陆成功');
            localStorage.setItem('token',res.token)
            location.href = '/index.html';
        })
    })
   

})