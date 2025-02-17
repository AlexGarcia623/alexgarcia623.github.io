// key -> Book Title
// values -> [ author, date started, pages, picture ]

var current_books = {
    // "Green Mars":["Kim Stanley Robinson","December 2024",640,'./books/GreenMars.jpg'],
    // "Blue Mars":["Kim Stanley Robinson","September 2024",761,'./books/BlueMars.jpg'],
    "Numbers Don't Lie":["Vaclav Smil","Feburary 2025",384,'./books/NumbersDontLie.jpg']
}

// key -> Book Title
// values -> [ author, date finished, pages, picture ] // Same as above

var books = {
    // 2025
    // "Green Mars":["Kim Stanley Robinson","September 2024",640,'./books/GreenMars.jpg'],
    // "Blue Mars":["Kim Stanley Robinson","September 2024",761,'./books/BlueMars.jpg'],
    "Player Piano":["Kurt Vonnegut","February 2025",341,'./books/playerPiano.jpg'],
    "The Joy of X":['Steven Strogatz','January 2025',336,'./books/theJoyOfX.jpg'],
    "Nemesis":["Isaac Asmiov","January 2025",400,'./books/nemesis.jpg'],

    // 2024
    "Red Mars":["Kim Stanley Robinson","December 2024",592,'./books/RedMars.jpeg'],
    "Jurassic Park":["Michael Crichton",'October 2024',449,'./books/jurassicPark.jpg'],
    "The Adventures of Sherlock Holmes":["Arthur Conan Doyal",'August 2024',711,'./books/SherlockHolmes.jpg'],
    "Thinking Better":['Marcus Du Sautoy','August 2024',326,'./books/thinkingBetter.jpg'],
    "The Twist of a Knife":["Anthony Horowitz",'August 2024',384,'./books/TwistOfKnife.jpg'],
    "A Line To Kill":["Anthony Horowitz",'August 2024',384,'./books/ALineToKill.jpg'],
    "Moby Dick":["Herman Melville",'July 2024',720,'./books/mobileRichard.jpeg'],
    "A Knight of the Seven Kingdoms":["George R.R. Martin","July 2024",355,'./books/DunkAndEgg.jpg'],
    "The Big Bang of Numbers":["Manli Suri","June 2024",384,'./books/TheBigBangOfNumbers.jpg'],
    "And Then There Were None":["Agatha Christie","May 2024",264,'./books/AndThenThereWereNone.jpg'],
    "I, Robot":["Isaac Asimov",'May 2024',224,'./books/iRobot.jpeg'],
    "Dune: Messiah":["Frank Herbert",'May 2024',336,'./books/DuneMessiah.jpg'],
    "Optimal Illusions":["Coco Krumme",'March 2024',256,'./books/optimalIllusions.jpeg'],
    "A Psalm for the Wild-Built":["Becky Chambers",'March 2024', 147,'./books/aPsalmForTheWildBuilt.jpg'],
    "The Song of Achilles":["Madeline Miller",'March 2024',369,'./books/SongOfAchilles.jpeg'],
    "The Disordered Cosmos":['Chanda Prescod-Weinstein','January 2024',336,'./books/DisorderedCosmos.jpg'],
    "Dune":["Frank Herbert","January 2024",604,"./books/Dune.jpeg"],

    // 2023
    "A Wrinkle In Time":["Madeleine L'Engle",'December 2023',211,'./books/AWrinkleInTime.jpeg'],
    "The Haunting Of Hill House":['Shirley Jackson','December 2023',204,'./books/HauntingOfHillHouse.jpg'],
    "Great Expectations":['Charles Dickens','November 2023', 505, './books/GreatExpectations.jpeg'],
    "The Ultimate Hitchhiker's Guide to the Galaxy":['Douglas Adams','November 2023',823,'./books/UltimateHitchhikers.jpg'],
    "It":['Stephen King','October 2023',1120,'./books/it.jpg'],
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

    // 2022
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

    // 2021
    "Einstein's Dreams":["Alan Lightman","December 2021",144,"./books/EinsteinsDreams.jpeg"],
    "Brave New World":["Aldous Huxley","December 2021",288,"./books/BraveNewWorld.jpeg"],
    "Astrophysics for People in a Hurry":["Neil deGrasse Tyson",'December 2021',222,"./books/AstrophysicsPeopleHurry.jpeg"],
    "Algorithms to Live By: The Computer Science of Human Decisions":["Brian Christan & Tom Griffiths",'December 2021',368,"./books/AlgorithmsToLiveBy.jpeg"],
    "Dune (Repeat)":["Frank Herbert","November 2021",604,"./books/Dune.jpeg"]
}

// key -> Book Title
// values -> [ year read, Fiction/Non-Fiction, subgenre, pages bin, author ]

var book_classes = {

    // 2025
    "Player Piano"                                     :['2025','Fiction','Dystopian Fiction','300+','Kurt Vonnegut'],
    "The Joy of X"                                     :['2025','Non-Fiction','Science/Math','300+','Steven Strogatz'],
    "Green Mars"                                       :['2025','Fiction','Sci-fi','500+',"Kim Stanley Robinson"],
    "Blue Mars"                                        :['2025','Fiction','Sci-fi','500+',"Kim Stanley Robinson"],
    "Nemesis"                                          :['2025','Fiction','Sci-fi','300+','Isaac Asimov'],

    // 2024
    "Red Mars"                                         :['2024','Fiction','Sci-fi','500+',"Kim Stanley Robinson"],
    "The Adventures of Sherlock Holmes"                :['2024','Fiction','Mystery','500+','Arthur Conan Doyle'],
    "Thinking Better"                                  :['2024','Non-Fiction','Science Psychology','300+','Marcus Du Sautoy'],
    "The Twist of a Knife"                             :["2024","Fiction","Mystery","300+","Anthony Horowitz"],
    "A Line To Kill"                                   :["2024","Fiction","Mystery","300+","Anthony Horowitz"],
    "Jurassic Park"                                    :["2024","Fiction","Sci-fi","300+","Michael Crichton"],
    "Moby Dick"                                        :["2024","Fiction","Classics",'500+',"Herman Melville"],
    "A Knight of the Seven Kingdoms"                   :["2024","Fiction",'Fantasy',"300+","George R.R. Martin"],
    "The Big Bang of Numbers"                          :["2024","Non-Fiction","Science/Math","300+","Manli Suri"],
    "And Then There Were None"                         :["2024","Fiction","Mystery","Less than 300","Agatha Christie"],
    "I, Robot"                                         :["2024",'Fiction','Sci-fi','Less than 300','Isaac Asimov'],
    "Dune: Messiah"                                    :["2024","Fiction","Sci-fi","300+",'Frank Herbert'],
    "Optimal Illusions"                                :["2024",'Non-Fiction','Science Psychology','Less than 300','Coco Krumme'],
    "A Psalm for the Wild-Built"                       :["2024",'Fiction',"Sci-fi",'Less than 300','Becky Chambers'],
    "Dune (Repeat)"                                    :["2024","Fiction","Sci-fi",'500+','Frank Herbert'],
    "The Disordered Cosmos"                            :['2024','Non-Fiction','Science Psychology','300+','Chanda Prescod-Weinstein'],
    "The Song of Achilles"                             :['2024','Fiction','Fantasy','300+',"Madeline Miller"],

    // 2023
    "A Wrinkle In Time"                                :['2023','Fiction','Fantasy','Less than 300',"Madeleine L'Engle"],
    "The Haunting Of Hill House"                       :['2023','Fiction','Mystery','Less than 300','Shirley Jackson'],
    "Great Expectations"                               :['2023','Fiction','Classics','500+','Charles Dickens'],
    "The Ultimate Hitchhiker's Guide to the Galaxy"    :['2023','Fiction','Sci-fi','500+','Douglas Adams'],
    "It"                                               :['2023','Fiction','Horror','1000+','Stephen King'],
    "Space Chronicles"                                 :['2023','Non-Fiction','Science/Math','300+','Neil deGrasse Tyson'],
    "2001: A Space Odyssey"                            :['2023','Fiction','Sci-fi','Less than 300','Arthur C. Clarke'],
    "Don Quixote"                                      :['2023','Fiction','Classics','1000+','Miguel De Cervantes'],
    "The Iliad"                                        :['2023','Fiction','Classics','500+','Homer'],
    " 1984"                                            :['2023','Fiction','Dystopian Fiction','300+','George Orwell'],
    "The War of the Worlds"                            :['2023','Fiction','Sci-fi','Less than 300','H.G. Wells'],
    "The Hobbit"                                       :['2023','Fiction','Fantasy','300+','J.R.R. Tolkein'],
    "The Ascent of Information"                        :['2023','Non-Fiction','Science Psychology','300+','Caleb Scharf'],
    "The Long Way to a Small, Angry Planet"            :['2023','Fiction','Sci-fi','500+','Becky Chambers'],
    "Project Hail Mary"                                :['2023','Fiction','Sci-fi','300+','Andy Weir'],
    "The Day We Discovered The Universe"               :['2023','Non-Fiction','History','300+','Marcia Bartusiak'],
    "How To Think About Weird Things"                  :['2023','Non-Fiction','Science Psychology','300+','Theodore Schick Jr. & Lewis Vaughn'],
    "Duck For President"                               :['2023','Fiction',"Children's",'Less than 300',"Doreen Cronin & Betsy Lewin"],
    "The Story of The Universe in 100 Stars"           :['2023','Non-Fiction','Science/Math','Less than 300',"Florian Freistetter"],
    "The Model Thinker"                                :['2023','Non-Fiction','Science Psychology','300+',"Scott E. Page"],
    "Piranesi"                                         :['2023','Fiction','Fantasy','Less than 300','Susana Clarke'],
    "The Lord of the Rings: The Return of the King"    :['2023','Fiction',"Fantasy",'500+','J.R.R. Tolkein'],
    "The Lord of the Rings: The Two Towers"            :['2023','Fiction',"Fantasy",'300+','J.R.R. Tolkein'],
    "The Lord of the Rings: The Fellowship of the Ring":['2023','Fiction',"Fantasy",'300+','J.R.R. Tolkein'],
    "Fire and Blood"                                   :['2023','Fiction',"Fantasy",'500+','George R.R. Martin'],

    // 2022
    "The Sentence is Death"                            :['2022','Fiction',"Mystery",'300+','Anthony Horowitz'],
    "Billions and Billions"                            :["2022","Non-Fiction","Science/Math",'300+','Carl Sagan'],
    "The Martian"                                      :['2022','Fiction',"Sci-fi",'300+','Andy Weir'],
    "A Dance with Dragons"                             :['2022','Fiction',"Fantasy",'1000+','George R.R. Martin'],
    "A Feast for Crows"                                :['2022','Fiction',"Fantasy",'1000+','George R.R. Martin'],
    "A Storm of Swords"                                :['2022','Fiction',"Fantasy",'1000+','George R.R. Martin'],
    "A Clash of Kings"                                 :['2022','Fiction',"Fantasy",'1000+','George R.R. Martin'],
    "A Game of Thrones"                                :['2022','Fiction',"Fantasy",'500+','George R.R. Martin'],
    "The Word is Murder"                               :['2022','Fiction',"Mystery",'300+','Anthony Horowitz'],
    "Humble Pi: When Math Goes Wrong in the Real World":['2022','Non-Fiction',"Science/Math",'300+','Matt Parker'],
    "The Hitchhiker's Guide to the Galaxy"             :['2022','Fiction',"Sci-fi",'Less than 300','Douglas Adams'],

    // 2021
    "Einstein's Dreams"                                             :['2021','Fiction',"Science Psychology",'Less than 300','Alan Lightman'],
    "Brave New World"                                               :['2021','Fiction',"Dystopian Fiction",'Less than 300','Aldous Huxley'],
    "Astrophysics for People in a Hurry"                            :['2021','Non-Fiction',"Science/Math",'Less than 300','Neil deGrasse Tyson'],
    "Algorithms to Live By: The Computer Science of Human Decisions":['2021','Non-Fiction',"Science Psychology",'300+','Brian Christansan & Tom Griffiths'],
    "Dune"                                                          :["2021","Fiction","Sci-fi",'500+','Frank Herbert'] 
}
