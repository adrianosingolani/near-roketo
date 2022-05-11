import React, { useEffect, useState } from 'react';
import getNearEnv from '../nearEnv';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import Big from 'big.js';
import moment from 'moment';

import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';

import sleepStationImage from '../assets/sleepstation.jpg';
import relaxationImage from '../assets/relaxation.jpg';
import restaurantImage from '../assets/restaurant.jpg';

const nearEnv = getNearEnv('testnet');

function Rooms() {
  const [disableButtons, setDisableButtons] = useState(true);
  const [outgoingStreams, setOutgoingStreams] = useState([]);

  useEffect(() => {
    if (window.accountId) setDisableButtons(false);
    else setDisableButtons(true);

    getAccountOutgoingStreams();
  }, []);

  const checkBooking = (room) => {
    // if (outgoingStreams.length > 0) {
    //   outgoingStreams.map(stream => {

    //     if (stream.description) {
    //       console.log(JSON.parse(stream.description));

    //       // if (stream.description.room === room) return true;
    //       // else return false;
    //     }
    //   })
    // }

    return false;
  }
  

  const createStream = (settings) => {
    const pricePerHour = parseNearAmount(settings.price.toString());
    const pricePerMinute = Big(pricePerHour).div(60).toFixed(0);
    const pricePerSecond = Big(pricePerHour).div(3600).toFixed(0);


    const amountToPay = Big(pricePerMinute).times(settings.minutes).toFixed(0);

    const args = {
      receiver_id: nearEnv.roketoAccount,
      amount: amountToPay,
      memo: 'memo',
      msg: JSON.stringify({
        Create: {
          request: {
            owner_id: window.accountId,
            receiver_id: nearEnv.dappAccount,
            tokens_per_sec: parseInt(pricePerSecond),
            description: JSON.stringify(settings)
          },
        },
      })
    }

    // console.log(settings);

    window.wrapContract.ft_transfer_call(
      args,
      300000000000000,
      1
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const nearDeposit = () => {
    // console.log('nearDeposit');

    window.wrapContract.near_deposit(
      {},
      300000000000000,
      1
    )
  }

  const getAccountIncomingStreams = () => {
    window.roketoContract.get_account_incoming_streams({
      account_id: nearEnv.dappAccount,
      from: 0,
      limit: 10,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const getAccountOutgoingStreams = () => {
    window.roketoContract.get_account_outgoing_streams({
      account_id: window.accountId,
      from: 0,
      limit: 10,
    })
      .then(res => {
        // console.log(res);

        setOutgoingStreams(res);
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <Box>
      <Box style={{ display: 'flex', marginBottom: '1em' }}>
        <Card style={{ marginRight: '1em', flex: 1 }}>
          <CardMedia
            component='img'
            height='300'
            image={sleepStationImage}
            alt='Sleep station'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Sleep station
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Absolute silence station with comfortable bed and pillow under artificial twinkling stars and live plants.
            </Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              <ul style={{ paddingInlineStart: '1em' }}>
                <li>2 NEAR per hour</li>
                <li>Minimum of 15 minutes</li>
                <li>5 spaces left</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
          <Button 
              size='small' 
              variant='contained'
              onClick={() => createStream({
                room: 'sleepstation',
                price: 2,
                minutes: 15
              })}
              // disabled={() => {return false}}
            >
              Book
            </Button>
          </CardActions>
        </Card>

        <Card style={{ marginRight: '1em', flex: 1 }}>
          <CardMedia
            component='img'
            height='300'
            image={relaxationImage}
            alt='Relaxation room'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Relaxation room
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Casual relaxation space filled with cozy moon pods and yoga mats for meditation classes.
            </Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              <ul style={{ paddingInlineStart: '1em' }}>
                <li>1 NEAR per hour</li>
                <li>Minimum of 15 minutes</li>
                <li>5 spaces left</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
              size='small' 
              variant='contained'
              onClick={() => createStream({
                room: 'relaxation',
                price: 1,
                minutes: 15
              })}
              // disabled={() => {checkBooking('relaxation')}}
            >
              Book
            </Button>
          </CardActions>
        </Card>

        <Card style={{ flex: 1 }}>
          <CardMedia
            component='img'
            height='300'
            image={restaurantImage}
            alt='Restaurant'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Restaurant
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              All you can eat restaurant serving healthy meals, juices, coffee and tea.
            </Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              <ul style={{ paddingInlineStart: '1em' }}>
                <li>3 NEAR per hour</li>
                <li>Minimum of 30 minutes</li>
                <li>5 spaces left</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size='small'
              variant='contained'
              onClick={() => createStream({
                room: 'restaurant',
                price: 3,
                minutes: 30
              })}
              // disabled={() => checkBooking('restaurant')}
            >Book</Button>
          </CardActions>
        </Card>
      </Box>

      {/* <Box style={{ marginBottom: '1em' }}>
        <Button disabled={disableButtons} variant='contained' onClick={() => nearDeposit()}>{`Wrap (1 NEAR -> 1 wNEAR)`}</Button>
        <Button disabled={disableButtons} variant='contained' onClick={() => createStream()}>Create stream</Button>
        <Button disabled={disableButtons} variant='contained' onClick={() => getAccountIncomingStreams()}>Get incoming streams (dApp)</Button>
        <Button disabled={disableButtons} variant='contained' onClick={() => getAccountOutgoingStreams()}>Get outgoing streams (User)</Button>
      </Box> */}
    </Box>
  )
}

export default Rooms;