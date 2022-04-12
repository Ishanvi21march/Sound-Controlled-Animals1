function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9PBr-54B1/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}