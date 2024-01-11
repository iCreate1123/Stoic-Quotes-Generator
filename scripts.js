const philosophersArray = [
[
    "You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius", 
    "Confine yourself to the present. - Marcus Aurelius", 
    "Waste no more ime arguing about what a good man should be. Be one. - Marcus Aurelius",
    "Have I been made for this, to lie under the blankets and keep myself warm. - Marcus Aurelius",
    "Life is neither good or evil, but only a place for good and evil - Marcus Aurelius"
],
[
    "We suffer more often in our imagination than in reality. - Seneca",
    "It is a rough road that leads to the heights of greatness. - Seneca",
    "He who is brave is free. - Seneca",
    "Hang on to your youthful enthusiasms, you will be able to use them better when you are older. - Seneca",
    "While we are postponing, life speeds by. - Seneca"
],
[
    "No man is free who is not master of himself. - Epictetus",
    "It is difficulties that show what men are. - Epictetus ",
    "Make the best use of what is in your power, and take rest as it happens. - Epictetus",
    "No great thing is created suddenly. - Epictetus",
    "If you want something good, get it yourself. - Epictetus"
],
[
    "No loss should be more to us than losing our time, for it's irretrievable. - Zeno",
    "Man conquers the world by conquering himself. - Zeno",
    "Better to trip with the feet than with the tongue. - Zeno",
    "Steel your sensibilities, so that life shall hurt you as little as possible. - Zeno",
    "We have two ears and one mouth, so we should listen more than we say. - Zeno"
],
[
    "If you accomplish something good with hard work, the labour passes quickly, but the good endures; if you do something shameful in pursuit of pleasure, the pleasures passes quickly, but shame endures. - Musonius Rufus",
    "You will earn the respect of all if you begin by earning the respect of yourself. Don't expect to encourage good deedds in people conscious of your own misdeeds. - Musonius Rufus",
    "We will train both soul and body when we accustom ourselves to cold, heat, thirst, hunger, scarcity of food, hardness of bed, abstaining from pleasures, and enduring pains. - Musonius Rufus",
    "Since every man dies, it is better to die with distinction than to live long. - Musonius Rufus",
    "Humanity must seek what is NOT simple and obvious using the simple and obvious. - Musonius Rufus"
]
]


const informationMarcus = "Marcus Aurelius was born on April 26, 121 AD, and he ruled as Roman Emperor from 161 to 180 AD. Marcus Aurelius is best known for his philosophical writings, particularly his personal notes and reflections collected in a work known as 'Meditations'. Unlike many emperors of his time, Marcus Aurelius was a philosopher-king who valued wisdom and virtue."

const informationSeneka = "Annaeus Seneca, was a prominent Stoic philosopher, statesman, and playwright in ancient Rome.Some of his most famous philosophical essays include 'Letters to Lucilius' (a collection of moral epistles) and essays on topics like anger, providence, and the brevity of life. Seneca also wrote tragedies, including plays like 'Phaedra' and 'Medea,' contributing to Roman literary tradition."

const informationEpictetus = "Epictetus was a prominent Stoic philosopher who lived during the first and second centuries AD. Epictetus was born into slavery, and he was later sold to a wealthy freedman named Epaphroditus. Despite being a slave, he had the opportunity to study philosophy under the Stoic philosopher Musonius Rufus. Epictetus gained his freedom at some point, and he began teaching philosophy in Rome."

const informationZeno = "Zeno of Citium was a Greek philosopher who lived from approximately 334 to 262 BCE. He is best known as the founder of Stoicism. Zeno's Stoicism became one of the major philosophical schools in the Hellenistic and Roman periods, influencing prominent figures like Seneca, Epictetus, and Marcus Aurelius.";

const informationMisonius = "Musonius Rufus was born around 20 AD in Volsinii, Etruria (modern-day Italy). He was a contemporary of Seneca the Younger and Epictetus, and he played a significant role in the development and spread of Stoicism. Musonius Rufus taught philosophy in Rome during the reigns of the emperors Nero and Vespasian."


const myButton = document.getElementById('myButton');
const heading = document.querySelector('h1');
const image = document.querySelector('img')
image.style.display = 'none'

function generateRandomNumber() {
    return Math.floor(Math.random()* (4 - 0 + 1));
}  

myButton.addEventListener('click', function() {   
    heading.style.display = 'none'
    image.style.display = 'block'
    let firstIndex = generateRandomNumber()
    let secondIndex = generateRandomNumber()
    const randomQuote = philosophersArray[firstIndex][secondIndex]  
   
    document.getElementById("quoteContainer").innerHTML = randomQuote

    
    switch(firstIndex) {
        case 0:
            document.getElementById("infoContainer").innerHTML = informationMarcus
            image.src = 'images/1_XcUyQqLcVmEzIq54ytRMUQ.jpg'
            image.alt = 'Marcus Aurelius'
            break;
        case 1: 
            document.getElementById("infoContainer").innerHTML = informationSeneka
            image.src = 'images/seneca-the-younger.jpg'
            image.alt = 'Seneca'
            break;
        case 2:
            document.getElementById("infoContainer").innerHTML = informationEpictetus
            image.src = 'images/Epicteti_Enchiridion_Latinis_versibus_adumbratum_(Oxford_1715)_frontispiece.jpg'
            image.alt = 'Epictetus'
            break;
        case 3: 
            document.getElementById("infoContainer").innerHTML = informationZeno
            image.src = 'images/800wm.jpg'
            image.alt = 'Zeno'
            break;
        case 4:
            document.getElementById("infoContainer").innerHTML = informationMisonius
            image.src = 'images/musonius-rufus-5.jpg'
            image.alt = 'Musonius'
            break;
    }          

})




