import PaymentLog from "./paymentLog.model";
import { IPaymentLog } from "../../interfaces/paymentLog.interface";
import {Types} from 'mongoose';

const getAllPaymentLogs = async () => {
    const pmtlogs = await PaymentLog.find();
    return pmtlogs;
};

const getPaymentLogsByOrderId = async (id: string | Types.ObjectId) => {
    const pmtlogs = await PaymentLog.find({orderId: id});
    return pmtlogs;
}

const createPaymentLog = async (pmtLogObject: Partial<IPaymentLog>) => {
    const pmtlog = await PaymentLog.create({...pmtLogObject});
    return pmtlog;
}

const updatePaymentLogById = async (
    id: string | Types.ObjectId,
    pmtLogObject: Partial<IPaymentLog>,
  ) => {
    const pmtlog = await PaymentLog.findByIdAndUpdate(
      id,
      {
        $set: {
          ...pmtLogObject,
        }
      },
      { new: true },
    );
    return pmtlog;
};

export {
    getAllPaymentLogs,
    getPaymentLogsByOrderId,
    createPaymentLog,
    updatePaymentLogById
}