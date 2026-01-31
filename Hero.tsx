import { motion } from 'motion/react';
import { Shield, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">DeepTrust</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">Use Cases</a>
            <a href="https://deep-trust.vercel.app/" className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm mb-6">
              <Shield className="h-4 w-4" />
              <span>Advanced AI Detection Technology</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Detect Deepfakes with Precision
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Protect your content and brand integrity with cutting-edge AI technology that identifies manipulated media in real-time. Stay ahead of misinformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://deep-trust.vercel.app/" className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all hover:scale-105">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">99.7%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Images Analyzed</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njk3MTAxODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Technology"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
            </div>
            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-4 top-1/4 bg-white rounded-lg shadow-xl p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-gray-900">Authentic</span>
              </div>
              <p className="text-xs text-gray-600">No manipulation detected</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-lg shadow-xl p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <span className="text-sm font-semibold text-gray-900">Deepfake</span>
              </div>
              <p className="text-xs text-gray-600">97% confidence level</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}