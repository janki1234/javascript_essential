//question1

var library=[
	{
		author:'Bill Gates',
		title:'The Road Ahead',
		readingStatus: true
	},
	{
		author:'Steve Jobs',
		title:'Walter Isaacson',
		readingStatus: true
	},
	{
		author:'Suzanne Collins',
		title:'Mockingjay: The Final Book of The Hunger Games',
		readingStatus: false
	}];

for (let i=0;i<library.length;i++){
	if (library[i].readingStatus === true)
	{
		console.log('Already read \'' + library[i].author +  '\' by ' + library[i].title);
	}
	else
	{
	console.log('You still need to read \''+ library[i].title +'\' by '+library[i].author);
	}
}

//question2


var age=prompt('What is your age? : ');
if (age<18){
	alert('Not legal age to drive');
}
else if(age>=18){
	alert('Drive safe');
}