const express = require('express');

const app= express();
//start server
app.listen(3000, ()=>{
	console.log('Server is running on port 3000');
})