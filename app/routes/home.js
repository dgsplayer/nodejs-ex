module.exports = function(app){

  app.get('/',function(req,res,next){
    res.render('home/index');
  });

  app.get('/recorder',function(req,res,next){
    //Record screen
    var fs = require('fs');
    // fs.statSync(filePath);
    //if (fs.statSync('./public/test1.mp4')) {
    //  fs.unlink('./public/test1.mp4', (err) => {
    //    if (err) throw err;
    //    console.log('./public/test1.mp4 deletado');
    //  });
    //}

    var ScreenRecorder = require('screen-recorder').ScreenRecorder
    var path = require('path')
    var movie = new ScreenRecorder(path.resolve(__dirname, '../../public/test1.mp4')) // [, displayId]
    movie.setCapturesMouseClicks(true)
    movie.setCropRect(0, 0, 1500, 1500)
    movie.setFrameRate(30) // default is 15
    movie.recordAudio()
    movie.start()
    console.log('Gravando...');
    setTimeout(function() {
      console.log('Ok Gravado');
      movie.stop()
    }, 10000);



//    var file = '../../public/test1.mp4';
// res.download(file); // Set disposition and send it.



    res.render('home/index');
  });

  app.get('/notification',function(req,res,next){
    //Notification
      var fs = require("fs");
      var content = fs.readFileSync("./content.json");
      if(content){
        console.log('rodando setInterval'+content+'');
        const notifier = require('node-notifier');
        const path = require('path');

        notifier.notify(
          {
            title: 'Você tem nova ligação!',
            message: 'Paulo Abdala ligando...',
            icon: path.join(__dirname, 'coulson.jpg'), // Absolute path (doesn't work on balloons)
            sound: true, // Only Notification Center or Windows Toasters
            wait: true // Wait with callback, until user action is taken against notification
          },
          function(err, response) {
            // Response is response from notification
          }
        );

        notifier.on('click', function(notifierObject, options) {
          // Triggers if `wait: true` and user clicks notification
        });

        notifier.on('timeout', function(notifierObject, options) {
          // Triggers if `wait: true` and notification closes
        });
      }
      res.render('home/index');
  });
};
