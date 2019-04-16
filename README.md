###   首席律师项目
    项目要求：
         1.PC项目宽度1170
         2.兼容IE9+,谷歌，火狐，欧朋等主流浏览器
         3.点击nav导航切换对应的内容并切换路径
         4.关于我们模块点击切换内容
         5.相关视频视频内容点击播放
         6.底部点击关注我们弹出微信二维码
         7.点击QQ客服出现QQ聊天页面
         8.点击新浪微博跳转到新浪微博页面
         9.右侧固定定位侧边栏点击官方微信弹出二给码
         点击QQ跳转QQ聊天点击新浪微博跳转到微博、鼠标放
         咨询热线弹出电话点，点击返回顶部实现返回顶部功能
         10.动画效果

目前bug:
视频兼容问题谷歌可以听声音不可以看视频 欧朋所有视频均可看 但是呢 不可调进度条
IE 火狐正常      
   
效果如下：
     ![](image/GIF.gif)   

    js代码 
```angular2

$(function () {
    /**
     * 点击搜索按钮按钮消失，出现搜索框
     */
    $(".search_img").click(function () {
        var _t = $(this);
        _t.hide();
        _t.prev("#search_input").removeClass("none").focus();
    });
    $("#search_input").blur(function () {
        var _t = $(this);
        _t.addClass("none");
        _t.next(".search_img").show();
    });
    $("#search_input").keypress(function (event) {
        if(event.keyCode == 13){
            var search_text = $("#search_input").val();
            window.open("https://www.baidu.com/s?wd="+search_text);
        }
    });
    /**
     * 点击nav里的a标签跳转到对应的内容并将其li显示为红色背景
     */
    $(".m_ato>ul>li>a").click(function (event) {
        event.preventDefault();
        var _t = $(this);
        $(".m_ato>ul>li").removeClass("active");
        _t.parent("li").addClass("active");
        /**
         * 执行切换内容的操作
         */
    });
    /**
     * 点击三个模块切换内容
     */
    $(".team_js").click(function () {
        var _$this = $(this);
        _$this.parent().children().removeClass("active");
        _$this.addClass("active");
        $(".container").addClass("none");
        $(".container_money").addClass("none");
        $(".container_team").removeClass("none").text(_$this.text())
    });
    $(".fist_ls").click(function () {
        var _$this = $(this);
        _$this.parent().children().removeClass("active");
        _$this.addClass("active");
        $(".container").removeClass("none");
        $(".container_money").addClass("none");
        $(".container_team").addClass("none");
    });
    $(".money_bz").click(function () {
        var _$this = $(this);
        _$this.parent().children().removeClass("active");
        _$this.addClass("active");
        $(".container").addClass("none");
        $(".container_team").addClass("none");
        $(".container_money").removeClass("none").text(_$this.text());
    });
    /**
     * 右侧边栏滚动功能
     */
    var topValArr = [-5,65,150,220];
    $("#right_ul>li").mouseover(function () {
        var _t = $(this);
        _t.children(".togglebox").removeClass("none");
    }).mouseout(function () {
        var _t = $(this);
        _t.children(".togglebox").addClass("none");
    });
    $("#backToTop").on("click", function(){
        var _this = $(this);
        $('html,body').animate({ scrollTop: 0 }, 500 ,function(){
            _this.hide();
        });
    });
    $(window).scroll(function(){
        var htmlTop = $(document).scrollTop();
        if( htmlTop > 0){
            $("#backToTop").fadeIn();
        }else{
            $("#backToTop").fadeOut();
        }
    });
});
```              
     css代码
```angular2
/*css重置*/
nav,ul,li,a,div,
img,video,span,button,header,body,h1,
h2,h3,h4,h5,h6,p,dl,dt,dd,footer,input,
label,small{
    margin:0;
    padding: 0;
}
a{
    text-decoration: none;
}
ul>li{
    list-style: none;
}
/*公共样式*/
.f_l{
    float: left;
}
.m_ato{
    margin:0 auto;
}
.none{
    display: none;
}
.active{
    background: #FF0000;
    color:white;
}
.w1170{
    width: 1170px;
}
header{
    background:#262626;
}
/*css样式*/
nav>ul{
    height: 60px;
    line-height: 60px;
}
nav>ul>li{
    float: left;
    width: 140px;
    text-align: center;
    height: 60px;
    -webkit-transition: all 500ms;
    -moz-transition: all  500ms;
    -ms-transition: all  500ms;
    -o-transition: all  500ms;
    transition: all  500ms;
}
nav>ul>li>a{
    color:white;
}
nav>ul>li:hover {
    font-size:25px;
    background: #FF0000;
}
nav>ul>li:last-child:hover{
    background:#262626;
}
nav>ul>li{
    margin-left: 7px;
}
nav>ul>li:first-child{
    margin-left: 0;
}
nav>ul>li>.search_img{
    float: right;
    margin-top:15px;
    cursor: pointer;
}
nav>ul>li>input{
    width:110px;
    float: left;
    height: 25px;
    background: #262626;
    color: white;
    margin-top: 14px;
}
header>.banner{
    height:278px;
    background-image: url("../image/aboutUs-banner.jpg");
    background-repeat:no-repeat;
    background-size:100% 100%;
}
.about{
    border-bottom: 2px solid #585858;
}
.about>.about_top>small{
    color:gray;
    margin-left: 30px;

}
.about_middle{
    height: 50px;
}
.about_middle>hr{
    width:25%;
    border:1px solid #E3E3E3;
    margin-top:1.3%;
}
.about_middle>h2{
    margin:auto 1%;
}
.about_middle>hr:first-child{
    margin-left:15%;
}
.about_bottom{
    height: 100px;
}
.about_bottom>div{
    border:1px  solid #555555;
    width:150px;
    height:30px;
    border-radius: 2px;
    text-align: center;
    line-height: 30px;
    margin-left: 13%;
    margin-top: 2%;
    cursor: pointer;
    -webkit-transition: all 1s ;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.about_bottom>div:hover{
    background: #FF0000;
    color: white;
    -webkit-transform: scale(2,2);
    -moz-transform: scale(2,2);
    -ms-transform: scale(2,2);
    -o-transform: scale(2,2);
    transform: scale(2,2);
}
.Mr_wang{
    background: #F6F6F6;
    margin: 2% auto 0 auto;
    height: 350px;
}
.wang_img img{
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.wang_img:hover img{
    -webkit-transform: rotate(360deg) ;
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
}
.wang_massage{
    margin-left: 5%;
    margin-top: 8%;
    letter-spacing: 1px;
}
.wang_massage>p{
    margin-top: 2%;
}
.Mr_wang_nextP {
    clear:both;
    margin:20px auto;
}
.twoimg img{
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.twoimg:hover img{
    -webkit-transform: scale(1.1,1.1);
    -moz-transform:  scale(1.1,1.1);
    -ms-transform:  scale(1.1,1.1);
    -o-transform:  scale(1.1,1.1);
    transform:  scale(1.1,1.1);
}
.twoimg_nextp{
    margin:20px auto;
}
.about_example,.about_video{
    border-top:2px solid #D9D9D9;
}
.a_exp_header,.a_vd_header{
    margin:2% 0;
}
.a_exp_header>span,.a_vd_header>span{
    display: inline-block;
    cursor: pointer;
    float:right;
    margin-top:-2%;
    -webkit-transition: all 1s ;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.a_exp_header>span:hover,.a_vd_header>span:hover {
    color:red;
    text-decoration: underline;
}
.a_exp_container,.a_vd_container{
    height: 300px;

}
.a_exp_container>dl>dt>img{
    -webkit-transition: all 1s ;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.a_exp_container>dl>dt>img:hover{
    transform: scale(1.1,1.1);
    -ms-transform:scale(1.1,1.1); 	/* IE 9 */
    -moz-transform:scale(1.1,1.1); 	/* Firefox */
    -webkit-transform:scale(1.1,1.1); /* Safari 和 Chrome */
    -o-transform:scale(1.1,1.1);
}
.a_exp_container>dl,.a_vd_container>dl{
    width:276px;
    float:left;
    margin-left:22px;
}
.a_exp_container>dl:first-child,.a_vd_container>dl:first-child{
    margin-left: 0;
}
.a_exp_container>dl>dt,.a_vd_container>dl>dt{
    margin-bottom: 10px;
}
.a_exp_container>dl>dd>span,.a_vd_container>dl>dd>span{
    font-weight: bolder;
}
.a_exp_container>dl>dd>h3,.a_vd_container>dl>dd>h3{
    white-space:nowrap;/**不换行**/
    text-overflow:ellipsis;/**显示省略号**/
    overflow:hidden;
}
.a_exp_container>dl>dd:hover >h3,.a_vd_container>dl>dd:hover >h3{
    cursor: pointer;
    text-decoration: underline;
    color:red;
}
.a_exp_container>dl>dd:hover >small,.a_vd_container>dl>dd:hover >small{
    cursor: pointer;
    text-decoration: underline;
    color:red;
}
.a_exp_container>dl>dd>small,.a_vd_container>dl>dd>small{
    display: inline-block;
    color:#686868;
    margin-top:5px;
}
.a_vd_container>dl>dt>video{
    width:276px;
    height: 201px;
}
.a_vd_container>dl>dt>video:hover{
    border:1px solid #4D90FE;
}
footer{
    background:#1E1E1E;
    height: 120px;
}
footer>.footer_container>div{
    width: 290px;
    height: 100px;
    border-right:2px solid #373737;
    float: left;
    margin: 10px 0;
}
.ft_cont_box1>img{
    width:290px;
    height: 100px;
}
.ft_cont_box1>img{
    -webkit-transition: all 1s ;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.ft_cont_box1>img:hover{
    margin-top: -20px;
}
.ft_cont_box2>p{
    color:#747474;
    margin:20px;
}
.ft_cont_box2 p{
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.ft_cont_box2:hover p{
    -webkit-transform: scale(1.2,1.2);
    -moz-transform: scale(1.2,1.2);
    -ms-transform: scale(1.2,1.2);
    -o-transform: scale(1.2,1.2);
    transform: scale(1.2,1.2);
}
.ft_cont_box3>p:first-child>span{
    font-weight: bolder;
    color:#D22915;
    font-size: 26px;
}
.ft_cont_box3>p{
    margin-left:20px;
    color:#747474;
}
.ft_cont_box3 p{
    -webkit-transition: all 1s;
    -moz-transition:  all 1s;
    -ms-transition:all 1s;
    -o-transition:all 1s;
    transition:all 1s;
}
.ft_cont_box3:hover p{
    transform: scale(1.2,1.2);
}
.ft_cont_box4>dl{
    width: 60px;
    float:left;
    margin-left:30px;
    margin-top:20px;
    -webkit-transition: all 1s;
    -moz-transition: all  1s;
    -ms-transition: all  1s;
    -o-transition: all  1s;
    transition: all  1s;
}
.ft_cont_box4>dl:hover {
    margin-top:5px;
}
.ft_cont_box4>dl>dt>a>img{
    width:30px;
    height: 30px;
    margin-left:10px;
    cursor: pointer;
}
.ft_cont_box4>dl>dd>small{
    color:#747474;
}
.footer_bottom{
    background:#1E1E1E;
    border-top:2px solid #373737;
    height: 30px;
}
.footer_bottom_container{
    color:#747474;
    text-align: center;
}
/*右侧边栏*/
#rightButton{
    position:fixed;
    top:208px;
    right:0;
    z-index:999999;
    display:block;
}
#right_ul{
    position:relative;
}
#right_ul>li{
    border-bottom:1px solid grey;
}
#right_wechart{
    background:#F2F2F2 url("../image/wechartsmall.png") no-repeat;
    width: 68px;
    height: 74px;
    cursor: pointer;
    -webkit-transition: all 1s;
    -moz-transition: all  1s;
    -ms-transition: all  1s;
    -o-transition: all  1s;
    transition: all  1s;
}
#right_wechart:hover{
    background:#F2F2F2 url("../image/wechartsmallred.png") no-repeat;
}
#right_qq {
    background:#F2F2F2 url("../image/qqsmall.png") no-repeat;
    width: 68px;
    height: 74px;
    cursor: pointer;
    -webkit-transition: all 1s;
    -moz-transition: all  1s;
    -ms-transition: all  1s;
    -o-transition: all  1s;
    transition: all  1s;
}
#right_qq:hover {
    background:#F2F2F2 url("../image/qqsmallred.png") no-repeat;
}
#right_xinlang{
    background:#F2F2F2 url("../image/xinlangsmall.png") no-repeat;
    width: 68px;
    height: 74px;
    cursor: pointer;
    -webkit-transition: all 1s;
    -moz-transition: all  1s;
    -ms-transition: all  1s;
    -o-transition: all  1s;
    transition: all  1s;
}
#right_xinlang:hover{
    background:#F2F2F2 url("../image/xinlangsmallred.png") no-repeat;
}
#right_tel {
    background:#F2F2F2 url("../image/phone.png") no-repeat;
    width: 68px;
    height: 77px;
    cursor: pointer;
    -webkit-transition: all 1s;
    -moz-transition: all  1s;
    -ms-transition: all  1s;
    -o-transition: all  1s;
    transition: all  1s;
}
#right_tel:hover{
    background:#F2F2F2 url("../image/phonered.png") no-repeat;
}
#right_tip {
    background: url(../image/flag_right.png) no-repeat;
    width: 252px;
    height: 91px;
    position: absolute;
    right: 70px;
    top: -10px;
    z-index: 999999;
}
.togglebox{
    line-height: 91px;
    text-align: center;
    background: url(../image/flag_right.png) no-repeat;
    width: 252px;
    position: absolute;
    left:-252px;
}
.flagShow_p1 {
    float: left;
    margin-left: 15px;
    font-size: 18px;
    line-height: 91px;
}
.flagShow_p2 {
    float: left;
    margin-left: 10px;
    font-size: 18px;
    color: #FA7C00;
}
.flagShow_p2 a {
    display: block;
    margin: 20px 0 5px 12px;
    line-height: 0;
}
.flagShow_p2 span {
    position: relative;
    top: -30px;
}
#backToTop {
    z-index: 999999;
    display: none;
}
a.backToTop_a {
    background: url(../image/7_08.png) no-repeat;
    width: 68px;
    height: 79px;
    display: block;
}
a.backToTop_a:active {
    background: url(../image/7_11.png) no-repeat;
}
```    
        html代码
```angular2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首席律师</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<header>
    <nav class="m_ato w1170">
        <ul>
            <li>
                <a href="">LOGO</a>
            </li>
            <li>
                <a href="">网站首页</a>
            </li>
            <li>
                <a href="">
                    合同纠纷
                </a>
            </li>
            <li>
                <a href="">债务清收</a>
            </li>
            <li>
                <a href="">成功案例</a>
            </li>
            <li class="active">
                <a href="">关于我们</a>
            </li>
            <li>
                <a href="">联系方式</a>
            </li>
            <li>
                <input type="text" placeholder="搜索" id="search_input" class="none"  autofocus="autofocus">
                <img  class="search_img" src="image/search.png" alt="">
            </li>
        </ul>
    </nav>
    <div class="banner">
    </div>
</header>
<div class="about">
    <div class="about_top w1170 m_ato">
        <small>首页>关于我们>首席律师</small>
    </div>
    <div class="about_middle w1170 m_ato">
        <hr class="f_l">
        <h2 class="f_l">
            关于我们
        </h2>
        <hr class="f_l">
    </div>
    <div class="about_bottom w1170 m_ato">
        <div class="team_js f_l">
            团队介绍
        </div>
        <div class="fist_ls f_l active">
            首席律师
        </div>
        <div class="money_bz f_l">
            收费标准
        </div>
    </div>
</div>
<div class="container">
    <div class="Mr_wang w1170">
        <div class="wang_img f_l">
            <img src="image/l-pic1.jpg" alt="">
        </div>
        <div class="wang_massage f_l">
            <h1>王先生</h1>
            <p>男/36岁/一级律师</p>
            <p>律师执业证号：13702199910364801</p>
            <p>执业领域：房地产法律服务，公司法律服务，刑辩法律服务，知识产权法律服务</p>
            <p>联系电话:13100000000</p>
        </div>
    </div>
    <p class="w1170 Mr_wang_nextP">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        At fugit, quia. Laborum magni maiores qui ut vel? Dolore,
        odit, quaerat. Adipisci architecto dicta dolorum eveniet
        fugiat id inventore ipsam maxime.
    </p>
    <div class="twoimg w1170 m_ato">
        <img src="image/ld-pic.jpg" alt="">
    </div>
    <p class="w1170 twoimg_nextp">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Autem beatae doloremque iure perspiciatis sequi. Assumenda
        aut dicta dignissimos, fuga, ipsa iure nihil quas quia saepe
        sequi unde ut veritatis voluptatem.
    </p>
    <div class="about_example w1170 m_ato">
        <div class="a_exp_header">
            <h3>相关案例</h3>
            <span>更多></span>
        </div>
        <div class="a_exp_container">
            <dl>
                <dt>
                    <img src="image/case1.jpg" alt="">
                </dt>
                <dd>
                    <h3>
                        代理美国公民刘某深圳基金投资返还...
                    </h3>
                    <small>
                        2016年8月，申请人美国公民刘某与被申请人深圳瑞和创新投资基金有限公司
                    </small>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="image/case2.jpg" alt="">
                </dt>
                <dd>
                    <h3>代理美国公民刘某深圳基金投资返还...</h3>
                    <small>
                        2016年8月，申请人美国公民刘某与被申请人深圳瑞和创新投资基金有限公司
                    </small>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="image/case3.jpg" alt="">
                </dt>
                <dd>
                    <h3>代理美国公民刘某深圳基金投资返还...</h3>
                    <small>
                        2016年8月，申请人美国公民刘某与被申请人深圳瑞和创新投资基金有限公司
                    </small>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="image/case4.jpg" alt="">
                </dt>
                <dd>
                    <h3>代理美国公民刘某深圳基金投资返还...</h3>
                    <small>
                        2016年8月，申请人美国公民刘某与被申请人深圳瑞和创新投资基金有限公司
                    </small>
                </dd>
            </dl>
        </div>
    </div>
    <div class="about_video w1170 m_ato">
        <div class="a_vd_header">
            <h3>相关视频</h3>
            <span>更多></span>
        </div>
        <div class="a_vd_container">
            <dl>
                <dt>
                    <video src="image/wf.mp4" controls poster="image/wf_pointer.png"></video>
                </dt>
                <dd>
                    <h3>代理美国公民刘某深圳基金投资返还...</h3>
                    <small>
                        2016年8月，申请人美国公民刘某与被申请人深圳瑞和创新投资基金有限公司
                    </small>
                </dd>
            </dl>
            <dl>
                <dt>
                    <video src="image/evening.mp4" controls></video>
                </dt>
                <dd>
                    <h3>代理美国公民刘某深圳基金投资返还...</h3>
                    <small>
                        2016年8月，申请人美国公民刘某与被申请人深圳瑞和创新投资基金有限公司
                    </small>
                </dd>
            </dl>
            <dl>
                <dt>
                    <video src="image/brother.mp4" controls></video>
                </dt>
                <dd>
                    <h3>代理美国公民刘某深圳基金投资返还...</h3>
                    <small>
                        2016年8月，申请人美国公民刘某与被申请人深圳瑞和创新投资基金有限公司
                    </small>
                </dd>
            </dl>
            <dl>
                <dt>
                    <video src="image/pipixia.mp4" controls></video>
                </dt>
                <dd>
                    <h3>代理美国公民刘某深圳基金投资返还...</h3>
                    <small>
                        2016年8月，申请人美国公民刘某与被申请人深圳瑞和创新投资基金有限公司
                    </small>
                </dd>
            </dl>
        </div>
    </div>
</div>
<div class="container_team none"></div>
<div class="container_money none"></div>
<footer>
    <div class="footer_container w1170 m_ato">
        <div class="ft_cont_box1">
            <img src="image/footer1.png" alt="">
        </div>
        <div class="ft_cont_box2">
            <p>
                只为企业提供法务的律师团队只为企业
                提供法务的律师团队只为企业提供法务
                的律师团队只
            </p>
        </div>
        <div class="ft_cont_box3">
            <p>
                服务热线：<span>4008880066</span>
            </p>
            <p>
                公司地址：北京市海滨区北京市海滨区北京市海
            </p>
            <p>
                Email：12345678@163.com
            </p>
        </div>
        <div class="ft_cont_box4">
            <dl>
                <dt>
                    <a href="https://weixin.qq.com/" target="_blank">
                        <img src="image/wechart.png" alt="">
                    </a>
                </dt>
                <dd>
                    <small>
                        关注我们
                    </small>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="http://wpa.qq.com/msgrd?v=3&uin=511948469&site=qq&menu=yes" target="_blank">
                        <img src="image/QQ.png" alt="">
                    </a>
                </dt>
                <dd>
                    <small>
                        QQ客服
                    </small>
                </dd>
            </dl>
            <dl>
                <dt>
                    <a href="https://weibo.com/" target="_blank">
                        <img src="image/xinlang.png" alt="">
                    </a>
                </dt>
                <dd>
                    <small>
                        新浪微博
                    </small>
                </dd>
            </dl>
        </div>
    </div>
</footer>
<div class="footer_bottom">
    <div class="footer_bottom_container w1170 m_ato">
        版权所有&copy;2019北京企法通有限公司.ICP备号;&nbsp;&nbsp;&nbsp;&nbsp 技术支持:XXXXXXXX
    </div>
</div>
<!--右侧图标-->
<div id="rightButton">
    <ul id="right_ul">
        <li id="right_wechart">
            <div class="wechartTogglebox togglebox none">
                我特么不告诉你微信
            </div>
        </li>
        <li id="right_qq">
            <div class="qqtogglebox togglebox none">
                <p class="flagShow_p1 flag_qq">咨询QQ</p>
                <p class="flagShow_p2 flag_qq">
                    <a href="http://wpa.qq.com/msgrd?v=3&uin=511948469&site=qq&menu=yes" target="_blank">
                        <img src="image/qiyeQQ.png">
                    </a>
                    <span>511948469</span>
                </p>
            </div>
        </li>
        <li id="right_xinlang">
            <div class="xinlangTogglebox togglebox none">
                自己跳转去
            </div>
        </li>
        <li id="right_tel">
            <div class="phonetogglebox togglebox none">
                <p class="flagShow_p1 flag_tel">咨询电话</p>
                <p class="flagShow_p2 flag_tel line91">400-800-8000</p>
            </div>
        </li>
        <li>
            <div id="backToTop">
                <a href="javascript:;"  class="backToTop_a"></a>
            </div>
        </li>
    </ul>
</div>
</body>
<script src="js/jquery-3.3.1.js"></script>
<script src="js/script.js"></script>
</html>
```         
        