// Blog js

var makeChunks = (data,size)  => {
    var chunkedArray = [];
    for (let i = 0; i < data.length; i++) {
        var last = chunkedArray[chunkedArray.length - 1];
        if(!last || last.length === size){
            chunkedArray.push([data[i]]);
        }else{
            last.push(data[i]);
        }
    };
    return chunkedArray;
    };

    fetch('https://owlapplicationbuilder.com/api/entities/profits_and_pizza_website_1580295343903_98/blog/get_all_en?page=1&page_size=15&fld=_id&srt=-1&to_search={}&t=true')
    .then(response => response.json())
    .then((data) => {
        // var trail = data.data;
        var responseData = data.data;
        responseData = makeChunks(responseData, 3);
        console.log('responseData: ',responseData);

        var html = "";
        responseData.forEach((d,i) => {
            html += `<div class="carousel-item ${i == 0 ? 'active' : ''}"> <div class="row px-3">`;
            d.forEach((item,i2) => {
              var img = item.cover_image;
    var title = item.meta_title;
    var dispo = item.meta_description;
    var url = item.slug;
    var author = item.author;
    var category = item.blogCategory;
    
    html += ` 
            <div class="col-lg-4 col-md-6 py-3">
              <a class="link" href="${url}" target="_blank">
              <div class='card'>
                <img class="container-img card-img-top img-fluid" src=${img} alt='img'></img>
                <div class="container-details card-body px-3 pt-1 pb-3">
                  <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between">
                    <h6 class='author mb-0'>JULIANNAKRONCKE</h6>
                    <h6 class='category mb-0'>${category}</h6>
                  </div>
                <h3 class='title text-wrap'>${title}</h3>
                <p class='dispo mt-1 text-wrap'>${dispo}</p>
                </div>
              </div>
              </a>
            </div>`; 
          });
          html += '</div></div>';
      });
      console.log('html: ',html)
      document.querySelector('.carouseFirestlRoot').innerHTML =html
  })
  .catch(error => console.error(error));


//   Book Summaries


var random = (data,size)  => {
    var dataArray = [];
    for (let i = 0; i < data.length; i++) {
        var last = dataArray[dataArray.length - 1];
        if(!last || last.length === size){
            dataArray.push([data[i]]);
        }else{
            last.push(data[i]);
        }
    };
    return dataArray;
    };
  
    fetch('https://owlapplicationbuilder.com/api/entities/profits_and_pizza_website_1580295343903_98/book_summaries/get_all_en?page=1&page_size=18&fld=_id&srt=-1&to_search={}&t=true')
    .then(response => response.json())
    .then((data) => {
        var responseData = data.data;
        responseData = random(responseData, 6);
        console.log('responseData: ',responseData);
  
        var html = "";
        responseData.forEach((d,i) => {
            html += `<div class="carousel-item ${i == 0 ? 'active' : ''}"  > <div class="">`;
            d.forEach((item,i2) => {
              var title = item.title;
                html += ` 
                 <div class="data_row slide-in d-flex align-items-center justify-content-between" style="padding: 10px 10px 10px 15px !important;">
                 <div class="w-50"><a href="https://profitsandpizza.com/book_summaries/${item.slug}" target="_blank"><p>${item.title}</p></a></div>
                 <div class="w-50 text-end"><span><a href="https://profitsandpizza.com/book_summaries/${item.slug}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
      <path d="M18 7.4381C18 9.07288 18 10.7077 18 12.3424C18 13.7316 17.1883 14.6548 15.8243 14.8581C13.7238 15.1715 11.7406 15.8322 9.84937 16.7978C9.2636 17.0943 8.72803 17.0943 8.14226 16.7978C6.2092 15.8238 4.1841 15.1461 2.04184 14.8412C0.861925 14.6633 0.0083682 13.6723 0 12.4271C0 9.86062 0 7.29411 0 4.72759C0 3.94832 0 3.16904 0 2.38977C0.0083682 0.865106 1.16318 -0.159807 2.65272 0.0265409C4.79498 0.306063 6.81172 0.975221 8.66946 2.07637C8.91213 2.22036 9.1046 2.21189 9.34728 2.0679C10.9958 1.09381 12.7699 0.47547 14.6444 0.128185C15.2134 0.0265409 15.7824 -0.0835737 16.3515 0.0943037C17.3724 0.416177 17.9916 1.27168 17.9916 2.38977C18.0084 4.07537 18 5.7525 18 7.4381ZM9.61506 15.4595C9.77406 15.3918 9.89121 15.3409 10 15.2901C11.8494 14.477 13.749 13.8502 15.749 13.5791C16.3598 13.4944 16.7364 13.0539 16.7364 12.3933C16.7364 9.08135 16.7364 5.76944 16.7364 2.45753C16.7364 1.63591 16.2594 1.18698 15.4477 1.28862C13.4561 1.5512 11.59 2.19495 9.85774 3.21986C9.6569 3.33845 9.61506 3.47398 9.61506 3.68573C9.62343 7.49739 9.61506 11.3091 9.61506 15.1122C9.61506 15.2139 9.61506 15.3155 9.61506 15.4595ZM8.38494 15.4172C8.38494 13.596 8.38494 11.7834 8.38494 9.96227C8.38494 7.85315 8.38494 5.74403 8.37657 3.63491C8.37657 3.50786 8.30962 3.32998 8.21757 3.27069C6.44351 2.21189 4.5272 1.5512 2.48536 1.28862C1.74895 1.19545 1.2636 1.64438 1.2636 2.38977C1.2636 5.73556 1.2636 9.07288 1.2636 12.4187C1.2636 13.0455 1.64854 13.4605 2.24268 13.5876C3.29707 13.8078 4.35146 14.0196 5.38075 14.3245C6.39331 14.6294 7.36402 15.0445 8.38494 15.4172Z" fill="#7D7D7D"/>
      <path d="M4.81168 8.71712C4.40164 8.71712 3.99996 8.72559 3.58992 8.71712C3.19662 8.70865 2.92883 8.44607 2.9372 8.07337C2.94557 7.72609 3.20498 7.46351 3.58992 7.46351C4.41001 7.45504 5.23846 7.45504 6.05854 7.46351C6.43511 7.46351 6.69452 7.73456 6.69452 8.08184C6.69452 8.42913 6.43511 8.70865 6.05854 8.71712C5.6485 8.72559 5.23009 8.71712 4.81168 8.71712Z" fill="#7D7D7D"/>
      <path d="M4.49374 6.18446C4.18412 6.18446 3.87449 6.19293 3.56487 6.18446C3.1883 6.16752 2.93726 5.89647 2.93726 5.54072C2.94562 5.2019 3.19667 4.93085 3.54813 4.93085C4.18412 4.92238 4.81173 4.92238 5.44772 4.93085C5.81592 4.93932 6.0837 5.21884 6.07533 5.56613C6.06696 5.89647 5.80755 6.15905 5.45608 6.18446C5.43098 6.18446 5.41424 6.18446 5.38914 6.18446C5.08788 6.18446 4.795 6.18446 4.49374 6.18446Z" fill="#7D7D7D"/>
      </a></svg></span><span><a href="${item.audioUrl}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
      <path d="M6.76274 8.99677C6.76274 6.27447 6.76274 3.55218 6.76274 0.821277C6.76274 0.536988 6.82304 0.287157 7.07287 0.123475C7.47777 -0.1522 8.0205 0.0545563 8.14111 0.536988C8.17557 0.68344 8.17557 0.838507 8.17557 0.984959C8.17557 6.32616 8.17557 11.6674 8.17557 17.0086C8.17557 17.1119 8.18419 17.2239 8.16696 17.3273C8.12388 17.7236 7.79652 18.0165 7.4347 17.9993C7.05564 17.9734 6.77135 17.6805 6.77135 17.267C6.76274 16.1212 6.77135 14.9755 6.77135 13.8211C6.76274 12.2101 6.76274 10.6077 6.76274 8.99677Z" fill="#7D7D7D"/>
      <path d="M4.77276 8.99675C4.77276 10.7973 4.77276 12.5978 4.77276 14.3983C4.77276 14.8807 4.46262 15.1736 4.00604 15.1305C3.70452 15.1047 3.4633 14.9065 3.403 14.605C3.37715 14.4586 3.36854 14.3035 3.36854 14.157C3.36854 10.7197 3.36854 7.27378 3.36854 3.83646C3.36854 3.71585 3.36854 3.60386 3.38577 3.48325C3.44607 3.06974 3.73036 2.82852 4.13526 2.85436C4.51431 2.88021 4.77276 3.14727 4.77276 3.56078C4.78137 5.3699 4.77276 7.17902 4.77276 8.99675Z" fill="#7D7D7D"/>
      <path d="M11.5267 9.0312C11.5267 10.3751 11.5267 11.7104 11.5267 13.0543C11.5267 13.5626 11.2596 13.8727 10.8289 13.8727C10.4067 13.8727 10.1224 13.554 10.1224 13.0543C10.1224 10.3493 10.1224 7.65283 10.1224 4.94777C10.1224 4.49118 10.3292 4.21551 10.7083 4.14659C11.0356 4.08628 11.3458 4.24135 11.4664 4.54287C11.518 4.66348 11.5267 4.80993 11.5267 4.94777C11.5267 6.30891 11.5267 7.67006 11.5267 9.0312Z" fill="#7D7D7D"/>
      <path d="M1.41283 8.99678C1.41283 10.0909 1.41283 11.185 1.41283 12.279C1.41283 12.7787 1.12854 13.1061 0.715032 13.1147C0.30152 13.1233 0 12.7787 0 12.2963C0 10.0995 0 7.89408 0 5.6973C0 5.20625 0.30152 4.87027 0.715032 4.87889C1.12854 4.8875 1.41283 5.22348 1.41283 5.71453C1.41283 6.80861 1.41283 7.9027 1.41283 8.99678Z" fill="#7D7D7D"/>
      <path d="M13.5082 9.00536C13.5082 7.91128 13.5082 6.81719 13.5082 5.72311C13.5082 5.21483 13.7667 4.89608 14.1802 4.87885C14.5937 4.86162 14.9038 5.20622 14.9038 5.72311C14.9124 7.64422 14.9038 9.56533 14.9038 11.4864C14.9038 11.7966 14.9124 12.1067 14.8952 12.4168C14.8694 12.7873 14.6712 13.0285 14.3266 13.0974C14.0165 13.1663 13.7667 13.0285 13.6116 12.7787C13.5341 12.6494 13.5082 12.4771 13.5082 12.3221C13.5082 11.2108 13.5082 10.1081 13.5082 9.00536Z" fill="#7D7D7D"/>
      <path d="M18.2891 8.99679C18.2891 9.35862 18.2977 9.72905 18.2891 10.0909C18.2805 10.5302 17.979 10.849 17.5827 10.849C17.1864 10.849 16.8849 10.5302 16.8849 10.0823C16.8763 9.35 16.8763 8.62635 16.8849 7.89409C16.8849 7.45474 17.195 7.13599 17.5913 7.13599C17.9876 7.13599 18.2805 7.45474 18.2891 7.90271C18.2891 8.27315 18.2891 8.63497 18.2891 8.99679Z" fill="#7D7D7D"/>
      </svg></a></span><span><a href="${item.videoUrl}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
      <path d="M11.5025 17.9977C8.81609 17.9977 6.13465 17.9977 3.44827 17.9977C1.45945 17.9977 0.0049473 16.506 0 14.4542C0 10.819 0 7.18382 0.0049473 3.54863C0.0049473 1.49175 1.45451 0 3.44332 0C8.81114 0 14.179 0 19.5468 0C21.5356 0 22.9901 1.49175 22.9951 3.53845C23 7.17364 23 10.8139 22.9951 14.4491C22.9901 16.5009 21.5405 17.9926 19.5517 17.9977C16.8703 18.0028 14.1839 17.9977 11.5025 17.9977ZM11.5322 1.36956C8.92988 1.36956 6.3276 1.36956 3.72037 1.36956C3.54721 1.36956 3.36911 1.36956 3.19596 1.38992C2.12239 1.50193 1.3704 2.342 1.3704 3.44681C1.36545 7.15327 1.36545 10.8597 1.3704 14.5662C1.3704 14.7444 1.39019 14.9277 1.43472 15.0957C1.71177 16.063 2.42418 16.618 3.45322 16.6231C8.82104 16.6333 14.1889 16.6282 19.5567 16.6282C19.6358 16.6282 19.7199 16.618 19.7991 16.6129C20.8727 16.5009 21.6246 15.6608 21.6246 14.5509C21.6296 10.8445 21.6296 7.138 21.6246 3.43153C21.6246 3.25334 21.6049 3.07005 21.5603 2.90204C21.2783 1.90924 20.5511 1.37465 19.4627 1.37465C16.8208 1.36956 14.174 1.36956 11.5322 1.36956Z" fill="#7D7D7D"/>
      <path d="M8.8208 9.00142C8.8208 7.87624 8.8208 6.75616 8.8208 5.63098C8.8208 4.92838 9.32543 4.628 9.90426 4.99457C11.6556 6.10956 13.402 7.22965 15.1435 8.35992C15.6778 8.70613 15.6827 9.28144 15.1484 9.62765C13.4069 10.7579 11.6606 11.878 9.90921 12.993C9.33037 13.3647 8.8208 13.0643 8.8208 12.3668C8.8208 11.2467 8.8208 10.1266 8.8208 9.00142ZM10.1566 11.211C11.3241 10.4626 12.4323 9.74984 13.5949 8.99633C12.4224 8.24282 11.3142 7.53004 10.1566 6.78671C10.1566 8.28864 10.1566 9.69893 10.1566 11.211Z" fill="#7D7D7D"/>
      </svg></a></span></div>
                </div>
  
  `; 
            });
            html += '</div></div>';
        });
        // console.log('html: ',html)
        document.querySelector('.carouselparent').innerHTML =html
    })
    .catch(error => console.error(error));
    
    
    
  
    
  
  
  // wait for the document to be loaded before initializing the carousel
  document.addEventListener('DOMContentLoaded', function() {
    // get the carousel element
    var carousel = document.querySelector('#carouselExampleSlidesOnly2');
    
    // create a new carousel instance
    var carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 5000, // set the interval between slides to 5 seconds
      wrap: true // enable looping of slides
    });
  });


//   Frequently Asked Questions


/* JS for getting api data */

    //   var makeChunks = (data,size)  => {
    //   var chunkedArray = [];
    //   for (let i = 0; i < data.length; i++) {
    //       var last = chunkedArray[chunkedArray.length - 1];
    //       if(!last || last.length === size){
    //           chunkedArray.push([data[i]]);
    //       }else{
    //           last.push(data[i]);
    //       }
    //   };
    //   return chunkedArray;
    //   };

    //   fetch('https://owlapplicationbuilder.com/api/entities/profits_and_pizza_website_1580295343903_98/faqs/get_all_en?page=1&page_size=15&fld=_id&srt=-1&to_search=%7B%7D&t=true')
    //   .then(response => response.json())
    //   .then((data) => {
    //       // var trail = data.data;
    //       var responseData = data.data;
    //       responseData = makeChunks(responseData, 1);
    //       console.log('responseData: ',responseData);
  
    //       var html = "";
    //       responseData.forEach((d,i) => {
    //           html += `<div class="accordion-item" ${i == 0 ? 'active' : ''}>`;
    //           d.forEach((item,i2) => {
    //             var question = item.question;
    //   var answer = item.answer;
      
    //   html += `
    //       <div class="accordion-header">
    //         <h1 class="accordion-title">${question}</h1>
    //         <button class="accordion-toggle">
    //             <svg class="accordion-icon-plus" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    //               <path d="M7 11H15M11 15V7M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z" stroke="#7D7D7D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    //             </svg>
    //             <svg class="accordion-icon-minus" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    //               <path d="M7 11H15M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    //             </svg>
    //         </button>
    //       </div>
    //       <div class="accordion-panel">
    //         <p>${answer}</p>
    //       </div>
    //     </div>`; 
    //         });
    //         html += '</div></div>';
    //     });
    //     console.log('html: ',html)
    //     document.querySelector('.accordion').innerHTML =html
    // })
    // .catch(error => console.error(error));
  




// Accordion JS

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', event => {
    const accordionItem = header.parentElement;
    const accordionPanel = header.nextElementSibling;

    accordionItem.classList.toggle('active');
    if (accordionItem.classList.contains('active')) {
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + 'px';
      accordionPanel.style.transition = 'max-height 1s ease';
    } else {
      accordionPanel.style.maxHeight = 0;
      accordionPanel.style.transition = 'max-height 1s ease';
    }

    const activeAccordionItem = document.querySelector('.accordion-item.active');
    if (activeAccordionItem && activeAccordionItem !== accordionItem) {
      activeAccordionItem.classList.remove('active');
      const activeAccordionPanel = activeAccordionItem.querySelector('.accordion-panel');
      activeAccordionPanel.style.maxHeight = 0;
      activeAccordionPanel.style.transition = 'max-height 1s ease';
    }
  });
});

// Free Trials


var makeChunks = (data,size)  => {
    var chunkedArray = [];
    for (let i = 0; i < data.length; i++) {
        var last = chunkedArray[chunkedArray.length - 1];
        if(!last || last.length === size){
            chunkedArray.push([data[i]]);
        }else{
            last.push(data[i]);
        }
    };
    return chunkedArray;
    };

    fetch('https://owlapplicationbuilder.com/api/entities/profits_and_pizza_website_1580295343903_98/free_trials/get_all_en?page=1&page_size=15&fld=_id&srt=-1&to_search={}&t=true')
    .then(response => response.json())
    .then((data) => {
        // var trail = data.data;
        var responseData = data.data;
        responseData = makeChunks(responseData, 3);
        console.log('responseData: ',responseData);

        var html = "";
        responseData.forEach((d,i) => {
            html += `<div class="carousel-item ${i == 0 ? 'active' : ''}" data-bs-interval="5000"> <div class="row">`;
            d.forEach((item,i2) => {
              var img = item.mediamanager;
  var title = item.headline;
  var des = item.description;
  var url = item.url;
                html += ` 
                
                 <div class="col-lg-4 col-md-6 my-4">
    <a class="freeTrailUrl" href="${url}" target="_blank">
      <div class="card card-set" style="border-radius: 20px;">
        <img class="card-img-top" src="${img}" alt="Card image cap" style="border-top-left-radius: 20px; border-top-right-radius: 20px;">
        <div class="card-body section_hover">
          <h5 class="card-title text-secondary">${title}</h5>
          <p class="card-text text-secondary">${des}</p>
        </div>
      </div>
    </a>

</div>`; 
            });
            html += '</div></div>';
        });
        console.log('html: ',html)
        document.querySelector('.carousel_Root').innerHTML =html
    })
    .catch(error => console.error(error));

    // Website Evaluation Content

    var appUToken = getCookie("app_u_token");
  
    console.log(`Api token: ${appUToken}`);
  
    var url = `https://owlapplicationbuilder.com/api/entities/profits_and_pizza_website_1580295343903_98/website_list/get_all_en?page=1&page_size=15&fld=_id&srt=-1&to_search={"utoken": "${appUToken}"}&t=true`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      var apiData = data.data;
      apiData.forEach((data => {
        var companyName = data.companyName;
        var auditIn = data.auditIn;
        var auditOut = data.auditOut;
        var inAudit = data.inAudit;
        
        // Set initial counter values to 100
        var counterAuditIn = 110;
        var counterAuditOut = 80;
        var counterInAudit = 60;
  
        // Update counter values every 20 milliseconds until they reach the corresponding API value
        var interval = setInterval(() => {
          if (counterAuditIn > auditIn) {
            counterAuditIn--;
            document.querySelector(`.audit-in-content`).innerHTML = counterAuditIn;
          }
          if (counterAuditOut > auditOut) {
            counterAuditOut--;
            document.querySelector(`.audit-out-content`).innerHTML = counterAuditOut;
          }
          if (counterInAudit > inAudit) {
            counterInAudit--;
            document.querySelector(`.in-audit-content`).innerHTML = counterInAudit;
          }
          // Stop the interval when all counters have reached their corresponding API value
          if (counterAuditIn === auditIn && counterAuditOut === auditOut && counterInAudit === inAudit) {
            clearInterval(interval);
          }
        }, 50);
        
       
          var userDataWithToken = `<div class="row w-100 justify-content-start align-items-start">
                        <p class="col company-title">${companyName}</p>
                      </div>
                      <div class="row py-3 py-md-0 w-100">
                        <div class='col-md-4 d-flex align-items-center justify-content-center'>
                          <p class="audit-in-content">${counterAuditIn}</p>
                        </div>
                        <div class='col-md-4 d-flex align-items-center justify-content-center'>
                          <p class="audit-out-content">${counterAuditOut}</p>
                        </div>
                        <div class='col-md-4 d-flex align-items-center justify-content-center'>
                          <p class="in-audit-content">${counterInAudit}</p>
                        </div>
                      </div>
                      
                      <div class="row mb-4 w-100 justify-content-center align-items-center">
                        <div class='col-md-4'>
                          <p class="audit-text">Audit in</p>
                        </div>
                        <div class='col-md-4'>
                          <p class="audit-text">Audit Out</p>
                        </div>
                        <div class='col-md-4'>
                          <p class="audit-text">In Audit</p>
                        </div>
                      </div>`
      
          var userDataWithoutToken = `<div class="row w-100 justify-content-start align-items-start">
                          <p class="col company-title">Evaluation Not Conducted</p>
                        </div>
                        <div class="row py-3 py-md-0 w-100">
                          <div class='col-md-4 d-flex align-items-center justify-content-center'>
                            <p class="audit-in-content">0</p>
                          </div>
                          <div class='col-md-4 d-flex align-items-center justify-content-center'>
                            <p class="audit-out-content">0</p>
                          </div>
                          <div class='col-md-4 d-flex align-items-center justify-content-center'>
                            <p class="in-audit-content">0</p>
                          </div>
                        </div>
                        
                        <div class="row mb-4 w-100 justify-content-center align-items-center">
                          <div class='col-md-4'>
                            <p class="audit-text">Audit in</p>
                          </div>
                          <div class='col-md-4'>
                            <p class="audit-text">Audit Out</p>
                          </div>
                          <div class='col-md-4'>
                            <p class="audit-text">In Audit</p>
                          </div>
                        </div>`
                            
        if(apiData.length > 0){
    document.getElementById('markupRoot').innerHTML = userDataWithToken; 
        }
        else if(apiData.length <= 0) {
    document.getElementById('markupRoot').innerHTML = userDataWithoutToken; 
    }
   
      }))
    })
    .catch(error => console.log(error));
    
    function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
  }
    
  
  
//   var appUToken = getCookie("app_u_token");

//   console.log(`Api token: ${appUToken}`);

//   var url = `https://owlapplicationbuilder.com/api/entities/profits_and_pizza_website_1580295343903_98/website_list/get_all_en?page=1&page_size=15&fld=_id&srt=-1&to_search={"utoken": "${appUToken}"}&t=true`;
  
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
      
//       var apiData = data.data;
//       apiData.forEach((data => {
        
//         var companyName = data.companyName;
//         var auditIn = data.auditIn;
//         var auditOut = data.auditOut;
//         var inAudit = data.inAudit;
        
//         var count = 100;
        
//         let timer = setInterval(function() {
//           auditIn.textContent = count;
//           count--;
        
//           if (count < auditIn) {
//             clearInterval(timer);
//           }
//         }, 20);
        
//         if(apiData.length > 0){
//         var markup = `<div class="row w-100 justify-content-start align-items-start">
//                         <p class="col company-title">${companyName}</p>
//                       </div>
//                       <div class="row py-3 py-md-0 w-100">
//                         <div class='col-md-4 d-flex align-items-center justify-content-center'>
//                           <p class="audit-in-content">${auditIn}</p>
//                         </div>
//                         <div class='col-md-4 d-flex align-items-center justify-content-center'>
//                           <p class="audit-out-content">${auditOut}</p>
//                         </div>
//                         <div class='col-md-4 d-flex align-items-center justify-content-center'>
//                           <p class="in-audit-content">${inAudit}</p>
//                         </div>
//                       </div>
                      
//                       <div class="row mb-4 w-100 justify-content-center align-items-center">
//                         <div class='col-md-4'>
//                           <p class="audit-text">Audit in</p>
//                         </div>
//                         <div class='col-md-4'>
//                           <p class="audit-text">Audit Out</p>
//                         </div>
//                         <div class='col-md-4'>
//                           <p class="audit-text">In Audit</p>
//                         </div>
//                       </div>`
//       }else{
//         var markup = `<div class="row w-100 justify-content-start align-items-start">
//                         <p class="col company-title">Evaluation Not Conducted</p>
//                       </div>
//                       <div class="row py-3 py-md-0 w-100">
//                         <div class='col-md-4 d-flex align-items-center justify-content-center'>
//                           <p class="audit-in-content">0</p>
//                         </div>
//                         <div class='col-md-4 d-flex align-items-center justify-content-center'>
//                           <p class="audit-out-content">0</p>
//                         </div>
//                         <div class='col-md-4 d-flex align-items-center justify-content-center'>
//                           <p class="in-audit-content">0</p>
//                         </div>
//                       </div>
                      
//                       <div class="row mb-4 w-100 justify-content-center align-items-center">
//                         <div class='col-md-4'>
//                           <p class="audit-text">Audit in</p>
//                         </div>
//                         <div class='col-md-4'>
//                           <p class="audit-text">Audit Out</p>
//                         </div>
//                         <div class='col-md-4'>
//                           <p class="audit-text">In Audit</p>
//                         </div>
//                       </div>`
//       }
                      
//         document.getElementById('markupRoot').innerHTML = markup;
//       }))
//     })
//     .catch(error => console.log(error));
    
//     function getCookie(name) {
//   var value = "; " + document.cookie;
//   var parts = value.split("; " + name + "=");
//   if (parts.length === 2) {
//     return parts.pop().split(";").shift();
//   }
// }

