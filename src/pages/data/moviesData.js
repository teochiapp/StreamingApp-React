const moviesData = [
  {
    titulo: "El Padrino",
    duracion: "175 min",
    añoPublicacion: 1972,
    puntuacionIMDB: 9.2,
    descripcionCorta:
      "El patriarca de una poderosa familia de la mafia traslada su imperio criminal a su hijo no muy querido.",
    generos: ["Crimen"],
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    fotoPortada:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvJucE9mgq6GvXtcJAPzaJ9huMajoCDRSHWgVfmp9Tg&s",
    trailer: "https://www.youtube.com/embed/iOyQx7MXaz0?si=RouI38nQ-sYjPdii",
  },
  {
    titulo: "Pulp Fiction",
    duracion: "154 min",
    añoPublicacion: 1994,
    puntuacionIMDB: 8.9,
    descripcionCorta:
      "Las vidas de dos asesinos a sueldo, un boxeador, un gánster y su esposa se entrelazan en cuatro historias de violencia y redención.",
    generos: ["Crimen", "Drama"],
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    fotoPortada:
      "https://i.pinimg.com/474x/6f/68/97/6f68975ee44ba20b58577859566a94cb.jpg",
    trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY?si=ZwQT9vxpairVW8Wt",
  },
  {
    titulo: "Interstellar",
    duracion: "169 min",
    añoPublicacion: 2014,
    puntuacionIMDB: 8.6,
    descripcionCorta:
      "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de garantizar la supervivencia de la humanidad.",
    generos: ["Ciencia ficción", "Drama"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    fotoPortada:
      "https://es.web.img3.acsta.net/pictures/14/10/02/11/07/341344.jpg",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?si=gsQ4ErLVjWJ4B2B9",
  },
  {
    titulo: "Gladiator",
    duracion: "155 min",
    añoPublicacion: 2000,
    puntuacionIMDB: 8.5,
    descripcionCorta:
      "Un ex general romano se convierte en esclavo y lucha por su libertad en la arena, buscando venganza contra el emperador que lo traicionó.",
    generos: ["Acción", "Histórica"],
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    fotoPortada:
      "https://es.web.img3.acsta.net/medias/nmedia/18/70/92/02/20149073.jpg",
    trailer: "https://www.youtube.com/embed/P5ieIbInFpg?si=AX5kvw55TJEjsv3y",
  },
  {
    titulo: "Star Wars: Episodio IV - Una nueva esperanza",
    duracion: "121 min",
    añoPublicacion: 1977,
    puntuacionIMDB: 8.6,
    descripcionCorta:
      "Luke Skywalker comienza su viaje como un granjero en Tatooine y se une a la Alianza Rebelde para derrotar al malvado Imperio Galáctico y salvar a la princesa Leia.",
    generos: ["Acción", "Aventura", "Fantasía"],
    director: "George Lucas",
    cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    fotoPortada:
      "https://images.cdn1.buscalibre.com/fit-in/360x360/93/d1/93d145bf27fca2074a89b8f64250328c.jpg",
    trailer: "https://www.youtube.com/embed/vZ734NWnAHA?si=BHwVTqghcCF3kIaa",
  },
  {
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    duracion: "178 min",
    añoPublicacion: 2001,
    puntuacionIMDB: 8.8,
    descripcionCorta:
      "Un joven hobbit, Frodo Bolsón, emprende un peligroso viaje para destruir un poderoso anillo y salvar a la Tierra Media del malvado Señor Oscuro Sauron.",
    generos: ["Aventura", "Drama", "Fantasía"],
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    fotoPortada:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScV426nJeQL1i9yUAKDMJTAOuz2IBe6OnJSmLzIA4LQ&s",
    trailer: "https://www.youtube.com/embed/V75dMMIW2B4?si=xMm4-42sbFsPUIdZ",
  },
  {
    titulo: "Dune",
    duracion: "155 min",
    añoPublicacion: 1984,
    puntuacionIMDB: 6.5,
    descripcionCorta:
      "En el futuro lejano, un joven aristócrata lidera una rebelión para liberar a su planeta natal del gobierno opresor del emperador galáctico.",
    generos: ["Aventura", "Ciencia ficción"],
    director: "David Lynch",
    cast: ["Kyle MacLachlan", "Francesca Annis", "Sting"],
    fotoPortada:
      "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/embed/TTgk_iT8Uts?si=71uG-ad5DM7RcBGB",
  },
  {
    titulo: "Matrix",
    duracion: "136 min",
    añoPublicacion: 1999,
    puntuacionIMDB: 8.7,
    descripcionCorta:
      "Un hacker descubre que el mundo en el que vive es una simulación virtual y lucha contra las máquinas que la controlan.",
    generos: ["Ciencia ficción", "Acción"],
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    fotoPortada:
      "https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_SL1000_.jpg",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    titulo: "The Dark Knight",
    duracion: "152 min",
    añoPublicacion: 2008,
    puntuacionIMDB: 9.0,
    descripcionCorta:
      "Batman enfrenta al Joker, un criminal anárquico que desata el caos en Ciudad Gótica.",
    generos: ["Acción", "Crimen"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    fotoPortada:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    titulo: "Inception",
    duracion: "148 min",
    añoPublicacion: 2010,
    puntuacionIMDB: 8.8,
    descripcionCorta:
      "Un ladrón experimentado especializado en robar secretos a través de sueños debe llevar a cabo una tarea casi imposible.",
    generos: ["Ciencia ficción", "Acción", "Aventura"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    fotoPortada:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0nlwR2drdopQDyNQQxlmKqeuz8lUBs4zbexF5mSJVg&s",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    titulo: "Forrest Gump",
    duracion: "142 min",
    añoPublicacion: 1994,
    puntuacionIMDB: 8.8,
    descripcionCorta:
      "La historia de un hombre con coeficiente intelectual bajo que logra hacer cosas extraordinarias y ser testigo de importantes eventos históricos.",
    generos: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    fotoPortada:
      "https://i.pinimg.com/736x/a8/39/7d/a8397dcfdf56fc342c3712a91e186575.jpg",
    trailer: "https://www.youtube.com/embed/bLvqoHBptjg",
  },
  {
    titulo: "Jurassic Park",
    duracion: "127 min",
    añoPublicacion: 1993,
    puntuacionIMDB: 8.2,
    descripcionCorta:
      "Un parque temático con dinosaurios clonados sufre un desastroso accidente, desatando el caos.",
    generos: ["Ciencia ficción", "Aventura"],
    director: "Steven Spielberg",
    cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    fotoPortada:
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f00bf346385235.58520f9022451.jpg",
    trailer: "https://www.youtube.com/embed/lc0UehYemQA",
  },
  {
    titulo: "Schindler's List",
    duracion: "195 min",
    añoPublicacion: 1993,
    puntuacionIMDB: 9.0,
    descripcionCorta:
      "La historia de Oskar Schindler, un empresario alemán que salva a más de mil judíos durante el Holocausto.",
    generos: ["Drama", "Historia"],
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    fotoPortada:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/mxphAlJID9U",
  },
  {
    titulo: "The Shawshank Redemption",
    duracion: "142 min",
    añoPublicacion: 1994,
    puntuacionIMDB: 9.3,
    descripcionCorta:
      "Un banquero inocente es condenado a prisión y entabla amistad con un recluso veterano mientras busca la manera de escapar.",
    generos: ["Drama"],
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    fotoPortada:
      "https://m.media-amazon.com/images/I/71715eBi1sL._AC_SL1000_.jpg",
    trailer: "https://www.youtube.com/embed/NmzuHjWmXOc",
  },
  {
    titulo: "The Godfather: Part II",
    duracion: "202 min",
    añoPublicacion: 1974,
    puntuacionIMDB: 9.0,
    descripcionCorta:
      "La continuación de 'El Padrino', mostrando el ascenso de Michael Corleone y el origen de su padre, Vito Corleone.",
    generos: ["Crimen", "Drama"],
    director: "Francis Ford Coppola",
    cast: ["Al Pacino", "Robert De Niro", "Robert Duvall"],
    fotoPortada:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/9O1Iy9od7-A",
  },
  {
    titulo: "The Green Mile",
    duracion: "189 min",
    añoPublicacion: 1999,
    puntuacionIMDB: 8.6,
    descripcionCorta:
      "Un guardia de la prisión entabla amistad con un recluso condenado a muerte que parece tener habilidades curativas extraordinarias.",
    generos: ["Drama", "Fantasía"],
    director: "Frank Darabont",
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    fotoPortada:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/embed/Ki4haFrqSrw",
  },
  {
    titulo: "Braveheart",
    duracion: "177 min",
    añoPublicacion: 1995,
    puntuacionIMDB: 8.3,
    descripcionCorta:
      "La historia épica de William Wallace, un héroe escocés que lidera la lucha por la independencia de Escocia.",
    generos: ["Acción", "Drama", "Historia"],
    director: "Mel Gibson",
    cast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
    fotoPortada:
      "https://i.pinimg.com/originals/c6/49/cc/c649ccb3c548c90feddf6cdf663e3872.jpg",
    trailer: "https://www.youtube.com/embed/1NJO0jxBtMo",
  },
  {
    titulo: "The Silence of the Lambs",
    duracion: "118 min",
    añoPublicacion: 1991,
    puntuacionIMDB: 8.6,
    descripcionCorta:
      "Una joven agente del FBI busca la ayuda de un caníbal para capturar a un asesino en serie.",
    generos: ["Crimen", "Thriller"],
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    fotoPortada:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQagDL7lHbxjSksDo-FLUsXmMJcWh4nLdFFSVV9O82Zg&s",
    trailer: "https://www.youtube.com/embed/W6Mm8Sbe__o",
  },
  {
    titulo: "Goodfellas",
    duracion: "146 min",
    añoPublicacion: 1990,
    puntuacionIMDB: 8.7,
    descripcionCorta:
      "La historia de Henry Hill, un gánster que lucha por sobrevivir en el submundo del crimen.",
    generos: ["Crimen", "Drama"],
    director: "Martin Scorsese",
    cast: ["Ray Liotta", "Robert De Niro", "Joe Pesci"],
    fotoPortada:
      "https://i.pinimg.com/564x/b8/e7/60/b8e760c3cedffdf72efb7bef4f6ffe4e.jpg",
    trailer: "https://www.youtube.com/embed/qo5jJpHtI1Y",
  },
  {
    "titulo": "Avengers: Endgame",
    "duracion": "181 min",
    "añoPublicacion": 2019,
    "puntuacionIMDB": 8.4,
    "descripcionCorta": "Los Vengadores restantes se unen para deshacer las acciones de Thanos y restaurar el equilibrio del universo.",
    "generos": ["Acción", "Aventura", "Fantasía"],
    "director": "Anthony Russo, Joe Russo",
    "cast": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    "fotoPortada": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
    "trailer": "https://www.youtube.com/embed/TcMBFSGVi1c"
},
{
    "titulo": "The Lion King",
    "duracion": "88 min",
    "añoPublicacion": 1994,
    "puntuacionIMDB": 8.5,
    "descripcionCorta": "Un joven león llamado Simba debe encontrar su lugar en el ciclo de la vida después de la muerte de su padre, el rey Mufasa.",
    "generos": ["Animación", "Aventura", "Drama"],
    "director": "Roger Allers, Rob Minkoff",
    "cast": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    "fotoPortada": "https://images.moviesanywhere.com/18f5accdebb8d192cccb424ff76150f0/9cbdd11a-ba2d-4d0e-9549-fd5643f00a32.jpg",
    "trailer": "https://www.youtube.com/embed/4sj1MT05lAA"
}

];

export default moviesData;
