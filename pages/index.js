import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    { title: 'Save More – 10-15% Commission', desc: 'Lower than UberEats & DoorDash', icon: '💰' },
    { title: 'Competitive Driver Pay', desc: 'Better earnings attract better drivers', icon: '🏍️' },
    { title: 'Premium Experience', desc: 'Modern glass UI with smooth interaction', icon: '✨' },
    { title: 'Full Transparency', desc: 'Clear ratings & tracking visibility', icon: '🔍' },
    { title: 'Faster Delivery', desc: 'Optimized smart dispatch system', icon: '⚡' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
        className="w-full max-w-5xl p-10 bg-white/20 backdrop-blur-lg rounded-3xl mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Deliver Smarter with Wolfie</h1>
        <p className="mb-8">A smarter platform connecting restaurants and drivers in NYC.</p>
        <button className="px-8 py-4 bg-black rounded-full hover:scale-105 transition">
          Be Wolfie
        </button>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
        {features.map((f, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/20 backdrop-blur-md rounded-2xl text-center">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{f.title}</h2>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}