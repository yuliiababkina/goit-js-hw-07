const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCategories.length}`);

for (const item of numberOfCategories) {
    const title = item.querySelector("h2");
    const list = item.querySelectorAll("li");

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${list.length}`);
}
