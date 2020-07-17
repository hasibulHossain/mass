export const signup = data => {
   return async (dispatch, getState, {getFirebase, getFirestore}) => {
      const fireBase = getFirebase();
      const fireStore = getFirestore();

      try {
         const res = await fireBase.auth().createUserWithEmailAndPassword(data.email, data.password);
         console.log(res.user.uid)
         await fireStore.collection("users").doc(res.user.uid).set({
            firstName: data.firstName,
            lastName: data.lastName
         }).then(() => {
            console.log("document successfully written.")
         })
      } catch (error) {
         console.log('from error' + error)
      }
   }
}

export const login = data => {
   return async (dispatch, getState, {getFirebase, getFirestore}) => {
      const fireBase = getFirebase();

      try {
         console.log(data)
         const response = await fireBase.auth().signInWithEmailAndPassword(data.email, data.password);
         console.log(response)
      } catch (error) {
         console.log('an error has been occurred!!!', error)
      }
   }
}