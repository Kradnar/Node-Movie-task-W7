const yargs = require("yargs");

const Movie = require("./utils")

const app = (argv) => {
  const newMovie = new Movie(argv.title, argv.actor, argv.director);
  newMovie.add()
  const newMovie2 = new Movie(argv.title2, argv.actor2, argv.director2)
  newMovie2.add()


  // switch (argv[2]) {
  //   case "add":
  //     const newMovie = new Movie(argv[3], argv[4], argv[5]);
  //     newMovie.add()
  //     const newMovie2 = new Movie(argv[7], argv[8], argv[9])
  //     newMovie2.add()
  //     break;
  //   default:
  //     console.log("Something went wrong")
  //   break;
  // }


  // switch (argv[6]) {
  //   case "and":
  //     const newMovie2 = new Movie(argv[7], argv[8], argv[9])
  //     newMovie2.add()
  //     break;
  //   default:
  //     console.log("No extra movies")
  // }
};

app(yargs.argv)