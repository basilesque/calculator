//hesap makinesinin ekranının elementini bununla seçiyoruz
const input = document.getElementById('inputtext');

//tüm butonların elementlerini bununla seçiyoruz
const buttons = document.querySelectorAll('button');

//boş butona ve ekrana gelince imlecin görüntüsünün değişmemesi için
document.getElementById("empty").style.cursor = "default";
document.getElementById("inputtext").style.cursor = "default";

document.getElementById("inputtext").disabled = true;

//hesap yapan fonksiyon
function calculate(expression) {
    //console.log(expression);
    //console.log(typeof (expression));
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Error';
    }
}

//C'ye basınca siliyor, DEL'e basınca bir geri gidiyor, sayıya basınca ekrana yazıyor ve eşittire basınca ise calcute fonskiyonunu çağırıyor
function operation(buttonValue) {
    if (buttonValue === 'C') {
        input.value = '';
    } else if (buttonValue === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (buttonValue === '=') {
        input.value = calculate(input.value);
    } else {
        input.value += buttonValue;
    }
}

//butonların değeri (value) içlerindeki sayı olacak, her tıklanışta operation fonksiyonunu çağırıyor aynı zamanda
buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});


