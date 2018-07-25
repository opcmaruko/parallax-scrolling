   $(function() {

       $('.slide:eq(0)').show();

       // RESIZE EVENT
       $(window).resize(function() {
           var newHeight = $(window).height();
           $('.slide').css('min-height', newHeight + 'px');
           newHeight = $(window).height() - 50;
           $('#slide0').css('min-height', newHeight + 'px');

       });
       $(window).trigger('resize');





       // next button listener
       $('.next').click(function() {
           var $target = $(this).closest('.slide').next('.slide');
           $target.show();
           $(window).scrollTo($target, 800);
       })

       // slide 0 listeners
       $('.slide .button:eq(0)').click(function() {
           // save name if entered
           if ($('.slide:eq(0) select').val()) {

               $('.slide:eq(1)').show();
               var nextSlide = $('.slide:eq(1)');
               $(window).scrollTo($(nextSlide), 800);
           }
       });
       // slide 1 listeners
       $('.slide .button:eq(0)').click(function() {
           // save name if entered 
           if ($('.slide:eq(1) select').val()) {
               $('.slide:eq(1)').show();
               var nextSlide = $('.slide:eq(1)');
               $(window).scrollTo($(nextSlide), 800);
           }
       });



   });



   var time = 0

   function drawing() {
       var c = document.getElementById('canvas');
       var ctx = c.getContext('2d');
       var xMax = c.width = window.screen.availWidth;
       var yMax = c.height = window.screen.availHeight;
       var screenW = window.innerWidth;
       var screenH = window.innerHeight;
       c.width = screenW;
       c.height = screenH;


       time++

       let logox = 1 - (time % 10)
       ctx.save();



       ctx.beginPath();
       ctx.moveTo(screenW, 0);
       ctx.lineTo(screenW, screenH);
       ctx.lineTo(0, screenH);
       ctx.closePath();
       ctx.fillStyle = "rgb(21,134,221)";
       ctx.fill();


       ctx.save();



       let carx = 1 - (time % 1024) - 10


       ctx.translate(800, 700);
       ctx.scale(0.5, 0.5);


   }


   setInterval(drawing, 50)


   function draw() {
       var c = document.getElementById('canvas2');
       var ctx = c.getContext('2d');
       var xMax = c.width = window.screen.availWidth;
       var yMax = c.height = window.screen.availHeight;
       var screenW = window.innerWidth;
       var screenH = window.innerHeight;
       c.width = screenW;
       c.height = screenH;


       time++

       let logox = 1 - (time % 10)


       ctx.save();



       ctx.beginPath();
       ctx.moveTo(screenW, 0);
       ctx.lineTo(screenW, screenH);
       ctx.lineTo(0, screenH);
       ctx.closePath();
       ctx.fillStyle = "rgb(38,200,100)";
       ctx.fill();





       ctx.save();



       let carx = 1 - (time % 1024) - 10


       ctx.translate(800, 700);
       ctx.scale(0.5, 0.5);



   }

   setInterval(draw, 50)

   function draw3() {
       var c = document.getElementById('canvas3');
       var ctx = c.getContext('2d');
       var xMax = c.width = window.screen.availWidth;
       var yMax = c.height = window.screen.availHeight;
       var screenW = window.innerWidth;
       var screenH = window.innerHeight;
       c.width = screenW;
       c.height = screenH;


       time++

       let logox = 1 - (time % 10)


       ctx.save();



       ctx.beginPath();
       ctx.moveTo(screenW, 0);
       ctx.lineTo(screenW, screenH);
       ctx.lineTo(0, screenH);
       ctx.closePath();
       ctx.fillStyle = "rgb(38,200,100)";
       ctx.fill();





       ctx.save();



       let carx = 1 - (time % 1024) - 10


       ctx.translate(800, 700);
       ctx.scale(0.5, 0.5);



   }

   setInterval(draw3, 50)


   function draw4() {
       var c = document.getElementById('canvas4');
       var ctx = c.getContext('2d');
       var xMax = c.width = window.screen.availWidth;
       var yMax = c.height = window.screen.availHeight;
       var screenW = window.innerWidth;
       var screenH = window.innerHeight;
       c.width = screenW;
       c.height = screenH;


       time++

       let logox = 1 - (time % 10)
       ctx.save();



       ctx.beginPath();
       ctx.moveTo(screenW, 0);
       ctx.lineTo(screenW, screenH);
       ctx.lineTo(0, screenH);
       ctx.closePath();
       ctx.fillStyle = "rgb(21,134,221)";
       ctx.fill();


       ctx.save();



       let carx = 1 - (time % 1024) - 10


       ctx.translate(800, 700);
       ctx.scale(0.5, 0.5);


   }


   setInterval(draw4, 50)