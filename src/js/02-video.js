import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iFrame = document.querySelector('iframe');
const player = new Player(iFrame);

const onPlayVideo = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onPlayVideo, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
