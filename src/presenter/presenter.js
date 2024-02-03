import {render, RenderPosition} from '../render.js';
import HeaderInfoView from '../view/header-info-view.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointListView from '../view/point-list-view.js';
import PointItemView from '../view/point-item-view.js';

const MAX_POINTS_COUNT = 3;

export default class Presenter {
  sortComponent = new SortView();
  pointListComponent = new PointListView();

  constructor({tripEventsContainer, headerInfoContainer, filtersContainer}) {
    this.tripEventsContainer = tripEventsContainer;
    this.headerInfoContainer = headerInfoContainer;
    this.filtersContainer = filtersContainer;
  }

  init() {
    render(new HeaderInfoView(), this.headerInfoContainer, RenderPosition.AFTERBEGIN);
    render(new FilterView(), this.filtersContainer);
    render(this.sortComponent, this.tripEventsContainer);
    render(this.pointListComponent, this.tripEventsContainer);
    render(new EditPointView(), this.pointListComponent.getElement());

    for (let i = 0; i < MAX_POINTS_COUNT; i++) {
      render(new PointItemView(), this.pointListComponent.getElement());
    }

    render(new AddNewPointView(), this.pointListComponent.getElement());
  }
}
