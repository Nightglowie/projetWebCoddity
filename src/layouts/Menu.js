import React from "react";

class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.changerImage = this.changerImage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    changerImage(){
        //ouvre et ferme le menuBurger
        document.getElementById("menuBurger").classList.toggle("isOpen");
        //décale en fonction de l'ouverture et de la fermeture du menuBurger le reste de la page
        document.getElementById("biggestDiv").classList.toggle("isOpen"); 
        //change la couleur des barres en fonction du fond
        document.getElementsByClassName("barre")[0].classList.toggle("white");
        document.getElementsByClassName("barre")[1].classList.toggle("white");
        document.getElementsByClassName("barre")[2].classList.toggle("white");
    }

    handleClick(e){
        e.preventDefault();
        this.changerImage();
    }

    render() {
        return(
            <div>
                <div id="btn-menuBurger" onClick={this.handleClick}>
                    <div className="barre"></div>
                    <div className="barre"></div>
                    <div className="barre"></div>
                </div>
                <div id="menuBurger">
                    <ul>
                    <li>
                    <a href="">Home</a>
                    </li>
                    <li>
                    <a href="">Gallerie</a>
                    </li>
                    <li>
                    <a href="">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>

            );
        }
    }

    export default Menu;