const fruits = [
  {
    id: 1,
    title: 'Яблоки',
    price: 20,
    img:
      'https://st.depositphotos.com/1003272/1632/i/600/depositphotos_16322913-stock-photo-red-apple.jpg',
  },
  {
    id: 2,
    title: 'Апельсины',
    price: 50,
    img: 'https://www.okeydostavka.ru/wcsstore/OKMarketCAS/cat_entries/37698/37698_fullimage.jpg',
  },
  {
    id: 3,
    title: 'Бананы',
    price: 40,
    img:
      'https://static.wikia.nocookie.net/fnaf-fanon-animatronics/images/4/40/%D0%91%D0%B0%D0%BD%D0%B0%D0%BD.png/revision/latest?cb=20190614113143&path-prefix=ru',
  },
];

const toHtml = (fruit) => `<div class="col">
<div class="card" style="width: 18rem">
  <img
    src="${fruit.img}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${fruit.title}</h5>

    <a href="#" class="btn btn-primary" style="cursor: pointer" data-btn="bay" data-id=${fruit.id}>Купить</a>
    <a href="#" class="btn btn-danger" style="cursor: pointer">Удалить</a>
  </div>
</div>
</div>`;

function render() {
  const html = fruits.map((obj) => toHtml(obj));
  console.log(html);
  document.querySelector('#fruitc').innerHTML = html;
}

const MyModal = $.modal({
  title: 'Купить',
  closable: true,
  content: `
  <p>Введите кол-во</p>
  <form>
    <fieldset>
      <legend>Кол-во:</legend>
      <input type="text">
    </fieldset>
  </form>`,
  width: '400px',
  footerButtons: [
    {
      text: 'Купить',
      type: 'primary',
      handler() {
        MyModal.close();
      },
    },
    {
      text: 'Отмена',
      type: 'danger',
      handler() {
        console.log('отмена');
        MyModal.close();
      },
    },
  ],
});
render();

document.addEventListener('click', (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;

  if (btnType === 'bay') {
    const fruit = fruits.find((f) => f.id === id);
    MyModal.setContent(`
    <p>Цена на ${fruit.title}:<strong>${fruit.price}$</strong></p>
    `);
    MyModal.open();
  }
});
