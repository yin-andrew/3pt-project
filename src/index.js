import { fetchPlayerStats } from "./fetchdata.js";
import * as d3 from 'd3';

document.addEventListener("DOMContentLoaded", ()=> {
    console.log("loaded");
    fetchPlayerStats();
    // const players = fetchPlayers();
    // console.log(players);
    // createGraph(players);
    
});

window.addEventListener("load", ()=> {
    //add a for loop to add event listeners
    

    let season14 = document.getElementById('14_15');
    season14.addEventListener("click", function () {
        fetchPlayerStats("2014_15");
    });
    let season15 = document.getElementById('15_16');
    season15.addEventListener("click", function () {
        fetchPlayerStats("2015_16");
    });
    let season16 = document.getElementById('16_17');
    season16.addEventListener("click", function () {
        fetchPlayerStats("2016_17");
    });
    let season17 = document.getElementById('17_18');
    season17.addEventListener("click", function () {
        fetchPlayerStats("2017_18");
    });
    let season18 = document.getElementById('18_19');
    season18.addEventListener("click", function () {
        fetchPlayerStats("2018_19");
    });
    let season19 = document.getElementById('19_20');
    season19.addEventListener("click", function () {
        fetchPlayerStats("2019_20");
    });

    let season20 = document.getElementById('20_21');
    season20.addEventListener("click", function () {
        fetchPlayerStats("2020_21");
    });
})

 

export function createGraph(players, domainMax) {

    // const players = fetchPlayers();
    const svg = d3.select('svg');
    svg.selectAll('*').remove();
    
    const margin = 80;
    const width = 1000-2*margin;
    const height = 700-2*margin;

    //creating graph canvas
    const graph = svg.append('g')
        .attr('transform', `translate(${margin},${margin})`);

    //y-axis scale for the graph
    const yScale = d3.scaleLinear().range([height,0]).domain([0,domainMax]);
    graph.append('g').call(d3.axisLeft(yScale));

    //x-axis scale for the graph
    const xScale = d3.scaleBand().range([0,width]).domain(players.map(el=> el.name)).padding(0.2);
    graph.append('g')
        .attr('transform',`translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .selectAll('text')
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-45)" );
    //append rectangle for every element of the array

    
    graph.selectAll()
        .data(players)
        .enter()
        .append('rect')
        .attr('class','bar')
        .attr('x', el=> xScale(el.name))
        .attr('width', xScale.bandwidth()) 
        //no bar in the beginning
        .attr('height', el=> height - yScale(0))
        .attr('y', el=> yScale(0))
        .on('mouseenter', function () {
            d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 0.75)
                .attr('x', el=> xScale(el.name)-5)
                .attr('width', xScale.bandwidth()+ 10)
            
        })
        .on('mouseleave', function () {
            d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 1)
                .attr('x', el => xScale(el.name))
                .attr('width', xScale.bandwidth())
        })
        .on('click', function () {
            console.log('more info coming soon');
        })
        // .append('div')
        //     .attr('class', )
        //     .style('position', 'absolute')
        //     .style('visibility', 'hidden')
        //     .text(el=> {
        //         `name: ${el.name}
        //         team: ${el.team_abbreviations}
        //         3 pointers made: ${el.fg3m}
        //         3 pt percentage: ${el.fg3_pct}`
        //     })
        // .on("mouseover", function () {return })


    graph.selectAll()
        .data(players)
        .enter()
        .append('g')
        .append('text')
        .attr('class', 'value')
        .attr('x', el=> xScale(el.name) + xScale.bandwidth() /2)
        .attr('y', el=> yScale(el.fg3m) + 35)
        .attr('text-anchor','middle')
        .text(el=>`${el.fg3m}`)
    

    graph
        .append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft()
            .scale(yScale)
            .tickSize(-width, 0, 0)
            .tickFormat(''))

    svg.append('text')
        .attr('class','yLabel')
        .attr('x',-(height/2)-margin)
        .attr('y', margin/2-20)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor','middle')
        .text('3pt field goals made')
    

    const years = players[0].season_id;
    svg.append('text')
        .attr('class', 'title')
        .attr('x', width/2 + margin)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .text(`Regular Season 3pt Leaders ${years}`)
    
    graph.selectAll('rect')
        .transition()
        .duration(800)
        .attr('y', el => yScale(el.fg3m))
        .attr('height', el => height - yScale(el.fg3m))
        // .delay((d,i) => {console.log(i); return(i*100)})
    
    
    
    
    // graph.on('mouseenter', function(actual, i) {
    //     d3.select(this).attr('opacity',0.5)
    // })
    // graph.on('mouseleave', function (actual, i) {
    //     d3.select(this).attr('opacity',1);
    // })
}