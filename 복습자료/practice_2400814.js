function order(){
    let orderer_info = document.getElementById("orderer_info")
    let order_list = document.getElementById("order_list")

    let address=document.getElementById("address");
    let phone=document.getElementById("phone");
    

    orderer_info.innerHTML = "<ul>" 
                                    + "<li>주소 : " + address.value+"</li>"
                                    + "<li>연락처 : " + phone.value+"</li>" 
                            + "</ul>";


    let main_menu=document.getElementById("main_menu");
    
    let topping=document.getElementsByTagName("topping");
    let side_menu=document.getElementsByName("side_menu");


    const ulEle = document.createElement("ul");
    const liEle1 = document.createElement("li");
    const liEle2 = document.createElement("li");
    const liEle3 = document.createElement("li");

    const textNode1 = document.createTextNode("메뉴 : " + main_menu.value);

    let selTopping = [];

    for(let t of topping){
        if(t.checked){ // checked: 체크되어있는지여부(T/F)
            selTopping.push(t.value);
        }
    }

    const textNode2 = document.createTextNode("토핑 : " + selTopping);

    let selSideMenu = [];

    for(let s of side_menu){
        if(s.checked){ // checked: 체크되어있는지여부(T/F)
            selSideMenu.push(s.value);
        }
    }

    const textNode3 = document.createTextNode("사이드 : " + selSideMenu);

    liEle1.appendChild(textNode1);
    liEle2.appendChild(textNode2);
    liEle3.appendChild(textNode3);
    ulEle.appendChild(liEle1);
    ulEle.appendChild(liEle2);
    ulEle.appendChild(liEle3);
    order_list.append(ulEle);
    
}

function deleteOrder(){
    // 주문자 정보 삭제
    document.getElementById("orderer_info").innerHTML = "";

    // 메뉴 정보 삭제
    document.querySelector("#order_list>ul").remove();
}