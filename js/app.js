const loadNavbarData = async () => {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/news/categories"
    );
    const data = await response.json();
    return data;
  };
  
  const displayNavbarData = async () => {
    // console.log(loadNavbarData());
    const data = await loadNavbarData();
    // console.log(data.data.news_category)
    const allData = data.data.news_category;
      const navContainer = document.getElementById("nav-container");
      const uniqueTitleName = [];
    allData.forEach((singleData) => {
      if (uniqueTitleName.indexOf(singleData.category_name) === -1) {
          // console.log(singleData.category_id);
          // console.log(singleData.category_name);
          const ul = document.createElement("ul");
          ul.classList.add("navbar-nav");
          ul.innerHTML = `
              <li onclick="loadPostId('${singleData.category_id}')" class="nav-item active mx-2 px-1">
                  <a class="nav-link" href="#">${singleData.category_name}</a>
              </li>
        `;
        navContainer.appendChild(ul);
      }
    });
  };
  displayNavbarData();
  
  const loadPostId = (category_id) => {
      const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
      fetch(url)
      .then(res => res.json())
      .then(data => displayPostData(data.data))
  }
  loadPostId('01');
  
  const displayPostData = allPost => {
      // console.log(allPost);
      const mainContainer = document.getElementById('main-container');
      mainContainer.innerHTML = ``;
      allPost.forEach(post => {
        //   console.log(post);
          const div = document.createElement('div');
          div.classList.add('row');
          div.innerHTML = `
          <div class="col-md-3 col-sm-12 border border-1 border-start-0 border-end-0 py-4">
              <img src="${post.thumbnail_url}" class="img-fluid rounded-start ms-4" alt="...">
        </div>
        <div class="col-md-9 col-sm-12 border border-1 border-start-0 border-end-0 py-4">
          <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p onclick="loadNewsDetails('${post._id}')" class="card-text">${post.details.slice(0, 400)}</p>
            
              <!-- Scrollable modal -->
              
              <div class="d-flex justify-content-between mt-5">
                    <div class="d-flex justify-content-between">
                    <img class="author-image author-image rounded-3 mt-1" src="${post.image_url}">
                    <div class="ms-2 mt-2">
                        <h5>${post.author.name ? post.author.name : 'No Author Name'}</h5>
                        <p>${post.author.published_date}</p>
                    </div>
                    </div>
                    <div class="mt-4">
                    <h3 class="card-text"><i class="fas fa-eye"></i> ${post.total_view ? post.total_view : 'No View'}</h3>
                    </div>
                    <div class="mt-4 d-flex justify-content-between">
                        <h4><i class="fas fa-star"></i></h4>
                        <h4><i class="fas fa-star-half-alt"></i></h4>
                        <h4><i class="far fa-star"></i></h4>
                    </div>
                    <div class="mt-4">
                        <h3><a href="#"><i class="fas fa-arrow-right"></i></a></h3>
                    </div>
              </div>
          </div>
         </div>
          `
          mainContainer.appendChild(div);
      });
}

const loadNewsDetails = (news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsDetails(data.data));
};

const displayNewsDetails = postDetails => {
    // console.log(postDetails);
    const details = document.getElementById('modal');
    details.innerText = ``;
    for (const detail of postDetails) {
        // console.log(detail);
        const div = document.createElement('div');
        div.innerHTML = `
        <p>${detail.details.slice(0, 1500)}</p>
        `
        // p.innerText = `${detail.details.slice(0, 1500)}`
        details.appendChild(div);
    }
}

loadNewsDetails();

/* <div class="modal-dialog">
            
            </div> */