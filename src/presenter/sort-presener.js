import { render, replace, remove } from '../framework/render.js';
import {EnabledSortType, SortType} from '../constants.js';
import ListSortView from '../view/list-sort-view.js';

export default class SortPresenter {
  #container = null;
  #sortTypes = [];
  #currentSortType = SortType.DAY;
  #sortComponent = null;
  #sortTypesChangeHandler = null;

  constructor({ container, sortTypeHandler, currentSortType}) {
    this.#container = container;
    this.#currentSortType = currentSortType || SortType.DAY;
    this.#sortTypes = Object.values(SortType).map((type) => ({
      type,
      isChecked: type === this.#currentSortType,
      isDisabled: !EnabledSortType[type],
    }));
    this.#sortTypesChangeHandler = sortTypeHandler;
  }

  init() {
    const prevSortComponent = this.#sortComponent;

    this.#sortComponent = new ListSortView({
      items: this.#sortTypes,
      onItemChange: this.#sortTypesChangeHandler,
    });

    if (prevSortComponent) {
      replace(this.#sortComponent, prevSortComponent);
      remove(prevSortComponent);
    } else {
      render(this.#sortComponent, this.#container);
    }
  }

  destroy() {
    remove(this.#sortComponent);
  }
}
