/*import info from './util.mjs';*/
let featureList = document.getElementById('featureList');
let logo = document.getElementById('logo');

var info = {
    "name" : 'Kunal Ahire',

    "feature" : [
        {
            "title":"Home",
            "link":"#Home"
        },
        {
            "title":"About",
            "link":"#About"
        },
        {
            "title":"Skills",
            "link":"#Skills"
        },
        {
            "title":"Projects",
            "link":"#Projects"
        },
        {
            "title":"Contact",
            "link":"#Contact"
        }
    ],
    "Type" : 'module'
};

logo.innerHTML = info.name;

info.feature.map((item, pos) => {

    let newList = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.setAttribute('href',item.link);
    anchor.appendChild(document.createTextNode(item.title));
    newList.appendChild(anchor);
    featureList.appendChild(newList);
})

