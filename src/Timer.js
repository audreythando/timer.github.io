import React, {useState, useEffect} from 'react'
import moment from 'moment';

function AuctionLink() {
   let time1 = moment("09:00:00", "hh:mm:ss");
let time2 = moment("00:03:15", "hh:mm:ss");
let subtract = time1.subtract(time2);
let format = moment(subtract).format("hh:mm:ss")
console.log(format); //08:56:45
 const [time, setTime ] = useState(format);
   useEffect(() => {
    setTimeout(() =>{
      setTime(time-1000);
    }, 1000);
   },[time]);
    const getCountDown = (format) => {
      let totalSeconds = parseInt(Math.floor(format/1000));
      let totalMinutes = parseInt(Math.floor(format/60));
      let totalHours = parseInt(Math.floor(format/60));
      let seconds = parseInt(totalSeconds % 60);
      let minutes = parseInt(totalMinutes % 60);
      let hours = parseInt(totalHours % 24);
      return (
        `${hours} : ${minutes} : ${seconds}`
      )
    }
    console.log('Hey countdown',getCountDown)

    
    return(
     <div>
      {getCountDown(time)}
    </div>
  )
}
export default AuctionLink