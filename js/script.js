
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