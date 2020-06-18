import React from 'react';

function Footer(){
    var date = new Date();
    var year = date.getFullYear();
    return(
        <div>
            <footer><p>copyright &#169; {year}</p></footer>
        </div>
    )
}
export default Footer;