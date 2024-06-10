import { SxProps, Theme } from '@mui/material'

export const mainContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
  height: 'calc(100vh - 250px)',
  backgroundColor: '#573d28',
  zIndex: 2,
  alignItems: 'center',
}
export const listContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  flexWrap: 'wrap',
  alignItems: 'start',
  justifyContent: 'center',
  overflow: 'auto',
  "&::-webkit-scrollbar":{
    backgroundColor: 'transparent',
    width: '3px',
  },
  "&::-webkit-scrollbar-thumb":{
    backgroundColor: 'gray',
    borderRadius:"3px"
  }
}
export const listItemContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 0 10px 0',
  '& .MuiCheckbox-root': {
    color: '#fff',
  },
}
export const deleteItemButtonStyle: SxProps<Theme> = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'red',
  },
  '& svg': {
    color: 'red',
    '&:hover': {
      color: 'white',
    },
  },
}

export const selectBlockContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '50%',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  paddingBottom: '30px',
  position: 'relative',
}
export const clearListButtonStyle: SxProps<Theme> = {
  backgroundColor: 'aqua',
  height: '30px',
  borderRadius: '20px',
  margin: '5px 0',
  '&:hover': {
    backgroundColor: '#f22d3d',
  },
}
