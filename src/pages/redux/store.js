import { configureStore } from '@reduxjs/toolkit'
import TypeHomeSlice from './slice/typehome.slice'

export default configureStore({
  reducer: {
    typelink: TypeHomeSlice ,
  },
})