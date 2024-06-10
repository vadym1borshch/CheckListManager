import { Box } from '@mui/material'
import { FC } from 'react'
import { Header } from '../Header/Header'
import { AddItemsBar } from '../AddItemBar/AddItemsBar'
import { Footer } from '../Footer/Footer'
import { ListContent } from './ListContent'

interface IChecklistManagerProps {}

export const CheckListManager: FC<IChecklistManagerProps> = () => {
  return (
    <Box sx={{ zIndex: 0, '& button': { minWidth: 0 } }}>
      <Header sx={{ backgroundColor: '#f3a125' }} />
      <AddItemsBar />
      <ListContent />
      <Footer />
    </Box>
  )
}
