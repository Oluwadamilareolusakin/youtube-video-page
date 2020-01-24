const showMore = document.querySelector(".show-more");
const description = document.querySelector(".more-less-description");
showMore.addEventListener('click', handleShowMore)

function handleShowMore(e){
  description.classList.toggle('auto-height');

  if (showMore.innerHTML === 'Show more') {
    showMore.innerHTML = 'Show Less';
    return;
  } 

  showMore.innerHTML = 'Show more'; 
}