

 const cl=console.log;

 const imgarr = [

           
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
                titleinfo : "Harry Potter and the Prisoner of Azkaban",
                rating :"7",
                overview :"Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//cVWYG9W7jNaElA4U7naT6o9JhdF.jpg",
                titleinfo : "The Mystic Nine: Begonia from Qingshan",
                rating :"4.4",
                overview :"On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!"

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//qQ0VKsGRQ2ofAmswGNzZnvC1xPE.jpg",
                titleinfo : "Miraculous World: Shanghai – The Legend of Ladydragon",
                rating :"7.9",
                overview :"During a school field trip, Ladybug and Cat Noir meet the American superheroes, whom they have to save from an akumatised super-villain. They discover that Miraculous exist in the United States too."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//9YbyvcrHmY2SVbdfXpb8mC4Fy0g.jpg",
                titleinfo : "Miraculous World: New York, United HeroeZ",
                rating :"8.2",
                overview :"Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//mahoRwcpJRx8TAuE6lKrYqCv8io.jpg",
                titleinfo : "2037",
                rating :"7.5",
                overview :"19-year-old Yoon Young lives alone with her mother and prepares for the civil service exam while working part-time. Regardless of good heart and sincere will, unexpected incidents turn Yoon Young from a victim to the killer, driving her to prison and being called inmate \"2037\" instead of \"Yoon Young.\" In a hopeless situation her co-inmates in Cell No. 12 with their own stories offer a hand of hope to protect Yoon Young..."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
                titleinfo : "Free Guy",
                rating :"7.7",
                overview :"A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//iyI4yY4bUtWS1demuvjfGj5Jclw.jpg",
                titleinfo : "I Don't Like Younger Men 5",
                rating :"0",
                overview :"Ha-neul haven't seen her friend, Ye-sol for a long time, and so they spent a good time together. That time, Ye-sol's father, Min-soo enters the house.  Ha-neul sees the young-looking Min-soo and makes a fuss. Ye-sol who is a little bit tipsy tells Ha-neul that he is her stepfather.  That night, Ha-neul secretly entered Min-soo's room..."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//7XLSwxpfpPoJyTdJVot6a42TS2V.jpg",
                titleinfo : "The Help",
                rating :"8.2",
                overview :"Aibileen Clark is a middle-aged African-American maid who has spent her life raising white children and has recently lost her only son; Minny Jackson is an African-American maid who has often offended her employers despite her family's struggles with money and her desperate need for jobs; and Eugenia \"Skeeter\" Phelan is a young white woman who has recently moved back home after graduating college to find out her childhood maid has mysteriously disappeared. These three stories intertwine to explain how life in Jackson, Mississippi revolves around \"the help\"; yet they are always kept at a certain distance because of racial lines."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//k0NLfgdPckYziQ9EusUGXI1S6iF.jpg",
                titleinfo : "Father There Is Only One 3",
                rating :"6.8",
                overview :"Christmas is coming. The children accidentally break a Nativity scene figurine from their father's collection and must by all means get an equal one, the problem is that it is a unique antique piece. Sara, the eldest daughter breaks up with her boyfriend, Ocho, who will try to recover her favors with the help of her father-in-law, Javier. Precisely Javier's father-in-law, Marisa's father, will be welcomed into the family home to spend the holidays after her recent separation, which will not leave Javier's mother, Milagros, indifferent. Rocío, the folklore of the family, who has been playing the Virgin for several Christmases, is relegated this year to playing the shepherdess, something that her father, Javier, is not willing to assume."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
                titleinfo : "Black Widow",
                rating :"7.4",
                overview :"Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
                titleinfo : "Avengers: Age of Ultron",
                rating :"7.3",
                overview :"When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//muIaHotSaSUQr0KZCIJOYQEe7y2.jpg",
                titleinfo : "Tom and Jerry Cowboy Up!",
                rating :"6.9",
                overview :"This time, the rivals team up to help a cowgirl and her brother save their homestead from a greedy land-grabber, and they’re going to need some help! Jerry’s three precocious nephews are all ready for action, and Tom is rounding up a posse of prairie dogs. But can a ragtag band of varmints defeat a deceitful desperado determined to deceive a damsel in distress? No matter what happens with Tom and Jerry in the saddle, it’ll be a rootin’ tootin’ good time!"

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg",
                titleinfo : "Kimi",
                rating :"6.2",
                overview :"A tech worker with agoraphobia discovers recorded evidence of a violent crime but is met with resistance when she tries to report it. Seeking justice, she must do the thing she fears the most: she must leave her apartment."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
                titleinfo : "Predator",
                rating :"7.5",
                overview :"A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//btE5TxACspwSxqva9yAVdfOnJGB.jpg",
                titleinfo : "Last Film Show",
                rating :"5",
                overview :"A 9-year-old boy in a remote village in India begins a lifelong love affair with cinema when he bribes his way into a rundown movie palace and spends a Summer watching movies from the projection booth."

            },
            {
                moviecard : "https://image.tmdb.org/t/p/w1280//mGXWYbpakk8uX8OkW1ihPjVzapB.jpg",
                titleinfo : "King Tweety",
                rating :"7.3",
                overview :"Everyone's favorite yellow canary unexpectedly becomes next in line for the crown when the queen of an island paradise disappears. His Little Highness’ entourage includes motorbike daredevil Granny and sly Sylvester, whose allegiance is tested when he uncovers a sinister plot to eliminate Tweety for good."

            },
 
 
 
 
 ]
 
 
    let result= ``;
    for (let i=0; i<imgarr.length; i++)
    {
        result += ` 
        
                     
    <div class="col-md-3">
        <div class="card">
            <figure class="moviecard">
                <img src="${imgarr[i].moviecard}" alt="">
                <figcaption>
                  <div class="titleinfo p-4">
                    <div class="row">
                        <div class="col-10">
                            <h4>${imgarr[i].titleinfo}</h4>
                        </div>
                        <div class="col-2">
                            <span class="rating">${imgarr[i].rating}</span>
                        </div>
                    </div>
                  </div>
                  <div class="overview p-4">
                    <h5>overview</h5>
                    ${imgarr[i].overview}
                  </div>
                </figcaption>
            </figure>
        </div>
    </div>
        
        
        `
    }




 
 //const IMG_PATH = `https://image.tmdb.org/t/p/w1280/`;

 const moviescontainer = document.getElementById("moviescontainer");
 moviescontainer.innerHTML=result;



 

