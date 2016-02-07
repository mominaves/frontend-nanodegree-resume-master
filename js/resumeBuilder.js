// $("#main").append("Aves Momin");
// var fname="Aves Momin";
// var age=24;
// var awesomeThoughts="I am "+fname+". And I am Awesome...!!!!";

// var email='mominaves756@gmail.com';
// var newEmail=email.replace('gmail','yahoo');

// console.log(email);
// console.log(newEmail);

// var funThoughts=awesomeThoughts.replace('Awesome','Fun');
// console.log(funThoughts);

// $("#main").append(funThoughts);

/*
var formattedName=HTMLheaderName.replace("%data%",fname);
$("#header").append(formattedName); */

// var skills=["MySQL","RHCE","RHCSA","JAVA"];

var bio={
	"name":"Aves Momin",
	"role":"PL/SQL Developer (Junior)",

	"contacts":
	{
		"mobile":"+91-7350697237",
		"email":"mominaves756@gmail.com",
		"github":"nemesis1311",
		"location":"Rajgurunagar,Pune"
	},
	"skills":["MySQL","RHCE","RHCSA","JAVA"],
	"welcomeMessage":"Something Nice and Friendly",
	bioPic:"images/Photo_BMP_2.jpg"
}; 

/*
var work={};

	work.position="MySQL PL/SQL Developer";
	work.curent_employer="Techence IT Solutions Pvt. Ltd.";
	work.years_worked="1 year";
	work.bussiness_city="Rajgurunagar, Pune";
	work.prev_position="L1 Linux System Administrator";
	work.prev_employer="Associate of Zack IT Solutions Pvt. Ltd.";
	work.prev_work="6 months";
	work.prev_city="TATA Communications, Old VSNL Campus, Dighi,Pune";
*/


var work=
{

	"jobs":[
	{
		"title":"MySQL PL/SQL Developer",
		"employer":"Techence IT Solutions Pvt. Ltd.",
		"years":"July 2014 - Present",
		"city":"Rajgurunagar",
		"description":"Back-End support and PL/SQL coding"
	},
	{
		"title":"L1 Linux System Administrator",
		"employer":"Associate of Zack IT Solutions Pvt. Ltd.",
		"years":"Jan 2014 - July 2014",
		"city":"TATA Communications, Old VSNL Campus, Dighi,Pune",
		"description":"Datacenter Operations Team"
	}

	]
};


//var education={};

//	education["grad"]="B.E. (Computer Engineering)";
//	education["grad_college"]= "Siddhant College of Engineering";



var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedName); 
$("#header").append(formattedRole);
// $("#header").append(bio.bioPic);
var formattedBioPic=HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedBioPic);

// $("#header").append(work.jobs.title[0]); 
//$("#header").append(education.grad_college);

var education=
{
	"schools":[
	{
	"name":"Siddhant College of Engineering",
	"location":"Sundumbare, Pune",
	"degree":"Bachelor of Engineering",
	"major":"Computer Engineering",
	"dates":"2013",
	"percentage":"64.66%"
	},
	{
		"name":"Hutatma Rajguru Mahavidyalaya",
		"location":"Rajgurunagar",
		"degree":"H.S.C.",
		"major":"Science",
		"dates":"2008",
		"percentage":"67%"
	},
	{
		"name":"K.T.E.S. English School",
		"location":"Rajgurunagar",
		"degree":"S.S.C.",
		// "major":"Science",
		"dates":"2006",
		"percentage":"78.96%"
	}
	],

	"certifications":[
	{
		"name":"SEED Infotech",
		"location":"Chinchwad",
		"degree":"RedHat certifications",
		"major":["RHCE","RHCSA"],
		"dates":"2012"
	}
	]

	// Add Online Course Info Here

};

// Jsonlint says no comments in json object and end should be whitout semicolon.

var projects={

	"ProfProjects":[
	{
		"name":"BMS (Breeder Management System)",
		"duration":"July 2014 - Present",
		"description":"A lot of work gos here"
	},
	{
		"name":"LMS (Layer Management System)",
		"duration":"July 2014 - Present",
		"description":"A lot of work gos here"
	},
	{

		"name":"Trace",
		"duration":"Nov 2014-Feb 2015",
		"description":"A lot of work gos here"
	},
	{
		"name":"Web Business",
		"duration":"Feb 2015 - Present (Active Development)",
		"description":"A lot of work gos here"
	},
	{

		"name":"PBWA",
		"duration":"May 2015 - Present (Active Development)",
		"description":"A lot of work gos here"
	}
	],

	"AcademicProjects":[
	{
		"name":"Sentiment Analysis Using Linear SVM and Association Rules",
		"duration":"Oct 2012 - March 2013",
		"description":"A lot of work gos here"
	}
	]

};


if (bio.skills.length > 0)
{

	$("#header").append(HTMLskillsStart);

	var formattedSkill= HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
	
}

/* My Solution to Ch3 Quiz V-6
for (i in work.jobs)
{

	$("#header").append(HTMLworkStart);

	var formattedJob=HTMLWorkTitle.replace("%data%",work.jobs);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.employer);

	$("#work-entry:last").append(formattedJob);
} */
//for(var i=0;i<9;i++){ console.log(i);}

function displayWork()
{
for (i in work.jobs)
{

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[i].employer);

	var formattedJob=HTMLworkTitle.replace("%data%",work.jobs[i].title);

	var formattedEmployerTitle=formattedEmployer +
	formattedJob ;
	
	$(".work-entry:last").append(formattedEmployerTitle);  // this is a class. not a div.

	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[i].years);
	
	$(".work-entry:last").append(formattedDates);

	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);

	$(".work-entry:last").append(formattedDescription);

	/* var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[i].city);

	$(".work-entry:last").append(formattedLocation); */

}
}

displayWork();

$(document).click(function(loc)
{
	LogClicks()
});


function locationizer(work_obj)
{
	var work_loc=[];

	for(i in work_obj.jobs)
	{
		var newLocation = work_obj.jobs[i].city;
		work_loc.push(newLocation);
	}

	return work_loc;
}

console.log(locationizer(work));


function inName(name)
{

	name=name.trim().split(" ");
	console.log(name);

	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+
			name[0].slice(1).toLowerCase();

			return name[0]+" "+name[1];
}


// var internationalizeButton=inName('Aves','Momin!!!');

  
 // $("#main").append(internationalizeButton);

projects.display = function()
{

	for(i in projects.ProfProjects)
	{
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle=HTMLprojectTitle.replace("%data%",projects.ProfProjects[i].name);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDate=HTMLprojectDates.replace("%data%",projects.ProfProjects[i].duration);
		$(".project-entry:last").append(formattedProjectDate);

		var formattedProjectDescription=HTMLprojectDescription.replace("%data%",projects.ProfProjects[i].description);
		$(".project-entry:last").append(formattedProjectDescription);		
		
	}
}

projects.display();


education.display = function()
{

	for(i in education.schools)
	{

		$("#education").append(HTMLschoolStart);

		var formattedSchoolName= HTMLschoolName.replace("%data%",education.schools[i].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDegree= HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates= HTMLschoolDates.replace("%data%",education.schools[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation= HTMLschoolLocation.replace("%data%",education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor= HTMLschoolMajor.replace("%data%",education.schools[i].major);
		$(".education-entry:last").append(formattedSchoolMajor);

		var formattedschoolPercentage= HTMLschoolPercentage.replace("%data%",education.schools[i].percentage);
		$(".education-entry:last").append(formattedschoolPercentage);

	}


}

education.display();