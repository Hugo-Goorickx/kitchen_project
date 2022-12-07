console.log(document.getElementById('input'));
document.getElementById('input').addEventListener('change',() =>{
    if(document.body.className.indexOf('dark') === -1){
        document.body.classList.add('dark')
        console.log('dark');
    }
    else{
        document.body.classList.remove('dark')
    }
});