function SelectSection(sectie) {
    console.log("show section: " + sectie);
    var node = document.getElementById("sections");
    console.log(node);

    switch (sectie) {
        case "tafel":
            node.innerHTML = ShowSectionTafel();
            break;
        case "stoel":
            node.innerHTML = ShowSectionStoel();
            break;
    };
};

/*function ShowSectionTafel(node){
    return "<h1>TAFEL</h1"
}

function ShowSectionStoel(node){
    return "<h1>STOEL</h1>"
}*/
