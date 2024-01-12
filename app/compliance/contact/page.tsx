import Image from "next/image";

const shippinganddelivery: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="max-w-md p-8 bg-black rounded shadow-md">
            <Image className="mx-auto pb-8" width="200" height="200" alt="image" src="https://i.imgur.com/sWnazc1.png" />
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-600 mb-6">
                spectrum@pccoepune.org
            </p>
            <p className="text-gray-600 mb-6">
               Timings - 9:00 AM to 5:00 PM IST, Monday to Friday
            </p>
        </div>
      </div>
    );
  };
  
  export default shippinganddelivery;
  