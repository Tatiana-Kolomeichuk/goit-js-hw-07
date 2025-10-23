const categoriesListEl = document.querySelector('#categories');

const categoriesEl = categoriesListEl.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);
categoriesEl.forEach(categoryEl => {
  const title = categoryEl.querySelector('h2').textContent;
  const elementsCount = categoryEl.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
}); 