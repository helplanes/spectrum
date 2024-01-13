
export const images: string[] = ['https://i.imgur.com/0uU40Ak_d.webp?maxwidth=760&fidelity=grand', 'https://i.imgur.com/dmGEOn5_d.webp?maxwidth=760&fidelity=grand', 'https://i.imgur.com/FVfeMNp_d.webp?maxwidth=760&fidelity=grand', 'https://i.imgur.com/zACkQk8_d.webp?maxwidth=760&fidelity=grand', 'https://i.imgur.com/GpMClGl_d.webp?maxwidth=760&fidelity=grand', 'https://i.imgur.com/0fXN0zl_d.webp?maxwidth=760&fidelity=grand']

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
