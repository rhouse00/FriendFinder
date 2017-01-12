
var friends = [
	{"name":"Clint Eastwood","pic":"https://s-media-cache-ak0.pinimg.com/236x/a8/70/09/a8700980804439e7bcc0e4f6a6d0edfa.jpg","score":["3","5","1","4","3","2","1","3","3","4"]},
	{"name":"Scott Baio","pic":"http://cdn2.totallythebomb.com/wp-content/uploads/2009/10/scott-baio1.jpg","score":["3","3","2","4","4","5","5","2","2","1"]},
	{"name":"Sally Ride","pic":"http://a2.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwNjcxMDc2ODc4.jpg","score":["1","2","3","4","5","4","4","1","3","1"]}
];

module.exports = (app)=>{

	app.get('/api/friends', (req,res)=>{

		res.json(friends);
	});
	app.post('/api/friends', (req,res)=>{
		var newFriend = req.body;
		friends.push(newFriend);
		
		var diffArray = []
		var last = friends.length - 1;

		for(var i = 0; i < friends.length-1; i++){
			var person = friends[i].score;
			var surveyor = friends[last].score;
			var diff = 0;

			for(var z = 0; z < person.length; z++){
				diff += Math.abs(person[z]-surveyor[z])
			}
			diffArray.push(diff);
		}
		var newBuddy = diffArray.indexOf( Math.min.apply(Math, diffArray) );
		res.json(friends[newBuddy]);
	});

};