import { motion } from 'motion/react';
import { Upload, Scan, FileCheck, Download } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Media',
    description: 'Upload your video or image files securely through our platform or API.',
    step: '01',
  },
  {
    icon: Scan,
    title: 'AI Analysis',
    description: 'Our advanced AI models analyze facial features, artifacts, and inconsistencies.',
    step: '02',
  },
  {
    icon: FileCheck,
    title: 'Get Results',
    description: 'Receive detailed reports with confidence scores and manipulation indicators.',
    step: '03',
  },
  {
    icon: Download,
    title: 'Export & Share',
    description: 'Download reports, export data, and share results with your team.',
    step: '04',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, fast, and accurate deepfake detection in just four easy steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg z-10 relative">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center z-20">
                    <span className="text-sm font-bold text-indigo-600">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="https://deep-trust.vercel.app/" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg">
            Try It Now - It's Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}