import React, { useState, useEffect } from 'react'

import {
  Typography,
  Box,
  Card,
  CardMedia,
} from '@mui/material'

import { nfts } from '../utils/nfts';

function Collection() {
  const [tokens, setTokens] = useState([])

  // useEffect(() => {
  //   console.log(tokens);
  //   console.log(tokens.some((t) => t.metadata.title === 'Lion'));
  // }, [tokens])

  useEffect(() => {
    getTokens()
  }, [])

  const getTokens = async () => {
    window.contract.nft_tokens_for_owner({
      account_id: window.accountId,
    })
      .then(res => {
        setTokens(res);
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <>
      <Typography variant='h4' sx={{marginBottom: 2}}>Collection</Typography>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant='overline'>Amphibians</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            nfts.filter(nft => (nft.class === 'amphibians')).map((amphibian, i) => (
              <Card sx={{ width: '250px', padding: 1, border: '2px solid #777', marginRight: 2, marginBottom: 2 }} key={`amphibian_${i}`}>
                <CardMedia
                  component="img"
                  image={`https://adrianosingolani.github.io/near-zoo-nft/assets/${amphibian.title}.jpg`}
                  alt={amphibian.title}
                  sx={
                    tokens.some((t) => t.metadata.title === amphibian.title) ? null : { filter: 'grayscale(100%)', opacity: 0.35 }
                  }
                />
              </Card>
            ))
          }
        </Box>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant='overline'>Birds</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            nfts.filter(nft => (nft.class === 'birds')).map((bird, i) => (
              <Card sx={{ width: '250px', padding: 1, border: '2px solid #777', marginRight: 2, marginBottom: 2 }} key={`bird_${i}`}>
                <CardMedia
                  component="img"
                  image={`https://adrianosingolani.github.io/near-zoo-nft/assets/${bird.title}.jpg`}
                  alt={bird.title}
                  sx={
                    tokens.some((t) => t.metadata.title === bird.title) ? null : { filter: 'grayscale(100%)', opacity: 0.35 }
                  }
                />
              </Card>
            ))
          }
        </Box>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant='overline'>Mammals</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            nfts.filter(nft => (nft.class === 'mammals')).map((mammal, i) => (
              <Card sx={{ width: '250px', padding: 1, border: '2px solid #777', marginRight: 2, marginBottom: 2 }} key={`mammal_${i}`}>
                <CardMedia
                  component="img"
                  image={`https://adrianosingolani.github.io/near-zoo-nft/assets/${mammal.title}.jpg`}
                  alt={mammal.title}
                  sx={
                    tokens.some((t) => t.metadata.title === mammal.title) ? null : { filter: 'grayscale(100%)', opacity: 0.35 }
                  }
                />
              </Card>
            ))
          }
        </Box>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant='overline'>Reptiles</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            nfts.filter(nft => (nft.class === 'reptiles')).map((reptile, i) => (
              <Card sx={{ width: '250px', padding: 1, border: '2px solid #777', marginRight: 2, marginBottom: 2 }} key={`reptile_${i}`}>
                <CardMedia
                  component="img"
                  image={`https://adrianosingolani.github.io/near-zoo-nft/assets/${reptile.title}.jpg`}
                  alt={reptile.title}
                  sx={
                    tokens.some((t) => t.metadata.title === reptile.title) ? null : { filter: 'grayscale(100%)', opacity: 0.35 }
                  }
                />
              </Card>
            ))
          }
        </Box>
      </Box>
    </>
  )
}

export default Collection