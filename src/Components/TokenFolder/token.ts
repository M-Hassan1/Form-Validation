import jwt from 'jsonwebtoken';

const secret = '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'; // Replace with your own secret key

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, secret, { expiresIn: '1h' }); // Set the expiration time as desired
};

export const verifyToken = (token: string): object | null => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded as object;
  } catch (error) {
    console.error('Invalid token:');
    return null;
  }
};
