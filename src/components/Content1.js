import React from 'react'

function Content1() {

    const appearAnimation = (entries, observer) => {
        
        
          entries.forEach(entry => {
            var txt = entry.target.id + " visibility: " + entry.isIntersecting;           
            document.getElementById('content1').classList.add("fadeInFromBottomAnimation ")
          });
        
    }
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      };
    
    let observer = new IntersectionObserver(appearAnimation, options);
    observer.observe(document.getElementById('content1'));
    return (


        <div id='content1' className='py-20 bg-mainGray'>
            <h1 className='text-6xl font-bold text-center text-gray-700 '>Consistent asset<br /> Creation,<span className='gradientText'>in minutes</span> </h1>
        </div>
    )
}

export default Content1
