database.ref().on('value', function(snapshot){
    console.log(snapshot.val())
})
