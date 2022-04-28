import { createGraph } from "./index.js";
import {
    data2020_21, data2019_20, data2018_19, data2014_15,
    data2015_16, data2016_17, data2017_18
} from "./data.js";

//credentials hash
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'nba-stats4.p.rapidapi.com',
//         'X-RapidAPI-Key': '25a16932ebmsh5a7312751f5200bp115186jsnb7c42890f59c'
//     }
// };

// const sample = [
//     {
//         language: 'Rust',
//         value: 78.9,
//         color: '#000000'
//     },
//     {
//         language: 'Kotlin',
//         value: 75.1,
//         color: '#00a2ee'
//     },
//     {
//         language: 'Python',
//         value: 68.0,
//         color: '#fbcb39'
//     },
//     {
//         language: 'TypeScript',
//         value: 67.0,
//         color: '#007bc8'
//     },
//     {
//         language: 'Go',
//         value: 65.6,
//         color: '#65cedb'
//     },
//     {
//         language: 'Swift',
//         value: 65.1,
//         color: '#ff6e52'
//     },
//     {
//         language: 'JavaScript',
//         value: 61.9,
//         color: '#f9de3f'
//     },
//     {
//         language: 'C#',
//         value: 60.4,
//         color: '#5d2f8e'
//     },
//     {
//         language: 'F#',
//         value: 59.6,
//         color: '#008fc9'
//     },
//     {
//         language: 'Clojure',
//         value: 59.6,
//         color: '#507dca'
//     }
// ];

export function fetchPlayerStats(season = "2018_19") {

    // switch(season) {
    //     case "2014_15":
    //         createGraph(data2014_15, 300);
    //         console.log("1415");
    //         break;
    //     case '2015_16':
    //         createGraph(data2015_16, 450);
    //         break;
    //     case '2016_17':
    //         createGraph(data2016_17, 350);
    //         break;
    //     case '2017_18':
    //         createGraph(data2017_18, 300);
    //         break;
    //     case '2018_19':
    //         createGraph(data2018_19, 400);
    //         break;
    //     case '2019_20': 
    //         createGraph(data2019_20, 300);
    //         break;
    //     case '2020_21':
    //         createGraph(data2020_21, 400);
    //         break;

    //     default: console.log("season not found");
    // }

    if (season === "2020_21") {
        createGraph(data2020_21, 400);
    } else if (season === "2019_20") {
        createGraph(data2019_20, 300);
    } else if (season === "2018_19") {
        createGraph(data2018_19, 400);
    } else if (season === "2017_18") {
        createGraph(data2017_18, 300);
    } else if (season === "2016_17") {
        createGraph(data2016_17, 350);
    } else if (season === "2015_16") {
        createGraph(data2015_16, 450);
    } else if (season === "2014_15") {
        createGraph(data2014_15, 300);
    }
}


// export async function fetchPlayers() {
//     let playerData = [];
//     let data;
//     let parsedData;
//     let player;

//     data = await fetch('https://nba-stats4.p.rapidapi.com/season_totals_regular_season/?fg3m=337&page=1&season_id=2020-21', options);
//     parsedData = await data.json();
//     player = {};
//     player.name = 'Steph Curry';
//     player.fg3m = parsedData[0].fg3m;
//     // player[fg3m] = parsedData[0]['fg3m'];
//     player.data = parsedData[0];
//     playerData.push(player);
//     // console.log(playerData[0]);

//     data = await fetch('https://nba-stats4.p.rapidapi.com/season_totals_regular_season/?fg3m=282&page=1&season_id=2020-21', options);
//     parsedData = await data.json();
//     player = {};
//     player.name = 'Buddy Hield';
//     player.fg3m = parsedData[0].fg3m;
//     player.data = parsedData[0];
//     playerData.push(player);

//     data = await fetch('https://nba-stats4.p.rapidapi.com/season_totals_regular_season/?fg3m=275&page=1&season_id=2020-21', options);
//     parsedData = await data.json();
//     player = {};
//     player.name = 'Damian Lillard';
//     player.fg3m = parsedData[0].fg3m;
//     player.data = parsedData[0];
//     playerData.push(player);

//     // data = await fetch('https://nba-stats4.p.rapidapi.com/season_totals_regular_season/?fg3m=250&page=1&season_id=2020-21', options);
//     // parsedData = await data.json();
//     // player = {};
//     // player.name = 'Duncan Robinson';
//     // player.fg3m = parsedData[0].fg3m;
//     // player.data = parsedData[0];
//     // playerData.push(player);

//     // data = await fetch('https://nba-stats4.p.rapidapi.com/season_totals_regular_season/?fg3m=222&page=1&season_id=2020-21', options);
//     // parsedData = await data.json();
//     // player = {};
//     // player.name = 'Terry Rozier';
//     // player.fg3m = parsedData[0].fg3m;
//     // player.data = parsedData[0];
//     // playerData.push(player);

//     // data = await fetch('https://nba-stats4.p.rapidapi.com/season_totals_regular_season/?fg3m=211&page=1&season_id=2020-21', options);
//     // parsedData = await data.json();
//     // player = {};
//     // player.name = 'Joe Harris';
//     // player.fg3m = parsedData[0].fg3m;
//     // player.data = parsedData[0];
//     // playerData.push(player);

//     // data = await fetch('https://nba-stats4.p.rapidapi.com/season_totals_regular_season/?fg3m=208&page=1&season_id=2020-21', options);
//     // parsedData = await data.json();
//     // player = {};
//     // player.name = 'Jordan Clarkson';
//     // player.fg3m = parsedData[0].fg3m;
//     // player.data = parsedData[0];
//     // playerData.push(player);

//     // data = await fetch('https://nba-stats4.p.rapidapi.com/season_totals_regular_season/?fg3m=207&page=1&season_id=2020-21', options);
//     // parsedData = await data.json();
//     // player = {};
//     // player.name = 'Tim Hardaway Jr.';
//     // player.fg3m = parsedData[0].fg3m;
//     // player.data = parsedData[0];
//     // playerData.push(player);

//     // data = await fetch('https://nba-stats4.p.rapidapi.com/season_totals_regular_season/?fg3m=200&page=1&season_id=2020-21', options);
//     // parsedData = await data.json();
//     // player = {};
//     // player.name = 'Zach LaVine';
//     // player.fg3m = parsedData[0].fg3m;
//     // player.data = parsedData[0];
//     // playerData.push(player);

//     // data = await fetch('https://nba-stats4.p.rapidapi.com/season_totals_regular_season/?fg3m=192&page=1&season_id=2020-21', options);
//     // parsedData = await data.json();
//     // player = {};
//     // player.name = 'Luka Doncic';
//     // player.fg3m = parsedData[0].fg3m;
//     // player.data = parsedData[0];
//     // playerData.push(player);
//     console.log(playerData);
//     createGraph(playerData);
//     return playerData;
// }
// stats.nba.com/stats/scoreboard/?GameDate=02/14/2015&LeagueID=00&DayOffset=0
// export async function fetchTeams() {
//     console.log("running");
//     let sum = 0;
//     let morePages = true;
//     let currentPage = 0;
//     while (morePages) {
//         currentPage++;
//         console.log(currentPage);
//         let data = await fetch(`https://www.balldontlie.io/api/v1/stats?player_ids[]=115&per_page=100&page=${currentPage}`);
//         //breaks after 10 pages about;
//         let parsedData =await data.json();
//         console.log(parsedData);
//         parsedData.data.forEach(el=> {
//             sum+=el.fg3m;
//         })
//         morePages = currentPage < parsedData.meta.total_pages;   
//     }
//     console.log(parsedData);

//     console.log(sum);

//     // for (let i =0; i < parsedData.length;i++) {
//     //     console.log(parsedData[i].fg3m);
//     //     sum+=parsedData[i].fg3m;
//     // }
//     // console.log(sum);
//     console.log('finished');
// }

