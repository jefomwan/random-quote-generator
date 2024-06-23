const category = document.getElementById('input');
const submitButton = document.getElementById('genQ');
const Key = 'Y6oqQA9n/a9erUcYPQ+QSA==BNHUY3cyZA3naqzi'
const quote = document.getElementById('quote');

    function displayQuote(quoteInfo){
        console.log(quoteInfo)
    }
        
        async function getQuote(){
            const url = 'https://quotes21.p.rapidapi.com/quote';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8006386eadmsh942a44b02379ad6p12b2bdjsn4a7cdfcd1e53',
		'x-rapidapi-host': 'quotes21.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
    return result;
} catch (error) {
	console.error(error);
}

            
        }

        submitButton.onclick = async function submit(){
           
            
                try{
                    const quoteData = await getQuote();
                    displayQuote(quoteData);
                    
                }
                catch(error){
                    document.getElementById('error').innerHTML = 'could not fetch quote because '+ error
                }
        
            }
              