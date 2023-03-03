import axios from "axios";
import figlet from "figlet";

let num = Math.floor(Math.random() * 1008 + 1);
let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/` + num)
    try{
        figlet(response.data.name, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        });
        }
    catch(error){
        console.log(error);
    }