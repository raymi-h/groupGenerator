
$(document).ready(function()
{
	$("#submit").click( function() {
		$("#output").html(group($("#list").val(), $("#count").val()));
	});
});

function group( inList, count) {
	var out		= "";
	var list	= inList.split("\n");
	list		= shuffle(list);
	counter		= 0;
	counter2	= 0;
	groupNum	= 1;
	if ( list.length < count ) {
		return "Too many groups!";
	}
	out = out.concat("<h3>group 1</h3>");
	while ( counter < list.length ) {
		if ( counter2 >= list.length / count && groupNum <= count) {
			out = out.concat("<h3>group ");
			out = out.concat(groupNum + 1);
			out = out.concat("</h3>");
			groupNum = groupNum + 1;
			counter2 -= list.length / count;
		}
		out = out + list[counter ];
		out = out + "<br />";
		counter = counter + 1;
		counter2= counter2 + 1;
	}
	return out;
}

function shuffle(array) {		//this function taken from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
