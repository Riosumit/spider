function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
let color1 = ["red", "yellow", "green"]
job()
async function job(){
    let element1=document.getElementById("game")
    let element2=document.getElementById("on")
    let s1="THE GAME IS ";
    let s2="ON";
    let s="";
    let s_on="";
    for(let j=0; j<color1.length;j++){
        element1.innerHTML="";
        element2.innerHTML="";
        let s="";
        let s_on="";
        for(let i=0;i<s1.length;i++){
            s+=s1[i];
            element1.innerHTML=s;
            await sleep(200);
        }
        element2.style.color=color1[j];
        for(let i=0;i<s2.length;i++){
            s_on+=s2[i];
            element2.innerHTML=s_on;
            await sleep(200);
        }
        await sleep(1000);
    }
    setInterval(job(),2000);
}