
export const images: string[] = ['https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freactathon.30f4081b.jpg&w=828&q=75', 'https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freactathon.30f4081b.jpg&w=828&q=75', 'https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freactathon.30f4081b.jpg&w=828&q=75', 'https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freactathon.30f4081b.jpg&w=828&q=75']

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
