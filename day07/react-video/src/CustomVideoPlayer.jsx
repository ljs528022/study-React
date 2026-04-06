import { useRef, useState } from "react";
import "./CustomVideoPlayer.css";

function CustomVideoPlayer() {

    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ currentTime, setCurrentTime] = useState(0);
    const [ duration, setDuration ] = useState(0);
    const [ volume, setVolume ] = useState(1);
    const [ playbackRate, setPlaybackRate ] = useState(1);
    const videoRef = useRef(null);

    const handleTimeUpdate = () => {
        if(!videoRef.current) return;
        setCurrentTime(videoRef.current.currentTime);

        if (videoRef.current.currentTime === videoRef.current.duration) {
            setIsPlaying(false);
        }
    }
    
    const handleLoadedMetadata = () => {
        if(!videoRef.current) return;
        setDuration(videoRef.current.duration);
    }

    const handleRewind = () => {
        if (videoRef.current) {
            videoRef.current.currentTime -= 3;
        }
    }

    const handleForward = () => {
        if (videoRef.current) {
            videoRef.current.currentTime += 3;
        }
    }

    const handleVolumeChange = (e) => {
        const vol = parseFloat(e.target.value);
        setVolume(vol);

        if (videoRef.current) {
            videoRef.current.volume = vol;
        }
    }

    const handleSpeedChange = (e) => {
        const speed = parseFloat(e.target.value);
        setPlaybackRate(speed);

        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
    }

    const handleFullScreen = () => {
        if (videoRef.current) return;
        if(videoRef.current.requestFullscreen()) {
            videoRef.current.requestFullscreen();
        }   
        else if (videoRef.current.mozRequestFullScreen) {  // Firefox
            videoRef.current.mozRequestFullScreen();
        }
        else if (videoRef.current.webkitRequestFullScreen) {   // Chrome, Safari, Opera
            videoRef.current.webkitRequestFullScreen();
        }
        else if (videoRef.current.msRequestFullScreen) {    // IE/Edge
            videoRef.current.msRequestFullScreen();
        }
    }

    const handleProgressClick = (e) => {
        if(!videoRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newTime = (offsetX / rect.width) * duration;

        videoRef.current.currentTime = newTime;

        // const newTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
        // video.currentTime = newTime;
    }

    const togglePlayPause = () => {
        if(!videoRef.current) return;
        if(videoRef.current.paused || videoRef.current.ended) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');

        return `${minutes}:${seconds}`
    }

    return (
    <>
        <h1>🎥 커스텀 비디오 플레이어</h1>
        <div className="video-container">
            <video 
                ref={videoRef} 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                onTimeUpdate={handleTimeUpdate}    
                onLoadedMetadata={handleLoadedMetadata}
            ></video>
            
            <div className="progress" onClick={handleProgressClick}>
                <div 
                    className="progress-filled"
                    style={{
                        width: duration ? `${(currentTime / duration) * 100}%` : "0%"
                    }}
                ></div>
            </div>
            
            <div className="controls">
                <button onClick={handleRewind}>⏪ 3초</button>
                <button onClick={togglePlayPause}>
                    { isPlaying ? '⏸ 일시정지' : '▶ 재생'}
                </button>
                <button onClick={handleForward}>⏩ 3초</button>
                <span>
                    {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                <input type="range" min={0} max={1} step={0.1} value={volume}
                    onChange={handleVolumeChange} />
                <select value={playbackRate} onChange={handleSpeedChange}>
                    <option value={0.5}>0.5x</option>
                    <option value={1}>1x</option>
                    <option value={1.5}>1.5x</option>
                    <option value={2}>2x</option>
                </select>
                <button onClick={handleFullScreen}>⛶ 전체 화면</button>
            </div>
        </div>
    </>
    )
}

export default CustomVideoPlayer;