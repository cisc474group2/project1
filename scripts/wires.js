$(document).ready(function(){
  
    var serialNumber = Math.floor((Math.random() * 999999) + 100000);
    var odd = new Boolean(serialNumber%2===1);
    var numWires = Math.floor((Math.random() * 4) + 3);
    $('#upperSegmentHeader').html(serialNumber);
    
    if(numWires==3){
        $('.wire-module').html("<div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div>");
    }else if(numWires==4){
        $('.wire-module').html("<div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div>");
    }else if(numWires==5){
        $('.wire-module').html("<div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div>");
    }else if(numWires==6){
        $('.wire-module').html("<div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div>");
    }

    $('.wire').click(function(){
        $(this).addClass('cut-wire').removeClass('wire');
    });
    
});