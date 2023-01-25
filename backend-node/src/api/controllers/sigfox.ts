import { handleWaterMeterdata } from "../services/water-meter.service";

export const logSigfoxData = (req: any, res: any) => {

    const { device, data } = req.body;

    handleWaterMeterdata(data, device)

    return res.json({ message: "Song Record Created Successfully" });
}