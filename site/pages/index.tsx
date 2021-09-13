import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useStyles } from '../styles/stylesForPages/Home.style';
import { Container, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import StarIcon from '@material-ui/icons/Star';
import Box from '@material-ui/core/Box';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Link from 'next/link';

const title = [
  { title: 'Мой аккаунт', icon: <AccountCircleIcon />, href: '/Account' },
  { title: 'Новости', icon: <AccountCircleIcon />, href: '/News' },
  { title: 'Друзья', icon: <AccessibilityIcon />, href: '/Friends' },
  { title: 'Фотографии', icon: <PhotoCameraIcon />, href: '/Photo' },
  { title: 'Закладки', icon: <StarIcon />, href: '/Favorite' },
];

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box>
        {title.map((element) => (
          <Link href={element.href} key={element.title}>
            <a className="textDecoration">
              <MenuItem>
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center">
                    {element.icon}
                  </Box>
                  <Box margin="0 10px">{element.title}</Box>
                </Box>
              </MenuItem>
            </a>
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
