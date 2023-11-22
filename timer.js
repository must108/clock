function Displayer(ident, text){
    document.getElementById(ident).innerHTML = text;
}

function timeFunct(){
    let d = new Date();
    let checker = false;

    let hour = function(){

        if(d.getHours() > 12){
            checker = true;
            return d.getHours() - 12;
        } else if (d.getHours() == 0){
            return d.getHours() + 12;
        } else {
            return d.getHours();
        }
    }

    let minutes = function(){
        if(d.getMinutes() < 10){
            return "0" + d.getMinutes();
        } else {
            return d.getMinutes();
        }
    }

    let seconds = function(){
        if(d.getSeconds() < 10){
            return "0" + d.getSeconds();
        } else {
            return d.getSeconds();
        }
    }

    let text = function(){
        if(checker){
            return "pm";
        } else {
            return "am";
        }
    }

    return hour() + ":" + minutes() + ":" + seconds() + " " + text();
}

async function showTime() {
    setInterval(async function() { 
        let myPromise = new Promise(function (resolve){
                resolve(timeFunct()); 
            });
            Displayer("demo", await myPromise);
        }, 1000);
    }

showTime();