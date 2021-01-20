



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
                case 'genres':
                    dashboard.buildHorzBarChart('2019');
                    break;
                case 'type':
                    dashboard.buildPieChart('type', '2019');
                    break;
                case 'age':
                    dashboard.buildPieChart('age', '2019');
                    break;
                case 'gender':
                    dashboard.buildDonutChart('gender', '2019');
                    break;
                case 'poc':
                    dashboard.buildDonutChart('poc', '2019');
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
                case 'genres':
                    dashboard.buildHorzBarChart('2020');
                    break;
                case 'type':
                    dashboard.buildPieChart('type', '2020');
                    break;
                case 'age':
                    dashboard.buildPieChart('age', '2020');
                    break;
                case 'gender':
                    dashboard.buildDonutChart('gender', '2020');
                    break;
                case 'poc':
                    dashboard.buildDonutChart('poc', '2020');
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
        let dataToUse;
        if (year == '2020') {
            dataToUse = {
                labels: ['contemporary romance', 'YA', 'fantasy', 'memoir', 'historical romance', 'non-fiction', 'historical fiction', 'mystery', 'religious', 'sci-fi', 'superhero'],
                values: [47, 14, 4, 2, 11, 6, 1, 3, 6, 3, 3]
            }
        } else {
            dataToUse = {
                labels: ['contemporary romance', 'YA', 'fantasy', 'memoir', 'historical romance', 'non-fiction', 'historical fiction', 'mystery', 'religious', 'sci-fi'],
                values: [21, 14, 6, 4, 3, 3, 1, 1, 1, 1]
            }
        }

        new roughViz.BarH({
            element: '#genres',
            data: dataToUse,
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
        let dataToUse;
        if (year == '2020') {
            if (type == 'type') {
                dataToUse = {
                    labels: ['fiction', 'non-fiction'],
                    values: [86, 14]
                }
            } else {
                dataToUse = {
                    labels: ['adult', 'younger'],
                    values: [78, 22]
                }
            }
            
        } else {
            if (type == 'type') {
                dataToUse = {
                    labels: ['fiction', 'non-fiction'], 
                    values: [48, 7]
                }
            } else {
                dataToUse = {
                    labels: ['adult', 'younger'],
                    values: [33, 22]
                }
            }
        }
        // pie chart of 2019 books by fiction/nonfiction
        new roughViz.Pie({
            element: type == 'type' ? '#type' : '#age',
            data: dataToUse,
            fillStyle: type == 'type' ? 'solid' : 'cross-hatch',
            fillWeight: 1,
            roughness: 2,
            tooltipFontSize: '2rem',
            colors: type == 'type' ? ['#FF7F50', '#87ceeb'] : ['red', 'pink'],
            width: 450,
            height: 450,
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });

    },
    // build donut chart for author gender or POC characters
    buildDonutChart: (type, year) => {
        let dataToUse;
        let colors;
        if (year == '2020') {
            if (type == 'gender') {
                dataToUse = {
                    labels: ['female', 'male', 'multiple'],
                    values: [76, 22, 2]
                };
                colors = ['green', 'darkblue', '#717374'];
            } else {
                dataToUse = {
                    labels: ['yes', 'no', 'N/A'],
                    values: [35, 45, 20],
                };
                colors = ['#ff7f50', '#87CEEB', '#66c2a5'];
            }
        } else {
            if (type == 'gender') {
                dataToUse = {
                    labels: ['female', 'male'],
                    values: [47, 8]
                };
                colors = ['green', 'darkblue'];
            } else {
                dataToUse = {
                    labels: ['yes', 'no', 'N/A'],
                    values: [26, 18, 11],
                };
                colors = ['#ff7f50', '#87CEEB', '#66c2a5'];
            }
        }
        // pie chart of 2019 books by author gender or poc characters
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
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });
    }
}

// create initial charts
const sections = ['months', 'genres', 'type', 'age', 'gender', 'poc'];
sections.forEach(el => dashboard.addEventListeners(el));
dashboard.buildBarChart('2020');
dashboard.buildHorzBarChart('2020');
dashboard.buildPieChart('type', '2020');
dashboard.buildPieChart('age', '2020');
dashboard.buildDonutChart('gender', '2020');
dashboard.buildDonutChart('poc', '2020');