(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');
    // Here's my first answer:
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // Here's my second answer:
    planetsString = planetsArray.join('<br>');
    console.log(planetsArray);

    //
    planetsArray = "<ul><li>" + planetsArray + ;
    // planetsArray.join('<li>');
    // console.log(planetsArray);

    // document.write(breakPlanets);

})();




