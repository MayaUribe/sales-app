import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { FaChevronLeft } from 'react-icons/fa';
import _ from 'lodash';

import '../../App.css';
import '../../index.css';

import SubHeader from '../../components/subHeader';
import { PRODUCTS } from '../../data/products';
import {NavLink} from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    };
  }

  fetchProduct() {
    const { id } = this.props.match.params;
    let product = _.find(PRODUCTS, function(p) {
      return p.id.toString() === id;
    });

    this.setState({ product });
  }

  componentDidMount() {
    this.fetchProduct();
  }

  renderGallery() {
    const { product } = this.state;

    if (!product) {
      return;
    }

    return (
      <div className="gallery-container">
        <ImageGallery
          items={product.images.map(image => ({
              original: image.image,
              thumbnail: image.thumb || image.image
            })
          )}
          lazyLoad
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    );
  }

  _renderHeader() {
    const { name } = this.state.product || "";

    return (
      <section className="bg-project" id="project">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right back-button">
            <NavLink to='/'>
              <FaChevronLeft />
            </NavLink>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 product-header">
            <h2>{name}</h2>
          </div>
        </div>
      </section>
    );
  }

  render() {
    const { product } = this.state;
    let titleClasses = product ? (product.sold ? 'sold-title' : '') : '';

    if (!product) {
      return null;
    }

    return (
      <div>
        <SubHeader title={product.name || ""} />
        <section className="product-body" id="detail">
          {this.renderGallery()}
          <div className="container body">
            <div className="portfolio-caption">
              <h4 className={titleClasses}>
                {product.sold ?
                  "[VENDIDO] " : null
                }
                {product.name}
              </h4>
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
                <strong>Descripción:</strong> {product.description}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
