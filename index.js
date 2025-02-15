document.addEventListener("DOMContentLoaded", function(){
    
    function getRandomHexColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let list = document.querySelectorAll(".list");

    list.forEach(function(item){
        item.addEventListener("click" , function(){
            item.style.color = getRandomHexColor();
        })
    })

})