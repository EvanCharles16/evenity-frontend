import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import jwt from "jwt-decode";

// const url = `${process.env.REACT_APP_API_URL}`;

const EditPassword = () => {
	const URL = `https://api.indrakawasan.com/`;
	const token = localStorage.getItem("access-token");
	const history = useHistory();
	const jwtdecode = jwt(token);
	const userProfile = jwtdecode.id;
	const [data, setData] = useState({});
	useEffect(() => {
		const URL = `https://api.indrakawasan.com/user/show/${userProfile}`;
		axios
			.get(URL)
			.then((res) => {
				setData(res.data);
				// console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	const [password , setPassword] = useState("")
	const [newPassword , setNewPassword] = useState("")

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		if(data.password !== password){
			window.alert("Your Current Password is Wrong.")
		}else{
			axios
			.put(`https://api.indrakawasan.com/user/editPassword`, {
				body:{
					newPassword
				},
				headers: {
					"access-token": localStorage.getItem("access-token"),
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res);
				alert("Your password already changed");
			})
			.catch((err) => {
				console.log(err);
			});
		}
	};

	const [passwordShown1, setPasswordShown1] = useState(false);
	const togglePasswordVisibility1 = () => {
		setPasswordShown1(passwordShown1 ? false : true);
	};

	const [passwordShown2, setPasswordShown2] = useState(false);
	const togglePasswordVisibility2 = () => {
		setPasswordShown2(passwordShown2 ? false : true);
	};
	return (
		<div>
			<Row className="mt-5 mb-5 ">
				<Col md={{ offset: 2, span: 8 }}>
					<Card className="mx-auto mb-5 mt-5 cardPass" style={{ width: "36rem" }}>
						<Row>
							<Col md={4}>
								<Card.Img
									className="mt-5 ml-4 pt-4"
									src={`${URL}${data.imageUrl}`}
									alt="profile picture"
									style={{ width: "10rem" }}
								/>
							</Col>
							<Col md={8}>
								<Card.Body>
									<Form onSubmit={handleSubmit(onSubmit)}>
										<Form.Group controlId="formBasicPassword">
											<Form.Label>Current Password</Form.Label>
											<div className="input-group-prepend mainPrependPassword">
												<Form.Control
													type={passwordShown1 ? "text" : "password"}
													placeholder="Current Password"
													name="password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													ref={register({ required: true })}
												/>
												<div className="input-group-text passwordPrepend">
													<i
														className="fa fa-eye password-icon"
														onClick={togglePasswordVisibility1}
													></i>
												</div>
											</div>
										</Form.Group>

										<Form.Group controlId="formBasicPassword">
											<Form.Label>New Password</Form.Label>
											<div className="input-group-prepend mainPrependPassword">
												<Form.Control
													type={passwordShown2 ? "text" : "password"}
													placeholder="New Password"
													name="newPassword"
													value={newPassword}
													onChange={(e) => setNewPassword(e.target.value)}
													ref={register({ required: true })}
												/>
												<div className="input-group-text passwordPrepend">
													<i
														className="fa fa-eye password-icon"
														onClick={togglePasswordVisibility2}
													></i>
												</div>
											</div>
										</Form.Group>
									</Form>
									<Button
										type="submit"
										variant="outline-danger"
										className="buttonProfile "
										block
									>
										Save
									</Button>
								</Card.Body>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default EditPassword;
