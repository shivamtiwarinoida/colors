
class Colour{
    constructor(hex,element){
        this.hex=hex;
        this.element=element;
        this.lock=false;
    }

    setHex(hex){
        this.hex=hex;
        this.element.style.backgroundColor=hex;
        this.element.querySelector('.inp').value=hex;
    }

    setLock(locked){
        this.lock=locked;
        if(locked){
            this.element.classList.add('locked');
            this.element.querySelector('img').src="lock-solid.svg";
        }
        else{
            this.element.classList.remove('locked');
            
            this.element.querySelector('img').src="lock-open-solid.svg";
        }
    }

    toggle(){
        this.setLock(!this.lock);
    }

    generateHex(){
        if(this.lock){
            return;
        }
        else{

        }
        const chars='0123456789ABCDEF';

        let hex='#';
        for(let i=0;i<6;i++){
            hex+=chars[Math.floor(Math.random()*16)];
        }

        this.setHex(hex);
        //console.log(hex);
    }


    copyTo(){
        const input=this.element.querySelector('.inp');
        input.select();
        document.execCommand('copy');
        input.blur();

        this.element.classList.add('copy');
        setTimeout(()=>{
            this.element.classList.remove('copy');
        },1000);
    }
} 

const colEl=document.querySelectorAll('.colours .colour');

const colours=[];

for(let i=0;i<colEl.length;i++){
    const colourEl=colEl[i];
    const input=colourEl.querySelector('.inp');
    const lock=colourEl.querySelector('.toggle');
    const copyHex=colourEl.querySelector('.copy');

    const hex=input.value;
    const colour=new Colour(hex,colourEl);
    input.addEventListener('input',()=>colour.setHex(e.target.value));
    lock.addEventListener('click',()=>colour.toggle());
    copyHex.addEventListener('click',()=> {
        //console.log("copy");
        colour.copyTo();
    });

    colour.generateHex();
    colours.push(colour);
}


const work=()=>{
    //console.log('working');
    for(let i=0;i<colours.length;i++){
        colours[i].generateHex();
    }
}













let s=0;
let ul=document.getElementById('ul');

const show=()=>{
    if(s%2==0){
        ul.classList.add('show');
    }
    else if(s%2==1){
        
        ul.classList.remove('show');
    }

    s=(s+1)%2;
}

document.getElementById('icon').addEventListener('click',show);


document.addEventListener("DOMContentLoaded",function (){
    const progressInner=document.querySelector('.progress-inner');
    const progress=document.getElementById('pro');
    progress.style.display='none';
    window.addEventListener('scroll',()=>{
        let h=document.documentElement || document.body;

        let st=h.scrollTop || document.body.scrollTop; 
        let sh=h.scrollHeight || document.body.scrollHeight;

        let per=st/(sh-h.clientHeight)*100;
        let rounded=Math.round(per);
        progressInner.style.width=rounded+"%";
        progressInner.innerText=rounded+"%";
        if(rounded<7){
            progress.style.display='none';
        }
        else if(rounded>95){
            progress.style.display='none';
        }
        else{
            progress.style.display='block';
        }
    })
})