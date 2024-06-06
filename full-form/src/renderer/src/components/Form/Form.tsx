import { FC } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import FormBody from '../FormBody/FormBody';
import Header from '../Header/Header';
// import { IFields } from './interface';

const Form: FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset
  // } = useForm<IFields>({
  //   mode: 'onChange'
  // })

  // const navigate = useNavigate();

  // const handleSubmit = () => {
  //   navigate('/home');
  // }

  return (
    <>
      <Header />
      <FormBody />
    </>
  )
}

export default Form;
