import { FC } from 'react'
import Layout from '../../ui/layout/Layout'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useActions } from '../../../hooks/useActions'

const Cart: FC = () => {
  const {items} = useTypedSelector(state => state.cart)

  const {removeFromCart} = useActions()

  return <Layout title='Cart'>Cart</Layout>
}

export default Cart