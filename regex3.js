let data = ['Bagaimana cara memulai usaha bisnis', 'Bootcamp impact byte', 'Status covid hari ini']
let input = document.getElementById('text')
let btnCheck = document.getElementById('btn-check');

btnCheck.addEventListener ('click', function(){
   let matchData = 'datasalah'
    for(i = 0; i < data.length; i++){
       if(input.value.match(data[i])){
           matchData = data[i]
       }
   }
   if(input.value.match(matchData)){
       alert('Data Tersedia')
   }else{
       alert('Data Tidak Tersedia')
   }
   document.getElementById('text').value = ''
})


