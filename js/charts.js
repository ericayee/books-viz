



// dashboard
const dashboard = {
    // set event listeners for all the year toggles
    addEventListeners: (section) => {
        ['2019', '2020', '2021'].forEach(year => {
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
                if (year == '2021') {
                    document.getElementById(`btn-${section}-2019`).classList.remove('active');
                    document.getElementById(`btn-${section}-2020`).classList.remove('active');
                } else if (year == '2020') {
                    document.getElementById(`btn-${section}-2019`).classList.remove('active');
                    document.getElementById(`btn-${section}-2021`).classList.remove('active');
                } else if (year == '2019') {
                    document.getElementById(`btn-${section}-2020`).classList.remove('active');
                    document.getElementById(`btn-${section}-2021`).classList.remove('active');
                }
            });
        })
    },
    // build bar chart for total read
    buildTotal: (type) => {
        let dataToUse;
        if (type == 'overall') {
            dataToUse = {
                labels: ['2019', '2020', '2021'],
                values: [55, 100, 102]
            }
        } else if (type == 'pubyear') {
            dataToUse = {
                labels: ['2019', '2020', '2021'],
                values: [14, 34, 35]
            }
        }

        new roughViz.Bar({
            element: type == 'overall' ? '#total' : '#pubyear',
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
            margin: { top: 20, right: 20, bottom: 70, left: 50 }
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
        } else if (year == '2019') {
            dataToUse = {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                values: [5, 5, 4, 4, 9, 3, 1, 2, 1, 5, 4, 12]
            }
        } else {
            dataToUse = {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                values: [9, 7, 9, 6, 7, 2, 7, 11, 7, 12, 13, 12]
            }
        }

        new roughViz.Bar({
            element: '#months',
            data: dataToUse,
            labels: 'month',
            values: 'books',
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
    // build hbar chart for genres
    buildHorzBarChart: (year) => {
        let dataToUse;
        if (year == '2021') {    
            dataToUse = {
                labels: ['contemporary romance', 'historical romance', 'fantasy', 'other fiction', 'sci-fi', 'non-fiction','religious', 'memoir', 'historical fiction', 'mystery', ],
                values: [43, 25, 11, 5, 4, 4, 3, 3, 3, 1]
            };
        } else if (year == '2020') {
            dataToUse = {
                labels: ['contemporary romance', 'YA', 'fantasy', 'memoir', 'historical romance', 'non-fiction', 'historical fiction', 'mystery', 'religious', 'sci-fi'],
                values: [47, 14, 7, 2, 11, 6, 1, 3, 6, 3]
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
            highlight: '#4d004d',
            margin: { top: 20, right: 20, bottom: 70, left: 300 }
        });
    },
    // build pie chart for fiction or age
    buildPieChart: (type, year) => {
        let dataToUse;
        if (year == '2021') {
            if (type == 'type') {
                dataToUse = {
                    labels: ['fiction', 'non-fiction'],
                    values: [92, 10]
                }
            } else {
                dataToUse = {
                    labels: ['adult', 'younger'],
                    values: [88, 14]
                }
            }
        } else if (year == '2020') {
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
            roughness: 1,
            tooltipFontSize: '2rem',
            colors: type == 'type' ? ['#FF7F50', '#45b3e0'] : ['pink', 'red'],
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
        if (year == '2021') {
            if (type == 'gender') {
                dataToUse = {
                    labels: ['female', 'male', 'non-binary'],
                    values: [89, 11, 2]
                };
                colors = ['green', 'darkblue', '#717374'];
            } else {
                dataToUse = {
                    labels: ['yes', 'no', 'N/A'],
                    values: [32, 45, 25],
                };
                colors = ['#ff7f50', '#87CEEB', '#66c2a5'];
            }
            document.getElementById('third-gender').innerText = 'non-binary';
        } else if (year == '2020') {
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
            document.getElementById('third-gender').innerText = 'multiple';
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
            highlight: '#8e8e8e',
            legend: false,
            margin: { top: 0, right: 20, bottom: 20, left: 20 }
        });
    },
        // read in pub year
        buildPubYear: () => {
            const dataToUse = {
                labels: ['2019', '2020', '2021'],
                values: [25, 34, 34]
            }
    
            new roughViz.Bar({
                element: '#pubyear',
                data: dataToUse,
                labels: 'year',
                values: 'books read',
                roughness: 2,
                highlight: 'darkblue',
                yLabel: '%',
                width: 700,
                height: 600,
                legend: false,
                axisFontSize: '2rem',
                tooltipFontSize: '2.5rem',
                margin: { top: 20, right: 20, bottom: 70, left: 80 }
            });
        }
}

// create initial charts
const sections = ['months', 'genres', 'type', 'age', 'gender', 'poc'];
sections.forEach(el => dashboard.addEventListeners(el));
dashboard.buildTotal('overall');
dashboard.buildBarChart('2021');
dashboard.buildHorzBarChart('2021');
dashboard.buildPieChart('type', '2021');
dashboard.buildPieChart('age', '2021');
dashboard.buildDonutChart('gender', '2021');
dashboard.buildDonutChart('poc', '2021');
dashboard.buildTotal('pubyear');