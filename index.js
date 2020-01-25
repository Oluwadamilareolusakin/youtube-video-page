
const handleShowMore = (e) => {
  const description = document.querySelector(".more-less-description");
  description.classList.toggle('auto-height');

  if (showMore.innerHTML === 'Show more') {
    showMore.innerHTML = 'Show Less';
    return;
  } 
  
  showMore.innerHTML = 'Show more'; 
};

const handleSearchBar = () => {
  const searchHolder = document.querySelector('.mobile-search-holder');
  searchHolder.classList.toggle('open-search');
};

const showMore = document.querySelector(".show-more");
showMore.addEventListener('click', handleShowMore);

const mobileSearchIcon = document.querySelector('.mobile-search-icon');
mobileSearchIcon.addEventListener('click', handleSearchBar);

const closeSearchIcon = document.querySelector('.close-search-icon');
closeSearchIcon.addEventListener('click', handleSearchBar);