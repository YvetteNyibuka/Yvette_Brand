var blogs = [
    {
        id: 1,
        image: 'https://picsum.photos/200/300',
        title: 'Blog 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam, doloremque, nobis, quasi, quidem, doloremque, nobis, quasi.'
    },
    {
        id: 2,
        image: 'https://picsum.photos/200/300?grayscale',
        title: 'Blog 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam, doloremque, nobis, quasi, quidem, doloremque, nobis, quasi.'
    },
    {
        id: 3,
        image: 'https://picsum.photos/seed/picsum/200/300',
        title: 'Blog 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam, doloremque, nobis, quasi, quidem, doloremque, nobis, quasi.'
    },
    {
        id: 4,
        image: 'https://picsum.photos/seed/picsum/200/300',
        title: 'Blog 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam, doloremque, nobis, quasi, quidem, doloremque, nobis, quasi.'
    },
    {
        id: 5,
        image: 'https://picsum.photos/seed/picsum/200/300',
        title: 'Blog 5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam, doloremque, nobis, quasi, quidem, doloremque, nobis, quasi.'
    },
    {
        id: 6,
        image: 'https://picsum.photos/seed/picsum/200/300',
        title: 'Blog 6',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam, doloremque, nobis, quasi, quidem, doloremque, nobis, quasi.'
    }
];

let blogCard = document.getElementById('blogCard')

for (let i = 0; i < blogs.length; i++) {
    let blog = blogs[i]
    let blogData = `  <div class="blog_card">
<div class="blog_img">
  <img src="${blog.image}" alt="" style="width: 100%;">
  </div>
  <div class="blog_titles">${blog.title}</div>
  <div class="blog_desc">${blog.content}</div>
  <div class="btn_readmore">
  <a href="readmore.html?id=${blog.id}" id="btn-readmore">Readmore</a>
  </div>
  </div>
  `
    blogCard.innerHTML += blogData
}

document.getElementById('burger-button').addEventListener('click', function() {
    document.body.classList.toggle('show-menu');
});

document.querySelectorAll('.test a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.body.classList.remove('show-menu');
    });
});