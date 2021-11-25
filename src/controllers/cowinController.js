const axios = require("axios");

// res.status(200). send( { data: userDetails } )

const getStatesList = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    const cowinStates = await axios(options);

    console.log("WORKING");
    let states = cowinStates.data;
    res.status(200).send({ msg: "Successfully fetched data", data: states });

  } 
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};


const getDistrictsList = async function (req, res){

    try{ 
        let id= req.params.stateId
        console.log(" state: ", id)

        let options = {
            method: "get",
            url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}` //plz take 5 mins to revise template literals here
        }
        let response= await axios(options)

        let districts= response.data
        
        console.log(response.data)
        res.status(200).send( {msg: "Success", data: districts} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}

module.exports.getStatesList = getStatesList;
module.exports.getDistrictsList = getDistrictsList;