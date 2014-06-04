// Values you provide
var feedURL = "http://www.apple.com/";						// The feed to fetch
var onloadHandler = function() { xmlLoaded(xmlRequest); };	// The function to call when the feed is loaded; currently calls the XMLHttpRequest load snippet

// XMLHttpRequest setup code
var xmlRequest = new XMLHttpRequest();
xmlRequest.onload = onloadHandler;
xmlRequest.open("GET", feedURL);
xmlRequest.setRequestHeader("Cache-Control", "no-cache");
xmlRequest.send(null);


// Called when an XMLHttpRequest loads a feed; works with the XMLHttpRequest setup snippet
function xmlLoaded(xmlRequest) 
{
	if (xmlRequest.status == 200) {
		// Parse and interpret results
		// XML results found in xmlRequest.responseXML
		// Text results found in xmlRequest.responseText
	}
	else {
		alert("Error fetching data: HTTP status " + xmlRequest.status);
	}
}
