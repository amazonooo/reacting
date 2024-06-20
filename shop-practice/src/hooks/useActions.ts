import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { cartSlice } from '../components/store/slice'
import { bindActionCreators } from '@reduxjs/toolkit'

const rootActions = {
  ...cartSlice.actions
}

export const useActions = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}