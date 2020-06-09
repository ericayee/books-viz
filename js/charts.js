
// line chart of 2019 books by month
new roughViz.Bar({
    element: '#months',
    data: 'data/bymonth_2019.csv',
    title: 'By month finished',
    titleFontSize: '.9',
    labels: 'month',
    values: 'books',
    // yLabel: 'books read',
    // xLabel: 'month',
    roughness: 2,
    width: 500,
    legend: false
 
});

// hbar chart of 2019 books by genre
new roughViz.BarH({
    element: '#genres',
    data: {
        labels: ['contemporary romance', 'YA', 'fantasy', 'memoir', 'historical romance', 'non-fiction', 'historical fiction', 'mystery', 'religious', 'sci-fi'],
        values: [21, 14, 6, 4, 3, 3, 1, 1, 1, 1]
    },
    title: 'By genre',
    titleFontSize: '.9',
    // xLabel: 'books read',
    // yLabel: 'genre',
    roughness: 2,
    width: 500,
    legend: false,
    color: 'purple',
    margin: {top: 50, right: 20, bottom: 70, left: 150}
  });

  // pie chart of 2019 books by fiction/nonfiction
  new roughViz.Pie({
    element: '#type',
    data: {
        labels: ['fiction', 'non-fiction'], 
        values: [48, 7]
    },
    title: 'By type',
    titleFontSize: '.9',
    fillStyle: 'solid',
    // fillWeight: 3,
    // roughness: 2,
    width: 500,
});

// pie chart of 2019 books by author gender
new roughViz.Pie({
    element: '#gender',
    data: {
        labels: ['female', 'male'], 
        values: [47, 8]
    },
    title: 'By author gender, guessed by name/appearace/pronouns',
    titleFontSize: '.9',
    fillStyle: 'solid',
    fillWeight: 2,
    // roughness: 2,
    width: 500,
    colors: ['green', 'darkblue']
});

// pie chart of 2019 books by target age
new roughViz.Pie({
    element: '#age',
    data: {
        labels: ['younger', 'adult'], 
        values: [22, 33]
    },
    title: 'By target age demographic',
    titleFontSize: '.9',
    fillStyle: 'cross-hatch',
    // fillWeight: 3,
    // roughness: 2,
    width: 500,
    colors: ['red', 'pink']
});

// donut chart of 2019 books by POC
new roughViz.Donut({
    element: '#poc',
    data: {
        labels: ['yes', 'no', 'N/A'], 
        values: [26, 18, 11],
    },
    title: 'Does the book have a POC major character?',
    titleFontSize: '.9',
    fillStyle: 'cross-hatch',
    // fillWeight: 3,
    // roughness: 2,
    width: 500
});