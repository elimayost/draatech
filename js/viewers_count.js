
function InsertCount(){
  if(document.getElementById('viewers-count')){
    document.getElementsByTagName('body')[0].removeChild(document.getElementById('viewers-count'))
  }

  const max = 10;
  const min = 2;

  viewers = Math.floor(Math.random() * (max - min) + min)

  node = document.getElementsByTagName('nav')[0]
  html = `<div id="viewers-count" class="message is-link">
            <div class="message-body">${viewers} viewers are currently reading this page.</div>
          </div>
          <style>
            #viewers-count {
              display: block;
              position: absolute;
              top: 100px;
              left: -500px;
              width: 20%;
              -webkit-animation: slide 1.5s forwards;
              animation: run 1.5s forwards;
            }

            @-webkit-keyframes run {
              100% { left: 10px;}
            }
          </style>`
  node.insertAdjacentHTML('afterend', html);
}

window.onload = InsertCount

window.addEventListener('visibilitychange', InsertCount)
