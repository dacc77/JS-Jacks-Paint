function configureListeners() {
    var images = document.getElementsByTagName('img'); 
    // select img elements  


     for (var i = 0; i < images.length; i++) {     
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)       
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}
function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':  
        price = '$19.99'
        colorName = 'Lime Green'  
        updatePrice(colorName, price)
        break;       
            // set variables for price and color name and invoke a function to update the price     
                 
        case 'pn2':
            price = '$12.99'
            colorName = 'Medium Brown' 
            updatePrice(colorName, price)     
            break;  
            // set variables for price and color name and invoke a function to update the price    
                  
        case 'pn3':
            price = '$11.99'
            colorName = 'Royal Blue'   
            updatePrice(colorName, price)   
            break;  
            // set variables for price and color name and invoke a function to update the price  
        
        case 'pn4':
            price = '$14.99'
            colorName = 'Bright Red'            
            updatePrice(colorName, price)   
            break;
            // set variables for price and color name and invoke a function to update the price  
             
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price  
            price = '$9.99'
            colorName = 'Solid White' 
            updatePrice(colorName, price)       
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price 
            price = '$15.99'
            colorName = 'Solid Black'   
            updatePrice(colorName, price)       
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$8.99'
            colorName = 'Medium Blue'       
            updatePrice(colorName, price) 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price  
            price = '$8.99'
            colorName = 'Medium Blue'       
            updatePrice(colorName, price)  
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$17.99'
            colorName = 'Bright Yellow'                       
            updatePrice(colorName, price) 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById ('color-price');
        colorPrice.textContent = price;

        // select element with corresponding id
        // display price
        
        let color = document.getElememntById('color-name');
        color.textContent = colorName;
        // select element with corresponding id
        //display color name

    }
    
}
