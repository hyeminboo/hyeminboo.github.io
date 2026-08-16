const albumData = [
  { year:"2026", cover:"images/photo-assets/2026-cover-v2.jpg", tilt:"-2deg", memories:[
    {date:"01-01",note:"럭키걸이 될테야 !",images:["images/photo/2026/0101.PNG", "images/photo/2026/0101_2.jpg"], artist:"ILLIT",song:"Lucky Girl Syndrome",spotifyId:"2kIUILBPlz4exX9xIFS275", youtubeId:"UCmgGZbfjmk",startSeconds:3},
    {date:"01-08",note:"가장 추운 날에 찍은 졸업사진 🥶",images:["images/photo/2026/0108_1.jpg", "images/photo/2026/0108_2.jpg", "images/photo/2026/0108_3.jpg", "images/photo/2026/0108_4.JPG"], artist:"10CM",song:"Rebirth",spotifyId:"4BryUMytuOhVyVR1wgbCgy",youtubeId:"8zUJgK294Lw",startSeconds:7},
    {date:"01-17",note:"",artist:"2xxx",image:"images/photo/2026/0117.JPG", song:"Piss On Me",spotifyId:"4GJy4M67insCFuAUhluOza",youtubeId:"wLrVX2GIrNg",startSeconds:13},
    {date:"01-21",note:"🍻", images:["images/photo/2026/0121.JPG", "images/photo/2026/0121_2.JPG", "images/photo/2026/0121_3.JPG"], artist:"Block B Bastarz",song:"Help Me",spotifyId:"50WdPcO8BwSG3yqWnKNBaZ",youtubeId:"6TfLvjqm9Jc",startSeconds:0},
    {date:"01-22",note:"오늘의 명언 ...? 🥴", image:"images/photo/2026/0122.JPG", artist:"Silica Gel", song:"NO PAIN",spotifyId:"4N5PLI3puPr62sGcJbkiFL",youtubeId:"JaIMSzE5yLA",startSeconds:4},
    {date:"01-23",note:"ㅠㅠ", image:["images/photo/2026/0123.JPG", "images/photo/2026/0123_2.JPG"], artist:"ONF", song:"Moscow Moscow",spotifyId:"3o1jDeD4ujTpZgDotZSDgx",youtubeId:"0lxh-ChXPMw",startSeconds:10},
    {date:"01-30",note:"🥺🫶", image:["images/photo/2026/0130.JPG"], artist:"이상은", song:"넌 아름다워",youtubeId:"ZPxxObv8Kp4",startSeconds:1},
    {date:"02-04",note:"우리집", image:["images/photo/2026/0204.JPG", "images/photo/2026/0204_2.JPG", "images/photo/2026/0204_3.jpg"], artist:"BTS", song:"HOME",spotifyId:"6Yc3tjFCVR2bfAQFRTZBef",youtubeId:"ghJURdZKq3I",startSeconds:13},
    {date:"02-15",note:"Slow down, slow down, slow down, slow down 🎶", image:["images/photo/2026/0215.JPG", "images/photo/2026/0215_2.jpg"], artist:"Cody Fry", song:"Thinking About You",spotifyId:"1lpqzWcJ2CUr8MAT5G3jNm",youtubeId:"dU7iHJEsNFo",startSeconds:0},
    {date:"02-23",note:"먼 길을 돌고 돌아 드디어 학부 졸업 !\n그동안 믿고 기다려준 엄마, 아빠 감사합니다 🩵", image:["images/photo/2026/0223.JPG", "images/photo/2026/0223_2.JPG", "images/photo/2026/0223_3.JPG", "images/photo/2026/0223_4.jpg", "images/photo/2026/0223_5.jpg", "images/photo/2026/0223_6.jpg", "images/photo/2026/0223_7.png", "images/photo/2026/0223_8.JPG", "images/photo/2026/0223_9.jpg", "images/photo/2026/0223_10.jpg"], artist:"NCT WISH", song:"WISH",spotifyId:"1Yb4Wl4xXGffDPHAoYzqLb",youtubeId:"hvQZs3k6Ytk",startSeconds:146.6},
    {date:"02-25",note:"제 소원은요 ,,\n아기 젠슨황?", image:["images/photo/2026/0225_1.JPG","images/photo/2026/0225_2.JPG","images/photo/2026/0225_3.JPG","images/photo/2026/0225_4.jpg"], artist:"NCT DREAM", song:"Dunk Shot",spotifyId:"2sOz5KStj3M1L1ErNo6MCC",youtubeId:"cm5PbcKlvMU",startSeconds:178},
    {date:"03-01",note:"양치하고 있었는데 경비 아저씨가 불 끄고 가심 ㅠㅠ", image:["images/photo/2026/0301.JPG"], artist:"ARrC", song:"light up",spotifyId:"7wn7zV6fSgF01IHSzQmwr5",youtubeId:"N6tAercUSbs",startSeconds:0},
    {date:"03-04",note:"", image:["images/photo/2026/0304.JPG"], artist:"f(x)", song:"4 Walls",spotifyId:"5CvtvEqofoPInxqxztEZAH",youtubeId:"4j7Umwfx60Q",startSeconds:0},
    {date:"03-08",note:"동생이랑 서울 나들이", image:["images/photo/2026/0308_1.JPG","images/photo/2026/0308_2.JPG","images/photo/2026/0308_3.JPG"], artist:"윤지영", song:"City Seoul",spotifyId:"0XayRzuwoitpMrzHfZvRnJ",youtubeId:"-TtlnIC50gE",startSeconds:0},
    {date:"03-09",note:"귀여운 애들이 귀여운 것들만 줬다 !", image:["images/photo/2026/0309_1.jPG","images/photo/2026/0309_2.jpg"], artist:"Hearts2Hearts", song:"STYLE",spotifyId:"5EoV2HmAlkqN1XvsIjOBZZ",youtubeId:"n7kFRxFIPrI",startSeconds:0},
    {date:"03-15",note:"내 애기 1호랑 ㅎㅎ", image:["images/photo/2026/0315_1.JPG","images/photo/2026/0315_2.jpg"], artist:"AKMU", song:"Love Lee",spotifyId:"1qosh64U6CR5ki1g1Rf2dZ",youtubeId:"EIz09kLzN9k",startSeconds:4},
    {date:"03-31",note:"💐", image:["images/photo/2026/0331_1.jpg","images/photo/2026/0331_2.JPG","images/photo/2026/0331_3.JPG","images/photo/2026/0331_4.JPG"], artist:"meenoi", song:"살랑살랑",spotifyId:"1DEJaWgi8ZKdStRO0iUX6e",youtubeId:"CkOJXIH9A_E",startSeconds:48.5},
    {date:"04-03",note:"첫 클라이밍 !", image:["images/photo/2026/0403_1.JPG","images/photo/2026/0403_2.JPG","images/photo/2026/0403_3.JPG"], artist:"RAKUNELAMA", song:"GOSU",spotifyId:"6Ywn6JiTTBkWJLzdzavbgH",youtubeId:"IJnKPF0CSYQ",startSeconds:0},
    {date:"04-05",note:"정말 아름다운 이야기였어.. 🪨🕷️", image:["images/photo/2026/0405_3.JPG","images/photo/2026/0405_4.JPG","images/photo/2026/0405_5.JPG", "images/photo/2026/0405_1.jpg"], artist:"Harry Styles", song:"Sign of the Times",spotifyId:"5Ohxk2dO5COHF1krpoPigN",youtubeId:"qN4ooNx77u0",startSeconds:16},
    {date:"04-22",note:"Matcha-core.", image:["images/photo/2026/0422_1.JPG","images/photo/2026/0422_2.jpg"], artist:"AtHeart", song:"Plot Twist",spotifyId:"6gtm6O3lmxDdbhfieaSPhw",youtubeId:"74Kv5W9c8dE",startSeconds:0},
    {date:"04-26",note:"짱좋은노래발견 💡", image:["images/photo/2026/0426_1.JPG","images/photo/2026/0426_2.JPG","images/photo/2026/0426_3.JPG","images/photo/2026/0426_4.jpg"], artist:"Wallows", song:"Remember When",spotifyId:"5naar7XewEOAjOywIp6Jjq",youtubeId:"CIVwcpbbfz0",startSeconds:0},
    {date:"05-06",note:"난뭘하고있는거지\n어디로가고있는거지", image:["images/photo/2026/0506_1.JPG","images/photo/2026/0506_2.JPG"], artist:"윤지영", song:"Blue Bird",spotifyId:"2qqudihoQzT77Y8wslNpdM",youtubeId:"MIGRpXd1k7c",startSeconds:0.5},
    {date:"05-09",note:"떠나자 ~ ⛵️", image:["images/photo/2026/0509_1.jpg","images/photo/2026/0509_2.JPG","images/photo/2026/0509_3.JPEG","images/photo/2026/0509_4.JPG","images/photo/2026/0509_5.JPG"], artist:"LUCY", song:"조깅",spotifyId:"2aDCp24J5UylIX9QwrjGEe",youtubeId:"dh684FWByO4",startSeconds:1.5},
    {date:"05-10",note:"5️⃣kinawaa", image:["images/photo/2026/0510_1.JPG","images/photo/2026/0510_2.JPG","images/photo/2026/0510_3.JPG","images/photo/2026/0510_4.jpg","images/photo/2026/0510_5.JPG","images/photo/2026/0510_6.jpg","images/photo/2026/0510_7.jpg"], artist:"새소년", song:"긴 꿈",spotifyId:"4HKMfOA7SBN7XqV4fiTnvK",youtubeId:"tzL4A8hyXc8",startSeconds:3.5},
    {date:"05-11",note:"", image:["images/photo/2026/0511_1.JPG","images/photo/2026/0511_2.jpg","images/photo/2026/0511_3.JPG","images/photo/2026/0511_4.jpg","images/photo/2026/0511_5.JPG"], artist:"NCT WISH", song:"Surf",spotifyId:"2bJI4NceMjye26SmzewutW",youtubeId:"1pyO6oNmACs",startSeconds:36},
    {date:"05-12",note:"NMNL", image:["images/photo/2026/0512_1.JPG","images/photo/2026/0512_2.JPG","images/photo/2026/0512_3.jpg","images/photo/2026/0512_4.JPG","images/photo/2026/0512_5.JPG"], artist:"Vaundy", song:"東京フラッシュ",spotifyId:"3vXdK7DCzJyp1MIh10TJFS",youtubeId:"SIuF37EWaLU",startSeconds:63},
    {date:"05-13",note:"마지막 날에 좋아진 날씨", image:["images/photo/2026/0513_1.JPG","images/photo/2026/0513_2.JPG","images/photo/2026/0513_3.jpg","images/photo/2026/0513_4.JPG","images/photo/2026/0513_5.JPG","images/photo/2026/0513_6.JPG","images/photo/2026/0513_7.JPG"], artist:"인디고", song:"여름아!부탁해",spotifyId:"5TtI0W3eOXchWrUEfSikwn",youtubeId:"-Un2J8eCwCI",startSeconds:26.5}]},
  ];

const $=selector=>document.querySelector(selector);
const albumList=$("#album-list"),modal=$("#record-modal"),record=$("#record"),preview=$("#memory-preview"),previewImage=$("#memory-image"),cursorDate=$("#cursor-date"),audio=$("#memory-audio"),waveform=$("#waveform"),spotifyWrap=$("#spotify-player-wrap"),youtubeWrap=$("#youtube-player-wrap"),youtubePlayer=$("#youtube-player"),musicChoice=$("#music-choice"),photoPrev=$("#photo-prev"),photoNext=$("#photo-next"),photoCount=$("#photo-count");
let activeAlbum,activeMemoryIndex=-1,activeImages=[],activeImageIndex=0,pendingPoint=null,frameRequested=false,transitionTimer,spotifyController,spotifyReady=false,queuedMemory,pendingAlbumIndex=null;
let musicPreference="";

function dayOfYear(year,monthDay){const [month,day]=monthDay.split("-").map(Number);return Math.floor((Date.UTC(+year,month-1,day)-Date.UTC(+year,0,1))/86400000)+1}
function formatDay(year,day){return new Intl.DateTimeFormat("en-US",{month:"short",timeZone:"UTC"}).format(new Date(Date.UTC(+year,0,day)))}
function formatTimelineMonth(position){return ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Math.min(11,Math.floor(position/(365/12)))]}
function distributeMemoriesWithinMonths(memories){
  const monthGroups=Array.from({length:12},()=>[]);
  memories.forEach(memory=>monthGroups[Number(memory.date.slice(0,2))-1].push(memory));
  monthGroups.forEach((group,monthIndex)=>group.forEach((memory,index)=>{
    memory.timelinePosition=(monthIndex+(index+.5)/group.length)*(365/12);
  }));
}

albumData.forEach((album,index)=>{
  album.memories=album.memories.map(memory=>({artist:"Artist",song:"Song title",audio:"",spotifyId:"",...memory,day:dayOfYear(album.year,memory.date)})).sort((a,b)=>a.day-b.day);
  distributeMemoriesWithinMonths(album.memories);
  const button=document.createElement("button");
  button.type="button";button.className="album";button.style.backgroundImage=`url("${album.cover}")`;button.style.setProperty("--tilt",album.tilt);
  button.setAttribute("aria-label",`${album.year}년 사진 앨범 열기`);button.addEventListener("click",()=>requestOpenAlbum(index));albumList.appendChild(button);
});

function requestOpenAlbum(index){
  pendingAlbumIndex=index;musicChoice.hidden=false;musicChoice.querySelector("[data-music-choice]").focus();
}
document.querySelectorAll("[data-music-choice]").forEach(button=>button.addEventListener("click",()=>{
  musicPreference=button.dataset.musicChoice;
  musicChoice.hidden=true;const index=pendingAlbumIndex;pendingAlbumIndex=null;if(index!==null)openAlbum(index);
}));

function openAlbum(index){
  activeAlbum=albumData[index];activeMemoryIndex=-1;$("#record-label").style.backgroundImage=`url("${activeAlbum.cover}")`;$("#record-sleeve").style.backgroundImage=`url("${activeAlbum.cover}")`;preview.classList.remove("visible");cursorDate.classList.remove("visible");modal.hidden=false;modal.scrollTop=0;document.body.style.overflow="hidden";showMemory(0,true);$("#modal-close").focus();
}
function closeAlbum(){modal.hidden=true;document.body.style.overflow="";clearTimeout(transitionTimer);queuedMemory=null;audio.pause();if(spotifyReady)spotifyController.pause();youtubePlayer.removeAttribute("src");waveform.classList.remove("playing")}
function findNearestMemory(position){let nearest=0,distance=Infinity;activeAlbum.memories.forEach((memory,index)=>{const direct=Math.abs(memory.timelinePosition-position),current=Math.min(direct,365-direct);if(current<distance){distance=current;nearest=index}});return nearest}
function showMemory(index,startImmediately=false){
  if(index===activeMemoryIndex)return;activeMemoryIndex=index;const memory=activeAlbum.memories[index];clearTimeout(transitionTimer);preview.classList.remove("visible");if(startImmediately)playTrack(memory);transitionTimer=setTimeout(()=>{
    activeImages=memory.images||(Array.isArray(memory.image)?memory.image:[memory.image].filter(Boolean));activeImageIndex=0;renderMemoryImage(memory);
    $("#memory-date").textContent=`${activeAlbum.year}. ${memory.date.replace("-",".")}`;setMultilineText($("#memory-note"),memory.note);$("#track-credit").textContent=[memory.artist,memory.song].filter(Boolean).join(" — ");preview.classList.add("visible");if(!startImmediately)playTrack(memory)
  },70)
}
function setMultilineText(element,text=""){
  const lines=text.split("\n");element.replaceChildren();lines.forEach((line,index)=>{if(index)element.appendChild(document.createElement("br"));element.appendChild(document.createTextNode(line))})
}
function renderMemoryImage(memory=activeAlbum.memories[activeMemoryIndex]){
  const hasImages=activeImages.length>0,multiple=activeImages.length>1;
  if(hasImages){previewImage.src=activeImages[activeImageIndex];previewImage.alt=`${activeAlbum.year}년 ${formatDay(activeAlbum.year,memory.day)} 사진 ${activeImageIndex+1}/${activeImages.length}`;previewImage.hidden=false}else{previewImage.hidden=true;previewImage.removeAttribute("src")}
  photoPrev.hidden=!multiple;photoNext.hidden=!multiple;photoCount.hidden=!multiple;photoCount.textContent=multiple?`${activeImageIndex+1} / ${activeImages.length}`:"";
}
function changePhoto(direction){if(activeImages.length<2)return;activeImageIndex=(activeImageIndex+direction+activeImages.length)%activeImages.length;renderMemoryImage()}
async function playTrack(memory){
  waveform.classList.remove("playing");
  queuedMemory=null;spotifyWrap.hidden=true;youtubeWrap.hidden=true;audio.pause();stopSpotifyPlayback();
  if(musicPreference==="youtube"&&memory.youtubeId){
    const start=Math.max(0,Number(memory.startSeconds)||0);youtubePlayer.src=`https://www.youtube.com/embed/${memory.youtubeId}?autoplay=1&start=${Math.floor(start)}&playsinline=1`;youtubeWrap.hidden=false;waveform.classList.add("playing");return
  }
  if(musicPreference==="spotify"&&memory.spotifyId){
    audio.pause();spotifyWrap.hidden=false;queuedMemory=memory;
    if(spotifyReady)playSpotifyTrack(memory);
    return
  }
  if(musicPreference==="spotify")stopSpotifyPlayback(true);
  if(!memory.audio){audio.pause();audio.removeAttribute("src");return}
  if(audio.getAttribute("src")!==memory.audio){audio.src=memory.audio;audio.currentTime=0}
  try{await audio.play();waveform.classList.add("playing")}catch(error){waveform.classList.remove("playing")}
}

function stopSpotifyPlayback(recheck=false){
  if(!spotifyReady)return;
  spotifyController.pause();
  if(recheck){
    [80,250,600].forEach(delay=>setTimeout(()=>{if(!queuedMemory&&spotifyReady)spotifyController.pause()},delay));
  }
}

function playSpotifyTrack(memory){
  if(!spotifyReady||musicPreference!=="spotify"||modal.hidden||memory!==queuedMemory)return;
  spotifyController.loadUri(`spotify:track:${memory.spotifyId}`);spotifyController.play();
}

window.onSpotifyIframeApiReady=function(IFrameAPI){
  const initialTrack=albumData.flatMap(album=>album.memories).find(memory=>memory.spotifyId)?.spotifyId;
  IFrameAPI.createController($("#spotify-player"),{uri:initialTrack?`spotify:track:${initialTrack}`:"",width:"100%",height:"152"},controller=>{
    spotifyController=controller;spotifyReady=true;
    spotifyController.addListener("playback_update",event=>{
      const shouldStop=musicPreference==="spotify"&&!queuedMemory;
      if(shouldStop&&!event.data.isPaused){spotifyController.pause();waveform.classList.remove("playing");return}
      waveform.classList.toggle("playing",!event.data.isPaused);
    });
    if(queuedMemory?.spotifyId)playSpotifyTrack(queuedMemory)
  })
};
function inspectPoint(clientX,clientY){
  const bounds=record.getBoundingClientRect(),areaBounds=record.parentElement.getBoundingClientRect(),x=clientX-bounds.left-bounds.width/2,y=clientY-bounds.top-bounds.height/2,radius=Math.hypot(x,y),outer=bounds.width/2;
  if(radius<outer*.66||radius>outer*1.04){cursorDate.classList.remove("visible");return}
  let angle=Math.atan2(y,x)+Math.PI/2;if(angle<0)angle+=Math.PI*2;const timelinePosition=angle/(Math.PI*2)*365;
  cursorDate.textContent=formatTimelineMonth(timelinePosition);cursorDate.style.left=`${clientX-areaBounds.left}px`;cursorDate.style.top=`${clientY-areaBounds.top}px`;cursorDate.classList.add("visible");showMemory(findNearestMemory(timelinePosition));
}
function queueInspection(event){const point=event.touches?event.touches[0]:event;pendingPoint={x:point.clientX,y:point.clientY};if(frameRequested)return;frameRequested=true;requestAnimationFrame(()=>{inspectPoint(pendingPoint.x,pendingPoint.y);frameRequested=false})}

record.addEventListener("pointermove",queueInspection);record.addEventListener("pointerleave",()=>cursorDate.classList.remove("visible"));record.addEventListener("touchmove",queueInspection,{passive:true});$("#modal-close").addEventListener("click",closeAlbum);$("#modal-backdrop").addEventListener("click",closeAlbum);document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!modal.hidden)closeAlbum()});
photoPrev.addEventListener("click",()=>changePhoto(-1));photoNext.addEventListener("click",()=>changePhoto(1));
audio.addEventListener("ended",()=>waveform.classList.remove("playing"));
