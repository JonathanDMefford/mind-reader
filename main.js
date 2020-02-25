let state = 0;
var setSymbol = '';
var x = '';
var header = [];
var paragraph = [];
function reload() {
    let randChar = '!@#$%&*~'

    setSymbol = randChar.charAt(Math.random() * randChar.length);

    randChar.replace(setSymbol, "");

    let nums = [];

    for (let i = 1; i <= 99; i++) {
        // set interval of i == 9, setSymbol
        var string = i + '-';
        if (i % 9 == 0) {
            string += setSymbol;
        } else {
            string += randChar.charAt(Math.random() * randChar.length);
        } string += '<br>';
        // concatenate the interval to the symbol
        console.log(string);
        nums.push(string);
    }
    console.log(nums);
    x = nums.join('');

    header = ['I can read your mind',
        'Pick a number from 1-99',
        'Add both digits together to get a new number',
        'Subtract your new number from the orignal number',
        x,
        'Your symbol is ' + '<br>' + '<br>' + setSymbol];

    paragraph = [' ',
        'when you have a number click next',
        'Ex: 20 is 2 + 0 = 2',
        'Ex: 20 - 2 = 18',
        'Find your new number, note the symbol beside the number',
        ' '];
}

document.getElementById('header').style.overflow = 'scroll';

function build() {
    reload();
    state = 0;
    document.getElementById('header').innerHTML = header[state];
    document.getElementById('paragraph').innerHTML = paragraph[state];
}

function nextPage() {
    state++;
    document.getElementById('header').innerHTML = header[state];
    document.getElementById('paragraph').innerHTML = paragraph[state];
    if (state >= 5) {
        document.getElementById('next').style.display = 'none';
    }
}

function restartPage() {
    state = 0;
    document.getElementById('next').style.display = 'inline-block';
    document.getElementById('header').innerHTML = header[state];
    document.getElementById('paragraph').innerHTML = paragraph[state];
    build();
}
build();