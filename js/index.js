(function(){
    window.getScreenId = function(callback){
        let constraints = { video: true, audio: false };
        navigator.mediaDevices
            .getDisplayMedia(constraints)
            .then(function(stream){
                if(typeof callback === 'function'){
                    callback('', stream, constraints);
                }
            }, function(err){
                console.log(err);
                if(typeof callback === 'function'){
                    callback(err, null, constraints);
                }
            })
            .catch(function(err){
                console.log(err);
                if(typeof callback === 'function'){
                    callback(err, null, constraints);
                }
            });
    };

    window.getCamera = function(callback){
        let getUserMedia = navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia;
        let constraints = { video:{width:480,height:320}, audio: true };
        getUserMedia(constraints, function(stream){
            if(typeof callback === 'function'){
                callback('', stream, constraints);
            }
        },function(err){
            console.log(err);
            if(typeof callback === 'function'){
                callback(err, null, constraints);
            }
        });
    };
})();

function screenShare(){
    getScreenId(function(err, stream, constraints){
        let video = document.getElementById("webcam");
        video.srcObject = stream;
        video.play();
    });
}

function cameraShare(){
    getCamera(function(err, stream, constraints){
        let video = document.getElementById("webcam");
        video.srcObject = stream;
        video.play();
    });
}