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
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices.getUserMedia;
        let constraints = { video:true, audio: true };
        navigator.getUserMedia(constraints, function(stream){
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

let globalScreenStream;
let globalCameraStream;

function screenShare(){
    getScreenId(function(err, stream, constraints){
        let video = document.getElementById("webcam");
        video.srcObject = stream;
        globalScreenStream = stream;
        video.play();
    });
}

function cameraShare(){
    getCamera(function(err, stream, constraints){
        let video = document.getElementById("webcam");
        video.srcObject = stream;
        globalCameraStream = stream;
        video.play();
    });
}

function closeScreenShare(){
    if(!globalScreenStream){
        alert("你没有进行过屏幕共享,无法关闭!");
        return;
    }
    let videoTrack = globalScreenStream.getVideoTracks()[0];
    console.log("视频: ",videoTrack);
    videoTrack.stop();
    globalScreenStream = undefined;
}

function closeCameraShare(){
    if(!globalCameraStream){
        alert("你没有打开摄像头,无法关闭!");
        return;
    }
    let videoTrack = globalCameraStream.getVideoTracks()[0];
    console.log("视频: ",videoTrack);
    videoTrack.stop();
    let audioTrack = globalCameraStream.getAudioTracks()[0];
    console.log("音频: ",audioTrack);
    audioTrack.stop();
    globalCameraStream = undefined;
}