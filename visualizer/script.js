if (!window.AudioContext) {
  window.AudioContext = window.webkitAudioContext
}

var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function (event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}, false)

start();

async function start() {
  var micStream = await navigator.mediaDevices.getUserMedia({ audio: true })
  var audioCtx = new window.AudioContext();
  var source = audioCtx.createMediaStreamSource(micStream);
  var analyzer = audioCtx.createAnalyser();

  source.connect(analyzer);

  analyzer.fftSize = 2048;
  var bufferLength = analyzer.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);

  animate();

  function animate() {
    analyzer.getByteTimeDomainData(dataArray);
    draw();
    window.requestAnimationFrame(animate);
  }

  function draw() {
    var { height, width } = canvas;
    var context = canvas.getContext("2d");
    var sliceWidth = width * 1.0 / dataArray.length;

    context.clearRect(0, 0, width, height);
    context.fillStyle = 'rgb(200, 200, 200)';
    context.fillRect(0, 0, width, height);
    context.lineWidth = 2;
    context.strokeStyle = 'rgb(0, 0, 0)';
    context.beginPath();

    var x = 0;
    for (var i = 0; i < dataArray.length; i++) {
      var v = dataArray[i] / 128.0;
      var y = v * height / 2;

      if (i === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }

      x += sliceWidth;
    }

    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();
  }
}