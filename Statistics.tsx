import { motion } from 'motion/react';
import { TrendingUp, Shield, Clock, Users } from 'lucide-react';

const stats = [
  {
    icon: Shield,
    value: '99.7%',
    label: 'Detection Accuracy',
    description: 'Industry-leading precision in identifying deepfakes',
  },
  {
    icon: Users,
    value: '250+',
    label: 'Active Users',
    description: 'Organizations trusting our platform',
  },
  {
    icon: Clock,
    value: '5K+',
    label: 'Files Analyzed',
    description: 'Images scanned to date',
  },
];

export function Statistics() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Proven Results at Scale
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-indigo-100 mb-2">{stat.label}</div>
              <div className="text-indigo-200 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <div className="grid md:grid-cols-1 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-indigo-100">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}