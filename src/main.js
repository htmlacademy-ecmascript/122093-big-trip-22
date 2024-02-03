import Presenter from './presenter/presenter.js';

const tripMainElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');
const filtersElement = document.querySelector('.trip-controls__filters');
const presenter = new Presenter({tripEventsContainer: tripEventsElement, headerInfoContainer: tripMainElement, filtersContainer: filtersElement});

presenter.init();
