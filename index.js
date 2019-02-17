document.addEventListener('DOMContentLoaded',function(){
    let quote = document.getElementById('quote');
    let chuck = document.getElementById('chuck-norris');
    let moves = ["slap", "backflip", "chop"];

    function randomAttack(){
        let ctr = moves.length;
        let index;
        let temp;
    
        while(ctr > 0){
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = moves[ctr];
            moves[ctr] = moves[index];
            moves[index] = temp;
        }
        return moves;
    }

    chuck.onclick=function(){
        randomAttack();
        let attack = moves[0];
        chuck.classList.add(attack);
        quote.classList.add('shake');
        req = new XMLHttpRequest();
        req.open("GET",'https://api.chucknorris.io/jokes/random',true);
        req.send();
        req.onload=function(){
            json=JSON.parse(req.responseText);
            console.log(json);
            document.getElementById('quote').innerHTML=JSON.stringify(json["value"])} ;
        setTimeout(function(){
            chuck.classList.remove(attack);
            quote.classList.remove('shake');
        }, 1500);
    };
});


