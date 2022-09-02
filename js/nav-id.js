const loadNav = async category_id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNavId(data.data[0]));
}
loadNav();

const displayNavId = (data) => {
    console.log(data.category_id ? data.category_id : 'Do not any id')
    // for (const id of data) {
    //     console.log(id.category_id);
    // }
}