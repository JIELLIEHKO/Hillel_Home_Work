import { Header } from '../components/Header.jsx'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Input/Input.jsx'
import { Button } from '../components/Button/Button.jsx'

const formSchema = Yup.object().shape({
	name: Yup.string().required('Поле не должно быть пустым'),
	phone: Yup.string().required('Поле не должно быть пустым'),
	address: Yup.string().required('Поле не должно быть пустым')
})

export function Order() {
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		defaultValue: {
			name: '',
			phone: '',
			address: ''
		},

		resolver: yupResolver(formSchema)
	})

	const onSubmit = data => {
		console.log(data)
	}

	const handleClickOrder = () => {
		console.log()
	}

	return (
		<>
			<Header />
			<div className='container-order'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h2>Ready to Order? Let's go!</h2>
					<div>
						<label htmlFor='name'>First Name</label>
						<Controller
							control={control}
							name='name'
							render={({ field }) => (
								<Input {...field} type='text' placeholder='' />
							)}
						/>
					</div>

					<div className='order-error'>
						{errors.name && <p>{errors.name.message}</p>}
					</div>

					<div>
						<label htmlFor='phone'>Phone Number</label>
						<Controller
							control={control}
							name='phone'
							render={({ field }) => (
								<Input {...field} type='phone' placeholder='' />
							)}
						/>
					</div>

					<div className='order-error'>
						{errors.phone && <p>{errors.phone.message}</p>}
					</div>

					<div>
						<label htmlFor='address'>Address</label>
						<Controller
							control={control}
							name='address'
							render={({ field }) => (
								<Input {...field} type='text' placeholder='' />
							)}
						/>
					</div>

					<div className='order-error'>
						{errors.address && <p>{errors.address.message}</p>}
					</div>

					<div className='container-checkbox'>
						<label>
							<input type='checkbox' />
							Want to give your order priority?
						</label>
					</div>

					<div className='order-error'>
						{/*{errors.address && <p>{errors.address.message}</p>}*/}
					</div>

					<div className='counter-button'>
						<Button type='submit' onClick={handleClickOrder}>
							Order now for
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}
