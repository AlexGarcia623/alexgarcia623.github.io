// key -> Book Title
// values -> [author, date finished, pages, [byYear, byGenre], picture]

var current_books = {
    "It":['Stephen King','October 2023',1120,'./books/it.jpg']
}

var books = {
    "Space Chronicles":['Niel DeGrasse Tyson',"October 2023",384,'./books/SpaceChronicles.jpg'],
    "2001: A Space Odyssey":['Arthur C. Clarke','September 2023',297,'./books/2001ASpaceOdyssey.jpeg'],
    "Don Quixote":['Miguel De Cervantes',"September 2023",1072,'./books/DonQuixote.jpeg'],
    "The Iliad":["Homer","August 2023",683,'./books/theIliad.jpeg'],
    " 1984":['George Orwell','August 2023',304,'./books/1984.webp'],
    "The War of the Worlds":['H.G. Wells','August 2023',224,'./books/WarOfTheWorlds.jpeg'],
    "The Hobbit":['J.R.R. Tolkein','July 2023',365,'./books/theHobbit.webp'],
    "The Ascent of Information":['Caleb Scharf','June 2023',352,'./books/AscentOfInfo.jpg'],
    "The Long Way to a Small, Angry Planet":["Becky Chambers",'June 2023',518,'./books/theLongWayToASmallAngryPlanet.jpeg'],
    "Project Hail Mary":["Andy Weir",'June 2023', 476,"./books/ProjectHailMary.jpg"],
    "The Day We Discovered The Universe":['Marcia Bartusiak','June 2023',337,'./books/theDayWeFoundTheUniverse.jpeg'],
    "How To Think About Weird Things":['Theodore Schick Jr. & Lewis Vaughn','June 2023',338,'./books/HowToThinkAboutWeirdThings.jpeg'],
    "Duck For President":["Doreen Cronin with Betsy Lewin",'May 2023',40,'./books/DuckForPresident.jpeg'],
    "The Story of The Universe in 100 Stars":["Florian Freistetter",'May 2023',293,'./books/TheStoryOfTheUniverseIn100Stars.jpeg'],
    "The Model Thinker":["Scott E. Page","May 2023",448,'./books/TheModelThinker.jpeg'],
    "Piranesi":["Susana Clarke","May 2023",245,'./books/Piranesi.jpeg'],
    "The Lord of the Rings: The Return of the King":["J.R.R. Tolkien",'May 2023',560,"./books/ReturnOfTheKing.jpg"],
    "The Lord of the Rings: The Two Towers":["J.R.R. Tolkien",'April 2023',322,"./books/TwoTowers.jpg"],
    "The Lord of the Rings: The Fellowship of the Ring":["J.R.R. Tolkien",'March 2023',398,"./books/FellowshipOfTheRing.jpg"],
    "Fire and Blood":["George R.R. Martin",'January 2023',736,"./books/fireAndBlood.jpg","Fantasy"],

    "The Sentence is Death":["Anthony Horowitz","August 2022",384,"./books/theSentenceIsDeath.jpg"],
    "Billions and Billions":["Carl Sagan","August 2022",320,"./books/BillionsAndBillions.jpeg"],
    "The Martian":["Andy Weir","August 2022",369,"./books/theMartian.jpeg"],
    "A Dance with Dragons":["George R.R. Martin","August 2022",1016,"./books/ADanceWithDragons.jpeg"],
    "A Feast for Crows":["George R.R. Martin","June 2022",1061,"./books/AFeastForCrows.jpeg"],
    "A Storm of Swords":["George R.R. Martin","May 2022",1177,"./books/AStormOfSwords.jpeg"],
    "A Clash of Kings":["George R.R. Martin","April 2022",1040,"./books/AClashOfKings.jpeg"],
    "A Game of Thrones":["George R.R. Martin","March 2022",835,"./books/AGameOfThrones.jpeg"],
    "The Word is Murder":["Anthony Horowitz","January 2022",400,"./books/TheWordIsMurder.jpeg"],
    "Humble Pi: When Math Goes Wrong in the Real World":["Matt Parker",'January 2022',336,"./books/HumblePi.jpeg"],
    "The Hitchhiker's Guide to the Galaxy":["Douglas Adams",'January 2022',208,"./books/HitchhikerGuide.jpeg"],

    "Einstein's Dreams":["Alan Lightman","December 2021",144,"./books/EinsteinsDreams.jpeg"],
    "Brave New World":["Aldous Huxley","December 2021",288,"./books/BraveNewWorld.jpeg"],
    "Astrophysics for People in a Hurry":["Neil deGrasse Tyson",'December 2021',222,"./books/AstrophysicsPeopleHurry.jpeg"],
    "Algorithms to Live By: The Computer Science of Human Decisions":["Brian Christan & Tom Griffiths",'December 2021',368,"./books/AlgorithmsToLiveBy.jpeg"],
    "Dune":["Frank Herbert","November 2021",604,"./books/Dune.jpeg"]
}

var book_classes = {
    "Space Chronicles"                                 :['2023','Non-Fiction','Science','300+','Neil deGrasse Tyson'],
    "2001: A Space Odyssey"                            :['2023','Fiction','Sci-fi','Less than 300','Arthur C. Clarke'],
    "Don Quixote"                                      :['2023','Fiction','Classics','1000+','Miguel De Cervantes'],
    "The Iliad"                                        :['2023','Fiction','Classics','500+','Homer'],
    " 1984"                                            :['2023','Fiction','Sci-fi','300+','George Orwell'],
    "The War of the Worlds"                            :['2023','Fiction','Sci-fi','Less than 300','H.G. Wells'],
    "The Hobbit"                                       :['2023','Fiction','Fantasy','300+','J.R.R. Tolkein'],
    "The Ascent of Information"                        :['2023','Non-Fiction','Science Psychology','300+','Caleb Scharf'],
    "The Long Way to a Small, Angry Planet"            :['2023','Fiction','Sci-fi','500+','Becky Chambers'],
    "Project Hail Mary"                                :['2023','Fiction','Sci-fi','300+','Andy Weir'],
    "The Day We Discovered The Universe"               :['2023','Non-Fiction','History','300+','Marcia Bartusiak'],
    "How To Think About Weird Things"                  :['2023','Non-Fiction','Science Psychology','300+','Theodore Schick Jr. & Lewis Vaughn'],
    "Duck For President"                               :['2023','Fiction',"Children's",'Less than 300',"Doreen Cronin & Betsy Lewin"],
    "The Story of The Universe in 100 Stars"           :['2023','Non-Fiction','Science','Less than 300',"Florian Freistetter"],
    "The Model Thinker"                                :['2023','Non-Fiction','Science Psychology','300+',"Scott E. Page"],
    "Piranesi"                                         :['2023','Fiction','Fantasy','Less than 300','Susana Clarke'],
    "The Lord of the Rings: The Return of the King"    :['2023','Fiction',"Fantasy",'500+','J.R.R. Tolkein'],
    "The Lord of the Rings: The Two Towers"            :['2023','Fiction',"Fantasy",'300+','J.R.R. Tolkein'],
    "The Lord of the Rings: The Fellowship of the Ring":['2023','Fiction',"Fantasy",'300+','J.R.R. Tolkein'],
    "Fire and Blood"                                   :['2023','Fiction',"Fantasy",'500+','George R.R. Martin'],

    "The Sentence is Death"                            :['2022','Fiction',"Mystery",'300+','Anthony Horowitz'],
    "Billions and Billions"                            :["2022","Non-Fiction","Science",'300+','Carl Sagan'],
    "The Martian"                                      :['2022','Fiction',"Sci-fi",'300+','Andy Weir'],
    "A Dance with Dragons"                             :['2022','Fiction',"Fantasy",'1000+','George R.R. Martin'],
    "A Feast for Crows"                                :['2022','Fiction',"Fantasy",'1000+','George R.R. Martin'],
    "A Storm of Swords"                                :['2022','Fiction',"Fantasy",'1000+','George R.R. Martin'],
    "A Clash of Kings"                                 :['2022','Fiction',"Fantasy",'1000+','George R.R. Martin'],
    "A Game of Thrones"                                :['2022','Fiction',"Fantasy",'500+','George R.R. Martin'],
    "The Word is Murder"                               :['2022','Fiction',"Mystery",'300+','Anthony Horowitz'],
    "Humble Pi: When Math Goes Wrong in the Real World":['2022','Non-Fiction',"Science",'300+','Matt Parker'],
    "The Hitchhiker's Guide to the Galaxy"             :['2022','Fiction',"Sci-fi",'Less than 300','Douglas Adams'],

    "Einstein's Dreams"                                             :['2021','Fiction',"Science",'Less than 300','Alan Lightman'],
    "Brave New World"                                               :['2021','Fiction',"Sci-fi",'Less than 300','Aldous Huxley'],
    "Astrophysics for People in a Hurry"                            :['2021','Non-Fiction',"Science",'Less than 300','Neil deGrasse Tyson'],
    "Algorithms to Live By: The Computer Science of Human Decisions":['2021','Non-Fiction',"Science Psychology",'300+','Brian Christansan & Tom Griffiths'],
    "Dune"                                                          :["2021","Fiction","Sci-fi",'500+','Frank Herbert']
}