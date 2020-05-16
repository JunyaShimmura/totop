$(function(){
    var h = $(window).height();
    $(window).on("scroll",function(){
      var s = $(window).scrollTop();
      if(h/2 < s){
        $(".btnTop").addClass("active");
      }else{
        $(".btnTop").removeClass("active");
      }
    })
  
    $(".btnTop").on("click",function(){
      /*
      htmlとbody要素のscrollTopを500ミリ秒かけて0にする（スクロールを戻す）。
      ＄("html")だけ$("body")だけで良いのでは無いか？と思うかもしれないが、
      IEやfirefoxなど色んなブラウザで同じ効果を得るための慣例
      */
      $("html,body").animate({scrollTop: 0 }, 500, "swing");
  
    });
});

