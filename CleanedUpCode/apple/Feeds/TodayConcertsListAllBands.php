<?php echo '<?xml version="1.0"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">'; ?>
<channel><atom:link href="http://www.setbreakmusic.com/drupal/todayfeedwithpic0601" rel="self" type="application/rss+xml" /><title>Setbreak Music - This Day In History</title><description>Shows that were played on this day in history from Setbreakmusic.com</description><link>http://www.setbreakmusic.com/drupal/todayfeedwithpic0601</link><image><url>http://www.setbreakmusic.com/drupal/iPhoneButtons/images/rightButton.png</url><title>Setbreak Music - This Day In History</title><link>http://www.setbreak.com/iphonetdidhRSSfeedLink.php</link></image><? include("dbinfodrupal.inc.php");
// mysql_connect(localhost,$user,$password);
// @mysql_select_db($database) or die( "Unable to select database");
$day=$_GET['day'];
$month=$_GET['month'];
if ($day=='') {
$day=date("d");
}
if ($month=='') {
$month=date("m");
} 

//  Array to convert XML entities back to plain text.
$XmlEntities = array(
    '&#13;' => '<BR>',
    '&amp;'  => '&',
    '&lt;'   => '<',
    '&gt;'   => '>',
    '&apos;' => '\'',
    '&quot;' => '"',
);



// $queryGDSHOWS=" SELECT * FROM gdshows WHERE month='$month' AND day='$day'";
// $querySHOWS=" SELECT * FROM shows WHERE show_month='$month' AND show_day='$day'";






// $querySHOWS=" SELECT * FROM shows WHERE show_month='$month' AND show_day='$day' ORDER BY show_date DESC";

// this one
// $querySHOWS=" SELECT * FROM shows WHERE show_month='$month' AND show_day='$day' ORDER BY show_date DESC, band ASC";







// $querySHOWS=" SELECT * FROM shows WHERE show_month='$month' AND show_day='$day' ORDER BY show_date ASC";

// $querySHOWS=" SELECT * FROM concertshows WHERE show_month='$month' AND show_day='$day' ORDER BY show_date ASC, band ASC, sbd DESC";

 $querySHOWS=" SELECT * FROM concertshows WHERE show_month='$month' AND show_day='$day' ORDER BY show_year ASC, band ASC, sbd ASC";


$result=mysql_query($querySHOWS);

$num=mysql_numrows($result);

$lastBand="firstband";
$lastYear="firstyear";

$lastUnique="firstone";

$i=0;
while ($i < $num) {

$showid=mysql_result($result,$i,"id");

$show_path=mysql_result($result,$i,"show_path");
$identifier=$show_path;

    $identifier = str_replace("http://www.archive.org/download/", "", $identifier);
    $identifier = str_replace("/", "", $identifier);

// $source=mysql_result($result,$i,"stream_path");





//  $src='AUD';


// $lowersource=strtolower($source);
// $srccompare1='sbd';
// $srccompare2='soundboard';


// if (strpos($lowersource, $srccompare1)!==FALSE) {
// $src='SBD';
// }


// if (strpos($lowersource, $srccompare2)!==FALSE) {
// $src='SBD';
// }


// if (strpos($identifier, $srccompare1)!==FALSE) {
// $src='SBD';
// }

			$sbd=mysql_result($result,$i,"sbd");


if ($sbd=='SBD') {
$sourcepic='sbd.gif';
} else {
$sourcepic='aud.gif';
}



		$date=mysql_result($result,$i,"show_date");
		$day=mysql_result($result,$i,"show_day");
		$month=mysql_result($result,$i,"show_month");
		$year=mysql_result($result,$i,"show_year");
		$band=mysql_result($result,$i,"band");
		$venue=mysql_result($result,$i,"venue");
		$description=mysql_result($result,$i,"description"); 
        $description = html_entity_decode($description);
		$description= strtr($description, $XmlEntities);        


 			$setlist=mysql_result($result,$i,"setlist");
			$lineage=mysql_result($result,$i,"lineage");
			$notes=mysql_result($result,$i,"notes");
			$source=mysql_result($result,$i,"source");

        $setlist = html_entity_decode($setlist);
		$setlist= strtr($setlist, $XmlEntities);        

        $source = html_entity_decode($source);
		$source= strtr($source, $XmlEntities);        

        $lineage = html_entity_decode($lineage);
		$lineage= strtr($lineage, $XmlEntities);        

        $notes = html_entity_decode($notes);
		$notes= strtr($notes, $XmlEntities);        

	$unique = $year.$band.$sbd;
    $unique = trim($unique);

  if(stristr($unique, $lastUnique) === FALSE) {
		
//  } else {


//				if (
//				(($band != $lastBand) && ($year != $lastYear)) 
//				|| (($band == $lastBand) && ($year != $lastYear)) 
//				|| (($band != $lastBand) && ($year == $lastYear)) 
//					){


           ?><item><title><![CDATA[<image src="http://www.setbreakmusic.com/images/<? echo $sourcepic; ?>" height="15" width="15" /><?php echo $band; ?> Live at <? echo $venue; ?> on <? echo $date; ?>]]></title><description><![CDATA[<?php // echo $source; ?><?php echo $description; ?><br>]]></description><src><![CDATA[<? echo $sourcepic; ?>]]></src><venue><![CDATA[<?php echo $venue; ?>]]></venue><year><![CDATA[<?php echo $year; ?>]]></year>
				<ident><?php echo $identifier; ?></ident>
		   
		   <band><![CDATA[<?php echo $band; ?>]]></band>
				<source><![CDATA[<?php echo $source; ?>]]></source>
				<setlist><![CDATA[<?php  echo $setlist; ?>]]></setlist>
				<lineage><![CDATA[<?php  echo $lineage; ?>]]></lineage>
				<notes><![CDATA[<?php  echo $notes; ?>]]></notes>
		   <pubDate><? // echo date("r"); ?><? echo $date; ?></pubDate><link>http://www.setbreakmusic.com/drupal/songdetailsallrightgoodpic.php?inputfile=<?php echo $identifier; ?></link><guid>http://www.setbreakmusic.com/drupal/songdetailsallrightgoodpic.php?inputfile=<?php echo $identifier; ?></guid></item><?php	

// end if all that
				}

//	}

$lastBand = $band;
$lastYear = $year;
$lastUnique = $unique;

$i++;
}

?></channel></rss>