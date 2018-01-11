var mongoose    = require("mongoose"),
Campground      = require("./models/campground"),
Comment         = require("./models/comment")

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.theoutbound.com/uploads/1437140402255/wumsmrfw78e/ca76c0961beec40ee34c0e8b7997e543?w=900&h=600&fit=crop",
        description: "Curabitur sollicitudin orci tortor, id mattis metus varius vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus condimentum est at venenatis ornare. Donec pulvinar urna sed neque rhoncus, non aliquet purus semper. Cras ipsum quam, efficitur quis est a, tincidunt pellentesque tortor. Donec tempus nulla mi, sed dignissim purus rutrum semper. Fusce quis augue sit amet ex feugiat sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque elit ex, molestie eget felis quis, laoreet volutpat nisi. In hac habitasse platea dictumst. Sed feugiat id tellus quis porta. Nam id purus convallis, tempor lacus vel, fermentum massa. Nulla lacinia justo ex, non rutrum nulla efficitur eget. Maecenas ultrices urna ut nulla euismod, at placerat enim faucibus. Duis neque dui, sodales eget vulputate vel, rhoncus sit amet arcu. "
    },
    {
        name: "River Mecca", 
        image: "https://adultswithallergies.files.wordpress.com/2017/08/istock-628138888.jpg?w=640",
        description: "Curabitur sollicitudin orci tortor, id mattis metus varius vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus condimentum est at venenatis ornare. Donec pulvinar urna sed neque rhoncus, non aliquet purus semper. Cras ipsum quam, efficitur quis est a, tincidunt pellentesque tortor. Donec tempus nulla mi, sed dignissim purus rutrum semper. Fusce quis augue sit amet ex feugiat sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque elit ex, molestie eget felis quis, laoreet volutpat nisi. In hac habitasse platea dictumst. Sed feugiat id tellus quis porta. Nam id purus convallis, tempor lacus vel, fermentum massa. Nulla lacinia justo ex, non rutrum nulla efficitur eget. Maecenas ultrices urna ut nulla euismod, at placerat enim faucibus. Duis neque dui, sodales eget vulputate vel, rhoncus sit amet arcu. "
    },
    {
        name: "Quiet Ridge", 
        image: "http://www.textbooktravel.com/wp-content/uploads/2015/10/Web-Outdoor-Camping.jpg",
        description: "Curabitur sollicitudin orci tortor, id mattis metus varius vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus condimentum est at venenatis ornare. Donec pulvinar urna sed neque rhoncus, non aliquet purus semper. Cras ipsum quam, efficitur quis est a, tincidunt pellentesque tortor. Donec tempus nulla mi, sed dignissim purus rutrum semper. Fusce quis augue sit amet ex feugiat sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque elit ex, molestie eget felis quis, laoreet volutpat nisi. In hac habitasse platea dictumst. Sed feugiat id tellus quis porta. Nam id purus convallis, tempor lacus vel, fermentum massa. Nulla lacinia justo ex, non rutrum nulla efficitur eget. Maecenas ultrices urna ut nulla euismod, at placerat enim faucibus. Duis neque dui, sodales eget vulputate vel, rhoncus sit amet arcu. "
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
        // Add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("Added a Campground");
                // Add a few comments
                Comment.create({
                    text: "This place is great, but I wish it were smaller",
                    author: "Homer"
                }, function(err, comment){
                    if(err){
                        console.log(err);
                    } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment")
                    }
                });
            }
        });
    });
});
}

module.exports = seedDB;