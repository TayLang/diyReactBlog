import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

// var BurgerPage = React.createClass({
// 	// every react component has a method called `.render()` that describes (via its return value) 
// 	// what elements that component will contain. in other words, it returns the tree structure, 
// 	// written in jsx, that the element will contain.
// 	render: function() {
// 		return ( // important! you can only return *one element* here. that element can have children,
// 			// but it can't have siblings.
// 			<div className="burger-page"> {/*if i write a lowercase jsx element, React
// 			will treat it as an html tag. */}
// 				<Banner /> {/*if i write an uppercase jsx element, React
// 			will assume that it is a custom component and look for its definition
// 		(Banner is defined below). */}
// 				<PageBody />
// 			</div>
// 			)
// 	}
// })

  // <div id="head">
  //   <img src="http://magentanova.github.io/html-intro-1/images/houston.jpg" id="pic1"/>
  //   <img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" id="pic2"/>
  // </div>
  // <div id="text-body">
  //   <div id="column-one">
  //     <h4>THE IRON YARD | HOUSTON</h4>
  //     <p id="graytext">Happenings and updates from The Iron Yard in Houston, TX</p>
  //     <p id="Search">SEARCH</p>
  //     <input type:'search' placeholder='Search Keywords'>
  //   </div>
  //   <div id="column-two">
  //     <h1>SEPTEMBER 22 Starts a New Class of The Iron Yard Students</h1>
  //     <p id="BDCD"><em>By Brian Dorton, Campus Director at <a href="https://www.theironyard.com/locations/houston.html"> The Iron Yard</a> Houston</em></p>
  //     <div id="img-crop">  
  //     	<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"id="pic3"/>
  //   	 </div>
  //     <p>Unicorn experiental human-centered design entrepreneur lette agile ideate human-centered design fund physical computing bootstrapping sticky note engaging minimum viable product. Moleskine earned media human-centered design experiential entrepreneur grok parallax waterfall is so 2000 and</p>
  //   </div>
  // </div>

var Body = React.createClass({
	render: function() {
		return (
			<div className = 'body'>
				<Head />
				<TextBody />
			</div>
		)
	}
})

var Head = React.createClass({
	render: function() {
		return (
			<div className='head'> 
				<img src="http://magentanova.github.io/html-intro-1/images/houston.jpg" id="pic1"/>
    			<img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" id="pic2"/>
    		</div>
		)
	}
})

var TextBody = React.createClass({
	render: function() {
		return (
			<div className='text-body'>
				<Columnone />
				<Columntwo />
			</div>	
		)
	}
})

var Columnone = React.createClass({
	render: function() {
		return (
			<div className='column-one'>
				<h4>THE IRON YARD | HOUSTON</h4>
				<Graytext />
				<Search />
				<input type:'search' placeholder='Search Keywords'/>
			</div>
		)
	}
})

var Graytext = React.createClass({
	render: function() {
		return (
			<p className="graytext">Happenings and updates from The Iron Yard in Houston, TX</p>
		)
	}
})

var Search = React.createClass({
	render: function() {
		return (
			<p className="search">SEARCH</p>
		)
	}
})

var Columntwo = React.createClass({
	render: function() {
		return (
			<div className='column-two'>
				<h1>SEPTEMBER 22 Starts a New Class of The Iron Yard Students</h1>
				<BDCD />
				<IMGCrop />
				<p>Unicorn experiental human-centered design entrepreneur lette agile ideate human-centered design fund physical computing bootstrapping sticky note engaging minimum viable product. Moleskine earned media human-centered design experiential entrepreneur grok parallax waterfall is so 2000 and</p>
			</div>
		)
	}
})

var BDCD = React.createClass({
	render: function() {
		return (
			<p className='bdcd'><em>By Brian Dorton, Campus Director at <a href="https://www.theironyard.com/locations/houston.html"> The Iron Yard</a> Houston</em></p>
		)
	}
})

var IMGCrop = React.createClass({
	render: function() {
		return (
			<div className='img-crop'>
				<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"id="pic3"/>
			</div>
		)
	}
})

// <div id="column-two">
//       <h1>SEPTEMBER 22 Starts a New Class of The Iron Yard Students</h1>
//       <p id="BDCD"><em>By Brian Dorton, Campus Director at <a href="https://www.theironyard.com/locations/houston.html"> The Iron Yard</a> Houston</em></p>
//       <div id="img-crop">  
//       	<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"id="pic3"/>
//     	 </div>
//       <p>Unicorn experiental human-centered design entrepreneur lette agile ideate human-centered design fund physical computing bootstrapping sticky note engaging minimum viable product. Moleskine earned media human-centered design experiential entrepreneur grok parallax waterfall is so 2000 and</p>
//     </div>


var app = function() {
	var libraryName = 'react'

    ReactDOM.render(<Body />, document.querySelector('.container').innerHTML = `<h1>diyReactBlog</h1>`
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export var app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..