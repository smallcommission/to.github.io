
function valute(){
  var price = document.getElementById('price').value;
$.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) {
        course = data.Valute.USD.Value.toFixed(2);
        result = course;
        sum = result*price;
        $("#result").val(sum);
        var span_second = document.createElement("span");
        span_second.innerHTML = '<span style="color:#4a4a4a">Сумма перевода составляет ' + sum + ' ₽';
        
        swal({
          content: span_second,
          buttons: {
          catch: {
            text: "Принято",
            value: "true",
          },
        },
      })
});
}
function second_valute(){
  var price_second = document.getElementById('price_second').value;
$.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) {
        course_second = data.Valute.USD.Value.toFixed(2);
        result_second = course_second;
        sum_second = result_second*price_second;
        $("#results").val(sum_second);
        var span_seconds = document.createElement("span");
        span_seconds.innerHTML = '<span style="color:#4a4a4a">Сумма перевода составляет ' + sum_second + ' ₽';
        
        swal({
          content: span_seconds,
          buttons: {
          catch: {
            text: "Принято",
            value: "true",
          },
        },
      })
});
}