import { services, testimonials, pricingFeatures } from "./data/mock";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">

      {/* HERO */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold">🚀 RB Web Service</h1>
        <p className="mt-3">Har type ki shop ke liye website banwaye</p>
        <a href="https://wa.me/917082575384" className="mt-5 inline-block bg-green-500 px-6 py-2 rounded-full">
          Order Now
        </a>
      </section>

      {/* SERVICES */}
      <section className="py-10 px-5 text-center">
        <h2 className="text-3xl mb-6">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((item) => (
            <div key={item.id} className="bg-white/10 p-5 rounded-xl">
              <h3 className="text-xl">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="text-center py-10">
        <h2 className="text-3xl mb-6">Pricing</h2>

        <div className="flex flex-wrap justify-center gap-5">
          <div className="bg-black p-6 rounded-xl">
            <h3 className="text-xl">Basic</h3>
            <p className="text-2xl mt-2">₹2999</p>
          </div>

          <div className="bg-black p-6 rounded-xl border border-green-400">
            <h3 className="text-xl">Premium</h3>
            <p className="text-2xl mt-2">₹3999</p>
          </div>
        </div>

        <ul className="mt-5 text-sm">
          {pricingFeatures.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-10 px-5 text-center">
        <h2 className="text-3xl mb-6">Customer Reviews</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white/10 p-5 rounded-xl">
              <img src={item.image} className="w-16 h-16 rounded-full mx-auto" />
              <h3 className="mt-3 font-bold">{item.name}</h3>
              <p className="text-sm">{item.business}</p>
              <p className="text-xs mt-2">{item.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-10">
        <h2 className="text-3xl">Contact</h2>
        <p className="mt-3">📞 7082575384</p>

        <a href="https://wa.me/917082575384" className="mt-5 inline-block bg-green-500 px-6 py-2 rounded-full">
          WhatsApp Now
        </a>
      </section>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/917082575384"
        className="fixed bottom-5 right-5 bg-green-500 px-4 py-3 rounded-full">
        💬
      </a>

    </div>
  );
}
