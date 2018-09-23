import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import '../../App.css';
import '../../index.css';
import './home.css';

import { PRODUCTS } from '../../data/products';
import SubHeader from "../../components/subHeader";

class Home extends Component {
  _truncateText(string, length) {
    if (string.length > length)
      return string.substring(0, length) + '...';
    else
      return string;
  };

  _renderProductRow(product, i) {
    let productLink = '/product/' + product.id;
    let description = this._truncateText(product.description, 150);
    let titleClasses = product.sold ? 'sold-title' : '';

    return(
      <div key={i} className="col-md-4 col-sm-6 portfolio-item">
        <NavLink className="portfolio-link" to={productLink}>
          <div className="sold-container">
            <img className="portfolio-link-img" src={product.thumbnail} />
            {product.sold ?
              <div className="sold">VENDIDO</div>
            : null}
          </div>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <FaPlus className="fa-3x" />
            </div>
          </div>
        </NavLink>
        <div className="portfolio-caption">
          <NavLink to={productLink}>
            <h4 className={titleClasses}>{product.name}</h4>
          </NavLink>
          <div>
            <strong>Precio de venta:</strong> ${product.price}
          </div>
          <div>
            <strong>Precio de refencia nuevo:</strong> ${product.referencePrice}
          </div>
          <div>
            <strong>Referencia:</strong> <a href={product.reference} target="_blank">{product.reference}</a>
          </div>
          <div>
            <strong>Descripción:</strong>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }

  _sortById() {
    PRODUCTS.sort(function(a, b) {
      return b.id - a.id;
    });
  }

  _renderProducts() {
    let productsRow = [];
    let self = this;
    this._sortById();

    PRODUCTS.forEach((product, i) => {
      productsRow.push(self._renderProductRow(product, i));
    });

    return (
      productsRow
    );
  }

  render() {
    return (
      <div>
        <SubHeader title="Inicio" isHome />
        <div id="products" className="products container">
          <div className="row">
            {this._renderProducts()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
