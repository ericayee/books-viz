// dashboard
const dashboard = {
    data: {
        total: {
            overall: {
                labels: ['2019', '2020', '2021', '2022'],
                values: [55, 100, 102, 160]
            },
            pubyear: {
                labels: ['2019', '2020', '2021', '2022'],
                values: [14, 34, 35, 65]
            }
        },
        months: {
            '2019': {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                values: [5, 5, 4, 4, 9, 3, 1, 2, 1, 5, 4, 12]
            },
            '2020': {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                values: [6, 5, 10, 13, 11, 10, 7, 9, 8, 8, 6, 7]
            },
            '2021': {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                values: [9, 7, 9, 6, 7, 2, 7, 11, 7, 12, 13, 12]
            },
            '2022': {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                values: [13, 18, 10, 19, 13, 13, 13, 12, 13, 13, 12, 11]
            }
        },
        genres: {
            '2019': {
                labels: ['contemporary romance', 'YA', 'fantasy', 'memoir', 'historical romance', 'non-fiction', 'historical fiction', 'mystery', 'religious', 'sci-fi'],
                values: [21, 14, 6, 4, 3, 3, 1, 1, 1, 1]
            },
            '2020': {
                labels: ['contemporary romance', 'YA', 'fantasy', 'memoir', 'historical romance', 'non-fiction', 'historical fiction', 'mystery', 'religious', 'sci-fi'],
                values: [47, 14, 7, 2, 11, 6, 1, 3, 6, 3]
            },
            '2021': {
                labels: ['contemporary romance', 'historical romance', 'fantasy', 'other fiction', 'sci-fi', 'non-fiction','religious', 'memoir', 'historical fiction', 'mystery' ],
                values: [43, 25, 11, 5, 4, 4, 3, 3, 3, 1]
            },
            '2022': {
                labels: ['contemporary romance', 'historical romance', 'fantasy romance', 'other fiction', 'romantic suspense', 'non-fiction', 'comedy manga', 'sci-fi romance', 'Christian', 'sci-fi', 'fantasy', 'memoir', 'mystery', 'magical realism', 'historical fiction', 'thriller' ],
                values: [38, 25, 20, 11, 10, 9, 8, 7, 7, 5, 5, 4, 3, 3, 3, 2]
            }
        },
        type: {
            '2019': {
                labels: ['fiction', 'non-fiction'], 
                values: [48, 7]
            },
            '2020': {
                labels: ['fiction', 'non-fiction'],
                values: [86, 14]
            },
            '2021': {
                labels: ['fiction', 'non-fiction'],
                values: [92, 10]
            },
            '2022': {
                labels: ['fiction', 'non-fiction'],
                values: [140, 20]
            }
        },
        age: {
            '2019': {
                labels: ['adult', 'young adult'],
                values: [33, 22]
            },
            '2020': {
                labels: ['adult', 'young adult'],
                values: [78, 22]
            },
            '2021': {
                labels: ['adult', 'young adult'],
                values: [88, 14]
            },
            '2022': {
                labels: ['adult', 'young adult'],
                values: [146, 14]
            }
        },
        gender: {
            '2019': {
                labels: ['female', 'male'],
                values: [47, 8]
            },
            '2020': {
                labels: ['female', 'male', 'various'],
                values: [76, 22, 2]
            },
            '2021': {
                labels: ['female', 'male', 'non-binary'],
                values: [89, 11, 2]
            },
            '2022': {
                labels: ['female', 'male', 'multiple', 'unknown'],
                values: [128, 19, 11, 2]
            }
        },
        poc: {
            '2019': {
                labels: ['yes', 'no', 'N/A'],
                values: [26, 18, 11],
            },
            '2020': {
                labels: ['yes', 'no', 'N/A'],
                values: [35, 45, 20],
            },
            '2021': {
                labels: ['yes', 'no', 'N/A'],
                values: [32, 45, 25],
            },
            '2022': {
                labels: ['yes', 'no', 'N/A'],
                values: [36, 69, 55],
            }
        },
        format: {
            '2022': {
                labels: ['ebook', 'audiobook', 'e-graphic novel', 'print'],
                values: [132, 16, 9, 3],
            }
        }
    },
    // set event listeners for all the year toggles
    addEventListeners: (section) => {
        ['2019', '2020', '2021', '2022'].forEach(year => {
            document.getElementById(`btn-${section}-${year}`).addEventListener('click', function () {
                const el = document.getElementById(section);
                while(el.firstChild && el.removeChild(el.firstChild));
                switch (section) {
                    case 'months':
                        dashboard.buildBarChart(year);
                        break;
                    case 'genres':
                        dashboard.buildHorzBarChart(year);
                        break;
                    case 'type':
                        dashboard.buildPieChart('type', year);
                        break;
                    case 'age':
                        dashboard.buildPieChart('age', year);
                        break;
                    case 'gender':
                        dashboard.buildDonutChart('gender', year);
                        break;
                    case 'poc':
                        dashboard.buildDonutChart('poc', year);
                        break;
                    default:
                        break;
                }
                if(!this.classList.contains('active')) {
                    this.classList.add('active');
                }
                if (year == '2022') {
                    document.getElementById(`btn-${section}-2019`).classList.remove('active');
                    document.getElementById(`btn-${section}-2020`).classList.remove('active');
                    document.getElementById(`btn-${section}-2021`).classList.remove('active');
                } else if (year == '2021') {
                    document.getElementById(`btn-${section}-2019`).classList.remove('active');
                    document.getElementById(`btn-${section}-2020`).classList.remove('active');
                    document.getElementById(`btn-${section}-2022`).classList.remove('active');
                } else if (year == '2020') {
                    document.getElementById(`btn-${section}-2019`).classList.remove('active');
                    document.getElementById(`btn-${section}-2021`).classList.remove('active');
                    document.getElementById(`btn-${section}-2022`).classList.remove('active');
                } else if (year == '2019') {
                    document.getElementById(`btn-${section}-2020`).classList.remove('active');
                    document.getElementById(`btn-${section}-2021`).classList.remove('active');
                    document.getElementById(`btn-${section}-2022`).classList.remove('active');
                }
            });
        })
    },
    // build bar chart for total read
    buildTotal: (type) => {
        new roughViz.Bar({
            element: type == 'overall' ? '#total' : '#pubyear',
            data: dashboard.data.total[type],
            labels: 'year',
            values: 'books read',
            roughness: 2,
            strokeWidth: 2,
            highlight: 'darkblue',
            width: 800,
            height: 600,
            legend: false,
            axisFontSize: '2rem',
            tooltipFontSize: '2.5rem',
            margin: { top: 20, right: 20, bottom: 70, left: 50 }
        });
    },
    // build bar chart for months
    buildBarChart: (year) => {
        new roughViz.Bar({
            element: '#months',
            data: dashboard.data.months[year],
            labels: 'month',
            values: 'books',
            roughness: 2,
            strokeWidth: 2,
            color: '#000080',
            highlight: 'lightblue',
            width: 800,
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
            data: dashboard.data.genres[year],
            roughness: 2,
            strokeWidth: 2,
            width: 800,
            height: 600,
            axisFontSize: '2rem',
            tooltipFontSize: '2.5rem',
            legend: false,
            color: 'purple',
            highlight: '#4d004d',
            margin: { top: 20, right: 20, bottom: 70, left: 300 }
        });
    },
    // build pie chart for fiction or age
    buildPieChart: (type, year) => {
        new roughViz.Pie({
            element: type == 'type' ? '#type' : '#age',
            data: dashboard.data[type][year],
            fillStyle: 'solid',
            fillWeight: 1,
            roughness: 1,
            strokeWidth: 2,
            tooltipFontSize: '2rem',
            colors: type == 'type' ? ['#FF7F50', '#45b3e0'] : ['#8700DB', '#C700C7'],
            width: 550,
            height: 550,
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });

    },
    // build donut chart for author gender or POC characters
    buildDonutChart: (type, year) => {
        let colors;
        let selector;
        if (type == 'gender') {
            colors = ['green', 'darkblue', '#ff7f50', '#8e8e8e'];

            if (year == '2021') {
                document.getElementById('third-gender').innerText = 'non-binary';
                document.getElementById('unknown-gender').innerText = '';
            } else if (year == '2022') {
                document.getElementById('third-gender').innerText = 'various';
                document.getElementById('unknown-gender').innerHTML = ', or <span style="color:#8e8e8e">unknown</span>'
            } else if (year == '2020' || year == '2019') {
                document.getElementById('third-gender').innerText = 'various';
                document.getElementById('unknown-gender').innerText = '';
            }

            selector = '#gender';

        } else if (type == 'poc') {
            colors = ['#87CEEB', '#66c2a5', '#8e8e8e'];

            selector = '#poc';
        } else if (type == 'format') {
            colors = ['#87CEEB', '#66c2a5', 'violet', '#717374'];

            selector = '#format';
        }

        new roughViz.Donut({
            element: selector,
            data: dashboard.data[type][year],
            tooltipFontSize: '2rem',
            fillStyle: type == 'poc' ? 'cross-hatch' : 'solid',
            fillWeight: 1,
            roughness: 1,
            width: 550,
            height: 550,
            colors: colors,
            highlight: '#000',
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });
    }
}

// create initial charts
const sections = ['months', 'genres', 'type', 'age', 'gender', 'poc'];
sections.forEach(el => dashboard.addEventListeners(el));
dashboard.buildTotal('overall');
dashboard.buildBarChart('2022');
dashboard.buildHorzBarChart('2022');
dashboard.buildPieChart('type', '2022');
dashboard.buildPieChart('age', '2022');
dashboard.buildDonutChart('gender', '2022');
dashboard.buildDonutChart('poc', '2022');
dashboard.buildDonutChart('format', '2022');
dashboard.buildTotal('pubyear');