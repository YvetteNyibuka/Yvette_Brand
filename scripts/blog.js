// blog.js
// const urlParams = new URLSearchParams(window.location.search);
// const blogId = parseInt(urlParams.get('id'));
// const blog = blogs.find(blog => blog.id === blogId);
  
// document.addEventListener("DOMContentLoaded", function () {
//     let bogdatas;
//     let blog_card = document.getElementById('blogss');
 
//   console.log(blog);
//     if (blog) {
//       bogdatas = `
//         <div class="blog_title">${blog.title}</div>
//         <div class="blog_img"><img src="${blog.image}" alt="${blog.title}" style="width: 100%;"></div>
//         <div class="author">Author: Your Name</div>
//         <div class="blog_desc">${blog.content}</div>`;
  
//       blog_card.innerHTML = bogdatas;
//     } else {
//       blog_card.innerHTML = "Blog not found";
//     }
//   });

// let blogCard = document.getElementById('blogss');

// // blogCard.addEventListener('click', readIdFromUrl);



let bogdata
let blog_card = document.getElementById('blogss')
function readIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id'));
    const blog = blogs.find(blog => blog.id === blogId);
    if (blog) {
      bogdata = ` <div class="blog_title">
      <p style="padding: 1rem;">${blog.title}</p>
  </div>
  <div class="blog_img">
      <img src="${blog.image}" alt="" height="100%" width="100%">
  </div>
  <div class="author">
      <p style="padding: 1rem;">By Yvette| 29 August 2023</p>
  </div>
  <div class="blog_desc">
      <p style="padding: 1rem;">${blog.content}</p> 
      </p>

  </div>
  <button id="btn_back"><a href="../../index.html#blog" class= "btnb">Back</a></button>`
    } else {
        console.log('Blog not found');
    }
    blog_card.innerHTML = bogdata;
}
readIdFromUrl()  
