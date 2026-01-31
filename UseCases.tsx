import { motion } from 'motion/react';
import { Building2, Newspaper, Video, Briefcase, GraduationCap, Users } from 'lucide-react';

const useCases = [
  {
    icon: Newspaper,
    title: 'Media & Journalism',
    description: 'Verify the authenticity of user-generated content and protect your reputation from fake news.',
    image: 'https://images.unsplash.com/photo-1634812932028-3baa37d90b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NzY3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Building2,
    title: 'Enterprise Security',
    description: 'Protect your organization from fraudulent content, phishing attempts, and identity theft.',
    image: 'https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGRpZ2l0YWwlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2OTc5ODQzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Video,
    title: 'Social Media Platforms',
    description: 'Automatically detect and flag manipulated content to maintain platform integrity.',
    image: 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY5NzY3MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Briefcase,
    title: 'Legal & Compliance',
    description: 'Authenticate evidence and digital media for legal proceedings and forensic analysis.',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njk3MTAxODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: GraduationCap,
    title: 'Education & Research',
    description: 'Support academic research and teach students about media literacy and deepfake technology.',
    image: 'https://images.unsplash.com/photo-1634812932028-3baa37d90b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NzY3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Users,
    title: 'Government & Public Sector',
    description: 'Combat misinformation campaigns and protect public figures from malicious deepfakes.',
    image: 'https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGRpZ2l0YWwlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2OTc5ODQzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organizations worldwide rely on our technology to protect against deepfakes and maintain content authenticity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
              </div>
              <div className="relative p-8 min-h-[300px] flex flex-col justify-end">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm w-fit">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-200 leading-relaxed">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}