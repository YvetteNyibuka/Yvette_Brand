const publishedBlogs = JSON.parse(localStorage.getItem('publishedBlogs')) || [];
let editingIndex = null;

function savePublishedBlogsToLocalStorage() {
    localStorage.setItem('publishedBlogs', JSON.stringify(publishedBlogs));
}

function renderPublishedBlogs() {
    const blogList = document.querySelector('.blog-list');
    blogList.innerHTML = ''; // Clear the existing content

    publishedBlogs.forEach((blog, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${blog.blogid}</td>
            <td>${blog.author}</td>
            <td>${blog.title}</td>
            <td>${blog.content}</td>
            <td><img src="${blog.image}" alt="${blog.title}" style="max-width: 100px;"></td>
            <td>
                <button class="edit" onclick="editBlog(${index})">Edit</button>
                <button class="delete" onclick="deleteBlog(${index})">Delete</button>
            </td>
        `;
        blogList.appendChild(row);
    });
}

// Load and render existing blogs from local storage when the DOM content is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    renderPublishedBlogs();
});

function addBlog() {
    const blogid = document.getElementById('blogid').value;
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image');
    const image = imageInput.files[0]; // Get the uploaded image

    if (blogid && author && title && content) {
        // Assuming image is uploaded to the server and we get a URL for it
        // In a real application, you would handle image uploads differently
        const imageUrl = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages04.nicepage.com%2Ffeature%2F583347%2Fblog-category.jpg&tbnid=GvoOL8OT0HQGMM&vet=12ahUKEwjP3OrEsJSBAxWQsScCHaVXD7UQMygBegQIARB2..i&imgrefurl=https%3A%2F%2Fnicepage.com%2Ffeatures%2Fc%2Fblog&docid=0WRGJiknYKTfwM&w=540&h=320&q=blog&ved=2ahUKEwjP3OrEsJSBAxWQsScCHaVXD7UQMygBegQIARB2'; // Replace with the actual image URL or path.

        publishedBlogs.push({ blogid, author, title, content, image: imageUrl });
        renderPublishedBlogs(); // Render the updated list with the new blog

        document.getElementById('blogid').value = '';
        document.getElementById('author').value = '';
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        imageInput.value = ''; // Clear the image input

        savePublishedBlogsToLocalStorage(); // Save the updated data to local storage
    }
}

// Rest of your functions (editBlog, updateBlog, cancelEdit, deleteBlog) remain unchanged.

function editBlog(index) {
    editingIndex = index;
    const blogToEdit = publishedBlogs[index];
    const editTitleInput = document.getElementById('editTitle');
    const editContentInput = document.getElementById('editContent');
    const editImageInput = document.getElementById('editImage');

    editTitleInput.value = blogToEdit.title;
    editContentInput.value = blogToEdit.content;

    // Show the edit form
    document.querySelector('.edit-blog-form').style.display = 'block';
}

function updateBlog() {
    if (editingIndex !== null) {
        const updatedTitle = document.getElementById('editTitle').value;
        const updatedContent = document.getElementById('editContent').value;

        if (updatedTitle && updatedContent) {
            const updatedImageInput = document.getElementById('editImage');
            const updatedImage = updatedImageInput.files[0]; // Get the updated image

            if (updatedImage) {
                // Handle the updated image (e.g., upload it to the server)
                // In a real application, you would handle image uploads differently
                const updatedImageUrl = 'path-to-updated-image.jpg'; // Replace with the new image URL

                publishedBlogs[editingIndex] = {
                    ...publishedBlogs[editingIndex],
                    title: updatedTitle,
                    content: updatedContent,
                    image: updatedImageUrl, // Replace the image URL with the new one
                };
            } else {
                // If no updated image, retain the previous image
                publishedBlogs[editingIndex] = {
                    ...publishedBlogs[editingIndex],
                    title: updatedTitle,
                    content: updatedContent,
                };
            }

            renderPublishedBlogs();
            cancelEdit();
            savePublishedBlogsToLocalStorage(); // Save the updated data to local storage
        }
    }
}


function cancelEdit() {
    editingIndex = null;
    document.querySelector('.edit-blog-form').style.display = 'none';
    document.getElementById('editTitle').value = '';
    document.getElementById('editContent').value = '';
    document.getElementById('editImage').value = '';
}

function deleteBlog(index) {
    const confirmDelete = confirm('Are you sure you want to delete this blog?');

    if (confirmDelete) {
        publishedBlogs.splice(index, 1);
        renderPublishedBlogs();
        savePublishedBlogsToLocalStorage(); // Save the updated data to local storage
    }
}
