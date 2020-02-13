(function () {
    "use strict";
    document.body.onload = makeArrayList;
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split("|");
    console.log(planetsArray);


    planetsString = planetsArray.join("<br>");
    console.log(planetsString);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    function makeArrayList(array) {
        //Create UL
        var list = document.createElement("ul");

        //Iterate through array
        for (var i = 0; i < array.length; i++) {
            //Create LI
            var listItem = document.createElement('li');
            //Add element to LI
            listItem.appendChild(document.createTextNode(array[i]));
            //Add LI to UL
            list.appendChild(listItem);
        }
        //Return array as UL
        var theRightDiv = document.getElementById("beforeThis");

        document.body.insertBefore(list, theRightDiv);

    }

    makeArrayList(planetsArray);

})();
