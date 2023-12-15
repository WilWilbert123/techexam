import React, {useRef, useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoUrl =
    'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';

  const thumbnails = ['https://picsum.photos/200/300'];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = value => {
    videoRef.current.seek(value);
  };

  const handleVideoProgress = progress => {
    setCurrentTime(progress.currentTime);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{uri: videoUrl}}
        controls={false}
        paused={!isPlaying}
        onProgress={handleVideoProgress}
        style={styles.backgroundVideo}
      />
      <Image source={{uri: thumbnails[0]}} style={styles.thumbnail} />
      <TouchableOpacity
        style={styles.playPauseButton}
        onPress={handlePlayPause}>
        <Image
          source={isPlaying ? pauseIcon : playIcon}
          style={styles.playPauseIcon}
        />
      </TouchableOpacity>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={videoRef.current ? videoRef.current.duration : 1}
        value={currentTime}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
        onSlidingComplete={handleSliderChange}
      />
    </View>
  );
}

const playIcon = require('../assets/play.jpg');
const pauseIcon = require('../assets/pause.png');

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    position: 'absolute',
  },
  backgroundVideo: {
    width: '100%',
    height: 200,
  },
  playPauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -25}, {translateY: -25}],
  },
  playPauseIcon: {
    width: 50,
    height: 50,
  },
  slider: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
