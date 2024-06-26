import { motion } from 'framer-motion';

import sprite from 'assets/sprite.svg';
import { StyledLogo, StyledWrapper, StyledSpanLogo } from './Logo.styled';

const Logo = () => {
  const animationKey = Date.now();

  return (
    <motion.div
      key={animationKey}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <StyledWrapper>
        <StyledLogo width="32px" height="32px">
          <use href={`${sprite}#logo2`} />
        </StyledLogo>
        <StyledSpanLogo>TaskManager x Weidmann</StyledSpanLogo>
      </StyledWrapper>
    </motion.div>
  );
};

export default Logo;
