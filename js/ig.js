const dashboard = {
    // build total read 2019-2021
    buildTotal: () => {
        const dataToUse = {
            labels: ['2019', '2020', '2021'],
            values: [55, 100, 102]
        }

        new roughViz.Bar({
            element: '#total',
            data: dataToUse,
            labels: 'year',
            values: 'books read',
            roughness: 2,
            highlight: 'darkblue',
            width: 700,
            height: 600,
            legend: false,
            axisFontSize: '2rem',
            tooltipFontSize: '2.5rem',
            margin: { top: 20, right: 20, bottom: 60, left: 50 }
        });
    },
    // build bar chart for months
    buildMonth: () => {
        let dataToUse = {
            labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
            values: [9, 7, 9, 6, 7, 2, 7, 11, 7, 12, 13, 12]
        }

        new roughViz.Bar({
            element: '#months',
            data: dataToUse,
            labels: 'month',
            values: 'books',
            roughness: 2,
            color: '#5e0098',
            width: 700,
            height: 600,
            legend: false,
            axisFontSize: '2rem',
            tooltipFontSize: '2.5rem',
            margin: { top: 20, right: 20, bottom: 60, left: 50 }
        });
    },
    // build hbar chart for genres
    buildGenre: () => {
        let dataToUse = {
            labels: ['contemporary romance', 'historical romance', 'fantasy', 'other fiction', 'sci-fi', 'non-fiction','religious', 'memoir', 'historical fiction', 'mystery', ],
            values: [43, 25, 11, 5, 4, 4, 3, 3, 3, 1]
        };

        new roughViz.BarH({
            element: '#genres',
            data: dataToUse,
            roughness: 2,
            width: 700,
            height: 600,
            axisFontSize: '2rem',
            tooltipFontSize: '2.5rem',
            legend: false,
            // color: 'purple',
            highlight: '#4d004d',
            margin: { top: 20, right: 20, bottom: 70, left: 300 }
        });
    },
    // build pie chart for age
    buildAge: () => {
        let dataToUse = {
            labels: ['adult', 'younger'],
            values: [88, 14]
        };
    
        new roughViz.Pie({
            element: '#age',
            data: dataToUse,
            fillStyle: 'solid',
            fillWeight: 1,
            roughness: 1,
            tooltipFontSize: '2rem',
            colors: ['#8700DB', '#C700C7'],
            width: 450,
            height: 450,
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });

    },
    // build dont chart for author gender or POC characters
    buildDonutChart: (type) => {
        let dataToUse;
        let colors;
        if (type == 'gender') {
            dataToUse = {
                labels: ['female', 'male', 'non-binary'],
                values: [88, 11, 2]
            };
            colors = ['green', 'darkblue', '#ff7f50'];
        } else {
            dataToUse = {
                labels: ['yes', 'no', 'N/A'],
                values: [32, 45, 24],
            };
            colors = ['#87CEEB', '#66c2a5', '#717374'];
        }

        new roughViz.Donut({
            element:  type == 'gender' ? '#gender' : '#poc',
            data: dataToUse,
            tooltipFontSize: '2rem',
            fillStyle: type == 'gender' ? 'solid' : 'cross-hatch',
            fillWeight: 1,
            roughness: 1,
            width: 450,
            height: 450,
            colors: colors,
            highlight: '#8e8e8e',
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });
    },


}

// create initial charts
dashboard.buildTotal();
dashboard.buildMonth();
dashboard.buildGenre();
dashboard.buildAge();
dashboard.buildDonutChart('gender');
dashboard.buildDonutChart('poc');