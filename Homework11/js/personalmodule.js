module.exports = function(osuser) {
    const ostime  = new Date();

        let hour = ostime.getHours();
        if(hour >= 23 && hour < 6) {
            return "Good night, " + osuser;
        } else if (hour>=11 && hour <18){
            return "Good afternoon, "+ osuser;
        } else if (hour>=5 && hour <12){
            return "Good morning, " + osuser;
        }
        return "Good evening, " + osuser;
}

