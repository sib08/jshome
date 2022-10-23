const btn = document.getElementById('btn');
const result = document.getElementById('result');

function check_time()
{}
  var txt = btn.innerText;

  if(txt == '시작') {
    start = new Date();
    btn.innertext = '종료';
    btn,style.backgroundcolor = '#F3333'
    result.innerText = '20초 세고 버튼을 다시 누르세요';
  } else {
end = new Date();
et = end - start;
et = parseInt(et / 1000);
btn.innerText = '시작';
res.innerText = et + '경과시간' + et + '초';

}