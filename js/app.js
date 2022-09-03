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
              <li onclick="loadPostId('${singleData.category_id}')" class="nav-item active mx-3 px-1">
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
  // loadPostId();
  
  const displayPostData = allPost => {
      // console.log(allPost);
      const mainContainer = document.getElementById('main-container');
      allPost.forEach(post => {
          console.log(post);
          const div = document.createElement('div');
          div.classList.add('row');
          div.innerHTML = `
          <div class="col-md-4 border border-1 border-start-0 border-end-0 py-4">
              <img src="${post.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8 border border-1 border-start-0 border-end-0 py-4">
          <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.details}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
         </div>
          `
          mainContainer.appendChild(div);
      });
  }