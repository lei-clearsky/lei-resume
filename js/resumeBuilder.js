
//Work JSON 
var work = {
	"jobs":[
		{
			"employer": "HBC Digital",
			"title": "Front-End Web Developer",
			"location": "New York, NY",
			"dates": "2015 - Present",
			"description": "All things front-end related."
		},
		{
			"employer": "College of Saint Elizabeth",
			"title": "Front-End Web Developer",
			"location": "Morristown, NJ",
			"dates": "2013 - 2015",
			"description": "Perform complete life cycle development of front-end web development, with an emphasis on the requirements gathering, planning, analysis, testing, and acceptance phases for assigned projects. Work with Graphic Designer and Webmaster to translate wireframe designs into code using standards-compliant dynamic HTML5 and CSS3; utilize approved software development platforms, methodologies, tools and languages (JavaScript, Velocity etc.) to create and manage customized web projects. Maintain all CSE websites and applications; provide management with updates regarding the status of web-related projects, and participate in discussions and meetings regarding web related projects."
		},
		{
			"employer": "College of Saint Elizabeth",
			"title": "Technology Coordinator",
			"location": "Morristown, NJ",
			"dates": "2010 - 2013",
			"description": "Provide one-on-one and in-classroom instructional technology support to faculty and staff members to create and strengthen online learning opportunities for CSE students; assist the Academic Computing department in the development of Blackboard, Moodle and ePortfolio instructor training materials and workshops. Work collaboratively with the Institutional Advancement, Academic Affairs and IT departments on web design/redesign projects; develop and provide technical support for interactive web applications by utilizing various programming languages including Velocity, HTML, CSS and Javascript; use the dotCMS content management system to maintain the website of the four academic areas under the Academic Affairs department; Use InDesign, Photoshop. Illustrator, Publisher and Acrobat to design and publish online documents including postcards, flyers, brochures, web banners and email invitations"
		},
		{
			"employer": "Bloomberg L.P.",
			"title": "Supply Chain Analyst",
			"location": "Skillman, NJ",
			"dates": "2009 - 2010",
			"description": "Discovered global supply chain data and constructed databases detailing the suppliers, intermediaries, third-party service providers and customers of public companies based in China; Utilized supply chain databases to model raw material, component part, product ! and service flows along the supply chains of Chinese corporations"
		}

	]
	
};
// Display work json info
work.display = function(){
	
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
		
}
// Projects JSON
var projects = {
	"projects": [
		{
			"title": "Visual UI Test Automation",
			"date worked": "June, 2015 - Present",
			"description": "An automatic visual UI testing and monitoring service built with NightmareJS, gm, node-cron and MEAN stack",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/doraemon",
			"progress": 80
		},
		{
			"title": "nDock",
			"date worked": "May, 2015",
			"description": "A real-time bulletin board that can be used for brainstorming ideas. This app is built with AngularJS, Socket.io, Node.js, Express and MongoDB.",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/nogever/stackathon",
			"demo": "https://ndock.herokuapp.com/",
			"progress": 100
		},
		{
			"title": "Cafestack",
			"date worked": "Apr, 2015",
			"description": "An E-Commerce web application built with Bootstrap, MongoDB, ExpressJS, AngularJS and NodeJS",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/pdedes/stack_store",
			"demo": "https://cafestack.herokuapp.com/",
			"progress": 100
		},
		{
			"title": "Trip Planner",
			"date worked": "March, 2015",
			"description": "A trip planning app in NYC built with jQuery, Node.js, Express and MongoDB",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/tripplanner-persistence",
			"progress": 100
		},
		{
			"title": "Game of Life in JS",
			"date worked": "Feb, 2015",
			"description": "Conway's Game of Life Javascript Implementation",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/FS-Game-of-Life",
			"demo": "http://lei-clearsky.github.io/FS-Game-of-Life/",
			"progress": 100
		},
		{
			"title": "Neighborhood Map",
			"date worked": "Dec, 2014 - Jan, 2015",
			"description": "Neighborhood Map project for Udacity Front-end Web Development Nanodegree",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/neighborhood-map-seperate-model",
			"demo": "http://lei-clearsky.github.io/neighborhood-map-seperate-model/",
			"progress": 100
		},
		{
			"title": "Arcade Game",
			"date worked": "Nov, 2014",
			"description": "Classic arcade game clone project for Udacity Front-end Web Development Nanodegree",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/p3-arcade-game",
			"demo": "http://lei-clearsky.github.io/p3-arcade-game/",
			"progress": 100
		},
		{
			"title": "Resume",
			"date worked": "Oct, 2014",
			"description": "Resume project for Udacity Front-end Web Development Nanodegree",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/nanodegree-fewd-p2",
			"demo": "http://lei-clearsky.github.io/nanodegree-fewd-p2/",
			"progress": 100
		},
		{
			"title": "Mu Theta At Large",
			"date worked": "Jul, 2014 - Aug, 2014",
			"description": "My first WordPress project. Redesigned a new resonsive WordPress theme and converted a flash based site",
			"image": "http://lei-clearsky.github.io/images/3.jpg",
			"github": "https://github.com/lei-clearsky/muthetaatlarge/tree/master/wp-content/themes/mtal",
			"demo": "http://muthetaatlarge.org/",
			"progress": 100
		},
		{
			"title": "WordPress Twitter Plugin",
			"date worked": "Aug, 2014 - Sept, 2014",
			"description": "A WordPress twitter plugin. Users can input Authentication keys to display their tweets from twitter.",
			"image": "http://lei-clearsky.github.io/images/5.jpg",
			"github": "https://github.com/lei-clearsky/wp-theme-and-plugin/tree/master/wp-content/plugins/wpplugin-test",
			"progress": 90
		},
		{
			"title": "Lazy Recipe",
			"date worked": "Oct, 2013 - Dec, 2013",
			"description": "My first Rails project. Search recipes by ingredients, ingredients are sorted from the least to the most.",
			"image": "http://lei-clearsky.github.io/images/2.jpg",
			"github": "https://github.com/lei-clearsky/search-recipes-app",
			"demo": "http://powerful-wildwood-2510.herokuapp.com/",
			"progress": 100
		},
		{
			"title": "CSE Official Website",
			"date worked": "July, 2013 - Present",
			"description": "I redesigned and created the front-end of the College of Saint Elizabeth's official website. The previous site is in Flash.",
			"image": "http://lei-clearsky.github.io/images/6.jpg",
			"demo": "http://www.cse.edu/",
			"progress": 100
		}
	]

};
// Display project json info
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
			
			// call d3 progress chart function
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
// project d3 progress chart function
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};

//Bio JSON
var bio = {
	"first name": "Lei",
	"last name": "Zhu",
	"role": "Front-End Web Developer",
	"welcome message": "I'm passionate about web design and web development, and am currently working as a Front-End web developer. Feel free to check out my Github repositories and demo projects. You can also find me on Linkedin and Twitter.",
	"bio pic": "https://lh3.googleusercontent.com/-SBN15tcmbC8/UkCdJGCGHOI/AAAAAAAAAVE/Gjs_4zrqmfY/w140-h140-p/LeiZ.JPG",
	"contacts": 
		{
			"email": "lei.clearsky@gmail.com",
			"github username": "lei-clearsky",
			"twitter handle": "@lei_clearsky",
			"location": "New York, NY"
		},
	"skills": ["HTML", "CSS", "Javascript", "JQuery", "Angular", "PHP", "MySQL", "WordPress"]

};
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter handle"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedTwitter);	
	$("#topContacts ul").append(formattedLocation);

}
//Education JSON
var education = {
	"schools": [
		{
			"name": "Fullstack Academy",
			"location": "New York, NY",
			"majors": ["Flex Immersive Full Stack Web Development"],
			"dates": "June 2015",
			"url": "http://www.fullstackacademy.com/flex-immersive"
		},
		{
			"name": "Northern State University",
			"location": "Aberdeen, SD",
			"degree": "Masters",
			"majors": ["M.S. in E-learning Technology and Administration"],
			"dates": "May 2009",
			"url": "http://www.northern.edu/"
		},
		{
			"name": "Capital Normal University",
			"location": "Beijing, China",
			"degree": "Bachelars",
			"majors": ["B.S. in Urban and Rural Planning and Resource Management"],
			"dates": "July 2007",
			"url": "http://cnu.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "WordPress",
			"school": "Treehouse",
			"dates": 2014,
			"url": "http://teamtreehouse.com/home"
		},
		{
			"title": "Front-end Web Development",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/nanodegrees"
		}
	],
};
// Display education json info
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
																											
		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
	$("#education").append(HTMLonlineClasses);
	// Display online courses
	for (var onlineCourse in education.onlineCourses){	
		var num = education.schools.length + parseInt(onlineCourse);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
	}
}
//Map
$("#mapDiv").append(googleMap);

// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "HTML",
    labelcolor: "red"
  },
  {
    value: 8,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "CSS",
    labelcolor: "orange"
  },
  {
    value: 8,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Javascript",
    labelcolor: "green"
  },
  {
    value: 6,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "MEAN stack",
    labelcolor: "yellow"
  },
  {
    value: 6,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "WordPress",
    labelcolor: "gray"
  },
  {
    value: 6,
    color: "#23582b",
    highlight: "#A8B3C5",
    label: "Git",
    labelcolor: "darker-green"
  },
  {
    value: 5,
    color: "#4D5360",
    highlight: "#616774",
    label: "Sass",
    labelcolor: "darker-gray"
  }

  ];
// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}

// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();






