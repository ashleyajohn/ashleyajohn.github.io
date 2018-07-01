var container = document.getElementById('visualization');
			  // Create a DataSet (allows two way data-binding)
			  var today = new Date();
			  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
			  var items = new vis.DataSet([
			  	{id: 1, content: 'EYEBEAM <br>Resident', start: '2014-02-01', end:'2015-08-30', type:'range'},
			  	{id: 2, content: 'Consultant <br>for NYCDOE', start: '2016-07-15',type:""},
			  	{id: 3, content: 'Consultant <br>for NYCDOE', start: '2017-07-15', type:""},
			  	{id: 4, content: 'Parsons Design+Tech BFA', start: '2015-09-01', end: '2019-05-30'},
			  	{id: 5, content: 'Cornell-Tech ', start: '2017-09-01', }
			  	]);
			  // Configuration for the Timeline
			  var options = {
			  	height: '70vh',
			  	zoomable: false,
			  	start: new Date(2013, 12, 21),
			  	end: new Date(2018, 9, 30),
			  	min: new Date(2012,12,10),
			  	max: new Date(2020,03,20)
			  };
			  // Create a Timeline
			  var timeline = new vis.Timeline(container, items, options);
			  var txtData = document.getElementById('data');
			  var btnLoad = document.getElementById('load');
			  function loadData () {
			  	var temp="[{\"id\":"+Math.round(Math.random() * 100)+",\"content\":\""+txtData.value+"\",\"start\":\"2018-05-30\"}]"
			  	var data = JSON.parse(temp);
			  	if(txtData.value != ""){ 
			  		items.add(data);
			    // adjust the timeline window such that we see the loaded data
			    timeline.fit();
			}
		}
		btnLoad.onclick = loadData;
		 // attach events to the navigation buttons
    document.getElementById('zoomIn').onclick    = function () { timeline.zoomIn( 0.5); };
    document.getElementById('zoomOut').onclick   = function () { timeline.zoomOut( 0.5); };
   
