

import React, { useState} from 'react'
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styled, Avatar, Stack} from "@mui/material";
import TextField from '@mui/material/TextField';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';



const StyledModal = styled(Modal)({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'

})

const UserBox = styled(Box)({
    display:'flex',
    gap: '10px',
    marginLeft: '10px',
    marginTop: '10px',
    marginBottom: '10px',

})



export const Add = () => {

    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip title="Create Post" sx={{position:'fixed', bottom:30,marginLeft:{xs: '0'}, left:{xs: 'calc(50% - 25px)', md:30}}} onClick = {e=>setOpen(true)}>
    <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
    </Tooltip>

    <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor='white' borderRadius={3}>
    <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>

    <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq"
            
          />
          <Typography variant="span" fontWeight={500}>Shubh</Typography>
    </UserBox>
    <div>
    <TextField
          sx={{width:"100%",boxSizing:'border-box',margin:'5px 5px 5px'}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="Make a Post"
          variant="standard"
        />
    </div>
    <Stack direction='row' gap={1} mb={3} ml={1}>
        <EmojiEmotionsIcon color='primary'/>
        <ImageIcon color='secondary'/>
        <AttachFileIcon color='success'/>
    </Stack>
    <ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth mb={2}>
        <Button>Post</Button>
        <Button>Discard</Button>
      </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}
