import { Fragment } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import HeroSection from "./HeroSection";

// Data feed into the various Cards.
const testimnoies = [
	{
		id: 1,
		name: "Alvaro Morata",
		testimony:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, provident?",
		image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 2,
		name: "Selena Sandro",
		testimony:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, provident?",
		image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 3,
		name: "Alexis Banana",
		testimony:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, provident?",
		image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
];

function App() {
	return (
		<Fragment>
			<div
				className="App container-fluid"
				style={{ background: "#f3f3f3", minHeight: "100vh" }}
			>
				{/* Navbar section of the page */}
				<Navbar
					expand="lg"
					className="bg-body-tertiary shadow-sm container py-4"
				>
					<Container fluid>
						<Navbar.Brand href="#">MD</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav
								className="me-auto my-2 my-lg-0"
								style={{ maxHeight: "100px" }}
								navbarScroll
							>
								<Nav.Link href="#action1">Home</Nav.Link>
								<Nav.Link href="#action2">About</Nav.Link>
								<NavDropdown
									title="Link"
									id="navbarScrollingDropdown"
								>
									<NavDropdown.Item href="#action3">
										Action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Items
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">
										Contact
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href="#" disabled>
									Testimonies
								</Nav.Link>
							</Nav>
							<Form className="d-flex">
								<Form.Control
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
								<Button variant="outline-success">
									Search
								</Button>
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				{/* Hero Section and Testimnoies */}
				<Container>
					{/* Hero Section - just added an Hero Section to the page
            It contains an Hero Image and a Headin and button Tag
           */}
					<HeroSection />
					{/* 
          Testimony Section
          This section contains a Heading and three (3) react-bootstrap Card Component 
          */}
					<Row className="mb-4">
						<h1 className="py-3">Our Clients FeedBack</h1>
						{testimnoies.map(({ name, image, testimony, id }) => (
							<Col key={id} className="mb-3">
								<Card style={{ width: "18rem" }}>
									<Card.Img
										style={{
											height: "12rem",
											objectFit: "cover",
										}}
										variant="top"
										src={image}
									/>
									<Card.Body>
										<Card.Title>{name}</Card.Title>
										<Card.Text
											style={{
												fontStyle: "italic",
												color: "rgba(0,0,0,.5)",
											}}
										>
											{testimony}
										</Card.Text>
										<Button variant="danger">
											Read Full
										</Button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
					{/* React-Bootstrap Form to collect User feedback */}
					<Row>
						<h1>Give us a Feedback</h1>
						<Form>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlInput1"
							>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="name@example.com"
								/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Label>Your Feedback</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
							<div className="d-grid pb-5">
								<Button variant="danger" size="lg">
									Submit
								</Button>
							</div>
						</Form>
					</Row>
				</Container>
			</div>
		</Fragment>
	);
}

//  navbar, a heading, and 3 cards

export default App;
