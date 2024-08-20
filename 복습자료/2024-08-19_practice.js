function changeColor(){

    const colorEl =document.getElementById("selColor");

    const area1 = document.getElementById("area1");

    area1.style.backgroundColor = colorEl.value;
}

function halfSize(){

    const area2 = document.getElementById("area2");

    area2.style.width = '50px';
    area2.style.height = '50px';
}

function defaultSize(){

    const area2 = document.getElementById("area2");

    area2.style.width = '100px';
    area2.style.height = '100px';
}


function doubleSize(){
    
    const area2 = document.getElementById("area2");
    
    area2.style.width = '200px';
    area2.style.height = '200px';
}

function resize(widthEl, heightEl){
    

    area2.style.width = widthEl + 'px';
    area2.style.height = heightEl + 'px';
}


// function changeColor2(){
//     const area3 = document.getElementById("area3");

//     area3.style.backgroundColor = 'red';

// }

// function changeColor3(){
//     const area3 = document.getElementById("area3");

//     area3.style.backgroundColor = 'black';
// }

window.onload = function(){
    const area3 = document.getElementById("area3");
    // 마우스가 #area3 요소 안으로 들어갔을 때 : mouseenter
    area3.addEventListener('mouseenter', function(){
        this.style.backgroundColor = 'red';
    });

    // 마우스가 #area3 요소 밖으로 나갔을 대 : mouseout
    area3.addEventListener('mouseout', function(){
        this.style.backgroundColor = 'black';
    })
}