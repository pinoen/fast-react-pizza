/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

const UpdateItemQuantity = ({ id, currentQuantity }) => {
  const dispatch = useDispatch()

  return (
    <div className='flex items-center gap-2 md:gap-3'>
      <Button onClick={() => dispatch(decreaseItemQuantity(id))} type='round'>-</Button>

      <span className='text-sm font-medium pt-4'>{currentQuantity}</span>

      <Button onClick={() => dispatch(increaseItemQuantity(id))} type='round'>+</Button>
    </div>
  )
}

export default UpdateItemQuantity