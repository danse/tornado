var compress = true;
var h = 20;
var w = 600;
var biggest_label_size = 100;
var biggest_point_radius = 50;
if(compress){
    var total_h = 800;
}
else{
    var total_h = h * data.length;
}
var total_w = w + h + biggest_point_radius + biggest_label_size
var chart = d3.select('body').append('svg')
    .attr('width',  total_w)
    .attr('height', total_h)

/*
// > detail(10, 20)
function detail(d, i){
        this.append('text')
            .text(function(d, i){return d3.round(d) ;}).attr('x', biggest_point_radius + 40);
        this.append('text')
            .text(function(d, i){return (data.length - i) ;}).attr('fill', 'grey').attr('x', biggest_point_radius);
}
*/

function start(){
    d3.json('/data', draw);
}

function draw(data){
    var x_scale    = d3.scale.linear().domain([d3.min(data), d3.max(data)]).range([0, w]);
    var y_scale    = d3.scale.linear().domain([0, data.length]).range([0, total_h]);
    var size_scale = d3.scale.linear().domain([0, data.length]).range([1, biggest_point_radius]);
    var g = chart.selectAll('g')
        .data(data)
        .enter().append('g')
        .attr('transform', function(d, i){
            return 'translate('+x_scale(d)+', '+y_scale(i)+')';
            });

    g.append('circle')
        .attr('r', function(d, i){
            return size_scale(data.length - i);
        })
        .style('fill', function(d){
            if(d<0){
                return 'red';
            }
            else{
                return 'steelblue';
            }
        })
        .style('fill-opacity', 0.5);

    /*
        g.on('mouseover', detail);
        */

    window.scrollTo(0,1000000);
}
//window.onload = start;
