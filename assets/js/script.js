
        var seekSlide = document.querySelector("#seek-slide");
        var title = document.querySelector("h1");
        var playStatus = false;
        var track = document.createElement('audio');
        var index_no = 0;
        var playBtn = document.querySelector("#btn1");
        
        
        function playPause(){
            if(playStatus == false){
                playSong();
            }else{
                pauseSong();
            }
        }
        function playSong(){
            track.play();
            
            playStatus = true;
            playBtn.innerHTML = '<i class="fa fa-pause"></i>';
        }
        function pauseSong(){
            track.pause();
            playStatus = false;
            playBtn.innerHTML = '<i class="fa fa-play"></i>';
        }
        function next(){
            if(index_no < tracks.length-1){
                index_no+=1;
                loadTrack(index_no);
            playBtn.innerHTML = '<i class="fa fa-pause"></i>';
                track.play();
            }else{
                index_no=0;
                loadTrack(index_no);
                track.play();

            }
        }
        function prev(){
            if(index_no > tracks.length- 3){
                index_no-=1;
                loadTrack(index_no);
                track.play();
            }else{
                index_no=0;
                loadTrack(index_no);
                track.play();

            }
        }
        
        function seekTo(){
        var seek = track.duration * (seekSlide.value/1000) ;
        track.currentTime=seek;
        }
        setInterval(() => {
            seekSlide.value = track.currentTime * (1000/track.duration);
            if(track.currentTime == track.duration){
            pauseSong();
        }
        }, 1000);