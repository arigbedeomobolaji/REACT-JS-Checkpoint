import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import { Col } from "react-bootstrap";

export default function HeroSection() {
	return (
		<Row>
			<Col className="position-relative my-4">
				<img
					src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1000"
					alt="Hero"
					style={{ height: "70vh", width: "100%" }}
					className=""
				/>
				<div
					className="position-absolute bg-dark top-0 bottom-0 start-0 end-0 w-100 d-flex justify-content-center align-items-center flex-column z-3"
					style={{ opacity: 0.9 }}
				>
					<h1 className="text-white p-3">
						The Best Hotel you can get.
					</h1>
					<Button variant="danger">Read More</Button>
				</div>
			</Col>
		</Row>
	);
}
