
const firebaseConfig = {
    apiKey: "AIzaSyBr2YPQyeL0INt0EIYRDmqvsf0MNP1U8P0",
    authDomain: "rock-paper-scissors-a9a8f.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-a9a8f.firebaseio.com",
    projectId: "rock-paper-scissors-a9a8f",
    storageBucket: "",
    messagingSenderId: "267978544107",
    appId: "1:267978544107:web:6d8088efd8b9ba61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref().on("value", function(snapshot) {
    // console.log(snapshot.val())
    firebase.auth().onAuthStateChanged((user) => {
        // console.log(user.uid)
        const uID = user.uid
        if (user) {
            // User logged in already or has just logged in.  Change user state to online via .ref(uid).set()
            // console.log(user.uid);
            if (!user.uid){
                console.log(snapshot.val())
                const userButton = $('<div>');
                $('.online-users').append(
                    userButton.data('user', user.uid).text(snapshot.child(user.uid).child('name'))
                )
                console.log(snapshot.child(user.uid))
                }
            // if ()  
            if (!snapshot.child('userList').child(user.uid).exists()){
                database.ref('userList').child(user.uid).set({
                    user: user.uid,
                    name: user.displayName,
                    email: user.email,
                    dateAdded: firebase.database.ServerValue.TIMESTAMP})
            }} else {
        // User not logged in or has just logged out.  Change user state to offline via .ref(uid).set()
        }
        
        // console.log(firebase.database.ServerValue.TIMESTAMP)

    });
})

$('.chat-btn').on('click', function(e){
    e.preventDefault();

})

/* userMessages {
    Sean-Mike(timestamp for id): {
        messages: [
            0: {
                timeStamp:
                content: <button> or <p>
            }
        ]
    }
} */