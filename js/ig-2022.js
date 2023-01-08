const dashboard = {
    // build total read 2019-2021
    buildTotal: () => {
        const dataToUse = {
            labels: ['2019', '2020', '2021', '2022'],
                values: [55, 100, 102, 160]
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
            font: 'Source Sans Pro',
            axisFontSize: '1.5rem',
            tooltipFontSize: '2.5rem',
            margin: { top: 20, right: 20, bottom: 60, left: 50 }
        });
    },
    // build bar chart for months
    buildMonth: () => {
        let dataToUse = {
            labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
            values: [13, 18, 10, 19, 13, 13, 13, 12, 13, 13, 12, 11]
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
            font: 'Source Sans Pro',
            axisFontSize: '2rem',
            tooltipFontSize: '2.5rem',
            margin: { top: 20, right: 20, bottom: 60, left: 50 }
        });
    },
    // build hbar chart for genres
    buildGenre: () => {
        let dataToUse = {
            labels: ['contemporary romance', 'historical romance', 'fantasy romance', 'other fiction', 'romantic suspense', 'non-fiction', 'comedy manga', 'sci-fi romance', 'Christian', 'sci-fi', 'fantasy', 'memoir', 'mystery', 'magical realism', 'historical fiction', 'thriller' ],
            values: [38, 25, 20, 11, 10, 9, 8, 7, 7, 5, 5, 4, 3, 3, 3, 2]
        };

        new roughViz.BarH({
            element: '#genres',
            data: dataToUse,
            roughness: 2,
            width: 700,
            height: 600,
            font: 'Source Sans Pro',
            axisFontSize: '1.5rem',
            tooltipFontSize: '2.5rem',
            legend: false,
            // color: 'purple',
            highlight: '#4d004d',
            margin: { top: 20, right: 20, bottom: 70, left: 300 }
        });
    },
    // build dont chart for author gender or POC characters
    buildDonutChart: (type) => {
        let dataToUse;
        let colors;
        if (type == 'gender') {
            dataToUse = {
                labels: ['female', 'male', 'multiple', 'unknown'],
                values: [128, 19, 11, 2]
            };
            colors = ['green', 'darkblue', '#ff7f50', '#8e8e8e'];
        } else {
            colors = ['#87CEEB', '#66c2a5', 'violet', '#717374'];
        }

        new roughViz.Donut({
            element:  type == 'gender' ? '#gender' : '#format',
            data: dataToUse,
            tooltipFontSize: '2rem',
            fillStyle: 'solid',
            fillWeight: 1,
            roughness: 1,
            width: 450,
            height: 450,
            colors: colors,
            highlight: '#8e8e8e',
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 },
            font: 'Source Sans Pro'
        });
    },


}

// create initial charts
dashboard.buildTotal();
dashboard.buildMonth();
dashboard.buildGenre();
dashboard.buildDonutChart('gender');
dashboard.buildDonutChart('format');