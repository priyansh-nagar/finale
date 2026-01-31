import { motion } from 'motion/react';
import { Zap, Brain, Lock, Clock, BarChart3, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Detection',
    description: 'Advanced neural networks trained on millions of samples to identify even the most sophisticated deepfakes.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Real-Time Analysis',
    description: 'Process videos and images in seconds with our optimized detection algorithms for instant results.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your content is processed with end-to-end encryption and automatically deleted after analysis.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Clock,
    title: 'Batch Processing',
    description: 'Upload and analyze multiple files simultaneously to save time and streamline your workflow.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Detailed Reports',
    description: 'Comprehensive analysis with confidence scores, manipulation indicators, and visual heatmaps.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Globe,
    title: 'API Integration',
    description: 'Seamlessly integrate deepfake detection into your existing platforms with our RESTful API.',
    color: 'from-teal-500 to-blue-500',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Complete Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to detect, analyze, and verify the authenticity of digital media content.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              />
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
