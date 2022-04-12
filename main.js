function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

function myFunction() {
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");

	if (moreText.style.display === "inline") {
		btnText.innerHTML = "Read More";
		moreText.style.display = "none";
	}
	else{
		btnText.innerHTML = "Read less"; 
	  	moreText.style.display = "inline";
	}
  }

function myFunc(btn_id) {
  
	var btnText = document.getElementById(btn_id.id);
	var parentElem = btn_id.parentElement;
	var childElemP = parentElem.childNodes;
	var spanElem = childElemP[1].childNodes;
	
	if (spanElem[1].style.display === "none") {
	  	spanElem[1].style.display = "inline";
	  	btnText.innerHTML = "Read more"; 
	  	spanElem[2].style.display = "none";
	} else {
	  	spanElem[1].style.display = "none";
	  	btnText.innerHTML = "Read less"; 
	  	spanElem[2].style.display = "inline";
	}
  }
