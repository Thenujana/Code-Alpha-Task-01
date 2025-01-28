const galleries = {
    opera: [
        "images/sydney-opera-house-354375_1280.jpg",
        "images/oprea house-3.jpg",
        "images/opera-house-night.jpg",
        "images/opera inside.jpg",
        "images/opera lights.webp"
    ],
    rio: [
        "images/christ.jpg",
        "images/rio janeiro-3.jpg",
        "images/rio janeiro-4.jpg",
        "images/rio janerio-2.jpg",
        "images/christ .jpg"
    ],

    greatwall: [
       "images/great-wall-of-china-5483516_1280.jpg",
       "images/greatwall2.jpg",
       "images/greatwall3.jpg",
       "images/greatwall4.jpg" 
    ],

    island: [
        "images/island1.jpg",
        "images/island2.jpg",
       "images/island3.jpg",
       "images/island4.webp"
       
    ],
    colosseum:[
        "images/rome.avif",
        "images/colosseum1.webp",
        "images/colosseum2.jpg",
        "images/colosseum3.jpg"

    ],
    castel:[
        "images/castel1.avif",
        "images/castel2.jpg",
        "images/castel3.png",
        "images/castel4.jpg",
        "images/castel5.jpg"

    ],

    eifal:[
        "images/eifal1.jpg",
        "images/eifal4.webp",
        "images/eifal2.jpg",
        "images/eifal3.jpg" ,
        "images/eifal5.jpg"

    ],

    disney:[
        "images/disney world.png" ,
        "images/disney02.jpg" ,
        "images/disney03.jpg",
        "images/disney04.jpg",
        "images/disney05.jpg"
    ],

    sigiriya:[
        "images/sigiriya02.jpg",
        "images/sigiriya03.jpg",
        "images/sigiriya04.jpg" ,
        "images/sigiriya05.jpg"


    ],
    liberty:[
        "images/liberty01.jpg",
        "images/liberty02.jpg",
        "images/liberty03.jpg",
        "images/liberty04.avif",
        "images/liberty05.jpg"

    ],
    labradore:[
        "Animal images/labradore02.jpg",
        "Animal images/labradore03.avif",
        "Animal images/labradore04.webp",
        "Animal images/labradore05.avif"

       
    ],
    germanShephard:[
        "Animal images/gs01.jpg",
        "Animal images/gs03.jpg",
        "Animal images/gs04.jpg",
        "Animal images/gs02.jpg",
        "Animal images/gs05.jpg"

    ],
    pug:[
"Animal images/pug01.jpg" ,
"Animal images/pug02.jpg",
"Animal images/pug03.jpg",
"Animal images/pug04.jpg",
"Animal images/pug05.jpg"
    ],
    goldernRetreiver:[
        "Animal images/gr01.jpg",
        "Animal images/gr02.jpg",
        "Animal images/gr03.jpg",
        "Animal images/gr04.jpg",
        "Animal images/gr05.jpg"

    ],
    bullDog:[
"Animal images/bulldog.jpg",
"Animal images/bullDog02.webp" ,
"Animal images/bullDog03.jpg",
"Animal images/bullDog04.jpg",
"Animal images/bullDog05.jpg"

    ],
    beagle:[
        "Animal images/beagle02.jpg",
        "Animal images/beagle03.jpg",
        "Animal images/beagle.webp" ,
        "Animal images/beagle04.jpg",
        "Animal images/beagle05.jpg"
    ],
    caneCruso:[
        "Animal images/caneC02.jpg",
        "Animal images/cane-cruso.jpg",
        "Animal images/caneC03.jpg",
        "Animal images/caneC04.jpg",
        "Animal images/caneC05.jpg"
    ],
    australianShepherd:[
"Animal images/Ashephard02.jpg",
"Animal images/australian-shepherd.jpg",
"Animal images/Ashephard03.jpg",
"Animal images/Ashephard04.jpg",
"Animal images/Ashephard06.jpg",
"Animal images/Ashephard05.jpg"
    ],
    akita:[
"Animal images/akita01.jpg" ,
"Animal images/akita.jpeg",
"Animal images/akita03.webp",
"Animal images/akita05.jpg",
"Animal images/akita02.jpg"

    ],

    chihuahua:[
        "Animal images/chihuahua02.jpg" ,
        "Animal images/chihuahua03.jpg",
        "Animal images/chihuahua04.jpg",
        "Animal images/chihuahua06.jpg",
        "Animal images/chihuahua05.jpg",
        "Animal images/chuava.jpg"
    ]
};


const currentIndexes = {
    opera: 0,
    rio: 0,
    greatwall: 0,
    island: 0,
    colosseum:0,
    castel: 0,
    eifal:0,
    disney:0,
    sigiriya:0,
    liberty:0,
    labradore:0,
    germanShephard:0,
    pug:0,
    goldernRetreiver:0,
    bullDog:0,
    beagle:0,
    caneCruso:0,
    australianShepherd:0,
    akita:0,
    chihuahua:0
};

function changeImage(direction, galleryName) {
    const galleryImages = galleries[galleryName];
    const galleryIndex = currentIndexes[galleryName];

    currentIndexes[galleryName] = (galleryIndex + direction + galleryImages.length) % galleryImages.length;

    const galleryImage = document.getElementById(`${galleryName}-gallery-image`);
    galleryImage.src = galleryImages[currentIndexes[galleryName]];
}
