
var http     = require('http'),
	express  = require('express'),
	mysql    = require('mysql'),
	parser   = require('body-parser');

// Database Connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'appfacagend'
});
try {
	connection.connect();
	
} catch(e) {
	console.log('Database Connetion failed:' + e);
}

var app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 8083);

app.get('/', function (req, res) {
	res.send('<html><body><h1>Welcome to WebServices App Facilitador de Agenda</h1></body></html>');
});

/*
* Serve for agenda
*/

// Get information in agenda for id
app.get('/agenda/:id', function (req,res) {
	var id = req.params.id;

	connection.query('SELECT * from agenda where id = ?', [id], function(err, rows, fields) {
  		if (!err){
  			var response = [];

			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}

			res.setHeader('Content-Type', 'application/json');
	    	res.status(200).send(JSON.stringify(response));
  		} else {
		    res.status(400).send(err);
	  	}
	});
});
// Get All information for agenda
app.get('/agenda/', function (req,res) {

	connection.query('SELECT * from agenda', function(err, rows, fields) {
  		if (!err){
  			var response = [];

			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}

			res.setHeader('Content-Type', 'application/json');
	    	res.status(200).send(JSON.stringify(response));
  		} else {
		    res.status(400).send(err);
	  	}
	});
});
// Add new information in table agenda
app.post('/agenda/add', function (req,res) {
	var response = [];
 
	if (
		typeof req.body.title !== 'undefined' && 
		typeof req.body.userResponsible !== 'undefined' && 
		typeof req.body.dt_activity !== 'undefined' && 
		typeof req.body.importance !== 'undefined' && 
		typeof req.body.note !== 'undefined'
	) {
		var title = req.body.title; 
		var userResponsible = req.body.userResponsible;
		var dt_activity = req.body.dt_activity;
		var importance = req.body.importance;
		var note = req.body.note;
 
		connection.query('INSERT INTO agenda (title, userResponsible, dt_activity, importance, note) VALUES (?, ?, ?, ?, ?)', 
			[title, userResponsible, dt_activity, importance, note], 
			function(err, result) {
		  		if (!err){
 
					if (result.affectedRows != 0) {
						response.push({'result' : 'success'});
					} else {
						response.push({'msg' : 'No Result Found'});
					}
 
					res.setHeader('Content-Type', 'application/json');
			    	res.status(200).send(JSON.stringify(response));
		  		} else {
				    res.status(400).send(err);
			  	}
			});
 
	} else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details '});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
});
// Edit info in table agenda
app.post('/agenda/edit/:id', function (req,res) {
	var id = req.params.id;
	var response = [];
 
	if (
		typeof req.body.title !== 'undefined' && 
		typeof req.body.userResponsible !== 'undefined' && 
		typeof req.body.dt_activity !== 'undefined' && 
		typeof req.body.importance !== 'undefined' && 
		typeof req.body.note !== 'undefined'
	) {
		var title = req.body.title; 
		var userResponsible = req.body.userResponsible;
		var dt_activity = req.body.dt_activity;
		var importance = req.body.importance;
		var note = req.body.note;
 
		connection.query('UPDATE agenda SET title = ?, userResponsible = ?, dt_activity = ?, importance = ?, note = ? WHERE id = ?', 
			[title, userResponsible, dt_activity, importance, note, id], 
			function(err, result) {
		  		if (!err){
 
					if (result.affectedRows != 0) {
						response.push({'result' : 'success'});
					} else {
						response.push({'msg' : 'No Result Found'});
					}
 
					res.setHeader('Content-Type', 'application/json');
			    	res.status(200).send(JSON.stringify(response));
		  		} else {
				    res.status(400).send(err);
			  	}
			});
 
	} else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
});
// Delete info in table agenda
app.delete('/agenda/delete/:id', function (req,res) {
	var id = req.params.id;

	connection.query('DELETE FROM agenda WHERE id = ?', [id], function(err, result) {
  		if (!err){
  			var response = [];

			if (result.affectedRows != 0) {
				response.push({'result' : 'success'});
			} else {
				response.push({'msg' : 'No Result Found'});
			}

			res.setHeader('Content-Type', 'application/json');
	    	res.status(200).send(JSON.stringify(response));
  		} else {
		    res.status(400).send(err);
	  	}
	});
});

/*
* Service for usuarios
*/

// Get All information for users
app.get('/users/', function (req,res) {

	connection.query('SELECT * from users', function(err, rows, fields) {
  		if (!err){
  			var response = [];

			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}

			res.setHeader('Content-Type', 'application/json');
	    	res.status(200).send(JSON.stringify(response));
  		} else {
		    res.status(400).send(err);
	  	}
	});
});
// Get information in users for id
app.get('/users/:id', function (req,res) {
	var id = req.params.id;

	connection.query('SELECT * from users where id = ?', [id], function(err, rows, fields) {
  		if (!err){
  			var response = [];

			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}

			res.setHeader('Content-Type', 'application/json');
	    	res.status(200).send(JSON.stringify(response));
  		} else {
		    res.status(400).send(err);
	  	}
	});
});
// Add new information in table agenda
app.post('/users/add', function (req,res) {
	var response = [];
 
	if (
		typeof req.body.user !== 'undefined' && 
		typeof req.body.password !== 'undefined' && 
		typeof req.body.name !== 'undefined' 
	) {
		var user = req.body.user; 
		var password = req.body.password;
		var name = req.body.name;
 
		connection.query('INSERT INTO users (user, password, name) VALUES (?, ?, ?)', 
			[user, password, name], 
			function(err, result) {
		  		if (!err){
 
					if (result.affectedRows != 0) {
						response.push({'result' : 'success'});
					} else {
						response.push({'msg' : 'No Result Found'});
					}
 
					res.setHeader('Content-Type', 'application/json');
			    	res.status(200).send(JSON.stringify(response));
		  		} else {
				    res.status(400).send(err);
			  	}
			});
 
	} else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
});
// Edit info in table agenda
app.post('/users/edit/:id', function (req,res) {
	var id = req.params.id;
	var response = [];
 
	if (
		typeof req.body.user !== 'undefined' && 
		typeof req.body.password !== 'undefined' && 
		typeof req.body.name !== 'undefined'
	) {
		var user = req.body.user; 
		var password = req.body.password;
		var name = req.body.name;
 
		connection.query('UPDATE users SET user = ?, password = ?, name = ? WHERE id = ?', 
			[user, password, name, id], 
			function(err, result) {
		  		if (!err){
 
					if (result.affectedRows != 0) {
						response.push({'result' : 'success'});
					} else {
						response.push({'msg' : 'No Result Found'});
					}
 
					res.setHeader('Content-Type', 'application/json');
			    	res.status(200).send(JSON.stringify(response));
		  		} else {
				    res.status(400).send(err);
			  	}
			});
 
	} else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
});
// Delete info in table agenda
app.delete('/users/delete/:id', function (req,res) {
	var id = req.params.id;

	connection.query('DELETE FROM users WHERE id = ?', [id], function(err, result) {
  		if (!err){
  			var response = [];

			if (result.affectedRows != 0) {
				response.push({'result' : 'success'});
			} else {
				response.push({'msg' : 'No Result Found'});
			}

			res.setHeader('Content-Type', 'application/json');
	    	res.status(200).send(JSON.stringify(response));
  		} else {
		    res.status(400).send(err);
	  	}
	});
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Server listening on port ' + app.get('port'));
});
