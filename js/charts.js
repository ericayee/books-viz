
// line chart of 2019 books by month
new roughViz.Bar({
    element: '#months',
    data: 'data/bymonth_2019.csv',
    title: 'By month finished',
    titleFontSize: '3rem',
    labels: 'month',
    values: 'books',
    roughness: 2,
    width: 800,
    height: 700,
    legend: false,
    axisFontSize: '2rem',
    tooltipFontSize: '1.5rem',
    margin: {top: 50, right: 20, bottom: 60, left: 20}
    // yLabel: 'books read',
    // xLabel: 'month',
});

// hbar chart of 2019 books by genre
new roughViz.BarH({
    element: '#genres',
    data: {
        labels: ['contemporary romance', 'YA', 'fantasy', 'memoir', 'historical romance', 'non-fiction', 'historical fiction', 'mystery', 'religious', 'sci-fi'],
        values: [21, 14, 6, 4, 3, 3, 1, 1, 1, 1]
    },
    title: 'By genre',
    titleFontSize: '3rem',
    // xLabel: 'books read',
    // yLabel: 'genre',
    roughness: 2,
    width: 900,
    height: 700,
    axisFontSize: '2rem',
    tooltipFontSize: '1.5rem',
    legend: false,
    color: 'purple',
    margin: {top: 50, right: 20, bottom: 70, left: 300}
  });

  // pie chart of 2019 books by fiction/nonfiction
  new roughViz.Pie({
    element: '#type',
    data: {
        labels: ['fiction', 'non-fiction'], 
        values: [48, 7]
    },
    title: 'By type',
    titleFontSize: '3rem',
    fillStyle: 'solid',
    tooltipFontSize: '1.5rem',
    // fillWeight: 3,
    // roughness: 2,
    width: 600,
    height: 600
});

// pie chart of 2019 books by author gender
new roughViz.Pie({
    element: '#gender',
    data: {
        labels: ['female', 'male'], 
        values: [47, 8]
    },
    title: 'By author gender',
    titleFontSize: '3rem',
    tooltipFontSize: '1.5rem',
    fillStyle: 'solid',
    fillWeight: 2,
    // roughness: 2,
    width: 600,
    height: 600,
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
    titleFontSize: '3rem',
    fillStyle: 'cross-hatch',
    tooltipFontSize: '1.5rem',
    // fillWeight: 3,
    // roughness: 2,
    width: 600,
    height: 600,
    colors: ['red', 'pink']
});

// donut chart of 2019 books by POC
new roughViz.Donut({
    element: '#poc',
    data: {
        labels: ['yes', 'no', 'N/A'], 
        values: [26, 18, 11],
    },
    title: 'Is there a POC major character?',
    titleFontSize: '2.5rem',
    fillStyle: 'cross-hatch',
    tooltipFontSize: '1.5rem',
    // fillWeight: 3,
    // roughness: 2,
    width: 600,
    height: 600
});