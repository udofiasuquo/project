
 var quotes = ["Start writing, no matter what. The water does not flow until the faucet is turned on. - Louis L’Amour",

"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good. - William Faulkner",

"The first draft is just you telling yourself the story. - Terry Pratchett",

 "You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it. - Octavia E.Butler",

"Start before you’re ready. - Steven Pressfield",

"You can always edit a bad page. You can’t edit a blank page - Jodi Picoult",

"You can’t wait for inspiration. You have to go after it with a club. - Jack London",

 "I have never started a poem yet whose end I knew. Writing a poem is discovering. - Robert Frost",

 "If there's a book that you want to read, but it hasn't been written yet, then you must write it. - Toni Morrison.",

 "I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles. - Shannon Hale.",

"I get a lot of letters from people. They say, 'I want to be a writer.What should I do?' I tell them to stop writing to me and get on with it. - Ruth Rendell.",


"First, find out what your hero wants, then just follow him! - Ray Bradbury",

"The greatest part of a writer’s time is spent in reading, in order to write. A man will turn over half a library to make a book. - Samuel Johnson",

"Writing a novel is like driving a car at night. You can only see as far as your headlights, but you can make the whole trip that way. - E.L.Doctorow",

"To produce a mighty book, you must choose a mighty theme. - Herman Melville",

"Tell the readers a story! Because without a story, you are merely using words to prove you can string them together in logical sentences. - Anne McCaffrey",

"Description begins in the writer’s imagination but should finish in the reader’s. - Stephen King",

"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader. - Robert Frost",

"If you want to be a writer, you must do two things above all others: read a lot and write a lot. - Stephen King",

"Close the door. Write with no one looking over your shoulder. Don’t try to figure out what other people want to hear from you; figure out what you have to say. It’s the one and only thing you have to offer. - Barbara Kingsolver",

"Never write anything that does not give you great pleasure. Emotion is easily transferred from the writer to the reader.  - Joseph Joubert",

"My own experience is that once a story has been written, one has to cross out the beginning and the end. It is there that we authors do most of our lying. - Anton Chekhov",

"The most valuable of all talents is that of never using two words when one will do. - Thomas Jefferson",

"When your story is ready for rewrite, cut it to the bone. Get rid of every ounce of excess fat. This is going to hurt; revising a story down to the bare essentials is always a little like murdering children, but it must be done. - Stephen King",

"It is perfectly okay to write garbage as long as you edit brilliantly. - C.J.Cherryh",

"Half my life is an act of revision. - John Irving",

 "Writing without revising is the literary equivalent of waltzing gaily out of the house in your underwear. - Patricia Fuller",

 "Write your first draft with your heart. Rewrite with your head. - Mike Rich",

 "So the writer who breeds more words than he needs, is making a chore for the reader who reads. - Dr.Seuss",

 "You write to communicate to the hearts and minds of others what's burning inside you, and we edit to let the fire show through the smoke.- Arthur Plotnik",

"Anyone and everyone taking a writing class knows that the secret of good writing is to cut it back, pare it down, winnow, chop, hack, prune, and trim, remove every superfluous word, compress, compress, compress... - Nick Hornby",

"When you write a book, you spend day after day scanning and identifying the trees. When you’re done, you have to step back and look at the forest.",
];


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];   
}

  
function calculateLove() {
    var input1 = document.querySelectorAll("#name")[0].value;

    var firstChar = input1.slice(0,1);
    var upperCaseFirstChar = firstChar.toUpperCase();
    var restOfName = input1.slice(1, input1.length);
    restOfName = restOfName.toLowerCase();
    var capitalizedName = upperCaseFirstChar + restOfName;

    //alert("hello " +  capitalizedName);

     var input2 = document.querySelectorAll("#name")[1].value;
     var firstChar2 = input2.slice(0, 1);
     var upperCaseFirstChar2= firstChar2.toUpperCase();
     var restOfName2 = input2.slice(1, input2.length);
     restOfName2 = restOfName2.toLowerCase();
     var capitalizedName2 = upperCaseFirstChar2 + restOfName2;

    var name = capitalizedName  + " and " + capitalizedName2;

    var loveScore = Math.floor(Math.random() * 100) + 1;

    if(loveScore > 70){
        document.querySelector(".match").innerHTML = "Hello, " + name + ", Your lovescore is " + loveScore + "%. You love each other well well."
    } if(loveScore <= 70){
        document.querySelector(".match").innerHTML = "Hello, " + name + ", Your lovescore is " + loveScore + "%. Choose carefully."
    } 
    if (loveScore <= 30) {
        document.querySelector(".match").innerHTML = "Hello, " + name + ", Your lovescore is " + loveScore + "%. You go together like oil and water."
    }
}

let output = [];
 
function fizzBuzz(){
    for(let count = 1; count < 101; count++){
        if(count % 3 === 0 && count % 5 === 0){
          output.push(" FizzBuzz ");
        } else if(count % 3 === 0){
            output.push(" Fizz ");
        } else if(count % 5 === 0){
            output.push(" Buzz ");
        }
            else {
            output.push(" " + count);
        }
    }
    document.getElementById("show").innerHTML = output;
}

document.querySelectorAll