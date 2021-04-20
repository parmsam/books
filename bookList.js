//declare fields and item html format for list
var options = {
  valueNames: [ 'title', 'author', 'status'],
  item: '<li><h3 class="title"></h3><p class="author"></p><i class="status"></i></li>'
};
//using d3 asynch request to get csv data
var url = "https://raw.githubusercontent.com/parmsam/books/main/Book%20Reading%20List%20-%20Public_list.csv";

d3.csv(url, function(data) {
  //code here
  var csv_data =[];
  //specify fields of interest
  csv_data = data.map(function(d) {
    return {
    title : d.title,
    author : d.author,
    status : d.status
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
//     status: 'currently reading'
//   },
//   {
//     title: 'Extreme Ownership',
//     author: 'Jocko Willink',
//     status: 'finished reading'
//   },
//   {
//     title: 'Test2',
//     author: 'Tom King',
//     status: 'finished reading'
// }];

// var userList = new List('users', options, values);

// userList.add({
//   title: "Gustaf Lindqvist",
//   author: 'Dale Carnegie',
//   status: 'finished reading',
// });
