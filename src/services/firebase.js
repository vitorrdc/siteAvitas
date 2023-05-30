import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyDmQDo0X530yMfvZ8BfpYJamQ1t0GjiTDU',
    authDomain: 'avitas-19f2a.firebaseapp.com',
    projectId: 'avitas-19f2a',
    storageBucket: 'avitas-19f2a.appspot.com',
    messagingSenderId: '495377898370',
    appId: '1:495377898370:web:10244dcf1923122e4a4d9b',
    measurementId: 'G-K58VBNYLN4'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { firebase, auth }
