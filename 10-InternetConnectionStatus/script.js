const image = document.getElementById("image"),
      statusDisplay = document.getElementById("status"),
      bgColor = document.getElementById("main");

function setColor() {
	bgColor.classList.add("online")
}

async function connectionStatus() {
	try {
		const fetchResult = await fetch('https://images.twinkl.co.uk/tr/raw/upload/u/ux/artist_ver_1.png' + (new Date()).getTime());
		image.src = "./images/online.png";
		setColor();
		return fetchResult.status >= 200 && fetchResult.status < 300;
	} catch (error) {
		statusDisplay.textContent = "OOPS... Your internet connection is down";
		image.src = "./images/offline.png";
		bgColor.classList.remove("online");
	}
}

//monitor the connection
setInterval(async () => {
	const result = await connectionStatus();
	if (result) {
		statusDisplay.textContent = "You are ONLINE, connection looks good";
		setColor();
	}
}, 5000);

//check connection when the page loads
windows.addEventListener("load", async (e) => {
	if (connectionStatus()) {
		statusDisplay.textContent = "You are ONLINE";
	} else {
		statusDisplay.textContent = "You are OFFLINE";
	}
	
})

