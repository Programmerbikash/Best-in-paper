const loadInfo = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data.news_category))
    
}
loadInfo();

const displayData = posts => {
    // console.log(posts)
    const navContainer = document.getElementById('nav-container');
    for (const post of posts) {
        // console.log(post);
        const div = document.createElement('div');
        div.classList.add('navbar-content')
        div.innerHTML = `
            <a onclick="loadNav('${post?.category_id}')" class="nav-link" href="#">${post.category_name}</a>
        `
        navContainer.appendChild(div);
    }
}

document.getElementById('home-btn').addEventListener('click', function () {
    loadInfo();
})

// const loadNav = async category_id => {
//     const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayNavId(data.data));
// }
// loadNav();

// const displayNavId = (allId) => {
//     // console.log(allId)
//     for (const id of allId) {
//         console.log(id);
//     }
// }