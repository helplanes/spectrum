import Image from "next/image";

const TermsandConditions: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-md p-8 bg-black rounded shadow-md">
        <Image className="mx-auto pb-8" width="200" height="200" alt="image" src="https://i.imgur.com/EfDRB29.jpg" />
            <h1 className="text-2xl font-bold mb-6">Terms and Conditions</h1>
  
            <p className="mb-4">
            <strong>Contact Information:</strong> For inquiries, contact us at{' '}
            <a href="mailto:info@spectrumpccoe.com">spectrum@pccoepune.org</a>
            </p>

            <p className="mb-4">
            <strong>Effective Date:</strong> These terms are effective as of{' '}
            <span className="underline">January 1, 2024</span>.
            </p>

            <p className="mb-4">
            <strong>Limitation of Liability:</strong> Spectrum PCCOE and [Your College/Organization Name] shall not be held liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your participation in the event.
            </p>

            <p className="mb-4">
            <strong>Rules of Conduct:</strong> Participants are expected to conduct themselves in a respectful and sportsmanlike manner throughout Spectrum PCCOE. Any form of discrimination, harassment, or inappropriate behavior will not be tolerated. Participants must adhere to the rules and guidelines of each specific event within the fest.
            </p>

            <p className="text-sm text-gray-500">
            By participating, you agree to abide by these terms and conditions.
            </p>
        </div>
      </div>
    );
  };
  
  export default TermsandConditions;
  