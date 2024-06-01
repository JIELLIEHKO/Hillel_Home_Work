import { Header } from '../components/Header.jsx'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Input/Input.jsx'
import { Button } from '../components/Button/Button.jsx'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addOrderId, addOrderInfo } from '../redux/slices/cartSlice.js'

const formSchema = Yup.object().shape({
	name: Yup.string().required('Поле не должно быть пустым'),
	phone: Yup.string().required('Поле не должно быть пустым'),
	address: Yup.string().required('Поле не должно быть пустым')
})

export function Order() {
	const navigate = useNavigate()
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			name: '',
			phone: '',
			address: '',
			priority: false
		},

		resolver: yupResolver(formSchema)
	})

	const dispatch = useDispatch()

	const cartItems = useSelector(store => store.cart.cartItems)

	const onSubmit = async data => {
		if (cartItems.length === 0) {
			alert('Кошик порожній')
			return
		}

		const orderData = {
			address: data.address,
			customer: data.name,
			phone: data.phone,
			priority: data.priority || false,
			position: '',
			cart: cartItems.map(item => ({
				name: item.name,
				pizzaId: item.id,
				quantity: item.qty,
				totalPrice: item.qty * item.unitPrice,
				unitPrice: item.unitPrice
			}))
		}

		try {
			const response = await fetch(
				'https://react-fast-pizza-api.onrender.com/api/order',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(orderData)
				}
			)

			const result = await response.json()
			console.log(orderData)

			if (result.status === 'success') {
				dispatch(addOrderInfo(orderData))
				dispatch(addOrderId({ orderId: result.data.id }))
				console.log(result.data.id)
				navigate(`/order/${result.data.id}`)
			} else {
				alert('Something went wrong')
			}
		} catch (error) {
			alert('Something went wrong')
		}
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
								<Input {...field} type='text' placeholder='' />
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
							<Controller
								name='priority'
								control={control}
								render={({ field }) => (
									<Input
										type='checkbox'
										{...field}
										onChange={e => {
											setValue('priority', e.target.checked)
										}}
									/>
								)}
							/>
							Want to give your order priority?
						</label>
					</div>

					<div className='counter-button'>
						<Button type='submit'>Order now for</Button>
					</div>
				</form>
			</div>
		</>
	)
}
