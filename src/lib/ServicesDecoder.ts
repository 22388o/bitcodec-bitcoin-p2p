import { Services, SERVICE_BITS } from "../models/Services";

export const ServicesDecode = (buffer: Buffer): Services => {
  const services: Services = [];

  SERVICE_BITS.forEach((serviceBit) => {
    const byteIndex = Math.floor(serviceBit.bit / 8);
    const bitIndex = serviceBit.bit % 8;
    const byte = buffer.readUInt32LE(byteIndex);

    if (byte & (1 << bitIndex)) services.push(serviceBit.name);
  });

  return services;
};
