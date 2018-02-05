$(document).ready(function () {
  var userAgent = window.navigator.userAgent;
  var isEdge = userAgent.indexOf("Edge");
  var isIE = userAgent.indexOf("MSIE");
  var isQQBrowser, is360, isSafari;


  isQQBrowser = userAgent.indexOf("QQBrowser") !== -1;
  is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
  isSafari = userAgent.indexOf("Safari") !== -1 && userAgent.indexOf("Version") !== -1;

  function _mime(option, value) {
    var mimeTypes = navigator.mimeTypes;
    for (var mt in mimeTypes) {
      if (mimeTypes[mt][option] == value) {
        return true;
      }
    }
    return false;
  }

  if (isQQBrowser || is360) {
    $("#scenarios .scenariosContainerCenter .scenariosTitle h3").css("font-size", "14px")
  }

  if (isSafari) {
    console.log(screen.width);
    $("#introduction .introductionContainer .aschVideo span.videoText").css({
      "width": "360px",
      "height": "42px",
      "top": "calc(50% - 20px)"
    });

    $("#downloads .downloadsContainer").css("height", "522px");
    $("#downloads .downloadsContainer .downloadsContainerRight").css("height", "522px");
    $("#downloads .downloadsContainer .downloadsContainerLeft .dlsit-list li .dlistContainer").css("margin", "40px 2px");
  }

  if (isEdge > -1) {
    $("#home .aschLogo").addClass("homeLogoAmimateTwo").removeClass("homeLogoAmimateOne");
  } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
    // $("#introduction .introductionContainer .aschVideo").click(function () {
    //   $("#introduction .videoContainer").css("display", "none");
    //   // window.open("aschVideo.html");
    // });
    $("#home .aschLogo").addClass("homeLogoAmimateTwo").removeClass("homeLogoAmimateOne");
  } else {
    $("#home .aschLogo").addClass("homeLogoAmimateOne").removeClass("homeLogoAmimateTwo");
  }


  $(window).scroll(function () {
    var winHeight = $(this).height();
    var winWidth = $(this).width();
    var homeHeight = $("home").height();
    var hrLine = $("#advantages hr");
    var sTop = $(this).scrollTop();
    // var hrLineTop = $(hrLine).offset().top;
    // if ((sTop + winHeight) > (hrLineTop + 200)) {
    // $("#advantages hr").addClass("hrAnimate")
    // }

    if ($(window).scrollTop() > (homeHeight + 200)) {
      $(".toTop").css("display", "block")
    } else {
      $(".toTop").css("display", "none")
    }


    if ($(window).scrollTop() > 0) {
      $(".btnContainer .btn1 span").css("color", "#000");
      $(".switchLanguageBtn .btnContainer .sjx").css({
        "border-right": "2px solid #000",
        "border-top": "2px solid #000"
      });
      $("nav .navContainer .navLeft img").attr("src", "images/aschLogo1.png");
      $("nav .navContainer .navRight ul li a").css("color", "#000000").mouseover(function () {
        $(this).css("color", "#ffa81c")
      }).mouseout(function () {
        $(this).css("color", "#000000")
      });
      $("nav").css({
        "background": "#fff",
        "box-shadow": "0 0 5px #ccc"
      });

      // $("nav .navRight .downloadWhitePaper").addClass("downloadWhitePaperTwo").removeClass("downloadWhitePaperOne");
      // $("nav .navLeft  .navLogo").addClass("replaceLogoOne").removeClass("replaceLogoTwo");
      // $("nav .equalThan ").addClass("moreThan").removeClass("equalThan");
    } else {
      $(".btnContainer .btn1 span").css("color", "#fff");
      $(".switchLanguageBtn .btnContainer .sjx").css({
        "border-right": "2px solid #fff",
        "border-top": "2px solid #fff"
      });

      $("nav .navContainer .navLeft img").attr("src", "images/aschLogo2.png");
      $("nav .navContainer .navRight ul li a").css("color", "#ffffff").mouseover(function () {
        $(this).css("color", "#ffa81c")
      }).mouseout(function () {
        $(this).css("color", "#ffffff")
      });
      $("nav").css({
        "background": "transparent",
        "box-shadow": "0 0 0"
      });
      // $("nav .navRight .downloadWhitePaper").addClass("downloadWhitePaperOne").removeClass("downloadWhitePaperTwo");
      // // $("nav .navRight .downloadWhitePaper").css("color", "#1c49ae");
      // $("nav .navLeft  .navLogo").addClass("replaceLogoTwo").removeClass("replaceLogoOne");
      // $("nav .moreThan ").addClass("equalThan").removeClass("moreThan");

    }
  }),

    $(".homeLinks li").mousemove(function () {
      $(this).find(".rightLine").css("display", "none");
      $(this).prev().find(".rightLine").css("display", "none")
      // window.open("http://bbs.asch.io/");
    }),

    $(".homeLinks li").mouseout(function () {
      $(this).find(".rightLine").css("display", "block");
      $(this).prev().find(".rightLine").css("display", "block")
    }),

    $(".homeLinks .toGit").click(function () {
      // window.location.href = "aschVideo.html";
      window.open("https://github.com/AschPlatform");
    }),

    $(".homeLinks .toExplore").click(function () {
      // window.location.href = "aschVideo.html";
      window.open("https://explorer.asch.io/");
    }),

    $(".homeLinks .toWallet").click(function () {
      // window.location.href = "aschVideo.html";
      window.open("https://mainnet.asch.io/#/home");
    }),

    $(".homeLinks .homeToVideo").click(function () {
      // window.location.href = "aschVideo.html";
      window.open("http://bbs.asch.io/");
    }),

    $("#downloads  .dlist").on("click", "li", function () {
      // 设index为当前点击
      var index = $(this).index();
      // 点击添加样式利用siblings清除其他兄弟节点样式
      $(this).addClass("active").siblings().removeClass("active");
      // 同理显示与隐藏
      $(this).parents(".downloadsContainerLeft").find(".dlsit-list li").eq(index).show().siblings().hide();
    }),

    $("#application .dapp1").click(function () {
      window.open("dapp1.html");
    }),

    $("#applicationDetailMore1").click(function () {
      event.stopPropagation();
      window.open("dapp1.html");
    }),

    $("#application .dapp2").click(function () {
      window.open("dapp2.html");
    }),

    $("#applicationDetailMore2").click(function () {
      event.stopPropagation();
      window.open("dapp2.html");
    }),

    $("#application .dapp3").click(function () {
      window.open("dapp3.html");
    }),

    $("#applicationDetailMore3").click(function () {
      event.stopPropagation();
      window.open("dapp3.html");
    }),

    $("#application .dapp4").click(function () {
      window.open("dapp4.html");
    }),

    $("#applicationDetailMore4").click(function () {
      event.stopPropagation();
      window.open("dapp4.html");
    }),

    $("#application .dapp5").click(function () {
      window.open("dapp5.html");
    }),

    $("#applicationDetailMore5").click(function () {
      event.stopPropagation();
      window.open("dapp5.html");
    }),
    $("#application .dapp6").click(function () {
      window.open("dapp6.html");
    }),

    $("#applicationDetailMore6").click(function () {
      event.stopPropagation();
      window.open("dapp6.html");
    }),
    $("#application .dapp7").click(function () {
      window.open("dapp7.html");
    }),

    $("#applicationDetailMore7").click(function () {
      event.stopPropagation();
      window.open("dapp7.html");
    }),
    $("#application .dapp8").click(function () {
      window.open("dapp1.html");
    }),

    $("#applicationDetailMore8").click(function () {
      event.stopPropagation();
      window.open("dapp1.html");
    })

});