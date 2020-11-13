var sys=[
	"    ",
	"What's your name?",
	"How Can I help you today?",
	"Which Author's book you usually prefer?",
	"Do you have any plans, Where to Buy it?",
	"It was good time with you.",
	"Thank you!"
]
var seq=0;
var inIt=document.querySelector('#hjs');
var outIt=document.querySelector('#view');
outIt.innerHTML=sys[seq];
var hjs= document.getElementById('hjs');

function systemResponse(){
	var getIt=inIt.value;
	if(inIt.value==" "){

	}
	else{
		if(seq==0){
			outIt.innerHTML="Hello!";
			inIt.value="";
			inIt.setAttribute("placeholder","wait for next reply");
			++seq;
			setTimeout(nextMessage,3000);
		}
		else if (seq ==1){
			outIt.innerHTML=`Yes ${getIt}!`;
			inIt.value="";
			inIt.setAttribute("placeholder","wait for next reply");
			++seq;
			setTimeout(nextMessage,3000);
		}
		else if (seq==2){
			outIt.innerHTML=`It's good to ${getIt}`;
			inIt.value="";
			inIt.setAttribute("placeholder","wait for next reply");
			++seq;
			setTimeout(nextMessage,3000);
		}
		else if (seq==3){
			outIt.innerHTML=`${getIt} is a Good Writer!`;
			inIt.value="";
			inIt.setAttribute("placeholder","wait for next reply");
			++seq;
			setTimeout(nextMessage,3000);
		}
		else if (seq==4){
			outIt.innerHTML=`${getIt} is a better place.`;
			inIt.value="";
			inIt.setAttribute("placeholder","wait for next reply");
			++seq;
			setTimeout(nextMessage,3000);
		}
		else if (seq==5){
			outIt.innerHTML=/*`${getIt}!`*/" ";
			inIt.value="";
			inIt.setAttribute("placeholder","wait for next reply");
			++seq;
			setTimeout(nextMessage,3000);
		}
	}
}
function nextMessage(){
	inIt.setAttribute("placeholder","wait for next reply");
	outIt.innerHTML=sys[seq];
	if(seq==6){
		inIt.style.display="none";
	}
}

document.addEventListener('keypress',function(e){
	if(e.which == 13){
		systemResponse();
	}

})

