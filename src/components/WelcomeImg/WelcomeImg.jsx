import { Img } from './WelcomeImg.styled';
import * as img from '../../assets/images/';

const WelcomeImg = () => {
  return (
    <picture>
      <source
        type="image/webp"
        media="(min-width: 768px)"
        srcSet={`${img.desktopsTabletsWebp} 1x , ${img.desktopsTabletsWebp2x} 2x, `}
        sizes="162px "
      />
      <source
        type="image/webp"
        media="(min-width: 375px)"
        srcSet={` ${img.mobilesWebp} 1x, ${img.mobilesWebp2x} 2x, `}
        sizes="124px "
      />
      <source
        type="image/png"
        media="(min-width: 768px)"
        srcSet={`${img.desktopsTabletsPng} 1x, ${img.desktopsTabletsPng2x} 2x,`}
        sizes="162px,"
      />

      <source
        type="image/png"
        media="(min-width: 375px),"
        srcSet={`${img.mobilesPng} 1x, ${img.mobilesPng2x} 2x,`}
        sizes="124px,"
      />

      <Img src={img.mobilesPng} alt="man with laptop" />
    </picture>
  );
};

export default WelcomeImg;
