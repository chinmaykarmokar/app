import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import { FaGithub } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

class App extends React.Component{

	componentDidMount(){
	    document.title = "Chinmay Karmokar"
	}

	render(){
		return(
			<div className="App" style={{backgroundColor:"#cce6ff"}}>
				<Navbar fixed="top" className="justify-content-center" style={{backgroundColor:"#002b80"}}>
				    <Navbar style={{color:"#fff",textAlign:"center",fontFamily:"Cookie",fontSize:"25px"}}>chinmaykarmokar.github.io</Navbar>
				</Navbar>

				<br/>
				<br/>

				<Jumbotron fluid style={{textAlign:"center",backgroundColor:"#6699ff",color:"#fff",fontFamily:"Acme"}}>
					<Container>
						<hr style={{height:"3px",borderWidth:5,backgroundColor:"rgba(0,60,179,0.3)"}}/>
				    		<h1 style={{padding:"10px"}}>Hi! I am Chinmay</h1>
				    		<p style={{padding:"10px"}}>Scroll Down</p>
				    	<hr style={{height:"3px",borderWidth:5,backgroundColor:"rgba(0,60,179,0.3)"}}/>
				  	</Container>
				</Jumbotron>

				<Jumbotron fluid style={{textAlign:"center",backgroundColor:"#66b3ff",marginTop:"-35px"}}>
					<Container>
						<ResponsiveEmbed aspectRatio="16by9">
						    <Image src = {require('./desk.png')} style={{border:"3px solid rgba(0,0,0,0.3)"}}/>
						</ResponsiveEmbed>
							<h3 style={{padding:"15px",fontFamily:"Niconne",color:"#fff"}}>“Creativity is just connecting things.”</h3>
							<p style={{fontFamily:"Acme",color:"#fff",padding:"15px"}}>-Steve Jobs</p>
				  	</Container>
				</Jumbotron>

				<Jumbotron style={{backgroundColor:"#99ccff",marginTop:"-75px"}}>
					<Container>
						<Row>
							<Col sm={4}>
								<Card style={{ width:"auto",marginTop:"10px",borderRadius:"20px",border:"none",boxShadow:"0px 0px 10px rgba(0,0,0,0.2)",textAlign:"center"}}>
								  	<Card.Img variant="top" src={require("./prof.png")} style={{borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}/>
								  		<Card.Body>
								    		<Card.Title style={{fontFamily:"Acme"}}>About</Card.Title>
								    		<Card.Text>
								      			<FaMapMarkerAlt className="d-inline float"/>
								      			<p className="d-inline" style={{padding:"10px",fontFamily:"Ubuntu"}}>Mumbai, Maharashtra</p>
								      			<br/>
								      			<FaEnvelope className="d-inline float"/>
								      			<p className="d-inline" style={{padding:"10px",fontFamily:"Ubuntu"}}>chinmaykarmokar@gmail.com</p>
								    		</Card.Text>
								    			<Button variant="primary"><a href="http://chinmaykarmokar@gmail.com" target="_blank" style={{color:"#fff",fontFamily:"Ubuntu"}}>Contact Me</a></Button>
								  		</Card.Body>
								</Card>
							</Col>

							<Col sm={1}></Col>

							<br/>

							<Col sm={7}>
								<h3 style={{fontFamily:"Acme",padding:"30px"}}>Self</h3>
									<hr/>
								<h5 style={{fontFamily:"Ubuntu",padding:"30px"}}>
									I am a first year electrical engineering student who has a lot of interest in programming and specifically in front-end development.
									<br/>
									<br/>
									Alongwith front-end UI development my interests also lie in microcontrollers and microprocessors.
									<br/>
									<br/>
									I use JavaScript to develop most of the things. I look forward to working in NodeJS and React. You can check my GitHub profile for more.
									<br/>
									<br/>
									This website is built with <FaReact/> React Bootstrap.
								</h5>
							</Col>
						</Row>
					</Container>
				</Jumbotron>

				<Jumbotron style={{backgroundColor:"#b3d9ff",marginTop:"-35px"}}>
					<h2 style={{fontFamily:"Acme",padding:"10px"}}>My Projects</h2>
					<Accordion>
					  	<Card style={{fontFamily:"Ubuntu",backgroundColor:"#f0f5f5",border:"none",boxShadow:"0px 0px 10px rgba(0,0,0,0.2)",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}>
					    	<Accordion.Toggle as={Card.Header} eventKey="0">
					      		Fight Covid
					    	</Accordion.Toggle>
					    	<Accordion.Collapse eventKey="0">
					      		<Card.Body style={{fontFamily:"Ubuntu",backgroundColor:"#f0f5f5",border:"none",boxShadow:"0px 0px 10px rgba(0,0,0,0.2)"}}>
					      			Fight Covid is your interactive query destination.
					      			Stay alert and up to date with the guidelines preset by WHO and other health organisations to combat this virus collectively. Ask your queries in the Form of FAQs and get them answered. Stay away from rumours.
					      			Stay updated with our tweets section & other features that are updated daily.
					      			Look for the risk factors and follow the guidelines on how to stay safe by taking necessary preacutions.
					      			<br/>
					      			<a href="https://fightwithcovid.github.io/" target="_blank">Fight Covid</a>
					      		</Card.Body>
					    	</Accordion.Collapse>
					  	</Card>
					  	<Card style={{fontFamily:"Ubuntu",backgroundColor:"#f0f5f5",border:"none",boxShadow:"0px 0px 10px rgba(0,0,0,0.2)"}}>
					    	<Accordion.Toggle as={Card.Header} eventKey="1">
					      		Biotech India
					    	</Accordion.Toggle>
					    	<Accordion.Collapse eventKey="1">
					      		<Card.Body style={{fontFamily:"Ubuntu",backgroundColor:"#f0f5f5",border:"none",boxShadow:"0px 0px 10px rgba(0,0,0,0.2)"}}>
					      			Biotech is an informational blogging cum daily insights providing website. Biotech will help you keep in touch with the activities happening within your horizon. Start your day with some inspirational quotes, tech and biology articles and many more only on Biotech.
					      			<br/>
					      			<a href="https://biotechindia.github.io/web/" target="_blank">Biotech India</a>
					      		</Card.Body>
					    	</Accordion.Collapse>
					  	</Card>
					  	<Card style={{fontFamily:"Ubuntu",backgroundColor:"#f0f5f5",border:"none",boxShadow:"0px 0px 10px rgba(0,0,0,0.2)",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"}}>
					  	  	<Accordion.Toggle as={Card.Header} eventKey="2">
					  	    	Checkout my profile on GitHub for more
					  	  	</Accordion.Toggle>
					  	</Card>
					</Accordion>
				</Jumbotron>

				<Jumbotron style={{backgroundColor:"#cce6ff",marginTop:"-35px"}}>
					<h2 style={{fontFamily:"Acme",padding:"10px"}}>Connect with me</h2>
						<br/>
					<a href="https://github.com/chinmaykarmokar/" target="_blank"><FaGithub style={{color:"#333",fontSize:"60px",padding:"10px"}}/></a>
					<a href="https://twitter.com/chinmaykarmokar" target="_blank"><FaTwitter style={{color:"#1da1f2",fontSize:"60px",padding:"10px"}}/></a>
					<a href="https://www.instagram.com/chinmay.js/" target="_blank"><FaInstagram style={{color:"#fb3958",fontSize:"60px",padding:"10px"}}/></a>
				</Jumbotron>
				<Navbar className="justify-content-center" style={{padding:"10px",backgroundColor:"#002b80",color:"#fff",fontFamily:"Ubuntu"}}>
					Copyright chinmaykarmokar.github.io
				</Navbar>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'));
