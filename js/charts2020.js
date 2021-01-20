



// dashboard
const dashboard = {
    // set event listeners for all the year toggles
    addEventListeners: (section) => {
        document.getElementById(`btn-${section}-2019`).addEventListener('click', function () {
            const el = document.getElementById(section);
            while(el.firstChild && el.removeChild(el.firstChild));
            switch (section) {
                case 'months':
                    dashboard.buildBarChart('2019');
                    break;
                default:
                    break;
            }
            
            if(!this.classList.contains('active')) {
                this.classList.toggle('active');
                document.getElementById(`btn-${section}-2020`).classList.toggle('active');
            }
        });
        document.getElementById(`btn-${section}-2020`).addEventListener('click', function () {
            const el = document.getElementById(section);
            while(el.firstChild && el.removeChild(el.firstChild));
            switch (section) {
                case 'months':
                    dashboard.buildBarChart('2020');
                    break;
                default:
                    break;
            }
            if(!this.classList.contains('active')) {
                this.classList.toggle('active');
                document.getElementById(`btn-${section}-2019`).classList.toggle('active');
            }
        });
    },
    // build bar chart for months
    buildBarChart: (year) => {
        let dataToUse;
        if (year == '2020') {
            dataToUse = {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                values: [6, 5, 10, 13, 11, 10, 7, 9, 8, 8, 6, 7]
            }
        } else {
            dataToUse = {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                values: [5, 4, 4, 9, 3, 1, 2, 1, 5, 4, 12]
            }
        }

        new roughViz.Bar({
            element: '#months',
            data: dataToUse,
            labels: 'month',
            values: 'books',
            roughness: 2,
            width: 700,
            height: 600,
            legend: false,
            axisFontSize: '2rem',
            tooltipFontSize: '2.5rem',
            margin: { top: 20, right: 20, bottom: 60, left: 50 }
        });
    },
    // build hbar chart for genres
    buildHorzBarChart: (year) => {
        new roughViz.BarH({
            element: '#genres',
            data: {
                labels: ['contemporary romance', 'YA', 'fantasy', 'memoir', 'historical romance', 'non-fiction', 'historical fiction', 'mystery', 'religious', 'sci-fi', 'superhero'],
                values: [47, 14, 4, 2, 11, 6, 1, 3, 6, 3, 3]
            },
            roughness: 2,
            width: 700,
            height: 600,
            axisFontSize: '2rem',
            tooltipFontSize: '2.5rem',
            legend: false,
            color: 'purple',
            margin: { top: 20, right: 20, bottom: 70, left: 300 }
        });
    },
    // build pie chart for fiction or age
    buildPieChart: (type, year) => {
        // pie chart of 2019 books by fiction/nonfiction
        new roughViz.Pie({
            element: '#type',
            data: {
                labels: ['fiction', 'non-fiction'],
                values: [86, 14]
            },
            fillStyle: 'solid',
            fillWeight: 1,
            roughness: 2,
            tooltipFontSize: '2rem',
            width: 450,
            height: 450,
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });

        // pie chart of 2019 books by target age
        new roughViz.Pie({
            element: '#age',
            data: {
                labels: ['younger', 'adult'],
                values: [22, 78]
            },
            fillStyle: 'cross-hatch',
            tooltipFontSize: '2rem',
            fillWeight: 1,
            roughness: 2,
            width: 450,
            height: 450,
            colors: ['red', 'pink'],
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        }); F
    },
    // build donut chart for author gender or POC characters
    buildDonutChart: (type, year) => {
        // pie chart of 2019 books by author gender
        new roughViz.Donut({
            element: '#gender',
            data: {
                labels: ['female', 'male', 'multiple'],
                values: [76, 22, 2]
            },
            tooltipFontSize: '2rem',
            fillStyle: 'solid',
            fillWeight: 1,
            roughness: 1,
            width: 450,
            height: 450,
            colors: ['green', 'darkblue', '#717374'],
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });

        // donut chart of 2019 books by POC
        new roughViz.Donut({
            element: '#poc',
            data: {
                labels: ['yes', 'no', 'N/A'],
                values: [35, 45, 20],
            },
            fillStyle: 'cross-hatch',
            tooltipFontSize: '2rem',
            fillWeight: 1,
            roughness: 1,
            width: 450,
            height: 450,
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });
    }
}











// event listeners
const eventListenersFunc = {

    }

    // initiate
// create initial charts
dashboard.addEventListeners('months');
dashboard.buildBarChart('2020');