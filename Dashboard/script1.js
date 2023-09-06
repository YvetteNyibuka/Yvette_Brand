let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})

let dasshboards_sections = `<div class="dashboards_containers">
<div class="blog_number" id="statistics">
    <h1>15 Blogs</h1>
</div>
<div class="message_number" id="statistics">
    <h1>60 Messages</h1>
</div>
<div class="comment_number" id="statistics">
    <h1>20 Comments</h1>
</div>
<div class="likes_number" id="statistics">
    <h1>20 Likes</h1>
</div>
<div class="dislikes_number" id="statistics">
   <h1> 100 Dislikes</h1>
</div>
<div class="share_number" id="statistics">
    <h1>100 Shares</h1>
<h1></h1>        
</div>
</div>`;

var blogs_sections = `
<div class="containerb" style="background-color: lightgray; width: 100%;">
    <div style="overflow-x: auto;">
        <table>
            <thead>
                <tr>
                    <th id="cap">Blog ID</th>
                    <th id="cap">Author</th>
                    <th id="cap">Title</th>
                    <th id="cap">Content</th>
                    <th id="cap">Image</th>
                    <th id="cap">Actions</th>
                </tr>
            </thead>
            <tbody class="blog-list">
                <!-- Blog items will be added here dynamically -->
            </tbody>
        </table>
    </div>
    <form class="add-blog-form">
        <label for="blogid" class="label">Blog ID:</label>
        <input type="text" id="blogid" name="blogid" required>
        <label for="author" class="label">Author:</label>
        <input type="text" id="author" name="author" required>
        <label for="title" class="label">Title:</label>
        <input type="text" id="title" name="title" required>
        <label for="content" class="label">Content:</label>
        <textarea id="content" name="content" required></textarea>
        <label for="image" class="label">Image:</label>
        <input type="file" id="image" name="image">
        <button type="button" onclick="addBlog()">Add Blog</button>
    </form>
    <h2 id="titlee">Edit Blog</h2>
    <form class="edit-blog-form">
        <label for="editTitle" class="label">Title:</label>
        <input type="text" id="editTitle" name="editTitle" required>
        <label for="editContent" class="label">Content:</label>
        <textarea id="editContent" name="editContent" required></textarea>
        <label for="editImage" class="label">Image:</label>
        <input type="file" id="editImage" name="editImage">
        <button type="button" onclick="updateBlog()">Update Blog</button>
        <button type="button" onclick="cancelEdit()">Cancel</button>
    </form>
</div>`;

let messages_sections= `
<div class="messages_containers">
<h2>Received Messages</h2>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
        </tr>
    </thead>
    <tbody>
        <!-- Sample Message Rows (Add more rows as needed) -->
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>janesmith@example.com</td>
            <td>Nulla ac ligula ac justo suscipit tristique.</td>
        </tr>
        <!-- Add more message rows here -->
    </tbody>
</table>
</div>
    `
let users_sections = `<div class="containers_users">
<h2>Registered Users</h2>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <!-- Sample User List Item -->
        <tr class="user-item">
            <td>1</td>
            <td>User 1</td>
            <td>user1@example.com</td>
        </tr>
        <!-- Add more user items here -->
    </tbody>
</table>
</div>`;

// Get references to DOM elements
const dashboardOption = document.getElementById("dashboard");
const articlesOption = document.getElementById("articles");
const messagestOption = document.getElementById("querries");
const usersOption = document.getElementById("userss");
const logoutOption = document.getElementById("logout");
const mainContent = document.getElementById("main-content");

// Function to update main content based on option
function updateMainContent(optionText) {
    mainContent.innerHTML = `<h1>${optionText}</h1>`;
}

// Add click event listeners to nav options
dashboardOption.addEventListener("click", () => {
    updateMainContent(dasshboards_sections);
});

articlesOption.addEventListener("click", () => {
    updateMainContent(blogs_sections);
});

messagestOption.addEventListener("click", () => {
    updateMainContent(messages_sections);
});

usersOption.addEventListener("click", () => {
    updateMainContent(users_sections);
});

logoutOption.addEventListener("click", () => {
    updateMainContent("Logout");
});
