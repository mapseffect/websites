import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | ABR Electric",
  description: "ABR Electric privacy policy outlining how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">ABR Electric Privacy Policy</h1>

          <div className="prose prose-lg prose-invert max-w-none text-gray-300">
            <p className="text-lg mb-8">
              Welcome to ABR Electric! We are committed to protecting your privacy and ensuring that your personal
              information is handled securely and responsibly. This privacy policy outlines how we collect, use, and
              protect your information when you engage with our services, including SMS messaging and email
              communications.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Types of Information Collected</h2>
            <p className="mb-4">We collect the following types of personal information from our customers:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Service preferences and history</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Method of Information Collection</h2>
            <p className="mb-4">We collect customer data through various methods, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Online forms on our website</li>
              <li>Service sign-ups and subscriptions</li>
              <li>Direct communication via phone or email</li>
              <li>SMS opt-in through our designated channels</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Purpose of Data Collection</h2>
            <p className="mb-4">We collect and use customer information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>To provide and improve our services</li>
              <li>To communicate with customers regarding service updates, appointments, and relevant information</li>
              <li>To send promotional offers and updates (only if you have opted in)</li>
              <li>To personalize your experience with ABR Electric</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Security Measures</h2>
            <p className="mb-4">
              We take your data security seriously and implement the following measures to protect your information:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Secure servers and encryption technologies</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authorization procedures</li>
              <li>Employee training on data protection practices</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Sharing</h2>
            <p className="mb-6">We do not share your personal information with third parties or business partners.</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">User Rights</h2>
            <p className="mb-4">As a customer, you have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Access:</strong> You can request a copy of the personal data we hold about you.
              </li>
              <li>
                <strong>Update:</strong> You can ask us to correct or update your personal information.
              </li>
              <li>
                <strong>Deletion:</strong> You can request the deletion of your personal data, subject to certain legal
                restrictions.
              </li>
              <li>
                <strong>Opt-out:</strong> You can opt out of receiving SMS messages or emails at any time by following
                the instructions provided in the messages or contacting us directly.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions or concerns regarding your privacy or this policy, please contact us at:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <p>
                <strong>Address:</strong> 1971 Univ Business Dr #106, McKinney, TX 75071
              </p>
              <p>
                <strong>Email:</strong> support@abrelectric.com
              </p>
              <p>
                <strong>Phone:</strong> 214-690-1941
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">SMS Messaging Policy</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Opting In and Out:</strong> Users may opt in to receive SMS messages by subscribing through our
                website or other authorized channels. To opt out, users can reply with "STOP" to any message.
              </li>
              <li>
                <strong>Message Content:</strong> We send SMS messages solely for purposes related to our services and
                communications initiated by users.
              </li>
              <li>
                <strong>Privacy:</strong> We respect your privacy and only send messages to individuals who have opted
                in.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Email Communication Policy</h2>
            <p className="mb-6">
              Subscribe via our website or authorized channels. Unsubscribe anytime using the "unsubscribe" link or
              contacting us directly.
            </p>

            <div className="bg-green-900/20 border border-green-500 p-6 rounded-lg mt-8">
              <p className="text-green-400 font-semibold">
                By using our services and providing your personal information, you consent to the terms outlined in this
                privacy policy.
              </p>
              <p className="text-green-400 mt-2">Thank you for choosing ABR Electric!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
