//const { data } = require('autoprefixer');
let axios = require('axios');

module.exports = function() {

  async function getThisSeries(doctorID) {
      let thisDoctor = doctorID;
      console.log("this doctor: "  + thisDoctor);
      let SERIES_API_URL = 'https://api.catalogopolis.xyz/v1/doctors/' + thisDoctor + '/serials';
      console.log(SERIES_API_URL);
      let seriesfn = await axios.get(SERIES_API_URL, {
          headers : { },
        })
        .then((response) => {
          var series_data = response.data;
          //console.log(series_data.length);
          console.log(series_data);
          return series_data;
        }, (error) => {
          console.log(error);
        });
    }

    let BASE_API_URL = 'https://api.catalogopolis.xyz/v1'
    let API_URL = BASE_API_URL + '/doctors';

    async function getDoctors() {

      return axios.get(API_URL, {
        headers : { },
      })
      .then((response) => {
        var data = response.data;
        //console.log(data.length);
        //console.log(data);

        
        //TODO: Figure out how to take each doctor and do a separate API call to get the list of episodes (series as they call them in the UK) but I need to work out the nested promises
/*
        Array.from(data).forEach(element => {
          console.log(element.primaryActorID);
          const seriesPromise = getThisSeries(element.primaryActorID);

          seriesPromise.then((value) => {
            console.log("Series: " + value);
            element.series = value;
          }).catch((error) => {
            console.log(error);
          });
        });
        
*/
        //console.log(data);
        return data;
      }, (error) => {
        console.log(error);
      });
    }

    return getDoctors();
}
//maybe use https://api.catalogopolis.xyz/v1/doctors/[[primaryActorID]]/serials to get all the shows that doctor was in.