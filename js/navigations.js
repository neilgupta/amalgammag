// My screwed up dynamic navigation generator!
function fixNav() {
	var navbar = document.getElementById('navbar');
	if (window.location.hash == "#about" || parse_url() == "about") {
		navbar.innerHTML = '<li><a href="." title="Home">Home\</a>\</li><li id="selected"><a href="#about" onclick="loadPage(\'about\'); return false" title="About Amalgam">About\</a>\</li><li><a href="#submit" onclick="loadPage(\'submit\'); return false" title="Submit content to Amalgam">Submit\</a>\</li><li><a href="#contact" onclick="loadPage(\'contact\'); return false" title="Contact Amalgam">Contact\</a>\</li>';
	}
	else if (window.location.hash == "#submit" || parse_url() == "submit") {
		navbar.innerHTML = '<li><a href="." title="Home">Home\</a>\</li><li><a href="#about" onclick="loadPage(\'about\'); return false" title="About Amalgam">About\</a>\</li><li id="selected"><a href="#submit" onclick="loadPage(\'submit\'); return false" title="Submit content to Amalgam">Submit\</a>\</li><li><a href="#contact" onclick="loadPage(\'contact\'); return false" title="Contact Amalgam">Contact\</a>\</li>';
	}
	else if (window.location.hash == "#contact" || parse_url() == "contact") {
		navbar.innerHTML = '<li><a href="." title="Home">Home\</a>\</li><li><a href="#about" onclick="loadPage(\'about\'); return false" title="About Amalgam">About\</a>\</li><li><a href="#submit" onclick="loadPage(\'submit\'); return false" title="Submit content to Amalgam">Submit\</a>\</li><li id="selected"><a href="#contact" onclick="loadPage(\'contact\'); return false" title="Contact Amalgam">Contact\</a>\</li>';
	}
	else if (window.location.hash == "" || parse_url() == "") {
		navbar.innerHTML = '<li id="selected"><a href="." title="Home">Home\</a>\</li><li><a href="#about" onclick="loadPage(\'about\'); return false" title="About Amalgam">About\</a>\</li><li><a href="#submit" onclick="loadPage(\'submit\'); return false" title="Submit content to Amalgam">Submit\</a>\</li><li><a href="#contact" onclick="loadPage(\'contact\'); return false" title="Contact Amalgam">Contact\</a>\</li>';
	}
	else {
		navbar.innerHTML = '<li><a href="." title="Home">Home\</a>\</li><li><a href="#about" onclick="loadPage(\'about\'); return false" title="About Amalgam">About\</a>\</li><li><a href="#submit" onclick="loadPage(\'submit\'); return false" title="Submit content to Amalgam">Submit\</a>\</li><li><a href="#contact" onclick="loadPage(\'contact\'); return false" title="Contact Amalgam">Contact\</a>\</li>';
	}
					
	var categories = document.getElementById('categories');
	if (window.location.hash == "#c1" || parse_url() == "c1") { categories.innerHTML =
		'<a class="selected" href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c3" || parse_url() == "c3") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c4" || parse_url() == "c4") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c5" || parse_url() == "c5") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c15" || parse_url() == "c15") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c8" || parse_url() == "c8") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c7" || parse_url() == "c7") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c9" || parse_url() == "c9") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c21" || parse_url() == "c21") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c12" || parse_url() == "c12") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c13" || parse_url() == "c13") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else if (window.location.hash == "#c11" || parse_url() == "c11") { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	else { categories.innerHTML =
		'<a href="#" onclick="loadPage(\'c1\'); return false" title="Stories">Stories\</a>' +
		'<a href="#" onclick="loadPage(\'c3\'); return false" title="Poems">Poems\</a>' +
		'<a href="#" onclick="loadPage(\'c4\'); return false" title="Jokes">Jokes\</a>' +
		'<a href="#" onclick="loadPage(\'c5\'); return false" title="Art">Art\</a>' +
		'<a href="#" onclick="loadPage(\'c15\'); return false" title="Experiences">Experiences\</a>' +
		'<a href="#" onclick="loadPage(\'c8\'); return false" title="Popular Debate">Popular Debate\</a>' +
		'<a href="#" onclick="loadPage(\'c7\'); return false" title="Academia">Academia\</a>' +
		'<a href="#" onclick="loadPage(\'c9\'); return false" title="Science & Tech">Science & Tech\</a>' +
		'<a href="#" onclick="loadPage(\'c21\'); return false" title="Sports">Sports\</a>' +
		'<a href="#" onclick="loadPage(\'c12\'); return false" title="Movies">Movies\</a>' +
		'<a href="#" onclick="loadPage(\'c13\'); return false" title="Music">Music\</a>' +
		'<a href="#" onclick="loadPage(\'c11\'); return false" title="Fashion">Fashion\</a>'; }
	
	var specialcategories = document.getElementById('specialcategories');
	if (window.location.hash == "#c20" || parse_url() == "c20") { specialcategories.innerHTML =
		'<a class="selected" href="#" onclick="loadPage(\'c20\'); return false" title="Fear Essays">Fear Essays\</a>' +
		'<a href="#" onclick="loadPage(\'c22\'); return false" title="Poe Stories">Poe Stories\</a>'; }
	else if (window.location.hash == "#c22" || parse_url() == "c22") { specialcategories.innerHTML =
		'<a href="#" onclick="loadPage(\'c20\'); return false" title="Fear Essays">Fear Essays\</a>' +
		'<a class="selected" href="#" onclick="loadPage(\'c22\'); return false" title="Poe Stories">Poe Stories\</a>'; }
	else { specialcategories.innerHTML =
		'<a href="#" onclick="loadPage(\'c20\'); return false" title="Fear Essays">Fear Essays\</a>' +
		'<a href="#" onclick="loadPage(\'c22\'); return false" title="Poe Stories">Poe Stories\</a>'; }
	
	return true;
}