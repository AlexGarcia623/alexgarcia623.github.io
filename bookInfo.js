// key -> Book Title
// values -> [author, date finished, pages, [byYear, byGenre], picture]

var current_books = {
    "Project Hail Mary":["Andy Weir",'June 2023', 476,['2023','Fiction'],"./books/ProjectHailMary.jpg"],
}

var books = {
    "The Day We Discovered The Universe":['Marcia Bartusiak','June 2023',337,['2023','Non-Fiction'],'./books/theDayWeFoundTheUniverse.jpeg'],
    "How To Think About Weird Things":['Theodore Schick Jr. & Lewis Vaughn','June 2023',338,['2023','Non-Fiction'],'./books/HowToThinkAboutWeirdThings.jpeg'],
    "Duck For President":["Doreen Cronin with Betsy Lewin",'May 2023',40,['2023','Fiction'],'./books/DuckForPresident.jpeg'],
    "The Story of The Universe in 100 Stars":["Florian Freistetter",'May 2023',293,['2023','Non-Fiction'],'./books/TheStoryOfTheUniverseIn100Stars.jpeg'],
    "The Model Thinker":["Scott E. Page","May 2023",448,['2023','Non-Fiction'],'./books/TheModelThinker.jpeg'],
    "Piranesi":["Susana Clarke","May 2023",245,['2023','Fiction'],'./books/Piranesi.jpeg'],
    "The Lord of the Rings: The Return of the King":["J.R.R. Tolkien",'May 2023',560,['2023','Fiction'],"./books/ReturnOfTheKing.jpg"],
    "The Lord of the Rings: The Two Towers":["J.R.R. Tolkien",'April 2023',322,['2023','Fiction'],"./books/TwoTowers.jpg"],
    "The Lord of the Rings: The Fellowship of the Ring":["J.R.R. Tolkien",'March 2023',398,['2023','Fiction'],"./books/FellowshipOfTheRing.jpg"],
    "Fire and Blood":["George R.R. Martin",'January 2023',736,['2023','Fiction'],"./books/fireAndBlood.jpg"],

    "The Sentence is Death":["Anthony Horowitz","August 2022",384,['2022','Fiction'],"./books/theSentenceIsDeath.jpg"],
    "Billions and Billions":["Carl Sagan","August 2022",320,["2022","Non-Fiction"],"./books/BillionsAndBillions.jpeg"],
    "The Martian":["Andy Weir","August 2022",369,['2022','Fiction'],"./books/theMartian.jpeg"],
    "A Dance with Dragons":["George R.R. Martin","August 2022",1016,['2022','Fiction'],"./books/ADanceWithDragons.jpeg"],
    "A Feast for Crows":["George R.R. Martin","June 2022",1061,['2022','Fiction'],"./books/AFeastForCrows.jpeg"],
    "A Storm of Swords":["George R.R. Martin","May 2022",1177,['2022','Fiction'],"./books/AStormOfSwords.jpeg"],
    "A Clash of Kings":["George R.R. Martin","April 2022",1040,['2022','Fiction'],"./books/AClashOfKings.jpeg"],
    "A Game of Thrones":["George R.R. Martin","March 2022",835,['2022','Fiction'],"./books/AGameOfThrones.jpeg"],
    "The Word is Murder":["Anthony Horowitz","January 2022",400,['2022','Fiction'],"./books/TheWordIsMurder.jpeg"],
    "Humble Pi: When Math Goes Wrong in the Real World":["Matt Parker",'January 2022',336,['2022','Non-Fiction'],"./books/HumblePi.jpeg"],
    "The Hitchhiker's Guide to the Galaxy":["Douglas Adams",'January 2022',208,['2022','Fiction'],"./books/HitchhikerGuide.jpeg"],

    "Einstein's Dreams":["Alan Lightman","December 2021",144,['2021','Fiction'],"./books/EinsteinsDreams.jpeg"],
    "Brave New World":["Aldous Huxley","December 2021",288,['2021','Fiction'],"./books/BraveNewWorld.jpeg"],
    "Astrophysics for People in a Hurry":["Neil deGrasse Tyson",'December 2021',222,['2021','Non-Fiction'],"./books/AstrophysicsPeopleHurry.jpeg"],
    "Algorithms to Live By: The Computer Science of Human Decisions":["Brian Christan & Tom Griffiths",'December 2021',368,['2021','Non-Fiction'],"./books/AlgorithmsToLiveBy.jpeg"],
    "Dune":["Frank Herbert","November 2021",604,["2021","Fiction"],"./books/Dune.jpeg"]
}