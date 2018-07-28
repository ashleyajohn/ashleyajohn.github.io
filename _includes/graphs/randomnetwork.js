var nodes = new vis.DataSet([
{id: 8, label:'Grants Pass, OR Metro Area'},{id: 4, label:'Durham-Chapel Hill, NC Metro Area'},{id: 19, label:'Santa Maria-Santa Barbara, CA Metro Area'},{id: 5, label:'El Centro, CA Metro Area'},{id: 2, label:'Chico, CA Metro Area'},{id: 6, label:'Elizabethtown-Fort Knox, KY Metro Area'},{id: 0, label:'Blacksburg-Christiansburg-Radford, VA Metro Area'},{id: 21, label:'Spartanburg, SC Metro Area'},{id: 10, label:'Laredo, TX Metro Area'},{id: 12, label:'Mankato-North Mankato, MN Metro Area'},{id: 16, label:'Prescott, AZ Metro Area'},{id: 3, label:'Dothan, AL Metro Area'},{id: 7, label:'Flagstaff, AZ Metro Area'},{id: 13, label:'McAllen-Edinburg-Mission, TX Metro Area'},{id: 20, label:'Shreveport-Bossier City, LA Metro Area'},{id: 14, label:'Odessa, TX Metro Area'},{id: 9, label:'Hinesville, GA Metro Area'},{id: 15, label:'Panama City, FL Metro Area'},{id: 1, label:'Champaign-Urbana, IL Metro Area'},{id: 11, label:'Las Cruces, NM Metro Area'}
])

var edges = new vis.DataSet([
{from: 0, to: 1, value:-0.0503628985935},{from: 0, to: 4, value:-0.631496464998},{from: 0, to: 7, value:-0.0256338106613},{from: 0, to: 15, value:0.271115244524},{from: 0, to: 16, value:0.246386156592},{from: 0, to: 21, value:0.0238243652029},{from: 1, to: 4, value:-1.13844276761},{from: 1, to: 6, value:0.135105260897},{from: 1, to: 7, value:-0.755141904659},{from: 1, to: 13, value:1.09953969025},{from: 1, to: 17, value:-0.0503628985935},{from: 1, to: 19, value:0.122740716931},{from: 2, to: 7, value:0.444218860049},{from: 2, to: 8, value:-0.12455016239},{from: 2, to: 15, value:0.444218860049},{from: 2, to: 16, value:0.246386156592},{from: 2, to: 19, value:0.382396140219},{from: 2, to: 21, value:0.382396140219},{from: 3, to: 4, value:-0.0874565304916},{from: 3, to: 9, value:0.135105260897},{from: 3, to: 15, value:-0.0750919865256},{from: 3, to: 20, value:0.22165706866},{from: 3, to: 23, value:-0.000904722729224},{from: 4, to: 7, value:0.172198892796},{from: 4, to: 9, value:0.172198892796},{from: 4, to: 10, value:-0.0750919865256},{from: 4, to: 11, value:0.28347978849},{from: 4, to: 17, value:-0.0627274425595},{from: 4, to: 18, value:-0.000904722729224},{from: 4, to: 19, value:0.382396140219},{from: 4, to: 21, value:0.617322475574},{from: 4, to: 23, value:0.246386156592},{from: 4, to: 24, value:0.988258794556},{from: 5, to: 7, value:0.56786429971},{from: 5, to: 10, value:0.0856470850332},{from: 5, to: 13, value:-0.112185618424},{from: 5, to: 16, value:-0.223466514118},{from: 5, to: 19, value:-1.00243278398},{from: 6, to: 8, value:-0.211101970152},{from: 6, to: 9, value:0.28347978849},{from: 6, to: 11, value:0.407125228151},{from: 6, to: 13, value:-0.149279250322},{from: 6, to: 15, value:0.234021612626},{from: 6, to: 23, value:0.889342442827},{from: 7, to: 13, value:0.493677035913},{from: 7, to: 16, value:-7.28362111874},{from: 7, to: 19, value:-0.161643794288},{from: 7, to: 20, value:0.34530250832},{from: 8, to: 16, value:0.407125228151},{from: 8, to: 19, value:0.295844332456},{from: 9, to: 18, value:0.0856470850332},{from: 9, to: 22, value:-0.260560146016},{from: 9, to: 20, value:0.740967915234},{from: 9, to: 21, value:0.0114598212368},{from: 10, to: 13, value:0.951165162657},{from: 11, to: 14, value:-0.903516432252},{from: 11, to: 18, value:-0.223466514118},{from: 11, to: 20, value:0.184563436762},{from: 12, to: 13, value:0.196927980728},{from: 12, to: 17, value:0.518406123845},{from: 12, to: 22, value:-0.0379983546274},{from: 12, to: 23, value:0.0114598212368},{from: 13, to: 14, value:0.592593387642},{from: 13, to: 16, value:0.382396140219},{from: 13, to: 17, value:0.506041579879},{from: 13, to: 22, value:0.308208876422},{from: 13, to: 19, value:-0.174008338254},{from: 14, to: 15, value:0.0856470850332},{from: 14, to: 20, value:0.28347978849},{from: 14, to: 21, value:-3.74736154445},{from: 15, to: 16, value:0.258750700558},{from: 15, to: 19, value:-0.396570129643},{from: 15, to: 20, value:0.308208876422},{from: 15, to: 23, value:-0.0256338106613},{from: 16, to: 22, value:0.036188909169},{from: 16, to: 19, value:0.0238243652029},{from: 16, to: 20, value:0.518406123845},{from: 16, to: 24, value:-0.483121937406},{from: 19, to: 20, value:0.827519722997},{from: 19, to: 24, value:-0.0379983546274},{from: 20, to: 21, value:0.135105260897},{from: 21, to: 23, value:0.518406123845}
])

  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  
    var options = {
      nodes: {
        shape: 'dot',
        scaling: {
          min: 10,
          max: 30,
          label: {
            min: 1,
            max: 1,
            drawThreshold: 12,
            maxVisible: 20
          }
        }
      },
      edges: {
        width: 0.15,
        color: {inherit: 'from'}
      },
                physics: {
                    forceAtlas2Based: {
                        gravitationalConstant: -26,
                        centralGravity: 0.005,
                        springLength: 230,
                        springConstant: 0.18
                    },
                    maxVelocity: 146,
                    solver: 'forceAtlas2Based',
                    timestep: 0.35,
                    stabilization: {iterations: 150}
                }
    };

var network = new vis.Network(container, data, options);
  
  window.onresize = function() {
  setInterval(function() {
    network.fit();
  }, 2000);
};
