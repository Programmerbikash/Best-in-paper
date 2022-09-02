const loadNav = async category_id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNavId(data.data[0]));
}
loadNav();

const displayNavId = (posts) => {
    // console.log(posts)
    const mainContainer = document.getElementById('main-container');
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
