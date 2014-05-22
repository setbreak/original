
var topStories = parseInt(attributes.topStories);       // The number of stories featured in the top section
// var topStories = 20;       

// Called by HTML body element's onload event when the web application is ready to start
//
function load()
{
    dashcode.setupParts();
    document.getElementById("StackLayout").object.setCurrentView("progressLoad", false);
     rssLoad();

    var todaysDate = document.getElementById("todaysDate");
    todaysDate.innerText = createDateStr(new Date()).toUpperCase();

    adLoader();

	var searchfield = document.getElementById("searchfield");	
	var showInfoButton2 = document.getElementById("showInfoButton2");
	var showInfoButton4 = document.getElementById("showInfoButton4");
	showInfoButton2.style.display = "none";
		showInfoButton4.style.display = "none";

//	searchfield.onchange = function() {
	searchfield.onchange = function() {
		filterString = searchfield.value;          

//		if ((filterString=="") || (filterString==" ")) {
		if ((searchfield.value=="") || (searchfield.value==" ")) {
	showInfoButton2.style.display = "none";
			//	document.getElementById("indicator1").object.setValue(1);
			} else {
	showInfoButton2.style.display = "inline";
			//	document.getElementById("indicator1").object.setValue(15);
			}
		feedResults = filterEntries(fullFeedResults);
		document.getElementById("headlineList").object.reloadData();
		document.getElementById("secondHeadlines").object.reloadData();
		document.getElementById("StackLayout").object.setCurrentView("frontPage", false);
	
		};

	searchfield.onreset = function() {
		filterString = "";          
	showInfoButton2.style.display = "none";
		feedResults = filterEntries(fullFeedResults);
		document.getElementById("headlineList").object.reloadData();
		document.getElementById("secondHeadlines").object.reloadData();
		document.getElementById("StackLayout").object.setCurrentView("frontPage", true);
	
		};


    searchfield.onfocus = function() {
		};


    var showInfoButton = document.getElementById("showInfoButton");
    showInfoButton.object.onclick = function() {
//		filterString = "";          
//		bandFeedResults = filterEntriesBand(fullFeedResults);
//        document.getElementById("searchList").object.reloadData();
		document.getElementById("StackLayout").object.setCurrentView("searchView", true);
		};

//        bandFeedResults.sort(function (a, b) { return b.band - a.band; });

//    var showInfoButton4 = document.getElementById("showInfoButton4");
    showInfoButton4.object.onclick = function() {
		filterString = "";          
		bandFeedResults = filterEntriesBand(fullFeedResults);
// bandFeedResults.sort();

//		        bandFeedResults.sort(function (a, b) { return b.band - a.band; });
        document.getElementById("searchList1").object.reloadData();
		document.getElementById("StackLayout").object.setCurrentView("searchView1", true);
		};





//    var showInfoButton2 = document.getElementById("showInfoButton2");
	showInfoButton2.object.onclick = function() {
		searchfield.reset;          
		searchfield.value = "";          
		filterString = searchfield.value;          
		feedResults = filterEntries(fullFeedResults);
//		feedResults = filterEntriesReverse(fullFeedResults);
		document.getElementById("headlineList").object.reloadData();
		document.getElementById("secondHeadlines").object.reloadData();
		document.getElementById("StackLayout").object.setCurrentView("frontPage", true);
		showInfoButton2.style.display = "none";
		};

var sorting = true;

//    var checkboxbutton1 = document.getElementById("checkboxbutton1");
//	checkboxbutton1.onclick = function() {
    var indicator = document.getElementById("indicator");
	indicator.ontouchstart = function() {
if (sorting==true) {
		feedResults = filterEntriesReverse(fullFeedResults);
		sorting = false;
		indicator.object.setValue(10);
		} else {
		feedResults = filterEntries(fullFeedResults);
		sorting = true;
		indicator.object.setValue(1);
		}
		document.getElementById("headlineList").object.reloadData();
		document.getElementById("secondHeadlines").object.reloadData();
		document.getElementById("StackLayout").object.setCurrentView("frontPage", true);
		};




if (1==2) {


    var showInfoButton2 = document.getElementById("showInfoButton2");
	showInfoButton2.object.onclick = function() {
		searchfield.value = "";          
		filterString = searchfield.value;          
		feedResults = filterEntries(fullFeedResults);
//		feedResults = filterEntriesReverse(fullFeedResults);
		document.getElementById("headlineList").object.reloadData();
		document.getElementById("secondHeadlines").object.reloadData();
		document.getElementById("StackLayout").object.setCurrentView("frontPage", false);
		};

var sorting = true;

    var checkboxbutton1 = document.getElementById("checkboxbutton1");
	checkboxbutton1.onclick = function() {
if (sorting==true) {
		feedResults = filterEntriesReverse(fullFeedResults);
		sorting = false;
		} else {
		feedResults = filterEntries(fullFeedResults);
		sorting = true;
		}
		document.getElementById("headlineList").object.reloadData();
		document.getElementById("secondHeadlines").object.reloadData();
		document.getElementById("StackLayout").object.setCurrentView("frontPage", false);
		};


} // end if 1 is 2

//    var horizontalLevelIndicator = document.getElementById("horizontalLevelIndicator");
//	horizontalLevelIndicator.ontouchstart = function() {
//		horizontalLevelIndicator.object.setValue(1);

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
//		button1.style.display = "none";

	button1.onclick = function() {
//		horizontalLevelIndicator.object.setValue(10);
		button1.style.display = "none";
//		button1.style.object.display.opacity = "10%";
		button2.style.display = "inline";
//		button2.style.object.display.opacity = "100%";
		showInfoButton4.style.display = "none";
		showInfoButton.style.display = "inline";
	var thenewurl = 'http://setbreakmusic.com/drupal/concerts/todayfeedwithpicDeadDose.php';
		searchfield.value = "";          
		filterString = searchfield.value;          
    setFeedSource(thenewurl);
    document.getElementById("StackLayout").object.setCurrentView("progressLoad", true);
    fetchFeed();
 	};
	button2.onclick = function() {
//		horizontalLevelIndicator.object.setValue(1);
		button2.style.display = "none";
//		button2.style.object.display.opacity = "10%";
		button1.style.display = "inline";
//		button2.style.object.display.opacity = "100%";
		showInfoButton.style.display = "none";
		showInfoButton4.style.display = "inline";
//		showInfoButton4.style.enabled = true;
	var thenewurl = 'http://setbreakmusic.com/drupal/concerts/todayfeedwithpic0707.php';
		searchfield.value = "";          
		filterString = searchfield.value;          
    setFeedSource(thenewurl);
    document.getElementById("StackLayout").object.setCurrentView("progressLoad", true);
    fetchFeed();
 	};
	
			button1.style.display = "none";
//		button1.style.object.display.opacity = "10%";

	
	


}; // end load







// This object implements the dataSource methods for the list.
var headlineList = {
    
    // The List calls this method to find out how many rows should be in the list.
	numberOfRows: function() {
		if (feedResults == null)
			return 0;           // Return 0 if there are no results to load 
		else
			if (feedResults.length > topStories) {
    var olderArticlesLabel = document.getElementById("olderArticlesLabel");
//		olderArticlesLabel.style.display = "inline";
			olderArticlesLabel.style.visibility = "visible";
				return topStories;          // Else return the number of headlined items (default: 3)
			} else {
    var olderArticlesLabel = document.getElementById("olderArticlesLabel");
//		olderArticlesLabel.style.display = "none";
			olderArticlesLabel.style.visibility = "hidden";
				return feedResults.length;				
				}
	},
    
    // The List calls this method once for every row.
	prepareRow: function(rowElement, rowIndex, templateElements) {

		if (templateElements.headlineTitle) {
			templateElements.headlineTitle.innerHTML = extractHTML(feedResults[rowIndex].band);
		}

    
		if (templateElements.headlineDescription) {
			templateElements.headlineDescription.innerHTML = createDateStr(parseDate(feedResults[rowIndex].date));
		}
    
		if (templateElements.headlineSrc) {
			templateElements.headlineSrc.innerHTML = "<image src='http://www.setbreakmusic.com/images/" + extractHTML(feedResults[rowIndex].src) + "' width='30' height='30' />";
		}


		if (templateElements.headlineVenue) {
			templateElements.headlineVenue.innerHTML = extractHTML(feedResults[rowIndex].venue);
		}

    // We also assign an onclick handler that will cause the browser to go to the detail page.
		var self = this;
		var handler = function() {

pageTracker._trackEvent('Headline', 'Top', extractHTML(feedResults[rowIndex].band));


			detailController.setRepresentedObject(rowIndex);

			document.getElementById("StackLayout").object.setCurrentView("showPage", false, true);
			document.getElementById("stackLayout").object.setCurrentView("songProgressLoad", false);
			};
		rowElement.onclick = handler;
	}
};






// This object implements the dataSource methods for the list.
var secondHeadlineList = {
    
	numberOfRows: function() {
		if (feedResults == null)
			return 0;                       // Return 0 if there are no results to load 
		else
			if (feedResults.length > topStories)
				return (feedResults.length-topStories);         // Else return the number of headlined items (default: 3)
			else
				return 0;
	},
    
    // The List calls this method once for every row.
	prepareRow: function(rowElement, rowIndex, templateElements) {
		var tempRow = rowIndex + topStories;
		if (templateElements.secondHeadlineTitle) {
			templateElements.secondHeadlineTitle.innerHTML = extractHTML(feedResults[tempRow].title);
		}

    
		// We also assign an onclick handler that will cause the browser to go to the detail page.
		var self = this;
		var handler = function() {

pageTracker._trackEvent('Headline', 'Bottom', extractHTML(feedResults[tempRow].band));

			detailController.setRepresentedObject(tempRow);

			document.getElementById("StackLayout").object.setCurrentView("showPage", false, true);
			document.getElementById("stackLayout").object.setCurrentView("songProgressLoad", false);
		};
		rowElement.onclick = handler;
	}
};







var detailController = {
    // This object acts as a controller for the detail UI.
    
	setRepresentedObject: function(representedObject) {

    this._representedObject = representedObject;

pageTracker._trackEvent('Concert', 'Venue', extractHTML(feedResults[this._representedObject].venue));


	var newurl = 'http://setbreakmusic.com/drupal/concerts/070109songDetailsRSS.php?inputfile=' + extractText( feedResults[this._representedObject].ident );
	songLoad(newurl);


    var backLinkTop1 = document.getElementById('backToHeadlinesTop1');
    backLinkTop1.object.onclick = function() {
        document.getElementById("StackLayout").object.setCurrentView("frontPage", true);
    };


	var backToSongsButton = document.getElementById('backToSongsTop');
    var moreLinkTop1 = document.getElementById('readMoreTop1');
	backToSongsButton.style.display = "none";
	moreLinkTop1.style.display = "inline";

    moreLinkTop1.object.onclick = function() {
		moreLinkTop1.style.display = "none";
		backToSongsButton.style.display = "inline";
        document.getElementById("stackLayout").object.setCurrentView("showView", false);
    };

    backToSongsButton.object.onclick = function() {
		backToSongsButton.style.display = "none";
		moreLinkTop1.style.display = "inline";
        document.getElementById("stackLayout").object.setCurrentView("songListView", false);
    };



    var title = document.getElementById('articleTitle');
    title.innerHTML = extractHTML( feedResults[this._representedObject].band );

    var src = document.getElementById('articleSrc');
    src.innerHTML = "<image src='http://www.setbreakmusic.com/images/" + extractHTML( feedResults[this._representedObject].src ) + "' width='30' height='30' />";

    var band = document.getElementById('articleBand');
    band.innerHTML = extractHTML( feedResults[this._representedObject].venue );
    var article = document.getElementById('articleDescription');
    article.innerHTML = extractHTML( feedResults[this._representedObject].description );
    var date = document.getElementById('articleDate');
    date.innerText = "Recorded on " + createDateStr(feedResults[this._representedObject].date);
	
	
	
    var concertImage = document.getElementById('articleImage');
    concertImage.innerHTML = '<img width="240" style="padding-right:3px;float:center;" src="http://www.archive.org/services/get-item-image.php?identifier=' + extractHTML( feedResults[this._representedObject].ident ) + '&amp;mediatype=etree"/>';

    var setlist = document.getElementById('articleSetlist');
    setlist.innerHTML = extractHTML( feedResults[this._representedObject].setlist );
    var lineage = document.getElementById('articleLineage');
    lineage.innerHTML = extractHTML( feedResults[this._representedObject].lineage );
    var notes = document.getElementById('articleNotes');
    notes.innerHTML = extractHTML( feedResults[this._representedObject].notes );
	
	}
};









// This object implements the dataSource methods for the list.
var songList = {
    
    // The List calls this method to find out how many rows should be in the list.
	numberOfRows: function() {
		if (songFeedResults == null)
			return 0;           // Return 0 if there are no results to load 
		else
				return songFeedResults.length;
	},
    
    // The List calls this method once for every row.
prepareRow: function(rowElement, rowIndex, templateElements) {

	if (songFeedResults[rowIndex].description) {


		if (templateElements.songTitle) {
			templateElements.songTitle.innerHTML = extractHTML(songFeedResults[rowIndex].band);
		}

    
		if (templateElements.songDescription) {
			templateElements.songDescription.innerHTML = extractText(songFeedResults[rowIndex].description);
		}
    
		if (templateElements.songSrc) {
			templateElements.songSrc.innerHTML = extractHTML(songFeedResults[rowIndex].track);
		}

		if (templateElements.songVenue) {
			templateElements.songVenue.innerHTML = extractHTML(songFeedResults[rowIndex].venue);
		}


	} else {
											
											
		if (templateElements.songTitle) {
			templateElements.songTitle.style.display = "none";
		}

    
		if (templateElements.songDescription) {
			templateElements.songDescription.style.display = "none";
		}
    
		if (templateElements.songSrc) {
			templateElements.songSrc.innerHTML = extractHTML(songFeedResults[rowIndex].track);
		}

		if (templateElements.songVenue) {
			templateElements.songVenue.innerHTML = extractHTML(songFeedResults[rowIndex].venue);
		}
											
		if (templateElements.songTitle2) {
			templateElements.songTitle2.style.visibility = "visible";
			templateElements.songTitle2.innerHTML = extractHTML(songFeedResults[rowIndex].band);
		}
											
	}




    // We also assign an onclick handler that will cause the browser to go to the detail page.
	var self = this;
    var handler = function() {

pageTracker._trackEvent('Song', 'Title', extractHTML(songFeedResults[rowIndex].band));

		var lyrics = document.getElementById('songLyrics');
		var playImage = document.getElementById('songLyrics2');

		var mp3file = extractText(songFeedResults[rowIndex].link);
		mp4id = extractText(songFeedResults[rowIndex].track);

		var QTlyrics = QT_GenerateOBJECTText( mp3file,'128','16','','controller','false','scale','aspect');
		playImage.innerHTML = makeqtvjer1(songFeedResults[rowIndex].track);
//		lyrics.innerHTML = extractHTML(songFeedResults[rowIndex].lyrics);
		lyrics.innerHTML = '';
		lyrics.style.display = "none";
		var songTitle3 = document.getElementById('songTitle3');

		songTitle3.innerHTML = extractHTML(songFeedResults[rowIndex].band);


		var songDescription2 = document.getElementById('songDescription2');

		songDescription2.innerHTML = extractHTML(songFeedResults[rowIndex].description);

		var backToSongsButton = document.getElementById('backToSongsTop');
		var moreLinkTop1 = document.getElementById('readMoreTop1');
		moreLinkTop1.style.display = "none";
		backToSongsButton.style.display = "inline";


		detailSongController.setRepresentedObject(rowIndex);

		document.getElementById("stackLayout").object.setCurrentView("songLyricsView", false, true);
    };
    rowElement.onclick = handler;
}
};












var detailSongController = {
    // This object acts as a controller for the detail UI.
    
	setRepresentedObject: function(representedObject) {
		this._representedObject = representedObject;
		var theRowIndex  = representedObject;

pageTracker._trackEvent('Song', 'Lyrics', extractHTML(songFeedResults[theRowIndex].band));

		var lyrics = document.getElementById('songLyrics');

		var mp3file = extractText(songFeedResults[theRowIndex].link);

		mp4id = extractText(songFeedResults[theRowIndex].track);

		var QTlyrics = QT_GenerateOBJECTText( mp3file,'128','16','','controller','false','scale','aspect');

	
		var self = this;


	}
};






if (1==1) {



// This object implements the dataSource methods for the list.
var searchList1 = {
	
	// Sample data for the content of the list. 
	// Your application may also fetch this data remotely via XMLHttpRequest.
	_rowData: ["Item 1", "Item 2", "Item 3"],
	
	// The List calls this method to find out how many rows should be in the list.
	numberOfRows: function() {
		if (bandFeedResults == null)
			return 0;           // Return 0 if there are no results to load 
		else
			if (bandFeedResults.length > topStories)
				return bandFeedResults.length;
			else
				return bandFeedResults.length;
	},
    
	
	// The List calls this method once for every row.
	prepareRow: function(rowElement, rowIndex, templateElements) {
		if (templateElements.label1) {
			templateElements.label1.innerHTML = extractHTML(bandFeedResults[rowIndex].dispband);
		}

		// Assign a click event handler for the row.
		rowElement.onclick = function(event) {
			document.getElementById("searchfield").value = extractHTML(bandFeedResults[rowIndex].band);
			filterString = extractHTML(bandFeedResults[rowIndex].band);          // String to filter results while searching
			feedResults = filterEntries(fullFeedResults);

pageTracker._trackEvent('Search', 'Band', extractHTML(bandFeedResults[rowIndex].band));

			document.getElementById("headlineList").object.reloadData();
			document.getElementById("secondHeadlines").object.reloadData();
			document.getElementById("StackLayout").object.setCurrentView("frontPage", false);
	showInfoButton2.style.display = "inline";
		};
	}
};

} // end if 1 is 1

if (1==1) {


// This object implements the dataSource methods for the list.
var searchList = {
	
	// Sample data for the content of the list. 
	// Your application may also fetch this data remotely via XMLHttpRequest.
	_rowData: ["Item 1", "Item 2", "Item 3"],
	
	// The List calls this method to find out how many rows should be in the list.
	numberOfRows: function() {
		if (yearFeedResults == null)
			return 0;           // Return 0 if there are no results to load 
		else
			if (yearFeedResults.length > topStories)
				return yearFeedResults.length;
			else
				return yearFeedResults.length;
	},
    
	
	// The List calls this method once for every row.
	prepareRow: function(rowElement, rowIndex, templateElements) {
		if (templateElements.label) {
			templateElements.label.innerHTML = extractHTML(yearFeedResults[rowIndex].year);
		}

		if (templateElements.yearsearch) {
			templateElements.yearsearch.innerHTML = extractHTML(yearFeedResults[rowIndex].year);
		}

		// Assign a click event handler for the row.
		rowElement.onclick = function(event) {
			document.getElementById("searchfield").value = extractHTML(yearFeedResults[rowIndex].year);
			filterString = extractHTML(yearFeedResults[rowIndex].year);          // String to filter results while searching
			feedResults = filterEntries(fullFeedResults);
            
            pageTracker._trackEvent('Search', 'Year', extractHTML(yearFeedResults[rowIndex].year));

            
			document.getElementById("headlineList").object.reloadData();
			document.getElementById("secondHeadlines").object.reloadData();
			document.getElementById("StackLayout").object.setCurrentView("frontPage", true);
	showInfoButton2.style.display = "inline";
		};
	}
};

} // end if 1 is 1

function showsbyartist(event)
{
    // Insert Code Here
}


//
// Function: flipToSettings(event)
// Flip to the back view to present user customizable settings
//
function flipToSettings2(event)
{
    var views = document.getElementById('StackLayout');
    var infoView = document.getElementById('infoView');
    if (views && views.object && infoView) {
        views.object.setCurrentView(infoView,true);
    }
}


