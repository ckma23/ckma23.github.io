(function($) {
  $('button').on('click',function(){
    //remove resultset if this has already been run
    $('.content ul').remove();
    // add spinner to indicate something is happening
    $('<i class="fa fa-refresh fa-spin"/>').appendTo('body');
    // get selected zip code from select box
    var city = $('select option:selected').text();
    console.log(city)

    //make the AJAX request
    $.getJSON('http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=', function(data) {
      console.log(city)
      console.log(data)
      //do all this on success
      var items = [],
        $ul;
      $.each(data,function(key,val){
        //iterate through the returned data and build a list
        items.push('<li id="' + key + '"><span class="name")>' + val.agentfirstname +'</span><br><span class="addr">' + val.principaladdress1 +'</span><span class="city">' + val.principalcity+'</span></li>');
      });
      // if no items were returned then add a message to that effect
      if (items.length < 1) {
        items.push('<li>No results for this ZIP code, try again!</li>');
      }
      // remove spinner
      $('.fa-spin').remove();
      // append list to page
      $ul = $('<ul />').appendTo('.content');
      //apend list items to list
      $ul.append(items);
    });
  });
}(jQuery));
