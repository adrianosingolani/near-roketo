import React, { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Typography,
} from '@mui/material';

import { nfts } from '../utils/nfts';

const BN = require("bn.js")

function Mint() {
  const account = window.walletConnection.account();

  const mintNFT = async () => {
    const index = Math.floor(Math.random() * nfts.length);

    const { title, description } = nfts[index];

    const params = {
      token_id: `${window.accountId}-${title}-${Date.now()}`,
      metadata: {
        title: title,
        description: description,
        media: `https://adrianosingolani.github.io/near-zoo-nft/assets/${title}.jpg`,
      },
      receiver_id: window.accountId,
    }

    await window.contract.nft_mint(
      params,
      300000000000000,
      new BN("1000000000000000000000000")
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginY: 12 }}>
      <Typography variant='h6' align='center'>Collect NFTs to help the Kharkiv Zoo</Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={() => mintNFT()}
          disabled={account.accountId ? false : true}
          variant='contained'
          sx={{margin: 6}}
        >
          Mint NFT
        </Button>
      </Box>
    </Box>
  )
}

export default Mint