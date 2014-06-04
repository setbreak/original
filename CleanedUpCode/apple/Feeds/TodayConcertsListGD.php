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


// THIS ONE $querySHOWS=" SELECT * FROM shows WHERE show_month='$month' AND show_day='$day' ORDER BY show_year DESC, band ASC";


$querySHOWS=" SELECT * FROM archivegdshowsNEW WHERE month='$month' AND day='$day'  ORDER BY date DESC, sbd DESC";


// $querySHOWS=" SELECT * FROM archivegdshowsNEW WHERE show_month='$month' AND show_day='$day' ORDER BY show_year DESC, band ASC";

// $querySHOWS=" SELECT * FROM shows WHERE show_month='$month' AND show_day='$day' ORDER BY show_date ASC";

// $querySHOWS=" SELECT * FROM concertshows WHERE show_month='$month' AND show_day='$day' ORDER BY show_date ASC";


$result=mysql_query($querySHOWS);

$num=mysql_numrows($result);


$i=0;
while ($i < $num) {

$showid=mysql_result($result,$i,"id");
// $date=mysql_result($result,$i,"id");
// $day=mysql_result($result,$i,"id");
// $month=mysql_result($result,$i,"id");
// $year=mysql_result($result,$i,"id");
// $setlist=mysql_result($result,$i,"id");
// $identifier=mysql_result($result,$i,"id");
// $title=mysql_result($result,$i,"id");
// $source=mysql_result($result,$i,"id");
// $description=mysql_result($result,$i,"id");

$identifier=mysql_result($result,$i,"identifier");
// $identifier=$show_path;

//    $identifier = str_replace("http://www.archive.org/download/", "", $identifier);
//    $identifier = str_replace("/", "", $identifier);
$source=mysql_result($result,$i,"source");





  $src='AUD';


$lowersource=strtolower($source);
$srccompare1='sbd';
$srccompare2='soundboard';


if (strpos($lowersource, $srccompare1)!==FALSE) {
$src='SBD';
}


if (strpos($lowersource, $srccompare2)!==FALSE) {
$src='SBD';
}


if (strpos($identifier, $srccompare1)!==FALSE) {
$src='SBD';
}



if ($src=='SBD') {
$sourcepic='sbd.gif';
} else {
$sourcepic='aud.gif';
}



		$date=mysql_result($result,$i,"date");
		$day=mysql_result($result,$i,"day");
		$month=mysql_result($result,$i,"month");
		$year=mysql_result($result,$i,"year");
		$band="Grateful Dead";
// 		$band=mysql_result($result,$i,"band");
		$venue=mysql_result($result,$i,"venue");
		$description=mysql_result($result,$i,"description"); 
//		$description=mysql_result($result,$i,"setlist"); 
        $description = html_entity_decode($description);
		$description= strtr($description, $XmlEntities);        
//		$description=mysql_result($result,$i,"setlist"); 

			$setlist=mysql_result($result,$i,"setlist");
			$lineage=mysql_result($result,$i,"lineage");
			$notes=mysql_result($result,$i,"notes");
			$sbd=mysql_result($result,$i,"sbd");

        $setlist = html_entity_decode($setlist);
		$setlist= strtr($setlist, $XmlEntities);        

        $lineage = html_entity_decode($lineage);
		$lineage= strtr($lineage, $XmlEntities);        

        $notes = html_entity_decode($notes);
		$notes= strtr($notes, $XmlEntities);        

			?><item>
				<title><![CDATA[<image src="http://www.setbreakmusic.com/images/<? echo $sourcepic; ?>" height="15" width="15" /><?php echo $band; ?> Live at <? echo $venue; ?> on <? echo $date; ?>]]></title>
				<description><![CDATA[<?php echo $description; ?>]]></description>
				<src><![CDATA[<? echo $sourcepic; ?>]]></src>
				<venue><![CDATA[<?php echo $venue; ?>]]></venue>
				<year><![CDATA[<?php echo $year; ?>]]></year>
				<ident><?php echo $identifier; ?></ident>
				<band><![CDATA[<?php echo $band; ?>]]></band>
				<source><![CDATA[<?php echo $source; ?>]]></source>
				<setlist><![CDATA[<?php  echo $setlist; ?>]]></setlist>
				<lineage><![CDATA[<?php  echo $lineage; ?>]]></lineage>
				<notes><![CDATA[<?php  echo $notes; ?>]]></notes>
				<pubDate><? // echo date("r"); ?><? echo $date; ?></pubDate>
				<link>http://www.setbreakmusic.com/drupal/songdetailsallrightgoodpic.php?inputfile=<?php echo $identifier; ?></link>
				<guid>http://www.setbreakmusic.com/drupal/songdetailsallrightgoodpic.php?inputfile=<?php echo $identifier; ?></guid>
<?

if (1==2) {


$query=" SELECT * FROM archivegdsongsNEW WHERE show_identifier='$identifier' ORDER BY song_order ASC";
$result2=mysql_query($query);

$num2=mysql_numrows($result2);

$j=0;
while ($j < $num2) {

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

?>
		<song order="<?php echo $song_order; ?>" href="<?php echo $full_path; ?>" ><![CDATA[<?php echo $displayname; ?>]]></song>

<?




$j++;
}


} // end if 1 is 2

?>
			</item><?php	



//	}


$i++;
}

?></channel></rss>