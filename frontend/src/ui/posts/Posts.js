import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import {useSelector, useDispatch} from 'react-redux'
import { fetchAllMisquotes } from '../../store/misquote'
import { PostCard } from './PostCard'

export const Posts = () => {

	// subscribe using useSelector to the slice of store you care about
	// get access to dispatch from useDispatch()
 // using React.useEffect dispatch the action
	// map over the slice of state to create necessary components.

	const misquotes = useSelector((state) => state.misquotes ? state.misquotes : [])

	const dispatch = useDispatch()

	const initialSideEffects = () => {
		dispatch(fetchAllMisquotes())
	}

	React.useEffect(initialSideEffects, [dispatch])

	console.log(misquotes)
	return (
		<>
			<main className="my-5">
				<Container fluid="true" className="text-center text-sm-left">

					<Row className=" mb-3">
						<Col>
							<h1>Meow Forum</h1>
						</Col>
					</Row>

					<Row>
						<Col sm={4} >
							<Card bg="shadow-light" className="border-0 rounded-6 col" >
								<Card.Body>
									<Card.Text>
										<Form>
											<Form.Group>
												<InputGroup>
													<FormControl placeholder="Attribution"/>
												</InputGroup>
											</Form.Group>

											<Form.Group>
												<InputGroup>
													<FormControl placeholder="Submitter"/>
												</InputGroup>
											</Form.Group>

											<Form.Group>
												<InputGroup>
													<InputGroup.Prepend>
														<InputGroup.Text>
															<FontAwesomeIcon icon="dog"/>
														</InputGroup.Text>
													</InputGroup.Prepend>
													<FormControl as="textarea" placeholder="Meow Meow Goes Here"/>
													<InputGroup.Append>
														<Button variant="primary" type="submit"> Submit <FontAwesomeIcon
															icon="envelope"/></Button>
													</InputGroup.Append>
												</InputGroup>
											</Form.Group>
										</Form>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<CardColumns className="p-4">
							{misquotes.map((misquote) => <PostCard key={misquote.misquoteId} misquote={misquote}/>)}
					</CardColumns>
					</Row>

				</Container>
			</main>
		</>
	)
};