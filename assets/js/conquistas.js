(() => {
  const data = Array.isArray(window.CONQUISTAS_MARIA_VALENTINA)
    ? window.CONQUISTAS_MARIA_VALENTINA
    : [];
  const list = document.querySelector('[data-achievements-list]');
  if (!list) return;

  const status = document.querySelector('[data-results-status]');
  const empty = document.querySelector('[data-empty-state]');
  const yearSelect = document.querySelector('[data-year-filter]');
  const typeButtons = [...document.querySelectorAll('[data-type-filter]')];
  let activeType = 'todos';

  const setCount = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };
  setCount('[data-total-results]', data.length);
  setCount('[data-total-titles]', data.filter((item) => item.tipo === 'titulo').length);
  setCount('[data-total-awards]', data.filter((item) => item.tipo === 'premio').length);

  [...new Set(data.map((item) => item.ano))]
    .sort((a, b) => b - a)
    .forEach((year) => {
      const option = document.createElement('option');
      option.value = String(year);
      option.textContent = year;
      yearSelect?.appendChild(option);
    });

  const createCard = (item, index) => {
    const article = document.createElement('article');
    article.className = `achievement-card achievement-card--${item.tipo}`;
    article.style.setProperty('--card-delay', `${Math.min(index * 35, 280)}ms`);

    const top = document.createElement('div');
    top.className = 'achievement-card-top';
    const type = document.createElement('span');
    type.className = 'achievement-type';
    type.textContent = item.tipo === 'premio' ? 'Premiação individual' : 'Título / competição';
    const year = document.createElement('span');
    year.className = 'achievement-year';
    year.textContent = item.ano;
    top.append(type, year);

    const result = document.createElement('h3');
    result.textContent = item.resultado;
    const competition = document.createElement('p');
    competition.textContent = item.competicao;
    article.append(top, result, competition);

    if (item.categoria) {
      const category = document.createElement('span');
      category.className = 'achievement-category';
      category.textContent = item.categoria;
      article.appendChild(category);
    }
    return article;
  };

  const render = () => {
    const selectedYear = yearSelect?.value || 'todos';
    const filtered = data
      .filter((item) => activeType === 'todos' || item.tipo === activeType)
      .filter((item) => selectedYear === 'todos' || String(item.ano) === selectedYear)
      .sort((a, b) => b.ano - a.ano);

    list.replaceChildren(...filtered.map(createCard));
    if (status) status.textContent = `${filtered.length} ${filtered.length === 1 ? 'resultado exibido' : 'resultados exibidos'}`;
    if (empty) empty.hidden = filtered.length !== 0;
  };

  typeButtons.forEach((button) => button.addEventListener('click', () => {
    activeType = button.dataset.typeFilter;
    typeButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    render();
  }));
  yearSelect?.addEventListener('change', render);
  render();
})();
