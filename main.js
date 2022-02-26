Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">'
        });
    }
    console.log('ml5 version',ml5.version);
    var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gQfSf6dnh/model.json',ModelLoaded);
    function check_snapshot(){
        img=document.getElementById("captured_image");
        classifier.classify(img,gotResponse);
    }
    function gotResponse(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
       document.getElementById("result_object_name").innerHTML=results[0].label;
       document.getElementById("accuracy_of_object").innerHTML=results[0].confidence.toFixed(3)*100+"%";
    }
    }