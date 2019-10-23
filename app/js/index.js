//выпадаюее меню не отслеживае resize окна => перезагружать при переходе =<768 и <=320



var art1={
  title: "Сравнение движков: Unreal Engine 4 против Unity 5",
  text: 'Выбрать движок дело не простое, а особенно когда оба очень хороши. В статье мы проведем сравнение двух программ и выясним какой движок использовать именно Вам!',
  link: 'https://itproger.com/news/124',
  href: 'https://itproger.com/img/news/1534765244.jpg'
};

var art2={
  title: "7 девушек айтишниц из фильмов и сериалов",
  text: 'Много ли вы знаете фильмов и сериалов, где главные персонажы это девушки программисты? Мы подобрали 7 фильмов с такой концепцией.',
  link: 'https://itproger.com/news/122',
  href: 'https://itproger.com/img/news/1534137690.jpg'
};

var art3={
  title: "11 полезных инструментов для веб-разработчика",
  text: 'Разработчики постоянно пытаются сделать свою жизнь проще или расширить собственные возможности. Мы подготовили 11 инструментов, которые это обеспечат.',
  link: 'https://itproger.com/news/121',
  href: 'https://itproger.com/img/news/1532948245.jpg'
};

var art4={
  title: "Сравнение движков: Unreal Engine 4 против Unity 5",
  text: 'Выбрать движок дело не простое, а особенно когда оба очень хороши. В статье мы проведем сравнение двух программ и выясним какой движок использовать именно Вам!',
  link: 'https://itproger.com/news/123',
  href: 'https://itproger.com/img/news/1534139040.jpg'
};

var art5={
  title: "!Сравнение движков: Unreal Engine 4 против Unity 5",
  text: 'Выбрать движок дело не простое, а особенно когда оба очень хороши. В статье мы проведем сравнение двух программ и выясним какой движок использовать именно Вам!',
  link: 'https://itproger.com/news/124',
  href: 'https://itproger.com/img/news/1534765244.jpg'
};

var art6={
  title: "!7 девушек айтишниц из фильмов и сериалов",
  text: 'Много ли вы знаете фильмов и сериалов, где главные персонажы это девушки программисты? Мы подобрали 7 фильмов с такой концепцией.',
  link: 'https://itproger.com/news/122',
  href: 'https://itproger.com/img/news/1534137690.jpg'
};

var art7={
  title: "Swift",
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  href: 'https://itproger.com/img/news/1532948245.jpg'
};

var art8={
  title: "Swift",
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  href: 'https://itproger.com/img/news/1534139040.jpg'
};

var art9={
  title: "Swift",
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  href: 'https://itproger.com/img/news/1534765244.jpg'
};

var art10={
  title: "*!7 Swift",
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  href: 'https://itproger.com/img/news/1534137690.jpg'
};

var art11={
  title: "Swift",
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod!',
  href: 'https://itproger.com/img/news/1534765244.jpg'
};

var art12={
  title: "Swift",
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  href: 'https://itproger.com/img/news/1534137690.jpg'
};


var articArr=[art1, art2, art3, art4, art5, art6, art7, art8, art9, art10, art11, art12 ];

//статей в блоке
var artPiece=6

window.onload = function() {
  //первый блог статей
  for(var i=0; i<artPiece; i++){
      $('.mBody .news').prepend('<article class="artBody"><div class="img"><img id="art'+i+'" onclick="imgWindow(' + i + ')" src="'+articArr[i].href+'" alt="Picture"></div><div class="artText"><h4>'+articArr[i].title+'</h4><p>'+articArr[i].text+'</p><button type="button"><a href="">Далее</a></button></div></article>')
    }
  //второй блог статей
    for(var i=7; i<11; i++){
        $('.mFoot .news').prepend('<article class="artBody"><div class="img"><img id="art'+i+'" onclick="imgWindow(' + i + ')" src="'+articArr[i].href+'" alt="Picture"></div><div class="artText"><h4>'+articArr[i].title+'</h4><p>'+articArr[i].text+'</p><button type="button"><a href="">Детали</a></button></div></article>')
      }

//скрытие картинки на весь экран
    $('#imgBox img').on('click', function(){
      $('#imgBox').hide();
    });

  }
// отображение картинки на весь экран
  function imgWindow(i) {
    var x=$("#art" + i).attr("src");
    $('#imgBox img').attr("src", x);
    $('#imgBox').show();
  }
//выпадающее меню
$('.btnMenu i').on("click", function(){

    if($('menu').css('width')!='0px'){
      if($('html').innerWidth()<=768){
        $('.btnMenu').css('left', '0px');
        $('menu').css('margin-top', '0px');
      }
      $('menu').css('width', '0px');
    }

    else {
      var x=300;
      if($('html').innerWidth()<=320) x= 250;

      if($('html').innerWidth()<=768){
        $('.btnMenu').css('left', ''+(x-10)+'px');
         var y=event.pageY;
         if(y>600) $('menu').css('margin-top', ''+(y-600)+'px');
      }
      $('menu').css('width', ''+x+'px');
    }

  })
