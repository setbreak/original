
<!--
google_ad_client = "pub-0558203544415898";
/* 250x250, created 7/8/09 */
google_ad_slot = "7916131313";
google_ad_width = 250;
google_ad_height = 250;
//-->

// var mp4id = 1;

var newobPlay = '';
var newob4 = '';

	function makeqtvjer1(mp4id) {
// var mp4id = 3;

var mp4id = mp4id - 1;

var jeremy = "jeremy";
// var totalsongs = 10;
var totalsongs = songList.numberOfRows();

if (totalsongs > 0) {
totalsongs = totalsongs-1;
}

var newJer='';
// var newobPlayJer='';


newob1='<EM';
newob2='BED S';
newob3='RC=';

newJer='"'+extractText(songFeedResults[mp4id].link)+'" autostart="false"  ';


// newJer='"'+extractText(songFeedResults[mp4id].link)+'" autostart="false" WIDTH="30" HEIGHT="30" ';

songposition=1;
currentsong=mp4id;
reaminingsongs=totalsongs-mp4id;
nextsong=currentsong;
// nextsong=mp4id+1;
while (totalsongs > currentsong) {
nextsong++;
newJer=newJer+' QTNEXT';
newJer=newJer+songposition;
newJer=newJer+'="<';
newJer=newJer+extractText(songFeedResults[nextsong].link);
newJer=newJer+'> T<myself>" ';
currentsong++;
// nextsong++;
songposition++;
}

  newJer=newJer+' />';

 newobPlayJer = ''+newob1 +''+newob2+''+newob3+''+newJer;


return newobPlayJer;

}





//
// Function: flipToFront(event)
// Flip to the front view to show the normal utility view
//
function flipToSong(event)
{
    var views = document.getElementById('stackLayout');
    var songView = document.getElementById('songView');
    if (views && views.object && songView) {
        views.object.setCurrentView(songView, true);
    }
}

//
// Function: flipToSettings(event)
// Flip to the back view to present user customizable settings
//
function flipToLyrics(event)
{
    var views = document.getElementById('stackLayout');
    var songLyricsView = document.getElementById('songLyricsView');
    if (views && views.object && songLyricsView) {
        views.object.setCurrentView(songLyricsView);
    }
}


//
// Function: flipToSettings(event)
// Flip to the back view to present user customizable settings
//
function flipToSongList(event)
{
    var views = document.getElementById('stackLayout');
    var songListView = document.getElementById('songListView');
    if (views && views.object && songListView) {
        views.object.setCurrentView(songListView,true);
    }
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



	function showtheShow(showIdent) {

var url='http://www.setbreakmusic.com/drupal/sogdetailsallrightgoodpic.php?inputfile='+showIdent;


  if (document.getElementById) {
    var x = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
  }
  if (x) {
    x.onreadystatechange = function() {
      if (x.readyState == 4 && x.status == 200) {
        el = document.getElementById('textShow');
        el.innerHTML = x.responseText;
      }
    }
    x.open("GET", url, true);
    x.send(null);
  }

}


function ajaxLoader(url) {


  if (document.getElementById) {
    var x = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
  }
  if (x) {
    x.onreadystatechange = function() {
      if (x.readyState == 4 && x.status == 200) {
       el = document.getElementById('textShow');
		  el.innerHTML = x.responseText;
      }
    }
    x.open("GET", url, true);
    x.send(null);
  }
}


function adLoader() {

var url='http://setbreakmusic.com/drupal/concerts/ad.php';

  if (document.getElementById) {
    var x = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
  }
  if (x) {
    x.onreadystatechange = function() {
      if (x.readyState == 4 && x.status == 200) {
//        el = document.getElementById('textShow');
//        el = document.getElementById('articleNotes');
        el = document.getElementById('footer');
        el.innerHTML = x.responseText;
      }
    }
    x.open("GET", url, true);
    x.send(null);
  }
}

var topStories = parseInt(attributes.topStories);       // The number of stories featured in the top section
// var topStories = 20;       // The number of stories featured in the top section

//
// Function: load()
// Called by HTML body element's onload event when the web application is ready to start
//
function load()
{
//    rssLoad();
    dashcode.setupParts();
//	document.getElementById("horizontalLevelIndicator").object.setValue(1);
//	var indicator1 = document.getElementById("indicator1");
//	indicator1.object.setValue(10);
//	document.getElementById("indicator1").object.setValue(10);
    document.getElementById("StackLayout").object.setCurrentView("progressLoad", false);
     rssLoad();



//    document.getElementById("headlineList").object.onchange = function() {
//if ((filterString=="") || (filterString==" ")) {
//	document.getElementById("indicator1").object.setValue(1);
//} else {
//	document.getElementById("indicator1").object.setValue(15);
//}
// };
   
    var todaysDate = document.getElementById("todaysDate");
    todaysDate.innerText = createDateStr(new Date()).toUpperCase();

    adLoader();
//	var newfeedURL="http://setbreakmusic.com/drupal/concerts/todayfeedwithpic0705.php";
 var searchfield = document.getElementById("searchfield");	// replace with ID of search field
    searchfield.onchange = function() {
 filterString = searchfield.value;          // String to filter results while searching
//	document.getElementById("horizontalLevelIndicator").object.setValue(15);
//    document.getElementById("StackLayout").object.setCurrentView("progressLoad", false);
 //   fetchFeed();
if ((filterString=="") || (filterString==" ")) {
//	document.getElementById("indicator1").object.setValue(1);
} else {
//	document.getElementById("indicator1").object.setValue(15);
}
        feedResults = filterEntries(fullFeedResults);
//        document.getElementById("list").object.reloadData();
        document.getElementById("headlineList").object.reloadData();
        document.getElementById("secondHeadlines").object.reloadData();
//        document.getElementById("songList").object.reloadData();
    document.getElementById("StackLayout").object.setCurrentView("frontPage", false);
//	document.getElementById("horizontalLevelIndicator").object.setValue(1);
};


    searchfield.onfocus = function() {
//	searchfield.value = "";
//	document.getElementById("horizontalLevelIndicator").object.setValue(15);
//	document.getElementById("indicator").object.setValue(15);
};

//		searchfield.style.display = "none";

//    var textClickToSearch = document.getElementById("textClickToSearch");
//    textClickToSearch.onclick = function() {

//		textClickToSearch.style.display = "none";
//		searchfield.style.display = "inline";


// };

    var showInfoButton = document.getElementById("showInfoButton");
    showInfoButton.object.onclick = function() {
 filterString = "";          // String to filter results while searching
        feedResults = filterEntriesBand(fullFeedResults);
//        document.getElementById("list").object.reloadData();
//    document.getElementById("StackLayout").object.setCurrentView("infoView", false);
        document.getElementById("searchList").object.reloadData();
    document.getElementById("StackLayout").object.setCurrentView("searchView", false);
//	document.getElementById("indicator").object.setValue(15);
//	document.getElementById("horizontalLevelIndicator").object.setValue(15);

};




    var showInfoButton1 = document.getElementById("showInfoButton1");
showInfoButton1.object.onclick = function() {
// filterString = "";          // String to filter results while searching
//        feedResults = filterEntriesBand(fullFeedResults);
	var newfeedURL="http://setbreakmusic.com/drupal/concerts/todayfeedwithpic0707.php?day=16";
    setFeedSource(newfeedURL);
    document.getElementById("StackLayout").object.setCurrentView("progressLoad", false);
    fetchFeed();
};


// Values you provide
// var indicatorToChange = document.getElementById("indicator");	// replace with ID of indicator to change
// var newIndicatorValue = 1;									// new indicator value

// Indicator code
// indicatorToChange.object.setValue(newIndicatorValue);



if (1==2) {

    var srcLoadButton = document.getElementById("srcLoadButton");
    srcLoadButton.object.onclick = function() {


// Search field code
// searchFieldValue = searchFieldValue.value;
 var searchfield = document.getElementById("searchfield");	// replace with ID of search field

 filterString = searchfield.value;          // String to filter results while searching

// if (newfeedURL == "http://setbreakmusic.com/drupal/concerts/todayfeedwithpic0705.php") {
//	 newfeedURL="http://setbreakmusic.com/drupal/concerts/todayfeedwithpic0703.php";
// } else {
//	 newfeedURL="http://setbreakmusic.com/drupal/concerts/todayfeedwithpic0705.php";
// }
//    setFeedSource(newfeedURL);
    document.getElementById("StackLayout").object.setCurrentView("progressLoad", false);
    fetchFeed();
    };


// }






// This object implements the dataSource methods for the list.
var list = {
    
    // The List calls this method to find out how many rows should be in the list.
numberOfRows: function() {
    if (feedResults == null)
        return 0;           // Return 0 if there are no results to load 
    else
        if (feedResults.length > topStories)
            return topStories;          // Else return the number of headlined items (default: 3)
        else
            return feedResults.length;
},
    
    // The List calls this method once for every row.
prepareRow: function(rowElement, rowIndex, templateElements) {
    // The List calls this dataSource method for every row.  templateElements contains references to all elements inside the template that have an id. We use it to fill in the text of the rowTitle element.

    if (templateElements.labelFullBand) {
        templateElements.labelFullBand.innerHTML = extractHTML(feedResults[rowIndex].band);
    }

    // We also assign an onclick handler that will cause the browser to go to the detail page.
    var self = this;
    var handler = function() {
//        detailController.setRepresentedObject(rowIndex);

if (1==2) {
    var searchfield = document.getElementById("searchfield");

// Values you provide
var searchFieldToChange = document.getElementById("searchfield");	// replace with ID of search field
var newSearchFieldText = extractHTML(feedResults[rowIndex].band);						// value to change range to

// Search field code
searchFieldToChange.value = newSearchFieldText;

var newSearchFieldText = extractHTML(feedResults[rowIndex].band);						// value to change range to

} // end if 1 is 2

// document.getElementById("searchfield").value = extractHTML(feedResults[rowIndex].band);
 filterString = extractHTML(feedResults[rowIndex].band);          // String to filter results while searching

//  filterString = searchfield.value;          // String to filter results while searching
//    document.getElementById("StackLayout").object.setCurrentView("progressLoad", false);
 //   fetchFeed();

        feedResults = filterEntries(fullFeedResults);
//        document.getElementById("list").object.reloadData();
        document.getElementById("headlineList").object.reloadData();
        document.getElementById("secondHeadlines").object.reloadData();
//        document.getElementById("songList").object.reloadData();
    document.getElementById("StackLayout").object.setCurrentView("frontPage", false);
	document.getElementById("horizontalLevelIndicator").object.setValue(1);
//        document.getElementById("list").object.reloadData();



//        document.getElementById("StackLayout").object.setCurrentView("articlePage", false, true);
//    document.getElementById("stackLayout").object.setCurrentView("songProgressLoad", false);
    };
    rowElement.onclick = handler;
}
};










}// end if 1 is 2

};



// This object implements the dataSource methods for the list.
var headlineList = {
    
    // The List calls this method to find out how many rows should be in the list.
numberOfRows: function() {
    if (feedResults == null)
        return 0;           // Return 0 if there are no results to load 
    else
        if (feedResults.length > topStories)
            return topStories;          // Else return the number of headlined items (default: 3)
        else
            return feedResults.length;
},
    
    // The List calls this method once for every row.
prepareRow: function(rowElement, rowIndex, templateElements) {
    // The List calls this dataSource method for every row.  templateElements contains references to all elements inside the template that have an id. We use it to fill in the text of the rowTitle element.

    if (templateElements.headlineTitle) {
        templateElements.headlineTitle.innerHTML = extractHTML(feedResults[rowIndex].band);
    }

    
    if (templateElements.headlineDescription) {
        templateElements.headlineDescription.innerHTML = createDateStr(parseDate(feedResults[rowIndex].date));
    }
    
    if (templateElements.headlineSrc) {
        templateElements.headlineSrc.innerHTML = "<image src='http://www.setbreak.com/images/" + extractHTML(feedResults[rowIndex].src) + "' width='30' height='30' />";
    }


    if (templateElements.headlineImg) {
//        templateElements.headlineImg.innerHTML = '<img width-"150" height="150" src="http://www.archive.org/services/get-item-image.php?identifier=' + extractHTML( feedResults[rowIndex].ident ) + '&amp;mediatype=etree"/>';
//        templateElements.headlineImg.innerHTML = '<img width="30" style="padding-right:3px;float:center;" src="http://www.archive.org/services/get-item-image.php?identifier=' + extractHTML( feedResults[rowIndex].ident ) + '&amp;mediatype=etree"/>';
//        templateElements.headlineImg.innerHTML = '<img  height="50" style="padding-right:3px;float:center;" src="http://www.archive.org/services/get-item-image.php?identifier=' + extractHTML( feedResults[rowIndex].ident ) + '&amp;mediatype=etree"/>';
    }






    if (templateElements.headlineVenue) {
        templateElements.headlineVenue.innerHTML = extractHTML(feedResults[rowIndex].venue);
    }

    // We also assign an onclick handler that will cause the browser to go to the detail page.
    var self = this;
    var handler = function() {
        detailController.setRepresentedObject(rowIndex);

        document.getElementById("StackLayout").object.setCurrentView("articlePage", false, true);
    document.getElementById("stackLayout").object.setCurrentView("songProgressLoad", false);
    };
    rowElement.onclick = handler;
}
};


// This object implements the dataSource methods for the list.
var secondHeadlineList = {
    
    // The List calls this method to find out how many rows should be in the list.
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
    // templateElements contains references to all elements that have an id in the template row.
    // Ex: set the value of an element with id="label".
    var tempRow = rowIndex + topStories;
    if (templateElements.secondHeadlineTitle) {
        templateElements.secondHeadlineTitle.innerHTML = extractHTML(feedResults[tempRow].title);
    }

    
    // We also assign an onclick handler that will cause the browser to go to the detail page.
    var self = this;
    var handler = function() {
        detailController.setRepresentedObject(tempRow);

        document.getElementById("StackLayout").object.setCurrentView("articlePage", false, true);
    document.getElementById("stackLayout").object.setCurrentView("songProgressLoad", false);
//    document.getElementById("StackLayout").object.setCurrentView("progressLoad", false);
    };
    rowElement.onclick = handler;
}
};

var detailController = {
    // This object acts as a controller for the detail UI.
    
setRepresentedObject: function(representedObject) {
    // To start, the represented object of our detail controller is simply a string, the title of the list row that the user chose.  You may want to make the represented object any kind of object when you customize the template.
    this._representedObject = representedObject;
    
//	var newurl = 'http://setbreakmusic.com/drupal/concerts/070109gratefulDeadSongdetailsRSS.php?inputfile=' + extractText( feedResults[this._representedObject].ident );
    
	var newurl = 'http://setbreakmusic.com/drupal/concerts/070109songDetailsRSS.php?inputfile=' + extractText( feedResults[this._representedObject].ident );
	songLoad(newurl);

	
    // When the represented object is set, this controller also updates the DOM for the detail page appropriately.  As you customize the design for the detail page, you will want to extend this code to make sure that the correct information is populated into the detail UI.
    var backLinkTop1 = document.getElementById('backToHeadlinesTop1');
    backLinkTop1.object.onclick = function() {
        document.getElementById("StackLayout").object.setCurrentView("frontPage", true);
//        document.getElementById("stackLayout").object.setCurrentView("songView", false);
//        document.getElementById("stackLayout").object.setCurrentView("songProgressLoad", false);
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



if (1==2) {

	   var backToSongsButton = document.getElementById('backToSongsTop');
		backToSongsButton.style.visibility = "hidden";
		backToSongsButton.setEnabled = false;
    backToSongsButton.object.onclick = function() {
		backToSongsButton.style.visibility = "hidden";
		backToSongsButton.setEnabled = false;
    var moreLinkTop1 = document.getElementById('readMoreTop1');
		moreLinkTop1.style.visibility = "visible";
		moreLinkTop1.setEnabled = true;
        document.getElementById("stackLayout").object.setCurrentView("songListView", false);
// ajaxLoader(url);
    };




    var self = this;
var url='http://www.setbreakmusic.com/drupal/songdetailsallrightgoodpic.php?inputfile=' + extractText( feedResults[this._representedObject].ident );
    var moreLinkTop1 = document.getElementById('readMoreTop1');
		moreLinkTop1.style.visibility = "visible";
		moreLinkTop1.setEnabled = true;
    moreLinkTop1.object.onclick = function() {
		moreLinkTop1.style.visibility = "hidden";
		moreLinkTop1.setEnabled = false;
//	   var backToSongsButton = document.getElementById('backToSongsTop');
		backToSongsButton.style.visibility = "visible";
		backToSongsButton.setEnabled = true;
        document.getElementById("stackLayout").object.setCurrentView("showView", false);
// ajaxLoader(url);
    };

// end if 1 is 2
}


//    var textShow = document.getElementById('textShow');
//    textShow.innerHTML = extractHTML( feedResults[this._representedObject].ident );

    var title = document.getElementById('articleTitle');
    title.innerHTML = extractHTML( feedResults[this._representedObject].band );
    var src = document.getElementById('articleSrc');
    src.innerHTML = "<image src='http://www.setbreak.com/images/" + extractHTML( feedResults[this._representedObject].src ) + "' width='30' height='30' />";

    var band = document.getElementById('articleBand');
    band.innerHTML = extractHTML( feedResults[this._representedObject].venue );
    var article = document.getElementById('articleDescription');
    article.innerHTML = extractHTML( feedResults[this._representedObject].description );
    var date = document.getElementById('articleDate');
    date.innerText = "Recorded on " + createDateStr(feedResults[this._representedObject].date);
	
	
	
    var concertImage = document.getElementById('articleImage');
//    venue.innerHTML = extractHTML( feedResults[this._representedObject].venue );
    concertImage.innerHTML = '<img width="240" style="padding-right:3px;float:center;" src="http://www.archive.org/services/get-item-image.php?identifier=' + extractHTML( feedResults[this._representedObject].ident ) + '&amp;mediatype=etree"/>';

    var setlist = document.getElementById('articleSetlist');
    setlist.innerHTML = extractHTML( feedResults[this._representedObject].setlist );
    var lineage = document.getElementById('articleLineage');
    lineage.innerHTML = extractHTML( feedResults[this._representedObject].lineage );
    var notes = document.getElementById('articleNotes');
    notes.innerHTML = extractHTML( feedResults[this._representedObject].notes );
// adLoader();

	
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
    // The List calls this dataSource method for every row.  templateElements contains references to all elements inside the template that have an id. We use it to fill in the text of the rowTitle element.

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
//		moreLinkTop1.style.display = "inline";
//        templateElements.songTitle.innerHTML = extractHTML(songFeedResults[rowIndex].band);
    }

    
    if (templateElements.songDescription) {
		templateElements.songDescription.style.display = "none";
//        templateElements.songDescription.innerHTML = extractText(songFeedResults[rowIndex].description);
    }
    
    if (templateElements.songSrc) {
//		templateElements.songSrc.style.display = "none";
        templateElements.songSrc.innerHTML = extractHTML(songFeedResults[rowIndex].track);
    }

    if (templateElements.songVenue) {
//		templateElements.songVenue.style.display = "none";
        templateElements.songVenue.innerHTML = extractHTML(songFeedResults[rowIndex].venue);
    }
											
    if (templateElements.songTitle2) {
//		templateElements.songTitle2.style.display = "inline";
		templateElements.songTitle2.style.visibility = "visible";
//		moreLinkTop1.style.display = "inline";
        templateElements.songTitle2.innerHTML = extractHTML(songFeedResults[rowIndex].band);
    }
											
											
											
											
											
											
											
											}




    // We also assign an onclick handler that will cause the browser to go to the detail page.
    var self = this;
    var handler = function() {
   var lyrics = document.getElementById('songLyrics');
//   var playImage = document.getElementById('textShow2');
   var playImage = document.getElementById('songLyrics2');

var mp3file = extractText(songFeedResults[rowIndex].link);
mp4id = extractText(songFeedResults[rowIndex].track);

 var QTlyrics = QT_GenerateOBJECTText( mp3file,'128','16','','controller','false','scale','aspect');
	playImage.innerHTML = makeqtvjer1(songFeedResults[rowIndex].track);
//	lyrics.innerHTML = makeqtvjer1(songFeedResults[rowIndex].track);
	lyrics.innerHTML = extractHTML(songFeedResults[rowIndex].lyrics);
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
    // To start, the represented object of our detail controller is simply a string, the title of the list row that the user chose.  You may want to make the represented object any kind of object when you customize the template.
    this._representedObject = representedObject;
		var theRowIndex  = representedObject;


if (1==2) {

	   var moreLinkTop1 = document.getElementById('readMoreTop1');
		moreLinkTop1.style.visibility = "hidden";
		moreLinkTop1.setEnabled = false;

	   var backToSongsButton = document.getElementById('backToSongsTop');
		backToSongsButton.style.visibility = "visible";
		backToSongsButton.setEnabled = true;
//		backToSongsButton.setEnabled();
		

// end if 1 is 2
}


	   var lyrics = document.getElementById('songLyrics');
//   var playImage = document.getElementById('textShow2');

var mp3file = extractText(songFeedResults[theRowIndex].link);

 mp4id = extractText(songFeedResults[theRowIndex].track);

 var QTlyrics = QT_GenerateOBJECTText( mp3file,'128','16','','controller','false','scale','aspect');

//    var button2 = document.getElementById('button2');
//    button2.object.onclick = function() {
// lyrics.innerHTML = QTlyrics;
//		};

	
    // When the represented object is set, this controller also updates the DOM for the detail page appropriately.  As you customize the design for the detail page, you will want to extend this code to make sure that the correct information is populated into the detail UI.
     var self = this;


}
};











if (1==2) {



function flipToSettings(event)
{
    // Insert Code Here
}


function flipToSettings2(event)
{
    // Insert Code Here
}


// This object implements the dataSource methods for the list.
var list = {
	
	// Sample data for the content of the list. 
	// Your application may also fetch this data remotely via XMLHttpRequest.
	_rowData: ["Item 1", "Item 2", "Item 3"],
	
	// The List calls this method to find out how many rows should be in the list.
	numberOfRows: function() {
		return this._rowData.length;
	},
	
	// The List calls this method once for every row.
	prepareRow: function(rowElement, rowIndex, templateElements) {
		// templateElements contains references to all elements that have an id in the template row.
		// Ex: set the value of an element with id="label".
		if (templateElements.label) {
			templateElements.label.innerText = this._rowData[rowIndex];
		}

		// Assign a click event handler for the row.
		rowElement.onclick = function(event) {
			// Do something interesting
			alert("Row "+rowIndex);
		};
	}
};


// This object implements the dataSource methods for the list.
var list = {
	
	// Sample data for the content of the list. 
	// Your application may also fetch this data remotely via XMLHttpRequest.
	_rowData: ["Item 1", "Item 2", "Item 3"],
	
	// The List calls this method to find out how many rows should be in the list.
	numberOfRows: function() {
		return this._rowData.length;
	},
	
	// The List calls this method once for every row.
	prepareRow: function(rowElement, rowIndex, templateElements) {
		// templateElements contains references to all elements that have an id in the template row.
		// Ex: set the value of an element with id="label".
		if (templateElements.label) {
			templateElements.label.innerText = this._rowData[rowIndex];
		}

		// Assign a click event handler for the row.
		rowElement.onclick = function(event) {
			// Do something interesting
			alert("Row "+rowIndex);
		};
	}
};


// This object implements the dataSource methods for the list.
var list = {
	
	// Sample data for the content of the list. 
	// Your application may also fetch this data remotely via XMLHttpRequest.
	_rowData: ["Item 1", "Item 2", "Item 3"],
	
	// The List calls this method to find out how many rows should be in the list.
	numberOfRows: function() {
		return this._rowData.length;
	},
	
	// The List calls this method once for every row.
	prepareRow: function(rowElement, rowIndex, templateElements) {
		// templateElements contains references to all elements that have an id in the template row.
		// Ex: set the value of an element with id="label".
		if (templateElements.label) {
			templateElements.label.innerText = this._rowData[rowIndex];
		}

		// Assign a click event handler for the row.
		rowElement.onclick = function(event) {
			// Do something interesting
			alert("Row "+rowIndex);
		};
	}
};


// This object implements the dataSource methods for the list.
var list = {
	
	// Sample data for the content of the list. 
	// Your application may also fetch this data remotely via XMLHttpRequest.
	_rowData: ["Item 1", "Item 2", "Item 3"],
	
	// The List calls this method to find out how many rows should be in the list.
	numberOfRows: function() {
		return this._rowData.length;
	},
	
	// The List calls this method once for every row.
	prepareRow: function(rowElement, rowIndex, templateElements) {
		// templateElements contains references to all elements that have an id in the template row.
		// Ex: set the value of an element with id="label".
		if (templateElements.label) {
			templateElements.label.innerText = this._rowData[rowIndex];
		}

		// Assign a click event handler for the row.
		rowElement.onclick = function(event) {
			// Do something interesting
			alert("Row "+rowIndex);
		};
	}
};

} // end if 1 is 2


function flipToFrontPage(event)
{
    var views = document.getElementById('StackLayout');
    var frontPage = document.getElementById('frontPage');
    if (views && views.object && frontPage) {
        views.object.setCurrentView(frontPage,false);
    }
}


// This object implements the dataSource methods for the list.
var searchList = {
	
	// Sample data for the content of the list. 
	// Your application may also fetch this data remotely via XMLHttpRequest.
	_rowData: ["Item 1", "Item 2", "Item 3"],
	
	// The List calls this method to find out how many rows should be in the list.
numberOfRows: function() {
    if (feedResults == null)
        return 0;           // Return 0 if there are no results to load 
    else
        if (feedResults.length > topStories)
            return feedResults.length;
        else
            return feedResults.length;
},
    
	
	// The List calls this method once for every row.
	prepareRow: function(rowElement, rowIndex, templateElements) {
		// templateElements contains references to all elements that have an id in the template row.
		// Ex: set the value of an element with id="label".
		if (templateElements.label) {
//			templateElements.label.innerText = this._rowData[rowIndex];
			templateElements.label.innerHTML = extractHTML(feedResults[rowIndex].band);
		}

		// Assign a click event handler for the row.
		rowElement.onclick = function(event) {
document.getElementById("searchfield").value = extractHTML(feedResults[rowIndex].band);
 filterString = extractHTML(feedResults[rowIndex].band);          // String to filter results while searching
        feedResults = filterEntries(fullFeedResults);
//        document.getElementById("list").object.reloadData();
        document.getElementById("headlineList").object.reloadData();
        document.getElementById("secondHeadlines").object.reloadData();
//        document.getElementById("songList").object.reloadData();
    document.getElementById("StackLayout").object.setCurrentView("frontPage", false);
			// Do something interesting
//			alert("Row "+rowIndex);
		};
	}
};
