const form = document.querySelector('form');
const API_URL = 'http://localhost:5001/convert';



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const numeral = formData.get('numeral');  
    if(numeral !== ""){ 
        fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify({
                    numeral
                }),
                headers: {
                'content-type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then(data => {
            if(data.result === -1){
                document.getElementById("app").innerHTML = "Invalid input";
            }else{
                console.log(data)
                document.getElementById("app").innerHTML = data.result;
            }
                        
        });
        
    } else {
        document.body.style.background = 'white';
    }
})


