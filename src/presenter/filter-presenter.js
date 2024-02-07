import { UpdateType } from '../constants.js';
import { render, replace, remove } from '../framework/render.js';
import { filter } from '../utils/filter.js';
import ListFilterView from '../view/list-filter-view.js';

export default class FilterPresenter {
  #eventPointsModel = [];
  #filtersModel = null;
  #headerContainer = null;
  #filters = [];
  #filterComponent = null;

  constructor({ headerContainer, eventPointsModel, filtersModel}) {
    this.#eventPointsModel = eventPointsModel;
    this.#headerContainer = headerContainer;
    this.#filtersModel = filtersModel;
    this.#eventPointsModel.addObserver(this.#modeChangeHandler);
    this.#filtersModel.addObserver(this.#modeChangeHandler);

    this.#filters = Object.entries(filter).map(
      ([filterType, filterPoints]) => ({
        type: filterType,
        isDisabled: !filterPoints(this.#eventPointsModel.get()).length
      })
    );
  }

  init() {
    const prevFilterComponent = this.#filterComponent;
    const items = this.#filters.map((filterItem) => {
      const isChecked = this.#filtersModel.get() === filterItem.type;

      const getFilteredPoints = filter[filterItem.type];
      const filteredPoints = getFilteredPoints(this.#eventPointsModel.get());
      const isDisabled = !filteredPoints.length;

      return {
        ...filterItem,
        isChecked,
        isDisabled,
      };
    });

    this.#filterComponent = new ListFilterView({
      items,
      onItemChange: this.#filterTypeChangeHandler,
    });

    if (prevFilterComponent) {
      replace(this.#filterComponent, prevFilterComponent);
      remove(prevFilterComponent);
    } else {
      render(this.#filterComponent, this.#headerContainer);
    }
  }

  #filterTypeChangeHandler = (filterType) => {
    this.#filtersModel.set(UpdateType.MAJOR, filterType);
  };

  #modeChangeHandler = () => {
    this.init();
  };
}
