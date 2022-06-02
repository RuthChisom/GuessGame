var endRange = 2; //the highest possibly guessed number
var userPoints = 0; //stores user points
const guessGame = (end) =>{
    var userName = prompt("Enter your User Name"); //stores user name
    if(userName=="") return false //ensure value is not empty
    while(end!=0){
        //system randomly selects a number between specified range
        var sysPredict = Math.floor(Math.random() * end) + 1; //random always returns a value less than 1 and exclusive of the range
        var userPredict = prompt("Enter an integer between 1 and "+end); //stores user prediction
        if(sysPredict==userPredict){
            userPoints++;
            end++;
        }else{
            end=0;
            alert("GAME OVER! "+userName+" scored "+userPoints+"Point(s)");
        }
    }
}

guessGame(endRange);