


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



function flipToFrontPage(event)
{
    var views = document.getElementById('StackLayout');
    var frontPage = document.getElementById('frontPage');
    if (views && views.object && frontPage) {
        views.object.setCurrentView(frontPage,false);
    }
}


