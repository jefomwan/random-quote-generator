const category = document.getElementById('input');
const submitButton = document.getElementById('genQ');
const Key = 'Y6oqQA9n/a9erUcYPQ+QSA==BNHUY3cyZA3naqzi'
const quote = document.getElementById('quote');

    function displayQuote(quoteInfo){
        console.log(quoteInfo)
    }
        
        async function getQuote(category){
            const apiURL = `https://api.api-ninjas.com/v1/key=${Key}quotes?category= + ${category}`;

            const response = await fetch(apiURL);
            if(!response.ok){
                document.getElementById('error').innerHTML = 'could not fetch quote';
            }
            else{
            return await response.json();
            }
        }

        submitButton.onclick = async function submit(){
            const categorysel = category.value;
            if(categorysel){
                try{
                    const quoteData = await getQuote(categorysel);
                    displayQuote(quoteData);
                    
                }
                catch(error){
                    document.getElementById('error').innerHTML = 'could not fetch quote because '+ error
                }
        
            }
            else{
                document.getElementById('error').innerHTML = 'Please type in a category'
            }
        }    