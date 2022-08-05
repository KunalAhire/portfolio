let featureList = document.getElementById('featureList');
let logo = document.getElementById('logo');
const LinkedIn = document.getElementById('linkedIn');

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
    "Social_Media":{
        "LinkedIn" :"https://www.linkedin.com/in/kunal-ahire-44388722a/"
    }
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
LinkedIn.setAttribute("href",info.Social_Media.LinkedIn)
