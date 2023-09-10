// Get blogs from local storage or initialize an empty array
const publishedBlogs = JSON.parse(localStorage.getItem('publishedBlogs')) || [];

let editingIndex = null;

// Function to save blogs to local storage
function savePublishedBlogsToLocalStorage() {
    localStorage.setItem('publishedBlogs', JSON.stringify(publishedBlogs));
}

// Function to render blogs in the blog-list div
function renderPublishedBlogs() {
    const blogList = document.getElementById('blog-list');
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

// Render blogs when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderPublishedBlogs();
});

// Function to add a new blog

let nextBlogId = 1;
function addBlog() {
    // const blogid = document.getElementById('blogid').value;
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image');
    const image = imageInput.files[0]; // Get the uploaded image

    if ( author && title && content && image) {
        const reader = new FileReader();

        reader.readAsDataURL(image);
        const blogid = nextBlogId++;
        console.log('Generated blogid:', blogid); // Debug: Log the generated blogid

        reader.addEventListener('load', () => {
            const imageUrl = reader.result;
            publishedBlogs.push({ blogid, author, title, content, image: imageUrl });
            savePublishedBlogsToLocalStorage();
            renderPublishedBlogs();
            clearForm();
        });
    } else {
        alert('Please fill in all fields and select an image.');
    }
}

// Function to clear the form fields
function clearForm() {
    // document.getElementById('blogid').value = '';
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
}

// Function to edit a blog
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

// Function to update a blog
function updateBlog() {
    if (editingIndex !== null) {
        const updatedTitle = document.getElementById('editTitle').value;
        const updatedContent = document.getElementById('editContent').value;

        if (updatedTitle && updatedContent) {
            const updatedImageInput = document.getElementById('editImage');
            const updatedImage = updatedImageInput.files[0]; // Get the updated image

            if (updatedImage) {
                const reader = new FileReader();
                reader.readAsDataURL(updatedImage);

                reader.addEventListener('load', () => {
                    const updatedImageUrl = reader.result;
                    publishedBlogs[editingIndex] = {
                        ...publishedBlogs[editingIndex],
                        title: updatedTitle,
                        content: updatedContent,
                        image: updatedImageUrl,
                    };

                    savePublishedBlogsToLocalStorage();
                    renderPublishedBlogs();
                    cancelEdit();
                });
            } else {
                publishedBlogs[editingIndex] = {
                    ...publishedBlogs[editingIndex],
                    title: updatedTitle,
                    content: updatedContent,
                };

                savePublishedBlogsToLocalStorage();
                renderPublishedBlogs();
                cancelEdit();
            }
        }
    }
}

// Function to cancel the edit mode
function cancelEdit() {
    editingIndex = null;
    document.querySelector('.edit-blog-form').style.display = 'none';
    document.getElementById('editTitle').value = '';
    document.getElementById('editContent').value = '';
    document.getElementById('editImage').value = '';
}

// Function to delete a blog
function deleteBlog(index) {
    const confirmDelete = confirm('Are you sure you want to delete this blog?');

    if (confirmDelete) {
        publishedBlogs.splice(index, 1);
        savePublishedBlogsToLocalStorage();
        renderPublishedBlogs();
    }
}
