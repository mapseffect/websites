export default function TeslaCertificationSection() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="flex-shrink-0">
            <img
              src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/ba079863-ae0a-4264-eb2b-c58fafc02c00/public"
              alt="Tesla EV Charger Installation"
              className="w-[410px] h-auto rounded-lg"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certified Tesla Installers</h2>
            <p className="text-gray-400 text-lg mb-6">Official Tesla expertise — installed the right way</p>

            <div className="flex justify-center md:justify-start">
              <img
                src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/1946a2b2-a6fa-4e79-b11d-99eedaed5100/public"
                alt="Tesla Certified Installer Badge"
                className="h-[154px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
