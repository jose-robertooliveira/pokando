const express = require("express");
const path = require("path");

const app = express();
const port = 3000;


var Pokemons = [
    {
        Name: "Venusaur",
        Type: "Grass",
        Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        Description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        Height: 2.0,
        Weight: 100,
        Category: "Seed",
        Abilities: "Overgrow",
    },
    {
        Name: "Butterfree",
        Type: "",
        Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        Description: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        Height: 1.1,
        Weight: 32,
        Category: "Butterfly",
        Abilities: "Compound Eyes",
    },
    {
        Name: "Pidgey",
        Type: "Normal",
        Image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
        Description: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
        Height: 0.3,
        Weight: 1.8,
        Category: "Tiny",
        Abilities: "Keen Eye",
    },
  ];


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
    const poke = Pokemons;
    setTimeout(() => {
    }, 2000);
    res.render("index", { pokedex: poke});
  });
  
  app.get("/cadastro", (req, res) => {
    res.render("cadastro");
  });
  
  app.get("/detalhes/:ind", (req, res) => {
    const i = req.params.ind;
    const poke = Pokemons[i];
    res.render("detalhes", { pokemon: poke });
  });
  
  app.post("/formulario", (req, res) => {
    const { Name, Type, Image, Description, Height, Weight, Category, Abilities } =
      req.body;
    Pokemons.push({
      Name,
      Type,
      Image,
      Description,
      Height,
      Weight,
      Category,
      Abilities,
    });
    res.redirect("/");
  });

app.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`)
);