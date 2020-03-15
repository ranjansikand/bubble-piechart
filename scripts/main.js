
var dataProcessor = function(d) {
  return {
    budget: parseFloat(d.budget),
    genres: d.genres,
    revenue: parseFloat(d.revenue),
    title: d.title
  };
}

d3.csv("./data/tmdb_5000_movies.csv", dataProcessor, function(data) {
  dataset = data.filter(function(d) {
    return (d.budget != 0 && d.revenue != 0);
  });
  bubblechart(dataset, '.bubble', 'NULL');
});
