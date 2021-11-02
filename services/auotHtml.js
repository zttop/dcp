
const fs = require('fs')
const { exec } = require('child_process');

const content = `

<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title></title>
  <meta name="format-detection" content="telephone=no">
  <meta name="format-detection" content="email=no">
  <meta name="x5-cache" content="disable">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
  <style>
    html,
    body {
      margin: 0;
      padding: 0;
      background-color: transparent;
      font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, sans-serif;
    }

    .masker {
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000;
      opacity: 0.3;
    }

    .page {
      width: 80%;
      max-width: 400px;
      /* width: 100%; */
      background-color: transparent;
      display: none;
      overflow: hidden;
      /* max-width: 300px; */
      margin: 0 auto;
      position: relative;
    }

    .page.teapp {      
      /* margin-top: 33%; */
      top: 50%;
      transform: translateY(-50%);
    }

    .page.teapp.ios {
      /* margin-top: 40%; */
      /* max-width: 320px; */
    }

    .header {
      display: block;
      background-color: transparent;
      border: 0;
      width: 100%;
      height: auto;
      margin-bottom: -1px;
    }

    .body {
      position: relative;
    }

    .hblist {
      overflow: auto;
      -webkit-overflow-scrolling: auto;
      max-height: 230px;
      padding: 7px 0;
    }

    .hbbox {
      height: 80px;
      margin-bottom: 10px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }
    .hbbox:nth-last-child(1) {
      margin-bottom: 0;
    }

    .hbbox.hbbox-higher1 {
      height: 104px;
    }
    .hbbox.hbbox-higher2 {
        /* height: 120px; */
        height: 104px;
    }

    .hbbox .left {
      width: 90px;
      height: 100%;
      margin-left: 15px;
      border-radius: 8px 0 0 8px;
      background-color: #FFFBF8;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hbbox .split {
      width: 8px;
      height: 100%;
      background: url(./img/split.png) no-repeat;
      background-size: 8px 100%;
    }

    .hbbox .right {
      padding: 5px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      /* padding: 12px 0; */
      box-sizing: border-box;
      height: 100%;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      margin-right: 15px;
      border-radius: 0 8px 8px 0;
      background-color: #FFFBF8;
    }

    .hbbox .amount {
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      color: #FF5555;
      font-weight: bold;
    }

    .hbbox .amount span {
      margin: 5px 0 0 3px;
      font-size: 32px;
    }

    .hbbox .name {
      display: inline-block;
      line-height: 15px;
      margin: 0 0 0 12px;
      overflow: hidden;
      font-size: 14px;
      font-weight: bold;
      color: #333;


      max-height: 15px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .hbbox .intro {
      display: inline-block;
      line-height: 16px;
      margin: 6px 12px -2px 12px;
      word-break: break-all;
      overflow: hidden;
      font-size: 11px;
      color: #888;

      max-height: 32px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .hbbox .ruleIntro {
        display: inline-block;
        line-height: 16px;
        margin: 6px 12px -2px 12px;
        word-break: break-all;
        overflow: hidden;
        font-size: 11px;
        color: #888;

        max-height: 30px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .hbbox .intro.hide {
      display: none;
    }

    .hbbox .expire {
      line-height: 12px;
      display: inline-block;
      margin: 6px 12px 0 12px;
      word-break: break-all;
      font-size: 11px;
      color: #888;

      max-height: 12px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .hbbox .expire.firstitem {
      margin-top: 10px;
    }
    .expire.firstitem+.ruleIntro{
      margin-top: 4px;
    }
    .footer {
      display: block;
      background-color: transparent;
      border: 0;
      width: 100%;
      height: auto;
    }

    .template {
      display: none;
      height: 0;
    }

    .close {
      display: none;
    }

    .teapp .close {
      display: block;
      position: relative;
      margin: 50px auto 0;
      height: 28px;
      width: 28px;
      border: 1px solid #fff;
      background-color: transparent;
      border-radius: 15px;
    }

    .teapp .close::after {
      content: "";
      width: 20px;
      height: 20px;
      border-right: 1px solid #fff;
      position: absolute;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      left: -4px;
      top: -3px;
    }

    .teapp .close::before {
      content: "";
      width: 20px;
      height: 20px;
      border-right: 1px solid #fff;
      position: absolute;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      left: -3px;
      top: 11px;
    }

    .hbbox-new{
        font-size: 0%;
        box-sizing: border-box;
        padding: 10px 38px 0;
    }
    .hbbox-new .split-line {
        height: 12px;
        width: 100%;
        background: url(./img/split-line.png) no-repeat;
        background-size: 100% 100%;
    }
    .hbbox-new .top{
          width: 100%;
          font-size: 16px;
          color: #6E350E;
          letter-spacing: 0;
          text-align: center;
          vertical-align: bottom;
          line-height: 32px;
          font-weight: 500;
          padding-top: 20px;
          box-sizing: border-box;
          border-radius: 4px 4px 0 0 ;
          background-color: #FFFBF8;
          margin-bottom: -.5px;
      }
      .hbbox-new .middle{
          padding-bottom: 10px;
          background-color: #FFFBF8;
          width: 100%;
          margin-top: -.5px;
      }
     .hbbox-new .middle .amount {
        color: #FF5555;
        font-size: 36px;
        text-align: center;
        font-weight: 500;
        margin-bottom: 4px;
     }
    .hbbox-new .middle .amount .unit{
        font-size: 16px;
        font-weight: 500;
      }
      .hbbox-new .middle .amount .unit2{
        font-size: 16px;
        font-weight: 500;
        margin-left: -5px;
      }
    .hbbox-new .middle .content{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column ;
    }

    .hbbox-new .middle .rule{
        width: 120px;
        max-height: 35px;
        font-size: 12px;
        color: #B28C69;
        text-align: center;
        font-weight: 400;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 2px 0;
    }
    .hbbox-new .middle .use-detail{

    }
    .hbbox-new .middle .valid{
        width: 100%;
    }
  </style>
</head>

<body>
  <div class="masker notouchmove"></div>
  <div class="page">
    <img class="header notouchmove" />
    <div class="body">
      <div class="hblist" id="hblist">

      </div>
    </div>
    <img class="footer notouchmove" />
    <div class="template">
      <div class="hbbox">
        <div class="left">
          <div class="amount">&yen;<span>{amount}</span></div>
        </div>
        <div class="split"></div>
        <div class="right">
          <div class="right-content">
            <span class="name">{name}</span>
            <span class="intro">{useDetail}</span>
            <span class="expire">{extraData}</span>
            <span class="ruleIntro">{useRule}</span>
          </div>
        </div>
      </div>
    </div>
    <!--新样式1个红包的情况-->
    <div class="template" id="newTemplate">
      <div class="hbbox-new">
          <div class="top">
              {name}
          </div>
          <div class="split-line"></div>
          <div class="middle">
              <div class="amount" id="amount">
                  <span class="unit">¥</span>{amount}
              </div>
              <div class="amount" id="coupon">
                {amount}<span class="unit2"> 折</span>
            </div>
              <div class="content">
                  <div class="rule use-detail">
                      {useDetail}
                  </div>
                  <div class="rule">
                      {useRule}
                      <!--满200减5  满350减10-->
                  </div>
                  <div class="rule valid">
                      {extraData}
                  </div>
              </div>
          </div>

      </div>
    </div>
    <div class="close"></div>
  </div>
  
  <script src="https://m.elongstatic.com/hybird/apphtml/public/zepto.min.js"></script>
  <script src="https://m.elongstatic.com/flexbridge/sdk/3.8.7/flexbridge.js"></script>
  <script>
    var config = {
      // "0": { // 最新直充
      //   header: { src: "./img/newuserheader-20210204.png" },
      //   body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
      //   footer: { src: "./img/newuserfooter-20210204.png" }
      // },
      "0": { // 默认
        header: { src: "./img/header.png" },
        body: { bgColor: "#FF5753", hbColor: "#FF5753", mzColor: "#333" },
        footer: { src: "./img/footer.png" }
      },
      "1": {
        header: { src: "./img/header1.png" },
        body: { bgColor: "#fe014d", hbColor: "#ef0046", mzColor: "#ef0046" },
        footer: { src: "./img/footer1.png" }
      },
      "2020019632": {
        header: { src: "./img/header2020019632.png" },
        body: { bgColor: "#f40927", hbColor: "#ea3645", mzColor: "#ea3645" },
        footer: { src: "./img/footer2020019632.png" }
      },
      "2020019633": {
        header: { src: "./img/header2020019632.png" },
        body: { bgColor: "#f40927", hbColor: "#ea3645", mzColor: "#ea3645" },
        footer: { src: "./img/footer2020019632.png" }
      },
      "2020019634": {
        header: { src: "./img/header2020019632.png" },
        body: { bgColor: "#f40927", hbColor: "#ea3645", mzColor: "#ea3645" },
        footer: { src: "./img/footer2020019632.png" }
      },
      "2020019635": {
        header: { src: "./img/header2020019632.png" },
        body: { bgColor: "#f40927", hbColor: "#ea3645", mzColor: "#ea3645" },
        footer: { src: "./img/footer2020019632.png" }
      },
      "2020019636": {
        header: { src: "./img/header2020019632.png" },
        body: { bgColor: "#f40927", hbColor: "#ea3645", mzColor: "#ea3645" },
        footer: { src: "./img/footer2020019632.png" }
      },
      "28": {
        header: { src: "./img/header2020019632.png" },
        body: { bgColor: "#f40927", hbColor: "#ea3645", mzColor: "#ea3645" },
        footer: { src: "./img/footer2020019632.png" }
      },
      "33": {
        header: { src: "./img/header2020043033.png" },
        body: { bgColor: "#ff564e", hbColor: "#ed635a", mzColor: "#333333" },
        footer: { src: "./img/footer2020043033.png" }
      },
      "34": {
        header: { src: "./img/header2020043033.png" },
        body: { bgColor: "#ff564e", hbColor: "#ed635a", mzColor: "#333333" },
        footer: { src: "./img/footer2020043033.png" }
      },
      "38": {
        header: { src: "./img/header-rujia.png" },
        body: { bgColor: "#F94C61", hbColor: "#ed635a", mzColor: "#333333" },
        footer: { src: "./img/footer-rujia.png" }
      },
      "39": {
        header: { src: "./img/header-rujia.png" },
        body: { bgColor: "#F94C61", hbColor: "#ed635a", mzColor: "#333333" },
        footer: { src: "./img/footer-rujia.png" }
      },
      // "31": { 
      //   header: { src: "http://m.elongstatic.com/hybird/apphtml/adoperation/homehb/img/taicang-header.png" },
      //   body: { bgColor: "#6c3d2e", hbColor: "#6c3d2e", mzColor: "#6c3d2e" },
      //   footer: { src: "http://m.elongstatic.com/hybird/apphtml/adoperation/homehb/img/taicang-footer.png" }
      // },
      // "32": {
      //   header: { src: "http://m.elongstatic.com/hybird/apphtml/adoperation/homehb/img/taicang-header.png" },
      //   body: { bgColor: "#6c3d2e", hbColor: "#6c3d2e", mzColor: "#6c3d2e" },
      //   footer: { src: "http://m.elongstatic.com/hybird/apphtml/adoperation/homehb/img/taicang-footer.png" }
      // },
      // "31": { 
      //   header: { src: "./img/sutravel-header.png" },
      //   body: { bgColor: "#8C51E6", hbColor: "#8C51E6", mzColor: "#8C51E6" },
      //   footer: { src: "./img/sutravel-footer.png" }
      // },
      // "32": {
      //   header: { src: "./img/sutravel-header.png" },
      //   body: { bgColor: "#8C51E6", hbColor: "#8C51E6", mzColor: "#8C51E6" },
      //   footer: { src: "./img/sutravel-footer.png" }
      // },
      "43": { // 新客直充-t43,e42
        header: { src: "./img/newuser-header.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuser-footer.png" }
      },
      "42": {
        header: { src: "./img/newuser-header.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuser-footer.png" }
      },
      "29": { // 商家券 
        header: { src: "./img/coupon-header.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/coupon-footer.png" }
      },
      /*--------*/
      /*"43": { // 最新直充
        header: { src: "./img/newuserheader-20210204.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuserfooter-20210204.png" }
      },
      "42": { // 最新直充
        header: { src: "./img/newuserheader-20210204.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuserfooter-20210204.png" }
      },*/
      "10": { //
        header: { src: "./img/newuserheader-20210204.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuserfooter-20210204.png" }
      },
      "11": { //
        header: { src: "./img/newuserheader-20210204.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuserfooter-20210204.png" }
      },
      "12": { //
        header: { src: "./img/newuserheader-20210204.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuserfooter-20210204.png" }
      },
      "13": { //
        header: { src: "./img/newuserheader-20210204.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuserfooter-20210204.png" }
      },
      "2020022998": { //
        header: { src: "./img/newuserheader-20210204.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuserfooter-20210204.png" }
      },
      "2020023726": { //
        header: { src: "./img/newuserheader-20210204.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuserfooter-20210204.png" }
      },
      "2020023727": { //
        header: { src: "./img/newuserheader-20210204.png" },
        body: { bgColor: "#F34D61", hbColor: "#F34D61", mzColor: "#F34D61" },
        footer: { src: "./img/newuserfooter-20210204.png" }
      },
      "8005": {
        header: { src: "./img/tapphb-header.png" },
        body: { bgColor: "#FF3535", hbColor: "#FF3535", mzColor: "#FF3535" },
        footer: { src: "./img/tapphb-footer.png" }
      },

      "45": {
        header: { src: "./img/header-qingdao.png" },
        body: { bgColor: "#9C6AFF", hbColor: "#ED6060", mzColor: "#160040" },
        footer: { src: "./img/footer-qingdao.png" }
      },
      "46": {
        header: { src: "./img/header-qingdao.png" },
        body: { bgColor: "#9C6AFF", hbColor: "#ED6060", mzColor: "#160040" },
        footer: { src: "./img/footer-qingdao.png" }
      },
    }

    var getQueryString = function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURIComponent(r[2].replace(/\+/g, ' '));
      return null;
    }

    /**
     * 补丁
     * T侧介入预加载后，ElongApp对象获取不到，改用 FlexBridge 处理
     * 
     **/
     var handleTfunction = function(fn) {
      if (typeof ClientInfo !== 'undefined' && ClientInfo.type === 'tapp') {
        fn()
      } else {
        FlexBridge.getClientInfo().then(function(client) {
          window["ClientInfo"] = client
          if ((ClientInfo.type === 'tapp')) {
            // 只有的tapp才走这个逻辑
            fn()
          }
        })
      }
    }
    var t_ios_close_fn = function() {
      FlexBridge.closePage()
    }
    var closePage = function () {
      console.log("close")
      if (typeof ElongApp !== 'undefined' && ElongApp["closeH5Page"]) {
        ElongApp.closeH5Page("");
      }
      handleTfunction(t_ios_close_fn)
    }

    var renderLoadSuccess = function(type) {
      
      if(type === 1) {
        if(ElongApp.loadSuccess) {
          ElongApp.loadSuccess() // 解决E侧Android弹窗不展示的问题
        }
      } else {
        if(FlexBridge.loadSuccess) {
          FlexBridge.loadSuccess({"business":"hotel"}) // T侧预加载，没有ElongApp对象
        }
      }
    }
    
    Date.prototype.format = function(fmt) { 
      var o = {   
        "M+" : this.getMonth()+1,                 //月份   
        "d+" : this.getDate(),                    //日   
        "h+" : this.getHours(),                   //小时   
        "m+" : this.getMinutes(),                 //分   
        "s+" : this.getSeconds(),                 //秒   
        "q+" : Math.floor((this.getMonth()+3)/3), //季度   
        "S"  : this.getMilliseconds()             //毫秒   
      };   
      if(/(y+)/.test(fmt))   
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
      for(var k in o)   
        if(new RegExp("("+ k +")").test(fmt))   
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
      return fmt;
    }
    function htmlEscape(text){
      return text.replace(/[<>"&]/g, function(match, pos, originalText){
        switch(match){
          case "<": return "&lt;";
          case ">":return "&gt;";
          case "&":return "&amp;";
          case "\"":return "&quot;";
        }
      });
    }

    var buildTemplate = function(map,length) {
      if(!map.useDetail) {
        map.useDetail = ''
      }
      if(!map.useRule) {
        map.useRule = ''
      }
      // var tpl = $(".template").html()
      if(map.isDiscount){
        $("#amount").remove()
      }else{
        $("#coupon").remove()
      }
      var tpl = length > 1 ? $(".template").html() : $("#newTemplate").html()

      for (var key in map) {
        var item = map[key]
        var val = typeof item === 'string' ? htmlEscape(item) : item
        tpl = tpl.replace("{" + key + "}", val)
      }
      return tpl
    }

    $(function () {
      var data = null
      var json = getQueryString("data")

      if (json) {
        try {
          data = JSON.parse(json)
        } catch (e) {
          data = null
          console.log(e)
        }
      }

      if (data == null || !data.length) {
        closePage()
        return
      }

      var activityid = getQueryString("activityid")
      activityid = activityid || "0"
      var cfg = activityid in config ? config[activityid] : config["0"]

      $(".header").attr({
        "src": cfg.header.src
      })

      $(".body").css("background-color", cfg.body.bgColor)
      // $(".amount").css("color", cfg.body.hbColor)
      // $(".name").css("color", cfg.body.mzColor)
      if (activityid === '45' || activityid === '46') { // 补丁-青岛红包样式
        $(".amount").css("color", cfg.body.hbColor)
        $(".name").css("color", cfg.body.mzColor)
      }

      $(".footer").attr({
        "src": cfg.footer.src
      })

      $(".close, .footer").click(function() {
        closePage()
      })

      //渲染红包列表
      var hblist = $(".hblist")
      var hblistHTML = []
      try {
        for (var i = 0; i < data.length; i++) {
          hblistHTML.push(buildTemplate(data[i],data.length))
        }
        hblist.html(hblistHTML.join(''))
      } catch(e) {
        console.log(e)
        closePage()
        return
      }
      
      $(".masker").show()
      $(".notouchmove").on("touchmove", function(e) {
        e.preventDefault()
      })
      $(".page").addClass("teapp")
      if (/iPh(one)?\sOS|iOS/i.test(navigator.userAgent))
        $(".page").addClass("ios")
      //var isT = !navigator.userAgent.match(/ ew(\w+)\/([\d.-_]*)/i)
      var isE = 'ElongApp' in window
      if (isE) {
        renderLoadSuccess(1)
      } else {
        // 只有tapp才走这个逻辑
        handleTfunction(renderLoadSuccess)
      }

      //document.getElementById("hblist").innerHTML = "isT:" + isT.toString()
      
      $(".page").show()
      if (data.length > 1) {
        changeHeight($('.hblist .intro'), 1)
        changeHeight($('.hblist .ruleIntro'), 2)
        hideRuleIntro(data)
      } else {
        // 单个红包底部不要空间
        $('#hblist').css('padding',0)
      }

    })

    function hideRuleIntro(data) {
      for( var i = 0; i < data.length; i++){
        if (!data[i].useRule) {
          $('.ruleIntro').eq(i).hide()
        }
        if (!data[i].useDetail) {
          $('.intro').eq(i).hide()
          $('.expire').eq(i).addClass('firstitem')
        }
      }
    }
    function changeHeight(ele, type) {
      try {
        const length = ele.length
        for (var i = 0; i < length; i++) {
          var height = ele[i].offsetHeight
          if (height > 16) {
            $(".hblist .hbbox").eq(i).addClass('hbbox-higher'+ type)
          }
        }
      } catch(e) {
        console.log(e)
        closePage()
        return
      }
    }
  </script>
</body>

</html>


`

const autoHtml = {
  async autnupload() {
    try {
      const data = fs.writeFileSync('../dist/test.html', content)
      //file written successfully
      console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
      console.log(data)

      exec('npm run upload');

    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = autoHtml
