//Node JS implementation file. Importing the child_process module
const spawn = require('child_process').spawn;

//spawn a process and define the python file (script.py) to run, along with the data to pass (data type is text)
const process = spawn('python', ['script.py', text]);

//every time our node application receives data from the python process output stream
//we want to convert that data which was received into a string & append it to the overall test variable.
process.stdout.on('data', (data) => {
  test = data.toString();
});

//Console log to the terminal if any errors in the python script occur. 
process.stderr.on('data', (data) => {
  console.log('err results: %j', data.toString('utf8'))
});

//Logging the data
process.stdout.on('end', function(){
  console.log('Test Data', test);
});