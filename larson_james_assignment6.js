/**
* counts number of vowels in given string. Y is not a vowel
*/
function findVowels(s)
{
    var counter = 0;
    splitS = s.split("");
    splitS.forEach(function(element) {
        if(element.match(/[aeiou]/))
        {
            counter += 1;
        }
    });
    console.log("The number of vowels is: " + counter);
}

/**
* counts number of 'bob' within a given string
*/
function countBob(s)
{

    var count = (s.match(/(bob.*)/) || []).length;
    console.log("The number of bobs is: " + count);
}

var str = "acdefghijklmnopqrstuuuuuuvwxyz";
findVowels(str);

var str2 = "azcbobobegghakl";
countBob(str2);
