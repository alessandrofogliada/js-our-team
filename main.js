// creare un array di oggetti per rappresentare i membri del team.
let container = document.getElementById("container");

let nomeCollaboratore = document.getElementById("nomemembro");

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const membriTeam = [
        // Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
        
    {   
        "nomecognome" : "Wayne Barnett",
        "ruolo" : "Founder e CEO" ,
        "img" : "wayne-barnett-founder-ceo.jpg"
    },

    {   
        "nomecognome" : "Angela Caroll",
        "ruolo" : "Chief Editor" ,
        "img" : "angela-caroll-chief-editor.jpg"
    },

    {   
        "nomecognome" : "Walter Gordon",
        "ruolo" : "Office Manager" ,
        "img" : "walter-gordon-office-manager.jpg"
    },

    {   
        "nomecognome" : "Angela Lopez",
        "ruolo" : "Social Media Manager" ,
        "img" : "angela-lopez-social-media-manager-ceo.jpg"
    },

    {   
        "nomecognome" : "Scott Estrada",
        "ruolo" : "Developer" ,
        "img" : "scott-estrada-developer.jpg"
    },  

    {   
        "nomecognome" : "Barbara Ramos",
        "ruolo" : "Founder e CEO",
        "img" : "barbara-ramos-founder-ceo.jpg"
    }       
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

console.log (membriTeam);

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

for (let i = 0; i < membriTeam.length; i++){
    let membro = membriTeam[i];
    // console.log(membro);
    let nomeMembro = membro.nomecognome;
    let ruoloMembro = membro.ruolo;
    // console.log(nomeMembro , ruoloMembro);
    nomeCollaboratore.append(nomeMembro , ',' , ruoloMembro , " - ");
}

