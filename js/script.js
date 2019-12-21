//
'use strict'
{
    let crl = document.querySelectorAll('#crl');
    let parcent = document.querySelectorAll('.parcent');
    let count = 0;
    let crlCount = 0;
    
    let setTime = setInterval(function(){
        count++;
        crlCount++;
        parcent[0].innerHTML = count + '%';
        parcent[1].innerHTML = count + '%';
        parcent[2].innerHTML = count + '%';
        crl[0].setAttribute('style', `stroke-dashoffset: calc(502 - (502 * ${crlCount}) / 100)`);
        crl[1].setAttribute('style', `stroke-dashoffset: calc(502 - (502 * ${crlCount}) / 100)`);
        crl[2].setAttribute('style', `stroke-dashoffset: calc(502 - (502 * ${crlCount}) / 100)`);
        
        if (count >=85){
            parcent[0].innerHTML = '85%';
            crl[0].setAttribute('style', `stroke-dashoffset: calc(502 - (502 * 85) / 100)`);


        }  
        if (count >=90){
            parcent[1].innerHTML = '90%';
            crl[1].setAttribute('style', `stroke-dashoffset: calc(502 - (502 * 90) / 100)`);

        } 
        if (count >=60){
            parcent[2].innerHTML = '60%';
            crl[2].setAttribute('style', `stroke-dashoffset: calc(502 - (502 * 60) / 100)`);

        }  
            

    }, 20)
}