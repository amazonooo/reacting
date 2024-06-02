import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IShippingFields } from '../../app.interface';

const ShippingForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IShippingFields>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IShippingFields> = data => {
    console.log(data)
    reset()
  }

  return (
		<div>
			<h1 style={{textAlign: 'center'}}>Sign Up</h1>
			<form onSubmit={handleSubmit(onSubmit)} style={{ margin: '0 auto' }}>
				<div>
					<input
						{...register('name', {
							required: 'Name is require field!',
						})}
						placeholder='name'
					/>
					{errors?.name && (
						<div style={{ color: 'red' }}> {errors.name.message}</div>
					)}
				</div>

				<div>
					<input
						{...register('email', {
							required: 'Email is require field!',
							pattern: {
								value:
									/^(([^<>()[\s\S])|(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b))$/,
								message: 'Please enter valid email!',
							},
						})}
						placeholder='email'
					/>
					{errors?.email && (
						<div style={{ color: 'red' }}> {errors.email.message}</div>
					)}
				</div>

        <button>Send</button>
			</form>
		</div>
	)
}
 
export default ShippingForm;