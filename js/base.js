(function () {
  
  initActive()
  bindEvenInit()
  var mycard = $('#mycard')
  
    let mycardTop = mycard&&mycard.offset()&&mycard.offset().top;
    // let height=$('.header').height()
    // console.log(mycardTop,height)
    window.onscroll = function () {
      var e = e || window.event;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop )
      if (scrollTop > mycardTop) {
        mycard.addClass('scroll')
      } else {
        mycard.removeClass('scroll')
      }
    }
 



function initActive () {
  let root = document.querySelector(':root')
  var active = sessionStorage.getItem('wttandroid')
  
  
  if (active && active == 'true') { //非第一次登录 是黑色
    $('#myRadio').addClass('active')
    $('.navigation').addClass('active')
    
    root.style.setProperty('--backColor', '#fff')
    root.style.setProperty('--borderline', '#00283A')
    root.style.setProperty('--headerCOlor', '#00283A')
    root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)')
    root.style.setProperty('--headerFont', '#fff' )
    root.style.setProperty('--fontColor', '#00283A' )
    root.style.setProperty('--mainColor', '#ff8181' )
    root.style.setProperty('--bagColor','#02162b' )
  } else { //第一次登录 这里是白色
    $('#myRadio').removeClass('active')
    $('.navigation').removeClass('active')
   
    root.style.setProperty('--backColor', '#fff')
    root.style.setProperty('--borderline', '#fff')
    root.style.setProperty('--headerCOlor', '#fff')
    root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)')
    root.style.setProperty('--headerFont', '#00283A' )
    root.style.setProperty('--fontColor', '#fff' )
    root.style.setProperty('--mainColor', '#ff8181' )
    root.style.setProperty('--bagColor', '#f4f5f7')
  }
}



$('#myRadio').click(function () {
  // h1
  let root = document.querySelector(':root')

  if ($('#myRadio').hasClass('active')) { //现在白色变成黑色
    sessionStorage.setItem('wttandroid', false)
    
    $('#myRadio').removeClass('active')
    $('.navigation').removeClass('active')

    root.style.setProperty('--backColor', '#fff')
    root.style.setProperty('--borderline', '#fff')
    root.style.setProperty('--headerCOlor', '#fff')
    root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)')
    root.style.setProperty('--headerFont', '#00283A' )
    root.style.setProperty('--fontColor', '#fff' )
    root.style.setProperty('--mainColor', '#ff8181' )
    root.style.setProperty('--bagColor', '#f4f5f7')

  } else {//现在黑色变成白色
    sessionStorage.setItem('wttandroid', true)
    
    $('#myRadio').addClass('active')
    $('.navigation').addClass('active')
    
    root.style.setProperty('--backColor', '#fff')
    root.style.setProperty('--borderline', '#00283A')
    root.style.setProperty('--headerCOlor', '#00283A')
    root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)')
    root.style.setProperty('--headerFont', '#fff' )
    root.style.setProperty('--fontColor', '#00283A' )
    root.style.setProperty('--mainColor', '#ff8181' )
    root.style.setProperty('--bagColor','#02162b' )
  }
})



$(document).ready(function() {
  $('#videoShow').click(function(event) {
      event.stopPropagation(); // 阻止点击事件冒泡
      var videoUrl = $(this).data('video-url'); // 获取点击元素的视频链接
      if (videoUrl) {
          $('#videoPlayer').attr('src', videoUrl); // 设置视频源
          $('#videoPopup').show(); // 显示视频弹窗
      }
  });

  $('#closeBtn').click(function() {
      $('#videoPopup').hide(); // 关闭视频弹窗
      $('#videoPlayer').attr('src', ''); // 清空视频源
  });
});

$(document).ready(function() {
  $('#audioTrigger').click(function() {
    console.log("我进来了");
    var $musicwrap = $('#musicwrap');
    if ($musicwrap.hasClass('paused')) {
        $musicwrap.removeClass('paused');
        $('#play1')[0].play();
    } else {
        $musicwrap.addClass('paused');
        $('#play1')[0].pause();
    }
  });  
});

$(document).ready(function() {
  $('#audioTrigger').trigger('click');
});


   
$('#zhezhao>.close').click(function () {
  console.log('遮罩层')
  if ($('#zhezhao').hasClass('active')) {
    $('#zhezhao').removeClass('active')
    document.getElementById('videoResumeC').pause();
  } else {
    $('#zhezhao').addClass('active')
  }
})
  
$('#minmenu').click(function () {
  console.log('遮罩层')
  if ($('#minmenu').hasClass('active')) {
    $('#minmenu').removeClass('active');
    $('.menu_list').removeClass('active');
    
  } else {
    $('#minmenu').addClass('active')
    $('.menu_list').addClass('active')
  }
})
  
  



  
  
  // loadding
  // document.onreadystatechange = function () {
  //   if (document.readyState == 'complete') {
  //     let opacity = $('.lodding-wrap').css('opacity');
  //     let timer = null;
  //     timer = opacity&&setInterval(() => {
  //       opacity-=0.1
  //       $('.lodding-wrap').css('opacity', opacity);
  //       console.log(opacity)
  //       if (opacity <= 0) {
  //         $('.lodding-wrap').css('display','none');
  //         clearInterval(timer)
  //       }
  //     }, 100);
     
  //   }
  // }
  let timer = setTimeout(() => {
    let opacity = $('.lodding-wrap').css('opacity');
    let intervalTimer = null;
    intervalTimer = opacity && setInterval(() => {
        opacity -= 0.1
        $('.lodding-wrap').css('opacity', opacity);
        console.log(opacity)
        if (opacity <= 0) {
            $('.lodding-wrap').css('display', 'none');
            clearInterval(intervalTimer)
        }
    }, 100);
}, 2000);
timer();
document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
        clearTimeout(timer); // 如果页面在五秒内加载完成，取消定时器，立即隐藏加载界面
        let opacity = $('.lodding-wrap').css('opacity');
        let intervalTimer = null;
        intervalTimer = opacity && setInterval(() => {
            opacity -= 0.1
            $('.lodding-wrap').css('opacity', opacity);
            console.log(opacity)
            if (opacity <= 0) {
                $('.lodding-wrap').css('display', 'none');
                clearInterval(intervalTimer)
            }
        }, 100);
    }
}


  

            //锚点定位初始化
            function bindEvenInit(){
              $('.navbtn').bind("click touch",function () {
                //scrollTop 滚动到  $(this).attr('href')锚点关联id所在位置
                $('html,body').animate({scrollTop:($($(this).attr('href')).offset().top-100)},500)
                return false
              })
            }
})()
