
let bogdata
let blog_card = document.getElementById('blogss')
let blogInfo = JSON.parse(localStorage.getItem('publishedBlogs'))|| []

function readIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');
    const blog = blogInfo.find(blog => blog.title === blogId);
    console.log(blog);

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
