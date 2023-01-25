import { Point } from "@influxdata/influxdb-client";
import { influxContext } from "../../configs/influx-db-conntect";
import { WaterMeterDecoded } from "../../moidels/water-meter";
import { decodeBecoXWater } from "../../utils/bove";




const saveInfluxWaterData = (data: WaterMeterDecoded) => {

  let newDataPoint = new Point(data.device)
    .floatField("totalAmount", data.total)
    .stringField("payload", data.payload)
    .tag("device", data.device)

  console.log(newDataPoint)

  Object.entries(data.alarms).forEach(([key, value]) => {
    newDataPoint.booleanField(key, value)
  })

  console.log(newDataPoint)

  influxContext().writeApi.writePoint(newDataPoint)
};


export const handleWaterMeterdata = (data: string, device: string) => {

  const decoded: WaterMeterDecoded = decodeBecoXWater(data, device)
  console.log(decoded)
  saveInfluxWaterData(decoded)

}

