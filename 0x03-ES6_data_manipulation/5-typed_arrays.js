export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);

  // check if position outside range
  if (position >= length) throw new Error('Position outside range');
  // set new value in its desired position
  dv.setInt8(position, value);

  return dv;
}
