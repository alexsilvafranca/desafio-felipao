let meuHeroi = "Felipão";
let XP = 4500;

function contador() {
    let nivel = "";

    if (XP <= 1000) {
        nivel = "Ferro";
    } else if (XP >= 1001 && XP <= 2000) {
        nivel = "Bronze";
    } else if (XP >= 2001 && XP <= 5000) {
        nivel = "Prata";
    } else if (XP >= 5001 && XP <= 7000) {
        nivel = "Ouro";
    } else if (XP >= 7001 && XP <= 8000) {
        nivel = "Platina";
    } else if (XP >= 8001 && XP <= 9000) {
        nivel = "Ascendente";
    } else if (XP >= 9001 && XP <= 10000) {
        nivel = "Imortal";
    } else if (XP > 10000) {
        nivel = "Radiante";
    }

    // Retorna a mensagem final com o nível
    console.log(`O Herói de nome ${meuHeroi} está no nível de ${nivel}`);
}

contador();