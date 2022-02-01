var container = document.getElementById('visualization');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = mm + '/' + dd + '/' + yyyy;

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([{
        id: 1,
        content: 'B.S. in Industrial Engineering @ Pitt',
        start: '2013-08-26',
        end: '2017-04-30'
    },
    {
        id: 2,
        content: 'M.Eng. in Operations<br>Research and <br>Information<br>Engineering<br>@ Cornell Tech',
        start: '2017-08-21',
        end: '2018-05-27'
    },
    {
        id: 3,
        content: 'Data Engineer<br>@ Bloomberg',
        start: '2018-06-11',
        end: '2019-11-01'
    },
    {
        id: 4,
        content: 'Analyst<br>Intern<br>@ Source One',
        start: '2017-05-01'
    },
    {
        id: 5,
        content: 'Business<br>Systems<br>Intern<br>@ Giant Eagle',
        start: '2014-05-12'
    },
    {
        id: 6,
        content: 'Research Assistant @ Pitt IE Department',
        start: '2014-10-01',
        end: '2017-04-30'
    },
    {
        id: 7,
        content: 'Program<br>Coordinator<br>@ Pitt Res Life',
        start: '2016-01-05'
    },
    {
        id: 8,
        content: 'Data Engineering Team Leader<br>@ Bloomberg',
        start: '2019-11-01',
        end: '2021-11-12'
    },
    {
        id: 9,
        content: 'Data Engineering<br>@ Spotify',
        start: '2021-12-06'
    }

]);

// Configuration for the Timeline
var options = {
    height: '45vh',
    horizontalScroll: true
};


// Create a Timeline
var timeline = new vis.Timeline(container, items, options);
