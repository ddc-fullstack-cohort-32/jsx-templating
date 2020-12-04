import Card from 'react-bootstrap/Card'
import React from 'react'

export function PostCard(props) {
	const {misquote} = props
	return(
		<>
			<Card className="card text-center">
				<div className="card-body">
					<Card.Title>{misquote.misquoteAttribution}</Card.Title>
					<Card.Text >
						{misquote.misquoteContent}
						<p><small className="text-muted">{misquote.misquoteSubmitter}</small></p>
					</Card.Text>
				</div>
			</Card>
			</>
	)
}