let heroBox1 = document.querySelector('.heroBoxTop1')
let heroBox2 = document.querySelector('.heroBoxCenter1')
let heroBox3 = document.querySelector('.heroBoxBot1')
let heroBox4 = document.querySelector('.heroBoxTop2')
let heroBox5 = document.querySelector('.heroBoxCenter2')
let heroBox6 = document.querySelector('.heroBoxBot2')

let attackBox1 = document.querySelector('.attack1')
let attackBox2 = document.querySelector('.attack2')
let attackBox3 = document.querySelector('.attack3')
let attackBox4 = document.querySelector('.attack4')
let attackBox5 = document.querySelector('.attack5')
let attackBox6 = document.querySelector('.attack6')


let animacion = document.querySelector('.firebox')
let animacion2 = document.querySelector('.arrowBox')
let animacion3 = document.querySelector('.warriorBox')
let animacion4 = document.querySelector('.firebox2')
let animacion5 = document.querySelector('.arrowBox2')
let animacion6 = document.querySelector('.warriorBox2')

let nameBox0 = document.querySelector('.name0')
let nameBox1 = document.querySelector('.name1')
let nameBox2 = document.querySelector('.name2')
let nameBox3 = document.querySelector('.name3')
let nameBox4 = document.querySelector('.name4')
let nameBox5 = document.querySelector('.name5')

let attackButton0 = document.querySelector('#attack-button0')
let attackButton1 = document.querySelector('#attack-button1')
let attackButton2 = document.querySelector('#attack-button2')
let attackButton3 = document.querySelector('#attack-button3')
let attackButton4 = document.querySelector('#attack-button4')
let attackButton5 = document.querySelector('#attack-button5')


function Mage(nombre,clase,posicion){

    this.nombre = nombre;
    this.clase = clase;
    this.posicion = posicion;

    this.atacar = function(){
        console.log(`lanzar bola de fuego`);
        attackBox1.classList.remove('hide')

        setTimeout(function(){
            attackBox1.classList.add('hide')
        }, 2000);
        clearTimeout()
    }
    this.atacar2 = function(){
        console.log(`lanzar bola de fuego`);
        attackBox4.classList.remove('hide')

        setTimeout(function(){
            attackBox4.classList.add('hide')
        }, 2000);
        clearTimeout()
    }

    this.cambiarClass = function(){

        animacion.classList.add('animacion')

        setTimeout(function(){
            animacion.classList.remove('animacion')
        },2000);
        clearTimeout()
    }
    this.cambiarClass2 = function(){
        animacion4.classList.add('animacion2')

        setTimeout(function(){
            animacion4.classList.remove('animacion2')
        },2000);
        clearTimeout()
    }

    this.seleccionarPosicionTop = function(){
        attackBox1.classList.add('top')
    }
    this.seleccionarPosicionMid = function(){
        attackBox1.classList.add('mid')
    }
    this.seleccionarPosicionBot = function(){
        attackBox1.classList.add('bot')
    }
    this.seleccionarPosicionTop2 = function(){
        attackBox4.classList.add('top')
    }
    this.seleccionarPosicionMid2 = function(){
        attackBox4.classList.add('mid')
    }
    this.seleccionarPosicionBot2 = function(){
        attackBox4.classList.add('bot')
    }
}

function Warrior(nombre,clase, posicion){
    this.nombre = nombre
    this.clase = clase
    this.posicion = posicion

    this.golpe = function(){
        console.log(`lanzar ${this.clase}`);
        attackBox3.classList.remove('hide')
        setTimeout(function(){
            attackBox3.classList.add('hide')
        }, 2000);
        clearTimeout()
    }
    this.golpe2 = function(){
        console.log(`lanzar ${this.clase}`);
        attackBox6.classList.remove('hide')
        setTimeout(function(){
            attackBox6.classList.add('hide')
        }, 2000);
        clearTimeout()
    }

    this.cambiarClass2 = function(){
        animacion6.classList.add('animacion2')

        setTimeout(function(){
            animacion6.classList.remove('animacion2')
        },2000);
        clearTimeout()
    }
    this.cambiarClass = function(){

        animacion3.classList.add('animacion')

        setTimeout(function(){
            animacion3.classList.remove('animacion')
        },2000);
        clearTimeout()
    }

    this.seleccionarPosicionTop = function(){
        attackBox3.classList.add('top')
    }
    this.seleccionarPosicionMid = function(){
        attackBox3.classList.add('mid')
    }
    this.seleccionarPosicionBot = function(){
        attackBox3.classList.add('bot')
    }
    this.seleccionarPosicionTop2 = function(){
        attackBox6.classList.add('top')
    }
    this.seleccionarPosicionMid2 = function(){
        attackBox6.classList.add('mid')
    }
    this.seleccionarPosicionBot2 = function(){
        attackBox6.classList.add('bot')
    }
}

function Archer(nombre,clase, posicion){
    this.nombre = nombre
    this.clase = clase
    this.posicion = posicion

    this.flecha = function(){
        attackBox2.classList.remove('hide')
        setTimeout(function(){
            attackBox2.classList.add('hide')
        }, 2000);
        clearTimeout()
    }
    this.flecha2 = function(){
        attackBox5.classList.remove('hide')
        setTimeout(function(){
            attackBox5.classList.add('hide')
        }, 2000);
        clearTimeout()
    }

    this.cambiarClass2 = function(){
        console.log(`lanzar ${this.clase}`);
        animacion5.classList.add('animacion2')

        setTimeout(function(){
            animacion5.classList.remove('animacion2')
        },2000);
        clearTimeout()
    }
    this.cambiarClass = function(){
        console.log(`lanzar ${this.clase}`);
        animacion2.classList.add('animacion')

        setTimeout(function(){
            animacion2.classList.remove('animacion')
        },2000);
        clearTimeout()
    }

    this.seleccionarPosicionTop = function(){
        attackBox2.classList.add('top')
    }
    this.seleccionarPosicionMid = function(){
        attackBox2.classList.add('mid')
    }
    this.seleccionarPosicionBot = function(){
        attackBox2.classList.add('bot')
    }
    this.seleccionarPosicionTop2 = function(){
        attackBox5.classList.add('top')
    }
    this.seleccionarPosicionMid2 = function(){
        attackBox5.classList.add('mid')
    }
    this.seleccionarPosicionBot2 = function(){
        attackBox5.classList.add('bot')
    }

    this.rotate180 = function(){
        animacion5.classList.add('rotate180')

        setTimeout(function(){
            animacion5.classList.remove('rotate180')
        },2000);
        clearTimeout()
    }
}

let btn = document.querySelector('#player1').addEventListener("click", function(e){
    e.preventDefault()
    let valor = document.querySelector('#inputBox1').value;
    let a = valor;
    let b;
    let c;

    while(b != 'mage' || 'archer' || 'warrior'){
        b = prompt("Seleccione una clase: mage, archer, warrior")
        
        if (b == 'mage') {
            let name1 = new Mage(a, b, c)
            name1.hp = 10;

            while(c != 'top' || 'mid' || 'bot'){
                c = prompt("Seleccione Posicion: top, mid, bot")
                if(c == 'top'){
                    name1.seleccionarPosicionTop()
                    nameBox0.innerHTML = a;
                    attackButton0.classList.add('blue')
                    heroBox1.classList.add('mage')

                    attackButton0.addEventListener("click", function(){
                        name1.cambiarClass()
                        name1.atacar()
                    })
                    break;
                }else if(c == 'mid'){
                    name1.seleccionarPosicionMid()
                    nameBox1.innerHTML = a;
                    attackButton1.classList.add('blue')
                    heroBox2.classList.add('mage')

                    attackButton1.addEventListener("click", function(){
                        name1.cambiarClass()
                        name1.atacar()
                    })
                    break;
            }else if(c == 'bot'){
                name1.seleccionarPosicionBot()
                nameBox2.innerHTML = a;
                attackButton2.classList.add('blue')
                heroBox3.classList.add('mage')

                attackButton2.addEventListener("click", function(){
                    name1.cambiarClass()
                    name1.atacar()
                })
                break;
            }else{
                alert('Posicion Invalida')
            }
        }
            console.log(name1)
            break;
        }else if(b == 'warrior'){
            let name2 = new Warrior(a, b, c)
            name2.hp = 15;
       
            while(c != 'top' || 'mid' || 'bot'){
                c = prompt("Seleccione Posicion: top, mid, bot")
                if(c == 'top'){
                    name2.seleccionarPosicionTop()
                    nameBox0.innerHTML = a;
                    attackButton0.classList.add('red')
                    heroBox1.classList.add('warrior')

                    attackButton0.addEventListener("click", function(){
                        name2.golpe()
                        name2.cambiarClass()
                    })
                    break;
                }else if(c == 'mid'){
                    name2.seleccionarPosicionMid()
                    nameBox1.innerHTML = a;
                    attackButton1.classList.add('red')
                    heroBox2.classList.add('warrior')

                    attackButton1.addEventListener("click", function(){
                        name2.golpe()
                        name2.cambiarClass()
                    })
                    break;
                }else if(c == 'bot'){
                    name2.seleccionarPosicionBot()
                    nameBox2.innerHTML = a;
                    attackButton2.classList.add('red')
                    heroBox3.classList.add('warrior')

                    attackButton2.addEventListener("click", function(){
                        name2.golpe()
                        name2.cambiarClass()
                    })
                    break;
                }else{
                    alert('Posicion Invalida')
                }
            }
            console.log(name2)
            break;
        }else if(b == 'archer'){
            let name3 = new Archer(a, b, c)
            name3.hp = 7;
            
            while(c != 'top' || 'mid' || 'bot'){
                c = prompt("Seleccione Posicion: top, mid, bot")
                if(c == 'top'){
                    name3.seleccionarPosicionTop()
                    nameBox0.innerHTML = a;
                    attackButton0.classList.add('green')
                    heroBox1.classList.add('archer')

                    attackButton0.addEventListener("click", function(){
                        name3.flecha()
                        name3.cambiarClass()
                    })
                    break;
                }else if(c == 'mid'){
                    name3.seleccionarPosicionMid()
                    nameBox1.innerHTML = a;
                    attackButton1.classList.add('green')
                    heroBox2.classList.add('archer')

                    attackButton1.addEventListener("click", function(){
                        name3.flecha()
                        name3.cambiarClass()
                    })
                    break;
                }else if(c == 'bot'){
                    name3.seleccionarPosicionBot()
                    nameBox2.innerHTML = a;
                    attackButton2.classList.add('green')
                    heroBox3.classList.add('archer')

                    attackButton2.addEventListener("click", function(){
                        name3.flecha()
                        name3.cambiarClass()
                    })
                    break;
                }else{
                    alert('Posicion Invalida')
                }
            }

        console.log(name3)
        break;
        }else{
            alert('ingreso invalido')
        }
    }
})


let btn2 = document.querySelector('#player2').addEventListener("click", function(e){
    e.preventDefault()
    let valor = document.querySelector('#inputBox2').value;
    let a = valor;
    let b;
    let c;

    while(b != 'mage' || 'archer' || 'warrior'){
        b = prompt("Seleccione una clase: mage, archer, warrior")
        if (b == 'mage') {
            let name4 = new Mage(a, b, c)
            name4.hp = 10;
            
            while(c != 'top' || 'mid' || 'bot'){
                c = prompt("Seleccione Posicion")
                if(c == 'top'){
                    name4.seleccionarPosicionTop2()
                    nameBox3.innerHTML = a;
                    attackButton3.classList.add('blue')
                    heroBox4.classList.add('mage')

                    attackButton3.addEventListener("click", function(){
                        name4.cambiarClass2()
                        name4.atacar2()
                    })
                    break;
                }else if(c == 'mid'){
                    name4.seleccionarPosicionMid2()
                    nameBox4.innerHTML = a;
                    attackButton4.classList.add('blue')
                    heroBox5.classList.add('mage')

                    attackButton4.addEventListener("click", function(){
                        name4.cambiarClass2()
                        name4.atacar2()
                    })
                    break;
                }else if(c == 'bot'){
                    name4.seleccionarPosicionBot2()
                    nameBox5.innerHTML = a;
                    attackButton5.classList.add('blue')
                    heroBox6.classList.add('mage')

                    attackButton5.addEventListener("click", function(){
                        name4.cambiarClass2()
                        name4.atacar2()
                    })
                    break;
                }else{
                    alert('Posicion Invalida')
                }
            }

            console.log(name4)
            break;
        }else if(b == 'warrior'){
            let name5 = new Warrior(a, b, c)
            name5.hp = 15;
       
            
            while(c != 'top' || 'mid' || 'bot'){
                c = prompt("Seleccione Posicion")
                if(c == 'top'){
                    name5.seleccionarPosicionTop2()
                    nameBox3.innerHTML = a;
                    attackButton3.classList.add('red')
                    heroBox4.classList.add('warrior')

                    attackButton3.addEventListener("click", function(){
                        name5.golpe2()
                        name5.cambiarClass2()
                    })
                    break;
                }else if(c == 'mid'){
                    name5.seleccionarPosicionMid2()
                    nameBox4.innerHTML = a;
                    attackButton4.classList.add('red')
                    heroBox5.classList.add('warrior')

                    attackButton4.addEventListener("click", function(){
                        name5.golpe2()
                        name5.cambiarClass2()
                    })
                    break;
                }else if(c == 'bot'){
                    name5.seleccionarPosicionBot2()
                    nameBox5.innerHTML = a;
                    attackButton5.classList.add('red')
                    heroBox6.classList.add('warrior')

                    attackButton5.addEventListener("click", function(){
                        name5.golpe2()
                        name5.cambiarClass2()
                    })
                    break;
                }else{
                    alert('Posicion Invalida')
                }
            }

            console.log(name5)
            break;
        }else if(b == 'archer'){
            let name6 = new Archer(a, b, c)
            name6.hp = 7;       

            while(c != 'top' || 'mid' || 'bot'){
                c = prompt("Seleccione Posicion")
                if(c == 'top'){
                    name6.seleccionarPosicionTop2()
                    nameBox3.innerHTML = a;
                    attackButton3.classList.add('green')
                    heroBox4.classList.add('archer')

                    attackButton3.addEventListener("click", function(){
                        name6.rotate180()
                        name6.flecha2()
                        name6.cambiarClass2()
                    })
                    break;
                }else if(c == 'mid'){
                    name6.seleccionarPosicionMid2()
                    nameBox4.innerHTML = a;
                    attackButton4.classList.add('green')
                    heroBox5.classList.add('archer')

                    attackButton4.addEventListener("click", function(){
                        name6.rotate180()
                        name6.flecha2()
                        name6.cambiarClass2()
                    })
                    break;
                }else if(c == 'bot'){
                    name6.seleccionarPosicionBot2()
                    nameBox5.innerHTML = a;
                    attackButton5.classList.add('green')
                    heroBox6.classList.add('archer')

                    attackButton5.addEventListener("click", function(){
                        name6.rotate180()
                        name6.flecha2()
                        name6.cambiarClas2()
                    })
                    break;
                }else{
                    alert('Posicion Invalida')
                }
            }
        console.log(name6)
        break;
        }else{
            alert('ingreso invalido')
        }
    }
    
})
