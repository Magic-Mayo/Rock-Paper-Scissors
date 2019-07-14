let onlineUsers = [];

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
        const uID = user.uid;
        // console.log();
        if(snapshot.val().userList[uID].isOnline === true){
        onlineUsers.push(snapshot.val().userList[uID].name)}
        console.log(onlineUsers)
		const userButton = $('<div>').text(user.displayName).attr('id', uID);
        $('.online-users').append(userButton);
        
		if ($(userButton).attr('id') === uID){
            console.log('button');
            $('#'+uID).css('display', 'none');
        }
        
        else if ($(userButton).attr('id') != uID) {
            
        }
        if (user) {
            // User logged in already or has just logged in.  Change user state to online via .ref(uid).set()
            // if ()  
            if (!snapshot.child('userList').child(uID).exists()){
                database.ref('userList').child(uID).set({
                    user: uID,
                    name: user.displayName,
					email: user.email,
					isOnline: true,
                    dateAdded: firebase.database.ServerValue.TIMESTAMP})
            }
                if (snapshot.val().userList[uID].user == uID){
                    database.ref('userList').child(uID).update({
                        isOnline: true
                    })
                    console.log('online')
                // userButton.data({user: uID, online: true}).text(snapshot.child(uID).child('name'))
                // console.log(snapshot.child(uID))
                    }
                
            }
		else {
			// User not logged in or has just logged out.  Change user state to offline via .ref(uid).set()
			database.ref('userList').child(uID).update({
				isOnline: false
				})
        }
    });
});

// $('.signOut').click(function(e){
// 	e.preventDefault();
// 	firebase.auth().onAuthStateChanged((user) => {
// 		user.signout();
// 		console.log('sign out');
// 	})
// })

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

// push online users to an array to loop thru at database.on to append online users to page.  will also use if inside loop to filter out the user's own name