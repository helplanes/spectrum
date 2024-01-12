import Image from "next/image";

const shippinganddelivery: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="max-w-md p-8 bg-black rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Shipping and Delivery Information</h2>
            <p className="text-gray-600 mb-6">
                We won&apos;t be shipping anything for this event, this page is just part of the complianace!
            </p>
            <p className="text-gray-600 mb-6">
            Instead have this vadapav, fresh from the canteen (not really)
            </p>
            <Image className="mx-auto pt-4" width="250" height="300" alt="image" src="https://i.imgur.com/qFeRgsS.png" />
        </div>
      </div>
    );
  };
  
  export default shippinganddelivery;
  