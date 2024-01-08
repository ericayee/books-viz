// dashboard
const dashboard = {
    data: {
        total: {
            overall: {
                labels: ['2019', '2020', '2021', '2022', '2023'],
                values: [55, 100, 102, 160, 134]
            },
            pubyear: {
                labels: ['2019', '2020', '2021', '2022', '2023'],
                values: [14, 34, 35, 65, 57]
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
            },
            '2023': {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                values: [8, 8, 11, 11, 8, 13, 13, 17, 11, 13, 9, 11]
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
                labels: ['contemporary romance', 'historical romance', 'fantasy', 'other fiction', 'sci-fi', 'non-fiction','religious', 'memoir', 'historical fiction', 'mystery'],
                values: [43, 25, 11, 5, 4, 4, 3, 3, 3, 1]
            },
            '2022': {
                labels: ['contemporary romance', 'historical romance', 'fantasy romance', 'other fiction', 'romantic suspense', 'non-fiction', 'comedy manga', 'sci-fi romance', 'Christian', 'sci-fi', 'fantasy', 'memoir', 'mystery', 'magical realism', 'historical fiction', 'thriller'],
                values: [38, 25, 20, 11, 10, 9, 8, 7, 7, 5, 5, 4, 3, 3, 3, 2]
            },
            '2023': {
                labels: ['contemporary romance', 'historical romance', 'non-fiction','memoir', 'Christian', 'fantasy romance', 'romantic suspense', 'paranormal romance', 'sci-fi romance', 'fantasy', 'thriller', 'sci-fi', 'historical fiction', 'horror'],
                values: [32, 28, 14, 10, 10, 9, 6, 6, 5, 5, 4, 4, 2, 1]
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
            },
            '2023': {
                labels: ['fiction', 'non-fiction'],
                values: [100, 34]
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
            },
            '2023': {
                labels: ['adult', 'young adult'],
                values: [120, 14]
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
            },
            '2023': {
                labels: ['female', 'male', 'multiple', 'non-binary'],
                values: [114, 15, 4, 1]
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
            ,
            '2023': {
                labels: ['yes', 'no', 'N/A'],
                values: [27, 62, 55],
            }
        },
        format: {
            '2022': {
                labels: ['ebook', 'audiobook', 'print'],
                values: [141, 16, 3],
            },
            '2023': {
                labels: ['ebook', 'audiobook', 'print'],
                values: [110, 19, 5],
            }
        }
    },
    // set event listeners for all the year toggles
    addEventListeners: (section) => {
        ['2019', '2020', '2021', '2022', '2023'].forEach((year, i) => {
            if ( !(section == 'format' && i < 3) ) {
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
                        case 'format':
                            dashboard.buildDonutChart('format', year);
                            break;
                        default:
                            break;
                    }
                    if(!this.classList.contains('active')) {
                        this.classList.add('active');
                    }
    
                    if (year == '2023') {
                        if (section !== 'format') {
                            document.getElementById(`btn-${section}-2019`).classList.remove('active');
                            document.getElementById(`btn-${section}-2020`).classList.remove('active');
                            document.getElementById(`btn-${section}-2021`).classList.remove('active');
                        }
                        document.getElementById(`btn-${section}-2022`).classList.remove('active');
                    } else if (year == '2022') {
                        if (section !== 'format') {
                            document.getElementById(`btn-${section}-2019`).classList.remove('active');
                            document.getElementById(`btn-${section}-2020`).classList.remove('active');
                            document.getElementById(`btn-${section}-2021`).classList.remove('active');
                        }
                        document.getElementById(`btn-${section}-2023`).classList.remove('active');
                    } else if (year == '2021' && section !== 'format') {
                        document.getElementById(`btn-${section}-2019`).classList.remove('active');
                        document.getElementById(`btn-${section}-2020`).classList.remove('active');
                        document.getElementById(`btn-${section}-2022`).classList.remove('active');
                        document.getElementById(`btn-${section}-2023`).classList.remove('active');
                    } else if (year == '2020' && section !== 'format') {
                        document.getElementById(`btn-${section}-2019`).classList.remove('active');
                        document.getElementById(`btn-${section}-2021`).classList.remove('active');
                        document.getElementById(`btn-${section}-2022`).classList.remove('active');
                        document.getElementById(`btn-${section}-2023`).classList.remove('active');
                    } else if (year == '2019' && section !== 'format') {
                        document.getElementById(`btn-${section}-2020`).classList.remove('active');
                        document.getElementById(`btn-${section}-2021`).classList.remove('active');
                        document.getElementById(`btn-${section}-2022`).classList.remove('active');
                        document.getElementById(`btn-${section}-2023`).classList.remove('active');
                    }
                });
            }
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
            color: 'skyblue',
            highlight: 'darkblue',
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

            if (year == '2019') {
                colors = ['green', 'darkblue']
            } else if (year == '2020') {
                colors = ['green', 'darkblue', 'purple']
            } else if (year == '2021') {
                ['green', 'darkblue', '#ff7f50']
            } else if (year == '2022') {
                colors = ['green', 'darkblue', 'purple', '#8e8e8e']
            } else {
                // year == '2023'
                colors = ['green', 'darkblue', 'purple', '#ff7f50']
            }

            selector = '#gender';

        } else if (type == 'poc') {
            colors = ['#87CEEB', '#66c2a5', '#8e8e8e'];

            selector = '#poc';
        } else if (type == 'format') {
            colors = ['#87CEEB', '#66c2a5', 'violet'];

            selector = '#format';
        }

        new roughViz.Donut({
            element: selector,
            data: dashboard.data[type][year],
            tooltipFontSize: '2rem',
            fillStyle: type == 'poc' ? 'cross-hatch' : 'solid',
            fillWeight: 1,
            roughness: 1,
            colors: colors,
            highlight: '#000',
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });
    }
}

// create initial charts
const sections = ['months', 'genres', 'type', 'age', 'gender', 'poc', 'format'];
sections.forEach(el => dashboard.addEventListeners(el));
dashboard.buildTotal('overall');
dashboard.buildBarChart('2023');
dashboard.buildHorzBarChart('2023');
dashboard.buildPieChart('type', '2023');
dashboard.buildPieChart('age', '2023');
dashboard.buildDonutChart('gender', '2023');
dashboard.buildDonutChart('poc', '2023');
dashboard.buildDonutChart('format', '2023');
dashboard.buildTotal('pubyear');