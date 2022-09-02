const loadNav = (code) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${code}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNavId(data.data));
}
loadNav();

const displayNavId = (allId) => {
    console.log(allId)
    for (const id of allId) {
        console.log(id.category_id);
    }
}