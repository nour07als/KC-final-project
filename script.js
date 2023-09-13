let FLag1={
    name:"Kuwait",
        src:"https://www.southbankmarine.com/wp-content/uploads/2016/12/Kuwait-Flag.png"
    }
    let Flag2= {
        name:"Bahrain",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/langsimple-640px-Flag_of_Bahrain.svg.png"
    }
    let Flag3 = {
    name:"Oman",
    src: "https://cdn.britannica.com/73/5773-004-F7C13E3D/Flag-Oman.jpg"
    }
    let Flag4 = {
        name:"Iran",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/255px-Flag_of_Iran.svg.png"
        } 
        let Flag5 = {
            name:"Iraq",
            src: "https://media.istockphoto.com/id/652226390/vector/iraq.jpg?s=612x612&w=0&k=20&c=U4qZADspdWqPxUqJVkZ_0dL595QkCmwDqRO23LbuIcg="
            } 
            let Flag6 = {
                name:"Qatar",
                src: "https://i.ebayimg.com/images/g/WqsAAOSwDNdV3buQ/s-l1200.jpg"
                } 
                let Flag7 = {
                    name:"Uae",
                    src: "https://www.nicepng.com/png/detail/274-2742297_flag-of-united-arab-emirates-uae-national-flag.png"
                    } 
                    let Flag8 = {
                        name:"Saudi Arabia",
                        src: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg"
                        } 
                        
    let Flags = [];
    Flags.push(FLag1,Flag2,Flag3,Flag4,Flag5,Flag6,Flag7,Flag8,);
    
    let FlagContainer = document.getElementById("container");
    
    Flags.forEach((Flag) => {
    
        FlagContainer.innerHTML += `
     <div class="flag">
     <img src="${Flag.src}" alt="flag picture" />
     <h2>${Flag.name}</h2>
     </div>
    `;
    
    });