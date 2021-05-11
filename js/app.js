document.addEventListener("DOMContentLoaded",()=>{
    console.log(200);
    let date, pub, article_section, stock_article, btn_article
        date = ({
            myDate : new Date().getFullYear(),
            target : document.querySelector("footer p")
            
        })
        /* bouton pour voir les articles */
        btn_article =document.querySelector(".btn-add")
        date.target.innerText += date.myDate;
        console.log(typeof date)
        /* objet article  -> titre,date,msg,image*/
        pub = [
            {
                titre: "Yoshi",
                date: `04-05-${date.myDate}`,
                msg: "Yoshi est un personnage fictif de jeu vidéo créé par le japonais Shigefumi Hino. Il apparaît  d'abord dans la série Super Mario où il accompagne Mario et Luigi, puis dans sa propre série avec, Super Mario World 2: Yoshi's Island.",
                image: "./asset/yoshi.webp"
            },
            {
                titre: "Wario",
                date: `01-05-${date.myDate}`,
                msg: "Wario est un personnage de jeu vidéo créé par Hiroji Kiyotake en 1992 pour l'entreprise japonaise Nintendo. Wario est le double maléfique de Mario et son ennemi principal après Bowser et Donkey Kong.",
                image: "./asset/warioo.webp",
    
            },
            {
                titre: "Waluigi",
                date: `02-05-${date.myDate}`,
                msg: "Waluigi est un personnage de fiction qui apparaît dans des jeux de sport et des party games de Nintendo.  Il apparaît pour la première fois en 2000 dans Mario Tennis, où il a été créé pour être le partenaire de Wario.",
                image: "./asset/waluigiii.png"
               
            }

        ]

        /* itération */
        article_section = document.querySelector(".article_of");
        stock_article = "";
        for(data of pub){
            console.log(
                `${data.titre} ${data.date} ${data.msg} ${data.image}`
            )
            stock_article += `
                            <figure>
                                <img src="${data.image}" alt="image">
                                <figcaption>
                                    <h2>${data.titre}</h2>
                                    <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                    <p>${data.msg}</p>
                                </figcaption>
                            </figure>`
            }
     
        btn_article.addEventListener("click",function(){
            article_section.innerHTML = stock_article;
            article_section.classList.toggle("article_on");
           this.classList.toggle("btn-remove");
        })




})