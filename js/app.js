const loadInfo = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.news_category)
}

loadInfo();

const displayData = (posts) => {
    // console.log(posts)
    for (const post of posts) {
        const navContainer = document.getElementById('nav-container');
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
});

const loadNav = async(category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNavId(data.data[0]);
}

loadNav();

const displayNavId = (posts) => {
    console.log(posts)
    const mainContainer = document.getElementById('main-container');
    mainContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('row')
    div.innerHTML = `
    <div class="col-md-4 my-4">
        <img src="${posts.thumbnail_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8 my-4">
        <div class="card-body">
          <h5 class="card-title">${posts.title}</h5>
          <p class="card-text">${posts.details}</p>
          <div class="bottom-part">
            <div class="author-address float-start">
                <img class="float-start author-image" src="${posts.image_url}" alt="...">
                <div class="float-end me-4">
                    <p class="card-text"><small class="text-muted">${posts.author.name}</small></p>
                    <p class="card-text"><small class="text-muted">${posts.author.published_date}</small></p>
                </div>
                <div class="view-part float-end">
                    <p class="card-text mt-3"><small class="text-muted">${posts.total_view}</small></p>
                </div>
            </div>
        </div>
    </div>
    `
    mainContainer.appendChild(div);
}