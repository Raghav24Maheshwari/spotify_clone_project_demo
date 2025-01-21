import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Fab } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { changeLoader } from "../../../../redux/reducers/loader";
import globalRequest from "../../../../prototype/globalRequest";
import { API_ROUTES } from "../../../../common/Enum";
import { setSnackbar } from "../../../../redux/reducers/snackbar";

const MusicCards = () => {
  const audioRef = useRef(null);
  const [currentAudioUrl, setCurrentAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();


  const [musicData, setMusicData] = useState([]);
//audio/Saudebaazi_128-(PagalWorld).mp3
  const handlePlayPause = (audioUrl) => {
    if (currentAudioUrl !== audioUrl) {
      // Set the new audio source
      setCurrentAudioUrl(audioUrl);
      audioRef.current.src = audioUrl;

      // Wait for the audio to load before playing
      audioRef.current.load();
      audioRef.current.oncanplay = () => {
        audioRef.current.play();
        setIsPlaying(true);
      };
    } else {
      // Toggle play/pause for the same audio
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  const getMusic = async () => {
      dispatch(changeLoader(true));
      try {
        const res = await globalRequest(
          API_ROUTES?.GET_MUSIC,
          "get",
          {},
          {},
          false
        );
        if (res?.message === "Success") {
          const updatedMusicData = res?.data.map((music) => ({
            ...music,
            audioUrl: `http://localhost:8080${music.audioUrl}`, // Prepend the server URL
          }));
          setMusicData(updatedMusicData);
            console.log(res,"1234567890")
        }
      } catch (err) {
        console.error("error", err);
        dispatch(
          setSnackbar({
            isOpen: true,
            message: err?.response?.data?.message,
            state: "error",
          })
        );
      } finally {
        dispatch(changeLoader(false));
      }
    
  };
  useEffect(()=>{
    getMusic();
  },[])
console.log(musicData[0]?.audioUrl,"4444")
  const handleVolumeChange = (index, newValue) => {
    const newVolume = Array.isArray(newValue) ? newValue[0] : newValue;
    const updatedMusicData = [...musicData];
    updatedMusicData[index].volume = newVolume;
    setMusicData(updatedMusicData);

    if (
      audioRef.current &&
      currentAudioUrl === updatedMusicData[index].audioUrl
    ) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const handleProgressChange = (index, newValue) => {
    const newProgress = Array.isArray(newValue) ? newValue[0] : newValue;
    const updatedMusicData = [...musicData];
    updatedMusicData[index].progress = newProgress;
    setMusicData(updatedMusicData);

    if (
      audioRef.current &&
      currentAudioUrl === updatedMusicData[index].audioUrl
    ) {
      audioRef.current.currentTime =
        (audioRef.current.duration * newProgress) / 100;
    }
  };

  const updateProgress = () => {
    if (audioRef.current && audioRef.current.duration > 0) {
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100 || 0;

      const updatedMusicData = musicData.map((music) => {
        if (music.audioUrl === currentAudioUrl) {
          return { ...music, progress: currentProgress };
        }
        return music;
      });

      setMusicData(updatedMusicData);
    }
  };

  const handleClick = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    const interval = setInterval(updateProgress, 1000); // Update every 1 second
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [musicData, currentAudioUrl]);

  return (
    <Box className="main-container pl-[240px] md:pl-0 pt-[60px]">
      <Box className="py-6 px-8 md:px-4">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "flex-start",
          }}
        >
          {musicData?.map((music, index) => (
            <Card sx={{ display: "flex", alignItems: "center" }} key={index}>
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {music.songName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {music.artistName}
                  </Typography>
                </CardContent>
                <Box sx={{ px: 2 }}>
                  <Slider
                    value={music.progress}
                    onChange={(e, value) => handleProgressChange(index, value)}
                    aria-label="progress"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    pb: 1,
                  }}
                >
                  <Fab
                    onClick={handleClick}
                    aria-label="like"
                    color={liked ? "secondary" : "default"} 
                  >
                    <FavoriteIcon />
                  </Fab>
                  <IconButton
                    aria-label="play/pause"
                    onClick={() => handlePlayPause(music.audioUrl)}
                  >
                    {isPlaying && currentAudioUrl === music.audioUrl ? (
                      <PauseIcon sx={{ height: 38, width: 38 }} />
                    ) : (
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    )}
                  </IconButton>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      ml: 2,
                    }}
                  >
                    <VolumeUpIcon />
                    <Slider
                      value={music.volume}
                      onChange={(e, value) => handleVolumeChange(index, value)}
                      aria-label="volume"
                      sx={{ width: 100, ml: 1 }}
                    />
                  </Box>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={music.imageUrl ? music.imageUrl:"images/no-image-available-icon.jpg" }
                alt={`${music.title} album cover`}
              />
            </Card>
          ))}
        </Box>
        <audio
          ref={audioRef}
          src={currentAudioUrl}
          onTimeUpdate={updateProgress}
          onEnded={() => setIsPlaying(false)}
        />
      </Box>
    </Box>
  );
};

export default MusicCards;
