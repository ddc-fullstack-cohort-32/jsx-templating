import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

export const PostCard = (props) => {
	const {misquote} = props
	return(
		<>
			<Card className="card text-center">
				<div className="card-body">
					<Card.Title>{misquote.misquoteAttribution}</Card.Title>
					<Card.Body >
						{misquote.misquoteContent}
					</Card.Body>
					<Card.Footer>
						Author: {misquote.misquoteSubmitter}
					</Card.Footer>
				</div>
			</Card>
		</>
	)
}