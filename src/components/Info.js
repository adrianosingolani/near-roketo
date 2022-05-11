import React from 'react';

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ImageList,
  ImageListItem
} from '@mui/material';

import WifiIcon from '@mui/icons-material/Wifi';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LockIcon from '@mui/icons-material/Lock';
import ShowerIcon from '@mui/icons-material/Shower';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';

import FreeDrinksImage from '../assets/freedrinks.jpg';
import InsideSleepStationImage from '../assets/insidesleepstation.jpg';
import lobbyImage from '../assets/lobby.jpg';
import lockersImage from '../assets/lockers.jpg';
import sleepStationDetailImage from '../assets/sleepstationdetail.jpg';
import sleepStationsImage from '../assets/sleepstations.jpg';
import stairsImage from '../assets/stairs.jpg';
import storageImage from '../assets/storage.jpg';


const images = [
  {
    img: lobbyImage,
    title: 'Lobby',
  },
  {
    img: stairsImage,
    title: 'Stairs',
  },
  {
    img: lockersImage,
    title: 'Lockers',
  },
  {
    img: sleepStationsImage,
    title: 'Sleep stations',
  },
  {
    img: sleepStationDetailImage,
    title: 'Sleep station detail',
  },
  {
    img: InsideSleepStationImage,
    title: 'Inside station',
  },
  {
    img: storageImage,
    title: 'Storage inside sleep stations',
  },
  // {
  //   img: chargersImage,
  //   title: 'Phone charges',
  // },
  {
    img: FreeDrinksImage,
    title: 'Free drinks',
  },
];

function Info() {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'row',
      // alignItems: 'center'
    }}>
      <Box style={{
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // backgroundImage: `url('${mainImage}')`,
        // backgroundSize: '100%',
        // backgroundRepeat: 'no-repeat',
        // height: 475,
        // width: 675,
        // paddingTop: 42,
        marginTop: '1em',
        paddingRight: '1em',
        flex: 1
      }}>
        <Typography variant='h5'>Pay per minute bed and all day breakfast</Typography>

        <List style={{ marginTop: 16 }}>
          <ListItem disablePadding>
            <ListItemIcon><ScheduleIcon /></ListItemIcon>
            <ListItemText primary='Open 24/7' />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon><DoNotTouchIcon /></ListItemIcon>
            <ListItemText primary='Contactless check in' />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon><SingleBedIcon /></ListItemIcon>
            <ListItemText primary='Comfortable beds' />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon><WifiIcon /></ListItemIcon>
            <ListItemText primary='Wi-fi' />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon><LockIcon /></ListItemIcon>
            <ListItemText primary='Free locker' />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon><ShowerIcon /></ListItemIcon>
            <ListItemText primary='Shared bathroom' />
          </ListItem>
        </List>
      </Box>

      <ImageList style={{flex: 2}} cols={4} rowHeight={180}>
        {images.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={`${item.img}?w=130&h=86&fit=crop&auto=format`}
              srcSet={`${item.img}?w=130&h=86&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default Info