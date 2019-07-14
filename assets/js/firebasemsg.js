database.ref('userList/').on('value', function(snapshot){
    firebase.auth().onAuthStateChanged((user) => {
        console.log(snapshot.val())
        if (snapshot.val()[user.uid].isOnline === true){
            database.ref('onlineUsers/').set(
                snapshot.val()[user.uid].name
            )
        }
    })
})
