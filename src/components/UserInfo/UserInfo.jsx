import { useEffect, useState } from 'react';

import { useAppThemes, useUsersAvatar, useUsersName } from 'hooks';
import { Img, Text, Wrapper } from './UserInfo.styled';
import Modal from 'components/ModalWindow/ModalWindow';
import EditProfileForm from 'components/EditProfileFrorm/EditProfileForm';

const UserInfo = () => {
  const darksAvatar = 'https://i.ibb.co/JcrFKvs/user-dark.png';
  const ligthsAvatar = 'https://i.ibb.co/NWzn0rN/user-light.png';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAvatar, setUserAvatar] = useState(darksAvatar);

  const userName = useUsersName();
  const userAvatarGet = useUsersAvatar();
  const theme = useAppThemes();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const userAvatarDefaultTheme = theme => {
    let defaultAvatar;

    switch (theme) {
      case 'dark':
        defaultAvatar = darksAvatar;
        break;
      case 'light':
        defaultAvatar = ligthsAvatar;
        break;
      default:
        defaultAvatar = darksAvatar;
    }
    return defaultAvatar;
  };

  useEffect(() => {
    const avatar = userAvatarDefaultTheme(theme);

    if (userAvatarGet === 'https://i.ibb.co/7VFWmkN/user2x-min.png') {
      return setUserAvatar(avatar);
    } else {
      return setUserAvatar(userAvatarGet);
    }
  }, [theme, userAvatarGet]);

  return (
    <Wrapper>
      <Text>{userName}</Text>
      <button onClick={openModal}>
        <Img src={userAvatar} alt="user-avatar" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditProfileForm userAvatar={userAvatar} onClose={closeModal} />
      </Modal>
    </Wrapper>
  );
};
export default UserInfo;
