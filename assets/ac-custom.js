document.addEventListener('DOMContentLoaded', () => {
  const articlesContainer = document.getElementById('articles-container');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const allArticles = Array.from(articlesContainer.children); // All blog cards
  const articlesPerPage = 6; // Number of articles to show per load
  let currentIndex = 0; // To track the current index of loaded articles

  allArticles.forEach((article, index) => {
    if (index >= articlesPerPage) {
      article.style.display = 'none';
    }
  });

  currentIndex += articlesPerPage;

  loadMoreBtn?.addEventListener('click', () => {
    for (let i = currentIndex; i < currentIndex + articlesPerPage; i++) {
      if (allArticles[i]) {
        allArticles[i].style.display = 'block';
      }
    }

    currentIndex += articlesPerPage;

    // Hide the button if all articles are shown
    if (currentIndex >= allArticles.length) {
      loadMoreBtn?.style.display = 'none';
    }
  });
});
