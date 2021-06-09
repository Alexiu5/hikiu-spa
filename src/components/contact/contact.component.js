import Icon from '../icons/Icon';
import './styles.scss';
import lang from './es';
import ReactHtmlParser from 'html-react-parser';
import Figure from '../philosophy/figures/figure';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { contactUs } from './api';
import { useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';

const Contact = () => {
	const formInitialValues = {
		name: '',
		email: '',
		phone: '',
		city: '',
		policy: false
	};

	const formValidationSchema = Yup.object().shape({
		name: Yup.string().required(lang.contact.form.errors.fieldRequired),
		email: Yup.string().email(lang.contact.form.errors.invalidEmail).required(lang.contact.form.errors.fieldRequired),
		phone: Yup.string().required(lang.contact.form.errors.fieldRequired),
		city: Yup.string().required(lang.contact.form.errors.fieldRequired),
		policy: Yup.bool().oneOf([true], lang.contact.form.errors.hasAcceptPolicy)
	});

	const [loading, setLoading] = useState(false);
	const [openSnackbar] = useSnackbar();

	const send = async (values) => {
		try {
			setLoading(true);
			const response = await contactUs(values);
			openSnackbar(response.message);
		} catch (err) {
			console.log(err);
			openSnackbar(err.errorMessage);
		}
		setLoading(false);
	};

	return (
		<section className="contact-container" id="contacto">
			<Figure customclass="shadow-circle" />
			<div className="content">
				<div className="circle">
					<Icon iconName="red_dots" />
				</div>
				<div className="container-body" data-aos="zoom-out" data-aos-duration="1000">
					<div className="text-complete">
						<div className="text-complete-firts">
							{ReactHtmlParser(
								lang.contact.team.mentes_creativas
							)}
						</div>
						<span>
							{' '}
							{ReactHtmlParser(lang.contact.permitenos)}{' '}
						</span>
					</div>
				</div>
			</div>

			<div className="inside-circle">
				<Formik initialValues={formInitialValues} onSubmit={send} validationSchema={formValidationSchema}>
					{
						props => (
							<form className="contact-form" onSubmit={props.handleSubmit}>
								<h2>{lang.contact.form.title}</h2>
								<div className="grid-form">
									<div className="form-section">
										<label htmlFor="nombre">
											{lang.contact.form.name}
										</label>
										<input type="text" name="name" value={props.values.name} onChange={props.handleChange} onBlur={props.handleBlur} id="nombre" />
										{
											props.touched.name && props.errors.name ? (
												<div className="error">
													<span>{props.errors.name}</span>
												</div>
											) : null
										}
										<label htmlFor="tel">
											{lang.contact.form.phone}
										</label>
										<input type="text" name="phone" value={props.values.phone} onChange={props.handleChange} onBlur={props.handleBlur} id="tel" />
										{
											props.touched.phone && props.errors.phone ? (
												<div className="error">
													<span>{props.errors.phone}</span>
												</div>
											) : null
										}
									</div>

									<div className="form-section">
										<label htmlFor="email">
											{lang.contact.form.mail}
										</label>
										<input type="email" name="email" value={props.values.email} onChange={props.handleChange} onBlur={props.handleBlur} id="email" />
										{
											props.touched.email && props.errors.email ? (
												<div className="error">
													<span>{props.errors.email}</span>
												</div>
											) : null
										}
										<label htmlFor="ciudad">
											{lang.contact.form.city}
										</label>
										<input type="text" name="city" value={props.values.city} onChange={props.handleChange} onBlur={props.handleBlur} id="ciudad" />

										{
											props.touched.city && props.errors.city ? (
												<div className="error">
													<span>{props.errors.city}</span>
												</div>
											) : null
										}
									</div>
								</div>

								<div className="check-style">
									<input type="checkbox" name="policy" value={props.values.policy} onChange={props.handleChange} onBlur={props.handleBlur} id="acepto" />
									<label htmlFor="acepto">
										{lang.contact.form.policy}
									</label>
								</div>
								{
									props.errors.policy && props.touched.policy ? (
										<div className="error policy">
											<span>{props.errors.policy}</span>
										</div>
									) : null
								}

								<div className="submit-style">
									<input type="submit" disabled={!props.isValid || props.isSubmitting} value={loading ? '' : 'Enviar Mensaje'} />
									{
										loading ? (<div className="loading-container"><i class="loader"></i></div>) : null
									}
								</div>

								<div className="style-icons">
									<a href="https://www.facebook.com/Hikiulab-104223418379717" target="_blank">
										<i class="fab fa-facebook-f"></i>
									</a>
									<a href="https://www.instagram.com/hikiulab/?hl=es-la" target="_blank">
										<i class="fab fa-instagram"></i>
									</a>
								</div>
							</form>
						)
					}
				</Formik>
			</div>
		</section>
	);
};

export default Contact;
