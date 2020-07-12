import * as actionTypes from '../actionTypes';
import { data } from '../../../data/data';

export const productsInit = () => {
   return {
      type: actionTypes.PRODUCTS_INIT,
      products: data
   }
}