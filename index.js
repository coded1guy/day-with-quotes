var Quotes = ["“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”– Dr. Suess", "“I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.”– Marilyn Monroe", "“Life is what happens when you’re busy making other plans.” – John Lennon", "“Get busy living or get busy dying.”– Stephen King", "“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”– Mark Caine", "“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”– Helen Keller", "“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.”– Mark Twain", "“When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.”– Audre Lorde"];

function date() {
	var today = new Date(); 
	var day = today.getDay();
	var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var display = document.querySelector("#display");
	display.innerHTML = "Today is " + weekDay[day];
	document.querySelector("#quote").innerHTML = Quotes[Math.floor(Math.random() * Quotes.length)];
};