<?php echo '<?xml version="1.0"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">'; ?>
<channel><atom:link href="http://www.setbreakmusic.com/drupal/todayfeedwithpic0601" rel="self" type="application/rss+xml" /><title>Setbreak Music - This Day In History</title><description>Shows that were played on this day in history from Setbreakmusic.com</description><link>http://www.setbreakmusic.com/drupal/todayfeedwithpic0601</link><image><url>http://www.setbreakmusic.com/drupal/iPhoneButtons/images/rightButton.png</url><title>Setbreak Music - This Day In History</title><link>http://www.setbreak.com/iphonetdidhRSSfeedLink.php</link></image><? include("dbinfodrupal.inc.php");

function truncate($string, $chars, $append = '...')
{
$originalString = $string;
$string = substr($string, 0, $chars);
if ($originalString == $string) {
return $string;
} else {
return $string.$append;
}
}



$inputfile=$_GET['inputfile'];
if ($inputfile=="") {
// $inputfile=$NEWinputfile;
 $inputfile="gd83-08-30.senn421.nfagdtrfbyahoo.29342.sbefail.flac16";
}

 $Symbols = array('');

 $SongNameArray = array('');
 $SongFileArray = array('');
 $SongLengthArray = array('');
 $SongWrittenArray = array('');
 $SongLyricsArray = array('');
 $SongIdArray = array('');


$identifier=$inputfile;


$query=" SELECT * FROM archivegdsongsNEW WHERE show_identifier='$identifier' ORDER BY song_order ASC";

// $query=" SELECT * FROM archivegdsongsNEW WHERE show_identifier='$inputfile' ORDER BY song_order ASC";



$result2=mysql_query($query);

$num2=mysql_numrows($result2);



// if (1 == 2) {

if ($num2 > 0) {

// show found in DB


$songnum=$num2;

$j=0;
while ($j < $num2) {
$tracknumber=$j+1;

$songid=mysql_result($result2,$j,"gdsong_id");
$song_name=mysql_result($result2,$j,"song_name");
$displayname=mysql_result($result2,$j,"song_name");

$set_number=mysql_result($result2,$j,"gdset_number");
$song_order=mysql_result($result2,$j,"song_order");
$full_path=mysql_result($result2,$j,"mp3_path");

$blend=mysql_result($result2,$j,"blend");

if ($blend == "Yes") {
$showblend = ' ->';
} else {
$showblend = '';
}

$full_path = str_replace("http://archive.org/", "http://www.archive.org/", $full_path);


$lyricsby=mysql_result($result2,$j,"lyricsby");
$musicby=mysql_result($result2,$j,"musicby");
$length=mysql_result($result2,$j,"length");

$lyrics=mysql_result($result2,$j,"lyrics");


		if (($lyrics=="NO FILE FOUND") || ($lyrics=="")) {
			$lyrics="";
			$displyrics="false";
		} else {
			$lyrics="<BR>".$lyrics."";
			$displyrics="true";
		}

		if (($lyricsby=="") && ($musicby=="")) {
			$songby="";
			$dispsongby="false";
		} else {
			$songby="(".$lyricsby.",".$musicby.")";
			$dispsongby="true";
		}


			$SongNameArray[$tracknumber]=$displayname;
			$SongFileArray[$tracknumber]=$full_path;

			$SongLengthArray[$tracknumber]=$length;

			$SongLyricsArray[$tracknumber]=$lyrics;
			$SongWrittenArray[$tracknumber]=$songby;
			$SongIdArray[$tracknumber]=$id;




$j++;
}


} else {

// show not found in DB





$URI = 'http://archive.org/download/'.$inputfile.'/'.$inputfile.'_files.xml';

$ParserProbs = array();
$DataProbs   = array();

//  Array to convert XML entities back to plain text.
$XmlEntities = array(
    '&amp;'  => '&',
    '&lt;'   => '<',
    '&gt;'   => '>',
    '&apos;' => '\'',
    '&quot;' => '"',
);


/**
 * Runs each time an XML element starts.
 */
function StartHandler(&$Parser, &$Elem, &$Attr) {
    global $Data, $CData, $XmlEntities;

    // Start with empty CData array.
    $CData = array();

    // Put each attribute into the Data array.
    foreach ($Attr as $Key => $Value) {
        $Data["$Elem:$Key"] = strtr(trim($Value), $XmlEntities);

    }
}


/**
 * Runs each time XML character data is encountered.
 */
function CharacterHandler(&$Parser, &$Line) {
    global $CData;

    /*
     * Place lines into an array because elements
     * can contain more than one line of data.
     */
    $CData[] = $Line;
}


/**
 * Runs each time an XML element ends.
 */
function EndHandler(&$Parser, &$Elem) {
    global $Data, $CData, $DataProbs, $Sym, $XmlEntities, $inputfile, $VBR, $MP3, $format, $songnum, $tracknumber, $SongNameArray, $SongFileArray, $SongLengthArray, $SongWrittenArray, $SongIdArray, $SongLyricsArray, $length, $JPG, $SongPixArray;

    /*
     * Mush all of the CData lines into a string
     * and put it into the $Data array.
     */
    $Data[$Elem] = strtr( trim( implode('', $CData) ), $XmlEntities);

    switch ($Elem) {

        case 'FORMAT':
if ($Data[$Elem]=='JPEG') {
$pix_full_path = 'http://archive.org/download/'.$inputfile.'/'.$Data['FILE:NAME'];
$pix_name = $Data['FILE:NAME'];
				$JPG++;



			$SongPixArray[$JPG]=$pix_full_path;



}


























		if ($Data[$Elem]==$format) {
			if ($format=="VBR MP3") {
				$VBR++;
				$songnum++;
			}

			$full_path= 'http://archive.org/download/'.$inputfile.'/'.$Data['FILE:NAME'];


			$displayname=$Data['TITLE'];


			$length=$Data['LENGTH'];



			$tracknumber=$Data['TRACK'];

			if ($tracknumber<10) {
				$tracknumber= str_replace("0", "", $tracknumber);
			}



			$SongNameArray[$tracknumber]=$displayname;
			$SongFileArray[$tracknumber]=$full_path;

			$SongLengthArray[$tracknumber]=$length;


	$sqltitle= $displayname;
	$sqltitle= str_replace("\\", "", $sqltitle);

//	$sqltitle=mysql_real_escape_string($displayname);
	$sqltitle= str_replace(" ->", "", $sqltitle);
	$sqltitle= str_replace(" >", "", $sqltitle);
	$sqltitle= str_replace(">", "", $sqltitle);
	
	$sqltitle=mysql_real_escape_string($sqltitle);
	
	$querySelectSong="SELECT * FROM songlyrics WHERE title='$sqltitle' ORDER BY id ASC";


//	$querySelectSong="SELECT * FROM songlyrics WHERE title LIKE CONVERT(_utf8 '$sqltitle' USING latin1) COLLATE latin1_swedish_ci ORDER BY id ASC";




// $queryGDSHOWS = "SELECT * FROM gdshowsNEW WHERE year LIKE CONVERT(_utf8 '199%' USING latin1) COLLATE latin1_swedish_ci ORDER BY id ASC";




	$resultSelectSong=mysql_query($querySelectSong);
	$numSelectSong=mysql_numrows($resultSelectSong);
	if ($numSelectSong>0) {
		$k=0;
 		while ($k < $numSelectSong) {
			$id=mysql_result($resultSelectSong,$k,"id");
			$lyrics=mysql_result($resultSelectSong,$k,"lyrics");
			$lyricsby=mysql_result($resultSelectSong,$k,"lyricsby");
			$musicby=mysql_result($resultSelectSong,$k,"musicby");
			$k++;
		}



		if (($lyrics=="NO FILE FOUND") || ($lyrics=="")) {
			$lyrics="";
			$displyrics="false";
		} else {
			$lyrics="<BR>".$lyrics."";
			$displyrics="true";
		}

		if (($lyricsby=="") && ($musicby=="")) {
			$songby="";
			$dispsongby="false";
		} else {
			$songby="(".$lyricsby.",".$musicby.")";
			$dispsongby="true";
		}

	} else {
		$id=0;
		$lyrics="";
		$displyrics="false";

		$songby="";
		$dispsongby="false";
	}

// $songby=$length;
			$SongLyricsArray[$tracknumber]=$lyrics;
			$SongWrittenArray[$tracknumber]=$songby;
			$SongIdArray[$tracknumber]=$id;


if (1==2) {

echo "<li><div class=\"button buttonOff\"  onclick=\"javascript:makeqtv2('".$songnum."')\" id=\"".$songnum."\">".$displayname."</div></li>";

 echo "\n";



} // end if 1 is 2


if (1==2) {

echo "<li><div class=\"button buttonOff\"  onclick=\"javascript:makeqtv2('".$tracknumber."')\" id=\"".$tracknumber."\">track ".$tracknumber." song ".$songnum." - ".$displayname."</div></li>";

 echo "\n";



} // end if 1 is 2





		}

//		 echo "\n";
		 break;

  
            /*
             * Double check that all of the needed data was set.
             * If it's not, we don't want to run the query,
             * so skip the rest of this section.
             */

    }

}





// Loop through each ticker symbol.
foreach ($Symbols as $Sym) {

    /*
     * Grab the file and stick it into an array.
     * Next, check to see that you actually got the raw info.
     * Then, implode the raw info into one long string.
     *
     * If your data is already in string form, you don't need these steps.
     *
     * This one step requires PHP to be at version 4.3.0 or later.
     */
	$Contents = @file_get_contents("$URI");
    if (!$Contents) {
        $ParserProbs[] = "$URI$Sym\n    Had problem opening file.";
        /*
         * Start the while loop over again, this time with the
         * next item in the $Symbols array.
         */
        continue;
    }


    $Contents = preg_replace('/&(?!\w{2,6};)/', '&amp;', $Contents);

    $Contents = preg_replace('/[^\x20-\x7E\x09\x0A\x0D]/', "\n", $Contents);

    $Data = array();

    $Parser = xml_parser_create('ISO-8859-1');
    xml_set_element_handler($Parser, 'StartHandler', 'EndHandler');
    xml_set_character_data_handler($Parser, 'CharacterHandler');

 $songnum=0;
 $VBR=0;
 $MP3=0;
 $format="VBR MP3";
 $JPG=0;

    // Pass the content string to the parser.
    if ( !xml_parse($Parser, $Contents, TRUE) ) {
        $ParserProbs[] = "Had problem parsing data for $Sym:\n    "
                . xml_error_string(xml_get_error_code($Parser));
    }

}


// Problems?
if ( count($ParserProbs) ) {
    echo "\n" . implode("\n", $ParserProbs);
}




// end if song not in db
}





$src='SBD';


if ($src=='SBD') {
$sourcepic='sbd.gif';
} else {
$sourcepic='aud.gif';
}





















for ($i = 1; $i <= $songnum; $i++) {

if ($SongNameArray[$i]=="") {
$SongNameArray[$i]="song ".$i;
}

			?><item>
				<title><![CDATA[<?php echo $SongNameArray[$i]; ?>]]></title>
				<track><![CDATA[<?php echo $i; ?>]]></track>
				<description><![CDATA[<?php // echo $SongWrittenArray[$i]; ?><? echo $SongWrittenArray[$i]; ?>]]></description>
				<src><![CDATA[<? echo $sourcepic; ?>]]></src>
				<venue><![CDATA[<?php echo $SongLengthArray[$i]; ?>]]></venue>
				<year><![CDATA[<?php echo $SongNameArray[$i]; ?>]]></year>
				<ident><?php echo $identifier; ?></ident>
				<band><![CDATA[<?php echo $SongNameArray[$i]; ?>]]></band>
				<source><![CDATA[<?php echo $src; ?>]]></source>
				<setlist><![CDATA[<?php  echo $SongNameArray[$i]; ?>]]></setlist>
				<lineage><![CDATA[<?php  echo $SongNameArray[$i]; ?>]]></lineage>
				<notes><![CDATA[<?php  echo $SongNameArray[$i]; ?>]]></notes>
				<lyrics><![CDATA[<?php  echo mysql_real_escape_string($SongLyricsArray[$i]); ?>]]></lyrics>
				<pubDate><?  echo date("r"); ?></pubDate>
				<link><![CDATA[<?php  echo $SongFileArray[$i]; ?>]]></link>
				<guid><![CDATA[<?php  echo $SongFileArray[$i]; ?>]]></guid>				</item><?

}  

?>
</channel></rss>