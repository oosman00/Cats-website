document.getElementById("AboutCats").addEventListener("click", aboutCats);
document.getElementById("CatsHealth").addEventListener("click", catsHealth);
document.getElementById("CatsForAdoption").addEventListener("click", catsForAdoption);

function aboutCats() 
{
  document.getElementById("articleID").innerHTML = "<h1>About Cats</h1>"+
  "<p>Cats can be a domesticated animal or a wild animal. Domestic cats have become very popular and seen as a valued house pet. It’s the second most common house hold pet. There is about 60 different breeds and are valued as pets for their companionship and their ability to hunt rats. </p><p>A cat has a strong flexible body, quick reflexes, sharp teeth and claws to kill small prey. A cats night vision and sense of smell are well developed. </p>"+
  "<div class=\"clearfix\">"+
  "<div class=\"img-container\">"+
  "<img src=\"images\/Aegean_cat.jpg\" alt=\"Aegean Cat\" style=\"width:100%\">"+
  "</div><div class=\"img-container\">"+
  "<img src=\"images\/bombayCat.jpg\" alt=\"bombayCat\" style=\"width:100%\"></div><div class=\"img-container\"><img src=\"images\/foldex.JPG\" alt=\"Mountains\" style=\"width:100%\"></div></div>"
}
			
function catsHealth() 
{
  document.getElementById("articleID").innerHTML = "<div class=\"fas fa-briefcase-medical\"><h1>Cat Health</h1></div><p>When caring for your cat you need to keep in mind the top basics. Feeding, grooming, housing, litter box, and health. This includes vaccinations and doctor visits at least once a year or immediately when they’re sick. </p><img id=\"doctor\"src=\"images\/catsatdoctors.jpg\" alt=\"cat at doctor\">"
}
	
function catsForAdoption() 
{
  document.getElementById("articleID").innerHTML = "<h1>Cats For Adoption</h1><p>These are the cats currently up and availible for adoption</p><div><list><ul><h2 id=\"name\">Greg</h2><ul id=\"box\" style=\"float:right;\">Napoleon<dt>short hair/dwarf</dt></ul><img id=\"greg\" src=\"images/greg.jpg\" alt=\"Image of Greg the Cat\"></ul><ul><p>Greg is a Napoleon breed, also known as \"munchkin\". He's a hyper and extremely energetic cat. He likes his wet food and will not eat his dry food unless you don't feed him his favorite wet food. He is persistant and will keep mowing for a bit. make sure to ignore him if you already gave him his wet food. too much can make him gain weight. He does get some water from the wet food since he is shy when drinking water and will only drink alone.</p></ul></list></div><div><list><ul><h2 id=\"name\">Oozman</h2><ul id=\"box\" style=\"float:right;\">American Shorthair<dt>short hair/Cobby</dt></ul><img id=\"greg\" src=\"images/oozman.jpg\" alt=\"Image of oozman the Cat\"></ul><ul><p>oozman is a American Shorthair breed. He's a hyper and extremely energetic cat. He likes his wet food and will not eat his dry food unless you don't feed him his favorite wet food. He is persistant and will keep mowing for a bit. make sure to ignore him if you already gave him his wet food. too much can make him gain weight. He does get some water from the wet food since he is shy when drinking water and will only drink alone.</p></ul></list></div>"
}