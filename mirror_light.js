Shelly.addStatusHandler(    
    function (event, ud) {
      print(JSON.stringify(event.delta))
      if(event.delta.source && event.delta.source === "ui") {
        //print("Switch on: ",JSON.stringify(event.delta.output), " Brightness: ", JSON.stringify(event.delta.brightness));
        let url = 'http://192.168.4.75/rpc/Light.Set?id=0&on=' + JSON.stringify(event.delta.output) + '&brightness=' + JSON.stringify(event.delta.brightness);
        //print("URL: ", url);
        
        Shelly.call("HTTP.GET",
          { url: url },
          function (res, error_code, error_msg, ud) {
              //print('Response: ', JSON.stringify(res));
              if (res.code === 200) {
                  print("Sent");
              };
          },
        null); // Shelly.call
      }
    },
    null // Shelly.addStatusHandler
);
