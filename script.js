document.addEventListener("DOMContentLoaded", function () {
    // Initialize with the first movie suggestion
    getRandomMovie();
});

// Manually define movie data
const movieData = [
    {
        MoviePosterLink: "oopiri_poster.jpg",
        FilmName: "Oopiri",
        Summary: "Oopiri is a 2016 Indian Telugu film. It was directed by Vamsi Paidipally and is the first Indian remake of the French film The Intouchables. The Intouchables was based on the true story of a French aristocrat and his caretaker. Plot Oopiri is about a quadriplegic multi-billionaire who hires a convict out on parole as his caretaker. The two help each other with their struggles and develop an unlikely bond. ",
        Genre: "Comedy",
        Rating: 8.0,
        TrailerLink: "https://youtu.be/e1ddsJ38D5Q?si=DemMHXTW_aLeXapH"
    },
    {
        MoviePosterLink: "jersey_poster.jpg",
        FilmName: "Jersey",
        Summary: "A failed cricketer decides to revive his cricketing career in his late 30's despite everyone being skeptical of his ability to do so.",
        Genre: "Drama",
        Rating: 3.8,
        TrailerLink: "https://youtu.be/AjAe_Q1WZ_8?si=URdiqVqyaJljUMbB"
    },
    {
      MoviePosterLink: "jawan.jpg",
      FilmName: "Jawan(2023)",

      Summary: "A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many.",

Genre: "Action, Drama",
Rating: "8.0/10",

TrailerLink: "https://www.youtube.com/watch?v=fPX0C-g5xpU"
    }
    // Add more movie data entries as needed
];

let currentMovieIndex = 0;

function getRandomMovie() {
    updateMovieData(movieData[currentMovieIndex]);
}

function updateMovieData(movieData) {
    document.getElementById("moviePoster").src = movieData.MoviePosterLink;
    document.getElementById("movieTitle").textContent = movieData.FilmName;
    document.getElementById("movieSummary").textContent = movieData.Summary;
    document.getElementById("movieGenre").textContent = "Genre: " + movieData.Genre;
    document.getElementById("movieRating").textContent = "Rating: " + movieData.Rating;
    document.getElementById("trailerLink").href = movieData.TrailerLink;
}

function getNextMovie() {
    currentMovieIndex = (currentMovieIndex + 1) % movieData.length;
    updateMovieData(movieData[currentMovieIndex]);
}

function getPreviousMovie() {
    currentMovieIndex = (currentMovieIndex - 1 + movieData.length) % movieData.length;
    updateMovieData(movieData[currentMovieIndex]);
}

document.getElementById("genreFilter").addEventListener("change", function () {
    // Implement filtering based on the selected genre here
    // You can filter the movieData array based on the selected genre and then display the matching movies.
});
