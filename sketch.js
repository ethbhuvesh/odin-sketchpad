document.addEventListener('DOMContentLoaded',()=> {
    const container=document.querySelector('.container');

    for(let i=0; i<256; i++)
    {
        const square=document.createElement('div');
        square.classList.add("square");
        container.appendChild(square);
        square.style.width=`60px`;
        square.style.height=`60px`;
        square.addEventListener('mouseover', function(event) {
            square.style.backgroundColor='blue';
        });
    }

    const button=document.querySelector('.new-grid');
    button.addEventListener("click", function(event) {
        let n = prompt('Enter new grid length');
        container.innerHTML="";
        const size=960/n;
        for(let i=0; i<n*n; i++)
            {
                const square=document.createElement('div');
                square.classList.add("square");
                container.appendChild(square);
                square.style.width=`${size}px`;
                square.style.height=`${size}px`;
                square.addEventListener('mouseover', function(event) {
                    square.style.backgroundColor='blue';
                });
            }
    });

});




