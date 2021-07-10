function myfunction(id, count) {
    document.getElementById(id).style.display = "none";
    switch (count) {
        case 0:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>-Patna, Bihar .</span>";
            break;
        case 1:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>-Studying at Ramgarh engineering college.</span>";
            break;
        case 2:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>-Mathematics. </span>";
            break;
        case 3:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>-Her Father. </span>";
            break;
        case 4:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>-She would like not to expose her weakness!</span>";
            break;
        case 5:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>Company	: Nethuts Solutions Pvt., Kolkata</span><br><span>Department  : Web Development</span><br><span>Duration	: 3 months</span>";
            break;
        case 6:
            document.getElementsByClassName('details')[count].innerHTML = "<br><span>['Reading books', 'Badminton', 'Gardening', 'Art & Craft']<span>";
            break;
        default:
            break;
    }

}















