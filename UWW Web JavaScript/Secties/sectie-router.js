function SelectSection(section) {
    var node = document.getElementById("currentsection");
    console.log(node);

    switch (section) {
        case "salontafel-tafel":
            node.innerHTML = ShowSectionSalonTafel_Tafel();
            break;
        case "muurtafel":
            node.innerHTML = ShowSectionMuurTafel();
            break;
        case "wandkast":
            node.innerHTML = ShowSectionWandkast();
            break;
        case "staalglazen-staalhoutendeur":
            node.innerHTML = ShowSectionStaalGlazen_StaalHoutenDeur();
            break;
        case "vuurtafel":
            node.innerHTML = ShowSectionVuurTafel();
            break;
    };
};
