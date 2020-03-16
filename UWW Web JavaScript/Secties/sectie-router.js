function SelectSection(section) {
    var node = document.getElementById("sections");
    console.log(node);

    switch (section) {
        case "tafel":
            node.innerHTML = ShowSectionTafel();
            break;
        case "stoel":
            node.innerHTML = ShowSectionStoel();
            break;
    };
};
