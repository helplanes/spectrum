
export const images: string[] = ['https://res.cloudinary.com/dfyrk32ua/image/upload/v1705914838/Spectrum/posters/debate_l4h0mj.webp', 'https://res.cloudinary.com/dfyrk32ua/image/upload/v1705914840/Spectrum/posters/brain_q8whib.webp', 'https://res.cloudinary.com/dfyrk32ua/image/upload/v1705914839/Spectrum/posters/eparadox_nlafi1.webp', 'https://res.cloudinary.com/dfyrk32ua/image/upload/v1705914866/Spectrum/posters/electrica_zqkvyr.webp', 'https://res.cloudinary.com/dfyrk32ua/image/upload/v1705914841/Spectrum/posters/chemparadox_d6hzur.webp', 'https://res.cloudinary.com/dfyrk32ua/image/upload/v1705914840/Spectrum/posters/treasurehunt_x5ol3x.webp']

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
