var i2c = require('i2c');
var wire = new i2c(0x18);

setInterval(function(){
      wire.readBytes(0x05, 2, function(err, res) {
              if (!err) {
                        t = res.readUInt16BE(0); //read first two bytes
                        temp = t & 0x0FFF; //drop info bits
                        temp /=  16.0; //divide by 16
                        if (t & 0x1000) temp -= 256; //If top bit is 1, make negative
                        console.log(temp);
                } else {
                        console.log('error ',err);
                }
        });
}, 1000);