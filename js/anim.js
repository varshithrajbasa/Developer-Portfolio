var svgContainer = document.getElementById('loader');
var animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'jsonanim/loading.json'
    //   path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
});

// com[piter animation
var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'jsonanim/office.json'
    //   path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
});

//large screen
var svgContainer = document.getElementById('largescreen');
var animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'jsonanim/onlylargescreen.json'
    //   path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
});