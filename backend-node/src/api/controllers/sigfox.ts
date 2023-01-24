import { decodeBecoXWater } from "../../utils/bove";

export const logSigfoxData = (req: any, res: any) => {

    const { device, data } = req.body;

    decodeBecoXWater(data, device)

    return res.json({ message: "Song Record Created Successfully" });
}