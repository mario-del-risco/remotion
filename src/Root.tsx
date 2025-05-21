// src/Root.tsx or src/Video.tsx
import {Composition} from 'remotion';
import {InstaStory} from './InstaStory';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="InstaStory"
      component={InstaStory}
      durationInFrames={150} // 5 seconds at 30fps
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
