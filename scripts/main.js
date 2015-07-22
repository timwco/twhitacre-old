// $.ajax({
//   url: 'http://blog.timw.co/',
//   type: 'get',
//   dataType: 'html',
// }).done(function (data){
//   $(data).find('.content article').each(function () {
//     var art = $(this).find('h2.entry-title a');
//     var link = art.attr('href');
//     var title = art.text(); 
//     var date = art.parent().next('.date').text();
//     $('#blog_articles ul').append('<li><a href="'+link+'">'+title+'</a> -  <span>'+date+'</span></li>');
//   });
// });

