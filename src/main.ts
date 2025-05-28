import './style.css'
import './bonus';


//Scegli un esercizio tra Il compleanno dello chef e Dashboard della città del Modulo 1 – Advanced JavaScript e riscrivilo utilizzando TypeScript.
//Tipizza tutte le variabili, funzioni e strutture dati in modo esplicito, e verifica che il comportamento finale sia identico alla versione in JavaScript.
// Puoi partire da un nuovo progetto Vite oppure aggiungere TypeScript a un progetto esistente.

//Esercizio Il compleanno dello chef 
//In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
//Recuperare la ricetta da https://dummyjson.com/recipes/{id}
//Estrarre la proprietà userId dalla ricetta
//Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
//Restituire la data di nascita dello chef
//Note del docente
//Scrivi la funzione getChefBirthday(id), che deve:
//Essere asincrona (async).
//Utilizzare await per chiamare le API.
//Restituire una Promise con la data di nascita dello chef.
//Gestire gli errori con try/catch



interface Recipe {
  id: number;
  name: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  birthDate: string;
}

async function getChefBirthday(id: number): Promise<string> {
  try {
 
    const ricettaResponse: Response = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!ricettaResponse.ok) throw new Error("Errore nel recupero della ricetta");
    const recipe: Recipe = await ricettaResponse.json();

   
    const userResponse: Response = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
    if (!userResponse.ok) throw new Error("Errore nel recupero delle informazioni dello chef");
    const user: User = await userResponse.json();

    return user.birthDate;
  } catch (error) {
    console.error("Errore:", (error as Error).message);
    return "Data di nascita non disponibile";
  }
}


(async () => {
  try {
    const birthday: string = await getChefBirthday(1);
    console.log("Data di nascita dello chef:", birthday);
  } catch (error) {
    console.error("Errore:", (error as Error).message);
  }

})();







