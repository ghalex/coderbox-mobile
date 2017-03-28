import React from "react";
import AppBar from "material-ui/AppBar";
import { Dreambox } from "dreamboxes";

//https://www.coderbox.me/api/dreamboxes

const boxes = [
	{
		id: 1,
		name: "Dreamboxe - no.1",
		icon: "https://s3-eu-west-1.amazonaws.com/coderbox/technologies/javascript.png",
		tags: [{id: 1, name:"HTML"}],
		titles: [{id: 1, name: "Developer"}],
		technologies: [ {
			"_id": 2,
			"name": "HTML"
		},
		{
			"_id": 59,
			"name": " JavaScript"
		},
		{
			"_id": 3,
			"name": "React"
		}
		],
      	by : {
			"_id": "58889972734d1d75e11b88d9",
			"email": "rusadrianewald@gmail.com",
			"name": "Rus Adrian Ewald",
			"url": "http://adrian.com"
      	}		
	},
	{
		id: 2,
		icon: "https://s3-eu-west-1.amazonaws.com/coderbox/technologies/angular2.png",
		name: "asdf222asdf",
		titles: [{id: 1, name: "Developer"}],
		technologies: [ {
			"_id": 2,
			"name": "HTML"
		},
		{
			"_id": 3,
			"name": "React"
		}
		],	
      	by : {
			"_id": "58889972734d1d75e11b88d9",
			"email": "rusadrianewald@gmail.com",
			"name": "Rus Adrian Ewald",
			"url": "http://adrian.com"
      	}			
	},
	{
		id: 3,
		name: "altnume",
		icon: "https://s3-eu-west-1.amazonaws.com/coderbox/technologies/ux.png",
      	titles: [
        {
          "_id": 47,
          "name": "Frontend Developer"
        },
        {
          "_id": 30,
          "name": "Full-stack Developer"
        }
      ],
		technologies: [ {
			"_id": 2,
			"name": "HTML"
		},
		{
			"_id": 59,
			"name": " JavaScript"
		},
		{
			"_id": 3,
			"name": "React"
		}
		],	
      	by : {
			"_id": "58889972734d1d75e11b88d9",
			"email": "rusadrianewald@gmail.com",
			"name": "Rus Adrian Ewald",
			"url": "http://adrian.com"
      	}			
	}
]

const DreamboxesPage = ({ }) => {

	return (
		<div className="page">
			<AppBar title="Dreamboxes" />
			<div className="dreambox-collection">
				{ boxes.map(
					(box) => {
						return <Dreambox key={box.id} box={box} />;
					}
				)}
			</div>
		</div>
	)
}

export default DreamboxesPage;

/*
function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

getJSONP('http://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=js&callback=?', function(data){
    console.log(data);
}); 

)*/