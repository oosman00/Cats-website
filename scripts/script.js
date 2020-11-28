document.getElementById("catsForAdoption").addEventListener("click", catsForAdoption);

function catsForAdoption() {
    document.getElementById("articleID").innerHTML =
        "<h1>Cats For Adoption</h1><p>These are the cats currently up and availible for adoption</p><div><list><ul><h2 id=\"name\">Greg</h2><ul id=\"box\" style=\"float:right;\">Napoleon<dt>short hair/dwarf</dt></ul><img id=\"greg\" src=\"images/greg.jpg\" alt=\"Image of Greg the Cat\"></ul><ul><p>Greg is a Napoleon breed, also known as \"munchkin\". He's a hyper and extremely energetic cat. He likes his wet food and will not eat his dry food unless you don't feed him his favorite wet food. He is persistant and will keep mowing for a bit. make sure to ignore him if you already gave him his wet food. too much can make him gain weight. He does get some water from the wet food since he is shy when drinking water and will only drink alone.</p></ul></list></div><div><list><ul><h2 id=\"name\">Oozman</h2><ul id=\"box\" style=\"float:right;\">American Shorthair<dt>short hair/Cobby</dt></ul><img id=\"greg\" src=\"images/oozman.jpg\" alt=\"Image of oozman the Cat\"></ul><ul><p>oozman is a American Shorthair breed. He's a hyper and extremely energetic cat. He likes his wet food and will not eat his dry food unless you don't feed him his favorite wet food. He is persistant and will keep mowing for a bit. make sure to ignore him if you already gave him his wet food. too much can make him gain weight. He does get some water from the wet food since he is shy when drinking water and will only drink alone.</p></ul></list></div>"
}

var i = 0;
var clicked = 'false';

function clickedbutton() {
    console.log(clicked);
    if (clicked == 'true' && i == 0) {
        clicked = 'false';
        console.log(clicked);
        menubutton();
        i = 1;
    }
    if (clicked == 'false' && i == 0) {
        clicked = 'true';
        console.log(clicked);
        menubutton();
        i = 1;
    }
    i = 0;


}

function menubutton() {
    const button = document.getElementById('menubutton').style;
    const navbar = document.getElementById('nav').style;
    const article = document.getElementById('articleID').style;
    const links = document.getElementById('links').style;
    if (clicked == 'true') {
        navbar.display = "block";
        navbar.width = "20%";
        article.width = "80%";
        links.display = "block";
        links.fontSize = "2vmin";
    } else {
        links.fontSize = "0";
        navbar.width = "auto";
        article.width = "96%";
        links.display = "none";
    }
}