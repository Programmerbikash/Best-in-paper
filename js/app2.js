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

const displayPostData = allPostData => {
    console.log(allPostData)
    // const mainContainer = document.getElementById('main-container');
    // mainContainer.textContent = '';
    allPostData.forEach(singlePost => {
        console.log(singlePost)
        
    });
}
// displayPostData()
