// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal.style.display = "block";
    document.getElementById("tab1").click();
}
btn2.onclick = function() {
    modal.style.display = "block";
    document.getElementById("tab2").click();
}
btn3.onclick = function() {
    modal.style.display = "block";
    document.getElementById("tab3").click();
}
btn4.onclick = function() {
    modal.style.display = "block";
    document.getElementById("tab4").click();
}
btn5.onclick = function() {
    modal.style.display = "block";
    document.getElementById("tab3").click();
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
function openCity(cityName,elmnt,color) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}
	document.getElementById(cityName).style.display = "block";
	elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
