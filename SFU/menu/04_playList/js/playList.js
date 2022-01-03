(function () {
  const hamBtnEl = document.querySelector(".ham_btn");
  const tabMenuEl = document.querySelector(".tab_menu_wrap");

  hamBtnEl.addEventListener("click", () => {
    hamBtnEl.classList.toggle("active");
    tabMenuEl.classList.toggle("slide");
  });

})();

(function(){

  var audio, playbtn, seekslider, seeking=false, seekto, curtimetext, durtimetext;

  const pp_btnEl = document.querySelector('.pp_btn');
  const p_iconEl = document.querySelector('.material-icons');
  const pre_btnEl = document.querySelector('.pre_btn');
  const next_btnEl = document.querySelector('.next_btn');

  function initAudioplayer () {

      
      audio = new Audio();
      audio.src = "../../audio/song1.mp3"
      audio.loop = true;
      
      // 플레이버튼
      playbtn = document.getElementById('playpausebtn');

      // 재생바
      seekslider = document.getElementById('seekslider');
      curtimetext = document.getElementById('curtimetext');
      durtimetext = document.getElementById('durtimetext');

      // 플레이버튼 event
      playbtn.addEventListener('click', playpause);

      // 재생바 event
      seekslider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
    seekslider.addEventListener("mousemove", function(event){ seek(event); });
    seekslider.addEventListener("mouseup",function(){ seeking=false; });
      audio.addEventListener("timeupdate", function(){ seektimeupdate(); });

      // 플레이 함수
      function playpause(){
          if(audio.paused) {
              audio.play();
              pp_btnEl.removeChild(p_iconEl);
              pp_btnEl.innerHTML = `<span class="material-icons">play_arrow</span>`;
              console.log(pp_btnEl);
          }else {
              audio.pause();
              pp_btnEl.removeChild(p_iconEl);
              pp_btnEl.innerHTML = `<span class="material-icons" id="playpausebtn">stop</span>`;
              console.log(pp_btnEl);
          };
      }

      // try



      // 재생 함수

      function seek(event){
          if(seeking){
              seekslider.value = event.clientX - seekslider.offsetLeft;
              seekto = audio.duration * (seekslider.value / 100);
              audio.currentTime = seekto;
          }
      }

      function seektimeupdate(){
          var nt = audio.currentTime * (100 / audio.duration);
          seekslider.value = nt;
          var curmins = Math.floor(audio.currentTime / 60);
          var cursecs = Math.floor(audio.currentTime - curmins * 60);
          var durmins = Math.floor(audio.duration / 60);
          var dursecs = Math.floor(audio.duration - durmins * 60);
          if(cursecs < 10){ cursecs = "0"+cursecs; }
          if(dursecs < 10){ dursecs = "0"+dursecs; }
          if(curmins < 10){ curmins = "0"+curmins; }
          if(durmins < 10){ durmins = "0"+durmins; }
          curtimetext.innerHTML = curmins+":"+cursecs;
          durtimetext.innerHTML = durmins+":"+dursecs;
      }

  }
  window.addEventListener("load", initAudioplayer);

})();
//playbox function end


(function(){

  function initAudio () {
    var audio, dir, ext, mylist;
    dir = "../../audio/";
    ext = ".mp3";
  
    audio = new Audio();
    audio.src = dir+"song1"+ext;
    audio.play();
  
    mylist = document.getElementById('mylist');
    mylist.addEventListener("change", changeTrack);
  
    function changeTrack(event) {
        audio.src = dir+event.target.value+ext;
        audio.play();
    }
  }
  window.addEventListener('load' , initAudio);

})();
//playlist function end

