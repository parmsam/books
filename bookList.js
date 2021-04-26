//declare fields and item html format for list
var options = {
  valueNames: [ 'title', 'author', 'status', 'genre', { name: 'link', attr: 'href' }],
  item: '<li><a href="" class="link"><h3 class="title"></h3></a><p class="author"></p><i class="status"></i> - <i class="genre"></i></li>'
};
//using d3 asynch request to get csv data
var url = "https://raw.githubusercontent.com/parmsam/books/main/Book%20Reading%20List%20-%20Public_list.csv";
var url2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRQfvo5W-6v57Wzr4enusjaxsOjq-2Tdn35Grza87NrPTRfG_DtVlHn7feUn2j0bh1n83ABBiv3sV87/pub?gid=863488693&single=true&output=csv";

// console.log(data);
d3.csv(url2, function(data) {
  //code here
  var csv_data =[];
  //specify fields of interest
  csv_data = data.map(function(d) {
    return {
    title : d.title,
    author : d.author,
    status : d.status,
    genre: d.genre,
    link: d.link
    }
  });
  //console.log(csv_data);
  //create List object with options and data
  var userList = new List('users', options, csv_data);
});

// other method of hard coding fields
// var values = [{
//     title: '4-Hour Workweek',
//     author: 'Tim Ferris',
//     status: 'currently reading',
//     genre:"test1",
//     link: 'https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357'
//   },
//   {
//     title: 'Extreme Ownership',
//     author: 'Jocko Willink',
//     status: 'finished reading',
//     genre:"test2",
//     link: 'https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357'
//   },
//   {
//     title: 'Test2',
//     author: 'Tom King',
//     status: 'finished reading',
//     genre:"test1",
//     link: 'https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357'
// }];

// var userList = new List('users', options, values);
//
// userList.add({
//   title: "Gustaf Lindqvist",
//   author: 'Dale Carnegie',
//   status: 'finished reading',
//     genre:"test2",
//   link: 'https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357'
// });
