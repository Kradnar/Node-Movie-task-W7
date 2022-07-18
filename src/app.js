const Movie = require("./utils")

const app = (argv) => {
  switch (argv[2]) {
    case "add":
      const newMovie = new Movie(argv[3], argv[4], argv[5]);
      newMovie.add()
      break;
    case "and":
      const newMovie2 = new Movie(argv[7], argv[8], argv[9])
      newMovie2.add()
    default:
      console.log("Something went wrong")
    break;
  }
};

app(process.argv)