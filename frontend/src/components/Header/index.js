import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { FcGlobe } from 'react-icons/fc';
import { Container, Content, Profile } from './styles';

import logoger from '~/assets/logoger.svg';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logoger} alt="" width="100" height="100" />
          <Link to="/home">HOME</Link>
          <FcGlobe size="30" />
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="avatar"
            />
            <button type="button" onClick={handleSignOut}>
              Exit
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
