
// line chart of 2019 books by month
new roughViz.Bar({
    element: '#months',
    data: 'data/bymonth_2019.csv',
    labels: 'month',
    values: 'books',
    roughness: 2,
    width: 700,
    height: 600,
    legend: false,
    axisFontSize: '2rem',
    tooltipFontSize: '2.5rem',
    margin: {top: 20, right: 20, bottom: 60, left: 50}
});

// hbar chart of 2019 books by genre
new roughViz.BarH({
    element: '#genres',
    data: {
        labels: ['contemporary romance', 'YA', 'fantasy', 'memoir', 'historical romance', 'non-fiction', 'historical fiction', 'mystery', 'religious', 'sci-fi'],
        values: [21, 14, 6, 4, 3, 3, 1, 1, 1, 1]
    },
    roughness: 2,
    width: 700,
    height: 600,
    axisFontSize: '2rem',
    tooltipFontSize: '2.5rem',
    legend: false,
    color: 'purple',
    margin: {top: 20, right: 20, bottom: 70, left: 300}
  });

  // pie chart of 2019 books by fiction/nonfiction
  new roughViz.Pie({
    element: '#type',
    data: {
        labels: ['fiction', 'non-fiction'], 
        values: [48, 7]
    },
    fillStyle: 'solid',
    fillWeight: 1,
    roughness: 2,
    tooltipFontSize: '2rem',
    width: 450,
    height: 450,
    legend: false,
    margin: {top: 0, right: 20, bottom: 20, left: 20}
});

// pie chart of 2019 books by author gender
new roughViz.Pie({
    element: '#gender',
    data: {
        labels: ['female', 'male'], 
        values: [47, 8]
    },
    tooltipFontSize: '2rem',
    fillStyle: 'solid',
    fillWeight: 1,
    roughness: 2,
    width: 450,
    height: 450,
    colors: ['green', 'darkblue'],
    legend: false,
    margin: {top: 0, right: 20, bottom: 20, left: 20}
});

// pie chart of 2019 books by target age
new roughViz.Pie({
    element: '#age',
    data: {
        labels: ['younger', 'adult'], 
        values: [22, 33]
    },
    fillStyle: 'cross-hatch',
    tooltipFontSize: '2rem',
    fillWeight: 1,
    roughness: 2,
    width: 450,
    height: 450,
    colors: ['red', 'pink'],
    legend: false,
    margin: {top: 0, right: 20, bottom: 20, left: 20}
});

// donut chart of 2019 books by POC
new roughViz.Donut({
    element: '#poc',
    data: {
        labels: ['yes', 'no', 'N/A'], 
        values: [26, 18, 11],
    },
    fillStyle: 'cross-hatch',
    tooltipFontSize: '2rem',
    fillWeight: 1,
    roughness: 1,
    width: 450,
    height: 450,
    legend: false,
    margin: {top: 0, right: 20, bottom: 20, left: 20}
});