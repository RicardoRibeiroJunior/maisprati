const arcondicionado = {
    marca: "Philco",
    cor: "Branco",
    potencia: "9000 btus",
    status: false,

    ligar: function(){
        this.status = true;
        console.log(`Ar condicionado ${this.marca} ligado!`);
    },

    desligar: function(){
        this.status = false;
        console.log(`Ar condicionado ${this.marca} desligado!`);
    }
}

arcondicionado.ligar();
arcondicionado.desligar();
