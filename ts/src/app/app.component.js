const btnShowMore = document.querySelectorAll('.btn-show-more');
const hiddenText = document.querySelectorAll('.aditional-content');

const btnCreateTopic = document.querySelectorAll('.btn-create-topic')

btnShowMore.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    if (hiddenText[index].style.display === 'none' || hiddenText[index].style.display === '') {
      hiddenText[index].style.display = 'block';
      btnShowMore[index].style.display = 'none'
    } else {
      hiddenText[index].style.display = 'none';
      btn.textContent = 'Ver Mais'; 
    }
  });
});

btnCreateTopic.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        
    })
})
