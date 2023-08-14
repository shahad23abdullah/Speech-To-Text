
const texts = document.querySelector(".texts");

window.SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result",(e)=> {
	texts.appendChild(p);
	const text = Array.from(e.results)
	 .map((result)=>result[0])
	 .map((result)=>result.transcript)
	 .join("");
	 
	p.innerText = text ;
	if (e.results[0].isFinal){
	
		if(text.includes("how are you")){
		p = document.createElement("p");
		p.classList.add("replay");
		p.innerText = "I am fine";
		texts.appendChild(p);
		}
		if(
		 text.includes("what's your name") ||
		 text.includes("what is your name")
		){
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "My name is Shia  ^_^";
			texts.appendChild(p);
		}
		if(
		text.includes("new pant") ||
		text.includes("pant") 
		){
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "here is some new pants in namshi ";
			texts.appendChild(p);
			console.log("new pants");
			window.open("https://en-sa.namshi.com/men-clothing-pants_chinos-pants/");
		}
		if(
		text.includes("new shoes")||
		text.includes("shoes")
		){
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "here is some new pshoes from nike";
			texts.appendChild(p);
			console.log("new pants");
			window.open("https://www.nike.com/w/new-shoes-3n82yzy7ok");
		}
		if(
		text.includes("fat ")||
		text.includes("diet")
		){
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "here is website may help you";
			texts.appendChild(p);
			console.log("new pants");
			window.open("https://drnutrition.com/ar-sa");
		}
			const xhr = new XMLHttpRequest();
		xhr.open("POST","StoD.php",true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState=XMLHttpRequest.DONE){
			if(xhr.readyState==200){
					console.log(xhr.responseText);
			}
			 else{
               console.error("HTTP Status:", xhr.status, "Status Text:", xhr.statusText);			 }
		}
		};
	  const data = "text=" + encodeURIComponent(text);
		xhr.send(data);
		p = document.createElement("p");
	}
});

recognition.addEventListener("end",()=>{
	recognition.start();
});
recognition.start();