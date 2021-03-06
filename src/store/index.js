import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from '../firebase';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from './reducer/index';


// react-redux-firebase config
const rrfConfig = {
   userProfile: 'users',
   useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// connect with redux dewool
const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
   rootReducer,
   composeEnhancers(
      reactReduxFirebase(firebase, rrfConfig),
      reduxFirestore(firebase),
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))
   )
)

export default store;