$.ajax({
  url: 'http://blog.timw.co/feed',
  type: 'get',
  dataType: 'xml',
}).done(function (data){
  console.log('done?');
});
