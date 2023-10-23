const music = new Audio('audio/song3.mp3');
// music.play();

const songs = [

    {
           id: 1,
           songName:`feel <br>
           <div class="subtitle">Mashup song</div>`,
           poster:"image/img1.jpg",
    },
    {
        id: 2,
        songName:`mehrab<br>
        <div class="subtitle">Sohib Khan</div>`,
        poster:"image/img2.jpeg",
 },
 {
    id: 3,
    songName:` Ya Lili<br>
    <div class="subtitle">Arebic Remix</div>`,
    poster:"image/img3.jpeg",
},
{
    id: 4,
    songName:`Turkis<br>
    <div class="subtitle">Arebic Brand</div>`,
    poster:"image/img4.jpg",
},
{
    id: 5,
    songName:`ya dindi<br>
    <div class="subtitle">ALan Walker</div>`,
    poster:"image/img5.jpg",
},
{
    id: 6,
    songName:`mamma mamma<br>
    <div class="subtitle">Remix</div>`,
    poster:"image/img6.jpg",
},
{
    id: 7,
    songName:`Mehrab Sad<br>
    <div class="subtitle">Sohib Khan</div>`,
    poster:"image/img7.jpg",
},
{
    id: 8,
    songName:`Woopty<br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"image/img8.jpg",
},
{
    id: 9,
    songName:`Deep in <br>
    <div class="subtitle">Tune </div>`,
    poster:"image/img9.jpg",
},
{
    id: 10,
    songName:`Amplifier<br>
    <div class="subtitle">Khan</div>`,
    poster:"image/img10.jpg",
},
{
    id: 11,
    songName:`Amzad<br>
    <div class="subtitle">Arebic Tune</div>`,
    poster:"image/img11.jpg",
},
{
    id: 12,
    songName:`Xcho<br>
    <div class="subtitle">Tune </div>`,
    poster:"image/img12.jpg",
},
{
    id: 13,
    songName:`Flute Tune<br>
    <div class="subtitle">Sad Tune</div>`,
    poster:"image/img13.jpg",
},

{
    id: 14,
    songName:`Milne hai mujhse aayi<br>
    <div class="subtitle">Suraj Kashid</div>`,
    poster:"image/img14.jpg",
},
{
    id: 15,
    songName:`Sochta hu ki <br>
    <div class="subtitle">Babul</div>`,
    poster:"image/img15.jpg",
},
{
    id: 16,
    songName:`Ram Siya<br>
    <div class="subtitle">Ram ji</div>`,
    poster:"image/img16.jpg",
},
{
    id: 17,
    songName:`Maiyaa<br>
    <div class="subtitle">Mata Rani girl voice</div>`,
    poster:"image/img17.jpg",
},
{
    id: 18,
    songName:`kijo ke kesri ke lal<br>
    <div class="subtitle">Lofi song</div>`,
    poster:"image/img18.jpg",
},
{
    id: 19,
    songName:`Banke Hawa mai<br>
    <div class="subtitle">jainen's</div>`,
    poster:"image/img19.jpg",
},


{
    id: 20,
    songName:`Deep Breath <br>
    <div class="subtitle">Flute Tune</div>`,
    poster:"image/img20.jpg",
},
{
 id: 21,
 songName:`Rusiya Na Kr<br>
 <div class="subtitle">Akhil</div>`,
 poster:"image/img21.jpg",
},
{
id: 22,
songName:`Paisa Hai To<br>
<div class="subtitle">Remix</div>`,
poster:"image/img22.jpg",
},
{
id: 23,
songName:`Mota Paisa Moti Chain<br>
<div class="subtitle">Atitude</div>`,
poster:"image/img23.jpg",
},
{
id: 24,
songName:`college ki ladkiyon<br>
<div class="subtitle">natkhat</div>`,
poster:"image/img24.jpg",
},
{
id: 25,
songName:`Laado<br>
<div class="subtitle">Gil</div>`,
poster:"image/img25.jpg",
},
{
id: 26,
songName:`Ek Teri Khair<br>
<div class="subtitle">Bar Bar dekho</div>`,
poster:"image/img26.jpg",
},
{
id: 27,
songName:`Horn Blow<br>
<div class="subtitle">Remix</div>`,
poster:"image/img27.jpg",
},
{
id: 28,
songName:`Hukha Bar<br>
<div class="subtitle">Kumar sons</div>`,
poster:"image/img28.jpg",
},
{
id: 29,
songName:`Asma ke Chat Pe<br>
<div class="subtitle">Lyrical</div>`,
poster:"image/img29.jpg",
},
{
id: 30,
songName:`8 parche<br>
<div class="subtitle">Baani</div>`,
poster:"image/img30.jpg",
},
{
id: 31,
songName:`Farak<br>
<div class="subtitle">Divine</div>`,
poster:"image/img31.jpg",
},
{
id: 32,
songName:`Banduk Chalegi<br>
<div class="subtitle">Sapna </div>`,
poster:"image/img32.jpg",
},
{
    id: 33,
    songName:`Daku<br>
    <div class="subtitle">Sidu</div>`,
    poster:"image/img33.jpg",
    },

]


Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
     e.getElementsByTagName('img')[0].src = songs[i].poster;
     e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});



//  search me gane kaise ayege uske liye 
  
let search_results = document.getElementsByClassName('search_results')[0];

 songs.forEach(element => {
     const {id, songName, poster } = element;
    //  console.log(id);
    let card =document.createElement('a');
    card.classList.add('card');
    card.href = "#"+id;
    card.innerHTML =`<img src="${poster}" alt="">
    <div class="content">
       
      ${songName}
    </div>  `;

    search_results.appendChild(card);
 });


 let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toLocaleUpperCase();
    let items = search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
       let as= items[index].getElementsByClassName('content')[0];
       let text_value = as.textContent || as.innerHTML;
      
       if (text_value.toLocaleUpperCase().indexOf(input_value)>-1) {

       items[index].style.display = "flex"; 
        
       } else {

        items[index].style.display = "none"; 
        
       }

       if (input.value==0) {
        search_results.style.display="none";
        
       } else {
        
        search_results.style.display="";
       }
        
    }

})


// end


// master play javascript button wokrs for here 

let masterPlay = document.getElementById('masterPlay');

let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
  if(music.paused || music.currentTime <=0){
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove
    ('bi-play-fill');
    masterPlay.classList.add('bi-pause-circle');
   
  }else{
     music.pause();
    wave.classList.remove('active1');

    masterPlay.classList.add
    ('bi-play-fill');
    masterPlay.classList.remove('bi-pause-circle');

  }

});


// ye play karne ki button ke liye hai jo bhi gana bajega usi ke according button show hogi

const makeAllplays =() =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
          
        el.classList.add
        ('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');

    })
 }

//  ye jo bhi gana bajega  vo hover ho jayega 

 const makeAllBackground =() =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background
        =' rgba(1, 46, 50, 0)';
    })
 }



// gana kaon sa bajega uske ke liye javascript 

let index = 0;
let title = document.getElementById('title');

let download_music = document.getElementById('download_music');


let poster_master_play = document.getElementById('poster_master_play');


Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
     e.addEventListener('click',(el)=>{

        index = el.target.id;
        // console.log(index);

        music.src = `audio/song${index}.mp3`;
        poster_master_play.src = `image/img${index}.jpg`;
        music.play();
        masterPlay.classList.remove
        ('bi-play-fill');
        masterPlay.classList.add('bi-pause-circle');

        // download button work
        download_music.href =`audio/song${index}.mp3`;


        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;

            // download button work
            download_music.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background  ="rgba(1, 46, 50, 0.2)";

        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
     });
});




// song ka time batane ke liye 

let currentStart = document.getElementById('currentStart');

let currentEnd = document.getElementById('currentEnd');

let seek = document.getElementById('seek');

let bar2 = document.getElementById
('bar2');

let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr = music.
    currentTime;

    let music_dur = music.duration;

    // ye end time ke liye hai
    
    let min1 = Math.floor(music_dur/60);
    
    let sec1 = Math.floor(music_dur%60);
    
    // console.log(sec1);

    if(sec1 <10){
        sec1=`0${sec1}`;
    }


    currentEnd.innerText = `${min1}: ${sec1}`;



    // ye current time ke liye hai 

    let min2 = Math.floor(music_curr/60);

    let sec2 = Math.floor(music_curr%60);

    if(sec2 <10){
        sec2=`0${sec2}`;
    }


    currentStart.innerText = `${min2}:${sec2}`;



    // volumme ko tej dhima karne ke liye hai 


    let progressBar = parseInt((music_curr/ music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);

    let seekbar = seek.value;

    bar2.style.width =`${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

// ye isliye hai ki agar hame song skip karna ho to vo skip ho jaye .

seek.addEventListener('change',()=>{
  music.currentTime = seek.value*music.duration/100;   
});


// volumme ke liye 

let vol_icon = document.getElementById('vol_icon');

let vol = document.getElementById('vol');

let vol_bar = document.getElementsByClassName('vol_bar')[0];

let vol_dot = document.getElementById('vol_dot');


vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');

        vol_icon.classList.remove('bi-volume-down-fill');

        vol_icon.classList.add('bi-volume-off-fill');

    }

    if(vol.value >0){

        vol_icon.classList.remove('bi-volume-up-fill');

        vol_icon.classList.add('bi-volume-down-fill');

        vol_icon.classList.remove('bi-volume-off-fill');
    }

    if(vol.value> 50){

        vol_icon.classList.add('bi-volume-up-fill');

        vol_icon.classList.remove('bi-volume-down-fill');

        vol_icon.classList.remove('bi-volume-off-fill');

    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}
    %`;

    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a /100;

});




// next music ke liye ke liye


let back = document.getElementById('back');
let next = document.getElementById('next');

// ye ye batata hai ki kitne number of songs hai websitee me 

// index = Array.from(document.getElementsByClassName('songItem')).length;

// console.log(index);
back.addEventListener('click',()=>{
    index -= 1;

    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `audio/song${index}.mp3`;
    poster_master_play.src = `image/img${index}.jpg`;
    music.play();
    masterPlay.classList.remove
    ('bi-play-fill');
    masterPlay.classList.add('bi-pause-circle');


    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background  ="rgba(1, 46, 50, 0.2)";

    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})


// ye next wali button ke liye  hai..

next.addEventListener('click',()=>{
    index ++;


    if(index>  Array.from(document.getElementsByClassName('songItem')).length )
         {
            
            index = 1;

        }
    music.src = `audio/song${index}.mp3`;
    poster_master_play.src = `image/img${index}.jpg`;
    music.play();
    masterPlay.classList.remove
    ('bi-play-fill');
    masterPlay.classList.add('bi-pause-circle');


    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background  ="rgba(1, 46, 50, 0.2)";

    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

});


















let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];



// ye scroll  karne ke liye aise likhte hai .

pop_song_right.addEventListener('click', () =>{
    pop_song.scrollLeft +=250; 
});


pop_song_left.addEventListener('click', () =>{
    pop_song.scrollLeft -=250; 
});



let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];



// ye scroll  karne ke liye aise likhte hai .

pop_art_right.addEventListener('click', () =>{
    item.scrollLeft +=250; 
});


pop_art_left.addEventListener('click', () =>{
    item.scrollLeft -=250; 
});


// next repeat random icon work 



let shuffle =document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
             shuffle.classList.add('bi-arrow-repeat');

             shuffle.classList.remove('bi-music-note-beamed');

             shuffle.classList.remove('bi-shuffle');

             shuffle.innerHTML = 'repeat';

            break;
    
        case "repeat":

        shuffle.classList.remove('bi-arrow-repeat');

        shuffle.classList.remove('bi-music-note-beamed');

        shuffle.classList.add('bi-shuffle');

        shuffle.innerHTML = 'random';
        
        break;

        case "random":

        shuffle.classList.remove('bi-arrow-repeat');

        shuffle.classList.add('bi-music-note-beamed');

        shuffle.classList.remove('bi-shuffle');

        shuffle.innerHTML = 'next';


            break;
    }
});



// gana khatm hote hi dusra gana bajne lagega uske liye hai 



const next_music = () =>{


 
    if (index ==songs.length) {
        index =1;
   } else {
        index++;
   }
   
       music.src = `audio/song${index}.mp3`;
       poster_master_play.src = `image/img${index}.jpg`;
       music.play();
       masterPlay.classList.remove
       ('bi-play-fill');
       masterPlay.classList.add('bi-pause-circle');
   
       // download button work
       download_music.href =`audio/song${index}.mp3`;
   
   
       let songTitles = songs.filter((els)=>{
           return els.id == index;
       });
   
       songTitles.forEach(elss =>{
           let {songName} = elss;
           title.innerHTML = songName;
   
           // download button work
           download_music.setAttribute('download',songName);
       });
   
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background  ="rgba(1, 46, 50, 0.2)";
   
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');


}




const repeat_music = () =>{


    index;
    
       music.src = `audio/song${index}.mp3`;
       poster_master_play.src = `image/img${index}.jpg`;
       music.play();
       masterPlay.classList.remove
       ('bi-play-fill');
       masterPlay.classList.add('bi-pause-circle');
   
       // download button work
       download_music.href =`audio/song${index}.mp3`;
   
   
       let songTitles = songs.filter((els)=>{
           return els.id == index;
       });
   
       songTitles.forEach(elss =>{
           let {songName} = elss;
           title.innerHTML = songName;
   
           // download button work
           download_music.setAttribute('download',songName);
       });
   
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background  ="rgba(1, 46, 50, 0.2)";
   
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');


}





const random_music = () =>{
     
 if (index ==songs.length) {
    index =1;
} else {
    index = Math.floor((Math.random()*songs.length)+ 1);
}
    
    
       music.src = `audio/song${index}.mp3`;
       poster_master_play.src = `image/img${index}.jpg`;
       music.play();
       masterPlay.classList.remove
       ('bi-play-fill');
       masterPlay.classList.add('bi-pause-circle');
   
       // download button work
       download_music.href =`audio/song${index}.mp3`;
   
   
       let songTitles = songs.filter((els)=>{
           return els.id == index;
       });
   
       songTitles.forEach(elss =>{
           let {songName} = elss;
           title.innerHTML = songName;
   
           // download button work
           download_music.setAttribute('download',songName);
       });
   
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background  ="rgba(1, 46, 50, 0.2)";
   
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');


}



//  icon ke change karte hi usi ke accord gana bajega 


music.addEventListener('ended', ()=>{
  
    let b=shuffle.innerHTML;

    switch (b) {
        case 'repeat':
              repeat_music();
            break;
            
         case 'next':
              next_music();
            break;

         case 'random':
              random_music();
            break;
    }


})
