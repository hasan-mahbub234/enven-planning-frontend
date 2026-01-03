"use client";

interface BrandItem {
  name: string;
  image: string;
}

const brands: BrandItem[] = [
  { name: "VICTORINOX", image: "/images/event/w18.jpg" },
  { name: "Skitbit", image: "/images/event/w1.jfif" },
  { name: "VK", image: "/images/event/w15.jpg" },
  { name: "TechCrunch", image: "/images/event/w2.jfif" },
  { name: "MailChimp", image: "/images/event/w17.jpg" },
  { name: "ESJ", image: "/images/event/w3.jfif" },
  { name: "Kickstarter", image: "/images/event/w4.jfif" },
  { name: "Microsoft", image: "/images/event/w16.jpg" },
  { name: "Google", image: "/images/event/w7.jfif" },
  { name: "Apple", image: "/images/event/w18.jpg" },
];

export default function TwoColumnStickySection() {
  return (
    <section className="">
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid grid-cols-12 gap-10 min-h-screen">
        {/* LEFT – STICKY */}
        <div className="col-span-4">
          <div className="sticky top-0 h-screen flex items-center">
            <div className="px-10 max-w-md">
              <div className="w-12 h-px bg-gray-300 mb-8" />

              <h2 className="text-5xl font-light leading-tight mb-6">
                Featured Brands
              </h2>

              <p className="text-gray-600 mb-8">
                Discover our curated collection of premium brands that define
                modern luxury. Each partnership represents our commitment to
                excellence.
              </p>

              <ul className="space-y-3 mb-10 text-gray-700">
                <li>• Exclusive collaborations</li>
                <li>• Premium craftsmanship</li>
                <li>• Sustainable practices</li>
              </ul>

              <button className="inline-flex items-center gap-2 border border-gray-900 px-6 py-3 text-sm hover:bg-gray-900 hover:text-white transition">
                Explore All Brands →
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT – HOVER EXPAND CONTENT */}
        <div className="col-span-8 py-20 space-y-6">
          {Array.from({ length: Math.ceil(brands.length / 2) }).map(
            (_, rowIndex) => {
              const left = brands[rowIndex * 2];
              const right = brands[rowIndex * 2 + 1];

              return (
                <div key={rowIndex} className="flex gap-6 group h-[350px]">
                  {/* LEFT IMAGE */}
                  {left && (
                    <div
                      className="relative overflow-hidden bg-gray-100 transition-all duration-500
                      w-1/2 group-hover:w-[40%] hover:w-[60%]"
                    >
                      <img
                        src={left.image}
                        alt={left.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />

                      {left.name && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60">
                          <p className="text-white text-lg">{left.name}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* RIGHT IMAGE */}
                  {right && (
                    <div
                      className="relative overflow-hidden bg-gray-100 transition-all duration-500
                      w-1/2 group-hover:w-[40%] hover:w-[60%]"
                    >
                      <img
                        src={right.image}
                        alt={right.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />

                      {right.name && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60">
                          <p className="text-white text-lg">{right.name}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden px-4 py-10">
        <h2 className="text-3xl font-light mb-4">Featured Brands</h2>

        <p className="text-gray-600 mb-6">
          Discover our curated collection of premium brands that define modern
          luxury.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden bg-gray-100"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover"
              />

              {brand.name && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60">
                  <p className="text-white">{brand.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
